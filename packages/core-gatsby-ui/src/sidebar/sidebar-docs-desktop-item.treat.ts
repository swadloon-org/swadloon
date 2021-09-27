import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
    padding: `${cssTheme.sizing.var.x1} 0 ${cssTheme.sizing.var.x1} calc(16px + ${cssTheme.sizing.var.x1})`,
  })),
  link: style(({ cssTheme, theme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  linkActive: style(({ cssTheme, theme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
  })),
};
