import { locales } from '@newrade/vsb-common';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

// const langInLocalstorage = window.localStorage.getItem('PreferedLanguage');

const options: InitOptions = {
  debug: true,
  load: 'languageOnly',
  // lng: 'fr' ? 'fr' : langInLocalstorage === 'en' ? 'en' : 'fr', // default to fr
  lng: 'fr',
  fallbackLng: 'fr',
  keySeparator: false, // For key like: login.signIn
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
  resources: locales,
};

// init i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(options);
