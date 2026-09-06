import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Layers } from 'lucide-react';
import Seo, { SITE_URL } from '../components/Seo';
import AnimatedSection from '../components/AnimatedSection';
import ProjectGallery from '../components/ProjectGallery';
import CtaBanner from '../components/CtaBanner';
import { getProject } from '../data/portfolio';

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge mb-6">
      <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-sky-400" />
      <span className="text-slate-500 dark:text-gray-400 text-sm font-mono">{children}</span>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const study = project?.caseStudy;

  if (!project || !study) {
    return (
      <div className="pt-16 md:pt-20">
        <Seo
          title="Project Not Found | Haseeb Ansari"
          description="This project case study could not be found."
          path={`/projects/${slug ?? ''}`}
        />
        <div className="max-w-3xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project not found</h1>
          <p className="text-slate-500 dark:text-gray-400 mb-8">
            The case study you're looking for doesn't exist yet.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 glass-btn rounded-xl text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const allTech = study.stack.flatMap((group) => group.items);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: study.tagline,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: `${SITE_URL}${study.hero}`,
    genre: project.category === 'mobile' ? 'Mobile Application' : 'Web Application',
    keywords: allTech.join(', '),
    author: {
      '@type': 'Person',
      name: 'Haseeb Ansari',
      url: `${SITE_URL}/`,
    },
  };

  return (
    <div className="pt-16 md:pt-20">
      <Seo
        title={`${study.seoTitle} | Haseeb Ansari`}
        description={study.seoDescription}
        path={`/projects/${project.slug}`}
        image={study.hero}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative pt-10 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sky-600 dark:text-gray-500 dark:hover:text-sky-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All projects
          </Link>

          <AnimatedSection distance={30}>
            <span className="inline-block px-3 py-1 text-xs font-mono rounded-full glass-badge text-slate-700 dark:text-gray-300 mb-5">
              {project.category === 'mobile' ? 'Mobile app' : 'Web project'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-5">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              {study.tagline}
            </p>

            {study.links && study.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {study.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2 glass-btn rounded-xl text-sm text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all"
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="scale">
            <div className="relative mt-10 rounded-2xl overflow-hidden glass-card glass-shine">
              <img
                src={study.hero}
                alt={`${project.title} — screenshot`}
                width={study.heroWidth}
                height={study.heroHeight}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          {/* At a glance */}
          <AnimatedSection delay={0.2}>
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
              {study.meta.map((item) => (
                <div key={item.label} className="rounded-xl glass-subtle p-4">
                  <dt className="text-[11px] uppercase tracking-widest font-mono text-slate-400 dark:text-gray-500 mb-1.5">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-slate-800 dark:text-gray-200 leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <div>
              <SectionLabel>// overview</SectionLabel>
              <div className="space-y-5">
                {study.overview.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="text-slate-600 dark:text-gray-400 leading-relaxed md:text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnimatedSection direction="right" distance={40}>
              <div className="rounded-2xl glass-card glass-shine p-6 lg:sticky lg:top-28">
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="w-4 h-4 text-sky-600 dark:text-sky-300" />
                  <span className="text-sm font-mono text-slate-500 dark:text-gray-400">Scale</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {study.scale.map((item) => (
                    <div key={item.label}>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</div>
                      <div className="text-xs text-slate-400 dark:text-gray-500 leading-snug mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>// what it does</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Key features
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {study.features.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl glass-card glass-card-hover glass-shine p-6 transition-all duration-500"
              >
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-sky-600 dark:text-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical highlights */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>// engineering</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            The hard parts
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mb-10 md:text-lg">
            The problems that shaped the architecture, and how each one was solved.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {study.challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl glass-card glass-card-hover glass-shine p-6 transition-all duration-500"
              >
                <span className="block text-xs font-mono text-sky-600/70 dark:text-sky-300/60 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-slate-900 dark:text-white font-semibold mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>// stack</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Built with
          </h2>

          <div className="space-y-6">
            {study.stack.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="grid sm:grid-cols-[180px_minmax(0,1fr)] gap-3 sm:gap-6 items-baseline"
              >
                <h3 className="text-sm font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg glass-subtle text-slate-600 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>// screens</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Inside the app
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mb-10 md:text-lg">
            Tap any screenshot to open it full size.
          </p>

          <ProjectGallery shots={study.gallery} layout={study.galleryLayout} />
        </div>
      </section>

      <section className="relative pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sky-600 dark:text-gray-500 dark:hover:text-sky-300 transition-colors"
          >
            See more projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
