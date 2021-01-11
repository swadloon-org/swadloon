import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: cssTheme.layout.var.sidebarWidth,
    color: cssTheme.colors.colorIntents.primaryText,

    backgroundColor: getCSSColor({ h: 0, s: 0, l: 100, a: 100 }),
    boxShadow: `0px 2px 6px rgba(0, 0, 0, 0.25)`,

    zIndex: cssTheme.layout.zIndex.sideBar,
    overflowY: 'scroll',
    overflowX: 'hidden',
  })),
};
