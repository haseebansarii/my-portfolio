import Seo from '../components/Seo';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';

export default function SkillsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Skills: React, React Native, Next.js, Supabase | Haseeb Ansari"
        description="Technical skills and experience of Haseeb Ansari: React.js, React Native, Node.js, TypeScript, Next.js, Vite, MongoDB, PostgreSQL, Supabase, Firebase, AI feature integration and Tailwind CSS."
        path="/skills"
      />
      <h1 className="sr-only">Full Stack Developer Skills — React, React Native, Node.js, Next.js, Supabase, Firebase &amp; AI Features</h1>
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
