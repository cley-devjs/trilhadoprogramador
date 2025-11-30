import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Terminal, Cpu } from "lucide-react"
import { Header } from "@/components/layout/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Seu <span className="text-primary">Hello World</span> para o mundo real
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Uma plataforma de ensino open source, focada em performance e experiência de leitura. Aprenda a programar do zero ao avançado.
            </p>
            <div className="space-x-4">
              <Link href="/trilhas/trilha-inicial/ola-mundo">
                <Button size="lg" className="gap-2">
                  Começar Agora <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/seu-usuario/trilha-do-programador" target="_blank">
                <Button variant="outline" size="lg">
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              Trilhas Disponíveis
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Escolha por onde começar. Nossas trilhas são desenhadas para te levar do básico ao profissional.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <Terminal className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Lógica de Programação</CardTitle>
                <CardDescription>
                  Onde tudo começa. Aprenda a pensar como um computador.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/trilhas/trilha-inicial/ola-mundo">
                  <Button variant="ghost" className="w-full mt-4">Acessar Trilha</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Frontend Moderno</CardTitle>
                <CardDescription>
                  React, Next.js, Tailwind e tudo que você precisa para criar interfaces incríveis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full mt-4" disabled>Em Breve</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cpu className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Backend & DevOps</CardTitle>
                <CardDescription>
                  APIs, Banco de Dados, Docker e Deploy. O motor da web.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full mt-4" disabled>Em Breve</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
