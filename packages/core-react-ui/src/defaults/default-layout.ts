import { Layout, BREAKPOINT, Breakpoints, VIEWPORT } from '@newrade/core-design-system';

const breakpoints: Breakpoints = {
  [BREAKPOINT.mobileXSmall]: {
    value: 320,
    px: `320px`,
  },
  [BREAKPOINT.mobileSmall]: {
    value: 375,
    px: `375px`,
  },
  [BREAKPOINT.mobileMedium]: {
    value: 414,
    px: `414px`,
  },
  [BREAKPOINT.tabletPortrait]: {
    value: 768,
    px: `768px`,
  },
  [BREAKPOINT.tabletLandscape]: {
    value: 1024,
    px: `1024px`,
  },
  [BREAKPOINT.desktopSmall]: {
    value: 1280,
    px: `1280px`,
  },
  [BREAKPOINT.desktopMedium]: {
    value: 1440,
    px: `1440px`,
  },
  [BREAKPOINT.desktopLarge]: {
    value: 1600,
    px: `1600px`,
  },
  [BREAKPOINT.desktopXLarge]: {
    value: 1920,
    px: `1920px`,
  },
};

export const DEFAULT_LAYOUT: Layout = {
  breakpoints,
  media: {
    [VIEWPORT.mobile]: `screen and (max-width: ${breakpoints.tabletPortrait.px})`,
    [VIEWPORT.tablet]: `screen and (min-width: ${breakpoints.tabletPortrait.px}) and (max-width: ${breakpoints.desktopSmall.px})`,
    tabletPlus: `screen and (min-width: ${breakpoints.tabletPortrait.px}) `,
    [VIEWPORT.desktop]: `screen and (min-width: ${breakpoints.desktopSmall.px})`,
  },
  contentMargins: {
    [VIEWPORT.mobile]: {
      value: 24,
      px: `24px`,
    },
    [VIEWPORT.tablet]: {
      value: 40,
      px: `40px`,
    },
    [VIEWPORT.desktop]: {
      value: 40,
      px: `40px`,
    },
  },
  contentWidth: {
    desktopMaxWidth: {
      value: 1200,
      px: `1200px`,
    },
  },
};
