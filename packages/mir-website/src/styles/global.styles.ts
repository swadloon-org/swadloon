import { globalStyle } from 'treat';
import { DesignSystem } from 'core-design-system-old';
import { getGlobalSizeVariables } from './global-sizes-variables.styles';

export function applyReset(themeClass: string) {
  globalStyle(`*`, {
    boxSizing: 'border-box',
  });
  globalStyle(`p`, {
    margin: 0,
  });
}

export function applyStylesToHtmlElement(themeClass: string) {
  return globalStyle(`${themeClass}, html`, (theme: DesignSystem) => ({
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    WebkitTextSizeAdjust: '100%',

    fontSize: theme.sizing.baseFontSizePx,
    backgroundColor: theme.colors.greyscale1000,

    ...getGlobalSizeVariables(theme),
  }));
}

export function applyStylesToBodyElement(themeClass: string) {
  return globalStyle(`${themeClass}, body`, (theme: DesignSystem) => ({
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
    /**
     * Remove the margin in all browsers.
     */
    margin: 0,
  }));
}
