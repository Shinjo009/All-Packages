import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const [on, setOn] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useMotionValue(1)
  const sx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.28 })
  const sy = useSpring(y, { stiffness: 420, damping: 38, mass: 0.28 })
  const ss = useSpring(scale, { stiffness: 320, damping: 24, mass: 0.25 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setOn(fine)
    if (!fine) return

    let hot = false
    let frame = 0
    let nextX = -100
    let nextY = -100
    let pending = false

    const flush = () => {
      pending = false
      x.set(nextX)
      y.set(nextY)
    }

    const move = (event) => {
      nextX = event.clientX
      nextY = event.clientY
      if (!pending) {
        pending = true
        frame = requestAnimationFrame(flush)
      }

      const isHot = Boolean(event.target.closest?.('a, button, [data-hot]'))
      if (isHot !== hot) {
        hot = isHot
        scale.set(isHot ? 1.7 : 1)
      }
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(frame)
    }
  }, [x, y, scale])

  if (!on) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      style={{
        x: sx,
        y: sy,
        scale: ss,
        width: 14,
        height: 14,
        marginLeft: -7,
        marginTop: -7,
        borderRadius: 9999,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  )
}
