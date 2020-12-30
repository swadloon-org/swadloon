import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    marginRight: 'auto',
    marginLeft: 'auto',
  })),
  main: style(({ cssTheme, theme }: Theme) => ({
    // padding: '1em',
    // maxWidth: `calc( 1440px - 225px - 300px - 40px * 2 )`,
    overflowX: `hidden`,
    // margin: `0 auto`,
    width: `100%`,
  })),
  sideMenu: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    display: 'flex',
    width: 300,
    flexDirection: 'column',
    alignItems: 'stretch',
    overflowY: 'scroll',
    maxHeight: '100vh',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    borderRight: '1px solid #e4e4e4',
  })),
  topMenu: style(({ cssTheme, theme }: Theme) => ({
    position: 'fixed',
    display: 'flex',
    width: `100vw`,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    borderBottom: '1px solid #e4e4e4',
  })),
  navItem: style(({ cssTheme, theme }: Theme) => ({
    display: 'flex',
    padding: `0.5em 1em`,
    fontWeight: 'bold',
  })),
};
