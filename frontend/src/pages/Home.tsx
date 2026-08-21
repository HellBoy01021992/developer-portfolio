import { AppLayout } from '../layouts/AppLayout'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { SkillsSection } from '../sections/SkillsSection'
import { CredentialsSection } from '../sections/CredentialsSection'
import { ContactSection } from '../sections/ContactSection'

export const Home = () => {
  return (
    <AppLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CredentialsSection />
      <ContactSection />
    </AppLayout>
  )
}
