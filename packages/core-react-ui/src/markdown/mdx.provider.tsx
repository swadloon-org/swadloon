import React from 'react';
import { HEADING, TEXT_STYLE } from '../../../core-design-system/src';
import { Blockquote } from '../components/text/blockquote';
import { Details } from '../components/text/details';
import { Heading } from '../components/text/heading';
import { Paragraph, ParagraphInlineBold } from '../components/text/paragraph';
import { Summary } from '../components/text/summary';

/**
 * Components configuration object for <MDXProvider/>.
 * Those components don't have any margins to avoid any layout side-effects.
 *
 * @see https://mdxjs.com/table-of-components
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
  h5: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,
  h6: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,
  p: (props: MDXProps) => <Paragraph {...props} />,
  b: (props: MDXProps) => <ParagraphInlineBold as={'b'} variantStyle={TEXT_STYLE.bold} {...props} />,
  strong: (props: MDXProps) => <ParagraphInlineBold as={'b'} variantStyle={TEXT_STYLE.bold} {...props} />,
  blockquote: (props: MDXProps) => <Blockquote {...props} />,
  abbr: (props: MDXProps) => <abbr {...props} />,
  img: (props: MDXProps) => <img {...props} />,
  // ul	List	-
  // ol	Ordered list	1.
  // li	List item

  // table	Table
  // thead	Table head
  // tbody	Table body
  // tr	Table row
  // td/th	Table cell

  // code: (props: MDXProps) => <Code {...props} />,
  // inlineCode	InlineCode	`inlineCode`
  // pre	Code	```code```

  // em	Emphasis	_emphasis_
  // strong	Strong	**strong**
  // del	Delete	~~strikethrough~~

  // hr	Thematic break	--- or ***

  // a	Link	<https://mdxjs.com> or [MDX](https://mdxjs.com)

  // img	Image	![alt](https://mdx-logo.now.sh)
  // additional non-markdown components, must be defined in <html></html> format
  details: (props: MDXProps) => <Details {...props} />,
  summary: (props: MDXProps) => <Summary {...props} />,
};

export type MDXProps = {
  children?: React.ReactNode;
};
