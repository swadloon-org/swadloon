import { LinkStyleProps } from '@newrade/core-design-system';
import { globalStyle, style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in LinkStyleProps['variantStyle']]: string } &
  { [key in LinkStyleProps['variant']]: string } &
  { [key in LinkStyleProps['state']]?: string } &
  { [key in LinkStyleProps['variantSize']]: string } = {
  /**
   * States
   */
  underline: style(({ theme, cssTheme }: Theme) => ({
    textDecoration: 'underline',
  })),
  noUnderline: style(({ theme, cssTheme }: Theme) => ({
    textDecoration: 'none',
  })),
  /**
   * States
   */

  /**
   * Styles
   */
  normal: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
  })),
  reversed: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryReversed,
  })),

  /**
   * Sizes
   */
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
};

/**
 * States
 */
globalStyle(`${styles.normal}::hover`, ({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.primaryReversed,
}));

globalStyle(`${styles.normal}::active`, ({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colors.primary[700],
}));

globalStyle(`${styles.normal}::focused`, ({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colors.primary[700],
}));

globalStyle(`${styles.normal}::disabled`, ({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.disabledText,
}));
