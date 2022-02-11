import { COLOR_SCHEME, Colors } from '@newrade/core-design-system';
import {
  defaultColorIntents,
  defaultColorIntentsDark,
  defaultColorsColors,
  defaultColorsColorsDark,
  defaultColorsGradients,
  defaultColorsGradientsDark,
} from '@newrade/core-react-ui/default-theme';

export const colors: Colors = {
  colorScheme: COLOR_SCHEME.LIGHT,
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
  gradients: defaultColorsGradients,
};

export const colorsDark: Colors = {
  colorScheme: COLOR_SCHEME.DARK,
  colors: defaultColorsColorsDark,
  colorIntents: defaultColorIntentsDark,
  gradients: defaultColorsGradientsDark,
};
