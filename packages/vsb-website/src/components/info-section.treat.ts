import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
  })),
  imagePreview: style(({ theme, cssTheme }: Theme) => ({
    width: 'min(100vw, 100%)',
  })),
  /**
   * Variants
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background0,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.background1,
  })),
};
