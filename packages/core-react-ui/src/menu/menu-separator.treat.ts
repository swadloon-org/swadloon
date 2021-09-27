import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    border: 'none',
    borderRight: `2px solid ${cssTheme.colors.colors.grey[100]}`,
    margin: 0,
    height: `10px`,
  })),
};

globalStyle(`${globalThemeReversedSelector} ${styles.wrapper}`, ({ theme, cssTheme }: Theme) => ({
  borderColor: cssTheme.colors.colors.grey[600],
}));
