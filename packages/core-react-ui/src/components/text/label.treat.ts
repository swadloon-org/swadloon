import { LABEL_SIZE, TEXT_LEVEL, TEXT_STYLE } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in LABEL_SIZE]: string } &
  { [key in TEXT_STYLE]: string } &
  { [key in TEXT_LEVEL]: string } = {
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.medium),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.medium),
      },

      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.medium),
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.small),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.small),
      },

      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.small),
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels.mobile.xSmall),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.labels.tablet.xSmall),
      },

      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.labels.desktop.xSmall),
      },
    },
  })),

  normal: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.labels),
    width: 'fit-content',
  })),
  italic: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSSizeTextStyles(cssTheme.typography.labels.styles.italic),
  })),
  bold: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSSizeTextStyles(cssTheme.typography.labels.styles.bold),
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

  /**
   * Text styles
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryText,
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryText,
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.secondaryTextReversed,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.tertiaryText,
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.tertiaryTextReversed,
  })),
};
