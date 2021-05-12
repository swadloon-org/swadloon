export default {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  timing: { duration: 1000, fill: 'both' },
};

import { style, Style } from 'treat';
import { Theme } from '../design-system';

const commonAnimationStyle: Style = {
  animationDuration: `1s`,
  animationFillMode: `forward`,
  animationIterationCount: `infinite`,
  animationName: `forward`,
  animationPlayState: `forward`,
  animationTimingFunction: `forward`,
};

export const styles = {
  animate: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    ...commonAnimationStyle,
  })),
};
