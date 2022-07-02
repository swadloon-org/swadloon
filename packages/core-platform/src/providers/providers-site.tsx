import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import { ICON, LOGO } from '@newrade/core-design-system';
import { mdxComponents } from '@newrade/core-gatsby-ui/src/mdx/mdx-components';
import {
  CSSThemeProvider,
  IconProvider,
  LogosProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/icons-kit-ionicons-outline';
import { GlobalCSSVariables } from '@newrade/core-react-ui/src/global/global-css-variables';
import { logosComponents } from '@newrade/ze-design-system';
import * as CssTheme from '@newrade/ze-design-system/css';

/**
 * Provide context on the website site pages (other than /docs/ and /design-system/)
 */
export const ProvidersSite: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <CSSThemeProvider
        value={{
          config: CssTheme.cssThemeConfig,
        }}
        options={{ applyThemeToRootElement: true, syncToLocalStorage: true }}
      >
        <MDXProvider components={mdxComponents}>
          <GlobalCSSVariables>
            <LogosProvider<LOGO> logoComponents={logosComponents}>
              <IconProvider<ICON>
                {...ioniconsOutlineConfig}
                iconComponents={ionicons5OutlineComponents}
              >
                {props.children}
              </IconProvider>
            </LogosProvider>
          </GlobalCSSVariables>
        </MDXProvider>
      </CSSThemeProvider>
    </ViewportProvider>
  );
};
