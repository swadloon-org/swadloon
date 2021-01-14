import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
  })),
  squareColor: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `60px`,
    boxShadow: cssTheme.effects.shadows.light,
  })),
  colorName: style(({ theme, cssTheme }: Theme) => ({})),
  shadeNumber: style(({ theme, cssTheme }: Theme) => ({})),
  colorHSL: style(({ theme, cssTheme }: Theme) => ({})),
};
