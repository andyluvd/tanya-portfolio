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
  return <span className="glass-accent">{children}</span>
}

export default function AboutContent() {
  return (
    <>
      <div className="px-5 sm:px-10 md:px-14 pt-4 pb-6">
        {/* Обёртка только для fade — transform ломает backdrop-filter на стекле */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-xl"
        >
          <div className="glass-panel glass-text-contrast rounded-[28px] px-6 sm:px-9 pt-9 pb-11">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel__title glass-text-contrast"
          >
            Обо мне
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass-panel__content"
          >
            <motion.p variants={fadeUp} className="glass-panel__body glass-ios-text">
              Творческая и внимательная к деталям личность,
              обладаю развитым эстетическим вкусом, стремлюсь
              к&nbsp;<Spaced>гармонии</Spaced>&nbsp;в визуальных решениях
              и&nbsp;<Spaced>всегда</Spaced>&nbsp;открыта к новым идеям.
            </motion.p>

            <motion.p variants={fadeUp} className="glass-panel__body glass-ios-text">
              Внимательна к трендам, но при этом ценю
              индивидуальность и уникальный стиль в дизайне.
            </motion.p>

            <motion.p variants={fadeUp} className="glass-panel__body glass-ios-text">
              Ответственна, организованна и умею работать
              в сжатые сроки без потери качества.
            </motion.p>

            <motion.p variants={fadeUp} className="glass-panel__body glass-ios-text">
              Стремлюсь к постоянному развитию, осваиваю
              новые инструменты и&nbsp;<Spaced>вдохновляюсь</Spaced>&nbsp;искусством.
            </motion.p>
          </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="bg-[var(--color-bg)] min-h-[40vh]" />
    </>
  )
}
