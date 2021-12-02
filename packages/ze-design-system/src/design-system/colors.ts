import { Colors } from '@newrade/core-design-system';
import {
  defaultColorIntents,
  defaultColorIntentsDark,
  defaultColorsColors,
  defaultColorsColorsDark,
  defaultColorsGradients,
  defaultColorsGradientsDark,
} from '@newrade/core-react-ui/default-theme';

export const colors: Colors = {
  colorScheme: 'light',
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
  gradients: defaultColorsGradients,
};

export const colorsDark: Colors = {
  colorScheme: 'dark',
  colors: defaultColorsColorsDark,
  colorIntents: defaultColorIntentsDark,
  gradients: defaultColorsGradientsDark,
};
