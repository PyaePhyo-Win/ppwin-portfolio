import type { Project, NavLink, Skills, WorkExperience, Education, Stat } from '../types';

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: '17', iconKey: 'projects' },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const ABOUT_ME = {
  title: 'Who I Am',
  description: [
    "I am a dedicated Full Stack Developer based in Yangon, completed my B.Sc (Hons) in Computing from the University of Greenwich. I specialize in building robust and efficient digital solutions, from complex backend systems to responsive frontend interfaces.",
    "My approach to development is rooted in analytical problem-solving and a commitment to security and intelligence. I am also expanding my horizons by learning the Japanese language to better connect with global teams."
  ]
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: 'AI MODEL DEVELOPER & TRAINER',
    company: 'MY DAY THU KYWAL',
    period: 'Jan 2025 – Jul 2025',
    description: [
      'Designed and implemented custom machine learning models using TensorFlow, PyTorch, and scikit-learn.',
      'Trained deep neural networks (BERT, GPT, YOLO) for classification and object detection.',
      'Applied transfer learning and fine-tuning techniques on large-scale datasets.',
      'Collected, cleaned, and annotated datasets for model training and evaluation.',
    ],
    logo: '/companies/myday.png',
  },
  {
    role: 'JUNIOR PROGRAMMER',
    company: 'Fusion Solution Co., Ltd.',
    period: 'Aug 2025 – Present',
    description: [
      'Designed and developed DOVA (Document OCR Vision Agent), implementing OpenAi integrations and custom OCR engines for high-accuracy raw text extraction.',
      'Contributed to the development and optimization of Jarviz (HR Software), building robust backend processes and frontend features.',
      'Engineered core cryptographic verification flow and REST API endpoints for Veracity (Digital Signature).',
      'Developing REST APIs and background jobs using C# (.NET), Hangfire, and MSSQL.',
    ],
    logo: '/companies/fusion.png',
  },
];

export const ACADEMIC_EDUCATION: Education[] = [
  {
    degree: 'B.Sc (Hons) Computing',
    institution: 'University of Greenwich (UK)',
    period: 'Awarded in 26 Feb 2026',
    logo: '/institutions/greenwich.png',
  },
  {
    degree: 'Level 5 Diploma in Computing',
    institution: 'KMD College',
    period: 'Awarded in 25 Oct 2024',
    logo: '/institutions/kmd.png',
  },
  {
    degree: 'Level 4 Diploma in Computing',
    institution: 'KMD College',
    period: 'Awarded in 27 Oct 2023',
    logo: '/institutions/kmd.png',
  },
];

