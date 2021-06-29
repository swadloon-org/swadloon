import { MDXProvider } from '@mdx-js/react';
import { ICON } from '@newrade/core-design-system';
import { docsMdxComponents } from '@newrade/core-gatsby-ui/src';
import {
  IconProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/lib/default-theme';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import { ionicons5Kit } from '@newrade/core-react-ui/lib/icon-kits/iconicons';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { docsTheme } from '../design-system/theme-docs.treat';

export const ProvidersDocs: React.FC = (props) => {
  return (
    <TreatProvider theme={docsTheme}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
          <MDXProvider components={docsMdxComponents}>
            <GlobalCSSVariables>
              <GlobalResetCSS>
                <IconProvider<ICON> iconComponents={ionicons5Kit}>{props.children}</IconProvider>
              </GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default ProvidersDocs;
