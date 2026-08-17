import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, Award, BriefcaseBusiness, Check, CheckCircle2,
  ChevronRight, Clipboard, Code2, Copy, Download, ExternalLink,
  GraduationCap, Mail, Menu, Moon, Send, Sun, X,
} from 'lucide-react'

const EMAIL = 'shivamkhare6762@gmail.com'
const LINKS = {
  github: 'https://github.com/Shivam-kumar-khare/',
  linkedin: 'https://linkedin.com/in/shivamkumarkhare/',
}

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
]

const skills = [
  { icon: Code2, title: 'Programming languages', items: ['C++', 'Java', 'JavaScript', 'C'] },
  { icon: Clipboard, title: 'Web & frameworks', items: ['React.js', 'Node.js', 'Express.js', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'] },
  { icon: BriefcaseBusiness, title: 'Databases & tools', items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman'] },
]

const projects = [
  {
    number: '01',
    kind: 'Backend focused',
    title: 'Video Uploading Social Media Platform',
    description: 'A production-minded backend for a video-first social experience, designed around secure users, performant media workflows, and useful creator insights.',
    points: ['Designed RESTful APIs for video, user, playlist, and subscription workflows.', 'Implemented secure JWT authentication, password hashing, and protected routes.', 'Built a media pipeline with Multer and Cloudinary, including channel analytics.'],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', 'Bcrypt', 'Multer'],
    accent: 'bg-[#e76432]',
    demo: '#',
  },
  {
    number: '02',
    kind: 'Frontend focused',
    title: 'Modern Blogging Web Platform',
    description: 'A clean publishing platform with a focused writing experience and predictable, centralized application state.',
    points: ['Built role-based authorization for secure, permission-aware user journeys.', 'Enabled rich-text post creation, editing, and lifecycle management.', 'Centralized client state with Redux Toolkit for a consistent interface.'],
    stack: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Appwrite', 'Vite'],
    accent: 'bg-[#4b7bec]',
    demo: '#',
  },
]

const timeline = [
  { type: 'Experience', icon: BriefcaseBusiness, title: 'Big Data & Business Management Intern', org: 'IBM SkillsBuild & AICTE', period: 'Jun 2026 – Jul 2026', detail: 'Built practical foundations in data-driven business analysis and large-scale data concepts through guided, industry-aligned learning.' },
  { type: 'Certification', icon: Award, title: 'Samsung AI Certification', org: 'Samsung Innovation Campus', period: 'Dec 2025 – Mar 2026', detail: 'Completed structured training in artificial intelligence concepts and their practical applications.' },
  { type: 'Certification', icon: Award, title: 'Introduction to Generative AI', org: 'Google Cloud / Coursera', period: 'Credential earned', detail: 'Explored core generative AI concepts, use cases, and responsible implementation practices.' },
]

function GithubLogo({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.7.12 2.5.35 1.91-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.07.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.79 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>
}

function LinkedinLogo({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.37 3.5a2.12 2.12 0 1 0 0 4.24 2.12 2.12 0 0 0 0-4.24ZM3.5 9.39h3.74V21H3.5V9.39ZM9.59 9.39h3.58v1.59h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.73V21h-3.74v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H9.59V9.39Z" /></svg>
}

function FadeIn({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
}

function SectionTitle({ label, title, copy, align = 'left' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="eyebrow">{label}</p>
    <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">{title}</h2>
    {copy && <p className="mt-5 text-base leading-7 text-stone-600 dark:text-stone-400">{copy}</p>}
  </div>
}

function IconLink({ href, label, children }) {
  return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={label} className="inline-flex size-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-900 hover:bg-stone-900 hover:text-white dark:border-white/20 dark:text-stone-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-stone-900">{children}</a>
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    return storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState('idle')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL) } catch { /* Mailto remains available if clipboard is unavailable. */ }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const submitForm = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setFormState('sending')
    window.setTimeout(() => { setFormState('sent'); form.reset() }, 900)
  }

  return <div className="overflow-x-hidden">
    <a href="#main" className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-stone-950 px-4 py-2 text-sm text-white focus:not-sr-only">Skip to content</a>

    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#f7f7f5]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#141414]/85">
      <div className="section-shell flex h-18 items-center justify-between">
        <a href="#top" aria-label="Shivam Kumar Khare, home" className="font-mono text-sm font-medium tracking-[-0.05em]">SKK<span className="text-orange-600">.</span></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map(([name, href]) => <a key={name} href={href} className="text-sm text-stone-600 transition hover:text-stone-950 dark:text-stone-400 dark:hover:text-white">{name}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setDarkMode((value) => !value)} className="inline-flex size-10 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-200 dark:text-stone-300 dark:hover:bg-white/10" aria-label={darkMode ? 'Use light theme' : 'Use dark theme'}>{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
          <a href="#contact" className="hidden rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600 dark:bg-white dark:text-stone-950 dark:hover:bg-orange-400 sm:block">Let’s talk <ArrowRight className="ml-1 inline size-3.5" /></a>
          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="inline-flex size-10 items-center justify-center rounded-full text-stone-700 hover:bg-stone-200 dark:text-stone-200 dark:hover:bg-white/10 md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      <AnimatePresence>{menuOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-stone-200 bg-[#f7f7f5] dark:border-white/10 dark:bg-[#141414] md:hidden" aria-label="Mobile navigation"><div className="section-shell flex flex-col py-4">{navItems.map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)} className="border-b border-stone-200 py-3.5 text-sm dark:border-white/10">{name}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="py-3.5 text-sm font-medium text-orange-600">Let’s talk →</a></div></motion.nav>}</AnimatePresence>
    </header>

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
           {/* <div className="surface absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg dark:shadow-black/20 sm:-left-10"><span className="flex size-8 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300"><GraduationCap size={16} /></span><span><span className="block text-sm font-semibold">8.64 CGPA</span><span className="block text-xs text-stone-500">GGSIPU · CSE</span></span>
             </div> */}
          </FadeIn>
        </div>
      </section>

      <section id="about" className="border-y border-stone-200 bg-white/50 py-8 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="section-shell grid gap-6 sm:grid-cols-3 sm:gap-0"><div className="flex gap-4 sm:border-r sm:border-stone-200 sm:pr-6 dark:sm:border-white/10"><span className="text-3xl font-display text-orange-600">8.64</span><p className="pt-1 text-sm leading-5 text-stone-600 dark:text-stone-400">CGPA in Computer Science<br />& Engineering</p></div><div className="flex gap-4 sm:border-r sm:border-stone-200 sm:px-8 dark:sm:border-white/10"><Award className="mt-1 size-6 text-orange-600" /><p className="text-sm leading-5 text-stone-600 dark:text-stone-400"><strong className="block font-semibold text-stone-900 dark:text-white">Top 5% Nationwide</strong>Reliance Foundation Scholar</p></div><div className="flex gap-4 sm:pl-8"><Code2 className="mt-1 size-6 text-orange-600" /><p className="text-sm leading-5 text-stone-600 dark:text-stone-400"><strong className="block font-semibold text-stone-900 dark:text-white">Full-stack & systems</strong>Builder at heart</p></div></div>
      </section>

      <section id="skills" className="section-shell py-24 sm:py-32"><FadeIn><SectionTitle label="Capabilities" title="A practical, evolving toolkit." copy="I enjoy working across the stack — from structuring clean data models and APIs to crafting interfaces people genuinely enjoy using." /></FadeIn><div className="mt-12 grid gap-4 lg:grid-cols-3">{skills.map(({ icon: Icon, title, items }, index) => <FadeIn key={title} delay={index * 0.07}><article className="surface h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/70 dark:hover:shadow-black/20"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300"><Icon size={20} /></span><h3 className="font-semibold">{title}</h3></div><div className="mt-7 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md bg-stone-100 px-2.5 py-1.5 font-mono text-[11px] text-stone-700 dark:bg-white/[0.07] dark:text-stone-300">{item}</span>)}</div></article></FadeIn>)}</div></section>

      <section id="projects" className="bg-stone-950 py-24 text-white sm:py-32"><div className="section-shell"><FadeIn><p className="eyebrow text-orange-400">Selected work</p><div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">Built around solid engineering, not just good-looking screens.</h2><a href={LINKS.github} target="_blank" rel="noreferrer" className="group shrink-0 font-mono text-xs uppercase tracking-[0.13em] text-stone-400 transition hover:text-white">More on GitHub <ArrowRight className="ml-1 inline size-3.5 transition group-hover:translate-x-1" /></a></div></FadeIn><div className="mt-14 grid gap-5 lg:grid-cols-2">{projects.map((project, index) => <FadeIn key={project.title} delay={index * 0.1}><article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8"><div className={`absolute right-0 top-0 h-1 w-28 ${project.accent}`} /><div className="flex items-center justify-between font-mono text-xs text-stone-500"><span>{project.number}</span><span>{project.kind}</span></div><h3 className="mt-10 max-w-md font-display text-3xl leading-[1.08] tracking-[-0.035em]">{project.title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-stone-400">{project.description}</p><ul className="mt-7 space-y-3">{project.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-5 text-stone-300"><Check className="mt-0.5 size-4 shrink-0 text-orange-400" />{point}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-stone-400">{tech}</span>)}</div><div className="mt-8 flex gap-5 border-t border-white/10 pt-5"><a href={LINKS.github} target="_blank" rel="noreferrer" className="group/link text-sm font-medium transition hover:text-orange-300"><GithubLogo size={16} />Source <ChevronRight className="inline size-3.5 transition group-hover/link:translate-x-0.5" /></a><a href={project.demo} aria-label={`View live demo of ${project.title} (placeholder)`} className="group/link text-sm font-medium transition hover:text-orange-300"><ExternalLink className="mr-1.5 inline size-4" />Live demo <ChevronRight className="inline size-3.5 transition group-hover/link:translate-x-0.5" /></a></div></article></FadeIn>)}</div></div></section>

      <section id="journey" className="section-shell py-24 sm:py-32"><FadeIn><SectionTitle label="Journey" title="Learning in public, building with intention." copy="A concise snapshot of the experiences and credentials shaping how I approach software engineering." /></FadeIn><div className="relative mt-14 max-w-3xl before:absolute before:bottom-5 before:left-[19px] before:top-5 before:w-px before:bg-stone-200 dark:before:bg-white/15">{timeline.map(({ type, icon: Icon, title, org, period, detail }, index) => <FadeIn key={title} delay={index * 0.08} className="relative grid grid-cols-[40px_1fr] gap-5 pb-10 last:pb-0"><span className="z-10 flex size-10 items-center justify-center rounded-full border border-stone-200 bg-[#f7f7f5] text-orange-600 dark:border-white/15 dark:bg-[#141414]"><Icon size={18} /></span><article className="surface rounded-xl p-5 sm:p-6"><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">{type}</p><h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3><p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{org}</p></div><span className="shrink-0 font-mono text-[11px] text-stone-500">{period}</span></div><p className="mt-4 text-sm leading-6 text-stone-600 dark:text-stone-400">{detail}</p></article></FadeIn>)}</div></section>

      <section id="contact" className="border-y border-stone-200 bg-orange-100/55 py-24 dark:border-white/10 dark:bg-orange-500/[0.06] sm:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[.82fr_1.18fr]"><FadeIn><p className="eyebrow">Get in touch</p><h2 className="mt-3 font-display text-5xl leading-[.98] tracking-[-0.05em] sm:text-6xl">Let’s make something <em className="font-normal text-orange-600">useful.</em></h2><p className="mt-6 max-w-md leading-7 text-stone-600 dark:text-stone-400">I’m looking for software engineering internship and associate developer opportunities where I can contribute, learn quickly, and ship meaningful work.</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 dark:bg-white dark:text-stone-950"><Mail size={16} />Email me</a><button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-medium transition hover:border-stone-900 dark:border-white/20 dark:hover:border-white">{copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}{copied ? 'Email copied' : 'Copy email'}</button></div></FadeIn><FadeIn delay={0.1}><form onSubmit={submitForm} className="surface rounded-2xl p-5 shadow-lg shadow-orange-200/30 dark:shadow-black/10 sm:p-7"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Name<input required name="name" autoComplete="name" placeholder="Your name" className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 dark:border-white/15 dark:bg-white/[0.06]" /></label><label className="grid gap-2 text-sm font-medium">Email<input required name="email" type="email" autoComplete="email" placeholder="you@company.com" className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 dark:border-white/15 dark:bg-white/[0.06]" /></label></div><label className="mt-5 grid gap-2 text-sm font-medium">Message<textarea required name="message" rows="5" placeholder="Tell me about the opportunity…" className="w-full resize-y rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 dark:border-white/15 dark:bg-white/[0.06]" /></label><div className="mt-5 flex items-center justify-between gap-3"><p aria-live="polite" className="text-xs text-stone-500">{formState === 'sent' ? <span className="inline-flex items-center gap-1 text-green-700 dark:text-green-400"><CheckCircle2 size={14} />Message ready to send — I’ll be in touch.</span> : 'Usually replies within 1–2 days.'}</p><button disabled={formState === 'sending'} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-stone-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-stone-950" type="submit">{formState === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} /></button></div></form></FadeIn></div></section>
    </main>

    <footer className="section-shell flex flex-col gap-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Shivam Kumar Khare. Crafted with intent.</p><nav className="flex gap-5" aria-label="Footer navigation"><a className="hover:text-stone-950 dark:hover:text-white" href="#top">Top</a><a className="hover:text-stone-950 dark:hover:text-white" href="#projects">Projects</a><a className="hover:text-stone-950 dark:hover:text-white" href="#contact">Contact</a></nav></footer>
  </div>
}

export default App
