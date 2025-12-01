import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { ArrowRight, BookOpen, Code2, Users, Heart } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a missão e a equipe por trás da Trilha do Programador.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Sobre a <span className="text-primary">Trilha</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Democratizando o acesso ao conhecimento de programação com profundidade, qualidade e totalmente open source.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              Nossa Missão
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Acreditamos que a programação é uma ferramenta de transformação. Nosso objetivo é fornecer um caminho claro, estruturado e gratuito para quem deseja dominar a arte do desenvolvimento de software, indo além do &quot;copia e cola&quot;.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 md:max-w-[64rem]">
            <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 rounded-lg p-4 text-center">
              <div className="p-2 bg-primary/10 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Profundidade</h3>
              <p className="text-muted-foreground">Não ensinamos apenas a sintaxe, mas como as coisas funcionam por baixo dos panos.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 rounded-lg p-4 text-center">
              <div className="p-2 bg-primary/10 rounded-full">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Prática</h3>
              <p className="text-muted-foreground">Teoria é importante, mas a prática é essencial. Projetos reais para problemas reais.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 rounded-lg p-4 text-center">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Comunidade</h3>
              <p className="text-muted-foreground">Feito pela comunidade, para a comunidade. Todo o conteúdo é open source.</p>
            </div>
          </div>
        </section>

        {/* Team/Origin Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              Quem Somos
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A Trilha do Programador nasceu da vontade de compartilhar conhecimento. Mantida por desenvolvedores apaixonados por educação e tecnologia.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
               <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-2">
                    <span className="text-xl font-bold">CS</span>
                  </div>
                  <p className="font-medium">Cleyton Silva</p>
                  <Link href="https://www.linkedin.com/in/cleyton-silva-dev/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </Link>
               </div>

               <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-2">
                    <Heart className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="font-medium">Contribuidores</p>
                  <p className="text-sm text-muted-foreground">Você pode ser um deles!</p>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              Comece sua jornada hoje
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Não importa seu nível de experiência, temos uma trilha para você.
            </p>
            <Link href="/trilhas">
              <Button size="lg" className="gap-2 mt-4">
                Ver Trilhas <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
