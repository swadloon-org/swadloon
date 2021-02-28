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
import { BaseSection } from '../sections/section-base';
import { Placeholder } from './utils/placeholder';
import { PlaceholderMarkdown } from './utils/placeholder-markdown';
import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown } from '../blocks/block-markdown';
import { SectionSwitcher } from '../sections/section-switcher';
import { SectionDivider } from '../sections/section-divider';
import { SectionBaseLayout, SectionPadding } from '../sections/section.props';

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
  Section: BaseSection,
  Stack: Stack,
  Summary: Summary,
  Switcher: Switcher,
  SectionDivider: SectionDivider,
  SectionLayout: SectionBaseLayout,
  SectionPadding: SectionPadding,
  Variant: Variant,
};
