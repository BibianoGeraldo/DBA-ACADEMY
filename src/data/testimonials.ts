export interface Testimonial {
  text: string;
  name: string;
  from: string;
  highlight?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    text: 'A DBA Academy mudou completamente a minha perspectiva sobre tecnologia. Os instrutores não ensinam apenas — inspiram. Em três meses, já tinha o meu primeiro emprego na área.',
    name: 'Ana Mafalda Cumbe',
    from: 'Analista de Dados · Maputo',
  },
  {
    text: 'O que me surpreendeu foi a atenção que cada instrutor dá a cada aluno. Nunca me senti perdido — mesmo quando o conteúdo era desafiante, havia sempre suporte real.',
    name: 'Jorge Manuel Sitoe',
    from: 'Desenvolvedor Web · Beira',
    highlight: true,
  },
  {
    text: 'Fiz o curso de Power BI enquanto trabalhava a tempo inteiro. A flexibilidade dos horários e o material de qualidade tornaram tudo possível. Recomendo sem hesitar.',
    name: 'Fátima Nhabomba',
    from: 'Gestora de Dados · Nampula',
  },
];
