export interface ProgramMeta {
  label: string;
  value: string;
}

export interface Program {
  id: number;
  num: string;
  navName: string;
  category: string;
  title: string;
  description: string;
  badge?: string;
  meta: ProgramMeta[];
  iconId: 'analytics' | 'bi' | 'web' | 'database' | 'cloud';
  photo?: string;
}

export const programs: Program[] = [
  {
    id: 0,
    num: '01',
    navName: 'Career Starter Programme',
    category: 'Jovens Profissionais',
    title: 'Career Starter Programme',
    description:
      'Cursos intensivos para recém-licenciados e jovens profissionais (0–3 anos). Contabilidade, fiscalidade e finanças aplicadas ao mercado real — com certificado da dBA Academy e foco em empregabilidade.',
    meta: [
      { label: 'Duração', value: '8–12 semanas' },
      { label: 'Modalidade', value: 'Online ao vivo' },
      { label: 'Cadência', value: '4 edições/ano' },
    ],
    iconId: 'analytics',
    photo: '/JoveEstudante.jpg',
  },
  {
    id: 1,
    num: '02',
    navName: 'Professional Continuous Programme',
    category: 'Profissionais em Actividade',
    title: 'Professional Continuous Programme',
    description:
      'Formação contínua cíclica para profissionais de nível médio e sénior. Actualização técnica, especialização e redução de risco fiscal — com aplicação directa no trabalho. Ciclos de 2 a 3 meses, presencial e online.',
    meta: [
      { label: 'Duração', value: 'Ciclos de 2–3 meses' },
      { label: 'Modalidade', value: 'Presencial + Online' },
      { label: 'Cadência', value: '3–4 ciclos/ano' },
    ],
    iconId: 'bi',
    photo: '/EmActividade.jpg',
  },
  {
    id: 2,
    num: '03',
    navName: 'Executive Briefings',
    category: 'Executivos & Direcção',
    title: 'Executive Briefings',
    description:
      'Sessões estratégicas de alto impacto para sócios, administradores, CFOs e directores. Risco fiscal, compliance e decisão informada — em formato presencial, grupos pequenos, 2 a 4 horas.',
    meta: [
      { label: 'Duração', value: '2–4 horas' },
      { label: 'Modalidade', value: 'Presencial' },
      { label: 'Cadência', value: '2–3 sessões/ano' },
    ],
    iconId: 'database',
    photo: '/Directors.jpg',
  },
];
