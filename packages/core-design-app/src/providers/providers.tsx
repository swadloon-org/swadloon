import React from 'react';
import { TreatProvider } from 'react-treat';

// import { MDXProvider } from '@mdx-js/react';
import { ICON, LOGO } from '@newrade/core-design-system';
import {
  CSSThemeProvider,
  IconProvider,
  LogosProvider,
  TreatThemeProvider,
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

import { defaultCSSTheme, defaultTheme, theme } from '../design-system/theme.treat';

/**
 * Provide context over /docs/ and /design-system/ pages
 */
export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={theme}>
      <ViewportProvider context={viewportContext}>
        <CSSThemeProvider
          value={{
            config: CssTheme.cssThemeConfig,
          }}
          options={{ applyThemeToRootElement: true, syncToLocalStorage: true }}
        >
          <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
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
          </TreatThemeProvider>
        </CSSThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};
