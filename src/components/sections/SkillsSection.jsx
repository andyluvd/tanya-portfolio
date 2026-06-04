'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillsData } from '@/content/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0">
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
      className="w-5 h-5 rounded-[4px] flex items-center justify-center text-[8px] font-bold leading-none flex-shrink-0"
      style={{ background: bg, color: textColor }}
    >
      {label}
    </span>
  )
}

function CapCutIcon() {
  return (
    <span className="w-5 h-5 rounded-[4px] flex items-center justify-center text-[8px] font-bold leading-none flex-shrink-0 bg-black text-white">
      C
    </span>
  )
}

const toolIcons = {
  Figma: () => <FigmaIcon />,
  'Adobe Illustrator': () => <AdobeIcon label="Ai" bg="linear-gradient(135deg,#FF9A00,#FF7300)" />,
  Photoshop: () => <AdobeIcon label="Ps" bg="linear-gradient(135deg,#31A8FF,#0066CC)" />,
  'Premiere Pro': () => <AdobeIcon label="Pr" bg="linear-gradient(135deg,#9999FF,#6666CC)" />,
  CapCut: () => <CapCutIcon />,
}

function ToolTag({ name }) {
  const Icon = toolIcons[name]
  return (
    <span className="glass-panel glass-pill glass-on-solid glass-text-contrast glass-ios-text text-sm font-semibold">
      {Icon ? <Icon /> : (
        <span className="w-5 h-5 rounded-[4px] bg-[#3a1f10]/20 dark:bg-[#f0c898]/25 inline-block" />
      )}
      {name}
    </span>
  )
}

function AITag({ name, desc }) {
  return (
    <div className="glass-panel glass-card glass-on-solid glass-text-contrast px-5 py-3.5 max-w-xs">
      <p className="glass-ios-text font-semibold glass-accent">{name}</p>
      <p className="glass-panel__body glass-ios-text text-xs mt-1 opacity-80">{desc}</p>
    </div>
  )
}

function SubsectionLabel({ children }) {
  return (
    <p className="section-eyebrow glass-ios-text mb-4 opacity-70">{children}</p>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Инструменты" title="Чем работаю" />

        <div className="space-y-12">
          <div>
            <SubsectionLabel>Дизайн и видео</SubsectionLabel>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-wrap gap-3"
            >
              {skillsData.tools.map((tool) => (
                <motion.div key={tool.name} variants={fadeIn}>
                  <ToolTag name={tool.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <SubsectionLabel>ИИ-инструменты</SubsectionLabel>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-wrap gap-4"
            >
              {skillsData.ai.map((tool) => (
                <motion.div key={tool.name} variants={fadeIn}>
                  <AITag {...tool} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <SubsectionLabel>Платформы</SubsectionLabel>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-wrap gap-3"
            >
              {skillsData.platforms.map((platform) => (
                <motion.div key={platform} variants={fadeIn}>
                  <span className="glass-panel glass-pill glass-on-solid glass-text-contrast glass-ios-text text-sm font-medium opacity-90">
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
