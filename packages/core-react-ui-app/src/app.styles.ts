import { globalStyle } from 'treat';

export function applyStylesToHtmlElement(themeClass: string) {
  return globalStyle(`${themeClass}, html`, (theme: any) => ({
    display: 'inherit',
    // width: '100vw',
    // overflowX: 'hidden',
    // overflowY: 'scroll',
    // WebkitTextSizeAdjust: '100%',
    // scrollBehavior: 'smooth',
    // fontSize: theme.sizing.baseFontSizePx,
    // backgroundColor: theme.colors.greyscale100,
    // ...getGlobalSizeVariables(theme),
  }));
}
