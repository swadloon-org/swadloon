import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  preview: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    width: `100%`,
    border: `1px solid rgb(255 0 255 / 40%)`,
    borderRadius: 0,
    overflowX: 'auto',
    marginBottom: 16,
  })),
};
