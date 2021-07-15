import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui/src/design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
  })),
};
