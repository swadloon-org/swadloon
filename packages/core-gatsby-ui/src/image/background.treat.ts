import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),
  imgWrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
  })),
  backgroundWrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
    backgroundColor: '#94aec5',
  })),
};
