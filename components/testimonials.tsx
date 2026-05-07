import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    initials: "MS",
    role: "Paciente há 5 anos",
    content: "A Dra. Ana Beatriz mudou minha vida. Após a cirurgia de catarata, voltei a enxergar com clareza. Profissional excepcional e muito atenciosa.",
    rating: 5,
  },
  {
    name: "João Santos",
    initials: "JS",
    role: "Paciente há 3 anos",
    content: "Fiz a cirurgia refrativa e me livrei dos óculos. O atendimento foi impecável do início ao fim. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    initials: "AC",
    role: "Paciente há 2 anos",
    content: "Consultório moderno, equipe simpática e a doutora é muito competente. Me sinto segura e bem cuidada em cada consulta.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#7A7566]">
            Depoimentos
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">O que nossos pacientes dizem</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A satisfação dos nossos pacientes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {`"${testimonial.content}"`}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-[#7A7566]/10 text-[#7A7566]">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
