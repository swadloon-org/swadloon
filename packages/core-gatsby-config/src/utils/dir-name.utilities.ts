import { title } from 'case';
import { SITE_LANGUAGES, SITE_LANGUAGES_HYPHEN } from '../config/site-languages';
import { SOURCE_INSTANCE_NAME } from '../config/source-instances';

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
 * Return the locale directory name for a given node (page) path.
 * For example if the default locale is fr or fr_CA, a node with the name
 * document.mdx will yield the path /document (dir name is '') since the default locale is always the shortest.
 * A document called en.document.mdx would yield /en/document (dir name 'en')
 *
 * @param nodeName the mdx page node name e.g. fr.readme.md
 */
export function getLocalePath(nodeName: string, defaultLangKey: SITE_LANGUAGES): 'en' | 'fr' | '' {
  // extract the locale name from node name
  const patternEn = new RegExp(
    `^\/?(${[SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA, SITE_LANGUAGES_HYPHEN.EN_CA].join('|')})`,
    'gi'
  );
  const patternFr = new RegExp(
    `^\/?(${[SITE_LANGUAGES.FR, SITE_LANGUAGES.FR_CA, SITE_LANGUAGES_HYPHEN.FR_CA].join('|')})`,
    'gi'
  );
  const matchEn = patternEn.exec(nodeName);
  const matchFr = patternFr.exec(nodeName);
  const fileLocaleEn = matchEn?.[1]; // en, en_CA, en-CA
  const fileLocaleFr = matchFr?.[1]; // fr, fr_CA, fr-CA
  const defaultLocaleIsEn = defaultLangKey === SITE_LANGUAGES.EN || defaultLangKey === SITE_LANGUAGES.EN_CA;
  const defaultLocaleIsFr = defaultLangKey === SITE_LANGUAGES.FR || defaultLangKey === SITE_LANGUAGES.FR_CA;

  // en lang, so a page with '/en/page' becomes '/page' and a page with path '/fr/page' becomes '/fr/page'
  if (defaultLocaleIsEn) {
    if (fileLocaleEn) {
      return '';
    }

    if (fileLocaleFr) {
      return 'fr';
    }

    return '';
  }

  if (defaultLocaleIsFr) {
    if (fileLocaleFr) {
      return '';
    }

    if (fileLocaleEn) {
      return 'en';
    }

    return '';
  }

  return '';
}

/**
 * Return a prefix to prepend to pages created from sources files (e.g. mdx pages in /docs, etc)
 */
export function getPathForSourceInstance(sourceInstanceName: SOURCE_INSTANCE_NAME) {
  switch (sourceInstanceName) {
    case SOURCE_INSTANCE_NAME.MDX_PAGES: {
      return '';
    }
    case SOURCE_INSTANCE_NAME.DOCS: {
      return 'docs';
    }
    case SOURCE_INSTANCE_NAME.MONO_REPO_DOCS: {
      return 'core-docs';
    }
    case SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS: {
      return 'design-system';
    }
    default: {
      return '';
    }
  }
}
