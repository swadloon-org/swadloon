import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: `hsl(123deg 26% 99% / 100%)`,
  })),
  asideDesktop: style(({ theme, cssTheme }: Theme) => {
    // TODO: why does this create a bug ?
    // console.log(getCSSHexColor(lightenColor(theme.colors.colors.primary[100], 10)));
    return {
      position: 'fixed',
      right: '0',
      bottom: '0',
      top: '0',
      width: '40%',
      borderLeft: `1px solid ${cssTheme.colors.colors.primary[100]}`,
      backgroundColor: `hsl(123deg 26% 94% / 100%)`,
      // backgroundColor: getCSSHexColor(lightenColor(theme.colors.colors.primary[100], 10)), // no class
      zIndex: cssTheme.layout.zIndex.content,
    };
  }),
};
