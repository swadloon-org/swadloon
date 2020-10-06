import { DesignSystem } from '@newrade/core-design-system-old';

const getWrapperStyle = (theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
});
