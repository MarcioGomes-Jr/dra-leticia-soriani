"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    
    // Initial check
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <div className={`fixed bottom-[calc(var(--spacing)*6)] sm:bottom-[calc(var(--spacing)*36)] right-6 z-50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-in slide-in-from-bottom-2 fade-in duration-500">
          <div className="relative bg-card text-foreground px-4 py-3 rounded-xl shadow-xl border border-border max-w-[200px]">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium">Precisa de ajuda?</p>
            <p className="text-xs text-muted-foreground mt-1">Fale conosco pelo WhatsApp!</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </div>
        </div>
      )}

      {/* Main button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={30} className="group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/30 animate-pulse" />
      </a>
    </div>
  )
}
