import { HEADING, LinkIcon, LinkVariant, PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes } from 'react';
import { Code } from '../code/code';
import { ListItem } from '../list-item/list-item';
import { ListItems } from '../list-item/list-items';
import { Table } from '../table/table';
import { TableBody } from '../table/table-body';
import { TableCell } from '../table/table-cell-data';
import { TableCellHeader } from '../table/table-cell-header';
import { TableHeader } from '../table/table-header';
import { TableRow } from '../table/table-row';
import { Blockquote } from '../text/blockquote';
import { Details } from '../text/details';
import { Heading } from '../text/heading';
import { Hr } from '../text/hr';
import { Link } from '../text/link';
import { Paragraph } from '../text/paragraph';
import { Summary } from '../text/summary';

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
export const mdxComponents: Partial<
  Record<keyof React.ReactHTML, React.ReactNode> & {
    pragmaFrag: React.ReactNode;
    inlineCode: React.ReactNode;
  }
> = {
  /**
   * Content sectioning
   */
  h1: (props: MDXProps) => <Heading {...props} />,
  h2: (props: MDXProps) => <Heading variant={HEADING.h2} {...props} />,
  h3: (props: MDXProps) => <Heading variant={HEADING.h3} {...props} />,
  h4: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,
  h5: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,
  h6: (props: MDXProps) => <Heading variant={HEADING.h4} {...props} />,

  hr: (props: MDXProps) => <Hr {...props}></Hr>,
  details: (props: MDXProps) => <Details {...props} />,
  summary: (props: MDXProps) => <Summary {...props} />,

  /**
   * Text content
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content
   */
  p: (props: MDXProps) => <Paragraph {...props} />,
  a: (props: MDXProps & AnchorHTMLAttributes<any>) => (
    <Link
      variant={LinkVariant.underline}
      variantSize={PARAGRAPH_SIZE.medium}
      style={{ display: 'inline-block' }}
      variantIcon={props?.href && /https?:\/\//.test(props.href) ? LinkIcon.right : undefined}
      {...props}
    />
  ),
  ul: (props: MDXProps) => <ListItems {...props} />,
  ol: (props: MDXProps) => <ListItems {...props} />,
  li: (props: MDXProps) => <ListItem {...props} />,
  blockquote: (props: MDXProps) => <Blockquote {...props} />,
  abbr: (props: MDXProps) => <abbr {...props} />,

  /**
   * Inline text semantics
   */
  b: (props: MDXProps) => (
    <Paragraph
      as={'b'}
      style={{ display: 'inline-block' }}
      variantStyle={TEXT_STYLE.bold}
      variant={PARAGRAPH_SIZE.large}
      {...props}
    />
  ),
  small: (props: MDXProps) => (
    <Paragraph as={'small'} style={{ display: 'inline-block' }} variant={PARAGRAPH_SIZE.small} {...props} />
  ),
  strong: (props: MDXProps) => (
    <Paragraph as={'strong'} style={{ display: 'inline-block' }} variantStyle={TEXT_STYLE.bold} {...props} />
  ),
  em: (props: MDXProps) => (
    <Paragraph as={'em'} style={{ display: 'inline-block' }} variantStyle={TEXT_STYLE.italic} {...props} />
  ),
  del: (props: MDXProps) => <Paragraph as={'del'} style={{ display: 'inline-block' }} {...props} />,

  /**
   * Images & Media
   */
  figcaption: (props: MDXProps) => (
    <figcaption>
      <Paragraph>{props.children}</Paragraph>{' '}
    </figcaption>
  ),

  /**
   * Table
   */
  table: (props: MDXProps) => <Table {...props} />,
  thead: (props: MDXProps) => <TableHeader {...props} />,
  tbody: (props: MDXProps) => <TableBody {...props} />,
  tr: (props: MDXProps) => <TableRow {...props} />,
  td: (props: MDXProps) => <TableCell {...props} />,
  th: (props: MDXProps) => <TableCellHeader {...props} />,

  /**
   * Code
   */
  pre: (props: MDXProps) => <>{props.children}</>,
  // code: ({ children, ...props }: MDXProps) => {
  //   const isSSR = typeof window === 'undefined';

  //   const CodeBlock = React.lazy(() =>
  //     // instead of import { CodeBlock } from '../code/code-block';
  //     import('../code/code-block').then((comp) => ({ default: comp.CodeBlock }))
  //   );

  //   return !isSSR ? (
  //     <Suspense fallback={'loading...'}>
  //       <CodeBlock {...props}>{children as string}</CodeBlock>
  //     </Suspense>
  //   ) : null;
  // },

  inlineCode: (props: MDXProps) => <Code>{props.children}</Code>,

  /**
   * Others
   */
  pragmaFrag: (props: MDXProps) => <Paragraph {...props} />,
};

export type MDXProps = {
  children?: React.ReactNode | string | null;
};
