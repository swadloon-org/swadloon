import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    width: `100%`,
    gridTemplateColumns: `1fr`,
    columnGap: cssTheme.sizing.var.x3,
    rowGap: cssTheme.sizing.var.x5,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: `repeat(3, 1fr)`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: `repeat(5, 1fr)`,
      },
    },
  })),
};
