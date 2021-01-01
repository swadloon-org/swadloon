import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles = {
  h1: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h1),

    '@media': {
      [theme.layout.breakpoints.tabletPortrait]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h1),
      },
      [theme.layout.breakpoints.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h1),
      },
    },
  })),
  h2: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h2),

    '@media': {
      [theme.layout.breakpoints.tabletPortrait]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h2),
      },
      [theme.layout.breakpoints.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h2),
      },
    },
  })),
  h3: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h3),

    '@media': {
      [theme.layout.breakpoints.tabletPortrait]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h3),
      },
      [theme.layout.breakpoints.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h3),
      },
    },
  })),
  h4: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h4),

    '@media': {
      [theme.layout.breakpoints.tabletPortrait]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h4),
      },
      [theme.layout.breakpoints.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h4),
      },
    },
  })),
};
