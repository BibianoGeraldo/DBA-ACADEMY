export interface UpcomingSession {
  id: string;
  programTitle: string;
  category: string;
  /** 0 = Career Starter · 1 = Professional Continuous · 2 = Executive Briefings */
  programId: 0 | 1 | 2;
  dateStart: string;
  dateEnd: string;
  dateDisplay: string;
  weeklySchedule: string;
  location: string;
  address: string;
  modality: 'Presencial' | 'Online' | 'Híbrido';
  price: number;
  earlyBirdPrice?: number;
  earlyBirdDeadline?: string;
  spotsTotal: number;
  spotsAvailable: number;
  language: string;
  description: string;
  /** Short flowing paragraphs for the "O que vais aprender" body */
  learningBody: string[];
  /** Competencies the student will have at the end (badge list) */
  skillBadges: string[];
  /** Tools/technologies covered (badge list) */
  toolBadges: string[];
  highlights: string[];
  mentorName: string;
  mentorRole: string;
  mentorBio: string;
  mentorPhoto?: string;
  mentorLinkedIn?: string;
  /** If true the certificate is issued with a shareable link */
  certificateShareable: boolean;
  certificateBody?: string;
  iconId: 'analytics' | 'bi' | 'web' | 'database' | 'cloud';
  featured?: boolean;
  badge?: string;
}

