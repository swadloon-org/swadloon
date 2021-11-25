import { style } from 'treat';

import { Theme } from '../design-system';
import { getCSSColor } from '../utilities/colors.utilities';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
  })),
  status: style(({ theme, cssTheme }: Theme) => ({
    justifySelf: 'flex-start',
    borderRadius: `6px`,
    backgroundColor: getCSSColor({
      ...theme.colors.colorIntents.primary,
      a: 5,
    }),
    padding: cssTheme.sizing.var.x3,
  })),
  statusOnline: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.successAction,
  })),
  statusOffline: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.warningAction,
  })),
  statusDot: style(({ theme, cssTheme }: Theme) => ({
    width: `10px`,
    height: `10px`,
    borderRadius: `50%`,
    backgroundColor: `currentColor`,
    boxShadow: `0 0 2px 0 currentColor`,
  })),
};
