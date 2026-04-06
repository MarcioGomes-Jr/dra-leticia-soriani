"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Heart, Stethoscope, ArrowRight, CheckCircle } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

const highlights = [
  { icon: GraduationCap, text: "Formação sólida e atualização constante" },
  { icon: Stethoscope, text: "Diagnósticos precisos e tratamentos seguros" },
  { icon: Heart, text: "Escuta ativa e acolhimento" },
  { icon: Award, text: "Cuidado integral e individualizado" },
]

const specialties = [
  "Catarata",
  "Olho seco",
  "Controle de miopia",
  "Cirurgia refrativa"
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation()

  return (
    <section id="sobre" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#7A7566]/30 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-[#7A7566]/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image */}
          <div
            ref={ref}
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Animated frames */}
              <div className="absolute -inset-4 border-2 border-[#7A7566]/30 rounded-3xl transform rotate-3 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute -inset-4 border-2 border-[#7A7566]/20 rounded-3xl transform -rotate-2 transition-transform duration-500 hover:-rotate-4" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/doctor-portrait-2.jpg"
                  alt="Dra. Letícia Soriani"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>

              {/* CRM Badge - animated */}
              <div className="absolute -bottom-6 -right-6 bg-card px-6 py-4 rounded-2xl shadow-xl border border-border transform transition-transform duration-300 hover:scale-105">
                <p className="text-[#7A7566] font-semibold">CRM-PR 33568</p>
                <p className="text-muted-foreground text-sm">RQE 24948</p>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#7A7566] text-white px-5 py-3 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                <p className="font-bold text-2xl">10+</p>
                <p className="text-xs opacity-90">anos</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={ref2}
            className={`transition-all duration-1000 delay-200 ${isVisible2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <span className="inline-block text-[#7A7566] font-medium tracking-widest text-sm mb-4 px-4 py-1 bg-[#7A7566]/10 rounded-full">
              SOBRE
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2">
              Dra. Letícia Soriani
            </h2>
            <p className="text-[#7A7566] text-xl font-medium mb-8">Muito Prazer!</p>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A Dra. Letícia Soriani é médica oftalmologista, formada com o propósito de cuidar da visão de forma completa, individualizada e centrada no paciente.
              </p>
              <p>
                Ao longo de sua trajetória, construiu uma formação sólida e mantém atualização constante para oferecer diagnósticos precisos e tratamentos seguros.
              </p>
              <p>
                Sua atuação abrange áreas como catarata, olho seco, controle de miopia e cirurgia refrativa, sempre aliando conhecimento técnico, tecnologia e atenção aos detalhes.
              </p>
              <p>Seu atendimento vai além de protocolos e procedimentos: é baseado na escuta ativa, no acolhimento e na compreensão profunda das necessidades de cada paciente.</p>

              <p>A Dra. Letícia acredita em um cuidado integral, que considera não apenas a saúde ocular, mas também a história, os hábitos e a qualidade de vida de quem atende, construindo relações de confiança e segurança em cada consulta.</p>

              <p>Para ela, a oftalmologia é mais do que uma especialidade — é uma vocação. É por meio desse olhar atento e humano que realiza seu propósito de promover saúde, bem-estar e a experiência de enxergar o mundo com mais clareza, conforto e qualidade de vida.</p>
            </div>

            {/* Specialties */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
              <p className="text-sm font-medium text-foreground mb-4">Áreas de atuação:</p>
              <div className="flex flex-wrap gap-3">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#7A7566]/10 text-foreground rounded-full text-sm transition-all duration-300 hover:bg-[#7A7566]/20"
                  >
                    <CheckCircle className="text-[#7A7566]" size={16} />
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border transition-all duration-300 hover:border-[#7A7566]/30 hover:shadow-lg group"
                >
                  <div className="w-10 h-10 bg-[#7A7566]/10 rounded-lg flex items-center justify-center group-hover:bg-[#7A7566]/20 transition-colors">
                    <item.icon className="text-[#7A7566]" size={20} />
                  </div>
                  <span className="text-sm text-foreground leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#7A7566] hover:bg-[#a89e94] text-white font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[#7A7566]/25 mt-10 group"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agende um Horário Agora
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
