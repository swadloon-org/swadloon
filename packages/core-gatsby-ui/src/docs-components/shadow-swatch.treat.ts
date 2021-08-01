import { Theme } from '@newrade/core-react-ui/src';
import { style } from 'treat';

export const styles = {
  shadow: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    backgroundColor: cssTheme.colors.colors.grey[0],
  })),
};
