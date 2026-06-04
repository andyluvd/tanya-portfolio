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

function useGlowParts(glow) {
  const { resolvedTheme } = useTheme()
  const rgb = resolvedTheme === 'dark' ? '200, 126, 69' : '123, 79, 50'
  const g = Math.min(1, Math.max(0, glow))

  return useMemo(() => {
    const [r, gCol, b] = rgb.split(',').map((n) => Number(n.trim()))
    return {
      lift: { y: lerp(0, -6, g) },
      line: { opacity: g, scaleX: lerp(0.5, 1, g) },
      iconBox: {
        scale: lerp(1, 1.1, g),
        rotate: lerp(0, 3, g),
        backgroundColor: mixRgb(rgb, 0.1, 1, g),
        borderColor: mixRgb(rgb, 0.2, 1, g),
      },
      iconColor: {
        color: `rgb(${Math.round(lerp(r, 255, g))}, ${Math.round(lerp(gCol, 255, g))}, ${Math.round(lerp(b, 255, g))})`,
      },
    }
  }, [g, rgb])
}

export default function ServiceCard({ icon, title, desc, glow = 0 }) {
  const Icon = iconMap[icon] || Palette
  const parts = useGlowParts(glow)

  return (
    <article className="h-full">
      <div
        className="glass-panel glass-card glass-text-contrast service-card h-full px-6 sm:px-7 py-7 sm:py-8"
        style={{ '--glow': glow }}
      >
        <motion.div
          style={parts.lift}
          className="service-card__lift relative flex h-full flex-col"
        >
          <motion.div
            style={parts.line}
            className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-[var(--color-accent)] origin-left z-[2]"
            aria-hidden
          />

          <div className="relative mb-5 z-[1]">
            <motion.div
              style={parts.iconBox}
              className="glass-panel w-12 h-12 rounded-xl flex items-center justify-center border border-solid"
            >
              <motion.div style={parts.iconColor}>
                <Icon size={20} strokeWidth={2} className="text-current" />
              </motion.div>
            </motion.div>
          </div>

          <h3 className="glass-ios-text font-semibold mb-2 tracking-tight relative z-[1]">
            {title}
          </h3>
          <p className="glass-panel__body glass-ios-text text-[0.9375rem] leading-relaxed opacity-90 relative z-[1] flex-1">
            {desc}
          </p>
        </motion.div>
      </div>
    </article>
  )
}
