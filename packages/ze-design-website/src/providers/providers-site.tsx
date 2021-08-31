import { MDXProvider } from '@mdx-js/react';
import { ICON, LOGO } from '@newrade/core-design-system';
import { mdxComponents } from '@newrade/core-gatsby-ui/src/mdx/mdx-components';
import {
  IconProvider,
  LogosProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { GlobalCSSVariables } from '@newrade/core-react-ui/global';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/icons-kit-ionicons-outline';
import { logosComponents } from '@newrade/ze-design-system';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { cssTheme, light, theme } from '../design-system/theme.treat';

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
              <LogosProvider<LOGO> logoComponents={logosComponents}>
                <IconProvider<ICON>
                  {...ioniconsOutlineConfig}
                  iconComponents={ionicons5OutlineComponents}
                >
                  {props.children}
                </IconProvider>
              </LogosProvider>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};
