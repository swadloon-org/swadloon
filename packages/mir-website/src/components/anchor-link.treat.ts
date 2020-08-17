import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

const baseLinkStyles = {
  cursor: 'pointer',
};

function pxToRem(px: number, baseUnitPx: number): string {
  return `${px / baseUnitPx}rem`;
}

export const wrapper = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0,
  textDecoration: `underline`,
  ...baseLinkStyles,
  ':visited': {
    color: theme.colors.greyscale0,
  },
}));
