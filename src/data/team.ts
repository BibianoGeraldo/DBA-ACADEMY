export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Carlos Manhiça',
    role: 'Director & Data Engineer',
    bio: '10 anos de experiência em engenharia de dados. Ex-consultor em empresas do sector financeiro em Moçambique e Portugal.',
  },
  {
    name: 'Beatriz Muianga',
    role: 'Instrutora · Web Development',
    bio: 'Desenvolvedora full-stack com paixão pelo ensino. Formada em Engenharia Informática, constrói produtos para o mercado africano.',
  },
  {
    name: 'Sérgio Zimba',
    role: 'Instrutor · Business Intelligence',
    bio: 'Especialista em BI e visualização de dados. Transformou a tomada de decisão de várias organizações com dashboards que falam.',
  },
];
