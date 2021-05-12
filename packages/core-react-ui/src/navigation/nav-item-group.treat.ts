import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 ${cssTheme.sizing.var.x3}`,
  })),
};
