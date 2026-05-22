export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dércio da Barca',
    role: 'Instrutor · Gestão Financeira',
    bio: 'Gestor financeiro com anos de experiência em tesouraria, orçamentação e análise financeira em empresas do mercado moçambicano e regional.',
    photo: '/Team/dercio-da-barca.png',
    linkedIn: 'https://linkedin.com/in/dercio-da-barca',
  },
  {
    name: 'Ivan Veloso',
    role: 'Instrutor · Excel & Ferramentas Financeiras',
    bio: 'Especialista em ferramentas de produtividade aplicadas à contabilidade e finanças. Ajuda profissionais a automatizar processos e a ganhar horas de trabalho por semana.',
    photo: '/Team/ivan-veloso.png',
    linkedIn: 'https://linkedin.com/in/ivan-veloso',
  },
  {
    name: 'Fausto Massunga',
    role: 'Instrutor · Auditoria & Controlo Interno',
    bio: 'Auditor com passagem pelo sector financeiro e telecomunicações em Moçambique. Especialista em normas ISA, compliance e conceção de sistemas de controlo interno.',
    photo: '/Team/fausto-massunga.png',
    linkedIn: 'https://linkedin.com/in/fausto-massunga',
  },
  {
    name: 'Alix Liasse',
    role: 'Instrutora · Contabilidade Geral',
    bio: 'Contabilista certificada com experiência em escrituração, demonstrações financeiras e aplicação do PGC-NIRF em organizações moçambicanas de diversos sectores.',
    photo: '/Team/alix-liasse.png',
    linkedIn: 'https://linkedin.com/in/alix-liasse',
  },
  {
    name: 'Arlindo Gordhandas',
    role: 'Instrutor · Fiscalidade',
    bio: 'Especialista em fiscalidade moçambicana com domínio profundo em IVA, IRPS e IRPC. Consultor fiscal com vasta experiência no relacionamento com a Autoridade Tributária de Moçambique.',
    photo: '/Team/arlindo-gordhandas.png',
    linkedIn: 'https://linkedin.com/in/arlindo-gordhandas',
  },
  {
    name: 'Marlo Boaventura',
    role: 'Director & Especialista Fiscal',
    bio: 'Fundador e mentor principal da DBA Academy. Especialista fiscal e financeiro com experiência em Portugal e Moçambique, apaixonado por democratizar o acesso à formação de qualidade.',
    photo: '/Team/marlo-boaventura.png',
    linkedIn: 'https://linkedin.com/in/marlo-boaventura',
  },
];
