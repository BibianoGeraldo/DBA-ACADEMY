export interface WhyItem {
  iconId: 'instructors' | 'projects' | 'support' | 'certificate';
  title: string;
  description: string;
}

export const whyItems: WhyItem[] = [
  {
    iconId: 'instructors',
    title: 'Instrutores da indústria',
    description:
      'Todos os nossos formadores têm experiência real no mercado de trabalho. Aprendes com quem vive o que ensina.',
  },
  {
    iconId: 'projects',
    title: 'Aprendizagem baseada em projectos',
    description:
      'Cada módulo termina com um projecto real que podes incluir no teu portfólio profissional.',
  },
  {
    iconId: 'support',
    title: 'Suporte pós-formação',
    description:
      'A tua jornada não termina com o certificado. Tens acesso permanente à nossa comunidade e rede de alumni.',
  },
  {
    iconId: 'certificate',
    title: 'Certificação reconhecida',
    description:
      'Os nossos certificados são reconhecidos por empresas parceiras e instituições da área de tecnologia.',
  },
];
