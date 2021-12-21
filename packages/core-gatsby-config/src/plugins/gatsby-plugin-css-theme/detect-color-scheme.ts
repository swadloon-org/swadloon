import type {
  GLOBAL_CSS_THEME_SCHEME,
  GlobalCssTypeName,
  LOCAL_STORAGE_CSS_THEME_NAME_PROP,
  LOCAL_STORAGE_CSS_THEME_SCHEME_PROP,
} from '@newrade/core-react-ui/global';

/**
 * IFFE that detects the user's color scheme and do the following:
 *  - set a class on the html element to indicates what color scheme is selected
 *  - save the color scheme value in localstorage
 *  - it also checks for previously set theme value in localstorage, if defined, it will add its classname
 *
 * **Note**: _do not_ use code imports in this file since
 * the content of this file is inlined in a script tag at build time. If you need
 * to import a type, use `import type {} from ''; which does not create a real code import.`
 */

type GlobalCssType =
  | `${typeof GLOBAL_CSS_THEME_SCHEME.LIGHT}`
  | `${typeof GLOBAL_CSS_THEME_SCHEME.DARK}`;

(function detectCssColorScheme() {
  const log = (str: string) => console.log(`nr:core-react-ui:css-theme: ${str}`);
  const logError = (str: string) => console.error(`nr:core-react-ui:css-theme:error: ${str}`);
  const logWarn = (str: string) => console.warn(`nr:core-react-ui:css-theme:error: ${str}`);

  const globalLocalStorageThemeSchemeProp: typeof LOCAL_STORAGE_CSS_THEME_SCHEME_PROP =
    'global-css-theme-scheme';
  const globalLocalStorageThemeNameProp: typeof LOCAL_STORAGE_CSS_THEME_NAME_PROP =
    'global-css-theme-name';
  const globalCssThemeLightSchemeClassname: `${typeof GLOBAL_CSS_THEME_SCHEME.LIGHT}` =
    'global-css-theme-scheme-light';
  const globalCssThemeDarkSchemeClassname: `${typeof GLOBAL_CSS_THEME_SCHEME.DARK}` =
    'global-css-theme-scheme-dark';

  function setGlobalCssThemeScheme(theme: GlobalCssType) {
    log(`adding theme scheme classname: ${theme}`);

    if (theme === 'global-css-theme-scheme-dark') {
      log(`adding the dark scheme classname`);
      if (!document.documentElement.classList.contains(globalCssThemeDarkSchemeClassname)) {
        document.documentElement.classList.add(globalCssThemeDarkSchemeClassname);
      }
      return;
    }

    if (theme === 'global-css-theme-scheme-light') {
      log(`adding the light scheme classname`);
      if (!document.documentElement.classList.contains(globalCssThemeLightSchemeClassname)) {
        document.documentElement.classList.add(globalCssThemeLightSchemeClassname);
      }
      return;
    }
  }

  function setGlobalCssTheme(theme: GlobalCssTypeName) {
    log(`adding theme classname: ${theme}`);

    if (!document.documentElement.classList.contains(theme)) {
      document.documentElement.classList.add(theme);
    }
  }

  function setGlobalPreferredThemeScheme(theme: GlobalCssType) {
    try {
      log(`saving theme scheme to localStorage: ${theme}`);
      window.localStorage.setItem(globalLocalStorageThemeSchemeProp, theme);
    } catch (error) {
      logError(`error while detecting color scheme: ${error}`);
    }
  }

  var preferredThemeScheme: GlobalCssType | undefined = undefined;
  var preferredThemeName: GlobalCssTypeName | undefined = undefined;

  try {
    log('getting preferred theme color scheme from localStorage');

    preferredThemeScheme = window.localStorage.getItem(
      globalLocalStorageThemeSchemeProp
    ) as GlobalCssType;

    log(`found color scheme: ${preferredThemeScheme}`);
  } catch (error: any) {
    logWarn(`got error: ${error}`);
    logWarn(`continuing...`);
  }

  try {
    log('getting preferred theme name from localStorage');

    preferredThemeName = window.localStorage.getItem(
      globalLocalStorageThemeNameProp
    ) as GlobalCssType;

    log(`found theme: ${preferredThemeScheme}`);
  } catch (error: any) {
    logWarn(`got error: ${error}`);
    logWarn(`continuing...`);
  }

  /** execute the match media once */
  var mediaQuery;
  if (!preferredThemeScheme) {
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  }

  /** set the correct color scheme classname depending on the user's color scheme */
  const themeScheme =
    preferredThemeScheme ||
    (mediaQuery?.matches ? globalCssThemeDarkSchemeClassname : globalCssThemeLightSchemeClassname);
  setGlobalPreferredThemeScheme(themeScheme);
  setGlobalCssThemeScheme(themeScheme);
  /** if set in local storage set the theme classname depending on the user's previously saved value */
  const theme = preferredThemeName;
  if (theme) {
    setGlobalCssTheme(themeScheme);
  }
})();
