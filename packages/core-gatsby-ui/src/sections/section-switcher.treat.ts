import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  left: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    maxWidth: '100%',
    justifySelf: 'flex-end',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        maxWidth: '80ch',
      },
    },
  })),
  right: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    maxWidth: '100%',
    justifySelf: 'flex-start',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        maxWidth: '80ch',
      },
    },
  })),
};
