import { FadeIn } from './ui.jsx'

export function TimelineItem({ entry, delay }) {
  const { detail, icon: Icon, org, period, title, type } = entry

  return <FadeIn delay={delay} className="relative grid grid-cols-[40px_1fr] gap-5 pb-10 last:pb-0">
    <span className="z-10 flex size-10 items-center justify-center rounded-full border border-stone-200 bg-[#f7f7f5] text-orange-600 dark:border-white/15 dark:bg-[#141414]"><Icon size={18} /></span>
    <article className="surface rounded-xl p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row">
        <div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">{type}</p><h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3><p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{org}</p></div>
        <span className="shrink-0 font-mono text-[11px] text-stone-500">{period}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-stone-600 dark:text-stone-400">{detail}</p>
    </article>
  </FadeIn>
}
