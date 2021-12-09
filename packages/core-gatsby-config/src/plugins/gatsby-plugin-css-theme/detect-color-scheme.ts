import type {
  GLOBAL_CSS_THEME,
  GLOBAL_CSS_THEME_PROP,
  LOCAL_STORAGE_CSS_THEME_PROP,
} from '../../config/site-css-theme';

/**
 *
 * Detect the user's color scheme and set a class on the html element accordingly
 *
 * Note: do not use code imports in this file since it is inlined in a script tag
 *
 */

type GlobalCssType = `${typeof GLOBAL_CSS_THEME.LIGHT}` | `${typeof GLOBAL_CSS_THEME.DARK}`;

(function detectCssColorScheme() {
  const log = (str: string) => console.log(`nr:core-react-ui:css-theme: ${str}`);
  const logError = (str: string) => console.error(`nr:core-react-ui:css-theme:error: ${str}`);

  const globalProp: typeof GLOBAL_CSS_THEME_PROP = '__global-css-theme';
  const globalLocalStorageProp: typeof LOCAL_STORAGE_CSS_THEME_PROP = 'global-css-theme';

  // @ts-expect-error
  declare var window: Window & {
    [globalProp]: GlobalCssType;
    __setGlobalPreferredTheme: (theme: GlobalCssType) => void;
  };

  function setGlobalCssTheme(theme: GlobalCssType) {
    log(`adding theme class: ${theme}`);
    window[globalProp] = theme;

    if (theme === 'global-css-theme-dark') {
      log(`applying dark mode class name`);
      if (!document.documentElement.classList.contains('global-css-theme-dark')) {
        document.documentElement.classList.add('global-css-theme-dark');
      }
      return;
    }

    if (theme === 'global-css-theme-light') {
      log(`applying light mode class name`);
      if (!document.documentElement.classList.contains('global-css-theme-light')) {
        document.documentElement.classList.add('global-css-theme-light');
      }
      return;
    }
  }

  window.__setGlobalPreferredTheme = function __setGlobalPreferredTheme(theme: GlobalCssType) {
    setGlobalCssTheme(theme);
    try {
      log(`saving theme to localStorage: ${theme}`);
      window.localStorage.setItem(globalLocalStorageProp, theme);
    } catch (error) {
      logError(`error while detecting color scheme: ${error}`);
    }
  };

  var preferredTheme: GlobalCssType | undefined = undefined;

  try {
    log('getting theme from localStorage');
    preferredTheme = window.localStorage.getItem(globalLocalStorageProp) as GlobalCssType;
    log(`found theme: ${preferredTheme}`);
  } catch (e) {}

  var mediaQuery;
  if (!preferredTheme) {
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  }

  window.__setGlobalPreferredTheme(
    preferredTheme || (mediaQuery?.matches ? 'global-css-theme-dark' : 'global-css-theme-light')
  );
})();
