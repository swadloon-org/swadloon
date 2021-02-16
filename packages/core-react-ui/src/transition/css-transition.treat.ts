import { style, Style } from 'treat';
import { Theme } from '../design-system/css-design-system';

const commonAnimationStyle: Style = {
  animationDuration: `300ms`,
  animationFillMode: `both`,
  animationIterationCount: `1`,
  animationPlayState: `running`,
  animationTimingFunction: `ease-out`,
};

export const styles = {
  fadeOut: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '0%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0,
      },
    },
    ...commonAnimationStyle,
  })),
};
