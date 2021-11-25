import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  })),
};
