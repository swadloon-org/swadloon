import {
  BREAKPOINT,
  Breakpoints,
  Layout,
  MEDIA_FEATURE,
  MEDIA_OPERATOR,
  MEDIA_TYPE,
  PartialLayout,
  VIEWPORT,
} from '@newrade/core-design-system';
import { defautlLayoutZIndexes } from './default-layout-z-indexes';

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

export const defaultPartialLayout: PartialLayout = {
  breakpoints: defaultBreakpoints,
  contentMargins: {
    [VIEWPORT.mobile]: 24,
    [VIEWPORT.tablet]: 40,
    [VIEWPORT.desktop]: 40,
  },
  contentWidth: {
    desktopBlogMaxWidth: 800,
    desktopMaxWidth: 1200,
    desktopDocsMaxWidth: 800,
  },
  sidebarWidth: {
    [VIEWPORT.desktop]: 270,
    [VIEWPORT.tablet]: 270,
    [VIEWPORT.mobile]: 375,
  },
  navbarHeight: {
    [VIEWPORT.desktop]: 55,
    [VIEWPORT.tablet]: 55,
    [VIEWPORT.mobile]: 55,
  },
  asideWidth: 230,
  footerHeight: {
    [VIEWPORT.desktop]: 210,
    [VIEWPORT.tablet]: 210,
    [VIEWPORT.mobile]: 210,
  },
};

export const defaultLayout: Layout = {
  ...defaultPartialLayout,
  media: {
    mobile: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.maxWidth,
        value: defaultBreakpoints.tabletPortrait,
      },
    },
    mobileOnly: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        queryA: {
          feature: MEDIA_FEATURE.minWidth,
          value: 0,
        },
        operator: MEDIA_OPERATOR.and,
        queryB: {
          feature: MEDIA_FEATURE.maxWidth,
          value: defaultBreakpoints.tabletPortrait,
        },
      },
    },
    tablet: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.minWidth,
        value: defaultBreakpoints.tabletPortrait,
      },
    },
    tabletOnly: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        queryA: {
          feature: MEDIA_FEATURE.minWidth,
          value: defaultBreakpoints.tabletPortrait,
        },
        operator: MEDIA_OPERATOR.and,
        queryB: {
          feature: MEDIA_FEATURE.maxWidth,
          value: defaultBreakpoints.desktopSmall,
        },
      },
    },
    desktopSmall: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.minWidth,
        value: defaultBreakpoints.desktopSmall,
      },
    },
    desktopSmallOnly: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        queryA: {
          feature: MEDIA_FEATURE.minWidth,
          value: defaultBreakpoints.desktopSmall,
        },
        operator: MEDIA_OPERATOR.and,
        queryB: {
          feature: MEDIA_FEATURE.maxWidth,
          value: defaultBreakpoints.desktopMedium,
        },
      },
    },
    desktopMedium: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.minWidth,
        value: defaultBreakpoints.desktopMedium,
      },
    },
    desktopMediumOnly: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        queryA: {
          feature: MEDIA_FEATURE.minWidth,
          value: defaultBreakpoints.desktopMedium,
        },
        operator: MEDIA_OPERATOR.and,
        queryB: {
          feature: MEDIA_FEATURE.maxWidth,
          value: defaultBreakpoints.desktopLarge,
        },
      },
    },
    desktopLarge: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.minWidth,
        value: defaultBreakpoints.desktopLarge,
      },
    },
    desktopLargeOnly: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        queryA: {
          feature: MEDIA_FEATURE.minWidth,
          value: defaultBreakpoints.desktopLarge,
        },
        operator: MEDIA_OPERATOR.and,
        queryB: {
          feature: MEDIA_FEATURE.maxWidth,
          value: defaultBreakpoints.desktopXLarge,
        },
      },
    },
    desktopXLarge: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.minWidth,
        value: defaultBreakpoints.desktopXLarge,
      },
    },
    desktopXLargeOnly: {
      queryA: {
        type: MEDIA_TYPE.screen,
      },
      operator: MEDIA_OPERATOR.and,
      queryB: {
        feature: MEDIA_FEATURE.minWidth,
        value: defaultBreakpoints.desktopXLarge,
      },
    },
  },

  zIndex: defautlLayoutZIndexes,
};
