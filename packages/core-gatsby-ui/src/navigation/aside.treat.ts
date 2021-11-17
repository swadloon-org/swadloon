import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'sticky',
    top: cssTheme.sizing.var.x4,

    width: cssTheme.layout.asideWidth,
    marginTop: cssTheme.sizing.var.x4,
    marginBottom: cssTheme.sizing.var.x3,

    display: 'none',
    visibility: 'hidden',

    backgroundColor: 'transparent',

    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        display: 'initial',
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
