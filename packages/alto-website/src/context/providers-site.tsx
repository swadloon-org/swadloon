import { MDXProvider } from '@mdx-js/react';
import { cssTheme, theme } from '@newrade/cdpq-design-system';
import { TreatThemeProvider, viewportContext, ViewportProvider } from '@newrade/core-react-ui';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import { mdxComponents } from '@newrade/core-react-ui/lib/markdown';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

export const ProvidersSite: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme: theme, cssTheme: cssTheme }}>
          <MDXProvider components={mdxComponents}>
            <GlobalCSSVariables>
              <GlobalResetCSS>{props.children}</GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default ProvidersSite;
