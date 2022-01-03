import React, { Suspense } from 'react';

import { CodeBlockLazy, CodeHighlightLazy } from '@newrade/core-react-ui/code';
import { IconsLazy } from '@newrade/core-react-ui/doc-components';

import { mdxComponents, MDXProps } from './mdx-components';

/**
 * Additional components used to render md docs and design-system documentation
 */
export const docsMdxComponents = {
  ...mdxComponents,
  Icons: ({ children, ...props }: MDXProps) => {
    return (
      <Suspense fallback={''}>
        <IconsLazy {...props}>{children}</IconsLazy>
      </Suspense>
    );
  },
  CodeHighlight: ({ children, ...props }: MDXProps) => {
    return (
      <Suspense fallback={''}>
        <CodeHighlightLazy {...props}>{children}</CodeHighlightLazy>
      </Suspense>
    );
  },
  CodeBlock: ({ children, ...props }: MDXProps) => {
    return (
      <Suspense fallback={''}>
        <CodeBlockLazy {...props}>{children as string}</CodeBlockLazy>
      </Suspense>
    );
  },
};
