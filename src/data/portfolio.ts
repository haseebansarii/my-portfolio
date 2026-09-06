import {
  Code2, Smartphone, Database, Cloud, Globe, Shield,
  Layers, Zap, GitBranch, Terminal, Server, Palette
} from 'lucide-react';

export const personalInfo = {
  name: 'Haseeb Ansari',
  title: 'Full Stack Developer',
  tagline: 'Building Digital Experiences That Matter',
  bio: `I'm a passionate Full Stack Developer with deep expertise in the MERN stack, React Native (Expo), Supabase, and Firebase. I craft high-performance web and mobile applications that solve real-world problems. Available on Fiverr for freelance projects, I bring dedication, clean code, and pixel-perfect implementations to every project I work on.`,
  fiverr: 'https://www.fiverr.com/haseebansari_',
  github: 'https://github.com/haseebansarii',
  linkedin: 'https://www.linkedin.com/in/haseebansarii/',
  email: 'ansarihaseeb615@gmail.com',
  phone: '+92 3237738253',
  whatsapp: 'https://wa.me/923237738253',
  address: 'Bilal Park, Kamoke, Punjab, Pakistan',
};

export const roles = [
  'MERN Stack Developer',
  'React Native Developer',
  'Supabase Expert',
  'Firebase Developer',
  'Full Stack Engineer',
  'Fiverr Freelancer',
];

export const skills = [
  { name: 'React.js', level: 95, category: 'frontend', icon: Code2 },
  { name: 'React Native / Expo', level: 92, category: 'mobile', icon: Smartphone },
  { name: 'Node.js / Express', level: 90, category: 'backend', icon: Server },
  { name: 'MongoDB', level: 88, category: 'database', icon: Database },
  { name: 'Supabase', level: 93, category: 'database', icon: Shield },
  { name: 'Firebase', level: 90, category: 'backend', icon: Cloud },
  { name: 'TypeScript', level: 91, category: 'frontend', icon: Terminal },
  { name: 'Next.js', level: 87, category: 'frontend', icon: Globe },
  { name: 'Tailwind CSS', level: 94, category: 'frontend', icon: Palette },
  { name: 'PostgreSQL', level: 85, category: 'database', icon: Database },
  { name: 'REST APIs / GraphQL', level: 89, category: 'backend', icon: Zap },
  { name: 'Git / CI/CD', level: 88, category: 'tools', icon: GitBranch },
];

// Projects live in their own module — some carry full case-study content.
export { projects, getProject, caseStudyProjects } from './projects';
export type { Project, CaseStudy, GalleryShot } from './projects';

