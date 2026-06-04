'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`mb-12 ${className}`}
    >
      {eyebrow ? (
        <p className="section-eyebrow glass-ios-text glass-on-solid glass-text-contrast">{eyebrow}</p>
      ) : null}
      <h2 className="section-title glass-text-contrast glass-on-solid">{title}</h2>
      {subtitle ? (
        <p className="section-subtitle glass-panel__body glass-ios-text glass-on-solid glass-text-contrast mt-4 max-w-xl">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  )
}
