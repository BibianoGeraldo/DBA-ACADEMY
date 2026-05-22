import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { pastSessions, GALLERY_GRADIENTS } from '@/data/pastSessions';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return pastSessions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = pastSessions.find((s) => s.id === id);
  if (!session) return {};
  return {
    title: `${session.programTitle} (${session.dateDisplay}) — DBA Academy`,
    description: session.description,
  };
}

export default async function SessaoPage({ params }: Props) {
  const { id } = await params;
  const session = pastSessions.find((s) => s.id === id);
  if (!session) notFound();

  const sessionSeed = session.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const photos = Array.from({ length: session.photoCount }, (_, i) => ({
    gradient: GALLERY_GRADIENTS[i % GALLERY_GRADIENTS.length],
    wide: i === 0 || i === 4,
    src: `https://picsum.photos/seed/${sessionSeed + i}/800/600`,
  }));

  return (
    <main className="page-main">


      {/* ── Session Hero ── */}
      <section
        className="sess-hero"
        style={{
          background: `linear-gradient(135deg, ${session.gradientFrom} 0%, ${session.gradientTo} 100%)`,
        }}
      >
        <div className="section-inner sess-hero-inner">
          <span className="sess-archive-tag fade-up">Sessão concluída</span>
          <h1 className="sess-hero-title fade-up" style={{ transitionDelay: '0.1s' }}>{session.programTitle}</h1>
          <div className="sess-hero-stats stagger">
            <div className="sess-stat">
              <span className="sess-stat-n">{session.studentsCount}</span>
              <span className="sess-stat-l">Formandos</span>
            </div>
            <div className="sess-stat">
              <span className="sess-stat-n">{session.dateDisplay}</span>
              <span className="sess-stat-l">Período</span>
            </div>
            <div className="sess-stat">
              <span className="sess-stat-n">{session.location}</span>
              <span className="sess-stat-l">Local</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="sess-section">
        <div className="section-inner">
          <div className="sess-overview fade-up">
            <div className="sess-overview-text">
              <h2 className="s-title">Sobre esta sessão</h2>
              <p className="sess-desc">{session.description}</p>
            </div>
            <div className="sess-overview-highlights">
              <div className="sess-hl-label">O que foi abordado</div>
              <ul className="sess-hl-list">
                {session.highlights.map((h) => (
                  <li key={h}>
                    <span className="hl-check">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="sess-cert-note">
                <span>✓</span> Certificados DBA emitidos a todos os concluintes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="sess-gallery-section">
        <div className="section-inner">
          <div className="section-head fade-up">
            <h2 className="s-title">Galeria da Sessão</h2>
            <p className="section-lead">
              Momentos da sessão de {session.dateDisplay}.
            </p>
          </div>
          <div className="sess-gallery">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`sess-photo${photo.wide ? ' wide' : ''} scale-in`}
                style={{
                  transitionDelay: `${i * 0.07}s`,
                  position: 'relative',
                  background: `linear-gradient(145deg, ${photo.gradient[0]} 0%, ${photo.gradient[1]} 100%)`,
                }}
              >
                <Image
                  src={photo.src}
                  alt={`${session.programTitle} — foto ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="sess-photo-overlay" style={{ position: 'relative', zIndex: 1 }}>
                  <span className="sess-photo-num">#{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      {session.hasVideo && (
        <section className="sess-section sess-video-section">
          <div className="section-inner">
            <div className="section-head fade-up">
              <h2 className="s-title">Gravação da Sessão</h2>
            </div>
            <div className="fade-up" style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              <video
                controls
                playsInline
                style={{ width: '100%', display: 'block' }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* ── Testimonial ── */}
      {session.testimonial && (
        <section className="sess-section sess-test-section">
          <div className="section-inner">
            <div className="sess-testimonial fade-up">
              <div className="sess-test-quote">"</div>
              <blockquote className="sess-test-text">
                {session.testimonial.text}
              </blockquote>
              <div className="sess-test-author">
                <div className="sess-test-avatar">
                  {session.testimonial.author.split(' ').map(p => p[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <div className="sess-test-name">{session.testimonial.author}</div>
                  <div className="sess-test-role">{session.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner fade-up">
            <div className="prog-cta-text">
              <h2>Esta sessão já terminou.</h2>
              <p>
                Mas a próxima está a chegar. Consulta as datas disponíveis e
                reserve o seu lugar antes que as vagas se esgotem.
              </p>
            </div>
            <Link href="/programas" className="btn-primary" style={{ background: 'var(--white)', color: 'var(--blue)', borderColor: 'var(--white)' }}>
              Ver próximas sessões
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
