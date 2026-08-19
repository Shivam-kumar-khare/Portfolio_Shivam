import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'

export function SiteHeader({ darkMode, navItems, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setMenuOpen(false)
      const targetId = href.substring(1)

      const scrollToSection = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          if (window.history.pushState) {
            window.history.pushState(null, '', href)
          }
        }
      }

      // Schedule scroll after React re-renders and menu collapse begins
      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 50)
      })
    }
  }

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#f7f7f5]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#141414]/85">
    <div className="section-shell flex h-18 items-center justify-between">
      <a href="#top" onClick={(e) => handleNavClick(e, '#top')} aria-label="Shivam Kumar Khare, home" className="font-mono text-sm font-medium tracking-[-0.05em]">SKK<span className="text-orange-600">.</span></a>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
        {navItems.map(([name, href]) => <a key={name} href={href} onClick={(e) => handleNavClick(e, href)} className="text-sm text-stone-600 transition hover:text-stone-950 dark:text-stone-400 dark:hover:text-white">{name}</a>)}
      </nav>
      <div className="flex items-center gap-2">
        <button type="button" onClick={onToggleTheme} className="inline-flex size-10 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-200 dark:text-stone-300 dark:hover:bg-white/10" aria-label={darkMode ? 'Use light theme' : 'Use dark theme'}>{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hidden rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600 dark:bg-white dark:text-stone-950 dark:hover:bg-orange-400 sm:block">Let’s talk <ArrowRight className="ml-1 inline size-3.5" /></a>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-full text-stone-700 hover:bg-stone-200 dark:text-stone-200 dark:hover:bg-white/10 md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
    <AnimatePresence>{menuOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-stone-200 bg-[#f7f7f5] dark:border-white/10 dark:bg-[#141414] md:hidden" aria-label="Mobile navigation"><div className="section-shell flex flex-col py-4">{navItems.map(([name, href]) => <a key={name} href={href} onClick={(e) => handleNavClick(e, href)} className="border-b border-stone-200 py-3.5 text-sm dark:border-white/10">{name}</a>)}<a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="py-3.5 text-sm font-medium text-orange-600">Let’s talk →</a></div></motion.nav>}</AnimatePresence>
  </header>
}

