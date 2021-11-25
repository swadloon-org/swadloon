import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'inline',
    padding: '.2em .4em',
    margin: '0 1px',
    lineHeight: 0,
    borderRadius: 6,
    fontSize: '0.95em',
    color: 'rgb(160 58 160)',
    backgroundColor: 'rgb(243 141 243 / 20%)',
  })),
};
