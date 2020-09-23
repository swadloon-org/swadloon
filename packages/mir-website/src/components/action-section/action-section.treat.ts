import { createShadow, DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  paddingTop: `${theme.sizing.sizes.x6}`,
  paddingBottom: `${theme.sizing.sizes.x7}`,

  '@media': {
    [theme.layout.media.tablet]: {
      padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.desktop.px}`,
    },
  },
}));

//
// Default
//

export const Default = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale100,
  color: theme.colors.greyscale1000,
  boxShadow: createShadow({
    ...theme.effects.shadows.medium,
  }).css,
  zIndex: 2,
}));

//
// Reversed
//

export const reversed = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

//
// Container
//

export const container = style((theme: DesignSystem) => ({
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,

  '@media': {
    [theme.layout.media.tablet]: {
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content content . btn btn btn btn '",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [theme.layout.media.desktop]: {
      maxWidth: '1200px',
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content . btn btn btn . .'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium.px})`]: {
      gridTemplateAreas: "'content content content content content content . btn btn btn . .'",
    },
  },
}));

//
// Content
//

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridArea: 'content',
    },
  },
}));

//
// Container Button
//

export const buttonContainer = style((theme: DesignSystem) => ({
  display: 'flex',
  '@media': {
    [theme.layout.media.tablet]: {
      gridArea: 'btn',
      display: 'grid',
    },
    [theme.layout.media.desktop]: {
      gridArea: 'btn',
      display: 'grid',
    },
  },
}));

//
// button
//

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  margin: '0 auto',
  '@media': {
    [theme.layout.media.tablet]: {
      alignSelf: 'flex-end',
      width: '100%',
    },
    [theme.layout.media.desktop]: {
      alignSelf: 'flex-end',
      width: '100%',
    },
  },
}));

//
// Subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  textAlign: 'center',
  color: 'currentColor',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      textAlign: 'left',
    },
  },
}));

//
// Title
//

export const title = style((theme: DesignSystem) => ({
  marginTop: `${theme.sizing.sizes.x5}`,
  marginBottom: `${theme.sizing.sizes.x5}`,
  textAlign: 'center',
  color: 'currentColor',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '500px',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      maxWidth: '700px',
      textAlign: 'left',
      marginTop: `${theme.sizing.sizes.x4}`,
      marginBottom: `0`,
    },
  },
}));
