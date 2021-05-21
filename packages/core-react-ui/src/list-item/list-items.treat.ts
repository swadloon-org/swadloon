import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    listStylePosition: 'inside', // no side effects from the added padding
    marginBlockStart: '0px',
    marginBlockEnd: '0px',
    marginInlineStart: '0.5em',
    marginInlineEnd: '0px',
    paddingInlineStart: '0px',
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

globalStyle(`${styles.ul} li::before`, ({ theme, cssTheme }: Theme) => ({
  content: '" " !important',
  display: 'inline-block !important', // override capsize
  marginRight: `0.5em !important`,
  borderRadius: '0ch',
  paddingInline: '0ch',
  marginInlineEnd: '0.5em',
}));

globalStyle(`${styles.ol} li::after`, ({ theme, cssTheme }: Theme) => ({
  content: 'inherit !important', // override capsize
}));

globalStyle(`${styles.ol} li::before`, ({ theme, cssTheme }: Theme) => ({
  content: '" " !important',
  display: 'inline-block !important', // override capsize
  marginRight: `0.5em !important`,
  borderRadius: '0ch',
  paddingInline: '0ch',
  marginInlineEnd: '0.5em',
}));
