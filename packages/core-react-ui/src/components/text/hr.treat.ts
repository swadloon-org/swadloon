import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    border: `1px solid ${cssTheme.colors.colors.grey[100]}`,
  })),
};
