import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CasesSection from '@/components/sections/CasesSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      {/*
        Hero photo is sticky — stays pinned at top while the glass
        About section scrolls up over it, creating the frosted-glass effect.
      */}
      <div className="relative">
        <div className="sticky top-0 h-screen -z-10 overflow-hidden">
          <HeroSection />
        </div>
        <div className="-mt-[100vh]">
          {/* Transparent spacer so the sticky hero occupies scroll space */}
          <div className="h-[62vh] pointer-events-none" />
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
