import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  top: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    maxWidth: '100%',
    justifySelf: 'flex-start',
    '@media': {
      [cssTheme.layout.media.tablet]: {
        maxWidth: '120ch',
      },
    },
  })),
  left: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    maxWidth: '100%',
    justifySelf: 'flex-start',
    '@media': {
      [cssTheme.layout.media.tablet]: {
        maxWidth: '80ch',
      },
    },
  })),
  right: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    maxWidth: '100%',
    justifySelf: 'flex-start',
    '@media': {
      [cssTheme.layout.media.tablet]: {
        maxWidth: '80ch',
      },
    },
  })),
};
