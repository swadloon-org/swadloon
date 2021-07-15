import { Theme } from '@newrade/core-react-ui/src/design-system';
import { style } from 'treat';

export const styles = {
  /**
   * Layout
   */
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
  })),
  /**
   * Variants
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background0,
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background1,
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background2,
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
  })),
};
