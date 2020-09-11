import { ButtonSize, ButtonVariant, DesignSystem, SIZING } from 'core-design-system';
import { DEFAULT_LAYOUT } from 'core-react-ui';
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
          height: SIZING.x5,
        },
        [ButtonSize.medium]: {
          height: SIZING.x4,
        },
        [ButtonSize.small]: {
          height: SIZING.x3,
        },
      },
      variants: {
        [ButtonVariant.primary]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [ButtonVariant.primaryReversed]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [ButtonVariant.secondary]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [ButtonVariant.secondaryReversed]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [ButtonVariant.tertiary]: {
          color: 'white',
          backgroundColor: 'blue',
        },
        [ButtonVariant.tertiaryReversed]: {
          color: 'white',
          backgroundColor: 'blue',
        },
      },
    },
  },
};
