import { MDXProvider } from '@mdx-js/react';
import { ICON, LOGO } from '@newrade/core-design-system';
import { docsMdxComponents } from '@newrade/core-gatsby-ui/src';
import {
  IconProvider,
  LogosProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/lib/default-theme';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/lib/icon-kits/iconicons-outline';
import { logosComponents } from '@newrade/ze-design-system';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { docsTheme } from '../design-system/theme-docs.treat';

/**
 * Provide context over /docs/ and /design-system/ pages
 */
export const ProvidersDocs: React.FC = (props) => {
  return (
    <TreatProvider theme={docsTheme}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
          <MDXProvider components={docsMdxComponents}>
            <GlobalCSSVariables>
              <GlobalResetCSS>
                <LogosProvider<LOGO> logoComponents={logosComponents}>
                  <IconProvider<ICON>
                    {...ioniconsOutlineConfig}
                    iconComponents={ionicons5OutlineComponents}
                  >
                    {props.children}
                  </IconProvider>
                </LogosProvider>
              </GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default ProvidersDocs;
