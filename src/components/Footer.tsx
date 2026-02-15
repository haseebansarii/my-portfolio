import { Terminal, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/[0.06] dark:border-white/[0.06] bg-[#e8ecf0] dark:bg-[#060a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg glass-badge flex items-center justify-center">
                <Terminal className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </div>
              <span className="font-mono text-lg font-semibold text-slate-900 dark:text-white">
                <span className="text-sky-600/70 dark:text-sky-400/70">&gt;</span> haseeb_
              </span>
            </div>
            <p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer specializing in MERN, React Native, Supabase & Firebase.
              Turning ideas into production-ready applications.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-500 dark:text-gray-500 hover:text-sky-600 dark:hover:text-sky-300 text-sm transition-colors text-left w-fit"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                { icon: ExternalLink, href: personalInfo.fiverr, label: 'Fiverr' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center text-slate-500 dark:text-gray-500 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/[0.08] transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-gray-600 text-sm font-mono">
            <span className="text-slate-500 dark:text-gray-500">&copy;</span> {currentYear} Haseeb Ansari. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-gray-600 text-xs font-mono">
            <span className="text-slate-500 dark:text-gray-500">Built with</span>{' '}
            <span className="text-slate-600 dark:text-gray-400">React</span>{' '}
            <span className="text-slate-500 dark:text-gray-500">+</span>{' '}
            <span className="text-slate-600 dark:text-gray-400">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
