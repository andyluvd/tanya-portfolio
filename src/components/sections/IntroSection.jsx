'use client'

import { useEffect, useRef, useState } from 'react'
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
/** За сколько px скролла фото доходит до максимальной блеклости (с момента прилипания пилюли) */
const PHOTO_FADE_DISTANCE = 520

function applyPhotoFade(scrollY, imgEl, noiseEl) {
  if (!imgEl) return
  if (scrollY <= 0) {
    imgEl.style.opacity = ''
    imgEl.style.filter = ''
    if (noiseEl) noiseEl.style.opacity = '0'
    return
  }
  const t = Math.min(1, scrollY / PHOTO_FADE_DISTANCE)
  imgEl.style.opacity = String(1 - t)
  const brightness = 1 - t * 0.28
  const saturate = 1 - t * 0.65
  imgEl.style.filter = `brightness(${brightness}) saturate(${saturate})`
  if (noiseEl) {
    noiseEl.style.opacity = String(t * 0.22)
  }
}

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
  const photoRef = useRef(null)
  const photoNoiseRef = useRef(null)

  useEffect(() => {
    let rafId = 0

    const update = () => {
      const about = document.getElementById('about')
      if (!about) return

      const scrollY = window.scrollY
      const aboutTop = about.getBoundingClientRect().top

      applyPhotoFade(scrollY, photoRef.current, photoNoiseRef.current)

      if (scrollY > 0) {
        setMode('fixed')
        setFixedTop(getFixedTop(aboutTop))
      } else {
        setMode('natural')
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
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
        <div ref={photoNoiseRef} className="intro-photo__noise" aria-hidden />
        <Image
          ref={photoRef}
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
