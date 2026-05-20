'use client';
import { useTypewriter } from '@/hooks/useTypewriter';

export function Hero() {
  const word = useTypewriter();

  return (
    <section className="hero">
      <div className="hero-scaler">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-content fade-up">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Inscrições abertas · Junho 2025
          </div>

          <h1 className="hero-title">
            Com a DBA Academy vais
            <span className="hero-title-dynamic">
              <span>{word}</span>
              <span className="typewriter-cursor" />
            </span>
          </h1>

          <p className="hero-lead">
            A DBA Academy é um espaço pensado para quem quer ir mais longe.
            Formação prática, instrutores experientes, e uma comunidade que
            te apoia em cada passo da jornada.
          </p>

          <div className="hero-actions">
            <a href="#programas" className="btn-primary">Ver Programas</a>
            <a href="#sobre" className="btn-ghost">
              Conhece-nos <span className="arr">→</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-n">500<em>+</em></div>
              <div className="stat-l">Alunos formados</div>
            </div>
            <div>
              <div className="stat-n">12</div>
              <div className="stat-l">Programas activos</div>
            </div>
            <div>
              <div className="stat-n">98<em>%</em></div>
              <div className="stat-l">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
