// All page content lives here. Edit this file instead of the components.

export const profile = {
  name: 'Luthfi Yusuf',
  role: 'Full-Stack Developer',
  location: 'Banyumas, Central Java, Indonesia',
  email: 'luthfiyusufti@gmail.com',
  github: 'https://github.com/ucup1127',
  cv: '/Luthfi-Yusuf-CV.pdf',
  description:
    'Luthfi Yusuf is a full-stack web developer from Banyumas, Indonesia, working with Next.js, TypeScript, Laravel, and PostgreSQL. Open to remote junior roles.',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const about = [
  'I build web applications from the first database table to the deployed site. My main project, MTSMUHBMS, is a multi-tenant digital library that five Muhammadiyah junior high schools in Banyumas use today. I designed, built, and shipped it on my own.',
  'I am an Informatics student at Universitas Muhammadiyah Purwokerto (software engineering track, semester 7). I write Python pipelines for research data and have built a small Arduino prototype. I am looking for a remote junior role — frontend, backend, or full-stack.',
];

export const stats = [
  { value: '5', label: 'schools running on MTSMUHBMS' },
  { value: '2+', label: 'years building web apps' },
  { value: '80%+', label: 'less manual work with a Python pipeline' },
];

export const techStrip = [
  'Next.js',
  'React',
  'TypeScript',
  'Laravel',
  'PHP',
  'Python',
  'PostgreSQL',
  'MySQL',
  'Prisma',
  'Tailwind CSS',
  'Docker',
  'Git',
];

export const featured = {
  name: 'MTSMUHBMS',
  tagline: 'A digital library shared by five Muhammadiyah junior high schools in Banyumas.',
  role: 'Sole developer, from design to deployment',
  summary:
    'Each school gets its own workspace with its own users, books, and loans, while a super admin manages every school from one place. It is live and used by the schools today.',
  highlights: [
    'Multi-tenant design: every school keeps its own users, books, and loans, separate from the others.',
    'Digital book catalog with categories, plus physical book lending with loans, extensions, history, and fines.',
    'Student reports, a chat between school admins, a photo gallery, and activity and system logs.',
    'Super admin tools to add schools, manage users, and switch between school workspaces.',
  ],
  stack: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS'],
  live: undefined as string | undefined,
  repo: undefined as string | undefined,
};

export type Project = {
  name: string;
  context: string;
  description: string;
  tags: string[];
  repo?: string;
};

export const others: Project[] = [
  {
    name: 'Kobo to SPSS pipeline',
    context: 'BiC-SMART research project, UMP and Banyumas Regency',
    description:
      'A Python pipeline that pulls KoboToolbox survey data, validates it, and exports structured SPSS files. It cut manual processing time by over 80%.',
    tags: ['Python', 'pandas', 'pyreadstat'],
  },
  {
    name: 'Certificate generator',
    context: 'Community service project, KKN',
    description:
      'Generates personalized certificates from spreadsheet data automatically, for thousands of records.',
    tags: ['Python', 'Pillow', 'openpyxl'],
  },
  {
    name: 'Height measurement device',
    context: 'Community service project, KKN',
    description:
      'An Arduino prototype that measures height with an ultrasonic sensor and shows it on an LCD, built to make village health checks more accurate.',
    tags: ['Arduino Uno', 'HC-SR04', 'I2C LCD'],
  },
  {
    name: 'Digital invitation app',
    context: 'University course project',
    description:
      'A web app for creating and sharing digital invitations, built as a separate frontend and backend.',
    tags: [],
  },
  {
    name: 'Link hub',
    context: 'Web project',
    description: 'A link-in-bio style page that collects links in one place, similar to Linktree.',
    tags: [],
  },
  {
    name: 'Sanggar website',
    context: 'Web project',
    description: 'A website for a sanggar, a local community studio.',
    tags: [],
  },
];

export const approach = [
  {
    title: 'Ship end-to-end',
    body: 'I take projects from first database table to deployed URL. MTSMUHBMS started as a sketch and now runs five schools — I designed the schema, built the API, and deployed it myself.',
    tag: 'Full-stack',
  },
  {
    title: 'Talk to the people using it',
    body: 'Before writing code, I sit with school admins to see how they actually lend books. That is why the loan extension flow has a one-click button instead of a form.',
    tag: 'Product thinking',
  },
  {
    title: 'Boring tech, on purpose',
    body: 'Next.js, TypeScript, Postgres, Prisma. Not because they are trendy, but because they let me hand off a codebase someone else can read in a week.',
    tag: 'Stack choices',
  },
  {
    title: 'Automate the manual',
    body: 'The Kobo to SPSS pipeline exists because a researcher was copy-pasting survey rows for hours. Now it runs in one command and cut 80% of that work.',
    tag: 'Tooling',
  },
];

export const skills = [
  { group: 'Build', items: ['Next.js', 'Laravel', 'React', 'TypeScript'] },
  { group: 'Data', items: ['PostgreSQL', 'Prisma', 'Python', 'pandas'] },
  { group: 'Ship', items: ['Docker', 'Git', 'Cloudflare Tunnel'] },
  { group: 'Design', items: ['Tailwind CSS', 'Figma'] },
];