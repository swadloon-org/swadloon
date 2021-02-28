import { CommonComponentProps } from '@newrade/core-react-ui';
import { Variant } from '@newrade/core-design-system';

export enum SectionBaseLayout {
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

export enum SectionLayout {
  switcher = 'switcher',
  divider = 'divider',
  banner = 'banner',
  showcase = 'showcase',
  messenger = 'messenger',
}

export type SectionProps = CommonComponentProps & {
  /**
   * Controls the visual importance of the section.
   */
  variant?: Variant;
  /**
   * Predefined layouts that controls how the content is layed out horizontally.
   */
  baseLayout?: SectionBaseLayout;
  /**
   * Presets for vertical padding.
   */
  padding?: SectionPadding;
};
