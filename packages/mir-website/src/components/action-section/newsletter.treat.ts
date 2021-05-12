import { DesignSystem } from '@newrade/core-design-system-old';
import { globalStyle, style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  paddingTop: `${theme.sizing.sizes.x6}`,
  paddingBottom: `${theme.sizing.sizes.x6}`,

  '@media': {
    [theme.layout.media.tablet]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      padding: `0 ${theme.layout.contentMargins.desktop.px}`,
    },
  },
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
      gridTemplateAreas:
        "'content content content content content content . form form form form .'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [theme.layout.media.desktop]: {
      maxWidth: '1200px',
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas:
        "'content content content content content content content . form form form form'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium.px})`]: {
      gridTemplateAreas: "'content content content content content . form form form . . .'",
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
// Container Form
//

export const containerForm = style((theme: DesignSystem) => ({
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridArea: 'form',
      height: 'fit-content',
      margin: 'auto 0',
      justifyContent: 'flex-start',
    },
    [theme.layout.media.desktop]: {
      gridArea: 'form',
      height: 'fit-content',
      margin: 'auto 0',
      justifyContent: 'flex-start',
    },
  },
}));

//
// Formulaire
//

export const formulaire = style((theme: DesignSystem) => ({
  display: 'grid',

  '@media': {
    [theme.layout.media.tabletPlus]: {},
  },
}));

//
// Subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  textAlign: 'center',
  color: theme.colors.greyscale0Reversed,

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
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      textAlign: 'left',
      marginTop: `${theme.sizing.sizes.x4}`,
      marginBottom: `${theme.sizing.sizes.x4}`,
    },
  },
}));

//
// Size of the input inside of the form - Deprecated
//

globalStyle(`${formulaire} input`, (theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x3}`,
}));
