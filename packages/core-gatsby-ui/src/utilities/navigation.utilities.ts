import { Navigation } from '../api/navigation.model';
import { NavItem } from '../navigation/nav-item.model';
import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { title, kebab, capital, lower } from 'case';
import { SITE_LANGUAGES } from '@newrade/core-common';

/**
 * Simplified type for a Page Node
 * uses the same context that is used to create all pages.
 */
export type PageNode = {
  path: string;
  context?: GatsbyCommonPageContext | null;
};

/**
 * Returns a Navigation object from page nodes.
 * Accepts arrays of values to sort the directories and items.
 */
export function getNavigationFromPageNodes({
  name,
  pageNodes,
  locales,
  sortOrderItems,
  sortOrderDirectories,
  excludedItems,
  uppercaseWords = ['wsl', 'ui', 'ux', 'seo', 'ssh', 'css', 'api'],
  formatName,
  formatDisplayName,
}: {
  name: string;
  pageNodes?: PageNode[];
  locales?: SITE_LANGUAGES[];
  sortOrderItems?: string[];
  sortOrderDirectories?: string[];
  excludedItems?: string[];
  uppercaseWords?: string[];
  formatName?: (name?: string | null) => string;
  formatDisplayName?: (name?: string | null) => string;
}): Navigation {
  if (!pageNodes?.length) {
    return {
      name,
      items: [],
    };
  }

  const normalizedSortOrderItems = sortOrderItems?.map((item) => normalizeName(item));
  const normalizedSortOrderDirectories = sortOrderDirectories?.map((item) => normalizeName(item));
  const normalizedIgnoredItems = excludedItems?.map((item) => normalizeName(item));

  const filteredPageNodes = pageNodes
    // remove 404 pages
    .filter((node) => !(/404/gi.test(node.context?.name || '') || /404/gi.test(node.path || '')))
    // keep page in specified locale
    .filter((node) => {
      if (!(locales && node.context?.locale)) {
        return node;
      }

      if (locales.find((locale) => locale === node.context?.locale)) {
        return true;
      }

      return false;
    })
    // remove ignored items
    .filter((node) => !normalizedIgnoredItems?.find((item) => item === normalizeName(node.context?.name)));

  // find the dirNames
  const dirNames = filteredPageNodes.map(dirNamePredicate);

  function dirNamePredicate(node: PageNode) {
    if (node.context?.name && /index/.test(node.context?.name)) {
      return getPageDirFromPathIndex(node.path);
    }

    return getPageDirFromPath(node.path);
  }

  // for item at the root the dir name is ''
  const navigation = [...new Set(dirNames)].reduce(
    (previous, current) => {
      // for each dir name, transform the nodes and place them in .items
      const currentDirName = current;

      const dirNameNodes = filteredPageNodes.filter((node) => dirNamePredicate(node) === currentDirName);
      if (!dirNameNodes) {
        return previous;
      }

      previous.items = [
        ...previous.items,
        // create a new item
        {
          name: currentDirName ? currentDirName : 'Home',
          displayName: formatDisplayName
            ? formatDisplayName(currentDirName)
            : defaultFormatDisplayName({ name: currentDirName, uppercaseWords }),
          path: currentDirName ? currentDirName : '',
          // for each child nodes, creat a nav item
          items: dirNameNodes
            .map((node) => getNavItemShallow(node))
            // apply sorting on items, if specified
            .sort((a, b) => {
              if (!normalizedSortOrderItems) {
                return 0;
              }

              const indexA = normalizedSortOrderItems.indexOf(normalizeName(a.name));
              const indexB = normalizedSortOrderItems.indexOf(normalizeName(b.name));

              if (indexA === indexB) {
                return 0;
              }

              if (indexA === -1) {
                return 1;
              }

              if (indexB === -1) {
                return -1;
              }

              return indexA > indexB ? 1 : -1;
            }),
        },
        // apply sorting on directories, if specified
      ].sort((a, b) => {
        if (!normalizedSortOrderDirectories) {
          return 0;
        }

        const indexA = normalizedSortOrderDirectories.indexOf(normalizeName(a.name));
        const indexB = normalizedSortOrderDirectories.indexOf(normalizeName(b.name));

        if (indexA === indexB) {
          return 0;
        }

        if (indexA === -1) {
          return 1;
        }

        if (indexB === -1) {
          return -1;
        }

        return indexA > indexB ? 1 : -1;
      });

      return previous;
    },
    {
      name,
      items: [],
    } as Navigation
  );

  return navigation;

  function getNavItemShallow(node: PageNode): NavItem {
    return {
      name: formatName ? formatName(node.context?.name) : defaultFormatName(node.context?.name),
      displayName: formatDisplayName
        ? formatDisplayName(node.context?.name || node.context?.displayName)
        : defaultFormatDisplayName({
            name: node.context?.name || node.context?.displayName,
            lang: node.context?.locale,
            uppercaseWords,
          }),
      // leave the node path untouched
      path: node.path,
    };
  }
}

