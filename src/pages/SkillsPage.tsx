import { Suspense, lazy } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const SkillsSection = lazy(() => import('../components/SkillsSection'));
const ExperienceSection = lazy(() => import('../components/ExperienceSection'));

export default function SkillsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Suspense fallback={<LoadingSpinner />}>
        <SkillsSection />
        <ExperienceSection />
      </Suspense>
    </div>
  );
}