export const CERTIFICATIONS: Education[] = [
  {
    degree: 'Introduction to agent skills',
    institution: 'Anthropic',
    period: 'Completed in 15 June 2026',
    logo: '/institutions/anthropic.png',
    credentialUrl: 'https://drive.google.com/file/d/1_4b2mwMdufwOVoO0zFCIjp0WzkqBwx2x/view?usp=sharing',
  },
  {
    degree: 'Introduction to subagents',
    institution: 'Anthropic',
    period: 'Completed in 12 June 2026',
    logo: '/institutions/anthropic.png',
    credentialUrl: 'https://drive.google.com/file/d/1jliyuZS62E_v7yRA_qTuOg-bUVGvGW8a/view?usp=sharing',
  },
  {
    degree: 'Claude Code 101',
    institution: 'Anthropic',
    period: 'Completed in 9 June 2026',
    logo: '/institutions/anthropic.png',
    credentialUrl: 'https://drive.google.com/file/d/1iO3ielH4qhniKw34XqdJVZ0pO-uDgQDm/view?usp=sharing',
  },
  {
    degree: 'Claude Code in Action',
    institution: 'Anthropic',
    period: 'Completed in 1 June 2026',
    logo: '/institutions/anthropic.png',
    credentialUrl: 'https://drive.google.com/file/d/1uzhx8GJ0sYTrUDLZGSLGjw3zw4dkUdxK/view?usp=sharing',
  },
  {
    degree: 'Introduction to Model Context Protocol',
    institution: 'Anthropic',
    period: 'Completed in 18 May 2026',
    logo: '/institutions/anthropic.png',
    credentialUrl: 'https://drive.google.com/file/d/1k0PfZ6qpgp3GyGCd3Z4g7J7HOSuBDEuY/view?usp=sharing',
  },
  {
    degree: 'Building with the Claude API',
    institution: 'Anthropic',
    period: 'Completed in 18 May 2026',
    logo: '/institutions/anthropic.png',
    credentialUrl: 'https://drive.google.com/file/d/1X8bwAoHFt3lHtpEwu_cgSRXEHPJfB0Ka/view?usp=sharing',
  },
  {
    degree: 'Professional Web Developer',
    institution: 'Fairway',
    period: 'Completed in 2024',
    logo: '/institutions/fairway.png',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Tun Rice Milling Management System',
    description: 'Developed a web-based system to manage appointments, paddy drying, milling output calculation based on moisture content, and inventory control. Improves operational efficiency and production monitoring.',
    techStack: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'Bootstrap', 'MySQL', 'Business Logic'],
    githubLink: 'https://github.com/PyaePhyo-Win/TRM',
    demoLink: 'https://trm-bmd0.onrender.com',
  },
  {
    title: 'ThinkSpace – Backend API System',
    description: 'Implemented backend APIs for comments, view tracking, statistical reports, and user moderation (block/hide). Designed scalable database relationships and structured REST endpoints.',
    techStack: ['REST API', 'Laravel', 'MySQL', 'Spatie'],
    githubLink: 'https://github.com/ewsd-g8/thinkspace-backend',
  },
  {
    title: 'Retail Management - Backend System',
    description: 'Built a C# backend API for a retail management system. Integrated using LINQ and Entity Framework Core with SQL Server. Includes stock control, cashier module, and reporting features.',
    techStack: ['C#', 'EF Core', 'LINQ', 'SQL Server'],
    githubLink: 'https://github.com/PyaePhyo-Win/retail-management-backend',
  },
  {
    title: 'Retail Management - Frontend System',
    description: 'Built a Vue frontend application for a retail management system. Used Axios for API requests. Used Pinia for state management. Integrated using LINQ and Entity Framework Core with SQL Server. Includes stock control, cashier module, and reporting features.',
    techStack: ['Vue', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Pinia', 'Tanstack Query'],
    githubLink: 'https://github.com/PyaePhyo-Win/retail-management-frontend',
  },
  {
    title: 'Retail Management - Frontend System',
    description: 'Built a React frontend application for a retail management system. Used Axios for API requests. Used Redux for state management. Includes stock control, cashier module, and reporting features.',
    techStack: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Redux', 'Tanstack Query'],
    githubLink: 'https://github.com/PyaePhyo-Win/retail-management-react',
  },
  {
    title: 'Medicare E-Commerce Store',
    description: 'Developed a secure online store with product listing, cart system, authentication, checkout, and order tracking.',
    techStack: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    githubLink: 'https://github.com/PyaePhyo-Win/Medicare-ecommerce-store',
  },
  {
    title: 'M-Hike – Offline Mobile App (Android)',
    description: 'Created an offline-capable mobile application using SQLite. Features include hike planning, voice notes, photo capture, and local data management.',
    techStack: ['Mobile Development', 'SQLite', 'Kotlin'],
    githubLink: 'https://github.com/PyaePhyo-Win/M-Hike-Native-Android',
  },
  {
    title: 'M-Hike – Offline Mobile App (Hybrid)',
    description: 'Created an offline-capable mobile application using SQLite. Features include hike planning, voice notes, photo capture, and local data management.',
    techStack: ['Mobile Development', 'SQLite', 'React Native'],
    githubLink: 'https://github.com/PyaePhyo-Win/M-Hike-Hybrid',
  },
  {
    title: 'Social Media Campaign',
    description: 'Conceptualized and managed a digital campaign for product launch using Facebook, Instagram, and LinkedIn to increase engagement and visibility.',
    techStack: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    githubLink: 'https://github.com/PyaePhyo-Win/social-media-campaign',
  },
  {
    title: 'Advanced LLM Integration',
    description: 'A hands-on project focused on mastering API integration using the Google GenAI SDK and Python. Developed automated pipelines for structured data extraction and prompt evaluation, implementing custom resilience layers with Tenacity to handle API rate-limiting and error recovery.',
    techStack: ['Python', 'Jupyter Notebook', 'Google GenAI SDK', 'Pydantic', 'Tenacity'],
    githubLink: 'https://github.com/PyaePhyo-Win/gemini-api-integration',
  },
  {
    title: 'NetFix CLI',
    description: 'A high-performance TypeScript CLI tool that autonomously diagnoses and repairs network/DNS issues across macOS, Linux, and Windows. It features dynamic interface detection, a polished terminal UX, and a fully automated CI/CD pipeline for professional-grade reliability and distribution.',
    techStack: ['TypeScript', 'Node.js', 'Commander.js', 'Execa', 'Chalk', 'Ora', 'Update-Notifier', 'Jest', 'ESLint', 'GitHub Actions'],
    githubLink: 'https://github.com/PyaePhyo-Win/net-fix-cli',
  },
  {
    title: 'Fahh Player (MacOS App)',
    description: 'FahhPlayer is a lightweight macOS menu bar utility that plays custom audio alerts when switching from AC to battery power or encountering zsh command errors.',
    techStack: ['Swift', 'SwiftUI', 'AVFoundation', 'IOKit', 'Combine'],
    githubLink: 'https://github.com/PyaePhyo-Win/fahhhhh-player',
  }
  , {
    title: 'MCP Chat CLI',
    description: 'MCP Chat is a command-line interface application built to learn and demonstrate how a Model Context Protocol (MCP) server and client interact. It enables chat capabilities with AI models through the Gemini API, supporting document retrieval, command-based prompts, and extensible tool integrations.',
    techStack: ['Python', 'Gemini API', 'Google GenAI SDK', 'Rich', 'MCP'],
    githubLink: 'https://github.com/PyaePhyo-Win/mcp-chat-cli',
  },
  {
    title: 'UIGen — AI-Powered React Component Generator',
    description: 'A full-stack web app that lets users describe UI components in plain English and instantly generate, preview, and iterate on production-ready React code. Features a live hot-reloading preview powered by a browser-side virtual file system, with support for saving and loading projects for registered users.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Prisma', 'SQLite', 'MongoDB', 'Google Gemini', 'Vercel AI SDK', 'Babel Standalone'],
    githubLink: 'https://github.com/PyaePhyo-Win/ui-gen',
  }
];

export const SKILLS: Skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Kotlin'],
  Backend: ['C# (.NET)', 'PHP (Laravel)', 'Python', 'Kotlin', 'Hangfire'],
  Database: ['MSSQL', 'PostgreSQL', 'MySQL'],
  Tools: ['Git', 'Docker', 'EF Core', 'GitHub Actions', 'GitHub Copilot', 'Subagents', 'Agent Skills'],
  AI: [
    'Prompt Engineering',
    'Prompt Evaluation',
    'Structured Output (JSON Mode)',
    'Streaming Responses',
    'Multimodal LLMs (Vision)', 'GPT', 'Gemini', 'Tool Use', 'RAG', 'Agentic Search'
  ]
};
