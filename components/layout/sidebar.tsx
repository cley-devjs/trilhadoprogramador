"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    items: {
        title: string
        items: {
            title: string
            href: string
            items?: never
        }[]
    }[]
}

export function Sidebar({ className, items }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Módulos
                    </h2>
                    <div className="space-y-1">
                        {items.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="mb-2 px-4 text-sm font-semibold text-muted-foreground">
                                    {item.title}
                                </h3>
                                {item.items?.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        href={subItem.href}
                                        className={cn(
                                            "block rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                            pathname === subItem.href
                                                ? "bg-accent text-accent-foreground"
                                                : "transparent"
                                        )}
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
