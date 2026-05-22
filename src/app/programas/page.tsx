import type { Metadata } from 'next';
import { upcomingSessions } from '@/data/upcomingPrograms';
import TextAnimation from '@/components/ui/scroll-text';
import { ProgramasClient } from '@/components/ProgramasClient';

export const metadata: Metadata = {
  title: 'Programas — DBA Academy',
  description:
    'Próximas sessões em Contabilidade, Fiscalidade, Gestão Financeira e Auditoria. Consulte datas, preços em MT e mentores especializados.',
};

interface Props {
  searchParams: Promise<{ prog?: string }>;
}

export default async function ProgramasPage({ searchParams }: Props) {
  const { prog } = await searchParams;
  const initialProg = prog !== undefined && !isNaN(Number(prog)) ? Number(prog) as 0 | 1 | 2 : null;

  return (
    <main className="page-main">
      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <TextAnimation
            as="h1"
            text={upcomingSessions.length > 0 ? 'Próximos Programas' : 'Os Nossos Programas'}
            classname="page-hero-title"
            direction="up"
            stagger={0.07}
          />
          <TextAnimation
            as="p"
            text={upcomingSessions.length > 0
              ? 'Sessões com datas marcadas, turmas pequenas e formadores especializados. Consulte os programas disponíveis e reserve o seu lugar.'
              : 'Formação especializada em contabilidade, fiscalidade e finanças, para o mercado moçambicano. Novas datas em breve.'}
            classname="page-hero-lead"
            lineAnime
            stagger={0.16}
            style={{ display: 'block' }}
          />
          {upcomingSessions.length > 0 && (
            <div className="page-hero-meta">
              <span className="page-hero-badge">
                <span className="hero-tag-dot" />
                {upcomingSessions.length} programa{upcomingSessions.length !== 1 ? 's' : ''} disponíve{upcomingSessions.length !== 1 ? 'is' : 'l'}
              </span>
              <span className="page-hero-cert">✓ Todos incluem Certificado DBA</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Filterable sessions (client) ── */}
      <ProgramasClient initialProg={initialProg} />

      {/* ── CTA ── */}
      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner">
            <div className="prog-cta-text">
              <TextAnimation as="h2" text="Não encontrou o programa certo?" direction="up" stagger={0.07} />
              <TextAnimation
                as="p"
                text="Entre em contacto connosco. Novos programas surgem ao longo do ano e podemos ajudar a encontrar o percurso certo para os seus objectivos profissionais."
                lineAnime stagger={0.16} style={{ display: 'block' }} classname=""
              />
            </div>
            <a href="mailto:info@dbaacademy.co.mz" className="btn-primary">
              Fala connosco
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
