"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#clinica", label: "Clínica" },
    { href: "#instagram", label: "Instagram" },
    { href: "#contato", label: "Contato" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#7A7566]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-[#7A7566] py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/logo-leticia.avif"
            alt="Dra. Letícia Soriani"
            className="h-11 md:h-17 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/90 hover:text-[#D8C17A] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8C17A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-[#EEE6DE] text-[#7A7566] text-sm font-medium rounded-full hover:bg-white transition-all duration-300 hover:shadow-lg"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4 py-4 border-t border-white/15 bg-[#7A7566]">
          {navLinks.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium text-white/90 hover:text-[#D8C17A] transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-3 bg-[#EEE6DE] text-[#7A7566] text-sm font-medium rounded-full text-center hover:bg-white transition-all duration-300"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  )
}
