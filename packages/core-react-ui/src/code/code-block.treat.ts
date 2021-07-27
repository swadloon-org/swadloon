import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    maxWidth: `min(calc(100vw - 2 * ${cssTheme.layout.var.contentMargins}), var(--max-content-width))`,
  })),
  header: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    padding: `12px 16px`,

    fontFamily: 'monospace',
    color: 'black',
    backgroundColor: `#CCC0E9`,

    userSelect: 'text',
  })),
  langTag: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    right: 8,
    top: `100%`,
    padding: `4px 8px`,
    borderRadius: `0 0 4px 4px`,

    fontFamily: 'monospace',
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'black',
    backgroundColor: `#FF9EDA`,

    userSelect: 'text',
  })),
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
