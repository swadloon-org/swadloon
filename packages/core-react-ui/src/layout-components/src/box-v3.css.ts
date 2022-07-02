import { style } from '@vanilla-extract/css';
import { Property } from 'csstype';

import { layoutCSS } from '../default-theme/src/theme.js';

export const wrapper = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
  justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
  justifySelf: 'var(--mobile-justify-self)' as Property.JustifySelf,
  '@media': {
    [layoutCSS.media.tablet]: {
      alignItems: `var(--tablet-align-items)` as Property.AlignContent,
      justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
      justifySelf: `var(--tablet-justify-self)` as Property.JustifySelf,
    },
    [layoutCSS.media.desktopSmall]: {
      alignItems: `var(--desktop-align-items)` as Property.AlignContent,
      justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
      justifySelf: `var(--desktop-justify-self)` as Property.JustifySelf,
    },
  },
});
