import { Suspense, lazy } from 'react';
import AboutSection from '../components/AboutSection';
import LoadingSpinner from '../components/LoadingSpinner';

const EducationSection = lazy(() => import('../components/EducationSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <AboutSection />
      <Suspense fallback={<LoadingSpinner />}>
        <EducationSection />
        <TestimonialsSection />
      </Suspense>
    </div>
  );
}
