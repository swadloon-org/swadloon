import { Layout, VIEWPORT } from '@newrade/core-design-system';
import { defaultLayout } from '@newrade/core-react-ui/lib/default-theme';

export const layout: Layout = {
  ...defaultLayout,
  contentWidth: {
    ...defaultLayout.contentWidth,
    desktopMaxWidth: 1600,
  },
  contentMargins: {
    ...defaultLayout.contentMargins,
    tablet: 32,
    desktop: 48,
  },
  sidebarWidth: {
    [VIEWPORT.desktop]: 300,
    [VIEWPORT.tablet]: 300,
    [VIEWPORT.mobile]: 375,
  },
  navbarHeight: {
    [VIEWPORT.desktop]: 115,
    [VIEWPORT.tablet]: 68,
    [VIEWPORT.mobile]: 68,
  },
};
