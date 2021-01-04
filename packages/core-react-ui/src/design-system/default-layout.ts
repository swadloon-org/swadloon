import {
  BREAKPOINT,
  Breakpoints,
  Layout,
  MEDIA_FEATURE,
  MEDIA_OPERATOR,
  MEDIA_TYPE,
  VIEWPORT,
} from '@newrade/core-design-system';

const defaultBreakpoints: Breakpoints = {
  [BREAKPOINT.mobileXSmall]: 320,
  [BREAKPOINT.mobileSmall]: 375,
  [BREAKPOINT.mobileMedium]: 414,
  [BREAKPOINT.tabletPortrait]: 768,
  [BREAKPOINT.tabletLandscape]: 1024,
  [BREAKPOINT.desktopSmall]: 1280,
  [BREAKPOINT.desktopMedium]: 1440,
  [BREAKPOINT.desktopLarge]: 1600,
  [BREAKPOINT.desktopXLarge]: 1920,
};

export const defaultLayout: Layout = {
  breakpoints: defaultBreakpoints,
  media: {
    [VIEWPORT.mobile]: {
      queryA: {
        type: MEDIA_TYPE.screen,
        feature: MEDIA_FEATURE['max-width'],
        value: defaultBreakpoints.tabletPortrait,
      },
    },
    [VIEWPORT.tablet]: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        queryA: {
          type: MEDIA_TYPE.screen,
          feature: MEDIA_FEATURE['min-width'],
          value: defaultBreakpoints.tabletPortrait,
        },
        operator: MEDIA_OPERATOR.and,
        queryB: {
          type: MEDIA_TYPE.screen,
          feature: MEDIA_FEATURE['max-width'],
          value: defaultBreakpoints.desktopSmall,
        },
      },
    },
    tabletPlus: {
      queryA: {
        type: MEDIA_TYPE.screen,
        feature: MEDIA_FEATURE['max-width'],
        value: defaultBreakpoints.tabletPortrait,
      },
    },
    [VIEWPORT.desktop]: {
      queryA: {
        type: MEDIA_TYPE.screen,
        feature: MEDIA_FEATURE['max-width'],
        value: defaultBreakpoints.tabletPortrait,
      },
    },

    // // [VIEWPORT.mobile]: `screen and (max-width: ${defaultBreakpoints.tabletPortrait.px})`,
    // [VIEWPORT.tablet]: `screen and (min-width: ${defaultBreakpoints.tabletPortrait.px}) and (max-width: ${defaultBreakpoints.desktopSmall.px})`,
    // tabletPlus: `screen and (min-width: ${defaultBreakpoints.tabletPortrait.px}) `,
    // [VIEWPORT.desktop]: `screen and (min-width: ${defaultBreakpoints.desktopSmall.px})`,
  },
  contentMargins: {
    [VIEWPORT.mobile]: 24,
    [VIEWPORT.tablet]: 40,
    [VIEWPORT.desktop]: 40,
  },
  contentWidth: {
    desktopMaxWidth: 1200,
  },
  sidebarWidth: {
    [VIEWPORT.desktop]: 270,
    [VIEWPORT.tablet]: 270,
    [VIEWPORT.mobile]: 375,
  },
  topbarHeight: {
    [VIEWPORT.desktop]: 60,
    [VIEWPORT.tablet]: 60,
    [VIEWPORT.mobile]: 60,
  },
  asideWidth: 210,
  footerHeight: {
    [VIEWPORT.desktop]: 210,
    [VIEWPORT.tablet]: 210,
    [VIEWPORT.mobile]: 210,
  },
};
