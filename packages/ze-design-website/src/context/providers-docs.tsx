import { MDXProvider } from '@mdx-js/react';
import { ICON, LOGO } from '@newrade/core-design-system';
import { docsMdxComponents } from '@newrade/core-gatsby-ui/src/mdx/docs-mdx-components';
import {
  IconProvider,
  LogosProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui/src';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/src/default-theme';
import { GlobalCSSVariables } from '@newrade/core-react-ui/src/global/global-css-variables';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/src/icon-kits/iconicons-outline';
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
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default ProvidersDocs;
