"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  const handleScrollDown = () => {
    const servicos = document.querySelector("#servicos")
    if (servicos) {
      servicos.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A7566]/10 via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7A7566]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7A7566]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#7A7566]/10 border border-[#7A7566]/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#7A7566] rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">CRM-PR 33568 / RQE 24948</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 text-balance">
              Compromisso, Experiência e Cuidado Individual{" "}
              <span className="text-[#7A7566]">para a sua Saúde Ocular!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Cuide da sua visão com atendimento especializado, precisão clínica e um olhar atento a cada detalhe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#7A7566] hover:bg-[#a89e94] text-white font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[#7A7566]/25"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#7A7566] text-[#7A7566] hover:bg-[#7A7566] hover:text-white font-medium px-8 py-6 text-lg transition-all duration-300"
              >
                <a href="#servicos">
                  Conheça Meus Serviços
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif font-medium text-[#7A7566]">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif font-medium text-[#7A7566]">1500+</p>
                <p className="text-sm text-muted-foreground mt-1">Pacientes atendidos</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-serif font-medium text-[#7A7566]">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Dedicação</p>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#7A7566]/20 to-transparent rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-transparent to-[#7A7566]/10 rounded-3xl transform -rotate-2" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/doctor-portrait.jpg"
                  alt="Dra. Letícia Soriani - Oftalmologista"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-xl p-4 border border-border">
                <p className="font-serif text-lg font-medium text-foreground">Dra. Letícia Soriani</p>
                <p className="text-sm text-[#7A7566]">Oftalmologista</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned below content 
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-[#7A7566] transition-colors cursor-pointer z-20"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown className="animate-bounce" size={24} />
      </button> */}
    </section>
  )
}
