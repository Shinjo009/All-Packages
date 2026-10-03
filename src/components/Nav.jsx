import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const links = [
  { href: '#packages', label: 'Packages' },
  { href: '#clients', label: 'Clients' },
  { href: '#method', label: 'Method' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    let current = false
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const next = window.scrollY > 12
        if (next !== current) {
          current = next
          setScrolled(next)
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className="fixed top-0 z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4 md:px-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between rounded-full px-4 py-3 transition-colors duration-500 md:px-5 ${
            scrolled ? 'bg-cream/85 text-ink shadow-[0_10px_40px_rgba(7,25,16,0.08)] backdrop-blur-xl' : 'bg-transparent text-cream'
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-10 w-10" invert={scrolled} />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">SuperShyft</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition ${scrolled ? 'text-ink/70 hover:text-ink' : 'text-cream/75 hover:text-cream'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.supershyft.com/"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                scrolled ? 'bg-forest text-cream hover:bg-pine' : 'bg-cream text-ink hover:bg-white'
              }`}
            >
              Book a screen
            </a>
          </div>

          <button
            type="button"
            className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${
              scrolled ? 'border-ink/15' : 'border-white/25'
            }`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 transition ${scrolled ? 'bg-ink' : 'bg-cream'} ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-px w-4 transition ${scrolled ? 'bg-ink' : 'bg-cream'} ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 h-px w-4 transition ${scrolled ? 'bg-ink' : 'bg-cream'} ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
              />
            </span>
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 md:hidden"
          >
            <div className="mt-2 rounded-3xl bg-cream p-5 text-ink shadow-2xl">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                  className="block border-b border-ink/10 py-3 text-lg"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://www.supershyft.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-coral px-4 py-2 text-sm text-white"
              >
                Book a screen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
