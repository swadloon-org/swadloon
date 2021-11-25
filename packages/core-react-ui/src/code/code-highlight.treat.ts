import { style } from 'treat';

import { Theme } from '../design-system';

export const styles = {
  pre: style(({ theme, cssTheme }: Theme) => ({
    fontSize: `14px !important`,
    maxWidth: '100% !important',
    overflowX: 'auto !important' as any,
    padding: `16px`,
    whiteSpace: `pre`,

    lineHeight: 1.5,
    borderRadius: `6px`,
    userSelect: 'text',
  })),
  tokenLine: style(({ theme, cssTheme }: Theme) => ({
    width: 'fit-content',
    paddingRight: 16,
  })),
};
