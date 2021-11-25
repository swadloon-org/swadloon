import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';
import { getCSSFontTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

export const styles = {
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.medium),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.labels.tablet.medium),
      },

      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.labels.desktop.medium),
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.small),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.labels.tablet.small),
      },

      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.labels.desktop.small),
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.xSmall),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.labels.tablet.xSmall),
      },

      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.labels.desktop.xSmall),
      },
    },
  })),

  normal: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.labels),
  })),

  italic: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.italic),
  })),
  bold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.bold),
  })),
  uppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.uppercase),
  })),
  boldUppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
  })),
  italicBold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.styles.italicBold),
  })),

  th: style(({ theme, cssTheme }: Theme) => ({
    textAlign: 'left',
    wordBreak: 'normal',
    userSelect: 'text',
    paddingLeft: cssTheme.sizing.var.x3,
    paddingRight: cssTheme.sizing.var.x3,
    paddingTop: cssTheme.sizing.var.x2,
    paddingBottom: cssTheme.sizing.var.x2,

    '@media': {
      [cssTheme.layout.media.tablet]: {
        paddingLeft: cssTheme.sizing.var.x3,
        paddingRight: cssTheme.sizing.var.x3,
        paddingTop: cssTheme.sizing.var.x2,
        paddingBottom: cssTheme.sizing.var.x2,
      },

      [cssTheme.layout.media.desktopSmall]: {
        paddingLeft: cssTheme.sizing.var.x3,
        paddingRight: cssTheme.sizing.var.x3,
        paddingTop: cssTheme.sizing.var.x2,
        paddingBottom: cssTheme.sizing.var.x2,
      },
    },
  })),
};

globalStyle(`${styles.th}[align="center"]`, ({ theme, cssTheme }: Theme) => ({
  textAlign: 'center',
}));
