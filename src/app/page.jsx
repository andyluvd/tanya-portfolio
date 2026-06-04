import HeroSection from '@/components/sections/HeroSection'
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
        <AboutSection />
      </div>

      <ServicesSection />
      <CasesSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
