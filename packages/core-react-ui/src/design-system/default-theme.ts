import { DesignSystem } from '@newrade/core-design-system';
import { defaultColors } from './default-colors';
import { defaultEffects } from './default-effects';
import { defaultIconography } from './default-iconography';
import { defaultSizizng } from './default-sizing';

export const defaultTheme: DesignSystem = {
  name: 'core-react-ui',
  variation: 'light',
  colors: defaultColors,
  effects: defaultEffects,
  sizing: defaultSizizng,
  iconography: defaultIconography,
  animations: undefined,
  layout: undefined,
  typography: ,
  // components: {
  //   buttons: {
  //     variants: {
  //       primary: {
  //         textColor: defaultColors.grey['500'],
  //         iconColor: defaultColors.grey['500'],
  //         backgroundColor: defaultColors.grey['500'],
  //       },
  //       primaryReversed: {
  //         textColor: defaultColors.grey['500'],
  //         iconColor: defaultColors.grey['500'],
  //       },
  //       secondary: {
  //         textColor: defaultColors.grey['500'],
  //         iconColor: defaultColors.grey['500'],
  //       },
  //       secondaryReversed: {
  //         textColor: defaultColors.grey['500'],
  //         iconColor: defaultColors.grey['500'],
  //       },
  //       tertiary: {
  //         textColor: defaultColors.grey['500'],
  //         iconColor: defaultColors.grey['500'],
  //       },
  //       tertiaryReversed: {
  //         textColor: defaultColors.grey['500'],
  //         iconColor: defaultColors.grey['500'],
  //       },
  //     },
  //     sizes: {
  //       large: {
  //         padding: {
  //           default: 10,
  //         },
  //         border: {
  //           default: {
  //             borderWidth: 1,
  //           },
  //         },
  //       },
  //       medium: {
  //         padding: {
  //           default: 10,
  //         },
  //         border: {
  //           default: {
  //             borderWidth: 1,
  //           },
  //         },
  //       },
  //       small: {
  //         padding: {
  //           default: 10,
  //         },
  //         border: {
  //           default: {
  //             borderWidth: 1,
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
};
