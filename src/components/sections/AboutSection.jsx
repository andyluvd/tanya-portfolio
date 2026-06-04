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
    <section id="about" className="intro-about">
      <div className="px-5 sm:px-10 md:px-14 pt-8 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={[
            'mx-auto max-w-xl',
            'backdrop-blur-xl',
            'bg-white/80 dark:bg-black/55',
            'border border-[var(--color-border)]',
            'rounded-[28px]',
            'shadow-[0_12px_48px_rgba(0,0,0,0.15)]',
            'px-6 sm:px-9 pt-9 pb-11',
          ].join(' ')}
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-7"
          >
            Обо мне
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col gap-5"
          >
            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9] text-[var(--color-text)] font-light">
              Творческая и внимательная к деталям личность,
              обладаю развитым эстетическим вкусом, стремлюсь
              к&nbsp;<Spaced>гармонии</Spaced>&nbsp;в визуальных решениях
              и&nbsp;<Spaced>всегда</Spaced>&nbsp;открыта к новым идеям.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9] text-[var(--color-text)] font-light">
              Внимательна к трендам, но при этом ценю
              индивидуальность и уникальный стиль в дизайне.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9] text-[var(--color-text)] font-light">
              Ответственна, организованна и умею работать
              в сжатые сроки без потери качества.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9] text-[var(--color-text)] font-light">
              Стремлюсь к постоянному развитию, осваиваю
              новые инструменты и&nbsp;<Spaced>вдохновляюсь</Spaced>&nbsp;искусством.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-[var(--color-bg)] min-h-[40vh]" />
    </section>
  )
}
