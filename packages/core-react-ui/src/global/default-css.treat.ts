import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
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
// globalStyle(`${wrapper} table`, ({ cssTheme, theme }: Theme) => ({
//   display: 'inline-block',
//   borderColor: '#424242',
// }));

// globalStyle(`${wrapper} table`, (theme: Theme) => ({
//   minWidth: '100%',
//   borderCollapse: 'collapse',
// }));

// globalStyle(`${wrapper} thead`, (theme: Theme) => ({
//   display: 'table-header-group',
//   verticalAlign: 'middle',
// }));

// globalStyle(`${wrapper} tbody`, (theme: Theme) => ({
//   display: 'table-row-group',
//   verticalAlign: 'middle',
// }));

// globalStyle(`${wrapper} tr`, (theme: Theme) => ({
//   display: 'table-row',
//   verticalAlign: 'inherit',
// }));

// globalStyle(`${wrapper} th`, (theme: Theme) => ({
//   letterSpacing: '0.05em',
//   textTransform: 'uppercase',
//   color: 'rgba(107, 114, 128, 0.4)',
//   textAlign: 'left',
// }));

globalStyle(`${wrapper} pre`, ({ theme, cssTheme }: Theme) => ({
  backgroundColor: '#282a36',
  color: cssTheme.colors?.colors.grey['0-reversed'],
  border: 'none',
  borderRadius: '0.25em',
  height: 'auto',
  padding: '1em',
}));
