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
}

export const programs: Program[] = [
  {
    id: 0,
    num: '01',
    navName: 'Análise de Dados com Python & SQL',
    category: 'Dados & Analytics',
    title: 'Análise de Dados com Python & SQL',
    description:
      'Do zero ao profissional. Aprende a recolher, limpar, analisar e visualizar dados com as ferramentas mais usadas no mercado. Inclui projectos reais e portfólio profissional.',
    badge: 'Mais popular',
    meta: [
      { label: 'Duração', value: '3 meses' },
      { label: 'Modalidade', value: 'Presencial + Online' },
      { label: 'Nível', value: 'Iniciante' },
    ],
    iconId: 'analytics',
  },
  {
    id: 1,
    num: '02',
    navName: 'Power BI & Visualização de Dados',
    category: 'Business Intelligence',
    title: 'Power BI & Visualização de Dados',
    description:
      'Transforma dados em decisões. Cria dashboards impactantes que contam histórias e orientam negócios. Do relatório estático à narrativa visual interactiva.',
    meta: [
      { label: 'Duração', value: '6 semanas' },
      { label: 'Modalidade', value: 'Online' },
      { label: 'Nível', value: 'Todos' },
    ],
    iconId: 'bi',
  },
  {
    id: 2,
    num: '03',
    navName: 'Desenvolvimento Web Moderno',
    category: 'Desenvolvimento',
    title: 'Desenvolvimento Web Moderno',
    description:
      'HTML, CSS, JavaScript e React. Constrói websites e aplicações que impressionam e funcionam. Do design ao deploy, passando por boas práticas e performance.',
    meta: [
      { label: 'Duração', value: '4 meses' },
      { label: 'Modalidade', value: 'Presencial + Online' },
      { label: 'Nível', value: 'Iniciante' },
    ],
    iconId: 'web',
  },
  {
    id: 3,
    num: '04',
    navName: 'Gestão Avançada de Bases de Dados',
    category: 'Bases de Dados',
    title: 'Gestão Avançada de Bases de Dados',
    description:
      'SQL avançado, administração e optimização de bases de dados para o mercado profissional. PostgreSQL, MySQL e técnicas de modelação de dados.',
    meta: [
      { label: 'Duração', value: '2 meses' },
      { label: 'Modalidade', value: 'Presencial' },
      { label: 'Nível', value: 'Intermédio' },
    ],
    iconId: 'database',
  },
  {
    id: 4,
    num: '05',
    navName: 'Fundamentos de Cloud Computing',
    category: 'Cloud & Infra',
    title: 'Fundamentos de Cloud Computing',
    description:
      'AWS, Azure e GCP. Compreende e opera a infraestrutura que suporta o mundo digital. Do servidor físico à arquitectura serverless.',
    meta: [
      { label: 'Duração', value: '6 semanas' },
      { label: 'Modalidade', value: 'Online' },
      { label: 'Nível', value: 'Básico' },
    ],
    iconId: 'cloud',
  },
];
