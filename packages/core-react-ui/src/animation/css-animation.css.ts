import { globalStyle, GlobalStyleRule, style } from '@vanilla-extract/css';

import { sizeVars } from '@newrade/core-react-ui/theme';

import { easingPower4 } from './css-easings';

export const wrapper = style({
  position: 'relative',
});

export const controlsWrapper = style({
  position: 'relative',
});

export const controls = style({
  height: 'auto',
  position: 'absolute',
  bottom: sizeVars.x1,
  right: sizeVars.x1,
  zIndex: 1,
});

const commonAnimationStyle = {
  animationDelay: 'var(--animation-delay, 0s)',
  animationDuration: 'var(--animation-duration, 1s)',
  animationFillMode: 'both',
  animationIterationCount: 'var(--animation-iteration, 1)',
};

// see https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
globalStyle(`${wrapper}`, {
  '@media': {
    ['print, (prefers-reduced-motion: reduce)']: {
      animationDuration: '0ms !important',
      animationDelay: '0ms !important',
      transitionDuration: '0ms !important',
    },
  },
});

export const bounce = style({
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
});

export const pulse = style({
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
});

export const bounceIn = style({
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
});

export const bounceInDown = style({
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
});

export const bounceInLeft = style({
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
});

export const bounceInRight = style({
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
});

export const bounceInUp = style({
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
});

export const bounceOut = style({
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
});

export const bounceOutDown = style({
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
});

export const bounceOutLeft = style({
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
});

export const bounceOutRight = style({
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
});

export const bounceOutUp = style({
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
});

export const fadeIn = style({
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
});

export const fadeInDown = style({
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
});

export const fadeInLeft = style({
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
});

export const fadeInRight = style({
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
});

export const fadeInUp = style({
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
});

export const fadeOut = style({
  '@keyframes': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  ...commonAnimationStyle,
});

export const fadeOutDown = style({
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
});

export const fadeOutLeft = style({
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
});

export const fadeOutRight = style({
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
});

export const fadeOutUp = style({
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
});

export const zoomIn = style({
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
});

export const zoomInDown = style({
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
});

export const zoomInLeft = style({
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
});

export const zoomInRight = style({
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
});

export const zoomInUp = style({
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
});

export const zoomOut = style({
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
});

export const zoomOutDown = style({
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
});

export const zoomOutLeft = style({
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
});

export const zoomOutRight = style({
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
});

export const zoomOutUp = style({
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
});

export const slideInDown = style({
  '@keyframes': {
    from: {
      transform: 'translate3d(0, -100%, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  ...commonAnimationStyle,
});

export const slideInLeft = style({
  animationTimingFunction: easingPower4,
  '@keyframes': {
    from: {
      filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.15))`,
      transform: 'translate3d(-100%, 0, 0)',
    },
    to: {
      filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0))`,
      transform: 'translate3d(0, 0, 0)',
    },
  },
  ...commonAnimationStyle,
});

export const slideInRight = style({
  animationTimingFunction: easingPower4,
  '@keyframes': {
    from: {
      transform: 'translate3d(-100%, 0, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  ...commonAnimationStyle,
});

export const slideInUp = style({
  '@keyframes': {
    from: {
      transform: 'translate3d(0, 100%, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  ...commonAnimationStyle,
});

export const slideOutDown = style({
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
});

export const slideOutLeft = style({
  animationTimingFunction: easingPower4,
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
});

export const slideInLeftSidebar = style({
  animationTimingFunction: easingPower4,
  '@keyframes': {
    from: {
      opacity: 0,
      filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0))`,
      transform: 'translate3d(-100%, 0, 0)',
    },
    to: {
      opacity: 1,
      filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.15))`,
      transform: 'translate3d(0, 0, 0)',
    },
  },
  ...commonAnimationStyle,
});

export const slideOutLeftSidebar = style({
  animationTimingFunction: easingPower4,
  '@keyframes': {
    from: {
      opacity: 1,
      filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.15))`,
      transform: 'translate3d(0, 0, 0)',
    },
    to: {
      opacity: 1,
      filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0))`,
      transform: 'translate3d(-100%, 0, 0)',
    },
  },
  ...commonAnimationStyle,
});

export const slideOutRight = style({
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
});

export const slideOutUp = style({
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
});
