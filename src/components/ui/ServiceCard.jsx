import { BarChart2, TrendingUp, Video, Layers } from 'lucide-react'

const iconMap = {
  strategy: BarChart2,
  analytics: TrendingUp,
  video: Video,
  visual: Layers,
}

export default function ServiceCard({ icon, title, desc }) {
  const Icon = iconMap[icon] || Layers

  return (
    <div className="group p-6 rounded-[12px] bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg cursor-default">
      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{desc}</p>
    </div>
  )
}
