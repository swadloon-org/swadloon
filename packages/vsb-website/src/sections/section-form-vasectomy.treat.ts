import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: `hsl(123deg 26% 99% / 100%)`,
  })),
  asideDesktop: style(({ theme, cssTheme }: Theme) => {
    // TODO: why does this create a bug ?
    // console.log(getCSSHexColor(lightenColor(theme.colors.colors.primary[100], 10)));
    return {
      position: 'relative',
      right: '0',
      bottom: '0',
      top: '0',
      width: '100vw',
      padding: `${cssTheme.sizing.var.x5} ${cssTheme.layout.var.contentMargins}`,
      borderTop: `1px solid ${cssTheme.colors.colors.primary[100]}`,
      borderBottom: `1px solid ${cssTheme.colors.colors.primary[100]}`,
      marginLeft: `calc(-1 * ${cssTheme.layout.var.contentMargins})`,
      marginRight: `calc(-1 * ${cssTheme.layout.var.contentMargins})`,
      marginBottom: `${cssTheme.sizing.var.x5}`,
      backgroundColor: `hsl(123deg 26% 94% / 100%)`,
      // backgroundColor: getCSSHexColor(lightenColor(theme.colors.colors.primary[100], 10)), // no class
      zIndex: cssTheme.layout.zIndex.content,

      '@media': {
        [cssTheme.layout.media.desktopMedium]: {
          position: 'fixed',
          width: '40%',
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          padding: `calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x6}) ${cssTheme.sizing.var.x5}`,
          borderLeft: `1px solid ${cssTheme.colors.colors.primary[100]}`,
        },
      },
    };
  }),
};
