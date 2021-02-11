import { getCSSColor, lightenColor, Theme, getCSSHexColor } from '@newrade/core-react-ui';
import { style } from 'treat';

function getColor() {
  return 'red';
}

export const styles = {
  bug: style(({ theme, cssTheme }: Theme) => ({
    // backgroundColor: getCSSColor(lightenColor(theme.colors.colors.primary[100], 15)),
    backgroundColor: getCSSColor(theme.colors.colors.primary[100]),
  })),
};
