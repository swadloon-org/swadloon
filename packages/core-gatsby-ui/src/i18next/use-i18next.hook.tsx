import { SITE_LANGUAGES } from '@newrade/core-common';
import { getLangSimpleCode } from '@newrade/core-react-ui/src';
import { keys } from '@newrade/core-react-ui/src/utilities';
import { NavigateOptions } from '@reach/router';
import { navigate as gatsbyNavigate } from 'gatsby';
import { useContext } from 'react';
import { Namespace, useTranslation, UseTranslationOptions } from 'react-i18next';
import { I18nextContext, LANGUAGE_KEY } from './i18next-context';

export const useI18next = (ns?: Namespace, options?: UseTranslationOptions) => {
  const { i18n, t, ready } = useTranslation(ns, options);
  const context = useContext(I18nextContext);

  const { routed, defaultLanguage } = context;

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

  const changeLanguage = ({
    language,
    to,
    alternateLocales,
    options,
  }: {
    language: string;
    to?: string;
    alternateLocales?: {
      locale: SITE_LANGUAGES;
      path: string;
    }[];
    options?: NavigateOptions<{}>;
  }) => {
    const alternatePageForLocale = alternateLocales?.find(
      (alternatePage) =>
        alternatePage.locale === language ||
        getLangSimpleCode(alternatePage.locale) === getLangSimpleCode(language)
    );

    const path = to
      ? `${to}${window.location.search}`
      : alternatePageForLocale
      ? alternatePageForLocale.path
      : `${getLanguagePath(language)}/`; // fallback to home page in the other language
    localStorage.setItem(LANGUAGE_KEY, language);

    i18n.changeLanguage(language);

    return gatsbyNavigate(path, options);
  };

  const getAlternativeLang = () => {
    const alternativeLanguages = context.languages?.filter(
      (lang) => removeLocaleExtension(lang) !== context.language
    );
    const alternativeLanguage = alternativeLanguages?.length ? alternativeLanguages[0] : null;
    const alternativeLanguageLabel = alternativeLanguage
      ? removeLocaleExtension(alternativeLanguage).toUpperCase()
      : '';

    return {
      lang: alternativeLanguage as SITE_LANGUAGES,
      label: alternativeLanguageLabel,
    };
  };

  function removeLocaleExtension(localeName: string): string {
    return getLangSimpleCode(localeName);
  }

  /**
   * Replaces any key:value encoutered in an object with their translation based on the current context
   */
  function getTranslatedObject<T extends object>(object?: object): T {
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
    i18n,
    t,
    ready,
    navigate,
    changeLanguage,
    getAlternativeLang,
    getTranslatedObject,
  };
};
