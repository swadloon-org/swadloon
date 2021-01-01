import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    position: 'sticky',
    top: 0,
    zIndex: 100,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: `0 20px`,
    height: `55px`,

    backgroundColor: 'white',

    color: 'black',
  })),

  container: style(({ cssTheme, theme }: Theme) => ({
    maxWidth: '1200px',
  })),

  link: style(({ cssTheme, theme }: Theme) => ({
    width: 'fit-content',
  })),

  menuWrapper: style(({ cssTheme, theme }: Theme) => ({
    width: 'fit-content',
  })),
};
