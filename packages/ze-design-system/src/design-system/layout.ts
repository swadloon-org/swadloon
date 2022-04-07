import { Layout, VIEWPORT } from '@newrade/core-design-system';
import { defaultLayout } from '@newrade/core-react-ui/default-theme';

export const layout: Layout = {
  ...defaultLayout,
  contentWidth: {
    ...defaultLayout.contentWidth,
    desktopMaxWidth: 1600,
  },
  contentMargins: {
    mobile: 20,
    tablet: 32,
    desktop: 32,
  },
  sidebarWidth: {
    [VIEWPORT.desktop]: 300,
    [VIEWPORT.tablet]: 300,
    [VIEWPORT.mobile]: 375,
  },
  navbarHeight: {
    [VIEWPORT.desktop]: 48,
    [VIEWPORT.tablet]: 56,
    [VIEWPORT.mobile]: 64,
  },
};
