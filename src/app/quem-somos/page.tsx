import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { team } from '@/data/team';
import TextAnimation from '@/components/ui/scroll-text';

export const metadata: Metadata = {
  title: 'Quem Somos — DBA Academy',
  description:
    'Conheça a equipa por trás da DBA Academy: a nossa missão, visão, valores e as pessoas que tornam a formação possível.',
};

const VALUES = [
  {
    title: 'Excelência Prática',
    desc: 'Não ensinamos teoria pela teoria. Cada conceito é aplicado a um problema real, com ferramentas que o mercado usa hoje.',
  },
  {
    title: 'Proximidade',
    desc: 'Turmas pequenas, instrutores acessíveis e uma comunidade que se conhece pelo nome. Não és um número.',
  },
  {
    title: 'Relevância Local',
    desc: 'Os nossos casos de uso vêm de Moçambique e África. Formamos para o mercado que conhecemos.',
  },
  {
    title: 'Impacto Duradouro',
    desc: 'O certificado é o início, não o fim. Investimos no desenvolvimento profissional dos nossos alumni muito além do encerramento do programa.',
  },
];

const MILESTONES = [
  { year: '2021', label: 'Fundação', desc: 'A DBA Academy nasce em Maputo com o primeiro programa de Contabilidade Geral & PGC.' },
  { year: '2022', label: 'Crescimento', desc: 'Lançamento dos programas de Fiscalidade Moçambicana e Excel para Contabilidade. Primeiros 100 alumni.' },
  { year: '2023', label: 'Expansão', desc: 'Novos programas de Gestão Financeira e Auditoria. Primeiras parcerias com empresas do sector privado.' },
  { year: '2024', label: 'Online', desc: 'Modalidade online lançada. Formandos de 5 províncias moçambicanas a frequentar sessões em simultâneo.' },
  { year: '2025', label: 'Hoje', desc: 'Mais de 400 alumni. 5 programas activos. Referência em formação fiscal e contabilística em Moçambique.' },
];


export default function QuemSomosPage() {
  return (
    <main className="page-main">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <TextAnimation
            as="h1"
            text="Nascemos para elevar o padrão da formação fiscal e contabilística"
            classname="page-hero-title"
            direction="up"
            stagger={0.06}
          />
          <TextAnimation
            as="p"
            text="A DBA Academy é uma instituição moçambicana de formação especializada em contabilidade, fiscalidade e finanças. Acreditamos que a formação de qualidade é o alicerce de qualquer organização sólida — e que o acesso a ela deve ser amplo, prático e relevante para o mercado."
            classname="page-hero-lead"
            lineAnime
            stagger={0.16}
            style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* ── Missão & Visão ── */}
      <section className="qs-mv-section">
        <div className="section-inner">
          <div className="qs-mv-grid">
            <div className="qs-mv-card qs-mv-mission from-left">
              <div className="qs-mv-icon">◎</div>
              <h2>Missão</h2>
              <p>
                Democratizar o acesso à formação fiscal e contabilística de alta qualidade em Moçambique,
                desenvolvendo profissionais que constroem organizações sólidas e cumpridoras das suas
                obrigações com rigor e confiança.
              </p>
            </div>
            <div className="qs-mv-card qs-mv-vision from-right">
              <div className="qs-mv-icon">◈</div>
              <h2>Visão</h2>
              <p>
                Ser a principal referência de formação fiscal, contabilística e financeira em Moçambique — reconhecida
                pela qualidade dos alumni, pela relevância dos programas e pelo impacto mensurável
                no desempenho das organizações e das carreiras dos nossos formandos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="qs-values-section">
        <div className="section-inner">
          <div className="section-head">
            <TextAnimation as="h2" text="Os nossos valores" classname="s-title" direction="left" stagger={0.09} />
          </div>
          <div className="qs-values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="qs-value-card scale-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="qs-value-num">0{i + 1}</span>
                <h3 className="qs-value-title">{v.title}</h3>
                <p className="qs-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Nossa Equipa ── */}
      <section className="qs-team-section">
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 3.5rem' }}>
            <TextAnimation as="h2" text="Quem está por trás" classname="s-title" direction="up" stagger={0.08} style={{ justifyContent: 'center' }} />
            <TextAnimation
              as="p"
              text="Instrutores com experiência real no mercado, que escolheram partilhar o que sabem com a próxima geração de profissionais moçambicanos."
              lineAnime
              stagger={0.16}
              style={{ display: 'block', margin: '0.75rem auto 0' }}
              classname=""
            />
          </div>
          <div className="qs-team-grid">
            {team.map((member, i) => (
              <div key={member.name} className="qs-team-card scale-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="qs-team-avatar-wrap">
                  <div className={`qs-team-avatar${member.photo ? ' qs-team-avatar-photo' : ''}`}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={120}
                        height={120}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                      />
                    ) : (
                      member.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
                    )}
                  </div>
                  {member.linkedIn && (
                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="qs-team-li-btn" aria-label={`LinkedIn de ${member.name}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <div className="qs-team-name">{member.name}</div>
                <div className="qs-team-role">{member.role}</div>
                <p className="qs-team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Linha do Tempo ── */}
      <section className="qs-timeline-section">
        <div className="section-inner">
          <div className="section-head">
            <TextAnimation as="h2" text="De onde viemos" classname="s-title" direction="up" stagger={0.09} />
          </div>
          <div className="qs-timeline">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`qs-milestone${i === MILESTONES.length - 1 ? ' qs-milestone-last' : ''} from-left`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="qs-ms-connector">
                  <div className="qs-ms-node">{m.year}</div>
                  {i < MILESTONES.length - 1 && <div className="qs-ms-line" />}
                </div>
                <div className="qs-ms-body">
                  <div className="qs-ms-label">{m.label}</div>
                  <p className="qs-ms-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner">
            <div className="prog-cta-text">
              <TextAnimation as="h2" text="Invista no seu desenvolvimento profissional" direction="up" stagger={0.07} />
              <TextAnimation
                as="p"
                text="Junte-se aos mais de 400 alumni que já elevaram o seu nível profissional com a DBA Academy. O próximo passo começa aqui."
                lineAnime
                stagger={0.18}
                style={{ display: 'block' }}
                classname=""
              />
            </div>
            <Link href="/programas" className="btn-primary">
              Ver programas
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
