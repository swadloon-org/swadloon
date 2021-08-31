import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    outline: 'none',
    cursor: 'pointer',
  })),
  noStyles: style(({ cssTheme, theme }: Theme) => ({
    color: 'currentColor',
    textDecoration: 'none',
    /**
     * States
     */
    ':hover': {
      color: 'currentColor',
    },
    ':active': {
      color: 'currentColor',
    },
    ':focus': {
      color: 'currentColor',
    },
  })),
};
