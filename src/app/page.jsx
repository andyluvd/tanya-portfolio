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
        <HeroSection />

        {/* Накладывается на фото: заголовок (на фоне страницы) + карточка «Обо мне» */}
        <div className="intro-scroll -mt-[100vw]">
          <div className="bg-[var(--color-bg)]">
            <IntroHeader />
          </div>
          <div className="intro-photo-spacer" aria-hidden="true" />
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
