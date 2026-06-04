'use client'

import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Spaced({ children }) {
  return (
    <span className="tracking-[0.22em] text-[var(--color-accent)] font-medium">
      {children}
    </span>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 -mt-[38vh]"
    >
      {/* Glass card — overlaps the photo */}
      <div className="backdrop-blur-2xl bg-white/10 dark:bg-black/20 border-t border-x border-white/20 rounded-t-[44px] shadow-[0_-8px_60px_rgba(0,0,0,0.18)] px-6 sm:px-10 pt-14 pb-0">
        <div className="max-w-2xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 dark:text-white/60 mb-10"
          >
            Обо мне
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-7"
          >
            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-[1.85] text-white dark:text-white/90 font-light">
              Творческая и внимательная к деталям личность,
              обладаю развитым эстетическим вкусом, стремлюсь
              к&nbsp;<Spaced>гармонии</Spaced>&nbsp;в визуальных решениях
              и&nbsp;<Spaced>всегда</Spaced>&nbsp;открыта к новым идеям.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-[1.85] text-white dark:text-white/90 font-light">
              Внимательна к трендам, но при этом ценю
              индивидуальность и уникальный стиль в дизайне.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-[1.85] text-white dark:text-white/90 font-light">
              Ответственна, организованна и умею работать
              в сжатые сроки без потери качества.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-[1.85] text-white dark:text-white/90 font-light pb-14">
              Стремлюсь к постоянному развитию, осваиваю
              новые инструменты и&nbsp;<Spaced>вдохновляюсь</Spaced>&nbsp;искусством.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Solid background continues the page below the glass section */}
      <div className="bg-[var(--color-bg)]" />
    </section>
  )
}
