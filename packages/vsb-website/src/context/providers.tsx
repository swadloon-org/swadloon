import { MDXProvider } from '@mdx-js/react';
import {
  GlobalCSSVariables,
  GlobalResetCSS,
  mdxComponents,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { SSRProvider } from '@react-aria/ssr';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { cssTheme, theme } from '../design-system/theme';
import { light } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
  return (
    /**
     * React Aria's SSR Provider
     * @see https://react-spectrum.adobe.com/react-aria/ssr.html#ssr-provider
     */
    <SSRProvider>
      <TreatProvider theme={light}>
        <ViewportProvider context={viewportContext}>
          <TreatThemeProvider theme={{ theme, cssTheme }}>
            <MDXProvider components={mdxComponents}>
              <GlobalCSSVariables>
                <GlobalResetCSS>{props.children}</GlobalResetCSS>
              </GlobalCSSVariables>
            </MDXProvider>
          </TreatThemeProvider>
        </ViewportProvider>
      </TreatProvider>
    </SSRProvider>
  );
};

export default Providers;
