import { HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { globalStyle, style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { wrapper: string } & { [key in HEADING]: string } & { [key in TEXT_LEVEL]: string } = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inherit',
  })),

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

  primary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryText,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.tertiaryText,
  })),
};

globalStyle(`${styles.wrapper}::before`, ({ theme, cssTheme }: Theme) => ({
  content: '" "',
  display: 'block',
  height: '75px',
  marginTop: '-75px',
  visibility: 'hidden',
}));
