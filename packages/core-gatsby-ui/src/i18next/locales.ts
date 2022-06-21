import { enTranslation } from './en.locales.js';
import { frTranslation } from './fr.locales.js';

export type Locales = 'en' | 'fr';

export type LocaleKeys = keyof typeof enTranslation;

export const locales = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};
