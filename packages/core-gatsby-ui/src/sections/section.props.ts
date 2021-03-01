import { CommonComponentProps } from '@newrade/core-react-ui';
import { SectionAPI } from '../api/section.api';

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
  stack = 'stack',
  divider = 'divider',
  banner = 'banner',
  showcase = 'showcase',
  messenger = 'messenger',
}

export type SectionProps = CommonComponentProps & {
  section?: SectionAPI;
};
