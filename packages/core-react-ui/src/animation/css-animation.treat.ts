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
  bounceIn: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      'from,5%,20%,40%,60%,80%,to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      '0%': {
        opacity: 0,
        transform: 'scale3d(0.3, 0.3, 0.3)',
      },
      '20%': {
        transform: 'scale3d(1.1, 1.1, 1.1)',
      },
      '40%': {
        transform: 'scale3d(0.9, 0.9, 0.9)',
      },
      '60%': {
        opacity: 1,
        transform: 'scale3d(1.03, 1.03, 1.03)',
      },
      '80%': {
        transform: 'scale3d(0.97, 0.97, 0.97)',
      },
      to: {
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceInDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      'from,60%,75%,90%,to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      '0%': {
        opacity: 0,
        transform: 'translate3d(0, -3000px, 0) scaleY(3)',
      },
      '60%': {
        opacity: 1,
        transform: 'translate3d(0, 25px, 0) scaleY(0.9)',
      },
      '75%': {
        transform: 'translate3d(0, -10px, 0) scaleY(0.95)',
      },
      '90%': {
        transform: 'translate3d(0, 5px, 0) scaleY(0.985)',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceInLeft: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      'from,60%,75%,90%,to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      '0%': {
        opacity: 0,
        transform: 'translate3d(-3000px, 0, 0) scaleX(3)',
      },
      '60%': {
        opacity: 1,
        transform: 'translate3d(25px, 0, 0) scaleX(1)',
      },
      '75%': {
        transform: 'translate3d(-10px, 0, 0) scaleX(0.98)',
      },
      '90%': {
        transform: 'translate3d(5px, 0, 0) scaleX(0.995)',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceInRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      'from,60%,75%,90%,to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      '0%': {
        opacity: 0,
        transform: 'translate3d(3000px, 0, 0) scaleX(3)',
      },
      '60%': {
        opacity: 1,
        transform: 'translate3d(-25px, 0, 0) scaleX(1)',
      },
      '75%': {
        transform: 'translate3d(10px, 0, 0) scaleX(0.98)',
      },
      '90%': {
        transform: 'translate3d(-5px, 0, 0) scaleX(0.995)',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceInUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      'from,60%,75%,90%,to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      '0%': {
        opacity: 0,
        transform: 'translate3d(0, 3000px, 0) scaleY(5)',
      },
      '60%': {
        opacity: 1,
        transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
      },
      '75%': {
        transform: 'translate3d(0, 10px, 0) scaleY(0.95)',
      },
      '90%': {
        transform: 'translate3d(0, -5px, 0) scaleY(0.985)',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
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
  fadeInDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  fadeInLeft: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  fadeInRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  fadeInUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
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
  pulse: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '0%': {
        transform: 'scale3d(1, 1, 1)',
      },
      '50%': {
        transform: 'scale3d(1, 1, 1)',
      },
      '100%': {
        transform: 'scale3d(1.05, 1.05, 1.05)',
      },
    },
    ...commonAnimationStyle,
    animationTimingFunction: 'var(--animation-func, ease-out)',
  })),
};
