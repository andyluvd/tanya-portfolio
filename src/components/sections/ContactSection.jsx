'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Send, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { siteData } from '@/content/data'
import { EMAILJS_CONFIG } from '@/lib/emailjs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ContactSection() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Контакты
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Давайте работать вместе
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)] max-w-lg leading-relaxed">
            Готова обсудить ваш проект. Напишите в удобный мессенджер или заполните форму.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <a
              href={`tel:${siteData.contacts.phone}`}
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-200">
                <Phone size={18} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] mb-0.5">Телефон</p>
                <p className="font-medium text-[var(--color-text)]">{siteData.contacts.phone}</p>
              </div>
            </a>

            <a
              href={siteData.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-200">
                <Send size={18} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] mb-0.5">Telegram</p>
                <p className="font-medium text-[var(--color-text)]">{siteData.contacts.telegramHandle}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteData.contacts.email}`}
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-200">
                <Mail size={18} className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] mb-0.5">Email</p>
                <p className="font-medium text-[var(--color-text)]">{siteData.contacts.email}</p>
              </div>
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {status === 'success' ? (
              <div className="p-8 rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 text-center">
                <p className="font-serif text-xl font-semibold text-[var(--color-accent)] mb-2">
                  Сообщение отправлено!
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  Я свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500">Ошибка отправки. Попробуйте ещё раз или напишите напрямую.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-opacity"
                >
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
