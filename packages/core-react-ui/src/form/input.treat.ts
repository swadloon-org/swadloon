import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  /**
   * Variant
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryText,
    border: `1px solid ${cssTheme.colors.colors.grey[400]}`,
    backgroundColor: cssTheme.colors.colors.grey[0],
    selectors: {
      '&[disabled]': {
        cursor: 'not-allowed',
        color: cssTheme.colors.colorIntents.disabledText,
        backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
      },
    },
  })),

  /**
   * States
   */
  rest: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    minWidth: `100%`,
    outline: 'none',
    lineHeight: 0,
    cursor: 'auto',
    appearance: 'none',
    userSelect: 'auto',
    touchAction: 'none',
    WebkitAppearance: 'none',
    whiteSpace: 'nowrap', // don't allow wrapping
    borderRadius: 4,
    width: 'fit-content',
    ':focus': {
      boxShadow: `0 0 1px 1px ${cssTheme.colors.colors.primary[300]}`,
    },
    '::-webkit-input-placeholder': {
      color: cssTheme.colors.colors.grey[300],
    },
    '@media': {
      [cssTheme.layout.media.tablet]: {
        // minWidth: 256,
      },
    },
  })),
  loading: style(({ theme, cssTheme }: Theme) => ({})),
  disabled: style(({ theme, cssTheme }: Theme) => ({})),
  error: style(({ theme, cssTheme }: Theme) => ({
    boxShadow: `0 0 0 1px ${cssTheme.colors.colorIntents.dangerAction}`,
  })),

  /**
   * Sizes
   */
  medium: style(({ theme, cssTheme }: Theme) => ({
    height: `calc(${cssTheme.sizing.var.x4} + ${cssTheme.typography.labels.mobile.small.capHeight}px + ${2}px)`,
    padding: `4px 9px 1px`,
    fontFamily: cssTheme.typography.labels.mobile.small.fontFamily,
    lineHeight: cssTheme.typography.labels.mobile.small.capsize?.lineHeight,
    fontSize: `max(16px, ${cssTheme.typography.labels.tablet.small.capsize?.fontSize})`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        height: `calc(${cssTheme.sizing.var.x4} + ${cssTheme.typography.labels.tablet.small.capHeight}px + ${2}px)`,

        fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
      },
      [cssTheme.layout.media.desktopSmall]: {
        height: `calc(${cssTheme.sizing.var.x4} + ${cssTheme.typography.labels.desktop.small.capHeight}px + ${2}px)`,
        fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
      },
    },
    // selectors: {
    //   '&[datapaddingcollapse="left"]': {
    //     marginLeft: `calc(-1 * ${cssTheme.sizing.var.x2} + (${iconSize} - ${cssTheme.sizing.var.x3}) / 2)`,
    //   },
    //   '&[dataicon="right"]': {
    //     padding: `${cssTheme.sizing.var.x2} ${iconPadding} ${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} `,
    //   },
    //   '&[dataicon="left"]': {
    //     padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} ${iconPadding}`,
    //   },
    // },
  })),
};
