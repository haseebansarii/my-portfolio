import Seo from '../components/Seo';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="About Haseeb Ansari | Full Stack Developer"
        description="Get to know Haseeb Ansari — a Full Stack Developer with deep expertise in the MERN stack, React Native, Supabase and Firebase, with a track record of shipping production-ready apps."
        path="/about"
      />
      <AboutSection />
      <EducationSection />
      <TestimonialsSection />
    </div>
  );
}
