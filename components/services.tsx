"use client"

import { useState } from "react"
import { Eye, Heart, Sparkles, Shield, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

const services = [
  {
    icon: Eye,
    title: "Consultas Oftalmológicas Especializadas",
    description:
      "Avaliação completa e individualizada da saúde ocular, com foco em diagnóstico preciso, prevenção e definição do melhor plano de tratamento para cada fase da vida.",
    color: "from-[#7A7566]/20 to-[#7A7566]/5"
  },
  {
    icon: Heart,
    title: "Tratamentos Clínicos Contínuos",
    description:
      "Acompanhamento e tratamento de condições como olho seco e outras alterações oculares, priorizando conforto visual, estabilidade e qualidade de vida no dia a dia.",
    color: "from-[#7A7566]/15 to-[#7A7566]/5"
  },
  {
    icon: Sparkles,
    title: "Cirurgias Oculares",
    description:
      "Realização de cirurgias como catarata e refrativa, com tecnologia atualizada e planejamento personalizado para restaurar ou melhorar a qualidade visual com segurança.",
    color: "from-[#7A7566]/20 to-[#7A7566]/5"
  },
  {
    icon: Shield,
    title: "Controle e Prevenção da Miopia",
    description:
      "Monitoramento e manejo da miopia, especialmente em crianças e adolescentes, com estratégias modernas para reduzir a progressão e proteger a saúde ocular a longo prazo.",
    color: "from-[#7A7566]/15 to-[#7A7566]/5"
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#7A7566]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7A7566]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-[#7A7566] font-medium tracking-widest text-sm mb-4 px-4 py-1 bg-[#7A7566]/10 rounded-full">
            SERVIÇOS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            De ponta a ponta,{" "}
            <span className="text-[#7A7566]">desde o diagnóstico até o tratamento!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conte com uma especialista preparada para encontrar o melhor tratamento para sua realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 bg-card rounded-2xl border border-border transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${hoveredIndex === index ? "shadow-2xl shadow-[#7A7566]/10 -translate-y-2 border-[#7A7566]/30" : "hover:shadow-xl"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-[#7A7566]/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${hoveredIndex === index ? "bg-[#7A7566] scale-110" : "group-hover:bg-[#7A7566]/20"}`}>
                  <service.icon className={`transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-[#7A7566]"}`} size={28} />
                </div>
                
                <h3 className="font-serif text-xl font-medium text-foreground mb-4 group-hover:text-[#7A7566] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#7A7566] font-medium text-sm group/link"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 p-12 bg-gradient-to-r from-[#7A7566]/10 via-[#7A7566]/5 to-[#7A7566]/10 rounded-3xl border border-[#7A7566]/20 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
            Não deixe para depois!
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Agende um horário ainda essa semana e cuide da sua saúde ocular com quem entende.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#7A7566] hover:bg-[#a89e94] text-white font-medium px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[#7A7566]/25"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agende pelo WhatsApp
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
