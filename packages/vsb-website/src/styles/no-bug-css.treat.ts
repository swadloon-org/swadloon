import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  bug: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: `red`,
  })),
};
