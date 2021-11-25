import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
    display: 'grid',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    gridTemplateColumns: `${theme.layout.contentMargins.mobile}px 1fr ${theme.layout.contentMargins.mobile}px`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: `${theme.layout.contentMargins.tablet}px 1fr ${theme.layout.contentMargins.tablet}px`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: `${theme.layout.contentMargins.desktop}px 1fr ${theme.layout.contentMargins.desktop}px`,
      },
    },
  })),
  content: style(({ cssTheme, theme }: Theme) => ({
    width: '100%',
    justifySelf: 'center',
    overflowX: 'visible',

    maxWidth: `calc(100vw - ${2 * theme.layout.contentMargins.mobile}px)`,
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        maxWidth: `var(--max-content-width, ${theme.layout.contentWidth.desktopMaxWidth}px)`,
      },
    },
  })),
};
