import { DesignSystem } from '@newrade/core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  boxSizing: 'border-box',
}));

globalStyle(`${wrapper}  table`, (theme: DesignSystem) => ({
  minWidth: '100%',
  borderCollapse: 'collapse',
}));
globalStyle(`${wrapper}  thead`, (theme: DesignSystem) => ({
  display: 'table-header-group',
  verticalAlign: 'middle',
}));
globalStyle(`${wrapper}  tbody`, (theme: DesignSystem) => ({
  display: 'table-row-group',
  verticalAlign: 'middle',
}));
globalStyle(`${wrapper}  tr`, (theme: DesignSystem) => ({
  display: 'table-row',
  verticalAlign: 'inherit',
}));
globalStyle(`${wrapper}  th`, (theme: DesignSystem) => ({
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'rgba(107, 114, 128, var(--text-opacity))',
  textAlign: 'left',
}));
