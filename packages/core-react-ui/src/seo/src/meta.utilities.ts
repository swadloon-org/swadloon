/**
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions#language-codes
 * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 * @see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 * @returns
 */
export function getLangCode(lang: string): string {
  return lang;
}

/**
 * Return the underscore version of a langcode
 * @example
 *   fr-CA => fr_CA
 *   fr_CA => fr_CA
 *   ca => ca
 */
export function getLangCodeUnderscore(lang: string): string {
  if (!lang) {
    return '';
  }

  return lang.replace(/-/, '');
}

/**
 * Return the most simple country code, removing the regional part
 * @example
 *   fr-CA => fr
 *   fr_CA => fr
 *   ca => ca
 */
export function getLangSimpleCode(lang?: string | null): string {
  if (!lang) {
    return '';
  }
  return lang.replace(/(_|-)[a-z]+$/i, '').toLowerCase();
}
