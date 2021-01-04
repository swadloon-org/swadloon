import { MDXProvider } from '@mdx-js/react';
import {
  DefaultCSS,
  mdxComponents,
  GlobalResetCSS,
  TreatThemeProvider,
  ViewportProvider,
  viewportContext,
} from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';
import { theme, cssTheme } from '../design-system/theme';
import { IconContext } from 'react-icons/lib';

export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme, cssTheme }}>
          <MDXProvider components={mdxComponents}>
            {/* <CSSVariables>{props.children}</CSSVariables> */}
            <GlobalResetCSS>
              <DefaultCSS>
                <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                  {props.children}
                </IconContext.Provider>
              </DefaultCSS>
            </GlobalResetCSS>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};
