import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  /**
   * Layout
   */
  content: style(({ theme, cssTheme }: Theme) => ({
    width: 'min(100vw, 100%)',
    height: `100%`,
  })),
};
