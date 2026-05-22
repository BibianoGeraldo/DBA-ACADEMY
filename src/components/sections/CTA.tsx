import Link from 'next/link';
import TextAnimation from '@/components/ui/scroll-text';

export function CTA() {
  return (
    <section className="cta-band" id="contacto">
      <div className="cta-scaler">

        {/* Text column */}
        <div className="cta-text from-left">
          {/* Title — letter-by-letter (most dramatic section, warrants it) */}
          <TextAnimation
            as="h2"
            text="Pronto para crescer com rigor?"
            classname="s-title"
            letterAnime={true}
            variants={{
              hidden:  { opacity: 0, y: 22, filter: 'blur(6px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)',
                transition: { ease: [0.16, 1, 0.3, 1], duration: 0.45 } },
            }}
            stagger={0.025}
            style={{
              color: 'var(--white)',
              marginTop: '0.75rem',
              marginBottom: '1.35rem',
              flexWrap: 'wrap',
            }}
          />

          {/* Subtext — line by line, from right */}
          <TextAnimation
            as="p"
            text="As inscrições estão abertas. Career Starter, Professional Continuous ou Executive Briefings — há um programa dBA Academy para cada etapa da sua carreira. Com rigor, clareza e aplicabilidade."
            lineAnime={true}
            direction="right"
            stagger={0.18}
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '1.88',
              fontWeight: 300,
              fontSize: '1rem',
              maxWidth: '46ch',
              marginBottom: '2.5rem',
            }}
            classname=""
          />

          <div className="cta-actions">
            <Link href="/programas" className="btn-white">Inscreva-se Agora</Link>
            <Link href="/contacto" className="btn-outline-white">Contacte-nos</Link>
          </div>
        </div>

        {/* Visual block */}
        <div className="cta-visual scale-in" style={{ transitionDelay: '0.18s' }}>
          <div className="cta-visual-badge">
            <span className="cta-visual-dot" />
            Inscrições abertas
          </div>

          <div className="cta-visual-date-row">
            <div className="cta-visual-date-block">
              <div className="cta-visual-label">Próxima turma</div>
              <div className="cta-visual-n">2026</div>
            </div>
            <div className="cta-visual-divider" />
            <div className="cta-visual-date-block">
              <div className="cta-visual-label">Duração</div>
              <div className="cta-visual-n2">8 semanas</div>
            </div>
          </div>

          <div className="cta-visual-spots">
            <div className="cta-visual-spots-header">
              <span>Vagas disponíveis</span>
              <span className="cta-visual-spots-count">6 / 20</span>
            </div>
            <div className="cta-visual-bar">
              <div className="cta-visual-bar-fill" style={{ width: '70%' }} />
            </div>
            <div className="cta-visual-spots-note">70% das vagas preenchidas</div>
          </div>

          <Link href="/programas" className="cta-visual-cta">
            Reservar lugar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
