import { lazy, Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components below the fold for better performance
const ExperienceSection = lazy(() => import('../components/ExperienceSection'));
const SkillsSection = lazy(() => import('../components/SkillsSection'));
const ProjectsSection = lazy(() => import('../components/ProjectsSection'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const ProcessSection = lazy(() => import('../components/ProcessSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const EducationSection = lazy(() => import('../components/EducationSection'));
const FaqSection = lazy(() => import('../components/FaqSection'));
const CtaBanner = lazy(() => import('../components/CtaBanner'));
const ContactSection = lazy(() => import('../components/ContactSection'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="relative">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <PricingSection />
          <ProcessSection />
          <TestimonialsSection />
          <EducationSection />
          <FaqSection />
          <CtaBanner />
          <ContactSection />
        </div>
      </Suspense>
    </>
  );
}
