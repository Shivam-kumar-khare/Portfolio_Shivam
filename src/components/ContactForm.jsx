import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { FadeIn } from './ui.jsx'

export function ContactForm() {
  const [formState, setFormState] = useState('idle')
  const submissionTimer = useRef(null)
  const feedbackTimer = useRef(null)

  useEffect(() => () => {
    window.clearTimeout(submissionTimer.current)
    window.clearTimeout(feedbackTimer.current)
  }, [])

  const submitForm = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    window.clearTimeout(feedbackTimer.current)
    setFormState('sending')
    submissionTimer.current = window.setTimeout(() => {
      form.reset()
      setFormState('sent')
      feedbackTimer.current = window.setTimeout(() => setFormState('idle'), 3000)
    }, 900)
  }

  return <FadeIn delay={0.1}>
    <form onSubmit={submitForm} className="surface rounded-2xl p-5 shadow-lg shadow-orange-200/30 dark:shadow-black/10 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input required name="name" autoComplete="name" placeholder="Your name" className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 dark:border-white/15 dark:bg-white/[0.06]" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input required name="email" type="email" autoComplete="email" placeholder="you@company.com" className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 dark:border-white/15 dark:bg-white/[0.06]" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium">
        Message
        <textarea required name="message" rows="5" placeholder="Tell me about the opportunity…" className="w-full resize-y rounded-lg border border-stone-300 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-500 dark:border-white/15 dark:bg-white/[0.06]" />
      </label>
      <div className="mt-5 flex items-center justify-between gap-3">
        <p aria-live="polite" className="text-xs text-stone-500">
          {formState === 'sent' ?
            <span className="inline-flex items-center gap-1 text-green-700 dark:text-green-400">
              <CheckCircle2 size={14} />Message sent — I’ll be in touch.</span> : 'Usually replies within 1–2 days.'
          }</p>
        <button disabled={formState === 'sending'} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-stone-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-stone-950" type="submit">{formState === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} />
        </button>
      </div>
    </form>
  </FadeIn>
}
