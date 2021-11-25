import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    listStylePosition: 'inside', // no side effects from the added padding
    marginBlockStart: '1.3em',
    marginBlockEnd: '1.3em',
    marginInlineStart: '1.3em',
    marginInlineEnd: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
  })),
  ul: style(({ theme, cssTheme }: Theme) => ({})),
  ol: style(({ theme, cssTheme }: Theme) => ({})),
};

globalStyle(`${styles.ul} li::after`, ({ theme, cssTheme }: Theme) => ({
  content: 'inherit !important', // override capsize
}));

globalStyle(`${styles.ul} li`, ({ theme, cssTheme }: Theme) => ({
  listStyleType: '"• "', // using a unicode to fix chrome margin on the default marker
}));

globalStyle(`${styles.ul} li[data-custom-bullet]::before`, ({ theme, cssTheme }: Theme) => ({
  content: 'attr(data-custom-bullet) !important',
  marginRight: `1em !important`,
  borderRadius: '0ch',
  paddingInline: '0ch',
  marginInlineEnd: '1.3em',
}));

globalStyle(`${styles.ul} li[data-custom-bullet=" "]::before`, ({ theme, cssTheme }: Theme) => ({
  marginRight: `0.5em !important`,
}));

globalStyle(`${styles.ol} li::after`, ({ theme, cssTheme }: Theme) => ({
  content: 'inherit !important', // override capsize
}));

globalStyle(`${styles.ol} li::before`, ({ theme, cssTheme }: Theme) => ({
  content: '" " !important',
  // display: 'inline-block !important', // override capsize
  marginRight: `0.5em !important`,
  borderRadius: '0ch',
  paddingInline: '0ch',
  marginInlineEnd: '0.5em',
}));
