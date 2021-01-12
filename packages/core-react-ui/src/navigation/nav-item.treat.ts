import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    padding: cssTheme.sizing.var.x3,
  })),
  active: style(({ cssTheme, theme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.primary[100],
  })),
};
