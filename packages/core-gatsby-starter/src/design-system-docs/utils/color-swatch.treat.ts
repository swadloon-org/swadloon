import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
  })),
  squareColor: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `60px`,
    boxShadow: cssTheme.effects.shadows.light,
  })),
};
