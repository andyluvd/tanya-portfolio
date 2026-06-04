import { Phone, Mail, Send } from 'lucide-react'
import FooterThemeToggle from '@/components/layout/FooterThemeToggle'
import { siteData } from '@/content/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]/60 bg-[var(--color-bg)] py-10 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="section-title text-[clamp(1.5rem,4vw,2rem)] glass-text-contrast">
              {siteData.name}
            </p>
            <p className="glass-panel__body glass-ios-text text-sm mt-1 opacity-75">
              {siteData.role} · {siteData.niche}
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href={`tel:${siteData.contacts.phone}`}
              className="glass-panel glass-pill glass-on-solid glass-text-contrast glass-ios-text text-sm font-medium px-4 py-2.5 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Phone size={15} />
              <span>{siteData.contacts.phone}</span>
            </a>
            <a
              href={siteData.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-pill glass-on-solid glass-text-contrast glass-ios-text text-sm font-medium px-4 py-2.5 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={15} />
              <span>Telegram</span>
            </a>
            <a
              href={`mailto:${siteData.contacts.email}`}
              className="glass-panel glass-pill glass-on-solid glass-text-contrast glass-ios-text text-sm font-medium px-4 py-2.5 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
            <FooterThemeToggle />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)]/50 text-center">
          <p className="glass-panel__body glass-ios-text text-xs opacity-60">
            © {currentYear} {siteData.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
