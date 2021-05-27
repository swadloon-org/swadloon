import { Auth0Provider } from '@auth0/auth0-react';
import {
  GlobalCSSVariables,
  GlobalResetCSS,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/lib/default-theme';
import React from 'react';
import { isSafari } from 'react-device-detect';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

export const Providers: React.FC = (props) => {
  return (
    <Auth0Provider
      domain="vsb.us.auth0.com"
      clientId="ODPesjvgqM6lZDXrs8co3mLotcjv58UN"
      redirectUri={window.location.origin}
      useRefreshTokens={isSafari}
      audience={'https://api.vasectomie-pierre-boucher.ca/'}
      // for safari see https://auth0.com/docs/tokens/refresh-tokens/refresh-token-rotation/use-refresh-token-rotation
      cacheLocation={isSafari ? 'localstorage' : 'memory'}
      scope="read:current_user update:current_user_metadata read:patients offline_access"
    >
      <TreatProvider theme={light}>
        <ViewportProvider context={viewportContext}>
          <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
            <GlobalCSSVariables>
              <GlobalResetCSS>{props.children}</GlobalResetCSS>
            </GlobalCSSVariables>
          </TreatThemeProvider>
        </ViewportProvider>
      </TreatProvider>
    </Auth0Provider>
  );
};
