import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { packages } from '../data/catalog'

const ease = [0.22, 1, 0.36, 1]

function Arrow({ open }) {
  return (
    <motion.span
      animate={{ rotate: open ? 90 : 0, x: open ? 0 : 0 }}
      className="grid h-9 w-9 place-items-center rounded-full border border-current"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  )
}

function Group({ group, active, onToggle, tone }) {
  const light = tone === 'light'
  return (
    <div
      className={`overflow-hidden rounded-3xl border ${
        light ? 'border-ink/10 bg-white' : 'border-white/10 bg-white/5'
      }`}
    >
      <button
        type="button"
        data-hot
        onClick={onToggle}
        aria-expanded={active}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span>
          <span className="block text-base font-medium">{group.name}</span>
          <span className={`mt-1 block text-xs tracking-[0.16em] uppercase ${light ? 'text-coral' : 'text-mint'}`}>
            {group.count} {group.count === 1 ? 'parameter' : 'parameters'}
          </span>
        </span>
        <motion.span animate={{ rotate: active ? 45 : 0 }} className="text-xl leading-none">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              {group.items.length > 0 ? (
                <ul className="chip-fade flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full px-3 py-1.5 text-sm ${
                        light ? 'bg-foam text-forest' : 'bg-white/10 text-cream'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`text-sm leading-relaxed ${light ? 'text-ink/70' : 'text-cream/70'}`}>{group.note}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function PackageCard({ pack }) {
  const [open, setOpen] = useState(false)
  const [activeGroup, setActiveGroup] = useState(null)
  const [query, setQuery] = useState('')
  const light = pack.tone === 'light'

  const visibleGroups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return pack.groups
    return pack.groups
      .map((group) => {
        const nameHit = group.name.toLowerCase().includes(q)
        const items = group.items.filter((item) => item.toLowerCase().includes(q))
        if (nameHit) return group
        if (items.length) return { ...group, items }
        return null
      })
      .filter(Boolean)
  }, [pack.groups, query])

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className={`relative overflow-hidden rounded-[2rem] gpu ${
        light
          ? 'bg-cream text-ink shadow-[0_30px_80px_rgba(7,25,16,0.08)] ring-1 ring-ink/5'
          : 'bg-forest text-cream'
      }`}
    >
      <div
        className={`pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full blur-3xl ${
          light ? 'bg-blush' : 'bg-pine'
        }`}
      />
      <div className="relative p-6 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className={`text-xs tracking-[0.24em] uppercase ${light ? 'text-leaf' : 'text-mint'}`}>{pack.kicker}</p>
            <h3 className="font-display mt-3 text-4xl leading-none md:text-6xl">
              {pack.name}
              {pack.mark ? (
                <span className="ml-3 align-middle text-xl text-coral md:text-2xl">♀ {pack.mark}</span>
              ) : null}
              <span className={`mt-1 block text-3xl italic md:text-4xl ${light ? 'text-leaf' : 'text-mint'}`}>
                Package
              </span>
            </h3>
            <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? 'text-ink/70' : 'text-cream/75'}`}>
              {pack.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pack.highlight.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-1 text-xs tracking-wide ${
                    light ? 'bg-white text-forest' : 'bg-white/10 text-cream'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div
              className={`rounded-full px-5 py-3 shadow-[0_16px_40px_rgba(225,29,58,0.22)] ${
                light ? 'bg-coral text-white' : 'bg-cream text-ink'
              }`}
            >
              <span className="font-display text-3xl md:text-4xl">₹{pack.price}</span>
              <span className="ml-2 text-xs tracking-wide uppercase opacity-80">excl. GST</span>
            </div>
            <button
              type="button"
              data-hot
              onClick={() => {
                setOpen((value) => !value)
                setActiveGroup(null)
              }}
              aria-expanded={open}
              className={`group inline-flex items-center gap-3 rounded-full px-2 py-2 pl-4 text-sm font-medium ${
                light ? 'bg-forest text-cream' : 'bg-white/10 text-cream'
              }`}
            >
              {open ? 'Hide the panel' : 'See the panel'}
              <Arrow open={open} />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease }}
              className="overflow-hidden"
            >
              <div className={`mt-8 border-t pt-6 ${light ? 'border-ink/10' : 'border-white/10'}`}>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <p className={`max-w-xl text-sm leading-relaxed ${light ? 'text-ink/65' : 'text-cream/70'}`}>
                    Single collection, comprehensive. {pack.reportLine}
                  </p>
                  <label className="relative block w-full md:w-72">
                    <span className="sr-only">Search markers</span>
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search a marker"
                      className={`w-full rounded-full border px-4 py-2.5 text-sm outline-none transition focus:ring-2 ${
                        light
                          ? 'border-ink/10 bg-white placeholder:text-ink/35 focus:ring-leaf/40'
                          : 'border-white/15 bg-white/5 placeholder:text-cream/40 focus:ring-mint/40'
                      }`}
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {visibleGroups.map((group) => (
                    <div
                      key={group.name}
                      className={activeGroup === group.name || query ? 'md:col-span-2' : ''}
                    >
                      <Group
                        group={group}
                        tone={pack.tone}
                        active={Boolean(query) || activeGroup === group.name}
                        onToggle={() =>
                          setActiveGroup((current) => (current === group.name ? null : group.name))
                        }
                      />
                    </div>
                  ))}
                </div>

                {visibleGroups.length === 0 && (
                  <p className={`mt-6 text-sm ${light ? 'text-ink/60' : 'text-cream/60'}`}>
                    Nothing in this panel matches “{query}”.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="relative scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.24em] text-leaf uppercase">The panels</p>
          <h2 className="font-display mt-3 text-4xl leading-tight md:text-6xl">
            Two depths of screen.
            <span className="block italic text-forest/80">Open either one for the markers.</span>
          </h2>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          {packages.map((pack) => (
            <PackageCard key={pack.id} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  )
}
