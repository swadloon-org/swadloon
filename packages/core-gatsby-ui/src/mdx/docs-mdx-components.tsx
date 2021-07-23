import loadable from '@loadable/component';
import { Variant } from '@newrade/core-design-system';
import {
  Badge,
  BoxV2,
  BoxV3,
  Button,
  Center,
  Cluster,
  Details,
  Grid,
  Heading,
  IconComp,
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
  Title,
} from '@newrade/core-react-ui/src';
import { Code } from '@newrade/core-react-ui/src/code';
import { mdxComponents, MDXProps } from '@newrade/core-react-ui/src/markdown';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { BlockMarkdown } from '../blocks/block-markdown';
import { DocHeader } from '../context/doc-header';
import { IconBox } from '../docs-components/icon-box';
import { Icons } from '../docs-components/icons';
import { Placeholder } from '../docs-components/placeholder';
import { PlaceholderMarkdown } from '../docs-components/placeholder-markdown';
import { SectionBase } from '../sections/section-base';
import { SectionDivider } from '../sections/section-divider';
import { SectionSwitcher } from '../sections/section-switcher';

/**
 * Additional components used to render md docs and design-system documentation
 */
export const docsMdxComponents = {
  ...mdxComponents,
  Label: Label,
  Tag: Tag,
  Button: Button,
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
  Title: Title,
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
  // CodeHighlight: CodeHighlight,
  CodeHighlight: ({ children, ...props }: MDXProps) => {
    const CodeHighlight = loadable<any>(
      () => import('@newrade/core-react-ui/src/code/code-highlight'),
      {
        resolveComponent: (
          components: typeof import('@newrade/core-react-ui/src/code/code-highlight')
        ) => components.CodeHighlight,
      }
    );
    return <CodeHighlight {...props}>{children as string}</CodeHighlight>;
  },
  // CodeBlock: CodeBlock,
  CodeBlock: ({ children, ...props }: MDXProps) => {
    const CodeBlock = loadable<any>(() => import('@newrade/core-react-ui/src/code/code-block'), {
      resolveComponent: (components: typeof import('@newrade/core-react-ui/src/code/code-block')) =>
        components.CodeBlock,
    });
    return <CodeBlock {...props}>{children as string}</CodeBlock>;
  },
  Link: Link,
  Table: Table,
  TableCellHeader: TableCellHeader,
  TableRow: TableRow,
  TableHeader: TableHeader,
  TableCell: TableCell,
  DocHeader: DocHeader,
  Badge: Badge,
  Icon: IconComp,
  IconBox: IconBox,
  Icons: Icons,
};
