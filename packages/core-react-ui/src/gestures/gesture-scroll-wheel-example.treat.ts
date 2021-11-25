import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    padding: cssTheme.sizing.var.x6,
  })),
  box: style(({ theme, cssTheme }: Theme) => ({
    transition: 'transform 350ms ease-in-out',
  })),
  boxDiv: style(({ theme, cssTheme }: Theme) => ({
    fontSize: '10px',
    color: 'white',
    minHeight: '80px',
    width: '80px',
    background: '#91c9f9',
    margin: 'cssTheme.sizing.var.x6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  })),
};
