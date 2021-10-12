import { style } from '@vanilla-extract/css';
import { Property } from 'csstype';
import { layoutCSS } from '../theme/default-theme.css';

export const wrapper = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: 'var(--mobile-gap)' as Property.Gap,
  alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
  justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
  '@media': {
    [layoutCSS.media.tablet]: {
      gap: 'var(--tablet-gap)' as Property.Gap,
      alignItems: `var(--tablet-align-items)` as Property.AlignContent,
      justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
    },
    [layoutCSS.media.desktopSmall]: {
      gap: 'var(--desktop-gap)' as Property.Gap,
      alignItems: `var(--desktop-align-items)` as Property.AlignContent,
      justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
    },
  },
});

export const wrap = style({
  display: 'flex',
  flexWrap: 'wrap',
});
