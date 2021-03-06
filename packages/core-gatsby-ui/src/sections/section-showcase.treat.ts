import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryTextReversed,
    width: `100%`,
  })),
  gridSwitch: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',

    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },
  })),
  evenTile: style(({ theme, cssTheme }: Theme) => ({
    justifySelf: 'flex-end',
  })),
};
