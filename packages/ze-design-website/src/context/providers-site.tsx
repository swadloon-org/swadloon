import { MDXProvider } from '@mdx-js/react';
import { ICON, LOGO } from '@newrade/core-design-system';
import {
  IconProvider,
  LogosProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/lib/icon-kits/iconicons-outline';
import { mdxComponents } from '@newrade/core-react-ui/lib/markdown';
import { cssTheme, logosComponents, theme } from '@newrade/ze-design-system';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

/**
 * Provide context on the website site pages (other than /docs/ and /design-system/)
 */
export const ProvidersSite: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme: theme, cssTheme: cssTheme }}>
          <MDXProvider components={mdxComponents}>
            <GlobalCSSVariables>
              <GlobalResetCSS>
                <LogosProvider<LOGO> logoComponents={logosComponents}>
                  <IconProvider<ICON>
                    {...ioniconsOutlineConfig}
                    iconComponents={ionicons5OutlineComponents}
                  >
                    {props.children}
                  </IconProvider>
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
