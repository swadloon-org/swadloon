import { enTranslation } from './en.locales';
import { frTranslation } from './fr.locales';

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
