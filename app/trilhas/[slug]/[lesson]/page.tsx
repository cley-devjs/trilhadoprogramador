import { getLesson } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

import { Metadata } from "next"

interface PageProps {
    params: {
        slug: string
        lesson: string
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const lessonData = await getLesson(params.slug, params.lesson)

    if (!lessonData) {
        return {
            title: "Lição não encontrada",
        }
    }

    return {
        title: lessonData.frontmatter.title,
        description: lessonData.frontmatter.description,
    }
}

export default async function LessonPage({ params }: PageProps) {
    const lessonData = await getLesson(params.slug, params.lesson)

    if (!lessonData) {
        notFound()
    }

    // Mock navigation data - in a real app, this would come from a config or file system
    const sidebarItems = [
        {
            title: "Como funciona a internet",
            items: [
                { title: "Introdução", href: "/trilhas/como-funciona-a-internet/introducao" },
                { title: "Cliente e Servidor", href: "/trilhas/como-funciona-a-internet/cliente-servidor" },
                { title: "HTTP e HTTPS", href: "/trilhas/como-funciona-a-internet/http-e-https" },
                { title: "DNS", href: "/trilhas/como-funciona-a-internet/dns" },
            ],
        },
        {
            title: "HTML e CSS: O básico",
            items: [
                { title: "O que é HTML?", href: "/trilhas/html-css-basico/o-que-e-html" },
                { title: "Sintaxe HTML", href: "/trilhas/html-css-basico/sintaxe-html" },
            ],
        },
        {
            title: "HTML, CSS e JS: Artesanal",
            items: [
                { title: "Introdução ao JavaScript", href: "/trilhas/html-css-js/conhecendo-a-linguagem-js" },

            ],
        },
    ]

    // Flatten items to find prev/next
    const allLessons = sidebarItems.flatMap((section) => section.items)
    const currentLessonIndex = allLessons.findIndex(
        (item) => item.href === `/trilhas/${params.slug}/${params.lesson}`
    )

    const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null
    const nextLesson =
        currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                        <Sidebar items={sidebarItems} />
                    </ScrollArea>
                </aside>
                <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                    <div className="mx-auto w-full min-w-0">
                        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                Trilhas
                            </div>
                            <ChevronRight className="h-4 w-4" />
                            <div className="font-medium text-foreground">{lessonData.frontmatter.title}</div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{lessonData.frontmatter.title}</h1>
                            <p className="text-lg text-muted-foreground">
                                {lessonData.frontmatter.description}
                            </p>
                        </div>
                        <div className="pb-12 pt-8">
                            <div className="prose prose-zinc dark:prose-invert max-w-none">
                                {lessonData.content}
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            {prevLesson ? (
                                <Link href={prevLesson.href}>
                                    <Button variant="ghost">
                                        <ChevronLeft className="mr-2 h-4 w-4" />
                                        Anterior
                                    </Button>
                                </Link>
                            ) : (
                                <Button variant="ghost" disabled>
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Anterior
                                </Button>
                            )}

                            {nextLesson ? (
                                <Link href={nextLesson.href}>
                                    <Button variant="ghost">
                                        Próximo
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            ) : (
                                <Button variant="ghost" disabled>
                                    Próximo
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
