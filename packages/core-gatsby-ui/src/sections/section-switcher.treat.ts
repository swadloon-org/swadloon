import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  left: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    maxWidth: '100%',
    justifySelf: 'flex-end',
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
