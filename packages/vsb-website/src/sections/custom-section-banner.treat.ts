import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  icon: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    left: `calc(50% - (2 * ${cssTheme.sizing.var.x3} + ${cssTheme.typography.labels.mobile.medium.capHeight}px) / 2)`,
    bottom: `calc(${cssTheme.sizing.var.x3} * 1.5)`,
  })),
};
