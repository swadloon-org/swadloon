import { style } from 'treat';
import { Theme } from '../design-system';

const contentMargin = `2em`;

export const styles = {
  editor: style(({ theme, cssTheme }: Theme) => ({
    padding: `16px`,
    userSelect: 'text',
    fontSize: `14px !important`,
    lineHeight: 1.5,
    borderRadius: `6px`,
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
