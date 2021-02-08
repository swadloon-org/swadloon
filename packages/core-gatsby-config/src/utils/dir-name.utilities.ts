import { title } from 'case';
import { SITE_LANGUAGES } from '../config/site-languages';

/**
 * @param name relative path
 * @example /dir/page-name.tsx => dir
 */
export function getDirNameFromRelativePath(name?: string | null): string {
  if (!name) {
    return '';
  }

  const reg = /([A-Z-]+)\//gi;
  const match = reg.exec(name);
  return match && match[1] ? match[1] : '';
}

/**
 * Format raw page path
 */
export function getPageFormattedName(
  rawName?: string | null,
  options?: {
    locale: SITE_LANGUAGES;
  }
): string {
  if (rawName === undefined || rawName === null) {
    return 'Page Title';
  }

  if (!options?.locale) {
    if (rawName === '/' || rawName === '') {
      return 'Home';
    }
    return title(removeDir(removeDotPage(rawName)));
  }

  if (options?.locale === SITE_LANGUAGES.EN || options.locale === SITE_LANGUAGES.EN_CA) {
    if (rawName === '/' || rawName === '') {
      return 'Home';
    }
    return title(removeDir(removeDotPage(rawName)));
  }

  if (rawName === '/' || rawName === '') {
    return 'Accueil';
  }

  return title(removeDir(removeDotPage(rawName)));

  function removeDotPage(rawName: string): string {
    return rawName.replace('.page', '');
  }

  function removeDir(rawName: string): string {
    // for src pages page-name.tsx => /page-name/ => Page Name
    if (/^\/.+\/$/gi.test(rawName)) {
      return title(rawName.replace(/\//gi, ''));
    }

    return rawName
      .replace(/(\/?[A-Z-]+\/)/gi, '')
      .replace(/^(\/)/gi, '')
      .trim();
  }
}

/**
 * Return the locale directory name for a given node path.
 * For example if the default locale is fr or fr_CA, a node with the name
 * document.mdx will yield the path /document since the default locale is always the shortest.
 * A document called en.document.mdx would yield /en/document.
 *
 * @param nodeName the mdx page node name e.g. fr.readme.md
 */
export function getLocaleDirName(nodeName: string, defaultLangKey?: SITE_LANGUAGES): string {
  if (!defaultLangKey) {
    return '';
  }

  // extract the locale name from node name
  const pattern = new RegExp(`(${Object.keys(SITE_LANGUAGES).join('|')})`, 'gi');
  const match = pattern.exec(nodeName);
  const fileLocale = match?.[1];

  if (!fileLocale) {
    return '';
  }

  // if the site is EN, en pages will have no prefix path
  if (defaultLangKey === SITE_LANGUAGES.EN || fileLocale === SITE_LANGUAGES.EN_CA) {
    return fileLocale === SITE_LANGUAGES.EN || fileLocale === SITE_LANGUAGES.EN_CA ? '' : 'fr/';
  }

  return fileLocale === SITE_LANGUAGES.EN || fileLocale === SITE_LANGUAGES.EN_CA ? 'en/' : '';
}
