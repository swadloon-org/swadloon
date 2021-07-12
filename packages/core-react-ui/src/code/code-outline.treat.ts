import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  preview: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    width: `100%`,
    borderRadius: 0,
    overflowX: 'auto',
    overflowY: 'visible',
  })),
};
