import { Layout, BREAKPOINT, VIEWPORT } from 'core-design-system';

export const DEFAULT_LAYOUT: Layout = {
  breakpoints: {
    [BREAKPOINT.MOBILE_X_SMALL]: {
      value: 320,
      valuePx: `320px`,
    },
    [BREAKPOINT.MOBILE_SMALL]: {
      value: 375,
      valuePx: `375px`,
    },
    [BREAKPOINT.MOBILE_MEDIUM]: {
      value: 414,
      valuePx: `414px`,
    },
    [BREAKPOINT.TABLET_PORTRAIT]: {
      value: 768,
      valuePx: `768px`,
    },
    [BREAKPOINT.TABLET_LANDSCAPE]: {
      value: 1024,
      valuePx: `1024px`,
    },
    [BREAKPOINT.DESKTOP_SMALL]: {
      value: 1280,
      valuePx: `1280px`,
    },
    [BREAKPOINT.DESKTOP_MEDIUM]: {
      value: 1440,
      valuePx: `1440px`,
    },
    [BREAKPOINT.DESKTOP_LARGE]: {
      value: 1600,
      valuePx: `1600px`,
    },
    [BREAKPOINT.DESKTOP_X_LARGE]: {
      value: 1920,
      valuePx: `1920px`,
    },
  },
  contentMargins: {
    [VIEWPORT.MOBILE]: {
      value: 24,
      valuePx: `24px`,
    },
    [VIEWPORT.TABLET]: {
      value: 40,
      valuePx: `40px`,
    },
    [VIEWPORT.DESKTOP]: {
      value: 40,
      valuePx: `40px`,
    },
  },
  contentWidth: {
    desktopMaxWidth: {
      value: 1200,
      valuePx: `1200px`,
    },
  },
};
