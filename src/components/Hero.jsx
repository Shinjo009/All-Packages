import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const chips = ['Allergies', 'Cancer risk', 'Hormones', 'Cardiac', 'Thyroid', 'Liver', 'Kidney', 'Iron', 'Vitamins']

export default function Hero() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '80px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden bg-forest text-cream">
      <div className={`orb pointer-events-none absolute -top-24 -left-20 h-80 w-80 ${active ? '' : '[animation-play-state:paused]'}`}>
        <div className="h-full w-full rounded-full bg-pine/80 blur-3xl" />
      </div>
      <div className={`orb pointer-events-none absolute right-[-8rem] bottom-[-6rem] h-[28rem] w-[28rem] [animation-delay:-6s] ${active ? '' : '[animation-play-state:paused]'}`}>
        <div className="h-full w-full rounded-full bg-[#1c6b4e]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 pt-32 pb-20 md:grid-cols-[1.15fr_0.85fr] md:px-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.28em] text-mint uppercase"
          >
            Bio-AI blood packages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-5 max-w-xl text-5xl leading-[0.95] font-medium tracking-tight md:text-7xl"
          >
            Read the body before it raises its voice.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75"
          >
            SuperShyft screens a single blood collection into metabolic, cardiac, hormone, allergy and cancer-marker
            insight — then reports it in the Bio-AI app.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-5 py-3 text-sm font-medium text-ink"
            >
              View packages
              <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-cream transition group-hover:translate-x-1">
                →
              </span>
            </a>
            <a href="#clients" className="rounded-full px-4 py-3 text-sm text-cream/80 hover:text-cream">
              See who trusts us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[420px]"
        >
          <div className={`orbit absolute inset-6 rounded-full border border-white/15 ${active ? '' : '[animation-play-state:paused]'}`} />
          <div
            className={`orbit absolute inset-16 rounded-full border border-dashed border-mint/30 ${active ? '' : '[animation-play-state:paused]'}`}
            style={{ animationDuration: '48s', animationDirection: 'reverse' }}
          />
          {chips.slice(0, 6).map((label, index) => {
            const angle = (index / 6) * Math.PI * 2 - Math.PI / 2
            const radius = 38
            const left = 50 + Math.cos(angle) * radius
            const top = 50 + Math.sin(angle) * radius
            return (
              <span
                key={label}
                className="absolute"
                style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + index * 0.06, type: 'spring', stiffness: 220, damping: 18 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-cream px-1 text-center text-[10px] leading-tight font-medium tracking-wide text-ink shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                >
                  {label}
                </motion.span>
              </span>
            )
          })}
          <div className="absolute inset-[32%] grid place-items-center rounded-full bg-coral text-center shadow-[0_20px_60px_rgba(225,29,58,0.35)]">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase">From</p>
              <p className="font-display text-3xl">₹899</p>
              <p className="text-[10px] tracking-wide">excl. GST</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
