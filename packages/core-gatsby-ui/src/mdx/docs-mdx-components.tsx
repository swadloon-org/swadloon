import loadable from '@loadable/component';
import React from 'react';
import { mdxComponents, MDXProps } from './mdx-components';

/**
 * Additional components used to render md docs and design-system documentation
 */
export const docsMdxComponents = {
  ...mdxComponents,
  Icons: ({ children, ...props }: MDXProps) => {
    const Icons = loadable<any>(() => import('../docs-components/icons'), {
      resolveComponent: (components: typeof import('../docs-components/icons')) => components.Icons,
    });
    return <Icons {...props}>{children}</Icons>;
  },
  CodeHighlight: ({ children, ...props }: MDXProps) => {
    const CodeHighlight = loadable(
      () => import(/* webpackExports: ["CodeHighlight"] */ '@newrade/core-react-ui/code'),
      {
        resolveComponent: (components: typeof import('@newrade/core-react-ui/code')) =>
          components.CodeHighlight,
      }
    );
    return <CodeHighlight {...props}>{children as string}</CodeHighlight>;
  },
  CodeBlock: ({ children, ...props }: MDXProps) => {
    const CodeBlock = loadable(
      () => import(/* webpackExports: ["CodeBlock"] */ '@newrade/core-react-ui/code'),
      {
        resolveComponent: (components: typeof import('@newrade/core-react-ui/code')) =>
          components.CodeBlock,
      }
    );
    return <CodeBlock {...props}>{children as string}</CodeBlock>;
  },
};
