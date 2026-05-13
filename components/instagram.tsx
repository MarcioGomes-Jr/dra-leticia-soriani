"use client"

import { Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const instagramUrl = "https://instagram.com/draleticiasoriani"

const instagramPosts = [
  "/instagram/post-1.jpg",
  "/instagram/post-2.jpg",
  "/instagram/post-3.jpg",
  "/instagram/post-4.jpg",
  "/instagram/post-5.jpg",
  "/instagram/post-6.jpg",
]

export function InstagramSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="instagram" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#D8C17A]/8 to-background opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7A7566]/10 rounded-full mb-6">
            <Instagram className="w-4 h-4 text-[#A98E3F]" />
            <span className="text-sm text-[#7A7566]">
              @draleticiasoriani
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#7A7566] mb-4 text-balance">
            Siga minhas redes sociais e acompanhe meu <span className="text-[#A98E3F]">trabalho</span> de perto
          </h2>
          
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {instagramPosts.map((image, index) => (
            <a
              key={image}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-sm"
            >
              <Image
                src={image}
                alt={`Post do Instagram ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 group-hover:backdrop-blur-sm transition-all duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
                  Ver no Instagram
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium rounded-full hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
