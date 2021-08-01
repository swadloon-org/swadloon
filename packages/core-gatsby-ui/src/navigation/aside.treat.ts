import { Theme } from '@newrade/core-react-ui/src';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    visibility: 'hidden',
    position: 'fixed',
    top: `calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x3})`,
    left: `calc(50% + ${cssTheme.layout.var.contentWidth.desktopDocsMaxWidth} / 2 + ${cssTheme.sizing.var.x4})`,
    width: cssTheme.layout.asideWidth,
    padding: '2em',

    gap: cssTheme.sizing.var.x1,

    backgroundColor: 'transparent',

    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium}px)`]: {
        visibility: 'visible',
      },
    },
  })),
  linksWrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    paddingTop: '0.2em',
    paddingBottom: '0.3em',
    paddingLeft: '1.5em',
    overflow: 'hidden',
  })),
  link: style(({ cssTheme, theme }: Theme) => ({
    position: 'relative',
    userSelect: 'none',
    color: cssTheme.colors.colorIntents.primaryText,
    listStyle: 'none',
    textDecoration: 'none',
    lineHeight: `1.5em`,
    fontWeight: 600,
    selectors: {
      [`&:before`]: {
        height: 'var(--aside-before-height, 2em)',
        top: 'var(--aside-before-top, -1.7em)',

        content: '""',
        width: '.9em',
        position: 'absolute',
        left: '-1.5em',
        border: `1px solid ${cssTheme.colors.colors.grey[100]}`,
        borderWidth: '0 0 1px 1px',
      },
    },
  })),
  linkSelected: style(({ cssTheme, theme }: Theme) => ({
    fontWeight: 600,
    color: cssTheme.colors.colorIntents.primary,
  })),
  linkAfter: style(({ cssTheme, theme }: Theme) => ({
    selectors: {
      [`&:after`]: {
        height: '100%',
        top: 0,

        content: '""',
        width: '.9em',
        position: 'absolute',
        left: '-1.5em',
        borderLeft: `1px solid ${cssTheme.colors.colors.grey[100]}`,
        borderWidth: '0 0 1px 1px',
      },
    },
  })),
  anchor: style(({ cssTheme, theme }: Theme) => ({
    userSelect: 'none',
  })),
};
