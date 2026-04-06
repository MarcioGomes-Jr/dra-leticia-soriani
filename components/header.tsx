"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    { href: "#clinica", label: "Clínica" },
    { href: "#sobre", label: "Sobre" },
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
          ? "bg-[#7A7566]/100 backdrop-blur-md shadow-lg py-3"
          : "bg-[#7A7566]/100 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-leticia-0Ph6fShKBg6R9DqUOPxjanj3Km0nby.avif"
            alt="Dra. Letícia Soriani"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors text-sm font-medium tracking-wide ${
                isScrolled 
                  ? "text-white/90 hover:text-white" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className={`font-medium px-6 transition-all duration-300 ${
              isScrolled 
                ? "bg-white hover:bg-white/80 text-[#7A7566]" 
                : "bg-white hover:bg-white/80 text-[#7A7566]"
            }`}
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-white" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-[#7A7566] hover:bg-[#a89e94] text-white font-medium w-full"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
