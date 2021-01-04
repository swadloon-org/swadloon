import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in TEXT_STYLE]: string } & { [key in PARAGRAPH_SIZE]: string } = {
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
};
