import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

export const styles = {
  /**
   * States
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    outline: 'none',
    width: 'fit-content',
    userSelect: 'text',
    flexWrap: 'nowrap',
    display: 'list-item',
  })),
  iconWrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
  })),

  /**
   * Variants
   */
  bullet: style(({ theme, cssTheme }: Theme) => ({
    lineHeight: '1em',
    marginRight: '0.5em',
  })),
  number: style(({ theme, cssTheme }: Theme) => ({
    lineHeight: '1em',
    marginRight: '0.5em',
  })),

  /**
   * Icon
   */
  icon: style(({ theme, cssTheme }: Theme) => ({
    fontSize: '1.2em',
    display: 'inline-block',
    marginRight: '0.8em',
    verticalAlign: 'middle',
  })),

  /**
   * Sizes (from link)
   */
  large: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    lineHeight: 1,
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    lineHeight: 1,
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    lineHeight: 1,
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    lineHeight: 1,
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        lineHeight: 1,
        fontWeight: 500,
      },
    },
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
