import { DesignSystem } from '@newrade/core-design-system';
import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

/**
 * Styles for kbd element
 */
globalStyle(`${wrapper} kbd`, ({ cssTheme, theme }: Theme) => ({
  display: 'inline-block',
  margin: '0 .1em',
  padding: '.1em .6em',
  fontFamily: 'Arial,"Helvetica Neue",Helvetica,sans-serif',
  fontSize: '11px',
  lineHeight: '1.5',
  color: '#424242',
  // color: cssTheme.colors.grey[1000],
  textShadow: '0 1px 0 #fff',
  backgroundColor: '#f3f3f3',
  border: '1px solid grey',
  borderRadius: '3px',
  boxShadow: '0 1px 1px rgba(12,13,14,0.15), inset 0 1px 0 0 #fff',
  overflowWrap: 'break-word',
}));

/**
 * Default styles for table elements
 */
globalStyle(`${wrapper} table`, ({ cssTheme, theme }: Theme) => ({
  display: 'inline-block',
  borderColor: '#424242',
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
  color: 'rgba(107, 114, 128, 0.4)',
  textAlign: 'left',
}));

globalStyle(`${wrapper}  pre`, (theme: DesignSystem) => ({
  backgroundColor: '#282a36',
  color: '#f8f8f2',
  border: 'none',
  borderRadius: '0.25em',
  height: 'auto',
  padding: '20px',
}));
