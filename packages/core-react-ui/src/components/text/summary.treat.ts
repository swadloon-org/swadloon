import CaretDown from '!!file-loader!@newrade/core-react-ui/assets/caret-down-outline.svg';
import { globalStyle, style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSColor } from '../../utilities/colors.utilities';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'flex',
    position: 'relative',
    userSelect: 'none',

    listStyleImage: 'none',
    padding: '1em 0',
    paddingRight: '2em',

    cursor: 'pointer',
    ':hover': {
      backgroundColor: getCSSColor({ h: 222, s: 0, l: 10, a: 10 }),
    },
    ':focus': {
      outline: 'none',
    },

    '::before': {
      content: `url(${CaretDown})`,
      position: 'absolute',
      right: `1em`,
      width: '16px',
      height: '16px',
      top: `calc(50% - 0.5em)`,
      lineHeight: '1em',
      transform: 'rotate(0deg)',
      transition: 'transform 0.2s ease-in-out',
    },

    selectors: {
      ['[open] > &::before']: {
        transform: 'rotate(180deg)',
      },
    },
  })),
};

// hide the default arrow
globalStyle(`${styles.wrapper}::-webkit-details-marker`, {
  display: 'none',
  background: 'none',
  color: 'transparent',
});
