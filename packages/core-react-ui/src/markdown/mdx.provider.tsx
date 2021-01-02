import React from 'react';
import { Title } from '../components/text/title';
import { Heading } from '../components/text/heading';
import { HEADING, PARAGRAPH_SIZE, TEXT_STYLE } from '../../../core-design-system/src';
import { Paragraph } from '../components/text/paragraph';

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
  h2: (props: MDXProps) => <Heading variant={HEADING.h2} {...props} />,
  h3: (props: MDXProps) => <Heading variant={HEADING.h3} {...props} />,
  h4: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,
  p: (props: MDXProps) => <Paragraph {...props} />,
  b: (props: MDXProps) => <Paragraph as={'b'} variantStyle={TEXT_STYLE.bold} {...props} />, // <b>{...}</b>
  // h2: Heading.H2,
  // // …
  // p: Text,
  // code: Pre,
  // inlineCode: Code,
};

/**
 * Components configuration object for <MDXProvider/>.
 * Those components may have margins and must be use in mdx documents only.
 *
 * @example
 *    ```tsx
 *    <MDXProvider components={components}>
 *      <MDXRenderer>{props.text.childMdx.body}</MDXRenderer>
 *    </MDXProvider>
 *    ```
 */
export const blogMdxComponents: Record<string, React.ReactNode> = {
  h1: (props: MDXProps) => (
    <div style={{ marginBottom: '22px' }}>
      <Title {...props} />
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
