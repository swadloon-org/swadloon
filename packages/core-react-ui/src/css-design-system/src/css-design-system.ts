import { DesignSystemV2 } from '@newrade/core-design-system';

import { CSSColorsV2 } from './css-colors.js';
import { CSSComponents } from './css-components.js';
import { CSSIconography } from './css-iconography.js';
import { CSSLayoutV2 } from './css-layout.js';
import { CSSSizingV2 } from './css-sizing.js';
import { CSSTypographyV2 } from './css-typography.js';

export type CSSDesignSystemV2 = Omit<DesignSystemV2<string>, 'animations'> & {
  colors: CSSColorsV2;
  sizing: CSSSizingV2;
  typography: CSSTypographyV2;
  iconography: CSSIconography;
  layout: CSSLayoutV2;
  components: CSSComponents;
};
