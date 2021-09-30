import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
  })),
  preventOverflowX: style(({ cssTheme, theme }: Theme) => ({
    overflowX: 'hidden', // prevent any child from breaking the layout
  })),
};
