import { locales } from '@newrade/vsb-common';
import i18n, { InitOptions } from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';

const options: InitOptions = {
  debug: true,
  preload: ['en', 'fr'],
  load: 'languageOnly',
  fallbackLng: 'fr',
  keySeparator: false, // For key like: login.signIn
  interpolation: {
    escapeValue: true, // needed for node
  },
  initImmediate: true,
  ns: 'translation',
  resources: locales,
};

// must be called during server startup
export function initI18nService() {
  return i18n.use(i18nextMiddleware.LanguageDetector).init(options);
}

// return i18n instance
export const i18nService = i18n;
