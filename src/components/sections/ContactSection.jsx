'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Send, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SectionHeading from '@/components/ui/SectionHeading'
import { siteData } from '@/content/data'
import { EMAILJS_CONFIG } from '@/lib/emailjs'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

function ContactLink({ href, icon: Icon, label, value, external }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      {...linkProps}
      className="glass-panel glass-card glass-on-solid glass-text-contrast flex items-center gap-4 px-5 py-5 transition-opacity duration-200 hover:opacity-90"
    >
      <div className="glass-panel w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-[#3a1f10] dark:text-[#f0c898]" strokeWidth={2} />
      </div>
      <div>
        <p className="glass-ios-text text-xs opacity-65 mb-0.5">{label}</p>
        <p className="glass-ios-text font-semibold">{value}</p>
      </div>
    </a>
  )
}

export default function ContactSection() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )
      setStatus('success')
      setFormData({ name: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Контакты"
          title="Давайте работать вместе"
          subtitle="Готова обсудить ваш проект. Напишите в удобный мессенджер или заполните форму."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeIn}>
              <ContactLink
                href={`tel:${siteData.contacts.phone}`}
                icon={Phone}
                label="Телефон"
                value={siteData.contacts.phone}
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ContactLink
                href={siteData.contacts.telegram}
                icon={Send}
                label="Telegram"
                value={siteData.contacts.telegramHandle}
                external
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ContactLink
                href={`mailto:${siteData.contacts.email}`}
                icon={Mail}
                label="Email"
                value={siteData.contacts.email}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {status === 'success' ? (
              <div className="glass-panel glass-card glass-on-solid glass-text-contrast px-8 py-10 text-center">
                <p className="section-title text-[clamp(1.75rem,5vw,2.25rem)] mb-2">Сообщение отправлено!</p>
                <p className="glass-panel__body glass-ios-text text-sm opacity-80">
                  Я свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-panel glass-card glass-on-solid glass-text-contrast px-6 sm:px-8 py-7 flex flex-col gap-5"
              >
                <div>
                  <label className="block glass-ios-text text-sm font-semibold mb-2 opacity-90">
                    Ваше имя
                  </label>
                  <div className="glass-panel glass-field px-4 py-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full glass-ios-text text-sm bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block glass-ios-text text-sm font-semibold mb-2 opacity-90">
                    Сообщение
                  </label>
                  <div className="glass-panel glass-field px-4 py-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Расскажите о вашем проекте..."
                      className="w-full glass-ios-text text-sm bg-transparent resize-none"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="glass-ios-text text-sm text-red-600 dark:text-red-400">
                    Ошибка отправки. Попробуйте ещё раз или напишите напрямую.
                  </p>
                )}

                <button type="submit" disabled={status === 'sending'} className="glass-btn w-full sm:w-auto">
                  {status === 'sending' ? 'Отправка...' : 'Отправить'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
