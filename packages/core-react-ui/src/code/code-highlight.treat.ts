import { style } from 'treat';
import { Theme } from '../design-system';

const contentMargin = `2em`;

export const styles = {
  pre: style(({ theme, cssTheme }: Theme) => ({
    fontSize: `14px !important`,
    marginBottom: contentMargin,
    maxWidth: '100% !important',
    overflowX: 'auto !important' as any,
    padding: `16px`,
    whiteSpace: `pre`,

    lineHeight: 1.5,
    borderRadius: `6px`,
    userSelect: 'text',
  })),
};
