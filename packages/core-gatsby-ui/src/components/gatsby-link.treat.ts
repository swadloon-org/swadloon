import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    color: 'currentColor',
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
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
