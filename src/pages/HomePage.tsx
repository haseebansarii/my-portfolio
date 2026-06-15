import Seo from '../components/Seo';
import { faqJsonLd, servicesJsonLd } from '../data/structuredData';
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
        title="Haseeb Ansari — Full Stack, React Native & Supabase Developer"
        description="Hire Haseeb Ansari, a full stack developer building MERN web apps, React Native mobile apps, and Supabase/Firebase backends with Next.js, Vite & AI features. Available for US clients on Fiverr."
        path="/"
        jsonLd={[servicesJsonLd, faqJsonLd]}
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
