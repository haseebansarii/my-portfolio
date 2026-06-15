import Seo from '../components/Seo';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title="Contact & Hire Haseeb Ansari — Full Stack Developer"
        description="Get in touch with Haseeb Ansari to hire a full stack, React Native and Supabase developer. Reach out via the contact form, email, WhatsApp or Fiverr. Available for US clients."
        path="/contact"
      />
      <h1 className="sr-only">Contact Haseeb Ansari to Hire a Full Stack, Mobile &amp; Supabase Developer</h1>
      <ContactSection />
    </div>
  );
}
