import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';
import { applyReset, applyStylesToBodyElement, applyStylesToHtmlElement } from '../styles/global.styles';

export const global = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '110vh',
  maxWidth: '100vw',
  overflowX: 'hidden',
}));

export const sidebar = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'none',
    },
  },
}));

export const close = style((theme: DesignSystem) => ({
  position: 'initial',
}));

export const open = style((theme: DesignSystem) => ({
  position: 'fixed',
  top: '0',
  left: '0',
}));

export const footer = style((theme: DesignSystem) => ({
  marginTop: 'auto',
}));

applyReset(global);
applyStylesToHtmlElement(global);
applyStylesToBodyElement(global);
