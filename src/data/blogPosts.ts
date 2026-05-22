export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  dateDisplay: string;
  date: string;
  author: string;
  authorRole: string;
  category: string;
  readTime: string;
  featured: boolean;
  gradientFrom: string;
  gradientTo: string;
}

export const blogCategories = ['Fiscalidade', 'Contabilidade', 'Carreira', 'Legislação'];

export const blogPosts: BlogPost[] = [
  {
    slug: 'iva-mocambique-2025-guia-pratico',
    title: 'IVA em Moçambique em 2025: Guia Prático para Contabilistas',
    excerpt:
      'As obrigações declarativas do IVA, os prazos, os regimes de tributação e as armadilhas mais comuns que levam a coimas desnecessárias. Tudo o que precisa de saber.',
    content: [
      'O Imposto sobre o Valor Acrescentado (IVA) é o imposto indirecto mais relevante do sistema fiscal moçambicano. Com uma taxa geral de 17%, afecta praticamente todas as transacções comerciais e obriga os sujeitos passivos a uma disciplina declarativa rigorosa.',
      'Em 2025, a Autoridade Tributária de Moçambique (AT) reforçou os mecanismos de cruzamento de informação entre contribuintes. Erros nas declarações periódicas — mesmo involuntários — estão a ser detectados mais rapidamente, resultando em notificações e coimas que poderiam ser evitadas.',
      'O ciclo do IVA começa na emissão da factura. Toda a factura emitida a um sujeito passivo deve conter o NUIT do emitente e do receptor, a taxa de IVA aplicável e o montante de imposto liquidado. Facturação incorrecta inviabiliza o direito à dedução do receptor.',
      'As declarações periódicas de IVA devem ser submetidas até ao último dia útil do mês seguinte ao período a que respeitam. Este prazo é inegociável — o não cumprimento gera juros compensatórios e coimas que se acumulam rapidamente.',
      'Um dos erros mais comuns: confundir isenções com taxa zero. As isenções simples (art. 9.º do Código do IVA) não conferem direito à dedução do IVA suportado, enquanto as isenções com direito à dedução (exportações, por exemplo) conferem esse direito. Confundir estas categorias pode custar caro.',
      'A nossa recomendação: invista na formação contínua. A legislação fiscal muda, os formulários actualizam-se, e os procedimentos da AT evoluem. Um contabilista actualizado poupa tempo, evita coimas e acrescenta valor real à sua organização.',
    ],
    dateDisplay: '08 Mai 2025',
    date: '2025-05-08',
    author: 'Arlindo Gordhandas',
    authorRole: 'Instrutor · Fiscalidade',
    category: 'Fiscalidade',
    readTime: '7 min',
    featured: true,
    gradientFrom: 'rgba(1,101,221,0.12)',
    gradientTo: 'rgba(17,191,116,0.08)',
  },
  {
    slug: 'pgc-nirf-mocambique-introducao',
    title: 'PGC-NIRF: O que Mudou e o que Todo Contabilista Precisa Saber',
    excerpt:
      'O Plano Geral de Contabilidade adaptado às Normas Internacionais de Relato Financeiro trouxe mudanças significativas. Explicamos o essencial de forma clara.',
    content: [
      'O PGC-NIRF (Plano Geral de Contabilidade — Normas Internacionais de Relato Financeiro) é o referencial contabilístico vigente em Moçambique para as entidades que não aplicam as NIRF completas. Compreendê-lo a fundo não é opcional — é obrigatório para qualquer contabilista que pretenda exercer com rigor.',
      'A principal diferença face ao PGC anterior reside na aproximação às NIRF: valorimetria de activos, reconhecimento de rendimentos e gastos, e requisitos de divulgação foram todos reformulados com base nas normas internacionais. Quem não actualizou os seus conhecimentos corre o risco de apresentar demonstrações financeiras incorrectas.',
      'Um dos pontos de confusão frequente é a classificação de activos fixos tangíveis versus intangíveis. O PGC-NIRF é mais exigente nos critérios de reconhecimento e impõe testes de imparidade que o PGC anterior não previa. A não aplicação destes testes pode inflar o activo e distorcer o resultado.',
      'Outro tema crítico: as locações. A distinção entre locação financeira e locação operacional tem impacto directo no balanço e na demonstração de resultados. Com o PGC-NIRF, o critério económico prevalece sobre a forma jurídica — o que altera significativamente o tratamento de contratos de aluguer de longo prazo.',
      'A preparação das demonstrações financeiras comparativas — exigidas pelo PGC-NIRF — obriga a que o contabilista conheça bem os períodos anteriores e saiba reconstituir saldos de abertura correctamente.',
      'A DBA Academy inclui no programa de Contabilidade Geral um módulo dedicado à transição para o PGC-NIRF, com casos práticos e formulários actualizados. É a forma mais eficiente de actualizar conhecimentos sem interromper a actividade profissional.',
    ],
    dateDisplay: '24 Abr 2025',
    date: '2025-04-24',
    author: 'Alix Liasse',
    authorRole: 'Instrutora · Contabilidade Geral',
    category: 'Contabilidade',
    readTime: '6 min',
    featured: false,
    gradientFrom: 'rgba(17,191,116,0.10)',
    gradientTo: 'rgba(1,101,221,0.08)',
  },
  {
    slug: 'irpc-mocambique-casos-praticos',
    title: 'IRPC em Moçambique: 5 Erros Comuns nas Declarações de Imposto',
    excerpt:
      'Erros nas declarações de IRPC são mais frequentes do que se pensa — e mais caros do que parecem. Identificamos os 5 mais comuns e como evitá-los.',
    content: [
      'O Imposto sobre o Rendimento das Pessoas Colectivas (IRPC) é, para muitas empresas, o imposto de maior impacto financeiro. A complexidade do apuramento do lucro tributável — com adições, deduções, correcções fiscais e benefícios — cria múltiplas oportunidades de erro.',
      'Erro 1 — Não separar custos dedutíveis dos não dedutíveis: Nem todos os gastos contabilizados são aceites fiscalmente. Despesas de representação, multas, provisões não regulamentadas e gastos sem documentação de suporte são tributações autónomas ou correcções ao lucro tributável. Misturá-los com custos ordinários é um erro clássico.',
      'Erro 2 — Não calcular correctamente os Pagamentos Por Conta (PPC): Os PPC são pagamentos antecipados de IRPC, calculados com base no imposto do ano anterior. Erros no cálculo geram insuficiência de pagamento e juros — ou pagamento em excesso que imobiliza desnecessariamente o capital da empresa.',
      'Erro 3 — Ignorar os benefícios fiscais disponíveis: A legislação moçambicana prevê benefícios fiscais para investimentos em zonas específicas, sectores prioritários e criação de emprego. Muitas empresas que poderiam beneficiar destes incentivos não os aplicam por desconhecimento.',
      'Erro 4 — Reporte de prejuízos fiscais incorrectamente: A lei permite o reporte de prejuízos fiscais por um número limitado de anos. A gestão incorrecta deste reporte — incluindo a ordem de utilização e os limites aplicáveis — pode resultar em imposto pago em excesso.',
      'Erro 5 — Entrega da declaração Modelo 22 fora de prazo: A Modelo 22 deve ser submetida até ao último dia do mês de Junho do ano seguinte ao exercício. Atrasos geram coimas automáticas, independentemente de existir ou não imposto a pagar.',
    ],
    dateDisplay: '10 Abr 2025',
    date: '2025-04-10',
    author: 'Arlindo Gordhandas',
    authorRole: 'Instrutor · Fiscalidade',
    category: 'Fiscalidade',
    readTime: '8 min',
    featured: false,
    gradientFrom: 'rgba(0,229,255,0.08)',
    gradientTo: 'rgba(1,101,221,0.12)',
  },
  {
    slug: 'carreira-contabilidade-mocambique-2025',
    title: 'Carreira em Contabilidade em Moçambique: Oportunidades e Caminhos',
    excerpt:
      'O mercado contabilístico moçambicano está a crescer e a profissionalizar-se. Analisamos onde estão as oportunidades e o que o mercado valoriza em 2025.',
    content: [
      'A contabilidade em Moçambique atravessa um período de profissionalização acelerada. O crescimento do sector privado, a expansão do sistema financeiro e as exigências crescentes da Autoridade Tributária estão a criar uma procura real por contabilistas qualificados e actualizados.',
      'O perfil mais procurado pelas empresas moçambicanas em 2025 não é apenas o técnico que sabe escriturar — é o profissional que entende as implicações fiscais das decisões de negócio, domina as ferramentas digitais e comunica informação financeira de forma clara para a gestão.',
      'Em termos sectoriais, o sector financeiro (banca, seguros, microfinanças), as empresas de telecomunicações e o sector de construção e imobiliário são os maiores empregadores de profissionais contabilísticos em Moçambique. As organizações internacionais e ONGs também representam uma fatia significativa do mercado.',
      'Os salários iniciais para contabilistas com formação sólida e certificação reconhecida situam-se entre 25.000 e 40.000 MZN mensais nas grandes empresas, com progressão rápida para quem demonstra competência técnica e capacidade de trabalho autónomo.',
      'A especialização em fiscalidade é, neste momento, a via mais rápida de diferenciação. Profissionais que dominam o sistema fiscal moçambicano — IVA, IRPS, IRPC, ISPC e os regimes especiais — são raros e muito valorizados, tanto por empresas como por escritórios de consultoria.',
      'O nosso conselho: não espere ter "experiência suficiente" para investir em formação especializada. A formação de qualidade cria a experiência que o mercado procura. Comece agora — o mercado está aqui e as oportunidades são reais.',
    ],
    dateDisplay: '28 Mar 2025',
    date: '2025-03-28',
    author: 'Marlo Boaventura',
    authorRole: 'Director & Especialista Fiscal',
    category: 'Carreira',
    readTime: '6 min',
    featured: false,
    gradientFrom: 'rgba(17,191,116,0.12)',
    gradientTo: 'rgba(0,229,255,0.06)',
  },
  {
    slug: 'irps-retencoes-fonte-mocambique',
    title: 'IRPS: Retenções na Fonte e Obrigações do Empregador em Moçambique',
    excerpt:
      'O empregador é responsável por reter e entregar o IRPS dos seus trabalhadores. Um guia prático sobre como calcular, reter e declarar correctamente.',
    content: [
      'O Imposto sobre o Rendimento das Pessoas Singulares (IRPS) nas categorias de rendimentos do trabalho dependente (categoria A) é retido na fonte pelo empregador. Esta responsabilidade é frequentemente subestimada — e as consequências de erro ou incumprimento são inteiramente suportadas pela entidade patronal.',
      'O cálculo das retenções mensais exige a aplicação da tabela de retenção na fonte, actualizada anualmente pela AT. As tabelas variam conforme o tipo de contrato (vínculo laboral ou prestação de serviços) e o montante mensal de rendimento.',
      'Para além dos salários, existem outros rendimentos do trabalho sujeitos a retenção: subsídios (de alimentação acima do limite legal, de transporte, etc.), senhas de presença, comissões, gratificações e prémios. Muitos empregadores ignoram a tributação de benefícios acessórios e acumulam passivos fiscais sem saber.',
      'A declaração mensal das retenções efectuadas deve ser submetida até ao último dia útil do mês seguinte, acompanhada do respectivo pagamento. A falta de entrega atempada gera juros compensatórios de 2% ao mês sobre o montante em falta.',
      'No final de cada ano, o empregador deve emitir o Mapa de Retenções a cada trabalhador e submeter a declaração anual de remunerações à AT. Este documento é essencial para o trabalhador efectuar a sua declaração anual de IRS (quando obrigatória).',
      'A complexidade das obrigações IRPS do empregador justifica plenamente a formação especializada. No nosso programa de Fiscalidade Moçambicana, dedicamos um módulo completo a este tema — com exercícios práticos de cálculo e preenchimento de formulários reais.',
    ],
    dateDisplay: '12 Mar 2025',
    date: '2025-03-12',
    author: 'Arlindo Gordhandas',
    authorRole: 'Instrutor · Fiscalidade',
    category: 'Legislação',
    readTime: '7 min',
    featured: false,
    gradientFrom: 'rgba(1,101,221,0.10)',
    gradientTo: 'rgba(17,191,116,0.06)',
  },
  {
    slug: 'excel-contabilidade-funcoes-essenciais',
    title: 'Excel para Contabilidade: As 10 Funções que Todo Contabilista Deve Dominar',
    excerpt:
      'O Excel continua a ser a ferramenta mais usada nos departamentos de contabilidade em Moçambique. Estas 10 funções poupam horas de trabalho por semana.',
    content: [
      'Independentemente do software contabilístico que a sua empresa use, o Excel é invariavelmente a ferramenta de análise, reconciliação e reporte mais utilizada nos departamentos financeiros moçambicanos. Dominar as funções certas multiplica a produtividade e reduz erros.',
      'PROCV / PROCX: Essenciais para reconciliações. Permitem cruzar dados entre tabelas — comparar extractos bancários com registos contabilísticos, ou validar facturas contra lançamentos. O PROCX (disponível no Excel 365) é mais versátil e deve substituir progressivamente o PROCV.',
      'SOMASE e SOMASES: Permitem somar valores condicionalmente — por exemplo, somar todos os lançamentos de uma determinada conta, num determinado período, para uma determinada entidade. Indispensáveis para a preparação de balanços e demonstrações de resultados a partir de extractos de contabilidade.',
      'SE e SE aninhados: A lógica condicional é omnipresente na contabilidade — calcular IVA conforme a taxa aplicável, classificar lançamentos, identificar valores fora de intervalo. Dominar o SE e as suas variantes (SES, SEERRO) é fundamental.',
      'PGTO, VPL e TIR: Funções financeiras para análise de investimentos, cálculo de prestações de empréstimos e avaliação da rentabilidade de projectos. Cada vez mais exigidas aos contabilistas que assessoram a gestão.',
      'Tabelas Dinâmicas: Não são uma função, mas são a ferramenta mais poderosa do Excel para análise contabilística. Permitem resumir, filtrar e agrupar grandes volumes de dados em segundos. Um contabilista que domina as tabelas dinâmicas processa em minutos o que outros fazem em horas.',
      'O nosso programa de Excel Avançado para Contabilidade cobre estas e outras funções com casos práticos retirados do dia a dia do contabilista moçambicano — reconciliações bancárias, apuramentos de IVA, mapas de tesouraria e dashboards de gestão.',
    ],
    dateDisplay: '25 Fev 2025',
    date: '2025-02-25',
    author: 'Ivan Veloso',
    authorRole: 'Instrutor · Excel & Ferramentas Financeiras',
    category: 'Contabilidade',
    readTime: '6 min',
    featured: false,
    gradientFrom: 'rgba(0,40,60,0.12)',
    gradientTo: 'rgba(1,101,221,0.10)',
  },
];
