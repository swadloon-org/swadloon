import { createVar, style } from '@vanilla-extract/css';

import { layoutCSS, layoutVars } from '../theme';

export const wrapper = style({
  position: 'relative',
  display: 'grid',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  gridTemplateColumns: `${layoutVars.contentMargins.mobile}px 1fr ${layoutVars.contentMargins.mobile}px`,
  '@media': {
    [layoutCSS.media.tablet]: {
      gridTemplateColumns: `${layoutVars.contentMargins.tablet}px 1fr ${layoutVars.contentMargins.tablet}px`,
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: `${layoutVars.contentMargins.desktop}px 1fr ${layoutVars.contentMargins.desktop}px`,
    },
  },
});

const contentMaxWidth = createVar();

export const content = style({
  vars: {
    [contentMaxWidth]: `calc(100vw - 2 * ${layoutVars.var.contentMargins})`,
  },
  width: '100%',
  justifySelf: 'center',
  overflowX: 'visible',

  maxWidth: `min(var(--max-content-width, ${contentMaxWidth}), ${layoutVars.var.contentWidth.desktopMaxWidth})`,
});
