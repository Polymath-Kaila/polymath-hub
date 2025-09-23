import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import TeachingSection from '@/components/TeachingSection'
import ExperienceSection from '@/components/ExperienceSection'
import AchievementsSection from '@/components/AchievementsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <TeachingSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
