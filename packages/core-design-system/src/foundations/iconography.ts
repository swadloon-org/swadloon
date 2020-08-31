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
}

export interface Icon {
  name: string;
  weight?: string;
}

export enum ICON_SIZE {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type IconSizes = { [key in keyof typeof ICON_SIZE]: SizingStep };

// export type Icons = { [key in keyof typeof ICON_NAME]: Icon } & { [key: string]: Icon };

export interface Iconography {
  /**
   * Icon size for each viewport.
   */
  sizes: {
    [key in keyof typeof VIEWPORT]: IconSizes;
  };
  /**
   * Default icon infos (name and optionally weight) along with
   * extra icons.
   */
  // icons: Icons;
}
