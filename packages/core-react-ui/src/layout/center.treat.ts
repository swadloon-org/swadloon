import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: `${theme.layout.contentMargins.mobile}px 1fr ${theme.layout.contentMargins.mobile}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
  })),
  content: style(({ cssTheme, theme }: Theme) => ({
    width: '100%',
    justifySelf: 'center',
    overflowX: 'visible',

    maxWidth: `calc(100vw - ${2 * theme.layout.contentMargins.mobile}px)`,
    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall}px)`]: {
        maxWidth: `var(--max-content-width, ${theme.layout.contentWidth.desktopMaxWidth}px)`,
      },
    },
  })),
};
