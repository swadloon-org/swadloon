import { Theme } from '@newrade/core-react-ui/lib/design-system';
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
    ['--color-text-primary']: cssTheme.colors.colorIntents.primaryText,
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
    ['--color-text-primary']: cssTheme.colors.colorIntents.primaryTextReversed,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background1,
    ['--color-text-secondary']: cssTheme.colors.colorIntents.secondaryText,
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
    ['--color-text-secondary']: cssTheme.colors.colorIntents.secondaryTextReversed,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background2,
    ['--color-text-tertiary']: cssTheme.colors.colorIntents.tertiaryText,
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[900],
    color: cssTheme.colors.colorIntents.primaryTextReversed,
    ['--color-text-tertiary']: cssTheme.colors.colorIntents.tertiaryTextReversed,
  })),
};
