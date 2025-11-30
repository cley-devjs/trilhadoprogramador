import { codeToHtml } from 'shiki';

interface CodeBlockProps {
    children: string;
    className?: string;
    language?: string;
}

export async function CodeBlock({ children, className, language }: CodeBlockProps) {
    const lang = language || className?.replace('language-', '') || 'text';

    const html = await codeToHtml(children, {
        lang,
        theme: 'dracula', // or 'github-dark'
    });

    return (
        <div
            className="overflow-x-auto rounded-lg border bg-background p-4 my-4"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
