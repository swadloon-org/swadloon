import { SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyCommonPageContext } from '@newrade/core-gatsb-config/config';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
/**
 * i18n
 */
import i18next, { InitOptions } from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { I18nextContext } from './i18next-context';

type Props = PageProps<{}, GatsbyCommonPageContext>;

type WrapElementWithI18NProps = Pick<WrapPageElementBrowserArgs, 'props'> & {
  i18nOptions?: InitOptions;
  children: React.ReactNode;
};

export const WrapElementWithi18N: React.FC<WrapElementWithI18NProps> = ({
  props,
  i18nOptions,
  children,
}) => {
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

  const i18n = initi18nInstance({
    ...i18nDefaultOptions,
    ...i18nOptions,
    lng: pageLang,
    fallbackLng: defaultLang,
  });

  return (
    <I18nextProvider i18n={i18n}>
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
