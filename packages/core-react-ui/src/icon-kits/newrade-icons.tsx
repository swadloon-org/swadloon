import { ICON } from '@newrade/core-design-system';
import NrLayoutCentered from '../../src/icon-kits/newrade-icons/NrLayoutCentered.svg';
import NrLayoutWide from '../../src/icon-kits/newrade-icons/NrLayoutWide.svg';
import { IconComponents } from '../icons/icons-provider';

export const newradeIconsKit: IconComponents<ICON> = {
  [ICON.LAYOUT_CENTER]: NrLayoutCentered,
  [ICON.LAYOUT_WIDE]: NrLayoutWide,
};
