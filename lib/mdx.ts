import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx-components';

const contentDir = path.join(process.cwd(), 'content');

export type Lesson = {
    slug: string;
    title: string;
    description: string;
    order: number;
    module: string;
};

export async function getLesson(moduleSlug: string, lessonSlug: string) {
    const filePath = path.join(contentDir, moduleSlug, lessonSlug, 'page.mdx');

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const source = fs.readFileSync(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<Lesson>({
        source,
        options: { parseFrontmatter: true },
        components: MDXComponents,
    });

    return {
        content,
        frontmatter,
        slug: lessonSlug,
        module: moduleSlug,
    };
}

export async function getModules() {
    const modules = fs.readdirSync(contentDir);
    // Implementation to list modules and lessons would go here
    // For now, returning a simple structure
    return modules.map(module => ({
        slug: module,
        title: module.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    }));
}
