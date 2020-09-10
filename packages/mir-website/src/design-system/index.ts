import { DesignSystem } from 'core-design-system';
import { DEFAULT_LAYOUT } from 'core-react-ui';
import { createTheme } from 'treat';
import { colorIntents, colors } from './colors';
import { sizing } from './sizing';
import { typography } from './typography';
import { iconography } from './iconography';
import { effects } from './effects';

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
};
