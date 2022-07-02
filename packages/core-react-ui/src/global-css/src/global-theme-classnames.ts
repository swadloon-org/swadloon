/**
 * Activate reversed color mode on component and its children
 * @deprecated use GLOBAL_CSS_THEME instead
 */
export const globalThemeReversed = 'theme-reversed';
/**
 * Activate reversed color mode on component and its children
 * @deprecated use GLOBAL_CSS_THEME instead
 */
export const globalThemeReversedSelector = '.theme-reversed';

/**
 * Global class used to force light theme in certain situations
 * @deprecated use GLOBAL_CSS_THEME instead
 */
export const globalThemeLight = 'theme-light';
export const globalThemeLightSelector = '.theme-light';

/**
 * Property name used to save the current selected theme scheme in window.localStorage
 */
export const LOCAL_STORAGE_CSS_THEME_SCHEME_PROP = 'global-css-theme-scheme';

/**
 * Property name used to save the current selected theme name in window.localStorage
 */
export const LOCAL_STORAGE_CSS_THEME_NAME_PROP = 'global-css-theme-name';

/**
 * Unique name for the theme (e.g. 'light' or 'brand-light')
 */
export type GlobalCssThemeName = string;

/**
 * Classname pattern for themes
 */
export type GlobalCssTypeName = `global-css-theme-${GlobalCssThemeName}`;

/**
 * Convention for theme's classnames to follow
 */
export type GlobalCssThemeClassnames<PropName extends string> = `${GlobalCssTypeName}-${PropName}`;

/**
 * The theme scheme indicate if the user's browser is using light or dark color scheme.
 */
export enum GLOBAL_CSS_THEME_SCHEME {
  LIGHT = 'global-css-theme-scheme-light',
  DARK = 'global-css-theme-scheme-dark',
}

export const GLOBAL_CSS_THEME_SCHEME_REVERSED = 'global-css-theme-scheme-reversed';

export const GLOBAL_LIGHT_THEME_SELECTOR = `.${GLOBAL_CSS_THEME_SCHEME.LIGHT}, .${GLOBAL_CSS_THEME_SCHEME.DARK} .${GLOBAL_CSS_THEME_SCHEME_REVERSED}`;
export const GLOBAL_DARK_THEME_SELECTOR = `.${GLOBAL_CSS_THEME_SCHEME.DARK}, .${GLOBAL_CSS_THEME_SCHEME.LIGHT} .${GLOBAL_CSS_THEME_SCHEME_REVERSED}`;
