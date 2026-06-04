import HeroSection from '@/components/sections/HeroSection'
import IntroHeader from '@/components/layout/IntroHeader'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CasesSection from '@/components/sections/CasesSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Фото липнет при скролле, уходит под overlay */}
        <HeroSection />

        {/*
          Overlay стартует с позиции 0 (margin-top: -100vw тянет вверх).
          Пилюля sticky: прилипает при скролле, отлипает когда блок «Обо мне»
          поднимается до неё и уносит вместе с собой.
        */}
        <div className="intro-overlay">
          <IntroHeader />
          <div className="intro-spacer" aria-hidden="true" />
          <AboutSection />
        </div>
      </div>

      <ServicesSection />
      <CasesSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
