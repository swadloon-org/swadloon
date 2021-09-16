import { SITE_LANGUAGES, SITE_LANGUAGE_SHORT } from '@newrade/core-common';
import { capital, lower, title } from 'case';
import { Page } from 'gatsby';
import { SOURCE_INSTANCE_NAME } from '../config/gatsby-source-instances';
import { GatsbyMarkdownFilePageContext, GatsbyPageAlternateLocale } from '../config/page-context';
import { PAGE_LAYOUT, PAGE_TEMPLATE } from '../config/page.props';

export const patternLocaleInPath =
  /\/?(?:(?<locale>[a-z]{2}(?:(?:-|_)[a-z]{0,2})?)\.)?(?<name>[a-z-_]+)(?<extension>\.(?:tsx|md|mdx))?\/?$/i;

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
export function getLocalePath(nodeName: string, defaultLocal: SITE_LANGUAGES): SITE_LANGUAGE_SHORT {
  // extract the locale name from node name
  const patternEn = new RegExp(
    `^\/?(${[SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA].join('|')})[\/|\.]`,
    'gi'
  );
  const patternFr = new RegExp(
    `^\/?(${[SITE_LANGUAGES.FR, SITE_LANGUAGES.FR_CA].join('|')})[\/|\.]`,
    'gi'
  );
  const matchEn = patternEn.exec(nodeName);
  const matchFr = patternFr.exec(nodeName);
  const fileLocaleEn = matchEn?.[1]; // en, en_CA, en-CA
  const fileLocaleFr = matchFr?.[1]; // fr, fr_CA, fr-CA
  const defaultLocaleIsEn =
    defaultLocal === SITE_LANGUAGES.EN || defaultLocal === SITE_LANGUAGES.EN_CA;
  const defaultLocaleIsFr =
    defaultLocal === SITE_LANGUAGES.FR || defaultLocal === SITE_LANGUAGES.FR_CA;

  // en lang, so a page with '/en/page' becomes '/page' and a page with path '/fr/page' becomes '/fr/page'
  if (defaultLocaleIsEn) {
    if (fileLocaleEn) {
      return SITE_LANGUAGE_SHORT.DEFAULT;
    }

    if (fileLocaleFr) {
      return SITE_LANGUAGE_SHORT.FR;
    }

    return SITE_LANGUAGE_SHORT.DEFAULT;
  }

  if (defaultLocaleIsFr) {
    if (fileLocaleFr) {
      return SITE_LANGUAGE_SHORT.DEFAULT;
    }

    if (fileLocaleEn) {
      return SITE_LANGUAGE_SHORT.EN;
    }

    return SITE_LANGUAGE_SHORT.DEFAULT;
  }

  return SITE_LANGUAGE_SHORT.DEFAULT;
}

/**
 * Retrieve the locale from a nodename or page path
 */
export function getLocaleFromPath(
  nodeName: string | null,
  defaultLocale: SITE_LANGUAGES
): SITE_LANGUAGES {
  if (!nodeName) {
    return defaultLocale || SITE_LANGUAGES.EN;
  }

  const match = patternLocaleInPath.exec(nodeName);
  const locale = match?.groups?.locale as SITE_LANGUAGES | undefined;

  // no match for locale, assume the default
  if (!locale) {
    return defaultLocale || SITE_LANGUAGES.EN;
  }

  return locale;
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
 * Remove the extension from a path
 * e.g. '/src/pages/en.my-doc.tsx' => '/src/pages/en.my-doc'
 */
export function remoteExtension(name?: string | null): string {
  if (!name) {
    return '';
  }

  const match = patternLocaleInPath.exec(name);
  const extension = match?.groups?.extension;

  // no match for extension
  if (!extension) {
    return name;
  }

  return name.replace(new RegExp(`${extension}$`, 'i'), '');
}

/**
 * Return the most simple country code, removing the regional part
 * @example
 *   fr-CA => fr
 *   fr_CA => fr
 *   ca => ca
 */
export function getLangSimpleCode(lang: string): SITE_LANGUAGE_SHORT {
  if (!lang) {
    return SITE_LANGUAGE_SHORT.DEFAULT;
  }
  return lang.replace(/(_|-)[a-z]+$/i, '').toLowerCase() as SITE_LANGUAGE_SHORT;
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

export type MatchingPageInput = Pick<
  Page<Pick<GatsbyMarkdownFilePageContext, 'absolutePath' | 'locale'>>,
  'context' | 'path'
>;
export type MatchingPageOutput = Partial<{
  [absolutePath: string]: {
    locale: SITE_LANGUAGES;
    path: string;
  }[];
}>;

/**
 * find alternate locale pages e.g.
 * for page `fr.page.md`, if there is a page called `en.page.md`
 * and another one called `page.md` with frontmatter slug /es/page
 * alternateLocales will be
 * { en: /en/page/, es: /es/page/ }
 */
export function getMatchingPageLocales(
  pages?: (MatchingPageInput | undefined)[]
): MatchingPageOutput {
  if (!pages) {
    return {};
  }

  // find dirs that have 2 or more matching pages (same dir, same name, different locale)
  const pageDirNames = pages.reduce((previous, current) => {
    if (!current) {
      return previous;
    }

    const dir = current.context.absolutePath.replace(patternLocaleInPath, '');
    const match = patternLocaleInPath.exec(current.context.absolutePath);
    const locale = (match?.groups?.locale as SITE_LANGUAGES) || current.context.locale;
    const name = match?.groups?.name;
    const extension = match?.groups?.extension;
    const pageDirName = `${dir}/${name}${extension}`;

    if (!match) {
      return previous;
    }

    if (!previous[pageDirName]) {
      previous[pageDirName] = [
        { locale: locale, absolutePath: current.context.absolutePath, path: current.path },
      ];
      return previous;
    }

    if (previous[pageDirName]) {
      previous[pageDirName] = [
        ...(previous[pageDirName] as {
          locale: SITE_LANGUAGES;
          absolutePath: string;
          path: string;
        }[]),
        { locale: locale, absolutePath: current.context.absolutePath, path: current.path },
      ];
      return previous;
    }

    return previous;
  }, {} as Partial<{ [key: string]: { locale: SITE_LANGUAGES; absolutePath: string; path: string }[] }>);

  const matchinPageDirNames = Object.keys(pageDirNames).reduce((previous, current) => {
    if (!pageDirNames?.[current]) {
      return previous;
    }

    const matchingPages = pageDirNames[current];

    if (matchingPages && matchingPages.length <= 1) {
      return previous;
    }

    matchingPages?.forEach((matchingPage) => {
      if (!previous[matchingPage.absolutePath]) {
        previous[matchingPage.absolutePath] = matchingPages.map((matchingPageInner) => ({
          locale: matchingPageInner.locale,
          path: matchingPageInner.path,
        }));
      }
    });

    return previous;
  }, {} as Partial<{ [absolutePath: string]: GatsbyPageAlternateLocale[] }>);

  return matchinPageDirNames;
}
