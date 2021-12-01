import { DesignSystem, DesignSystemV2 } from '@newrade/core-design-system';

import { CSSLayoutV2, CSSSizingV2, CSSTypographyV2 } from '..';

import { CSSColors, CSSColorsV2 } from './css-colors';
import { CSSComponents } from './css-components';
import { CSSIconography } from './css-iconography';
import { CSSLayout } from './css-layout';
import { CSSSizing } from './css-sizing';
import { CSSTypography } from './css-typography';

export type CSSDesignSystem = Omit<DesignSystem<string>, 'animations'> & {
  colors: CSSColors;
  sizing: CSSSizing;
  typography: CSSTypography;
  iconography: CSSIconography;
  layout: CSSLayout;
  components: CSSComponents;
};

export type CSSDesignSystemV2 = Omit<DesignSystemV2<string>, 'animations' | 'components'> & {
  colors: CSSColorsV2;
  sizing: CSSSizingV2;
  typography: CSSTypographyV2;
  iconography: CSSIconography;
  layout: CSSLayoutV2;
  // components: CSSComponents;
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
