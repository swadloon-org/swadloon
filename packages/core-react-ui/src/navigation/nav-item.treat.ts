import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
    padding: `${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x4}`,
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  active: style(({ cssTheme, theme }: Theme) => ({
    backgroundColor: getCSSColor({ ...theme.colors.colors.primary[500], a: 5 }),
    color: cssTheme.colors.colors.grey[1000],
    '::before': {
      content: '" "',
      left: 0,
      top: 0,
      width: '4px',
      bottom: 0,
      position: 'absolute',
      backgroundColor: cssTheme.colors.colors.primary[500],
    },
  })),
};
