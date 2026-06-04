'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { servicesData } from '@/content/data'
import { getCardGlowFromViewportCenter } from '@/lib/servicesScrollProgress'

const COUNT = servicesData.length

export default function ServicesSection() {
  const gridRef = useRef(null)
  const glowRef = useRef(Array(COUNT).fill(0))
  const [glows, setGlows] = useState(() => Array(COUNT).fill(0))

  const updateFromScroll = useCallback(() => {
    const grid = gridRef.current
    if (!grid) return

    const vh = window.innerHeight
    const cards = grid.children

    const next = servicesData.map((_, index) => {
      const el = cards[index]
      if (!el) return 0
      return getCardGlowFromViewportCenter(el.getBoundingClientRect(), vh)
    })

    const prev = glowRef.current
    if (prev.every((v, i) => Math.abs(v - next[i]) < 0.003)) return

    glowRef.current = next
    setGlows(next)
  }, [])

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateFromScroll)
    }

    updateFromScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [updateFromScroll])

  return (
    <section id="services" className="pt-8 pb-20 sm:pt-10 sm:pb-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Бренд в медиа"
          titleClassName="glass-panel__title"
          className="mb-9 sm:mb-10"
        />

        <div ref={gridRef} className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.icon} glow={glows[index]} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
