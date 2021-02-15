import { getCSSColor, lightenColor, Theme, getCSSHexColor } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: 'white',
    // backgroundColor: getCSSColor(lightenColor(theme.colors.colors.primary[100], 15)),
  })),
  floatingWrapper: style(({ theme, cssTheme }: Theme) => {
    // TODO: why does this create a bug ?
    // console.log(getCSSHexColor(lightenColor(theme.colors.colors.primary[100], 10)));
    // console.log(getCSSHexColor(lightenColor(theme.colors.colors.primary[100], 10)));
    return {
      position: 'fixed',
      right: '0',
      bottom: '0',
      top: '0',
      width: '40%',
      borderLeft: `1px solid ${cssTheme.colors.colors.primary[100]}`,
      // backgroundColor: 'red',
      backgroundColor: `hsl(123deg 26% 94% / 100%)`,
      zIndex: cssTheme.layout.zIndex.content,
    };
  }),
};
