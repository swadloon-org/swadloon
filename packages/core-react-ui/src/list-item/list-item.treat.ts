import { style } from 'treat';
import { Theme } from '../design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

const iconWidthNumber = `1.4`;
const iconWidth = `1.4em`;
const iconMargin = `1em`;

export const styles = {
  /**
   * States
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    maxWidth: `80ch`,
    outline: 'none',
    width: 'fit-content',
    userSelect: 'text',
    flexWrap: 'nowrap',
    display: 'flex',
  })),
  iconWrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
  })),
  textWrapperIcon: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    position: 'relative',

    left: `calc(${iconWidth} + ${iconMargin})`,
  })),
  content: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    paddingRight: `calc((${iconWidth} + ${iconMargin}))`,
  })),

  /**
   * Variants
   */
  bullet: style(({ theme, cssTheme }: Theme) => ({
    marginRight: '0.5em',
  })),
  number: style(({ theme, cssTheme }: Theme) => ({
    marginRight: '0.5em',
  })),

  /**
   * Icon
   */
  icon: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    left: `calc(-1 * (${iconWidth} + ${iconMargin}) / ${iconWidthNumber})`,
    top: `-0.3em`,

    fontSize: `${iconWidth}`,
    display: 'inline-block',
    verticalAlign: 'middle',
  })),
  bulletIcon: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    left: `calc(-1 * (${1}em + ${iconMargin}))`,
    top: `-0.3em`,

    display: 'inline-block',
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
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall, {
      stylePseudoElements: {
        display: 'inline-block',
      },
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
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
