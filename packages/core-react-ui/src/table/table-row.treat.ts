import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  tr: style(({ theme, cssTheme }: Theme) => ({
    borderColor: cssTheme.colors?.colors.grey['100'],
    borderWidth: '0px',
    borderBottomWidth: '1px',

    boxSizing: 'border-box',
    borderStyle: 'solid',
  })),
};
