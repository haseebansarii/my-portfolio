import Seo from '../components/Seo';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="About — Full Stack & React Native Developer | Haseeb Ansari"
        description="About Haseeb Ansari — a full stack web and mobile app developer with deep expertise in MERN, React Native, Supabase, Firebase and Next.js, shipping production-ready apps for clients in the US and worldwide."
        path="/about"
      />
      <h1 className="sr-only">About Haseeb Ansari — Full Stack Web &amp; Mobile App Developer (MERN, React Native, Supabase)</h1>
      <AboutSection />
      <EducationSection />
      <TestimonialsSection />
    </div>
  );
}
