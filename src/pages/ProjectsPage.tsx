import Seo from '../components/Seo';
import ProjectsSection from '../components/ProjectsSection';
import CtaBanner from '../components/CtaBanner';

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Projects & Portfolio | Haseeb Ansari"
        description="Selected web and mobile projects built by Haseeb Ansari using React, React Native, Node.js, Supabase and Firebase."
        path="/projects"
      />
      <ProjectsSection />
      <CtaBanner />
    </div>
  );
}
