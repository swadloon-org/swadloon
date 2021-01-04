import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`${wrapper}, html`, ({ theme, cssTheme }: Theme) => ({
  [cssTheme.sizing.varNames.x0]: cssTheme.sizing.sizes.mobile.x0,
  [cssTheme.sizing.varNames.x1]: cssTheme.sizing.sizes.mobile.x1,
  [cssTheme.sizing.varNames.x2]: cssTheme.sizing.sizes.mobile.x2,
  [cssTheme.sizing.varNames.x3]: cssTheme.sizing.sizes.mobile.x3,
  [cssTheme.sizing.varNames.x4]: cssTheme.sizing.sizes.mobile.x4,
  [cssTheme.sizing.varNames.x5]: cssTheme.sizing.sizes.mobile.x5,
  [cssTheme.sizing.varNames.x6]: cssTheme.sizing.sizes.mobile.x6,
  [cssTheme.sizing.varNames.x7]: cssTheme.sizing.sizes.mobile.x7,
  [cssTheme.sizing.varNames.x8]: cssTheme.sizing.sizes.mobile.x8,
  [cssTheme.sizing.varNames.x9]: cssTheme.sizing.sizes.mobile.x9,
  [cssTheme.sizing.varNames.x10]: cssTheme.sizing.sizes.mobile.x10,
  // '@media': {
  //   [cssTheme.layout.varNames.tablet]: {
  //     [cssTheme.sizing.varNames.x1]: cssTheme.sizing.varNames.tablet.x1.valuePx,
  //     [cssTheme.sizing.varNames.x2]: cssTheme.sizing.varNames.tablet.x2.valuePx,
  //     [cssTheme.sizing.varNames.x3]: cssTheme.sizing.varNames.tablet.x3.valuePx,
  //     [cssTheme.sizing.varNames.x4]: cssTheme.sizing.varNames.tablet.x4.valuePx,
  //     [cssTheme.sizing.varNames.x5]: cssTheme.sizing.varNames.tablet.x5.valuePx,
  //     [cssTheme.sizing.varNames.x6]: cssTheme.sizing.varNames.tablet.x6.valuePx,
  //     [cssTheme.sizing.varNames.x7]: cssTheme.sizing.varNames.tablet.x7.valuePx,
  //     [cssTheme.sizing.varNames.x8]: cssTheme.sizing.varNames.tablet.x8.valuePx,
  //     [cssTheme.sizing.varNames.x9]: cssTheme.sizing.varNames.tablet.x9.valuePx,
  //     [cssTheme.sizing.varNames.x10]: cssTheme.sizing.varNames.tablet.x10.valuePx,
  //   },
  //   [cssTheme.layout.varNames.desktop]: {
  //     [cssTheme.sizing.varNames.x1]: cssTheme.sizing.varNames.desktop.x1.valuePx,
  //     [cssTheme.sizing.varNames.x2]: cssTheme.sizing.varNames.desktop.x2.valuePx,
  //     [cssTheme.sizing.varNames.x3]: cssTheme.sizing.varNames.desktop.x3.valuePx,
  //     [cssTheme.sizing.varNames.x4]: cssTheme.sizing.varNames.desktop.x4.valuePx,
  //     [cssTheme.sizing.varNames.x5]: cssTheme.sizing.varNames.desktop.x5.valuePx,
  //     [cssTheme.sizing.varNames.x6]: cssTheme.sizing.varNames.desktop.x6.valuePx,
  //     [cssTheme.sizing.varNames.x7]: cssTheme.sizing.varNames.desktop.x7.valuePx,
  //     [cssTheme.sizing.varNames.x8]: cssTheme.sizing.varNames.desktop.x8.valuePx,
  //     [cssTheme.sizing.varNames.x9]: cssTheme.sizing.varNames.desktop.x9.valuePx,
  //     [cssTheme.sizing.varNames.x10]: cssTheme.sizing.varNames.desktop.x10.valuePx,
  //   },
  // },
}));
