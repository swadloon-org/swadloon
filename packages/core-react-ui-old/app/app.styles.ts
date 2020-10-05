import { DesignSystem } from 'core-design-system-old';
import { globalStyle } from 'treat';
import { getGlobalSizeVariables } from './styles/global-sizes-variables.styles';

export function applyStylesToHtmlElement(themeClass: string) {
  return globalStyle(`${themeClass}, html`, (theme: DesignSystem) => ({
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    WebkitTextSizeAdjust: '100%',
    scrollBehavior: 'smooth',

    fontSize: theme.sizing.baseFontSizePx,
    backgroundColor: theme.colors.greyscale100,

    ...getGlobalSizeVariables(theme),
  }));
}
