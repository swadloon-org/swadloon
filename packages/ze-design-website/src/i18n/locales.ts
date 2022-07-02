import { locales as gatsbyUILocales } from '@newrade/core-gatsby-ui/src/i18next/locales';

import { enTranslation } from './en.locales.js';
import { frTranslation } from './fr.locales.js';

export type Locales = 'en' | 'fr';

export type LocaleKeys = keyof typeof enTranslation;

export const locales = {
  en: {
    translation: { ...gatsbyUILocales.en.translation, ...enTranslation },
  },
  fr: {
    translation: { ...gatsbyUILocales.fr.translation, ...frTranslation },
  },
};
