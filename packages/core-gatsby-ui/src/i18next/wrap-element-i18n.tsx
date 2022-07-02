import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

/**
 * i18n
 */
import i18next, { InitOptions } from 'i18next';

import { SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyCommonPageContext } from '@newrade/core-gatsb-config/config';

import { I18nextContext } from './i18next-context.js';

type Props = PageProps<{}, GatsbyCommonPageContext>;

type WrapElementWithI18NProps = Pick<WrapPageElementBrowserArgs, 'props'> & {
  i18nOptions?: InitOptions;
  children: React.ReactNode;
};

/**
 * Higher order component to manage the i18n configuration for Gatsby site.
 */
export const WrapElementWithi18N: React.FC<WrapElementWithI18NProps> =
  function WrapElementWithi18N({ props, i18nOptions, children }) {
    const pageProps = props as Props;

    const pageLang = pageProps.pageContext.locale || SITE_LANGUAGES.EN;
    const pageLangs = pageProps.pageContext.siteMetadata?.languages?.langs || [SITE_LANGUAGES.EN];
    const defaultLang =
      pageProps.pageContext.siteMetadata?.languages?.defaultLangKey || SITE_LANGUAGES.EN;

    const i18nDefaultOptions: InitOptions = {
      load: 'all',
      fallbackLng: 'en',
      keySeparator: false, // for key like: login.signIn
      interpolation: {
        escapeValue: false, // not needed for react
      },
      initImmediate: true,
      react: {
        bindI18n: 'languageChanged',
        transEmptyNodeValue: '',
        useSuspense: false,
      },
      ns: 'translation',
    };

    if (i18n.isInitialized) {
      if (i18n.language !== pageLang) {
        i18n.changeLanguage(pageLang);
      }
    }

    const i18nInstance = initi18nInstance({
      ...i18nDefaultOptions,
      ...i18nOptions,
      lng: pageLang,
      fallbackLng: defaultLang,
    });

    return (
      <I18nextProvider i18n={i18nInstance}>
        <I18nextContext.Provider
          value={{
            language: pageLang,
            routed: defaultLang !== pageLang,
            languages: pageLangs,
            defaultLanguage: defaultLang,
            originalPath: pageProps.location.pathname,
            path: pageProps.location.pathname,
          }}
        >
          {children}
        </I18nextContext.Provider>
      </I18nextProvider>
    );
  };

const i18n = i18next.createInstance();

function initi18nInstance(options: InitOptions) {
  if (!i18n.isInitialized) {
    i18n.init(options);
  }
  return i18n;
}
