import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ExternalLink, Github, Linkedin, Mail, MessageSquare, CheckCircle, AlertCircle, Loader, MessageCircle, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // EmailJS configuration using environment variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly.');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/iStock-2154971136.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.12] dark:opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// get in touch"
          title="Let's Work Together"
          description="Have a project in mind? Let's discuss how I can help bring it to life."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl glass-panel glass-shine">
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">Preferred Method</h3>
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl glass-subtle hover:bg-white/[0.05] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white font-medium">Hire Me on Fiverr</p>
                    <p className="text-slate-400 dark:text-gray-500 text-sm">Best response time & secure payments</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </a>
              </div>

              <div className="p-6 rounded-2xl glass-panel glass-shine">
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">Other Channels</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: MessageCircle, label: 'WhatsApp', value: '+92 323 773 8253', href: personalInfo.whatsapp },
                    { icon: Github, label: 'GitHub', value: 'github.com/haseebansarii', href: personalInfo.github },
                    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/haseebansarii', href: personalInfo.linkedin },
                  ].map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg glass-badge flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                        <channel.icon className="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-gray-500">{channel.label}</p>
                        <p className="text-sm text-slate-700 dark:text-gray-300">{channel.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="p-6 lg:p-8 rounded-2xl glass-panel glass-shine">
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">
                    {'>'} name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none font-mono text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">
                    {'>'} email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none font-mono text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">
                    {'>'} message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none font-mono text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all backdrop-blur-sm ${
                    status === 'success'
                      ? 'bg-green-600 dark:bg-green-500 text-white'
                      : status === 'error'
                      ? 'bg-red-600 dark:bg-red-500 text-white'
                      : status === 'sending'
                      ? 'bg-slate-600 dark:bg-slate-400 text-white cursor-not-allowed'
                      : 'bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] hover:bg-slate-800 dark:hover:bg-white hover:shadow-lg hover:shadow-white/10'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {status === 'error' && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 dark:text-red-400 text-sm text-center mt-2"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-sm text-center mt-2"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
