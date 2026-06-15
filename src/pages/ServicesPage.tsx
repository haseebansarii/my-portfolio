import { Suspense, lazy } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const ServicesSection = lazy(() => import('../components/ServicesSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const ProcessSection = lazy(() => import('../components/ProcessSection'));
const FaqSection = lazy(() => import('../components/FaqSection'));

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
      </Suspense>
    </div>
  );
}
