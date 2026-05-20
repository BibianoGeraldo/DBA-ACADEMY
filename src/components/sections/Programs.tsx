import { programs } from '@/data/programs';
import { ProgramCard } from '@/components/ui/ProgramCard';

export function Programs() {
  return (
    <section className="programs" id="programas">
      <div className="programs-scaler">
        <div className="programs-split">

          <div className="programs-text-col">
            <div className="s-eyebrow">Os Nossos Programas</div>
            <h2 className="s-title">
              Formação que prepara<br />para o mundo real
            </h2>
            <p className="prog-lead">
              Cada programa é desenhado por especialistas da indústria e orientado para o mercado
              real — teoria, prática e mentoria em cada módulo.
            </p>
            <ul className="prog-nav">
              {programs.map((prog, i) => (
                <li
                  key={prog.id}
                  className={`prog-nav-item${i === 0 ? ' active' : ''}`}
                  data-prog-nav={i}
                >
                  <span className="prog-nav-num">{prog.num}</span>
                  <span className="prog-nav-name">{prog.navName}</span>
                  <span className="prog-nav-bar" />
                </li>
              ))}
            </ul>
          </div>

          <div className="programs-cards-col">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="prog-slot"
                data-prog-slot={prog.id}
              >
                <ProgramCard program={prog} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
