import { Variant } from '@newrade/core-design-system';
import {
  BoxV2,
  BoxV3,
  Center,
  Cluster,
  Details,
  Grid,
  Heading,
  Label,
  Link,
  ListItem,
  ListItems,
  Paragraph,
  Stack,
  Summary,
  Switcher,
  Table,
  TableCell,
  TableCellHeader,
  TableHeader,
  TableRow,
  Tag,
  TagStatus,
} from '@newrade/core-react-ui';
import { Code, CodeBlock, CodeHighlight } from '@newrade/core-react-ui/lib/code';
import { mdxComponents, MDXProps } from '@newrade/core-react-ui/lib/markdown';
import React from 'react';
import { BlockMarkdown } from '../blocks/block-markdown';
import { DocHeader } from '../context/doc-header';
import { DocTags } from '../context/doc-tags';
import { Placeholder } from '../docs-components/placeholder';
import { PlaceholderMarkdown } from '../docs-components/placeholder-markdown';
import { SectionBase } from '../sections/section-base';
import { SectionDivider } from '../sections/section-divider';
import { SectionSwitcher } from '../sections/section-switcher';
import { SectionBaseLayout, SectionPadding } from '../sections/section.props';

/**
 * Additional components used to render md docs and design-system documentation
 */
export const docsMdxComponents = {
  ...mdxComponents,
  ul: (props: MDXProps) => <ul {...props} />,
  ol: (props: MDXProps) => <ol {...props} />,
  li: (props: MDXProps) => <li {...props} />,
  // p: (props: MDXProps) => <p {...props} />,
  a: (props: MDXProps) => <a {...props} />,
  em: (props: MDXProps) => <em {...props} />,
  strong: (props: MDXProps) => <strong {...props} />,
  thead: (props: MDXProps) => <thead {...props} />,
  tr: (props: MDXProps) => <tr {...props} />,
  th: (props: MDXProps) => <th {...props} />,
  td: (props: MDXProps) => <td {...props} />,
  table: (props: MDXProps) => <table {...props} />,
  Label: Label,
  Tag: Tag,
  BoxV2: BoxV2,
  BoxV3: BoxV3,
  Center: Center,
  Code: Code,
  Cluster: Cluster,
  Details: Details,
  ListItem: ListItem,
  ListItems: ListItems,
  Grid: Grid,
  BlockMarkdown: BlockMarkdown,
  Heading: Heading,
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
  CodeHighlight: CodeHighlight,
  CodeBlock: CodeBlock,
  Link: Link,
  Table: Table,
  TableCellHeader: TableCellHeader,
  TableRow: TableRow,
  TableHeader: TableHeader,
  TableCell: TableCell,
  DocTags: DocTags,
  DocHeader: DocHeader,
  TagStatus: TagStatus,
};
