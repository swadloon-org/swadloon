import { style } from 'treat';

import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    alignItems: 'flex-start',
    paddingTop: cssTheme.sizing.var.x3,
  })),
  inputWrapper: style(({ theme, cssTheme }: Theme) => ({
    width: 'auto',
    minWidth: '272px',
    flex: 1,
  })),
  icon: style(({ theme, cssTheme }: Theme) => ({
    marginBottom: cssTheme.sizing.var.x2,
    padding: cssTheme.sizing.var.x3,

    boxShadow: cssTheme.effects.boxShadows.light,
  })),
  download: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gap: cssTheme.sizing.var.x3,
    padding: cssTheme.sizing.var.x3,

    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: cssTheme.colors.colorIntents.background1,
    border: `1px solid ${cssTheme.colors.colors.grey[100]}`,
    borderRadius: 4,
  })),
  usage: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gap: cssTheme.sizing.var.x3,
    padding: cssTheme.sizing.var.x3,

    backgroundColor: cssTheme.colors.colorIntents.background1,
    border: `1px solid ${cssTheme.colors.colors.grey[100]}`,
    borderRadius: 4,
    overflow: 'hidden',
  })),
  usageHeader: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: `calc(-1 * ${cssTheme.sizing.var.x3})`,
    marginBottom: cssTheme.sizing.var.x1,
    padding: cssTheme.sizing.var.x3,

    color: cssTheme.colors.colorIntents.primaryReversed,
    backgroundColor: cssTheme.colors.colors.grey[800],
  })),
  usageRow: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: cssTheme.sizing.var.x2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  })),
  iconsGrid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gap: cssTheme.sizing.var.x2,
    gridTemplateColumns: `repeat(auto-fit, 96px)`,
    gridAutoRows: '94px',
    alignContent: 'center',
    alignItems: 'stretch',
  })),
};
