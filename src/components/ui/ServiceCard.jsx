import { Target, TrendingUp, Clapperboard, Palette } from 'lucide-react'

const iconMap = {
  strategy: Target,
  analytics: TrendingUp,
  video: Clapperboard,
  visual: Palette,
}

export default function ServiceCard({ icon, title, desc }) {
  const Icon = iconMap[icon] || Palette

  return (
    <div className="group relative p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/60 hover:shadow-[0_16px_40px_rgba(123,79,50,0.12)] cursor-default overflow-hidden">
      {/* Subtle top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-accent)]" />

      <div className="relative mb-5">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:scale-110 group-hover:rotate-3">
          <Icon size={20} className="text-[var(--color-accent)] transition-colors duration-300 group-hover:text-white" />
        </div>
      </div>

      <h3 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-2 relative">{title}</h3>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed relative">{desc}</p>
    </div>
  )
}
