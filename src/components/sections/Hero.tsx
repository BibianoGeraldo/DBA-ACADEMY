'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTypewriter } from '@/hooks/useTypewriter';
import TextAnimation from '@/components/ui/scroll-text';

export function Hero() {
  const word = useTypewriter();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  return (
    <section className="hero">
      <div className="hero-scaler">
        {showVideo && (
          <video className="hero-video" autoPlay muted loop playsInline preload="none">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero-overlay" />

        <div className="hero-content">

          {/* Tag */}
          <div className="hero-l1">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Novo ciclo · 2026
            </div>
          </div>

          {/* Static prefix + typewriter — CSS load animation */}
          <div className="hero-l2">
            <h1 className="hero-title">
              Formação especializada em
              <span className="hero-title-dynamic">
                <span>{word}</span>
                <span className="typewriter-cursor" />
              </span>
            </h1>
          </div>

          {/* Lead — word-by-word blur-fade via TextAnimation */}
          <div className="hero-l3">
            <TextAnimation
              as="p"
              text="A dBA Academy é a plataforma de formação profissional da dBA — conhecimento técnico actual, prático e aplicável em contabilidade, fiscalidade, finanças e gestão."
              classname="hero-lead"
              variants={{
                hidden:  { opacity: 0, filter: 'blur(8px)', y: 12 },
                visible: { opacity: 1, filter: 'blur(0px)', y: 0,
                  transition: { ease: 'linear', duration: 0.35 } },
              }}
              stagger={0.04}
            />
          </div>

          {/* CTA buttons */}
          <div className="hero-l4 hero-actions">
            <Link href="/programas" className="btn-primary">Ver Programas</Link>
            <a href="#sobre" className="btn-ghost">
              Sobre nós <span className="arr">→</span>
            </a>
          </div>

          {/* Stats — counter-animated */}
          <div className="hero-l5 hero-stats">
            <div>
              <div className="stat-n" data-counter="3" data-suffix="+" data-colored="1">
                3<em>+</em>
              </div>
              <div className="stat-l">Programas</div>
            </div>
            <div>
              <div className="stat-n" data-counter="4">4</div>
              <div className="stat-l">Pilares</div>
            </div>
            <div>
              <div className="stat-n" data-counter="100" data-suffix="%" data-colored="1">
                100<em>%</em>
              </div>
              <div className="stat-l">Aplicado</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
