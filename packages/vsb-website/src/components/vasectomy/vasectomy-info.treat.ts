import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.breakpoints.tabletPortrait]: {},
    [theme.layout.breakpoints.desktopSmall]: {},
  },
}));
