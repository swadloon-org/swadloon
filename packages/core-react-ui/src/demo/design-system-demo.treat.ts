import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'block',
    marginTop: 80,
    marginBottom: 80,
  })),
};
