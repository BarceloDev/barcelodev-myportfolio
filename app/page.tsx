import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { JourneySection } from '@/components/journey-section'
import { TechSection } from '@/components/tech-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <JourneySection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
