import Link from 'next/link';
import Image from 'next/image';
import { programs } from '@/data/programs';
import { ProgramIcon } from '@/components/ui/ProgramIcon';
import TextAnimation from '@/components/ui/scroll-text';

export function Programs() {
  return (
    <section className="programs" id="programas">

      {/* ── MOBILE: simple stacked list ── */}
      <div className="programs-scaler">
        <div className="programs-head fade-up">
          <h2 className="s-title">Formação que prepara para o mundo real</h2>
        </div>
        <div className="programs-mobile-list">
          {programs.slice(0, 3).map((prog, i) => (
            <div key={prog.id} className="prog-mobile-card scale-in" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="prog-mobile-icon" style={{ position: 'relative', overflow: 'hidden' }}>
                {prog.photo ? (
                  <Image
                    src={prog.photo}
                    alt={prog.category}
                    fill
                    sizes="80px"
                    style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: 'inherit' }}
                  />
                ) : (
                  <ProgramIcon iconId={prog.iconId} />
                )}
              </div>
              <div className="prog-mobile-body">
                <div className="prog-cat">{prog.category}</div>
                <h3 className="prog-title">{prog.title}</h3>
                <p className="prog-desc">{prog.description}</p>
                <div className="prog-meta">
                  {prog.meta.map((m) => (
                    <div key={m.label} className="m-item">
                      <span className="m-lbl">{m.label}</span>
                      <span className="m-val">{m.value}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/programas?prog=${prog.id}`} className="prog-hcard-btn" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  Saber Mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: sticky split layout ── */}
      <div className="programs-split">

        {/* Left: sticky section info */}
        <div className="programs-sticky-info">
          <TextAnimation
            as="h2"
            text="Formação que prepara para o mundo real"
            classname="s-title"
            direction="up"
            stagger={0.07}
            style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}
          />

          <p style={{
            fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.82,
            fontWeight: 300, maxWidth: '30ch',
          }}>
            Cada programa é desenhado por especialistas da indústria — teoria, prática e mentoria em cada módulo.
          </p>

          <div className="programs-sticky-meta">
            <div>
              <div className="programs-sticky-stat-n">
                3<em>+</em>
              </div>
              <div className="programs-sticky-stat-l">Programas</div>
            </div>
            <div>
              <div className="programs-sticky-stat-n">3<em>+</em></div>
              <div className="programs-sticky-stat-l">Modalidades</div>
            </div>
          </div>
        </div>

        {/* Right: stacked program cards */}
        <div className="programs-stack-col">
          {programs.slice(0, 3).map((prog, i) => (
            <div className="prog-slot-sticky" key={prog.id}>
              <div className="prog-hcard">

                {/* Visual */}
                <div className="prog-hcard-visual" style={{ position: 'relative', overflow: 'hidden' }}>
                  {prog.photo ? (
                    <Image
                      src={prog.photo}
                      alt={prog.category}
                      fill
                      sizes="320px"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  ) : (
                    <div className="prog-hcard-ico">
                      <ProgramIcon iconId={prog.iconId} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="prog-hcard-body">
                  <div className="prog-hcard-num">
                    0{i + 1} / 0{programs.length}
                  </div>
                  <div className="prog-cat">{prog.category}</div>
                  <h3 className="prog-hcard-title">{prog.title}</h3>
                  <p className="prog-hcard-desc">{prog.description}</p>
                  <div className="prog-meta" style={{ marginBottom: '1.5rem' }}>
                    {prog.meta.map((m) => (
                      <div key={m.label} className="m-item">
                        <span className="m-lbl">{m.label}</span>
                        <span className="m-val">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/programas?prog=${prog.id}`} className="prog-hcard-btn">
                    Saber Mais →
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
