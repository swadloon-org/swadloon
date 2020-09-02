import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  margin: `0 ${theme.layout.contentMargins.MOBILE.valuePx}`,
  padding: `var(${theme.sizing.sizeCSSVarNames.X7}) ${theme.layout.contentMargins.MOBILE.valuePx}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      margin: `0 ${theme.layout.contentMargins.TABLET.valuePx}`,
    },

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
}));

export const container = style((theme: DesignSystem) => ({}));

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      display: 'grid',
      gridColumn: '1',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: `0 var(${theme.sizing.sizeCSSVarNames.X4})`,
    },

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

export const accordions = style((theme: DesignSystem) => ({
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.X4})`,
}));

//
// TODO - Faire Marcher les classes accordions et tags pour ajuster le padding
//

export const tagsUnique = style((theme: DesignSystem) => ({
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.X3})`,
}));

export const title = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X6})`,
  maxWidth: '400px',
  textAlign: 'center',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
      maxWidth: '500px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
    },
  },
}));
