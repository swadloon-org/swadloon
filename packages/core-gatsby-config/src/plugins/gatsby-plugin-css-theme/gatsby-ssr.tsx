import { GatsbySSR } from 'gatsby';
import React from 'react';

import type {
  GLOBAL_CSS_THEME_SCHEME,
  LOCAL_STORAGE_CSS_THEME_SCHEME_PROP,
} from '@newrade/core-react-ui/global';

import type { GatsbyPluginCSSThemeOptions } from './gatsby-plugin-options';

// @ts-ignore
import detectCssColorScheme from '!!raw-loader!babel-loader!ts-loader!./detect-color-scheme.ts';

/**
 * Gatsby Server Rendering APIs
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
 */

const log = (str: string) => console.log(`nr:core-gatsby-config:css-theme: ${str}`);
const logError = (str: string) => console.error(`nr:core-gatsby-config:css-theme:error: ${str}`);
const logWarn = (str: string) => console.warn(`nr:core-gatsby-config:css-theme:error: ${str}`);

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }, options) => {
  const pluginOptions = options as unknown as GatsbyPluginCSSThemeOptions;

  const globalLocalStorageThemeSchemeProp: typeof LOCAL_STORAGE_CSS_THEME_SCHEME_PROP =
    'global-css-theme-scheme';
  const globalCssThemeLightSchemeClassname: `${typeof GLOBAL_CSS_THEME_SCHEME.LIGHT}` =
    'global-css-theme-scheme-light';
  const globalCssThemeDarkSchemeClassname: `${typeof GLOBAL_CSS_THEME_SCHEME.DARK}` =
    'global-css-theme-scheme-dark';

  if (pluginOptions.forcedThemeScheme) {
    log(`forcing theme to ${pluginOptions.forcedThemeScheme}`);
  }

  //
  // if `forcedThemeScheme` is set, set the css theme scheme to the passed value
  //
  const forceCssThemeSchemeScript = pluginOptions.forcedThemeScheme
    ? `window.localStorage.setItem(
    "${globalLocalStorageThemeSchemeProp}",
    "${
      pluginOptions.forcedThemeScheme === 'light'
        ? globalCssThemeLightSchemeClassname
        : globalCssThemeDarkSchemeClassname
    }"
  );`
    : '';

  /**
   * Prepare and inject script
   */
  const minifiedScript = `${detectCssColorScheme}`
    .replace(/\n/g, ' ')
    .replace(/"use strict";/g, '')
    .replace(/ {2}/g, '')
    .replace(/Object\.defineProperty\(exports, "__esModule", \{ value: true \}\);/g, '');

  const scriptsToInject = [
    pluginOptions.forcedThemeScheme ? (
      <script
        key={1}
        dangerouslySetInnerHTML={{
          __html: forceCssThemeSchemeScript,
        }}
      ></script>
    ) : undefined,
    <script
      key={2}
      dangerouslySetInnerHTML={{
        __html: minifiedScript,
      }}
    />,
  ].filter((scr) => !!scr);

  setHeadComponents(scriptsToInject);
};
