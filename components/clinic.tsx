"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Monitor, Building, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

const clinicImages = [
  {
    id: 1,
    src: "/clinica-1.jpeg",
    alt: "Recepção da clínica",
  },
  {
    id: 2,
    src: "/clinic-2.jpeg",
    alt: "Sala de exames oftalmológicos",
   
  },
  {
    id: 3,
    src: "/clinic-3.jpeg",
    alt: "Equipamentos modernos",
   
  },
  {
    id: 4,
    src: "/clinic-4.jpeg",
    alt: "Sala de espera",
  
  }
]

export function Clinic() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section id="clinica" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-16">
            <p className="text-[#7A7566] font-medium tracking-widest text-sm mb-4">
              LOCALIZAÇÃO
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
              Conheça nossa clínica em{" "}
              <span className="text-[#7A7566]">Maringá!</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ambiente moderno e acolhedor, equipado com tecnologia de ponta para oferecer o melhor cuidado à sua visão.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                <img
                  src={clinicImages[selectedImage].src}
                  alt={clinicImages[selectedImage].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-foreground/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                    {clinicImages[selectedImage].alt}
                  </p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {clinicImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${selectedImage === index
                        ? "ring-2 ring-[#7A7566] ring-offset-2 scale-95"
                        : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] group-hover:text-white transition-all duration-300">
                      <Building className="text-[#7A7566] group-hover:text-white transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Avenida Brasil, 4785 - Sala 303<br />
                        3° Andar, Sala 03 - Zona 04<br />
                        CEP 87014-050, Maringá, Paraná
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] transition-all duration-300">
                      <Phone className="text-[#7A7566] group-hover:text-white transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Telefone</h4>
                      <a
                        href="tel:+5544988348338"
                        className="text-muted-foreground text-sm hover:text-[#7A7566] transition-colors"
                      >
                        (44) 98834-8338
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] transition-all duration-300">
                      <Mail className="text-[#7A7566] group-hover:text-white transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">E-mail</h4>
                      <a
                        href="mailto:contato@draleticiasoriani.com.br"
                        className="text-muted-foreground text-sm hover:text-[#7A7566] transition-colors"
                      >
                        contato@draleticiasoriani.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] transition-all duration-300">
                      <Monitor className="text-[#7A7566] group-hover:text-white transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Teleconsulta</h4>
                      <p className="text-muted-foreground text-sm">
                        Atendimento online disponível
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#7A7566] hover:bg-[#a89e94] text-white font-medium w-full py-6 text-lg transition-all duration-300 hover:shadow-lg group"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Agende sua Consulta
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5123!2d-51.9328!3d-23.4205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI1JzEzLjgiUyA1McKwNTUnNTguMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
