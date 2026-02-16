import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import EducationSection from './components/EducationSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
      </main>
      <Footer />
    </div>
  );
}
