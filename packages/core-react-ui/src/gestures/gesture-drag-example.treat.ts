import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    padding: cssTheme.sizing.var.x6,
  })),
  box: style(({ theme, cssTheme }: Theme) => ({
    background: '#91c9f9',
    borderRadius: '16px',
    height: '80px',
    width: '80px',
    touchAction: 'none',
    cursor: 'grab',
    zIndex: 10000,
    position: 'relative',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
  })),
};
