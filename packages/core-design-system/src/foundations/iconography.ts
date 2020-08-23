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

export type Icons = { [key in keyof typeof ICON_NAME]: Icon } & { [key: string]: Icon };

export interface Iconography {
  /**
   * Icon size for each viewport.
   */
  iconSize: {
    [key in keyof typeof VIEWPORT]: {
      size: number | SizingStep;
    };
  };
  /**
   * Default icon infos (name and optionally weight) along with
   * extra icons.
   */
  icons: Icons;
}
