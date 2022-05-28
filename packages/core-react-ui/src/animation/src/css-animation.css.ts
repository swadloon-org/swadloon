import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { sizeVars } from '../../default-theme/src/theme';

import { easingPower4 } from './css-easings';

export const wrapper = style({
  // position: 'relative',
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

const bounceKeyframes = keyframes({
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
});

export const bounce = style({
  animationName: bounceKeyframes,
  ...commonAnimationStyle,
  transformOrigin: 'center bottom',
});

const pulseKeyframes = keyframes({
  '0%': {
    transform: 'scale3d(1, 1, 1)',
  },
  '50%': {
    transform: 'scale3d(1, 1, 1)',
  },
  '100%': {
    transform: 'scale3d(1.05, 1.05, 1.05)',
  },
});

export const pulse = style({
  animationName: pulseKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: 'var(--animation-func, ease-out)',
});

const bounceInKeyframes = keyframes({
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
});

export const bounceIn = style({
  animationName: bounceInKeyframes,
  ...commonAnimationStyle,
});

const bounceInDownKeyframes = keyframes({
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
});

export const bounceInDown = style({
  animationName: bounceInDownKeyframes,
  ...commonAnimationStyle,
});

const bounceInLeftKeyframes = keyframes({
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
});

export const bounceInLeft = style({
  animationName: bounceInLeftKeyframes,
  ...commonAnimationStyle,
});

const bounceInRightKeyframes = keyframes({
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
});

export const bounceInRight = style({
  animationName: bounceInRightKeyframes,
  ...commonAnimationStyle,
});

const bounceInUpKeyframes = keyframes({
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
});

export const bounceInUp = style({
  animationName: bounceInUpKeyframes,
  ...commonAnimationStyle,
});

const bounceOutKeyframes = keyframes({
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
});

export const bounceOut = style({
  animationName: bounceOutKeyframes,
  ...commonAnimationStyle,
});

const bounceOutDownKeyframes = keyframes({
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
});

export const bounceOutDown = style({
  animationName: bounceOutDownKeyframes,
  ...commonAnimationStyle,
});

const bounceOutLeftKeyframes = keyframes({
  '20%': {
    opacity: 1,
    transform: 'translate3d(20px, 0, 0) scaleX(0.9)',
  },
  to: {
    opacity: 0,
    transform: 'translate3d(-2000px, 0, 0) scaleX(2)',
  },
});

export const bounceOutLeft = style({
  animationName: bounceOutLeftKeyframes,
  ...commonAnimationStyle,
});

const bounceOutRightKeyframes = keyframes({
  '20%': {
    opacity: 1,
    transform: 'translate3d(-20px, 0, 0) scaleX(0.9)',
  },
  to: {
    opacity: 0,
    transform: 'translate3d(2000px, 0, 0) scaleX(2)',
  },
});

export const bounceOutRight = style({
  animationName: bounceOutRightKeyframes,
  ...commonAnimationStyle,
});

const bounceOutUpKeyframes = keyframes({
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
});

export const bounceOutUp = style({
  animationName: bounceOutUpKeyframes,
  ...commonAnimationStyle,
});

const fadeInKeyframes = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const fadeIn = style({
  animationName: fadeInKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: 'var(--animation-func, ease-out)',
});

const fadeInDownKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(0, -100%, 0)',
  },
  to: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
});

export const fadeInDown = style({
  animationName: fadeInDownKeyframes,
  ...commonAnimationStyle,
});

const fadeInLeftKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)',
  },
  to: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
});

export const fadeInLeft = style({
  animationName: fadeInLeftKeyframes,
  ...commonAnimationStyle,
});

const fadeInRightKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(100%, 0, 0)',
  },
  to: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
});

export const fadeInRight = style({
  animationName: fadeInRightKeyframes,
  ...commonAnimationStyle,
});

const fadeInUpKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(0, 100%, 0)',
  },
  to: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
});

export const fadeInUp = style({
  animationName: fadeInUpKeyframes,
  ...commonAnimationStyle,
});

const fadeOutKeyframes = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const fadeOut = style({
  animationName: fadeOutKeyframes,
  ...commonAnimationStyle,
});

const fadeOutDownKeyframes = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: 'translate3d(0, 100%, 0)',
  },
});

export const fadeOutDown = style({
  animationName: fadeOutDownKeyframes,
  ...commonAnimationStyle,
});

const fadeOutLeftKeyframes = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)',
  },
});

export const fadeOutLeft = style({
  animationName: fadeOutLeftKeyframes,
  ...commonAnimationStyle,
});

const fadeOutRightKeyframes = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: 'translate3d(100%, 0, 0)',
  },
});

export const fadeOutRight = style({
  animationName: fadeOutRightKeyframes,
  ...commonAnimationStyle,
});

const fadeOutUpKeyframes = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: 'translate3d(0,-100%, 0)',
  },
});

export const fadeOutUp = style({
  animationName: fadeOutUpKeyframes,
  ...commonAnimationStyle,
});

const zoomInKeyframes = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale3d(0.3,0.3,0.3)',
  },
  '50%': {
    opacity: 1,
  },
});

export const zoomIn = style({
  animationName: zoomInKeyframes,
  ...commonAnimationStyle,
});

