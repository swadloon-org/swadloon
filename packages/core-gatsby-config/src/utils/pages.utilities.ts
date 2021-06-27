import { capital, lower, title } from 'case';
import { PAGE_LAYOUT, PAGE_TEMPLATE } from '../config/page.props';
import { SITE_LANGUAGES, SITE_LANGUAGES_HYPHEN } from '@newrade/core-common';
import { SOURCE_INSTANCE_NAME } from '../config/gatsby-source-instances';

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
    if (rawName === '/' || rawName === '' || rawName === 'index') {
      return 'Home';
    }

    return title(removeDir(removeLocalePrefix(removeDotPage(rawName))));
  }

  if (options?.locale === SITE_LANGUAGES.EN || options.locale === SITE_LANGUAGES.EN_CA) {
    if (rawName === '/' || rawName === '' || rawName === 'index') {
      return 'Home';
    }
    return title(removeDir(removeLocalePrefix(removeDotPage(rawName))));
  }

  if (rawName === '/' || rawName === '' || rawName === 'index') {
    return 'Accueil';
  }

  return lower(removeDir(removeLocalePrefix(removeDotPage(rawName))))
    .split('')
    .map((char, index) => (index === 0 ? capital(char) : char))
    .join('');

  function removeDotPage(rawName: string): string {
    return rawName.replace(/\.page$/, '');
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
    `^\/?(${[SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA, SITE_LANGUAGES_HYPHEN.EN_CA].join(
      '|'
    )})[\/|.]`,
    'gi'
  );
  const patternFr = new RegExp(
    `^\/?(${[SITE_LANGUAGES.FR, SITE_LANGUAGES.FR_CA, SITE_LANGUAGES_HYPHEN.FR_CA].join(
      '|'
    )})[\/|.]`,
    'gi'
  );
  const matchEn = patternEn.exec(nodeName);
  const matchFr = patternFr.exec(nodeName);
  const fileLocaleEn = matchEn?.[1]; // en, en_CA, en-CA
  const fileLocaleFr = matchFr?.[1]; // fr, fr_CA, fr-CA
  const defaultLocaleIsEn =
    defaultLangKey === SITE_LANGUAGES.EN || defaultLangKey === SITE_LANGUAGES.EN_CA;
  const defaultLocaleIsFr =
    defaultLangKey === SITE_LANGUAGES.FR || defaultLangKey === SITE_LANGUAGES.FR_CA;

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
 * Retrieve the locale from a nodename or page path
 */
export function getLocaleFromPath(nodeName?: string | null): SITE_LANGUAGES {
  return /fr\.+/.test(nodeName || '') ? SITE_LANGUAGES.FR : SITE_LANGUAGES.EN;
}

/**
 * Retrieve the locale from a nodename or page path
 */
export function getFullPageNodePath(parts: (string | null | undefined)[]): string {
  const path = parts.filter((part) => !!part && !!part.length).join('/');
  const fencedPath = path === '/' ? `/` : `/${path}/`;
  return fencedPath.replace(/\/\//, '/').replace('/index/', '/');
}

/**
 * Remove the locale prefix from a node name
 * e.g. 'en.my-doc' => 'my-mdx'
 */
export function removeLocalePrefix(name?: string | null): string {
  if (!name?.length) {
    return '';
  }
  return name.replace(/(en|fr)\./gi, '');
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

/**
 * Associate file source with their template
 */
export function getTemplateForSourceInstance(
  sourceInstanceName: SOURCE_INSTANCE_NAME
): PAGE_TEMPLATE {
  switch (sourceInstanceName) {
    case SOURCE_INSTANCE_NAME.MDX_PAGES: {
      return 'markdownPage';
    }
    case SOURCE_INSTANCE_NAME.DOCS: {
      return 'markdownDoc';
    }
    case SOURCE_INSTANCE_NAME.MONO_REPO_DOCS: {
      return 'markdownDoc';
    }
    case SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS: {
      return 'designSystem';
    }
    default: {
      return 'default';
    }
  }
}

/**
 * Associate file source with their Layout
 */
export function getLayoutForSourceInstance(sourceInstanceName: SOURCE_INSTANCE_NAME): PAGE_LAYOUT {
  switch (sourceInstanceName) {
    case SOURCE_INSTANCE_NAME.MDX_PAGES: {
      return 'default';
    }
    case SOURCE_INSTANCE_NAME.DOCS: {
      return 'docs';
    }
    case SOURCE_INSTANCE_NAME.MONO_REPO_DOCS: {
      return 'docs';
    }
    case SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS: {
      return 'designSystem';
    }
    default: {
      return 'default';
    }
  }
}
