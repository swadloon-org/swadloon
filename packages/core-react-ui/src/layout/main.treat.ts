import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: `100%`,
    backgroundColor: cssTheme.colors.colorIntents.background0,
  })),
  navbar: style(({ cssTheme, theme }: Theme) => ({
    paddingTop: `calc(${cssTheme.layout.var.navbarHeight} + 60px)`,
    paddingBottom: `80vh`, // needed to reach elements that are located at the bottom of the screen
  })),
  minHeight: style(({ cssTheme, theme }: Theme) => ({
    minHeight: `110vh`, // to prevent the main content from collapsing
  })),
};
