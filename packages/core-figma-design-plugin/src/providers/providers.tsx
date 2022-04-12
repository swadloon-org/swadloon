import React from 'react';

import { ICON, LOGO } from '@newrade/core-design-system';
import { CSSThemeProvider, IconProvider, LogosProvider } from '@newrade/core-react-ui';
import {
  ionicons5OutlineComponents,
  ioniconsOutlineConfig,
} from '@newrade/core-react-ui/icons-kit-ionicons-outline';
import { GlobalCSSVariables } from '@newrade/core-react-ui/src/global/global-css-variables';
import { logosComponents } from '@newrade/ze-design-system';
import { lightThemeConfig } from '@newrade/ze-design-system/css';

/**
 * Provide global CSS, Icons and Logos
 */
export const Providers: React.FC = (props) => {
  return (
    <CSSThemeProvider
      value={{
        config: {
          themes: [lightThemeConfig],
        },
      }}
      options={{ applyThemeToRootElement: true, syncToLocalStorage: false }}
    >
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
    </CSSThemeProvider>
  );
};
