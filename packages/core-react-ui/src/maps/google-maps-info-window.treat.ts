import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    width: 200,
    height: 130,
    padding: `0.5em`,

    background: `white`,
  })),
};
