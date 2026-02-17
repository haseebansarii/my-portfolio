import { lazy, Suspense } from 'react';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components below the fold for better performance
const StatsSection = lazy(() => import('./components/StatsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const CtaBanner = lazy(() => import('./components/CtaBanner'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#f0f4f8] dark:bg-[#080c12] text-slate-800 dark:text-white transition-colors duration-400 mobile-safe">
      <div className="fixed inset-0 pointer-events-none z-0 mobile-safe">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-sky-400/[0.06] dark:bg-sky-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-teal-400/[0.06] dark:bg-teal-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[450px] h-[450px] bg-cyan-400/[0.04] dark:bg-cyan-500/[0.02] rounded-full blur-[110px]" />
      </div>
      <ParticleField />
      <Navbar />
      <main className="relative z-10 mobile-safe container-safe">
        <HeroSection />
        <Suspense fallback={<LoadingSpinner />}>
          <div className="relative">
            <AboutSection />
            {/* <StatsSection /> */}
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
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
