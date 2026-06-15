import Seo from '../components/Seo';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import ProcessSection from '../components/ProcessSection';
import FaqSection from '../components/FaqSection';

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Services & Pricing | Haseeb Ansari"
        description="Freelance development services by Haseeb Ansari — full stack web apps, React Native mobile apps, API & backend development. See pricing, process and FAQs."
        path="/services"
      />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <FaqSection />
    </div>
  );
}
