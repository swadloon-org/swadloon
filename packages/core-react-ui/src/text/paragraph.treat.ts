import { style } from 'treat';
import { Theme } from '../design-system';
import {
  getCSSFontTextStyles,
  getCSSSizeTextStyles,
  getCSSTextStyles,
} from '../utilities/text.utilities';

export const styles = {
  large: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large),
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium),
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small),
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall),
      },
    },
  })),
  inline: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
  })),
  disableCapsize: style(({ theme, cssTheme }: Theme) => ({
    padding: 'inherit',
    '::before': {
      display: 'none !important',
    },
    '::after': {
      display: 'none !important',
    },
  })),
  readableWidth: style(({ theme, cssTheme }: Theme) => ({
    maxWidth: '80ch',
  })),
  normal: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs),
  })),
  bold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs.styles.bold),
  })),
  italic: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs.styles.italic),
  })),
  uppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs.styles.uppercase),
  })),
  boldUppercase: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs.styles.boldUppercase),
  })),
  italicBold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSFontTextStyles(cssTheme.typography.paragraphs.styles.italicBold),
  })),
};
