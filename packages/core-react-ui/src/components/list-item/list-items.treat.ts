import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    listStylePosition: 'inside', // no side effects from the added padding
    marginBlockStart: '0px',
    marginBlockEnd: '0px',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '0px',
  })),
};
