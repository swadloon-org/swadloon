import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

const contentMargin = `2em`;

export const styles = {
  preview: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    width: `100%`,
    border: `1px solid rgb(255 0 255 / 40%)`,
    borderRadius: 0,
    overflowX: 'auto',
  })),
  editor: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    userSelect: 'text',
    fontSize: `14px !important`,
    lineHeight: 1.5,
    borderRadius: `6px`,
  })),
  error: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    userSelect: 'text',
    fontSize: `14px !important`,
    lineHeight: 1.5,
    overflow: `auto hidden`,
  })),
  pre: style(({ theme, cssTheme }: Theme) => ({
    fontSize: `14px !important`,
    marginBottom: contentMargin,
    maxWidth: '100% !important',
    overflowX: 'auto !important' as any,
    padding: 16,

    lineHeight: 1.5,
    borderRadius: `6px`,
    userSelect: 'text',
  })),
  /**
   * For react-simple-code-editor
   */
  textAreaEditor: style(({ theme, cssTheme }: Theme) => ({
    userSelect: `text !important` as any,
    outline: `none !important` as any,
    lineHeight: 1.5,

    // breaks the editor
    // whiteSpace: `pre !important` as any,
    // overflowWrap: `inherit !important` as any,
  })),
  preEditor: style(({ theme, cssTheme }: Theme) => ({
    userSelect: `text`,
    outline: `none`,
    lineHeight: 1.5,

    // breaks the editor
    // whiteSpace: `pre !important` as any,
    // overflowWrap: `inherit !important` as any,
  })),
};
