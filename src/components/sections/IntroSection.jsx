'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AboutContent from './AboutSection'

/*
  Два режима + плавное отлипание без скачка в конце:

  1. natural — в потоке (scroll = 0)
  2. fixed   — position: fixed; top от 16px до aboutTop (1:1 со скроллом)

  Отлипание: пока #about ближе HANDOFF_START → top плавно смещается к верху секции.
  В конце не переключаемся в floating (иначе рывок из-за вставки в поток #about).
*/

const STICK_TOP = 16
const HANDOFF_START = 88

function getFixedTop(aboutTop) {
  if (aboutTop >= HANDOFF_START) return STICK_TOP
  if (aboutTop <= STICK_TOP) return aboutTop
  const t = (HANDOFF_START - aboutTop) / (HANDOFF_START - STICK_TOP)
  return STICK_TOP + t * (aboutTop - STICK_TOP)
}

function GlassPill() {
  return (
    <div className="intro-header__glass glass-text-contrast glass-ios-text whitespace-nowrap">
      Золотарёва Татьяна
    </div>
  )
}

export default function IntroSection() {
  const [mode, setMode] = useState('natural')
  const [fixedTop, setFixedTop] = useState(STICK_TOP)

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById('about')
      if (!about) return

      const aboutTop = about.getBoundingClientRect().top

      if (window.scrollY > 0) {
        setMode('fixed')
        setFixedTop(getFixedTop(aboutTop))
      } else {
        setMode('natural')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative">
      <div
        className="intro-header intro-header--natural"
        style={{ visibility: mode === 'natural' ? 'visible' : 'hidden' }}
        aria-hidden={mode !== 'natural'}
      >
        <GlassPill />
      </div>

      {mode === 'fixed' && (
        <div
          className="intro-header intro-header--fixed"
          style={{ top: fixedTop }}
        >
          <GlassPill />
        </div>
      )}

      <div className="intro-photo">
        <Image
          src="/photo.jpg"
          alt="Татьяна Золотарева"
          width={640}
          height={640}
          className="intro-photo__image"
          priority
          sizes="100vw"
        />
      </div>

      <section id="about" className="intro-about-wrap">
        <AboutContent />
      </section>
    </div>
  )
}
