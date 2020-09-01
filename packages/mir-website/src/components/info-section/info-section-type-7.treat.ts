import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridColumnGap: `var(${theme.sizing.sizeCSSVarNames.X2})`,
    },
    // [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
    //   maxWidth: '2000px',
    // },
  },
}));
