import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  bug: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: `red`,
  })),
};
