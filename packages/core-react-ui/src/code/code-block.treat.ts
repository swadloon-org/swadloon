import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

const contentMargin = `2em`;

export const styles = {
  preview: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    width: `100%`,
    border: `1px solid ${cssTheme.colors.colors.grey[50]}`,
    borderRadius: 4,
  })),
  editor: style(({ theme, cssTheme }: Theme) => ({
    padding: 16,
    // maxWidth: '100% !important',
    // marginTop: '1em !important',
    // marginBottom: contentMargin,
    // overflowX: 'auto !important' as any,
    // borderRadius: '6px !important',
    fontSize: `14px !important`,
    lineHeight: 1.5,
    borderRadius: `6px`,
    // overflow: 'auto !important' as any,
    // lineHeight: '1.45 !important',
    // backgroundColor: '#f2f5f8 !important',
  })),
  pre: style(({ theme, cssTheme }: Theme) => ({
    fontSize: `14px !important`,
    borderRadius: `6px`,
    lineHeight: 1.5,
    padding: 16,
  })),
  textArea: style(({ theme, cssTheme }: Theme) => ({
    outline: `none`,
    lineHeight: 1.5,
  })),
};
