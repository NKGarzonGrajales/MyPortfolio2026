export interface Project {
  id: number;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    titleEs: 'GitHub Explorer',
    titleEn: 'GitHub Explorer',
    descriptionEs: 'Aplicación interactiva que permite navegar y buscar repositorios, usuarios o tendencias dentro de la API de GitHub con una interfaz optimizada para facilitar la búsqueda de información técnica.',
    descriptionEn: 'Interactive application that allows navigating and searching repositories, users, or trends within the GitHub API with an optimized interface to facilitate technical information search.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'NestJS'],
    demoUrl: 'https://github-repository-explorer-pjb1.vercel.app',
    repoUrl: 'https://github.com/NKGarzonGrajales/github-repository-explorer',
    featured: true,
  },
  {
    id: 2,
    titleEs: 'GitHub Profile Tracker',
    titleEn: 'GitHub Profile Tracker',
    descriptionEs: 'Herramienta diseñada para monitorear métricas, actividad y estadísticas de perfiles o repositorios específicos en GitHub, facilitando la visualización del desempeño de código.',
    descriptionEn: 'Tool designed to monitor metrics, activity, and statistics of specific profiles or repositories on GitHub, facilitating code performance visualization.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'NestJS'],
    demoUrl: 'https://github-profile-tracker-pi.vercel.app',
    repoUrl: 'https://github.com/NKGarzonGrajales/github-profile-tracker',
    featured: true,
  },
  {
    id: 3,
    titleEs: 'Huellas Unidas',
    titleEn: 'Huellas Unidas',
    descriptionEs: 'Plataforma web para la gestión de causas de bienestar animal. Desarrollo del Frontend, navegación y componentes reutilizables.',
    descriptionEn: 'Web platform for managing animal welfare causes. Full Frontend development with navigation and reusable components.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Stripe', 'Cloudinary'],
    demoUrl: 'https://huellasunidas.netlify.app',
    repoUrl: 'https://github.com/NKGarzonGrajales/FP3-HENRY',
    featured: true,
  },

  {
    id: 4,
    titleEs: 'KipuBankV3 - Sistema Bancario Descentralizado & Auditoría',
    titleEn: 'KipuBankV3 - Decentralized Banking System & Security Audit',
    descriptionEs: 'Sistema bancario descentralizado (DeFi) para depósitos y retiros de ETH/ERC20, integración con Oráculos de Chainlink, gestión de roles y swapping interno de tokens estilo AMM. Incluye informe de auditoría de seguridad y pruebas automatizadas con Foundry.',
    descriptionEn: 'Decentralized banking system (DeFi) for ETH/ERC20 deposits and withdrawals, Chainlink Oracle integration, role management, and internal AMM-style token swapping. Includes security audit report and automated Foundry tests.',
    technologies: ['Solidity', 'Ethereum', 'Foundry', 'Chainlink', 'OpenZeppelin', 'Web3'],
    demoUrl: 'https://sepolia.etherscan.io/address/0x9db4f934df129e959f9f205f3dd5cd8dcbe86a05',
    repoUrl: 'https://github.com/NKGarzonGrajales/KipuBankV3-FoundryAudit',
    featured: true,
  },

];