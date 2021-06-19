import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
  buttons: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
};
