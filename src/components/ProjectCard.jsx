import { Check, ChevronRight, ExternalLink } from 'lucide-react'
import { GithubLogo } from './BrandIcons.jsx'
import { FadeIn } from './ui.jsx'

export function ProjectCard({ project, delay, sourceUrl }) {
  const { accent, demo, description, kind, number, points, stack, title } = project

  return <FadeIn delay={delay}>
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8">
      <div className={`absolute right-0 top-0 h-1 w-28 ${accent}`} />
      <div className="flex items-center justify-between font-mono text-xs text-stone-500"><span>{number}</span><span>{kind}</span></div>
      <h3 className="mt-10 max-w-md font-display text-3xl leading-[1.08] tracking-[-0.035em]">{title}</h3>
      <p className="mt-4 max-w-lg text-sm leading-6 text-stone-400">{description}</p>
      <ul className="mt-7 space-y-3">{points.map((point) => <li key={point} className="flex gap-3 text-sm leading-5 text-stone-300"><Check className="mt-0.5 size-4 shrink-0 text-orange-400" />{point}</li>)}</ul>
      <div className="mt-7 flex flex-wrap gap-2">{stack.map((tech) => <span key={tech} className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-stone-400">{tech}</span>)}</div>
      <div className="mt-8 flex gap-5 border-t border-white/10 pt-5">
        <a href={sourceUrl} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-orange-300"><GithubLogo size={16} />Source <ChevronRight size={14} className="transition group-hover/link:translate-x-0.5" /></a>
        <a href={demo} aria-label={`View live demo of ${title} (placeholder)`} className="group/link text-sm font-medium transition hover:text-orange-300"><ExternalLink className="mr-1.5 inline size-4" />Live demo <ChevronRight className="inline size-3.5 transition group-hover/link:translate-x-0.5" /></a>
      </div>
    </article>
  </FadeIn>
}
