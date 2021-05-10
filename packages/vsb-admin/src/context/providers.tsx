import {
  GlobalCSSVariables,
  GlobalResetCSS,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/lib/default-theme';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
          <GlobalCSSVariables>
            <GlobalResetCSS>{props.children}</GlobalResetCSS>
          </GlobalCSSVariables>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};
