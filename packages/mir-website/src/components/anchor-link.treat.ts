import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

const baseLinkStyles = {
  cursor: 'pointer',
};

function pxToRem(px: number, baseUnitPx: number): string {
  return `${px / baseUnitPx}rem`;
}

export const wrapper = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale[0],
  textDecoration: 'underline',
  ...baseLinkStyles,
  '--my-var': `eval(1vw + 42px)`,
  ':visited': {
    color: theme.colors.greyscale[0],
  },
  '@media': {
    [theme.breakpoints.mobileSmall]: {
      fontSize: `var(--my-var)`,
    },
  },
}));

export const child = style((theme: DesignSystem) => ({
  selectors: {
    [`${wrapper} &`]: {
      backgroundColor: 'aqua',
    },
  },
}));
