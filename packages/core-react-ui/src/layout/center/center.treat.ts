import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: `${theme.layout.contentMargins.mobile}px 1fr ${theme.layout.contentMargins.mobile}px`,

    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium}px)`]: {
        gridTemplateColumns: `1fr ${theme.layout.contentWidth.desktopMaxWidth}px 1fr`,
      },
    },
  })),
  content: style(({ cssTheme, theme }: Theme) => ({
    justifySelf: 'center',
    width: '100%',
    overflowX: 'hidden',
    maxWidth: `calc(100vw - ${2 * theme.layout.contentMargins.mobile}px)`,

    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium}px)`]: {
        maxWidth: `var(--max-content-width, ${theme.layout.contentWidth.desktopMaxWidth}px)`,
      },
    },
  })),
};
