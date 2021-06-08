import { MDXProvider } from '@mdx-js/react';
import { ICON } from '@newrade/core-design-system';
import { docsMdxComponents } from '@newrade/core-gatsby-ui/src';
import {
  IconComponents,
  IconProvider,
  TreatThemeProvider,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/lib/default-theme';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import React from 'react';
import {
  IoAddCircle,
  IoArrowBackOutline,
  IoArrowDownOutline,
  IoArrowForwardOutline,
  IoArrowUpOutline,
  IoCheckboxOutline,
  IoCheckmarkOutline,
  IoMenuOutline,
  IoRadioButtonOnOutline,
} from 'react-icons/io5';
import { TreatProvider } from 'react-treat';
import { docsTheme } from '../design-system/theme-docs.treat';

export const ProvidersDocs: React.FC = (props) => {
  const ionicons5IconComponents: IconComponents<ICON> = {
    [ICON.ARROW_UP]: IoArrowUpOutline,
    [ICON.ARROW_DOWN]: IoArrowDownOutline,
    [ICON.ARROW_LEFT]: IoArrowBackOutline,
    [ICON.ARROW_RIGHT]: IoArrowForwardOutline,
    [ICON.CHECK]: IoCheckmarkOutline,
    [ICON.CHECKBOX_BOX]: IoCheckboxOutline,
    [ICON.CIRCLE]: IoAddCircle,
    [ICON.MENU]: IoMenuOutline,
    [ICON.RADIO]: IoRadioButtonOnOutline,
  };

  return (
    <TreatProvider theme={docsTheme}>
      <ViewportProvider context={viewportContext}>
        <TreatThemeProvider theme={{ theme: defaultTheme, cssTheme: defaultCSSTheme }}>
          <MDXProvider components={docsMdxComponents}>
            <GlobalCSSVariables>
              <GlobalResetCSS>
                <IconProvider<ICON> iconComponents={ionicons5IconComponents}>
                  {props.children}
                </IconProvider>
              </GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </TreatThemeProvider>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default ProvidersDocs;
