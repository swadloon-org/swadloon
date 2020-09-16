import { DesignSystem } from 'core-design-system';
import { applyStylesToHtmlElement, applyStylesToBodyElement, applyReset } from '../styles/global.styles';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
}));

export const sidebar = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'none',
    },
  },
}));

applyReset(globalStyle);
applyStylesToHtmlElement(globalStyle);
applyStylesToBodyElement(globalStyle);
