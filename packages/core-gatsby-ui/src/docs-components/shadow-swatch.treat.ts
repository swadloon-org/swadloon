import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const styles = {
  shadow: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    backgroundColor: cssTheme.colors.colors.grey[0],
  })),
};
