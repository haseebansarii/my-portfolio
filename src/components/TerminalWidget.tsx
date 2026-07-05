import { useEffect, useRef, useState, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { personalInfo, skills, projects, services } from '../data/portfolio';

type Line = { id: number; content: ReactNode };

const PAGES = ['home', 'about', 'skills', 'projects', 'services', 'contact'];

const Out = ({ children }: { children: ReactNode }) => (
  <div className="text-slate-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{children}</div>
);

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:text-sky-500"
  >
    {children}
  </a>
);

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  const push = (content: ReactNode) => {
    idRef.current += 1;
    setLines((prev) => [...prev.slice(-200), { id: idRef.current, content }]);
  };

  // Welcome banner on first open
  useEffect(() => {
    if (isOpen && !hasBeenOpened) {
      setHasBeenOpened(true);
      push(
        <Out>
          <span className="text-sky-600 dark:text-sky-400">Welcome to haseeb_os v1.0</span>
          {'\n'}Type <span className="text-teal-600 dark:text-teal-300">help</span> to see what I can do.
          {'\n'}Tip: press Ctrl + ` anytime to toggle this terminal.
        </Out>
      );
    }
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 80);
  }, [isOpen, hasBeenOpened]);

  // Global shortcuts: Ctrl+` toggles, Escape closes
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Keep scrolled to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    push(
      <div>
        <span className="text-teal-600 dark:text-teal-400">guest@mhaseeb.dev</span>
        <span className="text-slate-400 dark:text-gray-500">:~$ </span>
        <span className="text-slate-800 dark:text-white">{cmd}</span>
      </div>
    );
    if (!cmd) return;

    const [name, ...args] = cmd.toLowerCase().split(/\s+/);
    const arg = args.join(' ');

    switch (name) {
      case 'help':
        push(
          <Out>
            {'Available commands:\n'}
            {'  about      — who I am\n'}
            {'  skills     — my tech stack\n'}
            {'  projects   — things I\'ve built\n'}
            {'  services   — what I can do for you\n'}
            {'  contact    — how to reach me\n'}
            {'  hire       — the important one ;)\n'}
            {'  ls         — list pages\n'}
            {'  cd <page>  — go to a page (e.g. cd projects)\n'}
            {'  theme      — toggle dark/light\n'}
            {'  clear      — clear the screen'}
          </Out>
        );
        break;

      case 'about':
      case 'whoami':
        push(
          <Out>
            {name === 'whoami' ? 'guest — but you could be my next client ;)\n\n' : ''}
            {personalInfo.name} — {personalInfo.title}
            {'\n'}{personalInfo.bio}
          </Out>
        );
        break;

      case 'skills':
        push(
          <Out>
            {skills
              .map((s) => `${s.name.padEnd(24, ' ')} ${'█'.repeat(Math.round(s.level / 10)).padEnd(10, '░')} ${s.level}%`)
              .join('\n')}
          </Out>
        );
        break;

      case 'projects':
        push(
          <Out>
            {projects.map((p) => `▸ ${p.title}  [${p.tech.slice(0, 3).join(', ')}]`).join('\n')}
            {'\n\n'}Run <span className="text-teal-600 dark:text-teal-300">cd projects</span> to see them in full.
          </Out>
        );
        break;

      case 'services':
        push(
          <Out>
            {services.map((s) => `▸ ${s.title}\n    ${s.description}`).join('\n')}
          </Out>
        );
        break;

      case 'contact':
        push(
          <Out>
            {'email    → '}<Link href={`mailto:${personalInfo.email}`}>{personalInfo.email}</Link>
            {'\nwhatsapp → '}<Link href={personalInfo.whatsapp}>chat with me</Link>
            {'\ngithub   → '}<Link href={personalInfo.github}>haseebansarii</Link>
            {'\nlinkedin → '}<Link href={personalInfo.linkedin}>haseebansarii</Link>
            {'\nfiverr   → '}<Link href={personalInfo.fiverr}>haseebansari_</Link>
          </Out>
        );
        break;

      case 'hire':
        push(
          <Out>
            Excellent choice. Opening Fiverr… or reach me on <Link href={personalInfo.whatsapp}>WhatsApp</Link>.
          </Out>
        );
        window.open(personalInfo.fiverr, '_blank', 'noopener');
        break;

      case 'ls':
        push(<Out>{PAGES.join('  ')}</Out>);
        break;

      case 'cd': {
        const page = arg.replace(/^\//, '');
        if (!page || page === '~' || page === 'home') {
          navigate('/');
          push(<Out>→ home</Out>);
        } else if (PAGES.includes(page)) {
          navigate(`/${page}`);
          push(<Out>→ /{page}</Out>);
        } else {
          push(<Out>cd: no such page: {page} — try `ls`</Out>);
        }
        break;
      }

      case 'theme':
        toggleTheme();
        push(<Out>Theme toggled. Easy on the eyes.</Out>);
        break;

      case 'clear':
        setLines([]);
        break;

      case 'sudo':
        push(<Out>guest is not in the sudoers file. This incident will be reported… to my inbox 📬</Out>);
        break;

      case 'rm':
        push(<Out>Nice try 😄 This portfolio is write-protected.</Out>);
        break;

      case 'coffee':
        push(<Out>☕ Brewing… deployed to production. Runtime fuel secured.</Out>);
        break;

      case 'exit':
        setIsOpen(false);
        break;

      default:
        push(
          <Out>
            command not found: {name} — try <span className="text-teal-600 dark:text-teal-300">help</span>
          </Out>
        );
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setCmdHistory((prev) => [...prev, input]);
    }
    setHistIndex(-1);
    run(input);
    setInput('');
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = histIndex < 0 ? cmdHistory.length - 1 : Math.max(0, histIndex - 1);
      if (cmdHistory[next] !== undefined) {
        setHistIndex(next);
        setInput(cmdHistory[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex < 0) return;
      const next = histIndex + 1;
      if (next >= cmdHistory.length) {
        setHistIndex(-1);
        setInput('');
      } else {
        setHistIndex(next);
        setInput(cmdHistory[next]);
      }
    }
  };

  return (
    <>
      {/* Launcher button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open interactive terminal"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-2xl glass-nav shadow-lg text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-colors group"
      >
        <span className="relative flex">
          <TerminalIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          {!hasBeenOpened && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
            </span>
          )}
        </span>
        <span className="hidden sm:block font-mono text-sm">terminal</span>
      </motion.button>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Interactive terminal"
            className="fixed z-[70] inset-x-3 bottom-20 sm:inset-x-auto sm:right-5 sm:bottom-20 sm:w-[560px] rounded-2xl overflow-hidden glass-panel shadow-2xl border border-black/[0.08] dark:border-white/[0.1] bg-[#f0f4f8]/95 dark:bg-[#0a0f16]/95 backdrop-blur-xl"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="font-mono text-xs text-slate-400 dark:text-gray-500">guest@mhaseeb.dev — zsh</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                aria-label="Close terminal"
                className="text-slate-400 dark:text-gray-500 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollback */}
            <div ref={scrollRef} className="h-[320px] sm:h-[360px] overflow-y-auto px-4 py-3 font-mono text-[13px]">
              {lines.map((l) => (
                <div key={l.id} className="mb-1.5">
                  {l.content}
                </div>
              ))}

              {/* Prompt */}
              <form onSubmit={onSubmit} className="flex items-center gap-0">
                <span className="text-teal-600 dark:text-teal-400 shrink-0">guest@mhaseeb.dev</span>
                <span className="text-slate-400 dark:text-gray-500 shrink-0">:~$&nbsp;</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onInputKey}
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="Terminal command input"
                  className="flex-1 bg-transparent outline-none text-slate-800 dark:text-white caret-sky-500 min-w-0"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