const zoomInDownKeyframes = keyframes({
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
});

export const zoomInDown = style({
  animationName: zoomInDownKeyframes,
  ...commonAnimationStyle,
});

const zoomInLeftKeyframes = keyframes({
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
});

export const zoomInLeft = style({
  animationName: zoomInLeftKeyframes,
  ...commonAnimationStyle,
});

const zoomInRightKeyframes = keyframes({
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
});

export const zoomInRight = style({
  animationName: zoomInRightKeyframes,
  ...commonAnimationStyle,
});

const zoomInUpKeyframes = keyframes({
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
});

export const zoomInUp = style({
  animationName: zoomInUpKeyframes,
  ...commonAnimationStyle,
});

const zoomOutKeyframes = keyframes({
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
});

export const zoomOut = style({
  animationName: zoomOutKeyframes,
  ...commonAnimationStyle,
});

const zoomOutDownKeyframes = keyframes({
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
});

export const zoomOutDown = style({
  animationName: zoomOutDownKeyframes,
  ...commonAnimationStyle,
  transformOrigin: 'center bottom',
});

const zoomOutLeftKeyframes = keyframes({
  '40%': {
    opacity: 1,
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
  },
  to: {
    opacity: 0,
    transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
  },
});

export const zoomOutLeft = style({
  animationName: zoomOutLeftKeyframes,
  ...commonAnimationStyle,
  transformOrigin: 'left center',
});

const zoomOutRightKeyframes = keyframes({
  '40%': {
    opacity: 1,
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
  },
  to: {
    opacity: 0,
    transform: 'scale(0.1) translate3d(2000px, 0, 0)',
  },
});

export const zoomOutRight = style({
  animationName: zoomOutRightKeyframes,
  ...commonAnimationStyle,
  transformOrigin: 'right center',
});

const zoomOutUpKeyframes = keyframes({
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
});

export const zoomOutUp = style({
  animationName: zoomOutUpKeyframes,
  ...commonAnimationStyle,
  transformOrigin: 'center bottom',
});

const slideInDownKeyframes = keyframes({
  from: {
    transform: 'translate3d(0, -100%, 0)',
  },
  to: {
    transform: 'translate3d(0, 0, 0)',
  },
});

export const slideInDown = style({
  animationName: slideInDownKeyframes,
  ...commonAnimationStyle,
});

const slideInLeftKeyframes = keyframes({
  from: {
    filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0.15))`,
    transform: 'translate3d(-100%, 0, 0)',
  },
  to: {
    filter: `drop-shadow(1px 1px 2px rgba(33, 33, 33, 0))`,
    transform: 'translate3d(0, 0, 0)',
  },
});

export const slideInLeft = style({
  animationName: slideInLeftKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: easingPower4,
});

const slideInRightKeyframes = keyframes({
  from: {
    transform: 'translate3d(-100%, 0, 0)',
  },
  to: {
    transform: 'translate3d(0, 0, 0)',
  },
});

export const slideInRight = style({
  animationName: slideInRightKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: easingPower4,
});

const slideInUpKeyframes = keyframes({
  from: {
    transform: 'translate3d(0, 100%, 0)',
  },
  to: {
    transform: 'translate3d(0, 0, 0)',
  },
});

export const slideInUp = style({
  animationName: slideInUpKeyframes,
  ...commonAnimationStyle,
});

const slideOutDownKeyframes = keyframes({
  from: {
    transform: 'translate3d(0, 0, 0)',
  },
  to: {
    visibility: 'hidden',
    transform: 'translate3d(0, 100%, 0)',
  },
});

export const slideOutDown = style({
  animationName: slideOutDownKeyframes,
  ...commonAnimationStyle,
});

const slideOutLeftKeyframes = keyframes({
  from: {
    transform: 'translate3d(0, 0, 0)',
  },
  to: {
    visibility: 'hidden',
    transform: 'translate3d(-100%, 0, 0)',
  },
});

export const slideOutLeft = style({
  animationName: slideOutLeftKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: easingPower4,
});

const slideInLeftSidebarKeyframes = keyframes({
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
});

export const slideInLeftSidebar = style({
  animationName: slideInLeftSidebarKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: easingPower4,
});

const slideOutLeftSidebarKeyframes = keyframes({
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
});

export const slideOutLeftSidebar = style({
  animationName: slideOutLeftSidebarKeyframes,
  ...commonAnimationStyle,
  animationTimingFunction: easingPower4,
});

const slideOutRightKeyframes = keyframes({
  from: {
    transform: 'translate3d(0, 0, 0)',
  },
  to: {
    visibility: 'hidden',
    transform: 'translate3d(100%, 0, 0)',
  },
});

export const slideOutRight = style({
  animationName: slideOutRightKeyframes,
  ...commonAnimationStyle,
});

const slideOutUpKeyframes = keyframes({
  from: {
    transform: 'translate3d(0, 0, 0)',
  },
  to: {
    visibility: 'hidden',
    transform: 'translate3d(0, -100%, 0)',
  },
});

export const slideOutUp = style({
  animationName: slideOutUpKeyframes,
  ...commonAnimationStyle,
});
