import { Theme } from '@newrade/core-react-ui/src/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        // gridTemplateColumns: `repeat(auto-fit, minmax(163px, 1fr))`,
        // gridTemplateColumns: `repeat(3, 1fr)`,
      },
      [cssTheme.layout.media.desktopSmall]: {},
    },
  })),
};
