"use client"

import { useState } from "react"
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

// Placeholder images for Instagram feed
const instagramPosts = [
  { 
    id: 1, 
    likes: "245",
    comments: "12",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
  },
  { 
    id: 2, 
    likes: "189",
    comments: "8",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80"
  },
  { 
    id: 3, 
    likes: "312",
    comments: "24",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80"
  },
  { 
    id: 4, 
    likes: "156",
    comments: "6",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80"
  },
  { 
    id: 5, 
    likes: "278",
    comments: "15",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&q=80"
  },
  { 
    id: 6, 
    likes: "198",
    comments: "9",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&q=80"
  },
]

export function InstagramSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-[#7A7566] font-medium tracking-widest text-sm mb-4 px-4 py-1 bg-[#7A7566]/10 rounded-full">
            <Instagram size={16} />
            @draleticiasoriani
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Siga minhas redes sociais e{" "}
            <span className="text-[#7A7566]">acompanhe meu trabalho de perto!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Conteúdos sobre saúde ocular, dicas e novidades do mundo da oftalmologia.
          </p>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {instagramPosts.map((post, index) => (
              <a
                key={post.id}
                href="https://instagram.com/draleticiasoriani"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                className={`aspect-square bg-secondary rounded-xl overflow-hidden group relative transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={post.image} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-foreground/70 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ${hoveredPost === post.id ? "opacity-100" : "opacity-0"}`}>
                  <div className="flex items-center gap-4 text-white mb-2">
                    <span className="flex items-center gap-1 text-sm">
                      <Heart size={18} fill="white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <MessageCircle size={18} />
                      {post.comments}
                    </span>
                  </div>
                  <ExternalLink size={20} className="text-white/70" />
                </div>
              </a>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <a
              href="https://instagram.com/draleticiasoriani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2" size={20} />
              Seguir no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
