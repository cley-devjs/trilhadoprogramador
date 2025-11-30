import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Globe, Code, Layers } from "lucide-react"

export default function TracksPage() {
    const tracks = [
        {
            title: "Como funciona a internet",
            description: "Entenda os fundamentos da web: HTTP, DNS, Servidores e como tudo se conecta.",
            icon: Globe,
            href: "/trilhas/como-funciona-a-internet/introducao", // Placeholder link
            status: "Disponível"
        },
        {
            title: "HTML e CSS: O básico para sair do zero",
            description: "Aprenda a estruturar e estilizar páginas web. O ponto de partida para qualquer dev frontend.",
            icon: Code,
            href: "/trilhas/html-css-basico/introducao", // Placeholder link
            status: "Disponível"
        },
        {
            title: "HTML, CSS e JS: A produção artesanal de páginas web",
            description: "Domine a tríade da web. Crie interatividade e experiências ricas sem frameworks.",
            icon: Layers,
            href: "/trilhas/html-css-js-artesanal/introducao", // Placeholder link
            status: "Em Breve"
        }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container py-12">
                <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                    <div className="flex-1 space-y-4">
                        <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                            Trilhas de Conhecimento
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Escolha um caminho e comece sua jornada.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
                    {tracks.map((track) => (
                        <Card key={track.title} className="flex flex-col">
                            <CardHeader>
                                <track.icon className="h-10 w-10 mb-2 text-primary" />
                                <CardTitle>{track.title}</CardTitle>
                                <CardDescription className="flex-1">
                                    {track.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <Link href={track.href}>
                                    <Button className="w-full" variant={track.status === "Em Breve" ? "secondary" : "default"} disabled={track.status === "Em Breve"}>
                                        {track.status === "Em Breve" ? "Em Breve" : "Começar Trilha"}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}
