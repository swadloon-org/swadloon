import { ICON } from '@newrade/core-design-system';
import { ionicons5OutlineComponents } from '@newrade/core-react-ui-icon-kit-ionicons';

import { IconComponents } from '../icons/icons-provider.js';

import NrLayoutCentered from './NrLayoutCentered.svg.js';
import NrLayoutWide from './NrLayoutWide.svg.js';

export const newradeIconsKit: IconComponents<ICON> = {
  ...ionicons5OutlineComponents,
  [ICON.LAYOUT_CENTER]: NrLayoutCentered,
  [ICON.LAYOUT_WIDE]: NrLayoutWide,
};
