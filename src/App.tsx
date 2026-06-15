import type { RouteRecord } from 'vite-react-ssg';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
];
