import Image from 'next/image';
import TextAnimation from '@/components/ui/scroll-text';

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-scaler">

        {/* Decorative letter — slow parallax */}
        <div className="about-deco-letter" data-parallax="0.06">dBA</div>

        {/* Photo frame — slides from left */}
        <div className="photo-frame from-left">
          <div className="photo-box">
            <Image
              src="/students.svg"
              alt="Estudantes da dBA Academy"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="photo-caption">
            &ldquo;Rigor técnico. Aplicação prática. Contexto real.&rdquo;
          </div>
        </div>

        {/* Text column */}
        <div className="about-text">
          {/* Title — word by word, upward */}
          <TextAnimation
            as="h2"
            text="Mais do que uma academia. Um activo estratégico."
            classname="s-title"
            direction="up"
            stagger={0.07}
            style={{ marginBottom: '1.5rem' }}
          />

          {/* Pull quote — line by line, from left */}
          <TextAnimation
            as="blockquote"
            text="A dBA Academy nasceu da convicção de que o conhecimento técnico rigoroso, prático e actual é o activo mais valioso de um profissional — e que o acesso a ele transforma carreiras e organizações."
            classname="about-pull"
            direction="left"
            lineAnime={true}
            stagger={0.14}
            style={{ display: 'block' }}
          />

          {/* Body paragraphs — word by word with subtle blur */}
          <TextAnimation
            as="p"
            text="Somos a plataforma de formação e capacitação profissional da dBA, criada para desenvolver competências técnicas, reforçar o rigor no mercado e posicionar a dBA como referência de conhecimento aplicado nas áreas de contabilidade, fiscalidade, finanças e gestão."
            variants={{
              hidden:  { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { ease: [0.16,1,0.3,1], duration: 0.5 } },
            }}
            stagger={0.03}
            style={{ marginBottom: '1rem' }}
            classname=""
          />

          <TextAnimation
            as="p"
            text="Cada programa segue um princípio inegociável: rigor técnico, aplicação prática e contexto real. Trabalhamos com três segmentos distintos — jovens profissionais, profissionais em actividade e executivos — com formatos, cadências e propostas de valor ajustadas a cada etapa de carreira."
            variants={{
              hidden:  { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { ease: [0.16,1,0.3,1], duration: 0.5 } },
            }}
            stagger={0.03}
            style={{ marginBottom: '1rem' }}
            classname=""
          />

          <TextAnimation
            as="p"
            text="A dBA Academy funciona como porta de entrada para novos clientes, plataforma de relacionamento de longo prazo e instrumento de reputação institucional. Cada formando é um passo na construção de um mercado mais rigoroso e competente."
            variants={{
              hidden:  { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { ease: [0.16,1,0.3,1], duration: 0.5 } },
            }}
            stagger={0.03}
            classname=""
          />
        </div>

      </div>
    </section>
  );
}
