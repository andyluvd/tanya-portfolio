'use client'

import { motion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'
import { servicesData } from '@/content/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Услуги
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Что я делаю
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div key={service.icon} variants={fadeUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
