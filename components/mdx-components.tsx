import { CodeBlock } from '@/components/ui/code-block';
import { Callout } from '@/components/ui/callout';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';
import React from 'react';

export const MDXComponents: MDXRemoteProps['components'] = {
    h1: (props) => <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold tracking-tight mt-6 mb-3" {...props} />,
    p: (props) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
    ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    code: (props) => <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />,
    pre: async ({ children, ...props }) => {
        if (React.isValidElement(children)) {
            const { children: codeContent, className } = children.props as { children: React.ReactNode; className?: string };
            if (typeof codeContent === 'string') {
                return <CodeBlock className={className}>{codeContent}</CodeBlock>;
            }
        }
        return <pre {...props}>{children}</pre>;
    },
    Callout,
};
