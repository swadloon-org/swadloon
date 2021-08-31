import loadable from '@loadable/component';
import {
  HEADING,
  LinkIcon,
  LinkVariant,
  PARAGRAPH_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import {
  Badge,
  Blockquote,
  BoxV2,
  BoxV3,
  Button,
  Center,
  Cluster,
  Details,
  Grid,
  Heading,
  Hr,
  IconComp,
  Label,
  Link,
  ListItem,
  ListItems,
  ListItemV2,
  Paragraph,
  Stack,
  Summary,
  Switcher,
  Table,
  TableBody,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  Tag,
  Title,
} from '@newrade/core-react-ui';
import { Code } from '@newrade/core-react-ui/code';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React, { AnchorHTMLAttributes } from 'react';
import { BlockMarkdown } from '../blocks/block-markdown';
import { DocHeader } from '../context/doc-header';
import { IconBox } from '../docs-components/icon-box';
import { Placeholder } from '../docs-components/placeholder';
import { PlaceholderMarkdown } from '../docs-components/placeholder-markdown';
import { SectionBase } from '../sections/section-base';
import { SectionDivider } from '../sections/section-divider';
import { SectionSwitcher } from '../sections/section-switcher';

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
  } & {
    [key: string]: React.ReactNode;
  }
> = {
  /**
   *
   * Content sectioning
   *
   */

  Div: (props: MDXProps) => <div {...props} />,

  /**
   * Heading
   */
  Title: Title,
  Heading: Heading,
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
  p: (props: MDXProps) => <Paragraph {...props} readableWidth={true} />,
  a: (props: MDXProps & AnchorHTMLAttributes<any>) => {
    const linkIsExternal = props?.href && /https?:\/\//.test(props.href);

    // if the child is a img tag, don't render the external icon
    if (
      props?.children &&
      typeof props.children !== 'string' &&
      // @ts-ignore
      props.children.props?.mdxType === 'img'
    ) {
      return (
        <Link
          variant={LinkVariant.underline}
          variantSize={PARAGRAPH_SIZE.medium}
          style={{ display: 'inline-block' }}
          target={linkIsExternal ? '_blank' : undefined}
          {...props}
        />
      );
    }

    return (
      <Link
        variant={LinkVariant.underline}
        variantSize={PARAGRAPH_SIZE.medium}
        style={{ display: 'inline-block' }}
        target={linkIsExternal ? '_blank' : undefined}
        variantIcon={linkIsExternal ? LinkIcon.right : undefined}
        {...props}
      />
    );
  },
  ul: (props: MDXProps) => <ListItems {...props} />,
  ol: (props: MDXProps) => <ListItems as={'ol'} {...props} />,
  li: (props: MDXProps) => <ListItemV2 {...props} />,
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
    <Paragraph
      as={'small'}
      style={{ display: 'inline-block' }}
      variant={PARAGRAPH_SIZE.small}
      {...props}
    />
  ),
  strong: (props: MDXProps) => (
    <Paragraph
      as={'strong'}
      style={{ display: 'inline-block' }}
      variantStyle={TEXT_STYLE.bold}
      {...props}
    />
  ),
  em: (props: MDXProps) => (
    <Paragraph
      as={'em'}
      style={{ display: 'inline-block' }}
      variantStyle={TEXT_STYLE.italic}
      {...props}
    />
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
  CodeBlock: ({ children, ...props }: MDXProps) => {
    const CodeBlock = loadable<any>(
      () => import(/* webpackExports: ["CodeBlock"] */ '@newrade/core-react-ui/code'),
      {
        resolveComponent: (components: typeof import('@newrade/core-react-ui/code')) =>
          components.CodeBlock,
      }
    );
    return <CodeBlock {...props}>{children as string}</CodeBlock>;
  },
  inlineCode: (props: MDXProps) => <Code>{props.children}</Code>,
  Code: Code,

  /**
   * Others
   */
  pragmaFrag: (props: MDXProps) => <Paragraph {...props} />,

  /**
   * Layout
   */
  Label: Label,
  Tag: Tag,
  Button: Button,
  BoxV2: BoxV2,
  BoxV3: BoxV3,

  /**
   * Layout
   */
  Center: Center,
  Cluster: Cluster,

  Details: Details,
  ListItem: ListItem,
  ListItems: ListItems,
  Grid: Grid,
  BlockMarkdown: BlockMarkdown,

  Paragraph: Paragraph,
  Placeholder: Placeholder,
  PlaceholderMarkdown: PlaceholderMarkdown,
  SectionSwitcher: SectionSwitcher,
  SectionBase: SectionBase,
  Stack: Stack,
  Summary: Summary,
  Switcher: Switcher,
  SectionDivider: SectionDivider,
  SectionLayout: SectionBaseLayout,
  SectionPadding: SectionPadding,
  Variant: Variant,
  Link: Link,
  Table: Table,
  TableCellHeader: TableCellHeader,
  TableRow: TableRow,
  TableHeader: TableHeader,
  TableCell: TableCell,
  DocHeader: DocHeader,
  Badge: Badge,

  /**
   * Icon
   */
  Icon: IconComp,
  IconBox: IconBox,
};

export type MDXProps = {
  children?: React.ReactNode | string | null;
};
