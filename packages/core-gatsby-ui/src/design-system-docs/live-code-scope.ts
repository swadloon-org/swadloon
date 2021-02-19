import {
  BoxV2,
  BoxV3,
  Center,
  Cluster,
  Code,
  CodeBlock,
  Details,
  Grid,
  Heading,
  ListItem,
  ListItems,
  Paragraph,
  Stack,
  Summary,
  Switcher,
} from '@newrade/core-react-ui';
import { Section } from '../components/content/section';
import { Placeholder } from './utils/placeholder';
import { PlaceholderMarkdown } from './utils/placeholder-markdown';
import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown } from '../components/content/block-markdown';
import { SectionSwitcher } from '../components/content/section-switcher';
import { SectionDivider } from '../components/content/section-divider';
import { SectionLayout, SectionPadding } from '../components/content/section.props';

export const liveCodeScope = {
  BoxV2: BoxV2,
  BoxV3: BoxV3,
  Center: Center,
  Code: Code,
  Cluster: Cluster,
  CodeBlock: CodeBlock,
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
  Section: Section,
  Stack: Stack,
  Summary: Summary,
  Switcher: Switcher,
  SectionDivider: SectionDivider,
  SectionLayout: SectionLayout,
  SectionPadding: SectionPadding,
  Variant: Variant,
};
