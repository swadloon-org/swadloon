import { Variant } from '@newrade/core-design-system';
import { BlockAPI } from '../api/block.api';
import { SectionLayout } from '../sections/section.props';

export type SectionAPI = {
  name?: string | null;
  layout?: SectionLayout | null | string;
  blocks?: (BlockAPI | null | undefined)[] | null;
  variant?: Variant;
};
