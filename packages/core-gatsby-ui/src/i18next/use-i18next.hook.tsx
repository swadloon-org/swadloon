import { navigate as gatsbyNavigate } from 'gatsby';
import { useContext } from 'react';
import { Namespace, useTranslation, UseTranslationOptions } from 'react-i18next';

import { NavigateOptions } from '@reach/router';
import { title } from 'case';

import { SITE_LANGUAGE_SHORT, SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyPageAlternateLocale } from '@newrade/core-gatsb-config/config';
import { getLangSimpleCode } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';

import { I18nextContext, LANGUAGE_KEY } from './i18next-context';

type AlternatePageLocale = GatsbyPageAlternateLocale;

export const useI18next = (ns?: Namespace, options?: UseTranslationOptions) => {
  const { i18n, t, ready } = useTranslation(ns, options);
  const context = useContext(I18nextContext);

  const { routed, defaultLanguage } = context;

  const translate = (key?: string | null, language?: SITE_LANGUAGES | string | null) => {
    if (!key) {
      return '';
    }
    return t(key as any, {
      lng: language ? language : context.language,
    }) as string;
  };

  const format = (str?: string | null, language?: SITE_LANGUAGES | string | null) => {
    if (!str) {
      return '';
    }
    const lang = getLangSimpleCode(language);
    //
    // for FR lang
    //
    if (lang === SITE_LANGUAGE_SHORT.FR) {
      const formattedStr = [str.slice(0, 1).toUpperCase(), str.slice(1)].join('');
      return formattedStr;
    }
    //
    // for EN lang
    //
    const formattedStr = title(str);
    return formattedStr;
  };

  const getLanguagePath = (language: string) => {
    return removeLocaleExtension(language) !== removeLocaleExtension(defaultLanguage)
      ? `/${removeLocaleExtension(language)}`
      : '';
  };

  const navigate = (to: string, options?: NavigateOptions<{}>) => {
    const languagePath = getLanguagePath(context.language);
    const link = routed ? `${languagePath}${to}` : `${to}`;
    return gatsbyNavigate(link, options);
  };

  /**
   * Update the i18n config with the changed language and ask Gatsby to navigate
   */
  const changeLanguage = ({
    language,
    to,
    alternateLocales,
    options,
    fallbackToHomePage = true,
  }: {
    language: string;
    to?: string;
    alternateLocales?: AlternatePageLocale[];
    options?: NavigateOptions<{}>;
    fallbackToHomePage?: boolean;
  }) => {
    const alternatePageForLocale = getAlternativePageForLocale(language, alternateLocales);

    const alternatePageForLocaleFound = alternatePageForLocale && alternatePageForLocale.path;

    if (!alternatePageForLocaleFound && !fallbackToHomePage) {
      // if fallbackToHomePage is false, do nothing
      return;
    }

    const path = to
      ? `${to}${window.location.search}`
      : alternatePageForLocaleFound
      ? alternatePageForLocale.path
      : `${getLanguagePath(language)}/`; // fallback to home page in the other language
    localStorage.setItem(LANGUAGE_KEY, language);

    // i18n.changeLanguage(language);

    return gatsbyNavigate(path, options);
  };

  /**
   * Return the alternative language configured for the site
   */
  const getAlternativeLang = () => {
    const alternativeLanguages = context?.languages?.filter(
      (lang) => removeLocaleExtension(lang) !== removeLocaleExtension(context.language)
    );
    const alternativeLanguage = alternativeLanguages?.length ? alternativeLanguages[0] : null;
    const alternativeLanguageLabel = alternativeLanguage
      ? removeLocaleExtension(alternativeLanguage).toUpperCase()
      : '';

    return {
      lang: alternativeLanguage as SITE_LANGUAGES | null,
      label: alternativeLanguageLabel,
    };
  };

  function getAlternativePageForLocale(
    language: string | SITE_LANGUAGES,
    alternateLocales?: AlternatePageLocale[]
  ) {
    const alternatePageForLocale = alternateLocales?.find(
      (alternatePage) =>
        alternatePage.locale === language ||
        getLangSimpleCode(alternatePage.locale) === getLangSimpleCode(language)
    );
    return alternatePageForLocale;
  }

  function removeLocaleExtension(localeName: string): string {
    return getLangSimpleCode(localeName);
  }

  /**
   * Replaces any key:value encoutered in an object with their translation based on the current context
   */
  function getTranslatedObject<T extends object>(object?: object | null): T {
    if (!object) {
      return {} as T;
    }

    return keys(object).reduce((previous, current) => {
      const pattern = /t\('(?<value>[a-z]+)'\)/gi;

      if (typeof object[current] === 'string') {
        const entry = object[current] as string;
        const matchKeyValue = pattern.exec(entry);

        // return as is, if no match
        if (!matchKeyValue?.length) {
          previous[current] = object[current];
          return previous;
        }

        const matchValue = matchKeyValue.groups?.value;

        if (matchValue) {
          // @ts-ignore
          previous[current] = entry.replace(
            pattern,
            // @ts-ignore
            t(matchValue, {
              lng: context.language,
            })
          );
          return previous;
        }
      }

      // if array
      // @ts-ignore
      if (typeof object[current] === 'object' && object[current]?.length > 0) {
        const entry = object[current] as Array<string | T>;
        // @ts-ignore
        previous[current] = entry.map((entry) => getTranslatedObject(entry));
        return previous;
      }

      // if another object, descend
      if (typeof object[current] === 'object') {
        const entry = object[current] as T;
        // @ts-ignore
        previous[current] = getTranslatedObject(entry);
      }

      return previous;
    }, {} as T);
  }

  return {
    ...context,
    language: context.language as SITE_LANGUAGES,
    i18n,
    t,
    translate,
    format,
    ready,
    navigate,
    changeLanguage,
    getAlternativePageForLocale,
    getAlternativeLang,
    getTranslatedObject,
  };
};
