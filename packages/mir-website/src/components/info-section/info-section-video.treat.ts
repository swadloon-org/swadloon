import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  zIndex: 0,
  backgroundColor: theme.colors.greyscale0,
}));

//
// container wrapping the content and the containerTitle
//

export const container = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

//
// container of the Heading and Paragraph
//

export const containerTitle = style((theme: DesignSystem) => ({
  maxWidth: '500px',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: 2,
  paddingTop: theme.sizing.sizes.x6,
}));

//
// title of the section
//
export const title = style((theme: DesignSystem) => ({
  paddingBottom: theme.sizing.sizes.x4,
}));

//
// content of the video
//

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  paddingTop: theme.sizing.sizes.x5,
  paddingBottom: theme.sizing.sizes.x5,
  justifyContent: 'center',
  width: '100%',
}));

export const video = style((theme: DesignSystem) => ({
  width: '50%',
}));

//
// color background at 65% of the total height
//

export const blue = style((theme: DesignSystem) => ({
  position: 'absolute',
  backgroundColor: 'red',
  width: '100%',
  height: '65%',
  top: 0,
  zIndex: -1,
}));
