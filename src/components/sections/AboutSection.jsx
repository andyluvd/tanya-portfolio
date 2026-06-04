'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/content/data'

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
    <span className="glass-accent tracking-[0.22em] font-semibold">
      {children}
    </span>
  )
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
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-accent text-xs font-semibold uppercase tracking-[0.25em] mb-7"
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
            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9]">
              Творческая и внимательная к деталям личность,
              обладаю развитым эстетическим вкусом, стремлюсь
              к&nbsp;<Spaced>гармонии</Spaced>&nbsp;в визуальных решениях
              и&nbsp;<Spaced>всегда</Spaced>&nbsp;открыта к новым идеям.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9]">
              Внимательна к трендам, но при этом ценю
              индивидуальность и уникальный стиль в дизайне.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9]">
              Ответственна, организованна и умею работать
              в сжатые сроки без потери качества.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] sm:text-base leading-[1.9]">
              Стремлюсь к постоянному развитию, осваиваю
              новые инструменты и&nbsp;<Spaced>вдохновляюсь</Spaced>&nbsp;искусством.
            </motion.p>

            {/* CTA кнопки */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteData.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
              >
                Написать в Telegram
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-accent)]/50 text-[var(--color-accent)] text-sm font-semibold transition-all duration-200 hover:bg-[var(--color-surface)] hover:-translate-y-0.5"
              >
                Посмотреть кейсы
              </a>
            </motion.div>
          </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="bg-[var(--color-bg)] min-h-[40vh]" />
    </>
  )
}
