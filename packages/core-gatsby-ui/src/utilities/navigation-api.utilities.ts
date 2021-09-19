import { SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsb-config/config';
import { getLangSimpleCode } from '@newrade/core-react-ui';
import { LinkAPI, LinkType, NavComponent, NavigationAPI, PageAPI } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import { kebab, title } from 'case';
import { GatsbyPageNode } from './gatsby-page-node';

export const defaultOptions: Required<GetNavigationAPIOptions> = {
  pageNodes: [],
  navigationName: '',
  navigationComponent: NavComponent.navbar,
  includeLocales: [SITE_LANGUAGES.EN],
  sortOrderItems: [],
  sortOrderDirectories: [],
  excludePaths: ['/dev-404-page/', '/404/'],
  uppercaseWords: ['wsl', 'ui', 'ux', 'seo', 'ssh', 'css', 'api', 'ci', 'vm', 'cms', 'pr', 'cli'],
  translate: (key) => (key ? key : ''),
  formatLabel: (label) => (label ? title(label) : ''),
};

export type GetNavigationAPIOptions = {
  /**
   * Name of the navigation object
   * @example 'footer'
   */
  navigationName: string;
  /**
   * Navigation component
   */
  navigationComponent: NavComponent;
  /**
   * Page nodes to transform
   */
  pageNodes?: PartialOrNull<GatsbyPageNode>[];
  /**
   * Include only the listed locales
   */
  includeLocales?: SITE_LANGUAGES[];
  /**
   * Sort order for leafs navigation items
   */
  sortOrderItems?: string[];
  /**
   * Sort order for directories
   */
  sortOrderDirectories?: string[];
  /**
   * Excluded paths
   * @example '/404'
   */
  excludePaths?: string[];
  /**
   * Words to transform to UPPERCASE
   */
  uppercaseWords?: string[];
  /**
   * Translate function (is executed before formatLabel)
   */
  translate?: (key?: string | null) => string;
  /**
   * Format function applied to label or name if label does not exist
   */
  formatLabel?: (name?: string | null) => string;
};

/**
 * Returns a Navigation object from page nodes.
 * Accepts arrays of values to sort the directories and items.
 */
export function getNavigationAPIFromPageNodes(options: GetNavigationAPIOptions): NavigationAPI {
  if (!options.pageNodes?.length) {
    return {
      id: options.navigationName,
      name: options.navigationName,
      label: '',
      component: NavComponent.sidebar,
      links: [],
      subNavigation: [],
    };
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const validatedOptions = {
    ...mergedOptions,
    //
    // normalize sort orders
    //
    sortOrderItems: mergedOptions.sortOrderItems.map((item) => getNormalizedPath(item)),
    sortOrderDirectories: mergedOptions.sortOrderDirectories.map((item) => getNormalizedPath(item)),
    excludePaths: mergedOptions.excludePaths.map((item) => getNormalizedPath(item)),
  } as Required<GetNavigationAPIOptions>;

  const {
    navigationName,
    navigationComponent,
    pageNodes,
    includeLocales,
    sortOrderItems,
    sortOrderDirectories,
    excludePaths,
    uppercaseWords,
    translate,
    formatLabel,
  } = validatedOptions;

  //
  // filter out unwanted pages and locales
  //
  const filteredPageNodes = getFilteredPageNodes(mergedOptions);

  //
  // build tree navigation structure
  //
  return filteredPageNodes.reduce(
    (navigation, pageNode: PartialOrNull<GatsbyPageNode>) => {
      if (!pageNode.path) {
        return navigation;
      }

      // split node path into each part
      const pageNodePathParts = pageNode.path.split('/').filter((part) => !!part.length);

      if (!pageNodePathParts.length) {
        return navigation;
      }

      const pageNodeContext = pageNode.context as PartialOrNull<GatsbyMarkdownFilePageContext>;

      const formattedPageTitle = formatLabel(
        translate(
          getPageNodeNameWithoutLocale(
            pageNodeContext?.frontmatter?.title ||
              pageNodeContext?.displayName ||
              pageNodeContext?.name
          )
        )
      );

      setNavigationLinkAtPath({
        paths: pageNodePathParts,
        nav: navigation,
        linkEntry: {
          name: pageNodeContext?.name,
          label: formattedPageTitle,
          page: {
            name: pageNodeContext?.name,
            title: formattedPageTitle,
            slug: pageNode.path,
          },
        },
        options: validatedOptions,
      });

      return navigation;
    },
    {
      name: navigationName,
      component: navigationComponent,
      path: '/',
      links: [],
      subNavigation: [],
    } as NavigationAPI
  );
}

export function getNormalizedPath(name?: string | null) {
  if (!name) {
    return '';
  }
  return kebab(name);
}

/**
 * Remove page nodes that are not in the required locales
 * or have paths that should be excluded
 */
export function getFilteredPageNodes(
  options: Pick<Required<GetNavigationAPIOptions>, 'pageNodes' | 'includeLocales' | 'excludePaths'>
) {
  const filteredPageNodes = options.pageNodes
    //
    // remove 404 pages
    //
    .filter((node) => !(/404/gi.test(node.context?.name || '') || /404/gi.test(node.path || '')))
    //
    // keep page in specified locale
    //
    .filter((node) => {
      if (!(options.includeLocales && node.context?.locale)) {
        return node;
      }

      const pageLocaleIsIgnored = options.includeLocales.find(
        (locale) => getLangSimpleCode(locale) === getLangSimpleCode(node.context?.locale)
      );

      if (pageLocaleIsIgnored) {
        return true;
      }

      return false;
    })
    //
    // remove ignored paths
    //
    .filter(
      (node) =>
        !options.excludePaths?.find(
          (item) => getNormalizedPath(item) === getNormalizedPath(node.path)
        )
    );

  return filteredPageNodes;
}

export function getNavigationForPath(
  /**
   * [] means the root level
   */
  pathParts: string[],
  navigations?: NavigationAPI[] | null
): Partial<{ foundNav: NavigationAPI; foundLink: LinkAPI; foundPage: PageAPI }> {
  if (!navigations) {
    return { foundNav: undefined, foundLink: undefined, foundPage: undefined };
  }

  const completePath = getCompletePath(pathParts);

  let foundNav: undefined | NavigationAPI = undefined;
  let foundLink: undefined | LinkAPI = undefined;
  let foundPage: undefined | PageAPI = undefined;

  navigations
    .filter((nav) => !!nav as NavigationAPI)
    .every((nav) => {
      if (nav.path === completePath) {
        foundNav = nav as NavigationAPI;
        return false;
      }

      if (nav.subNavigation && nav.subNavigation.length) {
        const result = getNavigationForPath(pathParts, nav.subNavigation as NavigationAPI[]);
        foundNav = result.foundNav;
        foundLink = result.foundLink;
        foundPage = result.foundPage;
        if (foundNav || foundLink || foundPage) {
          return false;
        }
        return true;
      }

      if (nav.links && nav.links.length) {
        nav.links.every((link) => {
          if (!link) {
            return true;
          }
          if (!link.page) {
            return true;
          }
          if (completePath === link.page.slug) {
            foundNav = nav;
            foundLink = link;
            foundPage = link.page as PageAPI;
          }
          if (foundNav || foundLink || foundPage) {
            return false;
          }
          return true;
        });
      }

      return true;
    });

  return { foundNav, foundLink, foundPage };
}

/**
 * Create a NavigationAPI object in a navigation tree at a specific path
 */
export function setNavigationAtPath({
  nav,
  navigationEntry,
  paths,
  currentLevel = 1,
  options,
}: {
  nav: NavigationAPI;
  navigationEntry?: NavigationAPI;
  paths: string[];
  currentLevel?: number;
  options: Required<GetNavigationAPIOptions>;
}): NavigationAPI {
  // root level is 1, so ['a', 'b'] is 3 levels in total
  const nbOfLevels = paths.length + 1;
  // true if the current level is the end of the passed paths
  const levelIsLeaf = currentLevel === nbOfLevels;

  if (currentLevel > nbOfLevels) {
    return nav;
  }

  // if the first level (root) does not have a path, create it
  if (currentLevel === 1) {
    return setNavigationAtPath({
      paths,
      nav: {
        ...nav,
        path: nav.path ? nav.path : '/',
      },
      navigationEntry,
      currentLevel: currentLevel + 1,
      options,
    });
  }

  // take the parts up to the parent
  const parentPathParts = paths.slice(0, currentLevel - 2);
  // take the parts up to the current level
  const currentPathParts = paths.slice(0, currentLevel - 1);
  // take the parts up to the current level
  const currentPathLast = currentPathParts.slice(currentPathParts.length - 1);

  const existingSubnav = getNavigationForPath(currentPathParts, [nav]).foundNav;
  const parentSubnav = getNavigationForPath(parentPathParts, [nav]).foundNav;

  const currentPath = getCompletePath(currentPathParts);
  const currentPathName = currentPathLast.join('-');

  // if we are at the final level, insert the navigationEntry
  // otherwise just create a minimal nav entry from the path
  const insertedNavigationEntry = levelIsLeaf
    ? {
        name: currentPathName,
        path: currentPath,
        ...navigationEntry,
        label: navigationEntry?.label
          ? navigationEntry.label
          : options.formatLabel(currentPathName),
      }
    : {
        name: currentPathName,
        path: currentPath,
        label: options.formatLabel(currentPathName),
      };

  // if the parent path has been created, add the current part to the subnav
  if (parentSubnav) {
    if (!parentSubnav.subNavigation) {
      parentSubnav.subNavigation = [];
    }

    // if the sub nav entry already exist merge it with the inserted navigation entry
    if (existingSubnav) {
      existingSubnav.id = insertedNavigationEntry.id;
      existingSubnav.name = insertedNavigationEntry.name;
      existingSubnav.label = insertedNavigationEntry.label;
      existingSubnav.component = insertedNavigationEntry.component;
      existingSubnav.tags = existingSubnav.tags
        ? [...existingSubnav.tags, ...(insertedNavigationEntry.tags || [])]
        : insertedNavigationEntry.tags;
      existingSubnav.links = existingSubnav.links
        ? [...existingSubnav.links, ...(insertedNavigationEntry.links || [])]
        : insertedNavigationEntry.links;
      return setNavigationAtPath({
        paths,
        nav,
        navigationEntry,
        currentLevel: currentLevel + 1,
        options,
      });
    }

    parentSubnav.subNavigation.push(insertedNavigationEntry);

    return setNavigationAtPath({
      paths,
      nav,
      navigationEntry,
      currentLevel: currentLevel + 1,
      options,
    });
  }

  // otherwise, create the sub nav at the current navigation level
  if (!existingSubnav) {
    if (!nav.subNavigation) {
      nav.subNavigation = [];
    }

    nav.subNavigation.push(insertedNavigationEntry);
  }

  return setNavigationAtPath({
    paths,
    nav,
    navigationEntry,
    currentLevel: currentLevel + 1,
    options,
  });
}

/**
 * Create a LinkAPI object in a navigation tree at a specific path
 */
export function setNavigationLinkAtPath({
  paths,
  nav,
  linkEntry,
  options,
}: {
  paths: string[];
  nav: NavigationAPI;
  linkEntry?: LinkAPI;
  options: Required<GetNavigationAPIOptions>;
}): NavigationAPI {
  // take the parts up to the parent
  const parentPathParts = paths.slice(0, paths.length - 1);
  const currentPathLast = paths.slice(paths.length - 1).join('');
  const currentPathParts = paths;

  const currentPath = getCompletePath(currentPathParts);
  const currentPathName = currentPathParts.join('');
  const linkEntryIsIndex = linkEntry && linkEntry.name && /index/gi.test(linkEntry.name);
  const { foundNav, foundLink, foundPage } = getNavigationForPath(parentPathParts, [nav]);

  const newLinkEntry: LinkAPI = {
    name: currentPathLast,
    label: options.formatLabel(currentPathLast),
    type: LinkType.internalPage,
    page: {
      name: currentPathLast,
      ...linkEntry?.page,
      slug: currentPath,
    },
    ...linkEntry,
  };

  // if the navigation level does not exist, create it
  // and insert the link
  if (!foundNav) {
    if (linkEntryIsIndex) {
      // if a link is an index, create a sub navigation
      setNavigationAtPath({
        paths: currentPathParts,
        nav,
        navigationEntry: {
          name: newLinkEntry.name,
          label: options.formatLabel(currentPathLast),
          links: [newLinkEntry],
        },
        options,
      });
      return nav;
    }

    setNavigationAtPath({
      paths: parentPathParts,
      nav,
      navigationEntry: {
        name: newLinkEntry.name,
        label: options.formatLabel(currentPathLast),
        links: [newLinkEntry],
      },
      options,
    });
    return nav;
  }

  if (linkEntryIsIndex) {
    setNavigationAtPath({
      paths: currentPathParts,
      nav,
      navigationEntry: {
        name: newLinkEntry.name,
        label: options.formatLabel(currentPathLast),
        links: [newLinkEntry],
      },
      options,
    });
    return nav;
  }

  if (!foundNav.links) {
    foundNav.links = [];
  }

  // otherwise just insert the new link in the links
  foundNav.links.push(newLinkEntry);

  return nav;
}

/**
 * Returns a complete path with start and trailing slashes
 */
function getCompletePath(paths?: string[]): string {
  if (!paths) {
    return '/';
  }

  if (!paths.length) {
    return '/';
  }

  return `/${paths.join('/')}/`;
}

export function getPageNodeNameWithoutLocale(name?: string | null) {
  if (!name) {
    return '';
  }
  return name.replace(/^(.+)\./gi, '');
}
