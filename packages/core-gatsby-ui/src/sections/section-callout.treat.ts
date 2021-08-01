import { Theme } from '@newrade/core-react-ui/src';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    height: `auto`,
    width: `100%`,
  })),
  background: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
  })),
};
