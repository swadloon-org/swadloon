// @ts-ignore'@newrade/core-gatsby-ui/src
import { I18nextContext } from '@newrade/core-gatsby-ui/src/i18next/i18next-context';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
/**
 * i18n
 */
import i18next, { InitOptions } from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { GatsbyCommonPageContext } from '../../config/page-context';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElementWithi18N: React.FC<
  WrapPageElementBrowserArgs & { i18nOptions?: InitOptions }
> = ({ element, props, i18nOptions }) => {
  const pageProps = props as Props;
  const pageLang = pageProps.pageContext.locale;
  const pageLangs = pageProps.pageContext.siteMetadata.languages.langs;
  const defaultLang = pageProps.pageContext.siteMetadata.languages.defaultLangKey;

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
        {element}
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
