import { LinkStyleProps } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

export const styles: { [key in LinkStyleProps['variantStyle']]: string } &
  { [key in LinkStyleProps['variant']]: string } &
  { [key in LinkStyleProps['state']]?: string } &
  { [key in LinkStyleProps['variantSize']]: string } & {
    icon: string;
  } = {
  /**
   * Variant
   */
  underline: style(({ theme, cssTheme }: Theme) => ({
    textDecoration: 'underline',
  })),
  noUnderline: style(({ theme, cssTheme }: Theme) => ({
    textDecoration: 'none',
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
   * States
   */
  rest: style(({ theme, cssTheme }: Theme) => ({
    outline: 'none',
    cursor: 'pointer',
    width: 'fit-content',
    appearance: 'none',
    WebkitAppearance: 'none',
    // ':hover': {
    //   color: cssTheme.colors.colors.primary[500],
    // },
    // ':active': {
    //   color: cssTheme.colors.colors.primary[500],
    // },
    // ':focus': {
    //   outline: `1px solid ${cssTheme.colors.colors.primary[500]}`,
    //   outlineOffset: '10px',
    // },
  })),
  active: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colors.primary[700],
  })),

  /**
   * Sizes
   */
  large: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large),
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large),
        fontWeight: 500,
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium),
        fontWeight: 500,
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small),
        fontWeight: 500,
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall),
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall),
        fontWeight: 500,
      },
    },
  })),

  /**
   * Icon
   */
  icon: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
    marginLeft: '0.3em',
    verticalAlign: '-0.1em',
  })),
};
