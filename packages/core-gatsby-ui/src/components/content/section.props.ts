import { CommonComponentProps } from '@newrade/core-react-ui';
import { Variant } from '@newrade/core-design-system';

export enum SectionLayout {
  /**
   * Will honor the content margins.
   */
  center = 'center',
  /**
   * Will take up all width available.
   */
  fullWidth = 'fullWidth',
}

export enum SectionPadding {
  large = 'large',
  medium = 'medium',
  small = 'small',
  none = 'none',
}

export type SectionProps = CommonComponentProps & {
  /**
   * Controls the visual importance of the section.
   */
  variant?: Variant;
  /**
   * Predefined layouts that controls how the content is layed out horizontally.
   */
  variantLayout?: SectionLayout;
  /**
   * Presets for vertical padding.
   */
  variantPadding?: SectionPadding;
};
