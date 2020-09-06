import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  width: '100%',
  padding: `${theme.sizing.sizes.x7} 0 ${theme.sizing.sizes.x7} 0`,
}));
export const container = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
}));
export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: `${theme.sizing.sizes.x4}`,
  margin: `${theme.sizing.sizes.x5} 0`,
  padding: `0 ${theme.layout.contentMargins.mobile.px}`,
  maxWidth: '100%',
  overflowX: 'auto',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      padding: `0 ${theme.layout.contentMargins.desktop.px}`,
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  margin: `0 0 ${theme.sizing.sizes.x5} 0`,
  maxWidth: '500px',
}));

export const paragraph = style((theme: DesignSystem) => ({
  textAlign: 'center',
  padding: `${theme.sizing.sizes.x3} 0 ${theme.sizing.sizes.x5} 0)`,
}));
