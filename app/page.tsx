import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Clinic } from "@/components/clinic"
import { About } from "@/components/about"
import { InstagramSection } from "@/components/instagram"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Clinic />
      <About />
      <InstagramSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
