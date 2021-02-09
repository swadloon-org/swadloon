import { style } from 'treat';
import { Theme, getCSSColor, lightenColor } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: getCSSColor(lightenColor(theme.colors.colors.primary[100], 15)),
  })),
  floating: style(({ theme, cssTheme }: Theme) => ({
    position: 'fixed',
    right: '0',
    bottom: '0',
    top: '0',
    width: '40%',
    borderLeft: `1px solid ${cssTheme.colors.colors.primary[100]}`,
    backgroundColor: getCSSColor(lightenColor(theme.colors.colors.primary[100], 10)),
    zIndex: cssTheme.layout.zIndex.content,
  })),
};
