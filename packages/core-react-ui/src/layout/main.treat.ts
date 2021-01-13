import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: `100%`,
  })),
  navbar: style(({ cssTheme, theme }: Theme) => ({
    paddingTop: `calc(${cssTheme.layout.var.navbarHeight} + 60px)`,
    // needed to scroll to bottom ids
    paddingBottom: `80vh`,
  })),
};
