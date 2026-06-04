'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Target, TrendingUp, Clapperboard, Palette } from 'lucide-react'

const iconMap = {
  strategy: Target,
  analytics: TrendingUp,
  video: Clapperboard,
  visual: Palette,
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function mixRgb(rgb, a, b, t) {
  return `rgba(${rgb}, ${lerp(a, b, t)})`
}

function useGlowStyles(glow) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const rgb = isDark ? '200, 126, 69' : '123, 79, 50'
  const borderDim = isDark ? 'rgba(74, 48, 32, 1)' : 'rgba(217, 196, 174, 1)'
  const g = Math.min(1, Math.max(0, glow))

  return useMemo(() => {
    const borderLit = `rgba(${rgb}, 0.6)`
    const shadowLit = `0 16px 40px rgba(${rgb}, ${lerp(0, 0.12, g)})`
    const shadowRing = g > 0 ? `0 0 0 0.5px rgba(${rgb}, ${lerp(0, 0.35, g)})` : '0 0 0 0 transparent'

    return {
      shell: {
        y: lerp(0, -6, g),
        boxShadow: g > 0 ? `${shadowRing}, ${shadowLit}` : '0 0 0 0 transparent',
        borderColor: g > 0 ? mixRgb(rgb, 0.35, 0.6, g) : borderDim,
      },
      line: {
        opacity: g,
        scaleX: lerp(0.5, 1, g),
      },
      iconBox: {
        scale: lerp(1, 1.1, g),
        rotate: lerp(0, 3, g),
        backgroundColor: mixRgb(rgb, 0.1, 1, g),
        borderColor: mixRgb(rgb, 0.2, 1, g),
      },
      iconColor: (() => {
        const [r, gCol, b] = rgb.split(',').map((n) => Number(n.trim()))
        return {
          color: `rgb(${Math.round(lerp(r, 255, g))}, ${Math.round(lerp(gCol, 255, g))}, ${Math.round(lerp(b, 255, g))})`,
        }
      })(),
    }
  }, [g, rgb, borderDim])
}

export default function ServiceCard({ icon, title, desc, glow = 0 }) {
  const Icon = iconMap[icon] || Palette
  const styles = useGlowStyles(glow)

  return (
    <article className="h-full">
      <motion.div
        style={styles.shell}
        className="service-card relative h-full p-7 rounded-2xl bg-[var(--color-surface)] border border-solid cursor-default overflow-hidden"
      >
        <motion.div
          style={styles.line}
          className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-[var(--color-accent)] origin-left"
          aria-hidden
        />

        <div className="relative mb-5">
          <motion.div
            style={styles.iconBox}
            className="w-12 h-12 rounded-xl flex items-center justify-center border border-solid"
          >
            <motion.div style={styles.iconColor}>
              <Icon size={20} strokeWidth={2} className="text-current" />
            </motion.div>
          </motion.div>
        </div>

        <h3 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-2 relative">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed relative">{desc}</p>
      </motion.div>
    </article>
  )
}
