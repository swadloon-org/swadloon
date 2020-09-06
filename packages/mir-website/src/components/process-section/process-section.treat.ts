import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.x5}) 0`,
  backgroundColor: theme.colors.greyscale100,
}));
export const container = style((theme: DesignSystem) => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));
export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  margin: '0 auto',
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.x5})`,
}));
export const content = style((theme: DesignSystem) => ({
  position: 'relative',
  zIndex: 2,
  display: 'grid',
  gridColumn: '1',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  gridGap: `0 var(${theme.sizing.sizeCSSVarNames.x2})`,
  margin: `${theme.layout.contentMargins.TABLET.valuePx} 0`,
}));
export const tileProcess = style((theme: DesignSystem) => ({}));
export const blocNumber = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyContent: 'center',
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.x4})`,
}));
export const circle = style((theme: DesignSystem) => ({
  display: 'grid',
  textAlign: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',

  boxShadow: '3px 3px 12px rgba(217, 217, 217, 0.5)',
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.primary500,
}));
export const number = style((theme: DesignSystem) => ({
  alignSelf: 'center',
}));

export const blocContent = style((theme: DesignSystem) => ({
  textAlign: 'center',
  display: 'grid',
  gridGap: `var(${theme.sizing.sizeCSSVarNames.x3})`,
  gridColumn: '1',
}));

export const line = style((theme: DesignSystem) => ({
  position: 'absolute',
  zIndex: -1,
  border: `3px solid ${theme.colors.greyscale0}`,
  backgroundColor: theme.colors.greyscale0,
  width: '80%',
  top: '25px',
  left: '10%',
  selectors: {
    [`${blocContent} &`]: {
      alignSelf: 'center',
    },
  },
}));