export const services = [
  {
    icon: Layers,
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development using MERN stack with modern UI/UX, responsive design, and scalable architecture.',
    features: ['React/Next.js Frontend', 'Node.js/Express Backend', 'MongoDB/PostgreSQL', 'REST & GraphQL APIs'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications built with React Native and Expo, delivering native performance on iOS and Android.',
    features: ['React Native / Expo', 'iOS & Android', 'Push Notifications', 'Offline Support'],
  },
  {
    icon: Database,
    title: 'Backend & Database Solutions',
    description: 'Robust backend systems with Supabase and Firebase, featuring real-time data sync, authentication, and cloud functions.',
    features: ['Supabase / Firebase', 'Real-time Databases', 'Authentication', 'Cloud Functions'],
  },
  {
    icon: Globe,
    title: 'API Development & Integration',
    description: 'Custom API development and third-party integrations including payment gateways, social auth, and cloud services.',
    features: ['RESTful APIs', 'Third-party Integration', 'Payment Gateways', 'OAuth / Social Auth'],
  },
];

export const stats = [
  { label: 'Projects Completed', value: '70+' },
  { label: 'Happy Clients', value: '40+' },
  { label: 'Years Experience', value: '4+' },
  { label: 'Five Star Reviews', value: '5 Star' },
];

export const testimonials = [
  {
    name: 'James Mitchell',
    role: 'Startup Founder',
    text: 'Haseeb delivered an exceptional full-stack application for our startup. His understanding of the MERN stack is top-notch, and he went above and beyond to ensure every feature worked flawlessly. Communication was excellent throughout.',
    rating: 5,
    platform: 'Fiverr',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    text: 'Working with Haseeb on our React Native app was a great experience. He turned our Figma designs into a pixel-perfect mobile app with smooth animations. Delivered on time and handled revisions professionally.',
    rating: 5,
    platform: 'Fiverr',
  },
  {
    name: 'Omar Hassan',
    role: 'E-Commerce Owner',
    text: 'Haseeb built a complete e-commerce platform with Supabase backend for us. Real-time inventory, payment processing, admin panel — everything works seamlessly. Highly recommend for any serious project.',
    rating: 5,
    platform: 'Fiverr',
  },
  {
    name: 'Lisa Park',
    role: 'CTO, HealthTech',
    text: 'We hired Haseeb to rebuild our Firebase backend and optimize our React Native app. The performance improvements were dramatic. He also wrote clean, well-documented code that our team could easily maintain.',
    rating: 5,
    platform: 'Fiverr',
  },
];

export const experience = [
  {
    year: '2024 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Freelance / Fiverr',
    description: 'Leading complex web and mobile projects for international clients. Specializing in React, React Native, Supabase, and Firebase solutions.',
    highlights: ['50+ Projects Delivered', 'Top Rated Seller', '5-Star Average'],
  },
  {
    year: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'Freelance',
    description: 'Built production-grade applications using MERN stack. Developed cross-platform mobile apps with React Native and Expo.',
    highlights: ['MERN Stack', 'React Native', 'Firebase'],
  },
  {
    year: '2021 - 2022',
    title: 'Frontend Developer',
    company: 'Remote',
    description: 'Focused on building responsive, accessible web applications with React and TypeScript. Integrated REST and GraphQL APIs.',
    highlights: ['React', 'TypeScript', 'REST APIs'],
  },
  {
    year: '2020 - 2021',
    title: 'Junior Developer',
    company: 'Self-Taught / Early Career',
    description: 'Learned modern web development from the ground up. Built personal projects and started contributing to open source.',
    highlights: ['JavaScript', 'Node.js', 'MongoDB'],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project requirements, goals, timeline, and budget. I analyze the scope and provide a clear proposal with milestones.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'I design the technical architecture, select the right tech stack, plan the database schema, and create a development roadmap.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'I build your application iteratively with regular progress updates. Clean code, best practices, and thorough testing at every stage.',
  },
  {
    step: '04',
    title: 'Review & Testing',
    description: 'Comprehensive testing across devices and browsers. You review each milestone and provide feedback for refinements.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'I deploy your application to production with proper CI/CD setup, monitoring, and documentation for future maintenance.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Post-launch support to handle any issues, performance tuning, and feature iterations based on real user feedback.',
  },
];

export const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in the MERN stack (MongoDB, Express, React, Node.js), React Native with Expo for mobile apps, and backend solutions with Supabase and Firebase. I also work with TypeScript, Next.js, PostgreSQL, and Tailwind CSS.',
  },
  {
    question: 'How do I hire you on Fiverr?',
    answer: 'Visit my Fiverr profile, browse my available gigs, and place an order or send me a message describing your project. I typically respond within a few hours and provide a custom offer based on your requirements.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary by project complexity. A simple landing page takes 3-5 days, a full web application 2-6 weeks, and a mobile app 4-8 weeks. I provide accurate estimates after understanding your specific requirements.',
  },
  {
    question: 'Do you build both web and mobile apps?',
    answer: 'Yes. I build responsive web applications with React/Next.js and cross-platform mobile apps with React Native and Expo that work on both iOS and Android from a single codebase.',
  },
  {
    question: 'Do you provide post-delivery support?',
    answer: 'Absolutely. I offer post-launch support to fix bugs, handle deployment issues, and make minor adjustments. For ongoing maintenance, we can discuss a separate arrangement.',
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'Yes. I regularly work with existing projects — fixing bugs, adding features, optimizing performance, or migrating to newer technologies. I can work with any JavaScript/TypeScript codebase.',
  },
];

export const packages = [
  {
    name: 'Starter',
    price: '$150',
    description: 'Perfect for landing pages, personal sites, and small business websites.',
    features: [
      'Single page web application',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '3-day delivery',
      '1 revision round',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$500',
    description: 'Ideal for full-featured web apps, dashboards, and e-commerce sites.',
    features: [
      'Multi-page web application',
      'User authentication',
      'Database integration',
      'Admin dashboard',
      'API development',
      'Payment integration',
      '14-day delivery',
      '3 revision rounds',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$1200+',
    description: 'For complex platforms, mobile apps, and full-stack ecosystems.',
    features: [
      'Full-stack web + mobile app',
      'Real-time features',
      'Cloud infrastructure setup',
      'CI/CD pipeline',
      'Performance optimization',
      'Comprehensive testing',
      'Custom timeline',
      'Unlimited revisions',
    ],
    highlighted: false,
  },
];

export const education = [
  {
    period: '2020 - 2024',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of the Punjab',
    description: 'Focused on software engineering, data structures, algorithms, and modern web technologies.',
  },
];

export const certifications = [
  { name: 'Meta Front-End Developer', issuer: 'Meta / Coursera', year: '2023' },
  { name: 'React Native Specialization', issuer: 'Meta / Coursera', year: '2023' },
  { name: 'Full Stack Open', issuer: 'University of Helsinki', year: '2022' },
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2021' },
];

export const terminalLines = [
  { prefix: '~$', text: 'whoami', delay: 0 },
  { prefix: '', text: 'Haseeb Ansari - Full Stack Developer', delay: 800 },
  { prefix: '~$', text: 'cat skills.json', delay: 1600 },
  { prefix: '', text: '["MERN", "React Native", "Supabase", "Firebase"]', delay: 2400 },
  { prefix: '~$', text: 'cat status.txt', delay: 3200 },
  { prefix: '', text: 'Available for freelance work on Fiverr', delay: 4000 },
  { prefix: '~$', text: 'echo "Let\'s build something amazing!"', delay: 4800 },
  { prefix: '', text: "Let's build something amazing!", delay: 5600 },
];
