import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS } from '../theme';
import { getCSSColorVar } from '../utilities-iso';

/**
 * Sidebar
 */
export const wrapper = style({
  position: 'fixed',
  left: 0,
  bottom: `-1px`, // fixes 1px line visible on ios
  width: `85vw`,
  top: `-1px`, // fixes 1px line visible on ios
  // forces the backdrop to cover the viewport in iOS 15
  minHeight: `calc(100vh + 2px)`,
  maxHeight: `calc(100vh + 2px)`,
  '@media': {
    [layoutCSS.media.tablet]: {
      width: layoutCSS.var.sidebarWidth,
    },
  },
  zIndex: layoutCSS.zIndex.sideBarMobile as any,
  overflowY: 'scroll',
  overflowX: 'hidden',

  color: colorVars.colorIntents.primaryText,
  backgroundColor: getCSSColorVar({ h: 0, s: 0, l: 100, a: 100 }),

  WebkitOverflowScrolling: `touch`,

  transform: 'translateX(-100%)', // initial state for SSR
});

/**
 * Backdrop
 */
export const backdrop = style({
  position: 'fixed',
  backgroundColor: `rgba(0,0,0,0.20)`,
  // forces the backdrop to cover the viewport in iOS 15
  minHeight: `calc(100vh + 2px)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: Number(layoutCSS.zIndex.sideBarMobile) - 1,

  opacity: `0`, // inital animation state
  pointerEvents: 'none',
});

export const backdropActive = style({
  pointerEvents: 'auto',
});
