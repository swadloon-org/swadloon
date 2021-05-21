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
    // paddingRight: `calc(17px + ${cssTheme.sizing.var.x3})`, // to account for content scrolling
    borderBottom: `1px solid ${cssTheme.colors.colors.grey[300]}`,
  })),

  tableContent: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${cssTheme.layout.var.navbarHeight} - 7 * ${cssTheme.sizing.var.x5})`,
    // height: `calc(100vh - ${cssTheme.layout.var.navbarHeight} - 7 * ${cssTheme.sizing.var.x5})`,
    // overflowY: 'scroll',
  })),

  tableCell: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    padding: `0 0`,
  })),

  tableGrid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '24px',
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: 'repeat(auto-fit, 350px 350px 150px minmax(200px, 1fr) 150px 100px)',
        gap: '24px',
      },
    },
  })),

  tableRow: style(({ theme, cssTheme }: Theme) => ({
    height: 'fit-content',
    alignItems: 'center',
    padding: `${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3}`,
    selectors: {
      ['&:nth-child(2n)']: {
        backgroundColor: cssTheme.colors.colors.grey[25],
      },
    },
    '@media': {
      [cssTheme.layout.media.desktopSmall]: {
        padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x3}`,
      },
    },
  })),
  tableToolbar: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x3}`,
    borderTop: `1px solid ${cssTheme.colors.colors.grey[300]}`,
  })),
};
