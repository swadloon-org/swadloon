import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

//
// Wrapper
//

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: '#FFFFFF',
    width: '100%',
  })),
  grid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: cssTheme.sizing.var.x5,

    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: cssTheme.sizing.var.x5,
        gridTemplateAreas: `"title title title title messages messages messages messages messages messages messages ."`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: cssTheme.sizing.var.x5,

        gridTemplateAreas: `"title title title messages messages messages messages messages messages messages messages ."`,
      },
    },
  })),
  gridTitle: style(({ theme, cssTheme }: Theme) => ({
    '@media': {
      [cssTheme.layout.media.tablet]: {
        justifySelf: 'flex-end',
        gridArea: 'title',
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridArea: 'title',
      },
    },
  })),
  gridMessages: style(({ theme, cssTheme }: Theme) => ({
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridArea: 'messages',
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridArea: 'messages',
      },
    },
  })),
};
