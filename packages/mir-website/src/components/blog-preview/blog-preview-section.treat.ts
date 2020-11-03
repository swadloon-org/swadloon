import { DesignSystem } from '@newrade/core-design-system-old';
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
  display: 'flex',
  margin: `${theme.sizing.sizes.x5} 0`,
  padding: `0 ${theme.layout.contentMargins.mobile.px}`,
  maxWidth: '100%',
  overflowX: 'auto',
  '@media': {
    [theme.layout.media.tabletPlus]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  margin: `0 0 ${theme.sizing.sizes.x5} 0`,
  padding: `0 ${theme.layout.contentMargins.mobile.px}`,
  maxWidth: '500px',
}));

export const paragraph = style((theme: DesignSystem) => ({
  textAlign: 'center',
  padding: `${theme.sizing.sizes.x3} ${theme.layout.contentMargins.mobile.px} ${theme.sizing.sizes.x5}`,
}));
export const fullPreview = style((theme: DesignSystem) => ({}));
export const recentPreview = style((theme: DesignSystem) => ({}));
export const contentFeaturedPost = style((theme: DesignSystem) => ({}));
export const contentRecentPost = style((theme: DesignSystem) => ({
  display: 'grid',
  gridGap: `${theme.sizing.sizes.x3}`,
  gridTemplateColumns: '1fr 1fr 1fr',
}));
