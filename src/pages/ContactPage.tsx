import Seo from '../components/Seo';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Contact Haseeb Ansari | Hire a Full Stack Developer"
        description="Get in touch with Haseeb Ansari for freelance full stack development. Reach out via the contact form, email, WhatsApp or Fiverr."
        path="/contact"
      />
      <ContactSection />
    </div>
  );
}
