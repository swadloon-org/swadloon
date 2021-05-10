import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  preview: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    width: `100%`,
    border: `1px solid rgb(255 0 255 / 40%)`,
    borderRadius: 0,
    overflowX: 'auto',
    marginBottom: 16,
  })),
  error: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    userSelect: 'text',
    fontSize: `14px !important`,
    lineHeight: 1.5,
    overflow: `auto hidden`,
  })),
};
