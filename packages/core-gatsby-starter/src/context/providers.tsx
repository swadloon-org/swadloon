import { MDXProvider } from '@mdx-js/react';
import {
  DefaultCSS,
  mdxComponents,
  GlobalResetCSS,
  TreatThemeProvider,
  ViewportProvider,
  viewportContext,
  GlobalCSSVariables,
} from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';
import { theme, cssTheme } from '../design-system/theme';
import { IconContext } from 'react-icons/lib';
import { SSRProvider } from '@react-aria/ssr';
import { I18nProvider, useLocale } from 'react-aria';

export const Providers: React.FC = (props) => {
  let { locale } = useLocale();

  return (
    /**
     * React Aria's SSR Provider
     * @see https://react-spectrum.adobe.com/react-aria/ssr.html#ssr-provider
     */
    <SSRProvider>
      <I18nProvider locale={locale}>
        <TreatProvider theme={light}>
          <ViewportProvider context={viewportContext}>
            <TreatThemeProvider theme={{ theme, cssTheme }}>
              <MDXProvider components={mdxComponents}>
                <GlobalCSSVariables>
                  <GlobalResetCSS>
                    <DefaultCSS>
                      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                        {props.children}
                      </IconContext.Provider>
                    </DefaultCSS>
                  </GlobalResetCSS>
                </GlobalCSSVariables>
              </MDXProvider>
            </TreatThemeProvider>
          </ViewportProvider>
        </TreatProvider>
      </I18nProvider>
    </SSRProvider>
  );
};

export default Providers;
