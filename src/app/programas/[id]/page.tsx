import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { upcomingSessions, formatPrice, getSpotsPercentage } from '@/data/upcomingPrograms';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return upcomingSessions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = upcomingSessions.find((s) => s.id === id);
  if (!session) return {};
  return {
    title: `${session.programTitle} — dBA Academy`,
    description: session.description,
  };
}

function MentorAvatar({ name, photo, size = 'md' }: { name: string; photo?: string; size?: 'md' | 'lg' }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  if (photo) {
    return (
      <div className={`pd-mentor-photo pd-mentor-photo-${size}`}>
        <Image src={photo} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div className={`pd-mentor-photo pd-mentor-photo-${size} pd-mentor-initials`}>
      {initials}
    </div>
  );
}

export default async function ProgramDetailPage({ params }: Props) {
  const { id } = await params;
  const session = upcomingSessions.find((s) => s.id === id);
  if (!session) notFound();

  const mailSubject = encodeURIComponent(`Inscrição — ${session.programTitle} (${session.dateDisplay})`);
  const mailHref = `mailto:info@dbaacademy.co.mz?subject=${mailSubject}`;

  return (
    <main className="page-main">



      {/* ── Page Hero ── */}
      <section className="pd-hero">
        <div className="section-inner pd-hero-inner">
          <div className="pd-hero-content from-left">
            <div className="pd-hero-chips">
              <span className="upcoming-cat">{session.category}</span>
              <span className={`upcoming-modality modality-${session.modality === 'Online' ? 'online' : session.modality === 'Presencial' ? 'presencial' : 'híbrido'}`}>
                {session.modality}
              </span>
              {session.badge && <span className="uc-badge-inline">{session.badge}</span>}
            </div>
            <h1 className="pd-hero-title">{session.programTitle}</h1>
            <p className="pd-hero-desc">{session.description}</p>
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <div className="pd-layout">
        <div className="section-inner pd-layout-inner">

          {/* ── Left: Main content ── */}
          <div className="pd-content">

            {/* ── O que vais aprender ── */}
            <div className="pd-section fade-up">
              <h2 className="pd-section-title">O que irá aprender</h2>

              <div className="pd-learning-body">
                {session.learningBody.map((para, i) => (
                  <div key={i} className="pd-learning-item">{para}</div>
                ))}
              </div>

              {/* Skill badges */}
              <div className="pd-badge-block">
                <span className="pd-badge-block-label">Competências adquiridas</span>
                <div className="pd-badge-cloud stagger">
                  {session.skillBadges.map((b) => (
                    <span key={b} className="pd-skill-badge">{b}</span>
                  ))}
                </div>
              </div>

              {/* Tool badges */}
              <div className="pd-badge-block">
                <span className="pd-badge-block-label">Ferramentas e recursos abordados</span>
                <div className="pd-badge-cloud stagger">
                  {session.toolBadges.map((t) => (
                    <span key={t} className="pd-tool-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Detalhes da sessão ── */}
            <div className="pd-section fade-up">
              <h2 className="pd-section-title">Detalhes da sessão</h2>
              <div className="pd-details-grid">
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Data de início</span>
                  <span className="pd-detail-value">{session.dateDisplay}</span>
                </div>
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Horário semanal</span>
                  <span className="pd-detail-value">{session.weeklySchedule}</span>
                </div>
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Local</span>
                  <span className="pd-detail-value">{session.location}</span>
                </div>
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Endereço</span>
                  <span className="pd-detail-value">{session.address}</span>
                </div>
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Modalidade</span>
                  <span className="pd-detail-value">{session.modality}</span>
                </div>
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Idioma de ensino</span>
                  <span className="pd-detail-value pd-detail-value-lang">
                    <span className="pd-lang-flag">🇲🇿</span>
                    {session.language}
                  </span>
                </div>
                <div className="pd-detail-item">
                  <span className="pd-detail-label">Vagas</span>
                  <span className="pd-detail-value">Limitadas</span>
                </div>
              </div>
            </div>

            {/* ── Quem vai ensinar ── */}
            <div className="pd-section fade-up">
              <h2 className="pd-section-title">Quem vai ensinar</h2>
              <div className="pd-mentor-card pd-mentor-card-rich">
                <MentorAvatar name={session.mentorName} photo={session.mentorPhoto} size="lg" />
                <div className="pd-mentor-info">
                  <div className="pd-mentor-name">{session.mentorName}</div>
                  <div className="pd-mentor-role">{session.mentorRole}</div>
                  <p className="pd-mentor-bio">{session.mentorBio}</p>
                  {session.mentorLinkedIn && (
                    <a
                      href={session.mentorLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pd-mentor-linkedin"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Ver perfil no LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ── Certificado ── */}
            <div className="pd-section fade-up">
              <h2 className="pd-section-title">Certificado</h2>
              <div className="pd-cert-block pd-cert-block-rich">
                <div className="pd-cert-visual">
                  <div className="pd-cert-seal">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                      <circle cx="24" cy="24" r="22" stroke="rgba(17,191,116,0.5)" strokeWidth="1.5"/>
                      <path d="M24 10l3.6 7.2 7.9 1.15-5.75 5.6 1.36 7.9L24 28.1l-7.11 3.75 1.36-7.9L12.5 18.35l7.9-1.15z" stroke="rgba(17,191,116,0.9)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                      <circle cx="24" cy="38" r="4" fill="none" stroke="rgba(17,191,116,0.7)" strokeWidth="1.5"/>
                      <path d="M20.5 41.5l1.2 3.5h4.6l1.2-3.5" stroke="rgba(17,191,116,0.7)" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
                <div className="pd-cert-info">
                  <div className="pd-cert-title">Certificado dBA Academy</div>
                  <p className="pd-cert-desc">
                    {session.certificateBody ?? 'Todos os participantes que concluírem o programa recebem um certificado digital verificável emitido pela dBA Academy.'}
                  </p>
                  <div className="pd-cert-features">
                    <span className="pd-cert-feature-tag">✓ Verificação por QR Code</span>
                    <span className="pd-cert-feature-tag">✓ Formato digital PDF</span>
                    <span className="pd-cert-feature-tag">✓ Link de partilha único</span>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* end pd-content */}

          {/* ── Right: Registration sidebar ── */}
          <aside className="pd-sidebar">
            <div className="pd-register-card scale-in">
              <div className="pd-register-label">Próxima sessão</div>
              <div className="pd-register-date">{session.dateDisplay}</div>

              <div className="pd-price-block">
                {session.earlyBirdPrice ? (
                  <>
                    <div className="pd-price-main">
                      <span className="pd-price-cur">MZN</span>
                      <span className="pd-price-n">{session.earlyBirdPrice.toLocaleString('pt-MZ')}</span>
                    </div>
                    <div className="pd-price-row2">
                      <span className="pd-eb-badge">Early Bird</span>
                      <span className="pd-price-regular">Regular: {formatPrice(session.price)}</span>
                    </div>
                    {session.earlyBirdDeadline && (
                      <p className="pd-eb-note">Preço válido até {session.earlyBirdDeadline}</p>
                    )}
                  </>
                ) : (
                  <div className="pd-price-main">
                    <span className="pd-price-cur">MZN</span>
                    <span className="pd-price-n">{session.price.toLocaleString('pt-MZ')}</span>
                  </div>
                )}
              </div>

              <a href={mailHref} className="btn-primary pd-cta">
                Reservar lugar
              </a>

              <div className="pd-register-footer">
                <span>Pagamento via M-Pesa · e-Mola · Transferência</span>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* ── Other Programs ── */}
      {upcomingSessions.filter((s) => s.id !== session.id).length > 0 && (
        <section className="pd-other-section">
          <div className="section-inner">
            <div className="section-head fade-up">
              <h2 className="s-title">Outras Sessões Disponíveis</h2>
            </div>
            <div className="uc-grid uc-grid-sm stagger">
              {upcomingSessions
                .filter((s) => s.id !== session.id)
                .map((s) => {
                  const spotsP = getSpotsPercentage(s.spotsAvailable, s.spotsTotal);
                  const price = s.earlyBirdPrice ?? s.price;
                  return (
                    <Link key={s.id} href={`/programas/${s.id}`} className="uc-card">
                      {s.badge && <span className="uc-badge">{s.badge}</span>}
                      <div className="uc-top">
                        <span className="uc-cat">{s.category}</span>
                        <span className={`uc-modality mod-${s.modality === 'Online' ? 'online' : s.modality === 'Presencial' ? 'presencial' : 'hibrido'}`}>
                          {s.modality}
                        </span>
                      </div>
                      <h3 className="uc-title">{s.programTitle}</h3>
                      <div className="uc-facts">
                        <div className="uc-fact">
                          <span className="uc-fact-icon">📅</span>
                          <span>{s.dateDisplay}</span>
                        </div>
                        <div className="uc-fact">
                          <span className="uc-fact-icon">📍</span>
                          <span>{s.location}</span>
                        </div>
                      </div>
                      <div className="spots-bar" style={{ marginTop: '0.25rem' }}>
                        <div className="spots-fill" style={{ width: `${spotsP}%` }} />
                      </div>
                      <div className="uc-price-row">
                        <div className="uc-price">
                          <span className="uc-price-cur">MZN</span>
                          <span className="uc-price-n">{price.toLocaleString('pt-MZ')}</span>
                          {s.earlyBirdPrice && <span className="uc-eb">Early Bird</span>}
                        </div>
                      </div>
                      <div className="uc-action">Ver detalhes <span className="uc-arrow">→</span></div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
