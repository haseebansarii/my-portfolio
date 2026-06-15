import Seo from '../components/Seo';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';

export default function SkillsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Skills & Experience | Haseeb Ansari"
        description="Technical skills and experience of Haseeb Ansari: React.js, React Native, Node.js, TypeScript, Next.js, MongoDB, PostgreSQL, Supabase, Firebase, Tailwind CSS and more."
        path="/skills"
      />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
