import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
    padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2}`,
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  active: style(({ cssTheme, theme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
  })),
};
