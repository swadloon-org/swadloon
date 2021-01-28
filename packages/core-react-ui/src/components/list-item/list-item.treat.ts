import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../../utilities/text.utilities';

const iconWidthNumber = `1.4`;
const iconWidth = `1.4em`;
const iconMargin = `0.8em`;

export const styles = {
  /**
   * States
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    outline: 'none',
    width: 'fit-content',
    userSelect: 'text',
    flexWrap: 'nowrap',
    display: 'list-item',
  })),
  iconWrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
  })),
  textWrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline',
  })),
  textWrapperIcon: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
    position: 'relative',

    left: `calc(${iconWidth} + ${iconMargin})`,
  })),
  content: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
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
    top: `0em`,

    fontSize: `${iconWidth}`,
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
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
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
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
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
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
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
    fontWeight: 500,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
        fontWeight: 500,
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall, {
          stylePseudoElements: {
            display: 'inline-block',
          },
        }),
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
