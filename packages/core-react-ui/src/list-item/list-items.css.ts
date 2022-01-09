import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  listStylePosition: 'inside', // no side effects from the added padding
  marginBlockStart: '1.3em',
  marginBlockEnd: '1.3em',
  marginInlineStart: '1em',
  marginInlineEnd: '0px',
  paddingInlineStart: '0px',
  paddingInlineEnd: '0px',
});

export const ul = style({});

export const ol = style({});

globalStyle(`${styles.ul} li::after`, {
  content: 'inherit !important', // override capsize
});

globalStyle(`${styles.ul} li`, {
  listStyleType: '"• "', // using a unicode to fix chrome margin on the default marker
});

globalStyle(`${styles.ul} li[data-custom-bullet]::before`, {
  content: 'attr(data-custom-bullet) !important',
  marginRight: `1em !important`,
  borderRadius: '0ch',
  paddingInline: '0ch',
  marginInlineEnd: '1.3em',
});

globalStyle(`${styles.ul} li[data-custom-bullet=" "]::before`, {
  marginRight: `0.5em !important`,
});

globalStyle(`${styles.ol} li::after`, {
  content: 'inherit !important', // override capsize
});

globalStyle(`${styles.ol} li::before`, {
  content: '" " !important',
  // display: 'inline-block !important', // override capsize
  marginRight: `0.5em !important`,
  borderRadius: '0ch',
  paddingInline: '0ch',
  marginInlineEnd: '0.5em',
});
