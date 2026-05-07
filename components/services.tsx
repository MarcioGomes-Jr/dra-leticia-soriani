"use client"

import { Eye, Heart, Sparkles, Shield, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

const services = [
  {
    icon: Eye,
    title: "Consultas Oftalmológicas Especializadas",
    description:
      "Avaliação completa e individualizada da saúde ocular, com foco em diagnóstico preciso, prevenção e definição do melhor plano de tratamento para cada fase da vida.",
  },
  {
    icon: Heart,
    title: "Tratamentos Clínicos Contínuos",
    description:
      "Acompanhamento e tratamento de condições como olho seco e outras alterações oculares, priorizando conforto visual, estabilidade e qualidade de vida no dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Cirurgias Oculares",
    description:
      "Realização de cirurgias como catarata, refrativa e pterígio, com tecnologia atualizada e planejamento personalizado para restaurar ou melhorar a qualidade visual com segurança.",
  },
  {
    icon: Shield,
    title: "Controle e Prevenção da Miopia",
    description:
      "Monitoramento e manejo da miopia, especialmente em crianças e adolescentes, com estratégias modernas para reduzir a progressão e proteger a saúde ocular a longo prazo.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="servicos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#7A7566]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7A7566]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight text-balance">
            De ponta a ponta, desde o diagnóstico até o tratamento
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Conte com uma especialista preparada para encontrar o melhor tratamento para sua realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 bg-card rounded-xl border border-border hover:border-[#7A7566]/30 hover:shadow-lg hover:shadow-[#7A7566]/10 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-[#7A7566]/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#7A7566] transition-colors">
                <service.icon className="w-6 h-6 text-[#7A7566] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-[#7A7566] transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[#7A7566] font-medium text-sm group/link"
              >
                Saiba mais
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </div>
          ))}
        </div>

        <div className={`text-center mt-20 p-8 md:p-12 bg-gradient-to-r from-[#7A7566]/10 via-[#7A7566]/5 to-[#7A7566]/10 rounded-2xl border border-[#7A7566]/20 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
            Não deixe para depois
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg mx-auto">
            Agende um horário ainda essa semana.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#7A7566] text-white font-medium rounded-full hover:bg-[#a89e94] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Agende pelo WhatsApp
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
