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
  '@media': {
    [cssTheme.layout.media.tablet]: {
      [cssTheme.sizing.varNames.x0]: cssTheme.sizing.sizes.tablet.x0,
      [cssTheme.sizing.varNames.x1]: cssTheme.sizing.sizes.tablet.x1,
      [cssTheme.sizing.varNames.x2]: cssTheme.sizing.sizes.tablet.x2,
      [cssTheme.sizing.varNames.x3]: cssTheme.sizing.sizes.tablet.x3,
      [cssTheme.sizing.varNames.x4]: cssTheme.sizing.sizes.tablet.x4,
      [cssTheme.sizing.varNames.x5]: cssTheme.sizing.sizes.tablet.x5,
      [cssTheme.sizing.varNames.x6]: cssTheme.sizing.sizes.tablet.x6,
      [cssTheme.sizing.varNames.x7]: cssTheme.sizing.sizes.tablet.x7,
      [cssTheme.sizing.varNames.x8]: cssTheme.sizing.sizes.tablet.x8,
      [cssTheme.sizing.varNames.x9]: cssTheme.sizing.sizes.tablet.x9,
      [cssTheme.sizing.varNames.x10]: cssTheme.sizing.sizes.tablet.x10,
    },
    [cssTheme.layout.media.desktopSmall]: {
      [cssTheme.sizing.varNames.x0]: cssTheme.sizing.sizes.desktop.x0,
      [cssTheme.sizing.varNames.x1]: cssTheme.sizing.sizes.desktop.x1,
      [cssTheme.sizing.varNames.x2]: cssTheme.sizing.sizes.desktop.x2,
      [cssTheme.sizing.varNames.x3]: cssTheme.sizing.sizes.desktop.x3,
      [cssTheme.sizing.varNames.x4]: cssTheme.sizing.sizes.desktop.x4,
      [cssTheme.sizing.varNames.x5]: cssTheme.sizing.sizes.desktop.x5,
      [cssTheme.sizing.varNames.x6]: cssTheme.sizing.sizes.desktop.x6,
      [cssTheme.sizing.varNames.x7]: cssTheme.sizing.sizes.desktop.x7,
      [cssTheme.sizing.varNames.x8]: cssTheme.sizing.sizes.desktop.x8,
      [cssTheme.sizing.varNames.x9]: cssTheme.sizing.sizes.desktop.x9,
      [cssTheme.sizing.varNames.x10]: cssTheme.sizing.sizes.desktop.x10,
    },
  },

  // TODO fonts vars
  // [cssTheme.typography.fonts.varNames]: cssTheme.sizing.sizes.mobile.x0,
}));
