import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    padding: `${cssTheme.sizing.var.x2} 0`,
  })),
  buttons: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
};
