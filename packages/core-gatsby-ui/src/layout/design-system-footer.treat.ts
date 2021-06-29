import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: `100%`,
  })),
  content: style(({ cssTheme, theme }: Theme) => ({
    display: 'flex',
    margin: `${cssTheme.sizing.var.x5} 0 0`,
    padding: `${cssTheme.sizing.var.x3} 0 ${cssTheme.sizing.var.x5}`,
    borderTop: `2px solid ${cssTheme.colors.colors.grey[100]}`,
  })),
};
