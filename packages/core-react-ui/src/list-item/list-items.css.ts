import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  listStylePosition: 'inside', // no side effects from the added padding
  marginLeft: '1em',
  marginRight: '1em',
  marginTop: '0.5em',
  marginBottom: '0.5em',
  paddingLeft: '0px',
  paddingRight: '0px',
});

export const ul = style({});

export const ol = style({});

globalStyle(`${ul} li`, {
  listStyleType: '"• "', // using a unicode to fix chrome margin on the default marker
});

globalStyle(`${ol} li::before`, {
  content: '" "',
  marginRight: '0.5em',
  marginLeft: '0',

  borderRadius: '0ch',
  paddingInline: '0ch',
});

/**
 *
 * Custom bullet styles
 *
 */

globalStyle(`${ul} li[data-custom-bullet="none"]`, {
  marginBottom: 'initial',
});

globalStyle(`${ul} li[data-custom-bullet]::before`, {
  content: 'attr(data-custom-bullet)',
  marginRight: '1em',
  marginLeft: '0',

  borderRadius: '0ch',
  paddingInline: '0ch',
});

globalStyle(`${ul} li[data-custom-bullet="custom-icon"]::before`, {
  content: '',
  marginRight: '0em',
  marginLeft: '0',
});

globalStyle(`${ul} li[data-custom-bullet="none"]::before`, {
  content: '',
  marginRight: '0.5em',
  marginLeft: '0',
});
