import { DesignSystem } from 'core-design-system';

const getWrapperStyle = (theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `var(${theme.sizing.sizeCSSVarNames.X6}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
});
