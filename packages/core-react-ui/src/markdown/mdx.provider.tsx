import React from 'react';
import { Heading } from '../components/heading/heading';

/**
 * Components configuration object for <MDXProvider/>.
 * Those components don't have any margins to avoid any layout side-effects.
 *
 * @example
 *    ```tsx
 *    <MDXProvider components={components}>
 *      <MDXRenderer>{props.text.childMdx.body}</MDXRenderer>
 *    </MDXProvider>
 *    ```
 */
export const mdxComponents: Record<string, React.ReactNode> = {
  h1: (props: MDXProps) => <Heading {...props} />,
  // h2: Heading.H2,
  // // …
  // p: Text,
  // code: Pre,
  // inlineCode: Code,
};

export const blogMdxComponents: Record<string, React.ReactNode> = {
  h1: (props: MDXProps) => (
    <div style={{ marginBottom: '22px' }}>
      <Heading {...props} />
    </div>
  ),
  // h2: Heading.H2,
  // // …
  // p: Text,
  // code: Pre,
  // inlineCode: Code,
};

export type MDXProps = {
  children?: React.ReactNode;
};
