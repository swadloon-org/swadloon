import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
    padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2}`,
  })),
  link: style(({ cssTheme, theme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  linkActive: style(({ cssTheme, theme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
  })),
};
