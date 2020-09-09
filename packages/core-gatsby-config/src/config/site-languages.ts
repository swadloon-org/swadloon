export enum SITE_LANGUAGES {
  EN = 'en',
  FR = 'fr',
}

export interface GatsbySiteLanguages {
  langs: SITE_LANGUAGES[];
  defaultLangKey: SITE_LANGUAGES;
}
