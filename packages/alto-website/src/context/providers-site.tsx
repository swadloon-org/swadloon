import { MDXProvider } from '@mdx-js/react';
import { cssTheme, logosComponents, theme } from '@newrade/alto-design-system';
import { ICON, LOGO } from '@newrade/core-design-system';
import {
  IconProvider,
  Logo,
  LogosProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import { ionicons5Kit } from '@newrade/core-react-ui/lib/icon-kits/iconicons';
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
              <GlobalResetCSS>
                <LogosProvider<LOGO> logoComponents={logosComponents}>
                  {/* insert svg <defs> */}
                  <Logo name={LOGO.DEFS} style={{ height: 0, width: 0 }}></Logo>
                  <IconProvider<ICON> iconComponents={ionicons5Kit}>{props.children}</IconProvider>
                </LogosProvider>
              </GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default ProvidersSite;
