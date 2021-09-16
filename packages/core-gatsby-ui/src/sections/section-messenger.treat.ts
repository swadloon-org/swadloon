import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    justifyContent: 'center',
  })),
  grid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: cssTheme.sizing.var.x5,
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: cssTheme.sizing.var.x6,
        gridTemplateAreas: `". title title title title messages messages messages messages messages . ."`,
      },
    },
  })),
  gridTitle: style(({ theme, cssTheme }: Theme) => ({
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        gridArea: 'title',
      },
    },
  })),
  gridMessages: style(({ theme, cssTheme }: Theme) => ({
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        gridArea: 'messages',
      },
    },
  })),
};
