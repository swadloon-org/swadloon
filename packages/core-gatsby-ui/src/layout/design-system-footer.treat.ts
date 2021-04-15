import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: `100%`,
  })),
  content: style(({ cssTheme, theme }: Theme) => ({
    margin: `${cssTheme.sizing.var.x4} 0 0`,
    padding: `${cssTheme.sizing.var.x3} 0 ${cssTheme.sizing.var.x5}`,
    borderTop: `1px solid ${cssTheme.colors.colors.grey[100]}`,
  })),
};
