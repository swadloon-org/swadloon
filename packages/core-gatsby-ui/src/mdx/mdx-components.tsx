import React, { AnchorHTMLAttributes, Suspense } from 'react';

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
  Kdb,
  Label,
  Link,
  ListItems,
  ListItemV2,
  lorenipsum,
  lorenipsumShort,
  Paragraph,
  Stack,
  Summary,
  Switcher,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  Tag,
  Title,
} from '@newrade/core-react-ui';
import { Code, CodeBlockLazy } from '@newrade/core-react-ui/code';
import { IconBox, Placeholder, PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { BlockMarkdown } from '../blocks/block-markdown';
import { DocHeader } from '../context/doc-header';
import { DocPropsTable } from '../context/doc-props-table';
import { SectionBase } from '../sections/section-base';
import { SectionDivider } from '../sections/section-divider';
import { SectionSwitcher } from '../sections/section-switcher';

/**
 * Components configuration object for `<MDXProvider/>`.
 * Those components don't have any margins to avoid any layout side-effects.
 *
 * @see https://mdxjs.com/table-of-components
 * @example
 * ```tsx
 * <MDXProvider components={components}>
 *   <MDXRenderer>{props.text.childMdx.body}</MDXRenderer>
 * </MDXProvider>
 * ```
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
   * Insert custom Footnotes components
   * @see https://mdxjs.com/guides/wrapper-customization/
   * @see https://markmichon.com/advanced-custom-mdx-components#fn-1
   */
  wrapper: (props: MDXProps) => {
    const updatedChildren = React.Children.map(props.children, (child) => {
      if (typeof child === 'string') {
        return child;
      }
      const element = child as React.ReactElement;
      if (!element?.props) {
        return child;
      }
      // removes unwanted props in DOM
      const { className, mdxType, originalType, ...elementProps } = element.props;

      // todo style .footnotes
      // todo style .footnote-ref
      // todo style .footnote-backref
      if (element.props.className === 'footnotes') {
        // since we only have one element that will ever match this
        // the key doesn't matter, but react will yell without a key.
        return <div key={1} className={className} {...elementProps}></div>;
      }

      return child;
    });
    return <>{updatedChildren}</>;
  },

  /**
   *
   * Headings
   *
   */

  Title: (props: MDXProps) => <Title {...props} />,
  Heading: (props: MDXProps) => <Heading {...props} />,
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
   *
   * Text content
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content
   *
   */

  p: (props: MDXProps) => <Paragraph {...props} readableWidth={true} />,
  a: (props: MDXProps & AnchorHTMLAttributes<any>) => {
    //
    // if the child is a img tag, don't render the external icon
    //
    if (
      props?.children &&
      typeof props.children !== 'string' &&
      // @ts-ignore
      props.children.props?.mdxType === 'img'
    ) {
      return (
        <Link
          linkStyle={LinkVariant.underline}
          size={PARAGRAPH_SIZE.medium}
          style={{ display: 'inline-block' }}
          icon={LinkIcon.none}
          {...props}
        />
      );
    }

    return (
      <Link
        linkStyle={LinkVariant.underline}
        size={PARAGRAPH_SIZE.medium}
        style={{ display: 'inline-block' }}
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
   *
   * Inline text semantics
   *
   */

  b: (props: MDXProps) => (
    <Paragraph
      as={'b'}
      style={{ display: 'inline-block' }}
      textStyle={TEXT_STYLE.bold}
      size={PARAGRAPH_SIZE.large}
      {...props}
    />
  ),
  small: (props: MDXProps) => (
    <Paragraph
      as={'small'}
      style={{ display: 'inline-block' }}
      size={PARAGRAPH_SIZE.small}
      {...props}
    />
  ),
  strong: (props: MDXProps) => (
    <Paragraph
      as={'strong'}
      style={{ display: 'inline-block' }}
      textStyle={TEXT_STYLE.bold}
      {...props}
    />
  ),
  em: (props: MDXProps) => (
    <Paragraph
      as={'em'}
      style={{ display: 'inline-block' }}
      textStyle={TEXT_STYLE.italic}
      {...props}
    />
  ),
  del: (props: MDXProps) => <Paragraph as={'del'} style={{ display: 'inline-block' }} {...props} />,
  ins: (props: MDXProps) => <Paragraph as={'ins'} style={{ display: 'inline-block' }} {...props} />,

  /**
   *
   * Images & Media
   *
   */

  figcaption: (props: MDXProps) => (
    <figcaption>
      <Paragraph>{props.children}</Paragraph>{' '}
    </figcaption>
  ),

  /**
   *
   * Table
   *
   */

  table: (props: MDXProps) => <Table {...props} />,
  thead: (props: MDXProps) => <TableHeader {...props} />,
  tbody: (props: MDXProps) => <TableBody {...props} />,
  tr: (props: MDXProps) => <TableRow {...props} />,
  td: ({
    children,
    ...props
  }: MDXProps & Omit<AnchorHTMLAttributes<HTMLTableCellElement>, 'type'>) => {
    //
    // if the child is a link tag with text inside, we make sure it does not overflow the cell
    //
    if (
      children &&
      // @ts-ignore
      children.props &&
      typeof children !== 'string' &&
      // @ts-ignore
      children.props.mdxType === 'a' &&
      // @ts-ignore
      typeof children.props.children === 'string'
    ) {
      // @ts-ignore
      const { parentName, originalType, mdxType, ...childrenProps } = children.props;
      return (
        <TableCell {...props}>
          <Link
            linkStyle={LinkVariant.underline}
            size={PARAGRAPH_SIZE.small}
            shortenLongLink={true}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            // @ts-ignore
            {...childrenProps}
          ></Link>
        </TableCell>
      );
    }

    return <TableCell {...props}>{children}</TableCell>;
  },
  th: (props: MDXProps) => <TableCellHeader {...props} />,
  caption: (props: MDXProps) => <TableCaption {...props} />,

  /**
   *
   * Code
   *
   */

  pre: (props: MDXProps) => <>{props.children}</>,
  inlineCode: (props: MDXProps) => <Code>{props.children}</Code>,
  kbd: (props: MDXProps) => <Kdb>{props.children}</Kdb>,
  code: ({ children, ...props }: MDXProps) => {
    return (
      <Suspense fallback={''}>
        <CodeBlockLazy {...props}>{children as string}</CodeBlockLazy>
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
  Code: (props: MDXProps) => <Code {...props} />,

  /**
   *
   * Others
   *
   */

  pragmaFrag: (props: MDXProps) => <Paragraph {...props} />,

  /**
   *
   * Placeholders
   *
   */

  LorenipsumShort: (props: MDXProps) => <>{lorenipsumShort}</>,
  Lorenipsum: (props: MDXProps) => <>{lorenipsum}</>,

  /**
   *
   * Layout
   *
   */

  Label: (props: MDXProps) => <Label {...props} />,
  Tag: (props: MDXProps) => <Tag {...props} />,
  Button: (props: MDXProps) => <Button {...props} />,
  BoxV2: (props: MDXProps) => <BoxV2 {...props} />,
  BoxV3: (props: MDXProps) => <BoxV3 {...props} />,

  /**
   *
   * Layout
   *
   */

  Center: (props: MDXProps) => <Center {...props} />,
  Cluster: (props: MDXProps) => <Cluster {...props} />,

  Details: (props: MDXProps) => <Details {...props} />,
  ListItem: (props: MDXProps) => <ListItemV2 {...props} />,
  ListItems: (props: MDXProps) => <ListItems {...props} />,
  Grid: (props: MDXProps) => <Grid {...props} />,
  BlockMarkdown: (props: MDXProps) => <BlockMarkdown {...props} />,

  Paragraph: (props: MDXProps) => <Paragraph {...props} />,
  Placeholder: (props: MDXProps) => <Placeholder {...props} />,
  PlaceholderMarkdown: (props: MDXProps) => <PlaceholderMarkdown {...props} />,
  // @ts-ignore
  SectionSwitcher: (props: MDXProps) => <SectionSwitcher {...props} />,
  SectionBase: (props: MDXProps) => <SectionBase {...props} />,
  Stack: (props: MDXProps) => <Stack {...props} />,
  Summary: (props: MDXProps) => <Summary {...props} />,
  Switcher: (props: MDXProps) => <Switcher {...props} />,
  SectionDivider: SectionDivider,
  SectionLayout: SectionBaseLayout,
  SectionPadding: SectionPadding,
  Variant: Variant,
  Link: (props: MDXProps) => <Link {...props} />,
  Table: (props: MDXProps) => <Table {...props} />,
  TableCellHeader: (props: MDXProps) => <TableCellHeader {...props} />,
  TableRow: (props: MDXProps) => <TableRow {...props} />,
  TableHeader: (props: MDXProps) => <TableHeader {...props} />,
  TableCell: (props: MDXProps) => <TableCell {...props} />,
  // @ts-ignore
  DocHeader: (props: MDXProps) => <DocHeader {...props} />,
  // @ts-ignore
  DocPropsTable: (props: MDXProps) => <DocPropsTable {...props} />,
  // @ts-ignore
  Badge: (props: MDXProps) => <Badge {...props} />,

  /**
   *
   * Icon
   *
   */

  // @ts-ignore
  Icon: (props: MDXProps) => <IconComp {...props} />,
  IconBox: (props: MDXProps) => <IconBox {...props} />,
};

export type MDXProps = {
  children?: React.ReactNode | React.ReactElement | string | null;
};
