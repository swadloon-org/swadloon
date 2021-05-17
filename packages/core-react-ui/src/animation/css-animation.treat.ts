import { globalStyle, style, Style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
  controlsWrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
  controls: style(({ theme, cssTheme }: Theme) => ({
    height: 'auto',
    position: 'absolute',
    bottom: cssTheme.sizing.var.x1,
    right: cssTheme.sizing.var.x1,
    zIndex: 1,
  })),
};

const commonAnimationStyle: Style = {
  animationDuration: 'var(--animation-duration, 1s)',
  animationFillMode: 'both',
  animationPlayState: 'paused',
  animationIterationCount: 'var(--animation-iteration, 1)',
};

globalStyle(`${styles.wrapper}`, () => ({
  '@media': {
    ['print, (prefers-reduced-motion: reduce)']: {
      animationDuration: '1ms !important',
      transitionDuration: '1ms !important',
      animationIterationCount: '1 !important',
      // opacity: '1 !important', // not sure we want to enable this
    },
  },
}));

export const animations = {
  bounce: style(({ theme, cssTheme }: Theme) => ({
    transformOrigin: 'center bottom',
    '@keyframes': {
      'from,20%,53%,to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)',
      },
      '40%,43%': {
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      },
      '70%': {
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
      },
      '80%': {
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0) scaleY(0.95)',
      },
      '90%': {
        transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
      },
    },
    ...commonAnimationStyle,
  })),
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
    animationTimingFunction: 'var(--animation-func, ease-out)',
  })),
  fadeIn: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    ...commonAnimationStyle,
    animationTimingFunction: 'var(--animation-func, ease-out)',
  })),
};
