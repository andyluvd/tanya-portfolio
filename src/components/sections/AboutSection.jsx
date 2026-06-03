'use client'

import { motion } from 'framer-motion'
import { aboutData } from '@/content/data'

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Обо мне
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Почему выбирают меня
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl flex flex-col gap-8"
        >
          {aboutData.paragraphs.map((text, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="drop-cap text-base md:text-lg text-[var(--color-text)] leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
