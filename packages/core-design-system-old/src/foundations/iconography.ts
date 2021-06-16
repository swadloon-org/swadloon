import { VIEWPORT } from './layout';
import { SizingStep } from './sizing';

/**
 * Default included icons.
 */
export enum ICON_NAME {
  MENU = 'menu',
  ARROW_TOP = 'arrow-top',
  ARROW_RIGHT = 'arrow-right',
  ARROW_BOTTOM = 'arrow-bottom',
  ARROW_LEFT = 'arrow-left',
  CARET = 'CARET',
}

export interface Icon {
  name: string;
  weight?: string;
}

export enum IconSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type IconSizes = { [key in IconSize]: SizingStep };

// export type Icons = { [key in ICON_NAME]: Icon } & { [key: string]: Icon };

export interface Iconography {
  /**
   * Icon size for each viewport.
   */
  sizes: {
    [key in VIEWPORT]: IconSizes;
  };
  /**
   * Default icon infos (name and optionally weight) along with
   * extra icons.
   */
  // icons: Icons;
}
