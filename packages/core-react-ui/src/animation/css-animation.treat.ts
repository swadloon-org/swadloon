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
  bounceOut: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '20%': {
        transform: 'scale3d(0.9, 0.9, 0.9)',
      },
      '50%,55%': {
        opacity: 1,
        transform: 'scale3d(1.1, 1.1, 1.1)',
      },
      to: {
        opacity: 0,
        transform: 'scale3d(0.3, 0.3, 0.3)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceOutDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '20%': {
        transform: 'translate3d(0, 10px, 0), scaleY(0.985)',
      },
      '40%,45%': {
        opacity: 1,
        transform: 'translate3d(0, -20px, 0), scaleY(0.9)',
      },
      to: {
        opacity: 0,
        transform: 'translate3d(0, 2000px, 0), scaleY(3)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceOutLeft: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '20%': {
        opacity: 1,
        transform: 'translate3d(20px, 0, 0) scaleX(0.9)',
      },
      to: {
        opacity: 0,
        transform: 'translate3d(-2000px, 0, 0) scaleX(2)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceOutRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '20%': {
        opacity: 1,
        transform: 'translate3d(-20px, 0, 0) scaleX(0.9)',
      },
      to: {
        opacity: 0,
        transform: 'translate3d(2000px, 0, 0) scaleX(2)',
      },
    },
    ...commonAnimationStyle,
  })),
  bounceOutUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '20%': {
        transform: 'translate3d(0, -10px, 0) scaleY(0.985)',
      },
      '40%,45%': {
        opacity: 1,
        transform: 'translate3d(0, 20px, 0) scaleY(0.9)',
      },
      to: {
        opacity: 0,
        transform: 'translate3d(0, -2000px, 0) scaleY(3)',
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
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    },
    ...commonAnimationStyle,
  })),
  fadeOutDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  fadeOutLeft: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  fadeOutRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  fadeOutUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
        transform: 'translate3d(0,-100%, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomIn: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      '0%': {
        opacity: 0,
        transform: 'scale3d(0.3,0.3,0.3)',
      },
      '50%': {
        opacity: 1,
      },
    },
    ...commonAnimationStyle,
  })),
  zoomInDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'scale3d(0.1,0.1,0.1) translate3d(0, -1000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },
      '60%': {
        opacity: 1,
        transform: 'scale3d(0.475,0.475,0.475) translate3d(0, 60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomInLeft: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'scale3d(0.1,0.1,0.1) translate3d(-1000px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },
      '60%': {
        opacity: 1,
        transform: 'scale3d(0.475,0.475,0.475) translate3d(10px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomInRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'scale3d(0.1,0.1,0.1) translate3d(1000px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },
      '60%': {
        opacity: 1,
        transform: 'scale3d(0.475,0.475,0.475) translate3d(-10px, 0, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomInUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 0,
        transform: 'scale3d(0.1,0.1,0.1) translate3d(0, 1000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },
      '60%': {
        opacity: 1,
        transform: 'scale3d(0.475,0.475,0.475) translate3d(0, -60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomOut: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        opacity: 1,
      },
      '50%': {
        opacity: 0,
        transform: 'scale3d(0.3, 0.3, 0.3)',
      },
      to: {
        opacity: 0,
      },
    },
    ...commonAnimationStyle,
  })),
  zoomOutDown: style(({ theme, cssTheme }: Theme) => ({
    transformOrigin: 'center bottom',
    '@keyframes': {
      '40%': {
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },
      to: {
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomOutLeft: style(({ theme, cssTheme }: Theme) => ({
    transformOrigin: 'left center',
    '@keyframes': {
      '40%': {
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
      },
      to: {
        opacity: 0,
        transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomOutRight: style(({ theme, cssTheme }: Theme) => ({
    transformOrigin: 'right center',
    '@keyframes': {
      '40%': {
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
      },
      to: {
        opacity: 0,
        transform: 'scale(0.1) translate3d(2000px, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  zoomOutUp: style(({ theme, cssTheme }: Theme) => ({
    transformOrigin: 'center bottom',
    '@keyframes': {
      '40%': {
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },
      to: {
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideInDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        transform: 'translate3d(0, -100%, 0)',
        visibility: 'visible',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideInLeft: style(({ theme, cssTheme }: Theme) => ({
    animationTimingFunction: 'cubic-bezier(.08,.65,0,1)',
    '@keyframes': {
      from: {
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'visible',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideInRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'visible',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideInUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        transform: 'translate3d(0, 100%, 0)',
        visibility: 'visible',
      },
      to: {
        transform: 'translate3d(0, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideOutDown: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        transform: 'translate3d(0, 0, 0)',
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(0, 100%, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideOutLeft: style(({ theme, cssTheme }: Theme) => ({
    animationTimingFunction: 'cubic-bezier(.08,.65,0,1)',
    '@keyframes': {
      from: {
        transform: 'translate3d(0, 0, 0)',
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(-100%, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideOutRight: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        transform: 'translate3d(0, 0, 0)',
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(100%, 0, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
  slideOutUp: style(({ theme, cssTheme }: Theme) => ({
    '@keyframes': {
      from: {
        transform: 'translate3d(0, 0, 0)',
      },
      to: {
        visibility: 'hidden',
        transform: 'translate3d(0, -100%, 0)',
      },
    },
    ...commonAnimationStyle,
  })),
};
