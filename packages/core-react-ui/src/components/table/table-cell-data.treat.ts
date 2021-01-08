import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSFontTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

export const styles = {
  large: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.tablet.large),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.desktop.large),
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.tablet.medium),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.desktop.medium),
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.tablet.small),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.desktop.small),
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.tablet.xSmall),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.paragraphs.desktop.xSmall),
      },
    },
  })),

  normal: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs),
  })),
  bold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.styles.bold),
  })),
  italic: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.styles.italic),
  })),
  uppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.styles.uppercase),
  })),
  boldUppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.styles.boldUppercase),
  })),
  italicBold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.styles.italicBold),
  })),

  td: style(({ theme, cssTheme }: Theme) => ({
    paddingLeft: cssTheme.sizing.var.x3,
    paddingRight: cssTheme.sizing.var.x3,
    paddingTop: cssTheme.sizing.var.x2,
    paddingBottom: cssTheme.sizing.var.x2,
    backgroundColor: cssTheme.colors?.colors.grey[0],
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
