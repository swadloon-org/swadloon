import { LinkStyleProps } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in LinkStyleProps['variantStyle']]: string } &
  { [key in LinkStyleProps['variant']]: string } &
  { [key in LinkStyleProps['state']]?: string } &
  { [key in LinkStyleProps['variantSize']]: string } = {
  /**
   * Variant
   */
  underline: style(({ theme, cssTheme }: Theme) => ({
    textDecoration: 'underline',
  })),
  noUnderline: style(({ theme, cssTheme }: Theme) => ({
    textDecoration: 'none',
  })),

  rest: style(({ theme, cssTheme }: Theme) => ({
    outline: 'none',
    transition: `all 0.3s ease-out`,
    /**
     * States
     */
    ':hover': {
      color: cssTheme.colors.colors.primary[500],
    },
    ':focus': {
      color: cssTheme.colors.colors.primary[500],
    },
  })),
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
