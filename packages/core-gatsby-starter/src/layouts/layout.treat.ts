import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  sideMenu: style(({ cssTheme, theme }: Theme) => ({
    display: 'none',
    position: 'fixed',
    width: 300,
    flexDirection: 'column',
    alignItems: 'stretch',
    overflowY: 'scroll',
    maxHeight: '100vh',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    borderRight: '1px solid #e4e4e4',
    '@media': {
      [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium}px)`]: {
        display: 'flex',
      },
    },
  })),
  navItem: style(({ cssTheme, theme }: Theme) => ({
    display: 'flex',
    padding: `0.5em 1em`,
    fontWeight: 'bold',
  })),
};
