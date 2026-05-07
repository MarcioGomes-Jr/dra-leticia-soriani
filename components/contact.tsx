"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Paulista, 1000 - Sala 501\nBela Vista, São Paulo - SP",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 3000-0000\n(11) 99000-0000",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@draanabeatriz.com.br",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
  },
]

export function Contact() {
  return (
    <section id="contato" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#7A7566]">
            Contato
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Agende sua consulta</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Entre em contato conosco para agendar sua consulta ou tirar dúvidas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Formulário de Contato</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em breve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                    <Input id="name" placeholder="Seu nome" />
                  </Field>
                </FieldGroup>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">Telefone</FieldLabel>
                    <Input id="phone" type="tel" placeholder="(11) 99000-0000" />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="message">Mensagem</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={4}
                  />
                </Field>

                <Button type="submit" className="w-full bg-[#7A7566] text-white hover:bg-[#a89e94]">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border-border/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7A7566]/10">
                      <info.icon className="h-5 w-5 text-[#7A7566]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976582774396!2d-46.65512722467441!3d-23.563273961665593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do consultório"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
