import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    visibility: 'hidden',
    position: 'fixed',
    top: `calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x3})`,
    left: `calc(50% + ${cssTheme.layout.var.contentWidth} / 2)`,
    width: cssTheme.layout.asideWidth,
    padding: '2em',

    gap: cssTheme.sizing.var.x3,

    backgroundColor: 'transparent',

    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium}px)`]: {
        visibility: 'visible',
      },
    },
  })),
  link: style(({ cssTheme, theme }: Theme) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 400,
  })),
  linksWrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gap: cssTheme.sizing.var.x2,
    borderLeft: `1px solid ${cssTheme.colors.colors.grey[50]}`,
    paddingTop: '0.2em',
    paddingBottom: '0.3em',
    paddingLeft: '1em',
  })),
  linkSelected: style(({ cssTheme, theme }: Theme) => ({
    fontWeight: 600,
  })),
};
