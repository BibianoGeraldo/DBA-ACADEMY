'use client';
import Link from 'next/link';
import TextAnimation from '@/components/ui/scroll-text';

const PROGRAMMES = [
  'Career Starter',
  'Professional Continuous',
  'Executive Briefings',
];

export function CTA() {
  return (
    <section className="cta-band" id="contacto">
      <div className="cta-scaler">

        <div className="cta-center">

          {/* Programme pills */}
          <div className="cta-pills fade-up">
            {PROGRAMMES.map((p) => (
              <span key={p} className="cta-pill">{p}</span>
            ))}
          </div>

          {/* Title */}
          <TextAnimation
            as="h2"
            text="Pronto para crescer com rigor?"
            classname="s-title cta-headline"
            letterAnime={true}
            variants={{
              hidden:  { opacity: 0, y: 22, filter: 'blur(6px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)',
                transition: { ease: [0.16, 1, 0.3, 1], duration: 0.45 } },
            }}
            stagger={0.025}
            style={{ color: 'var(--white)', flexWrap: 'wrap' }}
          />

          {/* Subtitle */}
          <TextAnimation
            as="p"
            text="Há um programa dBA Academy para cada etapa da sua carreira — com rigor técnico, aplicação prática e contexto real."
            lineAnime={true}
            direction="up"
            stagger={0.16}
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.62)',
              lineHeight: '1.85',
              fontWeight: 300,
              fontSize: '1.05rem',
            }}
            classname=""
          />

          {/* CTAs */}
          <div className="cta-actions cta-actions-center fade-up">
            <Link href="/programas" className="btn-white">Ver Programas</Link>
            <Link href="/contacto" className="btn-outline-white">Contacte-nos</Link>
          </div>

        </div>

      </div>
    </section>
  );
}
