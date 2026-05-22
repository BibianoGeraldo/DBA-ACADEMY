import Image from 'next/image';
import { whyItems } from '@/data/whyItems';
import { WhyItemRow } from '@/components/ui/WhyItemRow';
import TextAnimation from '@/components/ui/scroll-text';

export function WhyDBA() {
  return (
    <section className="why section-why" id="porque">
      <div className="why-scaler">

        {/* Photo column — slides from left + 3D tilt */}
        <div className="why-photo-col from-left">
          <div className="why-photo" data-tilt="7" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/Why.jpg"
              alt="Por que escolher a dBA Academy"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="why-accent float-c">
            <div className="why-accent-n" data-counter="98" data-suffix="%" data-colored="1">
              98<em>%</em>
            </div>
            <div className="why-accent-l">Taxa de satisfação</div>
          </div>
        </div>

        {/* Text column */}
        <div className="why-text">
          {/* Title — word by word, from left */}
          <TextAnimation
            as="h2"
            text="Por que escolher a dBA Academy"
            classname="s-title"
            direction="left"
            stagger={0.09}
            style={{ marginTop: '0.75rem', marginBottom: '1rem' }}
          />

          {/* Lead — line by line, upward blur */}
          <TextAnimation
            as="p"
            text="Não somos uma escola genérica. Somos uma plataforma de conhecimento prático construída para profissionais que operam no mundo real — com rigor, clareza e aplicabilidade em cada programa."
            lineAnime={true}
            variants={{
              hidden:  { opacity: 0, y: 16, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)',
                transition: { ease: [0.16,1,0.3,1], duration: 0.65 } },
            }}
            stagger={0.16}
            style={{ display: 'block', marginBottom: '2.75rem' }}
            classname=""
          />

          <ul className="why-list stagger">
            {whyItems.map((item) => (
              <WhyItemRow key={item.iconId} item={item} />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