// Dates to be confirmed — sessions will be added here when dates are set
export const upcomingSessions: UpcomingSession[] = [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _archivedSessions: UpcomingSession[] = [
  {
    id: 'contabilidade-geral-jul25',
    programTitle: 'Contabilidade Geral & PGC-NIRF',
    category: 'Contabilidade',
    programId: 0,
    dateStart: '2025-07-05',
    dateEnd: '2025-10-04',
    dateDisplay: '05 Jul — 04 Out 2025',
    weeklySchedule: 'Sábados, 09:00 – 13:00',
    location: 'Maputo',
    address: 'Rua dos Desportistas, n.º 833, JAT 5-1, 9.º Andar, Maputo',
    modality: 'Híbrido',
    language: 'Português',
    price: 18000,
    earlyBirdPrice: 14500,
    earlyBirdDeadline: '20 de Junho',
    spotsTotal: 20,
    spotsAvailable: 7,

    description:
      'Fundamentos e prática da contabilidade moçambicana. Escrituração contabilística, lançamentos, balancetes e demonstrações financeiras segundo o Plano Geral de Contabilidade adaptado às NIRF. Inclui casos reais de empresas moçambicanas e portfólio profissional.',

    learningBody: [
      'Compreender o ciclo contabilístico completo: da abertura dos livros ao encerramento do exercício, passando pelos lançamentos diários, balancetes de verificação e demonstrações financeiras.',
      'Aplicar o Plano Geral de Contabilidade (PGC-NIRF) em vigor em Moçambique — contas, classes, codificação e requisitos de apresentação de informação financeira.',
      'Elaborar demonstrações financeiras — Balanço, Demonstração de Resultados e Mapa de Fluxos de Caixa — com base em cenários reais de empresas moçambicanas.',
      'Construir um dossier contabilístico completo de uma empresa fictícia ao longo do programa, simulando o trabalho real de um contabilista.',
    ],

    skillBadges: [
      'Escrituração Contabilística',
      'Plano Geral de Contabilidade (PGC-NIRF)',
      'Balancetes e Demonstrações Financeiras',
      'Encerramento de Contas',
      'Análise de Demonstrações Financeiras',
      'Dossier Fiscal e Contabilístico',
    ],

    toolBadges: [
      'PGC-NIRF Moçambique',
      'Excel Financeiro',
      'Formulários AT',
      'Modelos de Escrituração',
      'Mapas Contabilísticos',
    ],

    highlights: [
      'PGC-NIRF — estrutura e aplicação prática',
      'Escrituração e lançamentos contabilísticos',
      'Demonstrações financeiras completas',
      'Casos reais de empresas moçambicanas',
    ],

    mentorName: 'Alix Liasse',
    mentorRole: 'Instrutora · Contabilidade Geral',
    mentorBio:
      'Contabilista certificada com mais de 8 anos de experiência em escrituração, demonstrações financeiras e aplicação do PGC-NIRF em organizações moçambicanas de diversos sectores. Apaixonada por tornar a contabilidade acessível e prática.',
    mentorPhoto: '/Team/alix-liasse.png',
    mentorLinkedIn: 'https://www.linkedin.com/in/alix-liasse',

    certificateShareable: true,
    certificateBody:
      'Ao concluir o programa é emitido um Certificado dBA Academy em formato digital com QR Code de verificação, que pode ser partilhado directamente no LinkedIn e adicionado ao currículo profissional.',

    iconId: 'analytics',
    featured: true,
    badge: 'Mais popular',
  },

  {
    id: 'fiscalidade-ago25',
    programTitle: 'Fiscalidade Moçambicana',
    category: 'Fiscalidade',
    programId: 1,
    dateStart: '2025-08-02',
    dateEnd: '2025-10-04',
    dateDisplay: '02 Ago — 04 Out 2025',
    weeklySchedule: 'Sábados e Domingos, 09:00 – 12:00',
    location: 'Maputo',
    address: 'Rua dos Desportistas, n.º 833, JAT 5-1, 9.º Andar, Maputo',
    modality: 'Presencial',
    language: 'Português',
    price: 14000,
    earlyBirdPrice: 11500,
    earlyBirdDeadline: '25 de Julho',
    spotsTotal: 25,
    spotsAvailable: 14,

    description:
      'IVA, IRPS, IRPC e ISPC em profundidade. Obrigações declarativas, prazos legais, regimes de tributação e relacionamento com a Autoridade Tributária de Moçambique. Da teoria à declaração correcta e atempada.',

    learningBody: [
      'Compreender o sistema fiscal moçambicano na sua globalidade: estrutura, princípios, tipos de impostos e a relação entre contribuinte e Autoridade Tributária (AT).',
      'Apurar e declarar o IVA mensalmente — regime normal, regime simplificado, isenções, direito à dedução e reconciliação com a contabilidade.',
      'Calcular e submeter o IRPS (rendimentos do trabalho e independentes) e o IRPC (lucro tributável, tributações autónomas, pagamentos por conta e derrama).',
      'Cumprir os prazos declarativos do calendário fiscal, evitar coimas e conhecer os procedimentos de reclamação e impugnação junto da AT.',
    ],

    skillBadges: [
      'Apuramento e Declaração de IVA',
      'IRPS — Rendimentos e Retenções',
      'IRPC — Lucro Tributável',
      'ISPC e Tributações Autónomas',
      'Calendário Fiscal e Prazos',
      'Relacionamento com a AT de Moçambique',
    ],

    toolBadges: [
      'Portal da AT de Moçambique',
      'Formulários IRPS / IRPC / IVA',
      'Excel Fiscal',
      'Código do IVA',
      'Código do IRPC',
      'Regulamento do IRPS',
    ],

    highlights: [
      'IVA — apuramento, dedução e declaração',
      'IRPS e IRPC — cálculo e submissão',
      'Calendário fiscal moçambicano',
      'Simulações com casos reais',
    ],

    mentorName: 'Arlindo Gordhandas',
    mentorRole: 'Instrutor · Fiscalidade',
    mentorBio:
      'Especialista em fiscalidade moçambicana com mais de 10 anos de experiência em consultoria fiscal e representação de empresas junto da Autoridade Tributária. Formador reconhecido pelas suas explicações claras e práticas sobre legislação complexa.',
    mentorPhoto: '/Team/arlindo-gordhandas.png',
    mentorLinkedIn: 'https://www.linkedin.com/in/arlindo-gordhandas',

    certificateShareable: true,
    certificateBody:
      'O Certificado dBA Academy é emitido digitalmente com verificação por QR Code e pode ser partilhado no LinkedIn, onde aparece como credencial na secção de licenças e certificações.',

    iconId: 'bi',
    featured: true,
  },

  {
    id: 'gestao-financeira-set25',
    programTitle: 'Gestão Financeira & Tesouraria',
    category: 'Finanças',
    programId: 2,
    dateStart: '2025-09-06',
    dateEnd: '2025-10-18',
    dateDisplay: '06 Set — 18 Out 2025',
    weeklySchedule: 'Sábados, 08:30 – 12:30',
    location: 'Online',
    address: 'Plataforma DBA (Zoom + LMS)',
    modality: 'Online',
    language: 'Português',
    price: 10000,
    spotsTotal: 30,
    spotsAvailable: 18,

    description:
      'Análise financeira, controlo de tesouraria, orçamentação e fluxo de caixa. Ferramentas práticas para gerir a saúde financeira de uma organização com rigor e clareza, aplicadas ao contexto moçambicano.',

    learningBody: [
      'Interpretar demonstrações financeiras — Balanço, Demonstração de Resultados e Mapa de Fluxos de Caixa — para tomar decisões de gestão informadas.',
      'Elaborar e controlar orçamentos operacionais e financeiros, identificar desvios e implementar medidas correctivas com base em dados reais.',
      'Gerir a tesouraria de uma organização: previsão de recebimentos e pagamentos, controlo de saldos bancários e optimização do capital de giro.',
      'Calcular e interpretar indicadores financeiros chave (liquidez, rentabilidade, endividamento) aplicados a empresas do mercado moçambicano.',
    ],

    skillBadges: [
      'Análise de Demonstrações Financeiras',
      'Orçamentação e Controlo de Gestão',
      'Gestão de Tesouraria',
      'Previsão de Fluxo de Caixa',
      'Indicadores Financeiros (KPIs)',
      'Tomada de Decisão Financeira',
    ],

    toolBadges: [
      'Excel Financeiro Avançado',
      'Modelos de Orçamento',
      'Mapas de Tesouraria',
      'Tabelas Dinâmicas',
      'Análise de Rácio',
    ],

    highlights: [
      'Análise financeira aplicada',
      'Orçamentação e controlo de desvios',
      'Gestão de tesouraria e fluxo de caixa',
      'Indicadores financeiros do mercado moçambicano',
    ],

    mentorName: 'Dércio da Barca',
    mentorRole: 'Instrutor · Gestão Financeira',
    mentorBio:
      'Gestor financeiro com vasta experiência em tesouraria, orçamentação e análise financeira em empresas do mercado moçambicano e regional. Acredita que boas decisões financeiras começam com informação clara e bem estruturada.',
    mentorPhoto: '/Team/dercio-da-barca.png',
    mentorLinkedIn: 'https://www.linkedin.com/in/dercio-da-barca',

    certificateShareable: true,
    certificateBody:
      'Certificado dBA Academy emitido digitalmente com verificação por QR Code. Inclui a lista de competências e horas de formação, pronto para partilhar no LinkedIn.',

    iconId: 'web',
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-MZ') + ' MT';
}

export function getSpotsPercentage(available: number, total: number): number {
  return Math.round(((total - available) / total) * 100);
}

export function isAlmostFull(available: number, total: number): boolean {
  return available / total <= 0.35;
}
