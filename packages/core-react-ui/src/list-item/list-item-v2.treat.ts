import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * @see https://web.dev/css-marker-pseudo-element/
 */
export const styles = {
  /**
   * States
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',

    display: 'list-item',
    width: '100%',
    whiteSpace: `nowrap`,

    outline: 'none',
    userSelect: 'text',
  })),

  content: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline-block',
    minHeight: '1em',
    maxWidth: 'calc(100% - 3em)', // collapse the content so it does not overflow
    verticalAlign: 'text-top',
    whiteSpace: `pre-wrap`,

    // more space between the marker and the content
    position: 'relative',
    left: `10px`,
  })),

  /**
   * Sizes (from link)
   */
  large: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large, {
      disablePseudo: true,
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large, {
          disablePseudo: true,
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large, {
          disablePseudo: true,
        }),
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium, {
      disablePseudo: true,
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium, {
          disablePseudo: true,
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium, {
          disablePseudo: true,
        }),
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small, {
      disablePseudo: true,
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small, {
          disablePseudo: true,
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small, {
          disablePseudo: true,
        }),
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall, {
      disablePseudo: true,
    }),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall, {
          disablePseudo: true,
        }),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall, {
          disablePseudo: true,
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

/**
 * @see allowed props https://web.dev/css-marker-pseudo-element/#allowed-css-::marker-properties
 */
globalStyle(`${styles.wrapper}::marker`, ({ theme, cssTheme }: Theme) => ({
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 400,
}));

/**
 * @see allowed props https://web.dev/css-marker-pseudo-element/#allowed-css-::marker-properties
 */
globalStyle(`${styles.wrapper} p`, ({ theme, cssTheme }: Theme) => ({
  padding: 'inherit',
}));
globalStyle(`${styles.wrapper} p::after`, ({ theme, cssTheme }: Theme) => ({
  content: 'none',
}));
globalStyle(`${styles.wrapper} p::before`, ({ theme, cssTheme }: Theme) => ({
  content: 'none',
}));
