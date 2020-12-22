import { MDXProvider } from '@mdx-js/react';
import {
  DefaultCSS,
  mdxComponents,
  ResetCSS,
  TreatThemeProvider,
  ViewportProvider,
  viewportContext,
} from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light, theme, cssTheme } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme, cssTheme }}>
          <MDXProvider components={mdxComponents}>
            {/* <CSSVariables>{props.children}</CSSVariables> */}
            <ResetCSS>
              <DefaultCSS>{props.children}</DefaultCSS>
            </ResetCSS>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};
