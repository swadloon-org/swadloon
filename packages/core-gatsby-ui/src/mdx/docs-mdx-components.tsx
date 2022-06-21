import React, { Suspense } from 'react';

import { HEADING } from '@newrade/core-design-system';
import { Heading } from '@newrade/core-react-ui';
import { CodeBlockLazy, CodeHighlightLazy } from '@newrade/core-react-ui/code';
import { IconsLazy } from '@newrade/core-react-ui/doc-components';

import { mdxComponents, MDXProps } from './mdx-components.js';

/**
 * Additional components used to render md docs and design-system documentation
 */
export const docsMdxComponents = {
  ...mdxComponents,
  /**
   * Headings with anchor enabled
   */
  h1: (props: MDXProps) => <Heading enableAnchorSign={true} {...props} />,
  h2: (props: MDXProps) => <Heading enableAnchorSign={true} variant={HEADING.h2} {...props} />,
  h3: (props: MDXProps) => <Heading enableAnchorSign={true} variant={HEADING.h3} {...props} />,
  h4: (props: MDXProps) => <Heading enableAnchorSign={true} variant={HEADING.h4} {...props} />,
  h5: (props: MDXProps) => <Heading enableAnchorSign={true} variant={HEADING.h4} {...props} />,
  h6: (props: MDXProps) => <Heading enableAnchorSign={true} variant={HEADING.h4} {...props} />,

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
