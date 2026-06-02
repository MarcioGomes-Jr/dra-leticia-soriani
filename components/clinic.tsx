"use client"

import { useState } from "react"
import { ArrowUpRight, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."


const clinicImages = [
  {
    id: 1,
    src: "/clinic-1.jpeg",
    alt: "Recepção da clínica da Dra. Letícia Soriani em Maringá",
  },
  {
    id: 2,
    src: "/clinic-2.jpeg",
    alt: "Ambiente de atendimento oftalmológico da clínica em Maringá",
   
  },
  {
    id: 3,
    src: "/clinic-3.jpeg",
    alt: "Consultório da Dra. Letícia Soriani na Avenida Brasil em Maringá",
   
  },
  {
    id: 4,
    src: "/clinic-4.jpeg",
    alt: "Estrutura da clínica oftalmológica da Dra. Letícia Soriani",
  
  }
]

export function Clinic() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section id="clinica" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#A98E3F] tracking-widest uppercase mb-4">
              Localização
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#7A7566] mb-4 text-balance">
              Conheça nossa <span className="text-[#A98E3F]">clínica</span> em Maringá
            </h2>
          </div>

          <div id="contato" className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={clinicImages[selectedImage].src}
                  alt={clinicImages[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-foreground/80 text-background text-sm rounded-lg backdrop-blur-sm">
                  {clinicImages[selectedImage].alt}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {clinicImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden aspect-square bg-muted transition-all duration-300 ${selectedImage === index
                        ? "ring-2 ring-[#D8C17A] ring-offset-2"
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

            <div>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] transition-all duration-300">
                      <MapPin className="text-[#7A7566] group-hover:text-[#D8C17A] transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        Avenida Brasil, 4785 - Sala 303<br />
                        3° Andar, Sala 03 - Zona 04<br />
                        CEP 87014-070, Maringá, Paraná
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] transition-all duration-300">
                      <Phone className="text-[#7A7566] group-hover:text-[#D8C17A] transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Telefone</h4>
                      <a
                        href="tel:+5544988348338"
                        className="text-muted-foreground text-sm hover:text-[#A98E3F] transition-colors"
                      >
                        (44) 98834-8338
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-[#7A7566]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7A7566] transition-all duration-300">
                      <Mail className="text-[#7A7566] group-hover:text-[#D8C17A] transition-colors" size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">E-mail</h4>
                      <a
                        href="mailto:draleticiasoriani@gmail.com"
                        className="text-muted-foreground text-sm hover:text-[#A98E3F] transition-colors"
                      >
                        draleticiasoriani@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7A7566] text-white font-medium rounded-full hover:bg-[#7A7566] transition-all duration-300 hover:shadow-xl"
                >
                  Agende sua Consulta
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden border border-border">
                <div className="relative h-48 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0836722710083!2d-51.94857622654587!3d-23.42134443846663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd727c94fdff3%3A0x7c907cf28ce37eac!2sAv.%20Brasil%2C%204785%20-%20Zona%2004%2C%20Maring%C3%A1%20-%20PR%2C%2087014-070!5e0!3m2!1spt-BR!2sbr!4v1777038737829!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av%20Brasil%204785%20Maring%C3%A1%20Paran%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-card hover:bg-[#D8C17A]/15 transition-colors text-sm text-[#7A7566]"
                >
                  Abrir no Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
