"use client"

import { Instagram, Phone, Mail, MapPin, ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7A7566] to-transparent" />

      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                Pronto(a) para cuidar da sua visão?
              </h3>
              <p className="text-background/60">
                Agende sua consulta e comece seu tratamento ainda esta semana.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#EEE7DD] hover:bg-white text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shrink-0"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2" size={20} />
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="/logo-leticia.avif"
              alt="Dra. Letícia Soriani"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/70 leading-relaxed max-w-md mb-4">
              Compromisso, experiência e cuidado individual para a sua saúde ocular.
              Atendimento humanizado e tecnologia de ponta em Maringá - PR.
            </p>
            <p className="text-[#EEE7DD] text-sm font-medium">
              CRM-PR 33568 / RQE 24948
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6 text-[#EEE7DD] text-lg">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#servicos", label: "Serviços" },
                { href: "#clinica", label: "Clínica" },
                { href: "#sobre", label: "Sobre" },
                { href: "https://instagram.com/draleticiasoriani", label: "Instagram" },
              ].map((link) => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  onClick={
                    link.href.startsWith("#")
                      ? (e) => handleNavClick(e, link.href)
                      : undefined
                  }
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-background/70 hover:text-[#EEE7DD] transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#EEE7DD] group-hover:w-4 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-6 text-[#EEE7DD] text-lg">Contato</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5544988348338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-[#EEE7DD] transition-colors group"
              >
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center group-hover:bg-[#EEE7DD]/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">(44) 98834-8338</span>
              </a>
              <a
                href="mailto:contato@draleticiasoriani.com.br"
                className="flex items-center gap-3 text-background/70 hover:text-[#EEE7DD] transition-colors group"
              >
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center group-hover:bg-[#EEE7DD]/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm break-all">contato@draleticiasoriani.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">
                  Av. Brasil, 4785 - Sala 303<br />
                  Zona 04 - Maringá, PR
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/draleticiasoriani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-background/50 text-sm flex flex-col sm:flex-row sm:items-center gap-1">
            <span>
              {currentYear} Dra. Letícia Soriani.
            </span>

            <span className="flex items-center gap-1">
              Feito com <Heart size={14} className="text-[#EEE7DD]" /> por Over Performance
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/50 hover:text-[#EEE7DD] transition-colors text-sm group"
          >
            Voltar ao topo
            <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center group-hover:bg-[#EEE7DD]/20 transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
