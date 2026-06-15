import { Suspense, lazy } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const ContactSection = lazy(() => import('../components/ContactSection'));

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
