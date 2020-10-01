import { DesignSystem } from 'core-design-system';
import { style } from 'treat';
import { theme } from '../design-system';
import { Design } from '../pages/design';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
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
  padding: `${theme.sizing.sizes.x7} 0 ${theme.sizing.sizes.x7} 0`,
  width: '100%',
}));

export const title = style((theme: DesignSystem) => ({
  justifySelf: 'center',
  textAlign: 'center',
  margin: `0 0 ${theme.sizing.sizes.x5} 0`,
  maxWidth: '500px',
}));

export const paragraph = style((theme: DesignSystem) => ({
  textAlign: 'center',
  padding: `${theme.sizing.sizes.x3} ${theme.layout.contentMargins.mobile.px} ${theme.sizing.sizes.x5} ${theme.layout.contentMargins.mobile.px}`,
  marginBottom: `${theme.sizing.sizes.x5}`,
}));

export const previewArticle = style((theme: DesignSystem) => ({
  position: 'relative',
  margin: `${theme.sizing.sizes.x4} 0 ${theme.sizing.sizes.x5} 0`,
}));

export const previewArticleImage = style((theme: DesignSystem) => ({
  border: 0,
}));

export const previewTitle = style((theme: DesignSystem) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
}));

export const headingPreview = style((theme: DesignSystem) => ({
  textAlign: 'center',
}));
