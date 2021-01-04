import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    visibility: 'hidden',
    position: 'fixed',
    top: 80,
    right: 40,
    width: cssTheme.layout.asideWidth,
    padding: '1em',

    gap: cssTheme.sizing.var.x2,

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
  linkSelected: style(({ cssTheme, theme }: Theme) => ({
    fontWeight: 600,
  })),
};
