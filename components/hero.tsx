"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-screen flex items-center pt-28 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A7566]/10 via-background to-secondary/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="order-2 lg:order-1 text-center lg:text-left duration-700">
            <p className="text-sm md:text-base font-medium text-[#7A7566] tracking-widest uppercase mb-4">
              CRM-PR 33568 / RQE 24948
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium leading-tight text-foreground mb-6 text-balance">
              <span className="block">Compromisso, Experiência</span>
              <span className="block">e Cuidado Individual</span>
              <span className="block">para a sua Saúde Ocular</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Cuide da sua visão com atendimento especializado, precisão clínica e um olhar atento a cada detalhe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7A7566] text-white font-medium rounded-full hover:bg-[#a89e94] transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Agendar Consulta
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#7A7566] text-[#7A7566] font-medium rounded-full hover:bg-[#7A7566] hover:text-white transition-all duration-300"
              >
                Conheça Meus Serviços
              </a>
            </div>

            
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#7A7566]/20 to-transparent rounded-full blur-3xl opacity-50" />
              <img
                src="/doctor-portrait.jpg"
                alt="Dra. Letícia Soriani - Oftalmologista"
                className="relative rounded-2xl shadow-2xl object-cover object-top w-full aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-[#7A7566]/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#7A7566] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
