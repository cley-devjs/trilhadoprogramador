import { CodeBlock } from '@/components/ui/code-block';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';

export const MDXComponents: MDXRemoteProps['components'] = {
    h1: (props) => <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold tracking-tight mt-6 mb-3" {...props} />,
    p: (props) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
    ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    code: async (props) => {
        const { children, className } = props;
        if (typeof children === 'string') {
            return <CodeBlock className={className}>{children}</CodeBlock>;
        }
        return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />;
    },
    pre: (props) => <pre {...props} />,
};
