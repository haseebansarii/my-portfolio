import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EducationSection from '../components/EducationSection';
import FaqSection from '../components/FaqSection';
import CtaBanner from '../components/CtaBanner';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Haseeb Ansari | Full Stack Developer (MERN, React Native)"
        description="Full Stack Developer specializing in MERN, React Native, Supabase & Firebase. I build high-performance web and mobile apps. Available for freelance work on Fiverr."
        path="/"
      />
      <HeroSection />
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
    </>
  );
}
