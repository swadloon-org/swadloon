import { Layout, VIEWPORT } from '@newrade/core-design-system';
import { defaultLayout } from '@newrade/core-react-ui';

export const layout: Layout = {
  ...defaultLayout,
  sidebarWidth: {
    [VIEWPORT.desktop]: 270,
    [VIEWPORT.tablet]: 270,
    [VIEWPORT.mobile]: 375,
  },
  navbarHeight: {
    [VIEWPORT.desktop]: 60,
    [VIEWPORT.tablet]: 60,
    [VIEWPORT.mobile]: 60,
  },
};
