import { Variant } from '@newrade/core-design-system';
import { BlockAPI } from '../api/block.api';
import { SectionLayout } from '../sections/section.props';

export type SectionAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  layout?: SectionLayout | null | string;
  variant?: Variant;
  blocks?: (BlockAPI | null | undefined)[] | null;
};
