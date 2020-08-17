import { DesignSystem } from 'core-design-system';
import { DEFAULT_LAYOUT } from 'core-react-ui';
import { createTheme } from 'treat';
import { colorIntents, colors } from './colors';
import { sizing } from './sizing';
import { typography } from './typography';

const theme: DesignSystem = {
  name: 'mir',
  variation: 'light',
  colors,
  colorIntents,
  sizing: sizing,
  typography,
  layout: DEFAULT_LAYOUT,
};

export const mirTheme = createTheme(theme, 'mir-theme');
