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
import { Section } from '../components/section/section';
import { Placeholder } from './utils/placeholder';
import { PlaceholderMarkdown } from './utils/placeholder-markdown';
import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown } from '../components/content/block-markdown';
import { SectionSwitcher } from '../components/section/section-switcher';

export const liveCodeScope = {
  BoxV2,
  BoxV3,
  Center,
  Code,
  Cluster,
  CodeBlock,
  Details,
  ListItem,
  ListItems,
  Grid,
  BlockMarkdown,
  Heading,
  Paragraph,
  Placeholder,
  PlaceholderMarkdown,
  SectionSwitcher: SectionSwitcher,
  Section,
  Stack,
  Summary,
  Switcher,
  Variant,
};
