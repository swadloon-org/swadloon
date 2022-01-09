import { style } from '@vanilla-extract/css';
import { Property } from 'csstype';
import { layoutCSS } from '../theme';


export const wrapper = style({
  vars: {
    ['--switcher-columns']: `var(--mobile-col)`,
  },
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: `1fr`,
  gap: `var(--mobile-gap)`,
  alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
  justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
  justifySelf: 'var(--mobile-justify-self)' as Property.JustifySelf,
  '@media': {
    [layoutCSS.media.tablet]: {
      vars: {
        ['--switcher-columns']: `var(--tablet-col)`,
      },
      gap: `var(--tablet-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
      alignItems: `var(--tablet-align-items)` as Property.AlignContent,
      justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
      justifySelf: `var(--tablet-justify-self)` as Property.JustifySelf,
    },
    [layoutCSS.media.desktopSmall]: {
      vars: {
        ['--switcher-columns']: `var(--desktop-col)`,
      },
      gap: `var(--desktop-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
      alignItems: `var(--desktop-align-items)` as Property.AlignContent,
      justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
      justifySelf: `var(--desktop-justify-self)` as Property.JustifySelf,
    },
  },
});
