'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { formatNumber, easeOut } from '@/lib/utils'

export default function MetricCounter({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const animationRef = useRef(null)

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOut(progress)
      setCount(Math.round(easedProgress * value))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <p className="glass-metric__value glass-accent glass-text-contrast">
        {formatNumber(count)}
        {suffix}
      </p>
      <p className="glass-metric__label glass-panel__body glass-text-contrast mt-2">{label}</p>
    </div>
  )
}
