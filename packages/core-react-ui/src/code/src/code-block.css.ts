import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, layoutVars, typographyVars } from '../../theme';

export const wrapper = style({
  position: 'relative',
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  maxWidth: `min(calc(100vw - 2 * ${layoutVars.var.contentMargins}), var(--max-content-width))`,
  maxHeight: `max(60vh, 400px)`,
});

export const header = style({
  position: 'relative',
  padding: `12px 16px`,

  fontSize: typographyVars.labels.mobile.small.capsize.fontSize,
  '@media': {
    [layoutCSS.media.tablet]: {
      fontSize: typographyVars.labels.tablet.small.capsize.fontSize,
    },
    [layoutCSS.media.desktopSmall]: {
      fontSize: typographyVars.labels.desktop.small.capsize.fontSize,
    },
  },
  fontFamily: typographyVars.fonts.monospace,
  color: colorVars.colors.code.editorHeaderForeground,
  backgroundColor: colorVars.colors.code.editorHeaderBackground,

  userSelect: 'text',
});

export const langTag = style({
  position: 'absolute',
  right: 8,
  top: `100%`,
  padding: `4px 8px`,
  borderRadius: `0 0 4px 4px`,

  fontFamily: typographyVars.fonts.monospace,
  textTransform: 'uppercase',
  fontSize: 12,
  color: colorVars.colors.code.editorHeaderTagForeground,
  backgroundColor: colorVars.colors.code.editorHeaderTagBackground,

  userSelect: 'text',
});

export const preview = style({
  padding: 16,
  width: `100%`,
  border: `1px solid rgb(255 0 255 / 40%)`,
  borderRadius: 0,
  overflowX: 'auto',
  marginBottom: 16,
});

export const error = style({
  padding: 16,
  userSelect: 'text',
  fontSize: `14px !important`,
  lineHeight: 1.5,
  overflow: `auto hidden`,
});
