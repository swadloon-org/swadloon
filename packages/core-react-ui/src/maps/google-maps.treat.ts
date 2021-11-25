import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({})),
  maps: style(({ theme, cssTheme }: Theme) => ({
    height: 430,
  })),
  mapsLoading: style(({ theme, cssTheme }: Theme) => ({
    background: 'grey',
  })),
};
