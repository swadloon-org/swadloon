import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    border: 'none',
    borderRight: `2px solid ${cssTheme.colors.colors.grey[100]}`,
    margin: 0,
    height: `10px`,
  })),
};
