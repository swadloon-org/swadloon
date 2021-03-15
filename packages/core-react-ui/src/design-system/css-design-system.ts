import { DesignSystem } from '@newrade/core-design-system';
import { CSSColors } from './css-colors';
import { CSSComponents } from './css-components';
import { CSSLayout } from './css-layout';
import { CSSSizing } from './css-sizing';
import { CSSTypography } from './css-typography';

export type CSSDesignSystem = Omit<DesignSystem<string>, 'iconography' | 'animations'> & {
  colors: CSSColors;
  sizing: CSSSizing;
  typography: CSSTypography;
  layout: CSSLayout;
  components: CSSComponents;
};

export interface Theme {
  /**
   * Raw theme configuration
   */
  theme: DesignSystem;
  /**
   * CSS ready theme object
   */
  cssTheme: CSSDesignSystem;
}
