'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AboutContent from './AboutSection'

/*
  Три состояния пилюли «Золотарёва Татьяна»:

  1. natural   — в потоке, ВЫШЕ фото (y≈16px), фото начинается ниже
  2. fixed     — position:fixed top:16px, пока скролл идёт над фото
  3. floating  — в потоке ВНУТРИ блока «Обо мне», уезжает вместе с ним

  Переход 2→3 происходит когда верх блока #about достигает y=16px
  (pill был там же) — склейка без прыжка.
*/

const TOP = 16 // px = 1rem

function GlassPill() {
  return (
    <div className="intro-header">
      <div className="intro-header__glass glass-text-contrast font-serif text-base sm:text-lg tracking-wide whitespace-nowrap">
        Золотарёва Татьяна
      </div>
    </div>
  )
}

export default function IntroSection() {
  const [mode, setMode] = useState('natural')

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById('about')
      if (!about) return

      const aboutTop = about.getBoundingClientRect().top

      if (aboutTop <= TOP) {
        // About section поднялся до уровня пилюли → уходим вместе
        setMode('floating')
      } else if (window.scrollY > 0) {
        // Страница прокручена, пилюля прилипла к верху
        setMode('fixed')
      } else {
        // Начало страницы
        setMode('natural')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative">

      {/*
        ① NATURAL — в потоке выше фото.
        Placeholder всегда присутствует (visibility:hidden), чтобы
        фото не прыгало вверх когда пилюля уходит в fixed.
      */}
      <div
        style={{ visibility: mode === 'natural' ? 'visible' : 'hidden' }}
        aria-hidden={mode !== 'natural'}
      >
        <GlassPill />
      </div>

      {/*
        ② FIXED — прилипла к верху, фото под ней
      */}
      {mode === 'fixed' && (
        <div className="intro-header intro-header--fixed">
          <div className="intro-header__glass glass-text-contrast font-serif text-base sm:text-lg tracking-wide whitespace-nowrap">
            Золотарёва Татьяна
          </div>
        </div>
      )}

      {/* Фото: sticky, за пилюлей */}
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

      {/*
        Блок «Обо мне»: id="about" нужен для расчёта позиции.
        ③ FLOATING — пилюля рендерится первым дочерним элементом
           и уезжает с блоком вверх.
      */}
      <section id="about" className="intro-about-wrap">
        {mode === 'floating' && <GlassPill />}
        <AboutContent />
      </section>

    </div>
  )
}
