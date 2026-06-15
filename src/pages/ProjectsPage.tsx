import Seo from '../components/Seo';
import ProjectsSection from '../components/ProjectsSection';
import CtaBanner from '../components/CtaBanner';

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Projects: MERN, React Native & Supabase Apps | Haseeb Ansari"
        description="Selected full stack web and mobile app projects by Haseeb Ansari — built with React, Next.js, React Native, Node.js, Supabase and Firebase, including real-time and AI-powered features."
        path="/projects"
      />
      <h1 className="sr-only">Full Stack Web &amp; Mobile App Projects — MERN, React Native, Supabase &amp; Firebase</h1>
      <ProjectsSection />
      <CtaBanner />
    </div>
  );
}
