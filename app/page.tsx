import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Clinic } from "@/components/clinic"
import { About } from "@/components/about"
import { InstagramSection } from "@/components/instagram"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://www.draleticiasoriani.com.br/#physician",
  name: "Dra. Letícia Soriani",
  description:
    "Médica oftalmologista em Maringá com atendimento em saúde ocular, catarata, olho seco, controle de miopia e cirurgia refrativa.",
  image: "https://www.draleticiasoriani.com.br/doctor-portrait.jpg",
  url: "https://www.draleticiasoriani.com.br/",
  telephone: "+5544988348338",
  email: "draleticiasoriani@gmail.com",
  medicalSpecialty: "Ophthalmology",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Brasil, 4785 - Sala 303",
    addressLocality: "Maringá",
    addressRegion: "PR",
    postalCode: "87014-070",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.4213444,
    longitude: -51.9485762,
  },
  sameAs: ["https://instagram.com/draleticiasoriani"],
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Hero />
      <Services />
      <About />
      <Clinic />
      <InstagramSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
