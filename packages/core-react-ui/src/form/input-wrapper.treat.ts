import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    // minHeight: 80, // TODO: calculate real height based on theme information
  })),
};
