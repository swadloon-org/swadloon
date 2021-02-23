import { Navigation } from '../navigation/navigation.model';
import { NavItem } from '../navigation/nav-item.model';
import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { title, lower, kebab } from 'case';

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
  sortOrderDirectories,
  sortOrderItems,
  ignoredItems,
  formatName,
  formatDisplayName,
}: {
  name: string;
  pageNodes?: PageNode[];
  sortOrderItems?: string[];
  sortOrderDirectories?: string[];
  ignoredItems?: string[];
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
  const normalizedIgnoredItems = ignoredItems?.map((item) => normalizeName(item));

  const filteredPageNodes = pageNodes
    // remove 404 pages
    .filter((node) => !(/404/gi.test(node.context?.name || '') || /404/gi.test(node.path || '')))
    // remove ignored items
    .filter((node) => !normalizedIgnoredItems?.find((item) => item === normalizeName(node.context?.name)));

  // find the dirNames
  const dirNames = filteredPageNodes.map((node) => getPageDirFromPath(node.path));

  // for item at the root the dir name is ''
  const navigation = [...new Set(dirNames)].reduce(
    (previous, current) => {
      // for each dir name, transform the nodes and place them in .items
      const currentDirName = current;

      const dirNameNodes = filteredPageNodes.filter((node) => getPageDirFromPath(node.path) === currentDirName);
      if (!dirNameNodes) {
        return previous;
      }

      previous.items = [
        ...previous.items,
        // create a new item
        {
          name: currentDirName ? currentDirName : '',
          displayName: formatDisplayName ? formatDisplayName(currentDirName) : defaultFormatDisplayName(currentDirName),
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
        : defaultFormatDisplayName(node.context?.name || node.context?.displayName),
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

function normalizeName(name?: string | null) {
  return kebab(name || '');
}

function defaultFormatDisplayName(name?: string | null): string {
  if (!name) {
    return '';
  }
  return title(defaultFormatName(name));
}

function defaultFormatName(name?: string | null): string {
  if (!name) {
    return '';
  }
  return name
    .replace('.page', '')
    .replace('design-system-', '')
    .replace(/\s-\s$/, '');
}
