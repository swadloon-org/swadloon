import { Variant } from '@newrade/core-design-system';
import {
  BoxV2,
  BoxV3,
  Center,
  Cluster,
  Code,
  CodeBlock,
  CodeHighlight,
  Details,
  Grid,
  Heading,
  Label,
  Link,
  ListItem,
  ListItems,
  mdxComponents,
  MDXProps,
  Paragraph,
  Stack,
  Summary,
  Switcher,
  Table,
  TableCellHeader,
  Tag,
} from '@newrade/core-react-ui';
import React from 'react';
import { BlockMarkdown } from '../blocks/block-markdown';
import { Placeholder } from '../docs-components/placeholder';
import { PlaceholderMarkdown } from '../docs-components/placeholder-markdown';
import { SectionBase } from '../sections/section-base';
import { SectionDivider } from '../sections/section-divider';
import { SectionSwitcher } from '../sections/section-switcher';
import { SectionBaseLayout, SectionPadding } from '../sections/section.props';

export const docsMdxComponents = {
  ...mdxComponents,
  ul: (props: MDXProps) => <ul {...props} />,
  ol: (props: MDXProps) => <ol {...props} />,
  li: (props: MDXProps) => <li {...props} />,
  p: (props: MDXProps) => <p {...props} />,
  thead: (props: MDXProps) => <thead {...props} />,
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
};
