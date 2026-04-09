import type { Project, NavLink, Skills, WorkExperience, Education, Stat } from '../types';

export const STATS: Stat[] = [
  { label: 'Years of Experience', value: '1.5', iconKey: 'experience' },
  { label: 'Projects Completed', value: '12', iconKey: 'projects' },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: 'AI MODEL DEVELOPER & TRAINER',
    company: 'MY DAY THU KYWAL',
    description: [
      'Designed and implemented custom machine learning models using TensorFlow, PyTorch, and scikit-learn.',
      'Trained deep neural networks for tasks such as classification and object detection.',
      'Applied transfer learning and fine-tuning on pre-trained models (BERT, GPT, YOLO, ResNet).',
      'Collected, cleaned, and annotated large datasets from various sources.',
    ],
  },
  {
    role: 'JUNIOR PROGRAMMER',
    company: 'THETYS Co., Ltd.',
    description: [
      'Backend: C# (.NET), Hangfire, MSSQL — REST API, background jobs, database operations, OpenAI integrations.',
      'Frontend: Vue.js, TypeScript, shadcn/ui, VueFlow, Pinia — responsive UIs, state management.',
      'Data & APIs: Axios, TanStack Query — API integration, data fetching, and synchronization.',
      'Testing: Postman, k6, Playwright — API validation, performance, and end-to-end testing.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Level 4 Diploma in Computing',
    institution: 'KMD Institute',
    period: 'Awarded in October 2023',
  },
  {
    degree: 'Level 5 Diploma in Computing',
    institution: 'KMD Institute',
    period: 'Awarded in October 2024',
  },
  {
    degree: 'Final Year (B.Sc Hons Computing)',
    institution: 'University of Greenwich (UK)',
    period: 'Completed (Expecting to be awarded Degree)',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Tun Rice Milling Management System',
    description: 'Developed a web-based system to manage appointments, paddy drying, milling output calculation based on moisture content, and inventory control. Improves operational efficiency and production monitoring.',
    techStack: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'Bootstrap', 'MySQL', 'Business Logic'],
    githubLink: 'https://github.com/PyaePhyo-Win/TRM',
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
    title: 'Advanced LLM Integration (Learning Project)',
    description: 'A hands-on project focused on mastering API integration using the Google GenAI SDK and Python. Developed automated pipelines for structured data extraction and prompt evaluation, implementing custom resilience layers with Tenacity to handle API rate-limiting and error recovery.',
    techStack: ['Python', 'Jupyter Notebook', 'Google GenAI SDK', 'Pydantic', 'Tenacity'],
    githubLink: 'https://github.com/PyaePhyo-Win/gemini-api-integration',
  }
];

export const SKILLS: Skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Bootstrap', 'Tailwind', 'TypeScript', 'Kotlin', 'React Native'],
  Backend: ['C#', 'PHP', 'Laravel', 'Python'],
  Database: ['Microsoft SQL Server', 'MySQL'],
  Tools: ['Git', 'EF Core'],
  AI: ['Prompt Engineering', 'Prompt Evaluation', 'Structured Output (JSON/Response Schemas)', 'OPENAI API', 'GEMINI API', 'Streaming Responses', 'Multimodal LLMs (Vision)']
};
