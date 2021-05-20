import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),
  table: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    border: `1px solid ${cssTheme.colors.colors.grey[300]}`,
  })),

  tableHeader: style(({ theme, cssTheme }: Theme) => ({
    padding: cssTheme.sizing.var.x3,
    borderBottom: `1px solid ${cssTheme.colors.colors.grey[300]}`,
  })),

  tableRow: style(({ theme, cssTheme }: Theme) => ({
    height: `calc(100vh - ${cssTheme.layout.var.navbarHeight} - 7 * ${cssTheme.sizing.var.x5})`,
    overflowY: 'scroll',
  })),

  tableCell: style(({ theme, cssTheme }: Theme) => ({
    padding: cssTheme.sizing.var.x3,
  })),

  tableGrid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px 200px 200px',
    gap: '20px',
  })),

  tableToolbar: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x3}`,
    borderTop: `1px solid ${cssTheme.colors.colors.grey[300]}`,
  })),
};
