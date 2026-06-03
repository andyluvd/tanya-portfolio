'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import MetricCounter from '@/components/ui/MetricCounter'
import { casesData } from '@/content/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Кейсы
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            {casesData.title}
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)] max-w-xl leading-relaxed">
            {casesData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-8">
            {casesData.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]"
              >
                <MetricCounter
                  value={metric.value}
                  label={metric.label}
                  suffix={metric.suffix}
                />
              </motion.div>
            ))}
          </div>

          {/* Screenshot */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl bg-[var(--color-bg)] aspect-video flex items-center justify-center">
              <Image
                src={casesData.image.src}
                alt={casesData.image.alt}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-[var(--color-muted)] text-sm opacity-40 pointer-events-none">
                <span className="font-serif text-lg">Аналитика Pinterest</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-center text-[var(--color-muted)]">
              {casesData.image.alt}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
