import { LOGO } from '@newrade/core-design-system';
import { LogoComponents } from '@newrade/core-react-ui';

import LogoFavicon from '../../src/assets/logos/logo-favicon.svg';
import LogoStandard from '../../src/assets/logos/logo-standard.svg';
import LogoSymbol from '../../src/assets/logos/logo-symbol.svg';

export const logosComponents: LogoComponents<LOGO> = {
  [LOGO.STANDARD]: LogoStandard,
  [LOGO.SYMBOL]: LogoSymbol,
  [LOGO.FAVICON]: LogoFavicon,
  [LOGO.DEFS]: LogoStandard,
};
