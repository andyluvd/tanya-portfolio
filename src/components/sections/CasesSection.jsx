'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import MetricCounter from '@/components/ui/MetricCounter'
import SectionHeading from '@/components/ui/SectionHeading'
import { casesData } from '@/content/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Кейсы"
          title={casesData.title}
          subtitle={casesData.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-5"
          >
            {casesData.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeIn}
                className="glass-panel glass-card glass-text-contrast px-5 py-6 sm:px-6 sm:py-7"
              >
                <MetricCounter
                  value={metric.value}
                  label={metric.label}
                  suffix={metric.suffix}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative"
          >
            <div className="glass-panel glass-card rounded-[28px] overflow-hidden aspect-video relative isolate">
              <Image
                src={casesData.image.src}
                alt={casesData.image.alt}
                fill
                className="object-cover z-[1]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 z-[2] flex items-center justify-center glass-text-contrast pointer-events-none">
                <span className="font-serif italic text-lg opacity-50">Аналитика Pinterest</span>
              </div>
            </div>
            <p className="mt-3 text-center glass-panel__body glass-ios-text text-xs opacity-65">
              {casesData.image.alt}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
