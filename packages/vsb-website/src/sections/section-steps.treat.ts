import { Theme } from '@newrade/core-react-ui';
import { globalStyle, style } from 'treat';

export const styles = {
  /**
   * Layout
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
  })),
  grid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    padding: `0 ${cssTheme.sizing.var.x3}`,
    gap: `${cssTheme.sizing.var.x6} calc(${cssTheme.sizing.var.x5} + 20px)`,
    gridTemplateColumns: '1fr',

    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    },
  })),
  text: style(({ theme, cssTheme }: Theme) => ({})),
};

globalStyle(`${styles.text} * + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: `1em`,
}));
