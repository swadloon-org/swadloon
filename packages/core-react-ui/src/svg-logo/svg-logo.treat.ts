import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    fill: cssTheme.colors.colors.primary[500],
  })),
};

// globalStyle(`${styles.large} ${styles.iconBase} path`, ({ theme, cssTheme }: Theme) => ({
//   strokeWidth: 40,
// }));
