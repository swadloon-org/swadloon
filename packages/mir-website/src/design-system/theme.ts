import { ButtonSize, Variant, DesignSystem, SIZING } from '@newrade/core-design-system-old';
import { DEFAULT_LAYOUT } from '@newrade/core-react-ui-old';
import { colorIntents, colors } from './colors';
import { effects } from './effects';
import { iconography } from './iconography';
import { sizing } from './sizing';
import { typography } from './typography';

export const theme: DesignSystem = {
  name: 'mir',
  variation: 'light',
  colors,
  colorIntents,
  effects,
  sizing: sizing,
  typography,
  iconography,
  layout: DEFAULT_LAYOUT,
  components: {
    buttons: {
      sizes: {
        [ButtonSize.large]: {
          width: 'fit-content',
          padding: SIZING.x5,
          paddingV: SIZING.x3,
          paddingH: SIZING.x5,
        },
        [ButtonSize.medium]: {
          width: 'fit-content',
          padding: SIZING.x4,
          paddingV: SIZING.x2,
          paddingH: SIZING.x4,
        },
        [ButtonSize.small]: {
          width: 'fit-content',
          padding: SIZING.x3,
          paddingV: SIZING.x1,
          paddingH: SIZING.x3,
        },
      },
      variants: {
        [Variant.primary]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [Variant.primaryReversed]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [Variant.secondary]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [Variant.secondaryReversed]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [Variant.tertiary]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [Variant.tertiaryReversed]: {
          color: 'white',
          backgroundColor: 'blue',
        },
      },
    },
  },
};
