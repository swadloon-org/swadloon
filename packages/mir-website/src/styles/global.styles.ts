import { globalStyle } from 'treat';
import { DesignSystem } from 'core-design-system';
import { getGlobalSizeVariables } from './global-sizes-variables.styles';

export function applyReset(themeClass: string) {
  return globalStyle(`${themeClass}, *`, (theme: DesignSystem) => ({
    boxSizing: 'border-box',
  }));
}

export function applyStylesToHtmlElement(themeClass: string) {
  return globalStyle(`${themeClass}, html`, (theme: DesignSystem) => ({
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    WebkitTextSizeAdjust: '100%',

    fontSize: theme.sizing.baseFontSizePx,
    backgroundColor: theme.colorIntents.background0,

    ...getGlobalSizeVariables(theme),
  }));
}

export function applyStylesToBodyElement(themeClass: string) {
  return globalStyle(`${themeClass}, body`, (theme: DesignSystem) => ({
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100vw',
    overflow: 'hidden',
  }));
}
