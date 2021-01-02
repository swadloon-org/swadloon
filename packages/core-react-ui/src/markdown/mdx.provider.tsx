import React from 'react';
import { Title } from '../components/text/title';
import { Heading } from '../components/text/heading';
import { HEADING, PARAGRAPH_SIZE, TEXT_STYLE } from '../../../core-design-system/src';
import { Paragraph } from '../components/text/paragraph';
import { Blockquote } from '../components/text/blockquote';

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
export const mdxComponents: Partial<Record<keyof React.ReactHTML, React.ReactNode>> = {
  h1: (props: MDXProps) => <Heading {...props} />,
  h2: (props: MDXProps) => <Heading variant={HEADING.h2} {...props} />,
  h3: (props: MDXProps) => <Heading variant={HEADING.h3} {...props} />,
  h4: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,
  p: (props: MDXProps) => <Paragraph {...props} />,
  b: (props: MDXProps) => <Paragraph as={'b'} variantStyle={TEXT_STYLE.bold} {...props} />,
  blockquote: (props: MDXProps) => <Blockquote {...props} />,
  abbr: (props: MDXProps) => <abbr {...props} />,
};

export type MDXProps = {
  children?: React.ReactNode;
};
