import { DesignSystem, DesignSystemV2 } from '@newrade/core-design-system';

import { CSSColors, CSSColorsV2 } from './css-colors';
import { CSSComponents } from './css-components';
import { CSSIconography } from './css-iconography';
import { CSSLayout, CSSLayoutV2 } from './css-layout';
import { CSSSizing, CSSSizingV2 } from './css-sizing';
import { CSSTypography, CSSTypographyV2 } from './css-typography';

export type CSSDesignSystem = Omit<DesignSystem<string>, 'animations'> & {
  colors: CSSColors;
  sizing: CSSSizing;
  typography: CSSTypography;
  iconography: CSSIconography;
  layout: CSSLayout;
  components: CSSComponents;
};

export type CSSDesignSystemV2 = Omit<DesignSystemV2<string>, 'animations'> & {
  colors: CSSColorsV2;
  sizing: CSSSizingV2;
  typography: CSSTypographyV2;
  iconography: CSSIconography;
  layout: CSSLayoutV2;
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
