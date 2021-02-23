import { MDXProvider } from '@mdx-js/react';
import {
  GlobalCSSVariables,
  GlobalResetCSS,
  mdxComponents,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { cssTheme, theme } from '../design-system/theme';
import { light } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme, cssTheme }}>
          <MDXProvider components={mdxComponents}>
            <GlobalCSSVariables>
              <GlobalResetCSS>
                {/* <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}> */}
                {props.children}
                {/* </IconContext.Provider> */}
              </GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default Providers;
