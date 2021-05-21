import { MDXProvider } from '@mdx-js/react';
import {
  GlobalCSSVariables,
  GlobalResetCSS,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { mdxComponents } from '@newrade/core-react-ui/lib/markdown';
import { cssTheme, theme } from '@newrade/vsb-design-system';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
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

export default Providers;
