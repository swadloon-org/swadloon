import { Variant } from '@newrade/core-design-system';
import { BlockAPI } from '../api/block.api';
import { SectionBaseLayout, SectionLayout, SectionPadding } from '../sections/section.props';

export type SectionAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  /**
   * Controls the visual importance of the section.
   */
  variant?: Variant;
  layout?: SectionLayout | null | string;
  baseLayout?: SectionBaseLayout | null | string;
  /**
   * Presets for vertical padding.
   */
  padding?: SectionPadding | null | string;
  blocks?: (BlockAPI | null | undefined)[] | null;
};
