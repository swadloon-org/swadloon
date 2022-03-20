import React from 'react';

import { ICON, LOGO } from '@newrade/core-design-system';
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
import { cssThemeConfig } from '@newrade/ze-design-system/css';

import '@newrade/ze-design-system/src/assets/fonts/inter-webfonts/stylesheet.css';

/**
 * Provide context over /docs/ and /design-system/ pages
 */
export const Providers: React.FC = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <CSSThemeProvider
        value={{
          config: cssThemeConfig,
        }}
        options={{ applyThemeToRootElement: true, syncToLocalStorage: true }}
      >
        {/* <MDXProvider components={mdxComponents}> */}
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
        {/* </MDXProvider> */}
      </CSSThemeProvider>
    </ViewportProvider>
  );
};
