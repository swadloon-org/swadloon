import { ICON } from '@newrade/core-design-system';
import { ICON_FAMILY } from './icon-families';

export const iconsMapping: {
  [key in ICON_FAMILY]: { [name in ICON]?: string };
} = {
  [ICON_FAMILY.IONICONS]: {
    [ICON.ARROW_UP]: 'IoArrowUpOutline',
    [ICON.ARROW_RIGHT]: 'IoArrowForwardOutline',
  },
  [ICON_FAMILY.OCTICONS]: {
    [ICON.ARROW_RIGHT]: 'GoArrowRight',
  },
};
