import Seo from '../components/Seo';
import { servicesJsonLd, faqJsonLd } from '../data/structuredData';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import ProcessSection from '../components/ProcessSection';
import FaqSection from '../components/FaqSection';

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Hire a Full Stack, Mobile & Supabase Developer | Services"
        description="Freelance development services: MERN full stack web apps, React Native mobile apps, Supabase/Firebase backends, API development and AI features with Next.js. Pricing, process & FAQs. Serving US clients remotely."
        path="/services"
        jsonLd={[servicesJsonLd, faqJsonLd]}
      />
      <h1 className="sr-only">Freelance Full Stack, React Native, Supabase &amp; Firebase Development Services for US Clients</h1>
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <FaqSection />
    </div>
  );
}
