'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/content/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M19 28.5C19 23.806 22.806 20 27.5 20C32.194 20 36 23.806 36 28.5C36 33.194 32.194 37 27.5 37C22.806 37 19 33.194 19 28.5Z" fill="#1ABCFE"/>
      <path d="M2 47.5C2 42.806 5.806 39 10.5 39H19V47.5C19 52.194 15.194 56 10.5 56C5.806 56 2 52.194 2 47.5Z" fill="#0ACF83"/>
      <path d="M19 1V20H27.5C32.194 20 36 16.194 36 11.5C36 6.806 32.194 3 27.5 3H19V1Z" fill="#FF7262"/>
      <path d="M2 11.5C2 16.194 5.806 20 10.5 20H19V3H10.5C5.806 3 2 6.806 2 11.5Z" fill="#F24E1E"/>
      <path d="M2 29.5C2 34.194 5.806 38 10.5 38H19V21H10.5C5.806 21 2 24.806 2 29.5Z" fill="#A259FF"/>
    </svg>
  )
}

function AdobeIcon({ label, bg, textColor = 'white' }) {
  return (
    <span
      className="w-6 h-6 rounded-[4px] flex items-center justify-center text-[9px] font-bold leading-none flex-shrink-0"
      style={{ background: bg, color: textColor }}
    >
      {label}
    </span>
  )
}

function CapCutIcon() {
  return (
    <span className="w-6 h-6 rounded-[4px] flex items-center justify-center text-[9px] font-bold leading-none flex-shrink-0 bg-black text-white">
      C
    </span>
  )
}

const toolIcons = {
  Figma: () => <FigmaIcon />,
  'Adobe Illustrator': () => <AdobeIcon label="Ai" bg="linear-gradient(135deg,#FF9A00,#FF7300)" />,
  'Photoshop': () => <AdobeIcon label="Ps" bg="linear-gradient(135deg,#31A8FF,#0066CC)" />,
  'Premiere Pro': () => <AdobeIcon label="Pr" bg="linear-gradient(135deg,#9999FF,#6666CC)" />,
  CapCut: () => <CapCutIcon />,
}

function ToolTag({ name }) {
  const Icon = toolIcons[name]
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm font-medium text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-accent)]/40 hover:shadow-sm">
      {Icon ? <Icon /> : (
        <span className="w-5 h-5 rounded-[4px] bg-[var(--color-accent)]/30 inline-block" />
      )}
      {name}
    </div>
  )
}

function AITag({ name, desc }) {
  return (
    <div className="px-4 py-3 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-sm">
      <p className="font-semibold text-[var(--color-accent)]">{name}</p>
      <p className="text-xs text-[var(--color-muted)] mt-0.5">{desc}</p>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Инструменты
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Чем работаю
          </h2>
        </motion.div>

        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4 font-semibold">
              Дизайн и видео
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skillsData.tools.map((tool) => (
                <motion.div key={tool.name} variants={fadeUp}>
                  <ToolTag name={tool.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4 font-semibold">
              ИИ-инструменты
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skillsData.ai.map((tool) => (
                <motion.div key={tool.name} variants={fadeUp}>
                  <AITag {...tool} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4 font-semibold">
              Платформы
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skillsData.platforms.map((platform) => (
                <motion.div key={platform} variants={fadeUp}>
                  <span className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-muted)]">
                    {platform}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
