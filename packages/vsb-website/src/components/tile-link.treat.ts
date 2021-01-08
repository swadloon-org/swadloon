import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
    height: '375px',
    color: cssTheme.colors.colorIntents.primaryReversed,

    '@media': {
      [cssTheme.layout.media.tablet]: {
        width: '100%',
        height: '500px',
      },
      [cssTheme.layout.media.desktopSmall]: {
        width: '100%',
        height: '720px',
      },
    },
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
    height: '100%',
  })),
  content: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
    height: '100%',
    color: cssTheme.colors.colorIntents.primaryReversed,
  })),
};
