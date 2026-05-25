export type FAQCategory = 'Geral' | 'Inscrição' | 'Programas' | 'Certificado' | 'Pagamento';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqCategories: FAQCategory[] = [
  'Geral',
  'Inscrição',
  'Programas',
  'Certificado',
  'Pagamento',
];

export const faqItems: FAQItem[] = [
  {
    id: 'o-que-e-dba',
    question: 'O que é a dBA Academy?',
    answer:
      'A dBA Academy é uma academia de formação especializada em contabilidade, fiscalidade, gestão financeira e auditoria, baseada em Maputo, Moçambique. Oferecemos programas práticos ministrados por profissionais experientes do mercado moçambicano. As nossas turmas são pequenas, intensivas e orientadas para resultados concretos na carreira.',
    category: 'Geral',
  },
  {
    id: 'onde-estao',
    question: 'Onde se localiza a dBA Academy?',
    answer:
      'A nossa sede fica na Rua dos Desportistas, n.º 833, JAT 5-1, 9.º Andar, Maputo, Moçambique. Também oferecemos programas 100% online e em formato híbrido, acessíveis a partir de qualquer cidade de Moçambique.',
    category: 'Geral',
  },
  {
    id: 'quem-pode-inscrever',
    question: 'Quem pode inscrever-se?',
    answer:
      'Qualquer pessoa com interesse em crescer na área fiscal, contabilística ou financeira. Não é necessária experiência prévia para a maioria dos programas — indicamos o nível de cada curso na sua descrição (Iniciante, Intermédio, Avançado). Os nossos programas são indicados tanto para recém-formados como para profissionais que querem actualizar conhecimentos.',
    category: 'Geral',
  },
  {
    id: 'legislacao-atual',
    question: 'Os conteúdos estão actualizados com a legislação em vigor?',
    answer:
      'Sim. A nossa equipa pedagógica monitoriza continuamente as alterações à legislação fiscal e contabilística moçambicana — IVA, IRPS, IRPC, ISPC, PGC-NIRF e normas da AT. Sempre que existem alterações relevantes, os materiais são actualizados e os alumni são notificados.',
    category: 'Geral',
  },
  {
    id: 'como-inscrever',
    question: 'Como me inscrevo num programa?',
    answer:
      'A inscrição pode ser efectuada directamente na página de Programas, clicando em "Reservar lugar" no programa de interesse. Será enviado um email de confirmação com as etapas seguintes e informações de pagamento.',
    category: 'Inscrição',
  },
  {
    id: 'prazo-inscricao',
    question: 'Até quando posso inscrever-me?',
    answer:
      'As inscrições encerram quando as vagas se esgotam ou até 48h antes do início do programa. Recomendamos inscrição antecipada para garantir a vaga e beneficiar do preço Early Bird quando disponível.',
    category: 'Inscrição',
  },
  {
    id: 'vagas-limitadas',
    question: 'As turmas têm número limitado de vagas?',
    answer:
      'Sim. As nossas turmas são intencionalmente pequenas (12 a 25 participantes, dependendo do programa) para garantir atenção personalizada e uma melhor experiência de aprendizagem.',
    category: 'Inscrição',
  },
  {
    id: 'duracao-programas',
    question: 'Qual é a duração dos programas?',
    answer:
      'A duração varia conforme o programa, de 6 semanas a 3 meses. As sessões são intensivas e geralmente decorrem aos fins-de-semana (sábados e/ou domingos), para não interferir com obrigações profissionais durante a semana.',
    category: 'Programas',
  },
  {
    id: 'online-ou-presencial',
    question: 'Os programas são presenciais ou online?',
    answer:
      'Temos programas presenciais (na nossa sede em Maputo, Rua dos Desportistas, n.º 833), 100% online (com aulas síncronas via Zoom) e híbridos. A modalidade está indicada na ficha de cada programa.',
    category: 'Programas',
  },
  {
    id: 'materiais',
    question: 'Os materiais estão incluídos?',
    answer:
      'Sim. Todos os materiais de estudo, formulários fiscais actualizados, gravações das aulas, acesso à nossa plataforma LMS e recursos complementares estão incluídos no preço do programa. Não há custos adicionais ocultos.',
    category: 'Programas',
  },
  {
    id: 'datas-fixas',
    question: 'Os programas têm datas fixas ou posso começar a qualquer momento?',
    answer:
      'Os nossos programas têm datas de início fixas e turmas específicas. Não são cursos self-paced — são sessões intensivas com grupos definidos, o que garante aprendizagem colaborativa e atenção personalizada. Consulta as próximas datas na página de Programas.',
    category: 'Programas',
  },
  {
    id: 'certificado-incluido',
    question: 'Recebo um certificado no fim?',
    answer:
      'Sim. Todos os participantes que completarem o programa com aprovação recebem um Certificado de Participação dBA Academy. O certificado é emitido em formato digital (PDF verificável) e pode ser partilhado directamente no LinkedIn.',
    category: 'Certificado',
  },
  {
    id: 'certificado-reconhecido',
    question: 'O certificado é reconhecido pelo mercado?',
    answer:
      'O nosso certificado é reconhecido por empresas parceiras e tem sido aceite como evidência de competência técnica em processos de contratação nas áreas fiscal, contabilística e financeira. Trabalhamos continuamente para expandir a nossa rede de parceiros em Moçambique.',
    category: 'Certificado',
  },
  {
    id: 'formas-pagamento',
    question: 'Quais são as formas de pagamento?',
    answer:
      'Aceitamos M-Pesa, e-Mola, transferência bancária (BCI, BIM, Standard Bank) e pagamento em numerário nas nossas instalações. O preço é expresso em Meticais (MZN).',
    category: 'Pagamento',
  },
  {
    id: 'parcelamento',
    question: 'Posso pagar em prestações?',
    answer:
      'Sim, para programas de duração superior a 2 meses oferecemos a opção de pagamento em 2 prestações: 60% no momento da inscrição e 40% até 30 dias depois do início do programa. As condições são disponibilizadas no momento da inscrição.',
    category: 'Pagamento',
  },
  {
    id: 'early-bird',
    question: 'O que é o preço Early Bird?',
    answer:
      'O preço Early Bird é um desconto especial para inscrições antecipadas (normalmente 2 a 4 semanas antes do início do programa). As datas limite estão indicadas na ficha de cada programa.',
    category: 'Pagamento',
  },
];
