import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Award, Check, Code2, Copy, Download, Mail,
} from 'lucide-react'
import { EMAIL, LINKS, navItems, projects, skills, timeline } from './data/dataItems.js'
import { GithubLogo, LinkedinLogo } from './components/BrandIcons.jsx'
import { ContactForm } from './components/ContactForm.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { TimelineItem } from './components/TimelineItem.jsx'
import { FadeIn, IconLink, SectionTitle } from './components/ui.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    return storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // Mailto remains available if clipboard access is unavailable.
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return <div className="overflow-x-hidden">
    <a href="#main" className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-stone-950 px-4 py-2 text-sm text-white focus:not-sr-only">Skip to content</a>
    <SiteHeader darkMode={darkMode} navItems={navItems} onToggleTheme={() => setDarkMode((value) => !value)} />

    <main id="main">
      <section id="top" className="relative isolate pt-32 sm:pt-40">
        <div className="pointer-events-none absolute left-[52%] top-8 -z-10 size-105 rounded-full bg-orange-200/45 blur-3xl dark:bg-orange-500/10" />
        <div className="section-shell grid min-h-[650px] items-center gap-12 pb-18 lg:grid-cols-[1.12fr_.88fr] lg:pb-24">
          <FadeIn>
            <p className="eyebrow flex items-center gap-2"><span className="size-2 rounded-full bg-orange-500" />Available for 2026 opportunities</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.1rem,8vw,6.7rem)] leading-[0.92] tracking-[-0.065em]">I build <em className="font-display font-normal text-orange-600">thoughtful</em> software for real people.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-400">CSE student and full-stack developer with a systems mindset — translating complex problems into reliable, human-centered digital products.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-stone-950 dark:hover:bg-orange-400">View projects <ArrowDownRight size={17} className="transition group-hover:translate-y-0.5" /></a>
              <a href="/Shivam-Kumar-Khare-Resume.html" download="Shivam-Kumar-Khare-Resume.html" className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-stone-900 dark:border-white/20 dark:hover:border-white"><Download size={16} />Download resume</a>
            </div>
            <div className="mt-9 flex items-center gap-3"><IconLink href={`mailto:${EMAIL}`} label="Email Shivam"><Mail size={18} /></IconLink><IconLink href={LINKS.linkedin} label="Shivam on LinkedIn"><LinkedinLogo /></IconLink><IconLink href={LINKS.github} label="Shivam on GitHub"><GithubLogo /></IconLink><span className="ml-2 hidden text-sm text-stone-500 sm:inline">shaping ideas into impact</span></div>
          </FadeIn>
          <FadeIn delay={0.12} className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-[.85] overflow-hidden rounded-[2rem] bg-stone-900 p-7 text-stone-100 shadow-2xl shadow-stone-400/20 dark:shadow-black/40 sm:p-9">
              <div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'radial-gradient(#f9aa80 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between"><p className="font-mono text-xs tracking-wider text-stone-400">PORTFOLIO / 2026</p><span className="flex size-11 items-center justify-center rounded-full bg-orange-500 text-stone-950"><Code2 size={22} /></span></div>
                <div><p className="font-mono text-xs uppercase tracking-[0.17em] text-orange-300">Software engineering</p><p className="mt-3 font-display text-5xl leading-none tracking-[-0.06em] sm:text-6xl">Shivam<br />Kumar<br /><span className="text-orange-400">Khare.</span></p></div>
                <div className="flex items-end justify-between border-t border-white/15 pt-4"><p className="max-w-40 text-sm leading-5 text-stone-300">Full-stack developer. Curious problem-solver.</p><span className="font-mono text-xs text-stone-400">01—26</span></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/*========================================About==================================== */}
      <section id="about" className="border-y border-stone-200 bg-white/50 py-8 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="section-shell grid gap-6 sm:grid-cols-3 sm:gap-0">
          <div className="flex gap-4 sm:border-r sm:border-stone-200 sm:pr-6 dark:sm:border-white/10">
            <span className="text-3xl font-display text-orange-600">8.64</span>
            <p className="pt-1 text-sm leading-5 text-stone-600 dark:text-stone-400">CGPA in Computer Science<br />
            & Engineering
            </p>
          </div>
          <div className="flex gap-4 sm:border-r sm:border-stone-200 sm:px-8 dark:sm:border-white/10">
            <Award className="mt-1 size-6 text-orange-600" />
            <p className="text-sm leading-5 text-stone-600 dark:text-stone-400">
              <strong className="block font-semibold text-stone-900 dark:text-white">Top 5% Nationwide</strong>
              Reliance Foundation Scholar
            </p>
          </div>
          <div className="flex gap-4 sm:pl-8">
            <Code2 className="mt-1 size-6 text-orange-600" />
            <p className="text-sm leading-5 text-stone-600 dark:text-stone-400">
              <strong className="block font-semibold text-stone-900 dark:text-white">Full-stack & systems</strong>
              Builder at heart
            </p>
          </div>
        </div>
      </section>
      {/*========================================Skills==========================================================*/}
      <section id="skills" className="section-shell py-24 sm:py-32">
        <FadeIn>
          <SectionTitle label="Capabilities" title="A practical, evolving toolkit." copy="I enjoy working across the stack — from structuring clean data models and APIs to crafting interfaces people genuinely enjoy using." />
        </FadeIn>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">{skills.map(({ icon: Icon, title, items }, index) =>
          <FadeIn key={title} delay={index * 0.07}>
            <article className="surface h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/70 dark:hover:shadow-black/20">
              <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">
                <Icon size={20} />
              </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {items.map((item) =>
                  <span key={item} className="rounded-md bg-stone-100 px-2.5 py-1.5 font-mono text-[11px] text-stone-700 dark:bg-white/[0.07] dark:text-stone-300">{item}
                  </span>)}
              </div>
            </article>
          </FadeIn>)}
        </div>
      </section>
      {/*=======================================Projects=======================================*/}
      <section id="projects" className="bg-stone-950 py-24 text-white sm:py-32">
        <div className="section-shell">
          <FadeIn>
            <p className="eyebrow text-orange-400">Selected work
            </p>
            <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">Built around solid engineering, not just good-looking screens.
              </h2>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="group shrink-0 font-mono text-xs uppercase tracking-[0.13em] text-stone-400 transition hover:text-white">
                More on GitHub <ArrowRight className="ml-1 inline size-3.5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) =>
              <ProjectCard key={project.title} project={project} delay={index * 0.1} sourceUrl={LINKS.github} />)}
          </div>
        </div>
      </section>
      {/*===========================================Journey===============================================*/}
      <section id="journey" className="section-shell py-24 sm:py-32">
        <FadeIn>
          <SectionTitle label="Journey" title="Learning in public, building with intention." copy="A concise snapshot of the experiences and credentials shaping how I approach software engineering." />
        </FadeIn>
        <div className="relative mt-14 max-w-3xl before:absolute before:bottom-5 before:left-[19px] before:top-5 before:w-px before:bg-stone-200 dark:before:bg-white/15">
          {
            timeline.map((entry, index) => <TimelineItem key={entry.title} entry={entry} delay={index * 0.08} />)
          }
        </div>
      </section>
      {/*======================================================Contacts======================================*/}
      <section id="contact" className="border-y border-stone-200 bg-orange-100/55 py-24 dark:border-white/10 dark:bg-orange-500/[0.06] sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[.82fr_1.18fr]">
          <FadeIn>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 font-display text-5xl leading-[.98] tracking-[-0.05em] sm:text-6xl">Let’s make something <em className="font-normal text-orange-600">useful.</em>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-stone-600 dark:text-stone-400">I’m looking for software engineering internship and associate developer opportunities where I can contribute, learn quickly, and ship meaningful work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 dark:bg-white dark:text-stone-950">
                <Mail size={16} />Email me
              </a>
              <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-medium transition hover:border-stone-900 dark:border-white/20 dark:hover:border-white">
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}{copied ? 'Email copied' : 'Copy email'}
              </button>
            </div>
          </FadeIn>
          <ContactForm />
        </div>
      </section>
    </main>
    {/*============================Footer========================================*/}
    <footer className="section-shell flex flex-col gap-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Shivam Kumar Khare. Crafted with intent.</p>
      <nav className="flex gap-5" aria-label="Footer navigation">
        <a className="hover:text-stone-950 dark:hover:text-white" href="#top">Top</a>
        <a className="hover:text-stone-950 dark:hover:text-white" href="#projects">Projects</a>
        <a className="hover:text-stone-950 dark:hover:text-white" href="#contact">Contact</a>
      </nav>
    </footer>
  </div>
}

export default App
