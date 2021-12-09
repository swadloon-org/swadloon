import { CSSDesignSystem } from './css-design-system';

/**
 * Object to hold the CSSDesignSystem runtime data
 */
export type CSSRuntimeThemeConfig = Pick<CSSDesignSystem, 'name' | 'colorScheme'> & {
  /**
   * if autoDetect is false and there were no previously set theme, the first default theme is selected from the list
   * @default false
   */
  default: boolean;
  /**
   * Class name to inject the global theme
   */
  className: string;
  /**
   * Class names to inject the theme css variables in the DOM
   */
  classNames: { [key in keyof Pick<CSSDesignSystem, 'colors'>]?: string };
};

/**
 * Object to hold the runtime data for each theme (e.g. name and classes to inject custom variables)
 */
export type CSSThemeProviderConfig = {
  /**
   * When true, the theme will be set to the user's system color scheme (light or dark)
   * @default true
   */
  autoDetect: boolean;
  /**
   * List of available themes
   */
  themes: CSSRuntimeThemeConfig[];
};
