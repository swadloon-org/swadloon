import { DesignSystemV2 } from '@newrade/core-design-system';

import { CSSColorsV2 } from './css-colors';
import { CSSComponents } from './css-components';
import { CSSIconography } from './css-iconography';
import { CSSLayoutV2 } from './css-layout';
import { CSSSizingV2 } from './css-sizing';
import { CSSTypographyV2 } from './css-typography';

export type CSSDesignSystemV2 = Omit<DesignSystemV2<string>, 'animations'> & {
  colors: CSSColorsV2;
  sizing: CSSSizingV2;
  typography: CSSTypographyV2;
  iconography: CSSIconography;
  layout: CSSLayoutV2;
  components: CSSComponents;
};
