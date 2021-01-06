import { TEXT_LEVEL, TITLE } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in TITLE]: string } & { [key in TEXT_LEVEL]: string } = {
  t1: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.titles.mobile.t1),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.titles.tablet.t1),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.titles.desktop.t1),
      },
    },
  })),
  t2: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.titles.mobile.t2),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.titles.tablet.t2),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.titles.desktop.t2),
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