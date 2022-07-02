import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import { ICON, LOGO } from '@newrade/core-design-system';
import { docsMdxComponents } from '@newrade/core-gatsby-ui/src/mdx/docs-mdx-components';
import { CSSThemeProvider, IconProvider, LogosProvider } from '@newrade/core-react-ui';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/icons-kit-ionicons-outline';
import { GlobalCSSVariables } from '@newrade/core-react-ui/src/global/global-css-variables';
import { logosComponents } from '@newrade/ze-design-system';
import { cssThemeConfig } from '@newrade/ze-design-system/css';

/**
 * Provide context over /docs/ and /design-system/ pages
 */
export const ProvidersDocs: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <CSSThemeProvider
      value={{
        config: cssThemeConfig,
      }}
      options={{ applyThemeToRootElement: true, syncToLocalStorage: true }}
    >
      <MDXProvider components={docsMdxComponents}>
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
    </CSSThemeProvider>
  );
};