/**
 * @param path relative path
 * @example /dir/page-name.tsx => dir
 */
export function getPageDirFromPath(path?: string | null): string {
  if (!path) {
    return '';
  }

  const reg = /(\/(?<lang>fr|en|fr_CA|en_CA|fr-CA|en-CA))?(\/(?<source>docs|core-docs|design-system))?(\/?(?<dirname>.+)\/)?((?<pagename>[a-z\-]+|\/))(\.(?<ext>jsx|tsx|mdx|md))?/gi;
  const match = reg.exec(path);
  const dirName = match?.groups?.dirname;
  return dirName || '';
}

export function getPageDirFromPathIndex(path?: string | null): string {
  if (!path) {
    return '';
  }

  const reg = /(\/(?<lang>fr|en|fr_CA|en_CA|fr-CA|en-CA))?(\/(?<source>docs|core-docs|design-system))?(\/(?<dirname>.+)\/)/gi;
  const match = reg.exec(path);
  const dirName = match?.groups?.dirname;
  return dirName || '';
}

export function normalizeName(name?: string | null) {
  if (!name) {
    return '';
  }
  const nameWithoutLocale = name.replace(/^(en|fr)\./gi, '');

  return kebab(nameWithoutLocale);
}

export function defaultFormatDisplayName({
  name,
  lang,
  uppercaseWords,
}: {
  name?: string | null;
  lang?: SITE_LANGUAGES;
  uppercaseWords?: string[];
}): string {
  if (!name) {
    return '';
  }

  const nameWithoutLocale = name.replace(/^(en|fr)\./gi, '');
  const nameWithoutDotPage = nameWithoutLocale.replace('.page', '');
  const nameNoTrailingDash = nameWithoutDotPage.replace(/\s-\s$/, '');

  if (lang === SITE_LANGUAGES.FR || lang === SITE_LANGUAGES.FR_CA) {
    const nameDefaultIndex = nameNoTrailingDash.replace('index', 'Aperçu');
    const nameWithFRTitle = nameDefaultIndex
      .trim()
      .split('')
      .map((char, index) => (index === 0 ? capital(char) : char))
      .join('');
    const nameWithUppercaseWords = getNameWithUppercaseWords({ name: nameWithFRTitle, words: uppercaseWords });
    return nameWithUppercaseWords;
  }

  const nameDefaultIndex = nameNoTrailingDash.replace('index', 'Overview');
  const nametTitle = title(nameDefaultIndex);
  const nameWithUppercaseWords = getNameWithUppercaseWords({ name: nametTitle, words: uppercaseWords });
  return nameWithUppercaseWords;
}

function getNameWithUppercaseWords({ name, words }: { name?: string; words?: string[] }): string {
  if (!name) {
    return '';
  }

  if (!words?.length) {
    return name;
  }

  const wordsToFind = words.map((word) => lower(word));

  return name
    .split(' ')
    .map((part) => (wordsToFind.includes(lower(part)) ? part.toUpperCase() : part))
    .join(' ');
}

export function defaultFormatName(name?: string | null): string {
  if (!name) {
    return '';
  }
  return name
    .replace('.page', '')
    .replace('design-system-', '')
    .replace(/\s-\s$/, '');
}
