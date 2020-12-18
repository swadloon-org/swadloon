import { DesignSystem } from '@newrade/core-design-system-old';
import { globalStyle, style } from 'treat';

export const link = style((theme: DesignSystem) => ({
  position: 'relative',
  color: theme.colorIntents.primaryReversed,
  textDecoration: 'none',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 1s ease-in',
}));

export const linkUnderline = style((theme: DesignSystem) => ({
  textDecoration: 'underline',
}));

export const linkActive = style((theme: DesignSystem) => ({}));

export const label = style((theme: DesignSystem) => ({
  color: theme.colorIntents.primaryReversed,
  textDecoration: 'none',
  cursor: 'pointer',
}));

export const active = style((theme: DesignSystem) => ({
  opacity: 0,
  position: 'absolute',
  bottom: '2px',
  left: 0,
  right: 0,
  height: '2px',
  backgroundColor: theme.colorIntents.primaryReversed,

  transitionDelay: '1s',
  transitionProperty: 'opacity',
  transitionDuration: '400ms',
  transitionTimingFunction: 'ease-in',
}));

globalStyle(`${linkActive} ${active}`, (theme: DesignSystem) => ({
  opacity: 1,
}));
