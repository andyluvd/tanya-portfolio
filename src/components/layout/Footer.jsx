import { Phone, Mail, Send } from 'lucide-react'
import { siteData } from '@/content/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg font-semibold text-[var(--color-text)]">
              {siteData.name}
            </p>
            <p className="text-sm text-[var(--color-muted)] mt-1">{siteData.role} · {siteData.niche}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteData.contacts.phone}`}
              className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone size={15} />
              <span>{siteData.contacts.phone}</span>
            </a>
            <a
              href={siteData.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Send size={15} />
              <span>Telegram</span>
            </a>
            <a
              href={`mailto:${siteData.contacts.email}`}
              className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-center">
          <p className="text-xs text-[var(--color-muted)]">
            © {currentYear} {siteData.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
