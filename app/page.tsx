import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ProjectSubmissionSection } from "@/components/project-submission-section"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      {/* <TestimonialsSection /> */}
      <FaqSection />
      <ProjectSubmissionSection />
      <Footer />
      {/* <FloatingCta /> */}
    </main>
  )
}
