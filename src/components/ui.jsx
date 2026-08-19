import { motion, useReducedMotion } from 'framer-motion'

export function FadeIn({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
}

export function SectionTitle({ label, title, copy, align = 'left' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="eyebrow">{label}</p>
    <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">{title}</h2>
    {copy && <p className="mt-5 text-base leading-7 text-stone-600 dark:text-stone-400">{copy}</p>}
  </div>
}

export function IconLink({ href, label, children }) {
  const isExternal = href.startsWith('http')

  return <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined} aria-label={label} className="inline-flex size-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-900 hover:bg-stone-900 hover:text-white dark:border-white/20 dark:text-stone-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-stone-900">{children}</a>
}
