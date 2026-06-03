'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { heroData } from '@/content/data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' } },
})

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 10 C50 10, 70 20, 70 40 C70 60, 50 70, 40 70 C30 70, 10 60, 10 40 C10 20, 30 10, 40 10Z"
                fill="var(--color-accent)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaves)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-6">
            <motion.h1
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-[var(--color-accent)] font-medium"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-md"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              variants={fadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-2"
            >
              <a
                href={heroData.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {heroData.ctaPrimary.label}
              </a>
              <a
                href={heroData.ctaSecondary.href}
                className="px-6 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold text-sm hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200"
              >
                {heroData.ctaSecondary.label}
              </a>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-[var(--color-border)] shadow-2xl">
                <div className="w-full h-full bg-[var(--color-surface)] flex items-center justify-center">
                  <Image
                    src="/photo.jpg"
                    alt="Татьяна Золотарева"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-muted)] text-sm opacity-50">
                    <span className="font-serif text-lg">Фото</span>
                  </div>
                </div>
              </div>
              {/* Decorative frame offset */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[var(--color-accent)] opacity-30 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
