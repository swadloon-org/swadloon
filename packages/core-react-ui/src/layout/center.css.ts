import { createVar, style } from '@vanilla-extract/css';

import { layoutCSS, layoutVars } from '../theme';

export const wrapper = style({
  position: 'relative',
  display: 'grid',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  gridTemplateColumns: `${layoutVars.contentMargins.mobile} 1fr ${layoutVars.contentMargins.mobile}`,
  '@media': {
    [layoutCSS.media.tablet]: {
      gridTemplateColumns: `${layoutVars.contentMargins.tablet} 1fr ${layoutVars.contentMargins.tablet}`,
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: `${layoutVars.contentMargins.desktop} 1fr ${layoutVars.contentMargins.desktop}`,
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
