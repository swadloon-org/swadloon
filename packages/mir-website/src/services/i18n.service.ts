import * as i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import { initReactI18next } from 'react-i18next';

/**
 * @see https://react.i18next.com
 * @see https://www.i18next.com/
 */

const i18nInstance = i18n.default;
const langInLocalstorage = window.localStorage.getItem('PreferedLanguage');

const options: i18n.InitOptions = {
  debug: true,
  load: 'languageOnly',
  lng: langInLocalstorage === 'fr' ? 'fr' : langInLocalstorage === 'en' ? 'en' : 'fr',
  fallbackLng: 'fr',
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
};

let i18nInstanceInitialized = i18nInstance.use(Fetch).use(initReactI18next); // bind react-i18next to the instance
let i18nInstanceFunction: i18n.TFunction;

export async function getI18n() {
  if (i18nInstance.isInitialized) {
    return i18nInstance.t;
  }

  i18nInstanceFunction = await i18nInstanceInitialized.init(options);

  return i18nInstanceFunction;
}

export default i18nInstance;
