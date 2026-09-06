import type { RouteRecord } from 'vite-react-ssg';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { caseStudyProjects } from './data/projects';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      {
        path: 'projects/:slug',
        element: <ProjectDetailPage />,
        // Only projects with written case studies get pre-rendered pages.
        getStaticPaths: () => caseStudyProjects.map((p) => `/projects/${p.slug}`),
      },
      { path: 'services', element: <ServicesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
];
