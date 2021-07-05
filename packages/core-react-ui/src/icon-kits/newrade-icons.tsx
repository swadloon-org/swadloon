import { ICON } from '@newrade/core-design-system';
import { IconComponents } from '../icons/icons-provider';
import NrLayoutCentered from './newrade-icons/NrLayoutCentered.svg';
import NrLayoutWide from './newrade-icons/NrLayoutWide.svg';

export const newradeIconsKit: IconComponents<ICON> = {
  [ICON.LAYOUT_CENTER]: NrLayoutCentered,
  [ICON.LAYOUT_WIDE]: NrLayoutWide,
};
