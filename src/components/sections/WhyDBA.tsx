import { whyItems } from '@/data/whyItems';
import { WhyItemRow } from '@/components/ui/WhyItemRow';

export function WhyDBA() {
  return (
    <section className="why section-why" id="porque">
      <div className="why-scaler">
        <div className="why-photo-col fade-up">
          <div className="why-photo">
            <div className="ph-label">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span>Foto da academia</span>
            </div>
          </div>
          <div className="why-accent">
            <div className="why-accent-n">98<em>%</em></div>
            <div className="why-accent-l">Taxa de satisfação</div>
          </div>
        </div>

        <div className="why-text fade-up" style={{ transitionDelay: '0.12s' }}>
          <div className="s-eyebrow">Porquê DBA</div>
          <h2 className="s-title">O que nos torna diferentes</h2>
          <p>
            Não somos apenas mais uma escola de tecnologia. Somos um ambiente
            construído com cuidado para o teu crescimento real.
          </p>
          <ul className="why-list">
            {whyItems.map((item) => (
              <WhyItemRow key={item.iconId} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
