import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  CloudCog,
  Code2,
  Database,
  FileCode2,
  FileType2,
  GitBranch,
  Hash,
  Layers,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export const SOCIALS = {
  instagram: 'https://www.instagram.com/guibarcelo_',
  linkedin: 'https://www.linkedin.com/in/guilherme-barcelo',
  github: 'https://github.com/BarceloDev',
  email: 'guilhermebrcneves@gmail.com',
}

export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'jornada', label: 'Jornada' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export const JOURNEY: {
  year: string
  text: string
  link?: { label: string; href: string }
}[] = [
  {
    year: '2024',
    text: 'Como todo iniciante na programação comecei pelo desenvolvimento web de maneira autodidata iniciando com o bom e velho HTML, CSS e JavaScript.',
  },
  {
    year: '2025',
    text: 'Começo do primeiro semestre do curso técnico onde aprofundamos em hardware e redes de computadores além dos meus estudos separados onde comecei em TypeScript. Durante o segundo semestre aprofundei meus conhecimentos em desenvolvimento web além de conhecer o PHP e MySQL para o backend. Meus estudos autodidatas continuaram e progredi com React + TypeScript além de Laravel com PostgreSQL.',
  },
  {
    year: '2026',
    text: 'No primeiro semestre (terceiro semestre do curso técnico) vimos desenvolvimento de aplicativos mobile com Flutter. Consegui terminar e subir uma aplicação inteira com frontend e backend já em produção, o PRINT3D. Prossegui com a minha formação em backend, agora, em Java Spring Boot com os cursos da Udemy.',
    link: { label: 'PRINT3D', href: 'https://print3d-management.vercel.app' },
  },
]

export const TECHNOLOGIES: { name: string; icon: LucideIcon }[] = [
  { name: 'HTML', icon: FileCode2 },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Braces },
  { name: 'TypeScript', icon: FileType2 },
  { name: 'React', icon: Atom },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'PHP', icon: Code2 },
  { name: 'Laravel', icon: Layers },
  { name: 'Python', icon: Hash },
  { name: 'Oracle APEX', icon: Database },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Git', icon: GitBranch },
  { name: 'Vercel', icon: Cloud },
  { name: 'Render', icon: Server },
  { name: 'Supabase', icon: Boxes },
  { name: 'Claude Code', icon: Terminal },
  { name: 'V0', icon: Sparkles },
  { name: 'DevOps', icon: CloudCog },
]

export const PROJECTS: {
  title: string
  description: string
  stack: string[]
  demo?: string
  github?: string
}[] = [
  {
    title: 'PRINT3D',
    description:
      'Sistema para gerenciamento de fluxo de pedidos de impressão 3D com usuários reais além de dashboards de vendas e acompanhamento em tempo real de status para o cliente.',
    stack: [
      'React',
      'TypeScript',
      'Laravel',
      'PostgreSQL',
      'Tailwind CSS',
      'Vercel',
      'Render',
      'Supabase',
      'Git',
    ],
    demo: 'https://print3d-management.vercel.app',
    github: 'https://github.com/BarceloDev',
  },
  {
    title: 'Gerenciador Empresarial',
    description:
      'Sistema feito para gerenciar rendimento total da empresa além do desempenho de funcionários por meio do registro de notas fiscais.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    demo: 'https://dashboardmanager.infinityfree.me/',
  },
  {
    title: 'CheckPGR',
    description:
      'Sistema projetado para o SENAI de Pindamonhangaba que visa fazer um check list de segurança de projetos e equipamentos.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    demo: 'https://checklist.free.nf/index.php?i=1',
  },
  {
    title: 'Organizador de Pastas e Arquivos',
    description:
      'Automação simples feita em Python para separar arquivos com base em suas extensões.',
    stack: ['Python (os, shutil)'],
    github: 'https://github.com/BarceloDev/-folder-and-file-organizer',
  },
  {
    title: 'Gerenciador Financeiro',
    description:
      'Aplicação feita em React e Tailwind CSS para cálculo de lucro e despesas além de simulação de investimento.',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
    demo: 'https://manager-seven-fawn.vercel.app/',
  },
]
