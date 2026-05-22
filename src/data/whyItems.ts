export interface WhyItem {
  iconId: 'instructors' | 'projects' | 'support' | 'certificate';
  title: string;
  description: string;
}

export const whyItems: WhyItem[] = [
  {
    iconId: 'instructors',
    title: 'Rigor técnico sem excepção',
    description:
      'Os nossos formadores são contabilistas, fiscalistas e gestores em actividade — não académicos afastados da prática. Ensinam o que vivem, com a exigência do mercado real.',
  },
  {
    iconId: 'projects',
    title: 'Aplicação imediata no trabalho',
    description:
      'Cada sessão parte de casos reais, legislação actual e cenários do mercado moçambicano. O conhecimento aplica-se no dia seguinte — é essa a nossa medida de sucesso.',
  },
  {
    iconId: 'support',
    title: 'Um programa para cada etapa',
    description:
      'Da entrada no mercado aos executivos, a dBA Academy adapta o formato, a profundidade e a cadência — sem comprometer o rigor. Career Starter, Professional Continuous ou Executive Briefings.',
  },
  {
    iconId: 'certificate',
    title: 'Credibilidade institucional',
    description:
      'A dBA Academy é um activo da dBA — uma das referências do sector em Moçambique. A certificação que emitimos reflecte essa credibilidade e é reconhecida no mercado.',
  },
];
