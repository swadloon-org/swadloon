import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    padding: cssTheme.sizing.var.x6,
  })),
  box: style(({ theme, cssTheme }: Theme) => ({
    background: 'rgba(134,180,255,0.1)',
    height: '80px',
    width: '80px',
    position: 'relative',
    borderRadius: '4px',
    zIndex: 10,
  })),
  boxScrolling: style(({ theme, cssTheme }: Theme) => ({
    background: '#91c9f9',
    borderRadius: '4px',
    height: '80px',
    width: '80px',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    opacity: 0.8,
  })),
};
