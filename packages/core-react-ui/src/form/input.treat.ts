import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  /**
   * Wrapper for the select element and icon
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),

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
    verticalAlign: 'middle',
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
      verticalAlign: 'middle',
    },

    //   input:-webkit-autofill {
    //     box-shadow: inset 0 0 0 100px hsl(208 100% 95%);
    // }

    // input:-webkit-autofill::first-line {
    //     font-family: 'Untitled Sans', helvetica, sans-serif;
    //     color: hsl(208 12% 5%);
    // }
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
    padding: `0 10px`,
    fontFamily: cssTheme.typography.labels.mobile.small.fontFamily,
    fontSize: `max(16px, ${cssTheme.typography.labels.tablet.small.capsize?.fontSize})`,
    height: `56px`,
    lineHeight: `56px`,
    '::-webkit-input-placeholder': {
      lineHeight: `56px`,
    },
    '@media': {
      [cssTheme.layout.media.tablet]: {
        fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
        height: `56px`,
        lineHeight: `56px`,
        '::-webkit-input-placeholder': {
          lineHeight: `56px`,
        },
      },
      [cssTheme.layout.media.desktopSmall]: {
        fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
        height: `48px`,
        lineHeight: `48px`,
        '::-webkit-input-placeholder': {
          lineHeight: `48px`,
        },
      },
    },
  })),

  /**
   * Icon
   */
  icon: style(({ theme, cssTheme }: Theme) => ({
    height: '16px',
    position: 'absolute',
    top: `calc(50% - 8px)`,
    right: cssTheme.sizing.var.x2,
  })),
};
