import { LogoComponents } from '@newrade/core-react-ui';
import { LOGO } from '@newrade/core-design-system';

import LogoDefs from '../assets/logo-defs.svg';
import LogoStandard from '../assets/logo-standard.svg';
import LogoSymbol from '../assets/logo-symbol.svg';
import LogoFavicon from '../assets/logo-favicon.svg';

export const logosComponents: LogoComponents<LOGO> = {
  [LOGO.STANDARD]: LogoStandard,
  [LOGO.SYMBOL]: LogoSymbol,
  [LOGO.FAVICON]: LogoFavicon,
  [LOGO.DEFS]: LogoDefs,
};
