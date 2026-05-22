export interface PastSession {
  id: string;
  programTitle: string;
  category: string;
  dateDisplay: string;
  location: string;
  studentsCount: number;
  iconId: 'analytics' | 'bi' | 'web' | 'database' | 'cloud';
  gradientFrom: string;
  gradientTo: string;
  description: string;
  highlights: string[];
  photo?: string;
  photoCount: number;
  hasVideo: boolean;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const pastSessions: PastSession[] = [
  {
    id: 'contabilidade-geral-jan25',
    programTitle: 'Contabilidade Geral & PGC-NIRF',
    category: 'Contabilidade',
    dateDisplay: 'Jan — Abr 2025',
    location: 'Maputo',
    studentsCount: 18,
    iconId: 'analytics',
    gradientFrom: 'rgba(1,101,221,0.15)',
    gradientTo: 'rgba(17,191,116,0.08)',
    description:
      'Três meses intensivos onde 18 profissionais passaram dos fundamentos ao domínio completo da escrituração contabilística segundo o PGC-NIRF. A turma incluiu técnicos de contabilidade, assistentes financeiros e empreendedores que queriam gerir melhor as suas empresas.',
    highlights: [
      'PGC-NIRF — estrutura, classes de contas e codificação',
      'Escrituração diária e lançamentos contabilísticos',
      'Balancetes de verificação e encerramento de contas',
      'Demonstrações financeiras — Balanço e DR',
      'Certificado DBA emitido a todos os concluintes',
    ],
    photo: '/Contabilidade.jpg',
    photoCount: 8,
    hasVideo: true,
    testimonial: {
      text: 'Finalmente entendo o que está por trás de cada lançamento contabilístico. Em 3 meses passei de confuso a confiante. Já consigo gerir a contabilidade da minha empresa.',
      author: 'Ana Cumbe',
      role: 'Empreendedora · Maputo',
    },
  },
  {
    id: 'fiscalidade-fev25',
    programTitle: 'Fiscalidade Moçambicana',
    category: 'Fiscalidade',
    dateDisplay: 'Fev — Mar 2025',
    location: 'Maputo',
    studentsCount: 22,
    iconId: 'bi',
    gradientFrom: 'rgba(1,101,221,0.10)',
    gradientTo: 'rgba(0,229,255,0.06)',
    description:
      'A maior turma de Fiscalidade que realizámos até à data — 22 profissionais de todo o país. Dois meses de IVA, IRPS, IRPC e calendário fiscal. Todos os participantes saíram capazes de apurar e submeter declarações fiscais correctamente.',
    highlights: [
      'IVA — apuramento, isenções e direito à dedução',
      'IRPS e IRPC — cálculo, retenções e pagamentos por conta',
      'Calendário fiscal e prazos declarativos',
      'Simulações com declarações reais da AT',
      'Gestão de coimas e procedimentos de reclamação',
    ],
    photo: '/Fiscalidade.jpg',
    photoCount: 6,
    hasVideo: false,
  },
  {
    id: 'gestao-financeira-out24',
    programTitle: 'Gestão Financeira & Tesouraria',
    category: 'Finanças',
    dateDisplay: 'Out — Nov 2024',
    location: 'Online',
    studentsCount: 20,
    iconId: 'web',
    gradientFrom: 'rgba(17,191,116,0.12)',
    gradientTo: 'rgba(1,101,221,0.06)',
    description:
      'Seis semanas online sobre análise financeira, orçamentação e gestão de tesouraria. Os participantes construíram modelos financeiros reais ao longo do programa e saíram com ferramentas práticas aplicáveis imediatamente nas suas organizações.',
    highlights: [
      'Análise de demonstrações financeiras',
      'Orçamentação operacional e financeira',
      'Mapas de tesouraria e previsão de fluxo de caixa',
      'Indicadores financeiros (liquidez, rentabilidade)',
      'Modelos Excel financeiros prontos a usar',
    ],
    photo: '/Financas.jpg',
    photoCount: 5,
    hasVideo: true,
    testimonial: {
      text: 'Construí o meu primeiro orçamento empresarial estruturado e hoje já consigo detectar problemas de tesouraria antes que se tornem crises.',
      author: 'Jorge Sitoe',
      role: 'Gestor Financeiro · Beira',
    },
  },
  {
    id: 'auditoria-set24',
    programTitle: 'Auditoria & Controlo Interno',
    category: 'Auditoria',
    dateDisplay: 'Set — Out 2024',
    location: 'Maputo',
    studentsCount: 12,
    iconId: 'database',
    gradientFrom: 'rgba(1,101,221,0.08)',
    gradientTo: 'rgba(0,40,60,0.12)',
    description:
      'Dois meses de mergulho profundo em auditoria financeira e controlo interno. Turma pequena de 12 profissionais com base contabilística que queriam especializar-se em auditoria. Foco em normas ISA, papéis de trabalho e avaliação de risco.',
    highlights: [
      'Normas ISA — estrutura e aplicação prática',
      'Avaliação de risco e materialidade',
      'Papéis de trabalho e documentação de auditoria',
      'Concepção de sistemas de controlo interno',
      'Relatório de auditoria e recomendações',
    ],
    photo: '/Auditoria.jpg',
    photoCount: 5,
    hasVideo: false,
  },
  {
    id: 'excel-ago24',
    programTitle: 'Excel Avançado para Contabilidade',
    category: 'Ferramentas',
    dateDisplay: 'Ago — Set 2024',
    location: 'Online',
    studentsCount: 28,
    iconId: 'cloud',
    gradientFrom: 'rgba(0,229,255,0.08)',
    gradientTo: 'rgba(1,101,221,0.12)',
    description:
      'Seis semanas online sobre Excel aplicado à contabilidade e finanças. Foco em funções financeiras, tabelas dinâmicas, reconciliações bancárias automatizadas e dashboards de gestão. Cada participante saiu com modelos prontos a usar no dia a dia.',
    highlights: [
      'Funções financeiras — VPL, TIR, PGTO, amortizações',
      'Tabelas dinâmicas para análise contabilística',
      'Reconciliações bancárias automatizadas',
      'Dashboards de gestão financeira',
      'Modelos de orçamento e fluxo de caixa',
    ],
    photo: '/Excel.jpg',
    photoCount: 6,
    hasVideo: true,
  },
  {
    id: 'contabilidade-geral-mai24',
    programTitle: 'Contabilidade Geral & PGC-NIRF',
    category: 'Contabilidade',
    dateDisplay: 'Mai — Ago 2024',
    location: 'Maputo',
    studentsCount: 16,
    iconId: 'analytics',
    gradientFrom: 'rgba(1,101,221,0.15)',
    gradientTo: 'rgba(17,191,116,0.08)',
    description:
      'A segunda edição do nosso programa mais popular — 16 profissionais, três meses, um currículo refinado com base no feedback da primeira turma. Esta edição introduziu pela primeira vez um módulo de análise de demonstrações financeiras comparativas.',
    highlights: [
      'PGC-NIRF completo — da teoria à prática',
      'Escrituração manual e informatizada',
      'Demonstrações financeiras comparativas',
      'Análise de casos reais do sector moçambicano',
    ],
    photo: '/Contabilidade2.jpg',
    photoCount: 7,
    hasVideo: false,
  },
];

export const GALLERY_GRADIENTS = [
  ['rgba(1,101,221,0.35)', 'rgba(17,191,116,0.20)'],
  ['rgba(0,40,60,0.80)', 'rgba(1,101,221,0.60)'],
  ['rgba(17,191,116,0.30)', 'rgba(0,229,255,0.15)'],
  ['rgba(1,101,221,0.60)', 'rgba(0,40,60,0.40)'],
  ['rgba(0,229,255,0.20)', 'rgba(1,101,221,0.35)'],
  ['rgba(0,40,60,0.60)', 'rgba(17,191,116,0.25)'],
  ['rgba(17,191,116,0.40)', 'rgba(1,101,221,0.20)'],
  ['rgba(1,101,221,0.25)', 'rgba(0,229,255,0.30)'],
];
