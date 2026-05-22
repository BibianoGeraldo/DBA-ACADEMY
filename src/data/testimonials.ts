export interface Testimonial {
  text: string;
  name: string;
  from: string;
  highlight?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    text: 'A DBA Academy transformou a minha visão sobre contabilidade. Antes encarava as obrigações fiscais como um peso — hoje encaro-as como uma vantagem competitiva. Em dois meses, estava a gerir as declarações da empresa com total confiança.',
    name: 'Ana Mafalda Cumbe',
    from: 'Contabilista · Maputo',
  },
  {
    text: 'O programa de Fiscalidade Moçambicana foi exactamente o que precisava. Aprendi a lidar com o IVA, IRPC e IRPS de forma prática, com casos reais do mercado local. Os instrutores têm experiência que se sente em cada aula.',
    name: 'Jorge Manuel Sitoe',
    from: 'Gestor Financeiro · Beira',
    highlight: true,
  },
  {
    text: 'Fiz o curso de Excel para Contabilidade enquanto trabalhava a tempo inteiro. A flexibilidade dos horários e a qualidade dos materiais tornaram tudo possível. Hoje poupa horas por semana nas reconciliações bancárias.',
    name: 'Fátima Nhabomba',
    from: 'Técnica de Contabilidade · Nampula',
  },
];
