import { motion } from 'framer-motion'
import { steps } from '../data/catalog'

export default function Method() {
  return (
    <section id="method" className="scroll-mt-24 bg-sand/70 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <p className="text-xs tracking-[0.24em] text-leaf uppercase">Method</p>
        <h2 className="font-display mt-3 max-w-xl text-4xl md:text-6xl">Four steps. Then the next blood draw.</h2>
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.li
              key={step.n}
              data-hot
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-[1.6rem] bg-cream p-5 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-2"
            >
              <p className="font-display text-3xl text-coral italic">{step.n}</p>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
