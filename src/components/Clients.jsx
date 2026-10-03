import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { clients } from '../data/catalog'

export default function Clients() {
  const ribbon = [...clients, ...clients, ...clients]
  const sectionRef = useRef(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '120px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="clients" className="scroll-mt-24 bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.24em] text-mint uppercase">Clients</p>
            <h2 className="font-display mt-3 text-4xl leading-tight md:text-6xl">
              Leaders already inside the program.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center md:text-left">
            {[
              ['20+', 'corporate partnerships'],
              ['10,000+', 'lives transformed'],
              ['92%', 'metabolic accuracy'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl text-mint md:text-4xl">{value}</p>
                <p className="mt-1 text-xs text-cream/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden border-y border-white/10 py-4">
        <div className={`marquee-track flex w-max gap-10 pr-10 ${active ? '' : '[animation-play-state:paused]'}`}>
          {ribbon.map((client, index) => (
            <span key={`${client.id}-${index}`} className="font-display text-2xl text-cream/80 italic">
              {client.company}
              <span className="mx-10 text-coral">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 md:grid-cols-3 md:px-6">
        {clients.map((client, index) => (
          <motion.figure
            key={client.id}
            data-hot
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            className="flex h-full flex-col justify-between rounded-[1.75rem] bg-white/5 p-6 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <blockquote className="text-lg leading-relaxed text-cream/85">“{client.quote}”</blockquote>
            <figcaption className="mt-8">
              <p className="font-medium">{client.person}</p>
              <p className="text-sm text-mint">
                {client.role}, {client.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
