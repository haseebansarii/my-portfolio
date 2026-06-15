import { Suspense, lazy } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const ProjectsSection = lazy(() => import('../components/ProjectsSection'));
const CtaBanner = lazy(() => import('../components/CtaBanner'));

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectsSection />
        <CtaBanner />
      </Suspense>
    </div>
  );
}
