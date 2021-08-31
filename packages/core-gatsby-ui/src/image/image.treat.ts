import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),
  imgWrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
    height: '100%',
  })),
  backgroundWrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
    height: '100%',
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: '#94aec5',
    maxHeight: '70vh',
    height: '100%',
  })),
};
