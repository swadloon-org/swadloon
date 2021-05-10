import { style } from 'treat';
import { Theme } from '../design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  normal: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
    color: cssTheme.colors.colorIntents.primaryText,
    backgroundColor: getCSSColor({ ...theme.colors.colors.primary[100], a: 25 }),
    borderLeft: `8px solid ${cssTheme.colors.colors.primary[500]}`,
    padding: `20px 16px 20px 25px`,
  })),
};
