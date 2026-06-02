"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, GraduationCap, Heart, Stethoscope, ArrowUpRight, CheckCircle } from "lucide-react"

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
    <section id="sobre" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#7A7566]/12 via-[#D8C17A]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={ref}
            className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/doctor-portrait-2.jpg"
                  alt="Dra. Letícia Soriani em retrato profissional"
                  className="rounded-xl shadow-lg object-cover object-top w-full h-64 md:h-80"
                />
                <img
                  src="/doctor-portrait-3.jpg"
                  alt="Dra. Letícia Soriani, médica oftalmologista"
                  className="rounded-xl shadow-lg object-cover object-[center_18%] w-full h-56 md:h-72"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/doctor-portrait.jpg"
                  alt="Dra. Letícia Soriani, oftalmologista em Maringá"
                  className="rounded-xl shadow-lg object-cover object-top w-full h-64 md:h-80"
                />
                <img
                  src="/doctor-portrait-4.jpg"
                  alt="Dra. Letícia Soriani em consultório oftalmológico"
                  className="rounded-xl shadow-lg object-cover object-[center_18%] w-full h-56 md:h-72"
                />
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            className={`order-1 lg:order-2 transition-all duration-700 delay-150 ${isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <p className="text-sm font-medium text-[#A98E3F] tracking-widest uppercase mb-4">
              Quem Sou Eu
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#7A7566] mb-2">
              Dra. <span className="text-[#A98E3F]">Letícia Soriani</span>
            </h2>
            <p className="text-lg text-[#7A7566] mb-6 italic">Oftalmologista</p>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-justify">
                A Dra. Letícia Soriani é médica oftalmologista, formada com o propósito de cuidar da visão de forma completa, individualizada e centrada no paciente. Ao longo de sua trajetória, construiu uma formação sólida e mantém atualização constante para oferecer diagnósticos precisos e tratamentos seguros. Sua atuação abrange áreas como catarata, olho seco, controle de miopia e cirurgia refrativa, sempre aliando conhecimento técnico, tecnologia e atenção aos detalhes.
              </p>
              <p className="text-justify">
                Seu atendimento vai além de protocolos e procedimentos: é baseado na escuta ativa, no acolhimento e na compreensão profunda das necessidades de cada paciente. A Dra. Letícia acredita em um cuidado integral, que considera não apenas a saúde ocular, mas também a história, os hábitos e a qualidade de vida de quem atende, construindo relações de confiança e segurança em cada consulta.
              </p>

              <p className="text-justify italic">
                Para ela, a oftalmologia é mais do que uma especialidade é uma vocação. É por meio desse olhar atento e humano que realiza seu propósito de promover saúde, bem-estar e a experiência de enxergar o mundo com mais clareza, conforto e qualidade de vida.
              </p>
            </div>

            <blockquote className="border-l-4 border-[#D8C17A] pl-6 py-2 my-8">
              <p className="text-lg text-[#7A7566] mb-0">
                CRM-PR 33568/RQE 24948
              </p>
            </blockquote>



            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-[#D8C17A]/60 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-9 h-9 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#A98E3F]" size={20} />
                  </div>
                  <span className="text-sm text-foreground leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[#7A7566] text-white font-medium rounded-full hover:bg-[#7A7566] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Agende um Horário Agora
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
