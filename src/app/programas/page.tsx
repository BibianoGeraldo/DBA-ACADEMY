import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { upcomingSessions, formatPrice } from '@/data/upcomingPrograms';
import { pastSessions } from '@/data/pastSessions';
import TextAnimation from '@/components/ui/scroll-text';

export const metadata: Metadata = {
  title: 'Programas — DBA Academy',
  description:
    'Próximas sessões em Contabilidade, Fiscalidade, Gestão Financeira e Auditoria. Consulte datas, preços em MT e mentores especializados.',
};

export default function ProgramasPage() {
  return (
    <main className="page-main">
      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <TextAnimation
            as="h1"
            text={upcomingSessions.length > 0 ? 'Próximos Programas' : 'Os Nossos Programas'}
            classname="page-hero-title"
            direction="up"
            stagger={0.07}
          />
          <TextAnimation
            as="p"
            text={upcomingSessions.length > 0
              ? 'Sessões com datas marcadas, turmas pequenas e formadores especializados. Consulte os programas disponíveis e reserve o seu lugar.'
              : 'Formação especializada em contabilidade, fiscalidade e finanças, para o mercado moçambicano. Novas datas em breve.'}
            classname="page-hero-lead"
            lineAnime
            stagger={0.16}
            style={{ display: 'block' }}
          />
          {upcomingSessions.length > 0 && (
            <div className="page-hero-meta">
              <span className="page-hero-badge">
                <span className="hero-tag-dot" />
                {upcomingSessions.length} programa{upcomingSessions.length !== 1 ? 's' : ''} disponíve{upcomingSessions.length !== 1 ? 'is' : 'l'}
              </span>
              <span className="page-hero-cert">✓ Todos incluem Certificado DBA</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Upcoming Sessions ── */}
      {upcomingSessions.length > 0 && (
        <section className="section-upcoming">
          <div className="section-inner">
            <div className="section-head">
              <TextAnimation as="h2" text="Próximas Sessões" classname="s-title" direction="up" stagger={0.08} />
              <TextAnimation as="p" text="Datas confirmadas. Vagas limitadas. Clica num programa para ver todos os detalhes." lineAnime stagger={0.16} style={{ display: 'block' }} classname="section-lead" />
            </div>

            <div className="uc-grid">
              {upcomingSessions.map((session, i) => {
                const displayPrice = session.earlyBirdPrice ?? session.price;

                return (
                  <Link key={session.id} href={`/programas/${session.id}`} className="uc-card scale-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                    {session.badge && <span className="uc-badge">{session.badge}</span>}

                    <div className="uc-top">
                      <span className="uc-cat">{session.category}</span>
                      <span className={`uc-modality mod-${session.modality === 'Online' ? 'online' : session.modality === 'Presencial' ? 'presencial' : 'hibrido'}`}>
                        {session.modality}
                      </span>
                    </div>

                    <h3 className="uc-title">{session.programTitle}</h3>

                    <div className="uc-facts">
                      <div className="uc-fact">
                        <span className="uc-fact-icon">📅</span>
                        <span>{session.dateDisplay}</span>
                      </div>
                      <div className="uc-fact">
                        <span className="uc-fact-icon">⏱</span>
                        <span>{session.weeklySchedule}</span>
                      </div>
                      <div className="uc-fact">
                        <span className="uc-fact-icon">📍</span>
                        <span>{session.location}</span>
                      </div>
                    </div>

                    <div className="uc-price-row">
                      <div className="uc-price">
                        <span className="uc-price-cur">MZN</span>
                        <span className="uc-price-n">{displayPrice.toLocaleString('pt-MZ')}</span>
                        {session.earlyBirdPrice && (
                          <span className="uc-eb">Early Bird</span>
                        )}
                      </div>
                    </div>

                    <div className="uc-limited-badge">
                      <span className="uc-limited-dot" />
                      Vagas limitadas
                    </div>

                    <div className="uc-mentor-mini">
                      <div className={`uc-mentor-avatar${session.mentorPhoto ? ' uc-mentor-avatar-photo' : ''}`}>
                        {session.mentorPhoto ? (
                          <Image
                            src={session.mentorPhoto}
                            alt={session.mentorName}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top center' }}
                          />
                        ) : (
                          session.mentorName.split(' ').map((p: string) => p[0]).slice(0, 2).join('')
                        )}
                      </div>
                      <div className="uc-mentor-label">
                        <span className="uc-mentor-by">Formador</span>
                        <span className="uc-mentor-name">{session.mentorName}</span>
                      </div>
                    </div>

                    <div className="uc-action">
                      Ver detalhes
                      <span className="uc-arrow">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Past Sessions ── */}
      <section className="section-past">
        <div className="section-inner">
          <div className="section-head">
            <TextAnimation as="h2" text="Sessões Anteriores" classname="s-title" direction="left" stagger={0.09} />
            <TextAnimation as="p" text="Mais de 100 formandos já passaram pela DBA Academy. Aqui ficam os registos das nossas sessões." lineAnime stagger={0.16} style={{ display: 'block' }} classname="section-lead" />
          </div>

          <div className="past-grid">
            {pastSessions.map((session, i) => (
              <Link key={session.id} href={`/sessoes/${session.id}`} className="past-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div
                  className="past-photo"
                  style={{
                    position: 'relative',
                    background: `linear-gradient(145deg, ${session.gradientFrom} 0%, ${session.gradientTo} 100%)`,
                  }}
                >
                  {session.photo && (
                    <Image
                      src={session.photo}
                      alt={session.programTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  )}
                  <span className="past-cat-tag" style={{ position: 'relative', zIndex: 1 }}>{session.category}</span>
                  <div className="past-students-badge" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="past-students-n">{session.studentsCount}</span>
                    <span className="past-students-l">formandos</span>
                  </div>
                </div>
                <div className="past-body">
                  <h3 className="past-title">{session.programTitle}</h3>
                  <div className="past-date-loc">
                    <span>{session.dateDisplay}</span>
                    <span className="past-sep">·</span>
                    <span>{session.location}</span>
                  </div>
                  {session.testimonial && (
                    <p className="past-testimonial-snippet">
                      "{session.testimonial.text.slice(0, 80)}…"
                    </p>
                  )}
                  <span className="past-see-more">Ver sessão →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner">
            <div className="prog-cta-text">
              <TextAnimation as="h2" text="Não encontrou o programa certo?" direction="up" stagger={0.07} />
              <TextAnimation
                as="p"
                text="Entre em contacto connosco. Novos programas surgem ao longo do ano e podemos ajudar a encontrar o percurso certo para os seus objectivos profissionais."
                lineAnime stagger={0.16} style={{ display: 'block' }} classname=""
              />
            </div>
            <a href="mailto:info@dbaacademy.co.mz" className="btn-primary">
              Fala connosco
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
