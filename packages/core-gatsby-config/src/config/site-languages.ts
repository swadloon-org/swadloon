/**
 * The locale these tags are marked up in. Of the format language_TERRITORY.
 */
export enum SITE_LANGUAGES {
  EN = 'en_CA',
  FR = 'fr_CA',
}

export enum SITE_LANGUAGES_HYPHEN {
  EN = 'en-CA',
  FR = 'fr-CA',
}

export interface GatsbySiteLanguages {
  langs: SITE_LANGUAGES[];
  defaultLangKey: SITE_LANGUAGES;
}
