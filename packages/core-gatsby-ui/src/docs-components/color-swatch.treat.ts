import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    userSelect: 'text',
  })),
  squareColor: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `80px`,
    boxShadow: cssTheme.effects.boxShadows.light,
    userSelect: 'auto',
  })),
};
