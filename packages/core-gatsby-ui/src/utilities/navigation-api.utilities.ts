import { kebab, lower, title } from 'case';

import { SITE_LANGUAGE_SHORT, SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsb-config/config';
import { getLangSimpleCode } from '@newrade/core-react-ui';
import {
  BreadcrumbsAPI,
  LinkAPI,
  LinkType,
  NavComponent,
  NavigationAPI,
  PageAPI,
} from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/utilities';

import { GatsbyPageNode } from './gatsby-page-node';

export const defaultOptions: Required<GetNavigationAPIOptions> = {
  pageNodes: [],
  navigationName: '',
  navigationComponent: NavComponent.navbar,
  locale: SITE_LANGUAGES.EN,
  sortOrderDirectories: [
    /overview/i,
    /accessibility/i,
    /tech/i,
    /theming/i,
    /where to start/i,
    /get started/i,
    /development process/i,
    /guides/i,
    /packages/i,
    /reference/i,
    /brand/i,
    /templates/i,
    /data viz/i,
    /data visualization/i,
    /guidelines/i,
    /animations/i,
    /components/i,
    /print/i,
    /tokens/i,
    /tools/i,
    /Content API/i,
  ],
  sortOrderItems: [
    /overview/i,
    /accessibility/i,
    /where to start/i,
    /get started/i,
    /tech/i,
    /theming/i,
    /demos/i,
  ],
  includedPaths: [],
  excludePaths: ['/dev-404-page/', '/404/'],
  uppercaseWords: ['wsl', 'ui', 'ux', 'seo', 'ssh', 'css', 'api', 'ci', 'vm', 'cms', 'pr', 'cli'],
  translate: (key, language) => {
    if (key !== 'overview') {
      return key || '';
    }
    if (getLangSimpleCode(language) === SITE_LANGUAGE_SHORT.FR) {
      return `Vue d'ensemble`;
    }
    return `Overview`;
  },
  formatLabel: (name, language, uppercaseWords) => {
    const lang = getLangSimpleCode(language);
    if (lang === SITE_LANGUAGE_SHORT.FR) {
      if (!name) {
        return '';
      }
      const firstLetterCap = [name.slice(0, 1).toUpperCase(), name.slice(1)].join('');
      return getNameWithUppercaseWords({ name: firstLetterCap, words: uppercaseWords });
    }
    const titleLabel = title(name || '');
    return getNameWithUppercaseWords({ name: titleLabel, words: uppercaseWords });
  },
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
   * Include only the listed locale
   */
  locale?: SITE_LANGUAGES;
  /**
   * Sort order for directories
   */
  sortOrderDirectories?: (string | RegExp)[];
  /**
   * Sort order for leafs navigation items
   */
  sortOrderItems?: (string | RegExp)[];
  /**
   * Included paths or patterns
   * @example '/core-docs/'
   */
  includedPaths?: (string | RegExp)[];
  /**
   * Excluded paths or patterns
   * If both includedPaths and excludePaths are specified
   * excludePaths is applied after includedPaths
   *
   * @example '/404'
   */
  excludePaths?: (string | RegExp)[];
  /**
   * Words to transform to UPPERCASE
   */
  uppercaseWords?: string[];
  /**
   * Translate function (is executed before formatLabel)
   */
  translate?: (key?: string | null, language?: SITE_LANGUAGES) => string;
  /**
   * Format function applied to label or name if label does not exist
   */
  formatLabel?: (
    name?: string | null,
    language?: SITE_LANGUAGES,
    uppercaseWords?: string[]
  ) => string;
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
    // normalize sort orders and exclude/include patterns (for string only)
    //
    sortOrderItems: mergedOptions.sortOrderItems.map((pattern) =>
      typeof pattern === 'string' ? getNormalizedPath(pattern) : pattern
    ),
    sortOrderDirectories: mergedOptions.sortOrderDirectories.map((pattern) =>
      typeof pattern === 'string' ? getNormalizedPath(pattern) : pattern
    ),
    excludePaths: mergedOptions.excludePaths.map((pattern) =>
      typeof pattern === 'string' ? getNormalizedPath(pattern) : pattern
    ),
    includedPaths: mergedOptions.includedPaths.map((pattern) =>
      typeof pattern === 'string' ? getNormalizedPath(pattern) : pattern
    ),
  } as Required<GetNavigationAPIOptions>;

  const {
    navigationName,
    navigationComponent,
    pageNodes,
    locale,
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
  const filteredPageNodes = getFilteredPageNodes(validatedOptions);

  //
  // build tree navigation structure
  //
  return filteredPageNodes.reduce(
    (navigation, pageNode: PartialOrNull<GatsbyPageNode>) => {
      if (!pageNode.path) {
        return navigation;
      }

      const pageLocale = pageNode.context?.locale || SITE_LANGUAGES.EN;
      const pageNodePathParts = getPathParts({ path: pageNode.path });

      if (!pageNodePathParts.length) {
        return navigation;
      }

      const pageNodeContext = pageNode.context as PartialOrNull<GatsbyMarkdownFilePageContext>;

      const formattedPageTitle =
        pageNodeContext?.frontmatter?.title ||
        pageNodeContext?.displayName ||
        formatLabel(
          translate(getPageNodeNameWithoutLocale(pageNodeContext?.name), pageLocale),
          pageLocale,
          uppercaseWords
        );

      setNavigationLinkAtPath({
        paths: pageNodePathParts,
        nav: navigation,
        pageLocale,
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

      const sortedNavigation = getSortedNavigation(navigation, validatedOptions);

      return sortedNavigation;
    },
    {
      name: navigationName,
      component: navigationComponent,
      path: `/`,
      links: [],
      subNavigation: [],
    } as NavigationAPI
  );
}

/**
 * Create a NavigationAPI object in a navigation tree at a specific path
 */
export function setNavigationLinkAtPath({
  paths,
  nav,
  pageLocale,
  linkEntry,
  options,
}: {
  paths: string[];
  nav: NavigationAPI;
  pageLocale: SITE_LANGUAGES;
  linkEntry?: LinkAPI;
  options: Required<GetNavigationAPIOptions>;
}): NavigationAPI {
  //
  // for a path /fr/docs/design/page
  //

  // locale path /fr/docs/design/page => 'fr'
  const localePath = [paths[0]].find((path) => path === getLangSimpleCode(pageLocale));
  // locale path without locale /fr/docs/design/page => ['fr', 'docs', 'design', 'page-name']
  const pathsWithoutLocale = localePath ? paths.slice(1) : paths;
  const parentPathParts = pathsWithoutLocale.slice(0, pathsWithoutLocale.length - 1); // ['docs', 'design']
  const parentPathPart = pathsWithoutLocale.slice(
    pathsWithoutLocale.length - 2,
    pathsWithoutLocale.length - 1
  ); // ['design']
  const parentPathPartName = parentPathPart.join(''); // 'design'
  const currentPathPart = pathsWithoutLocale.slice(pathsWithoutLocale.length - 1); // ['page-name']
  const currentPathLast = currentPathPart.join('').replace(/-/g, ' '); // 'page-name' => 'page name'
  const currentPathName = paths.join('.');

  const currentPath = getCompletePath(pathsWithoutLocale);
  const currentPathWithLocale = getCompletePath(paths);
  const linkEntryIsIndex = linkEntry && linkEntry.name && /index/gi.test(linkEntry.name);
  const { foundNav, foundLink, foundPage } = getNavigationForPath(parentPathParts, [nav]);

  // composes format and translate
  const translateAndFormat = (
    name?: string | null | undefined,
    language?: SITE_LANGUAGES | undefined
  ) => {
    return options.formatLabel(options.translate(name, language), language, options.uppercaseWords);
  };

  const linkLabel = linkEntryIsIndex
    ? translateAndFormat('overview', pageLocale)
    : linkEntry?.label
    ? linkEntry?.label
    : translateAndFormat(currentPathLast, pageLocale);

  const newLinkEntry: LinkAPI = {
    name: currentPathName,
    type: LinkType.internalPage,
    page: {
      name: currentPathName,
      ...linkEntry?.page,
      slug: currentPathWithLocale,
    },
    ...linkEntry,
    label: linkLabel,
  };

  // if the navigation level does not exist, create it
  // and insert the link
  if (!foundNav) {
    if (linkEntryIsIndex) {
      // if a link is an index, create a sub navigation using the parent path
      // e.g. /design-system/index => design-system is the parent path
      setNavigationAtPath({
        paths: pathsWithoutLocale,
        localePath,
        nav,
        pageLocale,
        navigationEntry: {
          name: linkEntry.name,
          label: translateAndFormat(currentPathLast, pageLocale),
          component: NavComponent.menu,
          links: [],
          subNavigation: [
            {
              name: currentPathLast,
              label: translateAndFormat(currentPathLast, pageLocale),
              path: currentPath,
              component: NavComponent.link,
              links: [],
              link: newLinkEntry,
            },
          ],
        },
        options,
      });
      return nav;
    }

    // if it's not an index
    // e.g. /design-system/index => design-system is the parent path
    setNavigationAtPath({
      paths: parentPathParts,
      localePath,
      nav,
      navigationEntry: {
        name: currentPathName,
        label: translateAndFormat(parentPathPartName, pageLocale),
        component: NavComponent.menu,
        links: [],
        subNavigation: [
          {
            name: currentPathName,
            label: newLinkEntry.label,
            path: currentPath,
            component: NavComponent.link,
            links: [],
            link: newLinkEntry,
          },
        ],
      },
      pageLocale,
      options,
    });
    return nav;
  }

  if (!foundNav.links) {
    foundNav.links = [];
  }

  if (!foundNav.subNavigation) {
    foundNav.subNavigation = [];
  }

  if (linkEntryIsIndex) {
    // if a link is an index, create a sub navigation using the parent path
    // e.g. /design-system/index => design-system is the parent path
    setNavigationAtPath({
      paths: pathsWithoutLocale,
      localePath,
      nav,
      pageLocale,
      navigationEntry: {
        name: currentPathName,
        label: translateAndFormat(currentPathLast, pageLocale),
        component: NavComponent.menu,
        links: [],
        subNavigation: [
          {
            name: linkEntry.name,
            label: newLinkEntry.label,
            path: currentPathWithLocale,
            component: NavComponent.link,
            links: [],
            link: newLinkEntry,
          },
        ],
      },
      options,
    });
    return nav;
  }

  // otherwise just insert the new link in the current nav
  foundNav.subNavigation.push({
    name: currentPathName,
    label: translateAndFormat(currentPathLast, pageLocale),
    component: NavComponent.link,
    link: newLinkEntry,
    path: currentPathWithLocale,
  });

  // if the current nav was a link, we added more sub nav object, so it becomes a menu
  if (foundNav.component === NavComponent.link) {
    foundNav.component = NavComponent.menu;
  }

  return nav;
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
  options: Pick<
    Required<GetNavigationAPIOptions>,
    'pageNodes' | 'locale' | 'excludePaths' | 'includedPaths'
  >
) {
  const filteredPageNodes = options.pageNodes
    //
    // find pages that matches includedPaths
    //
    .filter((node) => {
      if (!options.includedPaths.length) {
        return true;
      }
      return options.includedPaths.some((pattern) => {
        if (!node.path) {
          return false;
        }
        if (typeof pattern === 'object') {
          return pattern.test(node.path);
        }
        return getNormalizedPath(pattern) === getNormalizedPath(node.path);
      });
    })
    //
    // remove ignored paths
    //
    .filter((node) => {
      if (!options.excludePaths.length) {
        return true;
      }
      return !options.excludePaths.some((pattern) => {
        if (!node.path) {
          return false;
        }
        if (typeof pattern === 'object') {
          return !pattern.test(node.path);
        }
        return getNormalizedPath(pattern) === getNormalizedPath(node.path);
      });
    })
    //
    // remove 404 pages
    //
    .filter((node) => !(/404/gi.test(node.context?.name || '') || /404/gi.test(node.path || '')))
    //
    // keep page in specified locale
    //
    .filter((node) => {
      if (!options.locale?.length) {
        return true;
      }

      if (!node.context?.locale) {
        return true;
      }

      const pageLocaledIsIncluded =
        getLangSimpleCode(options.locale) === getLangSimpleCode(node.context?.locale);

      if (pageLocaledIsIncluded) {
        return true;
      }

      return false;
    });

  return filteredPageNodes;
}

/**
 * Recursively sort navigation and links according to
 * their position in `sortOrderDirectories` and `sortOrderItems`
 */
export function getSortedNavigation(
  navigation: NavigationAPI,
  options: Pick<
    Required<GetNavigationAPIOptions>,
    'pageNodes' | 'sortOrderDirectories' | 'sortOrderItems'
  >
): NavigationAPI {
  const links = [...(navigation.links?.length ? navigation.links : [])];
  links.sort(sortLinkPredicate(options));

  const subNavigation = [...(navigation.subNavigation?.length ? navigation.subNavigation : [])];
  subNavigation.sort(sortNavigationPredicate(options));

  return {
    ...navigation,
    links,
    subNavigation: subNavigation.map((subNav) =>
      getSortedNavigation(subNav as NavigationAPI, options)
    ),
  };
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

      return true;
    });

  return { foundNav, foundLink, foundPage };
}

/**
 * Given a path, find the matching nav object in a NavigationAPI tree and build a list of LinkAPI objects.
 */
export function getBreadcrumbsForPath(
  pathParts: string[],
  navigations?: NavigationAPI[] | null
): BreadcrumbsAPI {
  if (!navigations) {
    return { links: [] };
  }

  const completePath = getCompletePath(pathParts);

  let links: LinkAPI[] = [];

  navigations
    .filter((nav) => !!nav as NavigationAPI)
    .every((nav) => {
      const navPathMatch = isPathActive({ path: nav.path, pathname: completePath });
      //
      // no match, we continue in the list
      //
      if (!navPathMatch.match) {
        return true;
      }

      const navIsIndex = nav.name ? /index$/i.test(nav.name) : false;

      if (!navIsIndex && navPathMatch.exact && !nav.subNavigation?.length) {
        return false;
      }

      //
      // we skip the index navigation elements
      //
      if (!navIsIndex) {
        //
        // if there is a nav link present at this navigation level, use it
        //
        if (nav.link) {
          links.push(nav.link);
          return true;
        }
        //
        // check if the nav has an index in its sub navigation
        //
        if (nav.subNavigation && nav.subNavigation.length) {
          const indexSubNav = nav.subNavigation.find((subNav) =>
            subNav?.name ? /index$/i.test(subNav.name) : false
          );
          //
          // if there is a index subnav, add its link but keep the parent nav's label
          //
          if (indexSubNav && indexSubNav.link) {
            links.push({ ...indexSubNav.link, label: nav.label });
          } else {
            //
            // if there is no link object, just create a non-clickable link
            //
            links.push({
              name: nav.name,
              label: nav.label,
            });
          }
        }
      }

      if (nav.subNavigation && nav.subNavigation.length) {
        const nestedLinks = getBreadcrumbsForPath(pathParts, nav.subNavigation as NavigationAPI[]);

        if (nestedLinks.links?.length) {
          links = [...links, ...(nestedLinks.links as LinkAPI[])];
          return false;
        }
      }

      return true;
    });

  return { links };
}

/**
 * Create a NavigationAPI object in a navigation tree at a specific path
 */
export function setNavigationAtPath({
  nav,
  navigationEntry,
  pageLocale,
  paths,
  localePath,
  currentLevel = 1,
  options,
}: {
  nav: NavigationAPI;
  navigationEntry?: NavigationAPI;
  pageLocale: SITE_LANGUAGES;
  paths: string[];
  localePath?: string;
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

  // composes format and translate
  const translateAndFormat = (
    name?: string | null | undefined,
    language?: SITE_LANGUAGES | undefined
  ) => options.formatLabel(options.translate(name, language), language, options.uppercaseWords);

  const pathsWithLocale = localePath ? [localePath, ...paths] : paths;

  // if the first level (root) does not have a path, create it
  if (currentLevel === 1) {
    return setNavigationAtPath({
      paths,
      localePath,
      nav: {
        ...nav,
        // if provided, insert the locale path before the current navigation path
        path: nav.path ? (localePath ? `${localePath}/${nav.path}` : nav.path) : '/',
      },
      navigationEntry,
      pageLocale,
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

  const currentPath = getCompletePath(
    localePath ? [localePath, ...currentPathParts] : currentPathParts
  );
  const currentPathName = currentPathLast.join(' ');

  // if we are at the final level, insert the navigationEntry
  // otherwise just create a minimal nav entry from the path
  const insertedNavigationEntry = levelIsLeaf
    ? {
        name: currentPathName,
        path: currentPath,
        ...navigationEntry,
        label: navigationEntry?.label
          ? translateAndFormat(navigationEntry.label, pageLocale)
          : translateAndFormat(currentPathName, pageLocale),
      }
    : {
        name: currentPathName,
        path: currentPath,
        label: translateAndFormat(currentPathName, pageLocale),
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
      existingSubnav.label = translateAndFormat(insertedNavigationEntry.label, pageLocale);
      existingSubnav.component = insertedNavigationEntry.component;
      existingSubnav.tags = existingSubnav.tags
        ? [...existingSubnav.tags, ...(insertedNavigationEntry.tags || [])]
        : insertedNavigationEntry.tags;
      existingSubnav.links = existingSubnav.links
        ? [...existingSubnav.links, ...(insertedNavigationEntry.links || [])]
        : insertedNavigationEntry.links;
      existingSubnav.subNavigation = existingSubnav.subNavigation
        ? [...existingSubnav.subNavigation, ...(insertedNavigationEntry.subNavigation || [])]
        : insertedNavigationEntry.subNavigation;
      return setNavigationAtPath({
        paths,
        localePath,
        nav,
        navigationEntry,
        pageLocale,
        currentLevel: currentLevel + 1,
        options,
      });
    }

    parentSubnav.subNavigation.push(insertedNavigationEntry);

    return setNavigationAtPath({
      paths,
      localePath,
      nav,
      navigationEntry,
      pageLocale,
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
    localePath,
    nav,
    navigationEntry,
    pageLocale,
    currentLevel: currentLevel + 1,
    options,
  });
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

/**
 * Retun a path without the leading locale prefix
 * @example fr-ca.index.md => index.md
 */
export function getPageNodeNameWithoutLocale(name?: string | null) {
  if (!name) {
    return '';
  }
  return name.replace(/^(.+)\./gi, '');
}

export function getPathParts({ path }: { path?: string | null }): string[] {
  if (!path) {
    return [];
  }
  return (
    path
      // split node path into each part
      .split('/')
      // remove empty parts
      .filter((part) => !!part.length)
  );
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

export function sortLinkPredicate(
  options: Pick<Required<GetNavigationAPIOptions>, 'sortOrderDirectories' | 'sortOrderItems'>
) {
  return function (a?: LinkAPI | null, b?: LinkAPI | null) {
    if (!options.sortOrderItems) {
      return 0;
    }

    if (!a) {
      return 0;
    }

    if (!b) {
      return 0;
    }

    const linkAIdentifier = a.label || '';
    const linkBIdentifier = b.label || '';

    function getPageIndex(pageIdentifier?: string | null) {
      return options.sortOrderItems.findIndex((pattern) => {
        if (!pageIdentifier) {
          return false;
        }
        return typeof pattern === 'object'
          ? pattern.test(pageIdentifier)
          : pattern === getNormalizedPath(pageIdentifier);
      });
    }

    const indexA = getPageIndex(linkAIdentifier);
    const indexB = getPageIndex(linkBIdentifier);
    const scoreA = indexA > -1 ? options.sortOrderItems.length - indexA : indexA;
    const scoreB = indexB > -1 ? options.sortOrderItems.length - indexB : indexB;

    // if A and B are not found in the sorting list, just order by name
    if (indexA === -1 && indexB === -1) {
      if (linkAIdentifier === linkBIdentifier) {
        return 0;
      }
      return linkAIdentifier > linkBIdentifier ? 1 : -1;
    }

    // if A and B found
    if (indexA > -1 && indexB > -1) {
      return scoreA > scoreB ? -1 : 1;
    }
    // if A is found but not B
    if (indexA > -1 && indexB === -1) {
      return -1;
    }
    // if B is found and not A, lower A
    if (indexB > -1 && indexA === -1) {
      return 1;
    }

    return 0;
  };
}

export function sortNavigationPredicate(
  options: Pick<Required<GetNavigationAPIOptions>, 'sortOrderDirectories' | 'sortOrderItems'>
): (a?: NavigationAPI | null, b?: NavigationAPI | null) => number {
  return function (a?: NavigationAPI | null, b?: NavigationAPI | null) {
    if (!options.sortOrderDirectories) {
      return 0;
    }

    if (!a) {
      return 0;
    }

    if (!b) {
      return 0;
    }

    const identifierA = a.label || '';
    const identifierB = b.label || '';

    function getPageIndex(pageIdentifier?: string | null) {
      return options.sortOrderDirectories.findIndex((pattern) => {
        if (!pageIdentifier) {
          return false;
        }
        return typeof pattern === 'object'
          ? pattern.test(pageIdentifier)
          : pattern === pageIdentifier;
      });
    }

    const indexA = getPageIndex(identifierA);
    const indexB = getPageIndex(identifierB);
    const scoreA = indexA > -1 ? options.sortOrderItems.length - indexA : indexA;
    const scoreB = indexB > -1 ? options.sortOrderItems.length - indexB : indexB;

    // if A and B are not found in the sorting list, just order by name
    if (indexA === -1 && indexB === -1) {
      if (identifierA === identifierB) {
        return 0;
      }
      return identifierA > identifierB ? 1 : -1;
    }

    // if A and B found
    if (indexA > -1 && indexB > -1) {
      return scoreA > scoreB ? -1 : 1;
    }
    // if A is found but not B
    if (indexA > -1 && indexB === -1) {
      return -1;
    }
    // if B is found and not A, lower A
    if (indexB > -1 && indexA === -1) {
      return 1;
    }

    return 0;
  };
}

/**
 * Check if a path matches or partially matches a given location.pathname
 * /fr/design-system/path with /fr/design-system/
 * return { match: true, partial: true  }
 */
export function isPathActive({
  path,
  pathname,
  prefix,
}: {
  /**
   * The path to test
   */
  path?: string | null;
  /**
   * The current complete pathname
   */
  pathname?: string | null;
  /**
   * An optional prefix path to remove from the comparision
   */
  prefix?: string | null;
}): { match: boolean; partial: boolean; exact: boolean } {
  if (!(path && pathname)) {
    return {
      match: false,
      partial: false,
      exact: false,
    };
  }
  const pathToMatch = prefix ? path.replace(prefix, '/') : path;
  const pathnameToMatch = prefix ? pathname.replace(prefix, '/') : pathname;

  const pathWithoutQuery = pathToMatch.replace(/(\?.+)$/, '');
  const pathnameWithoutQuery = pathnameToMatch.replace(/(\?.+)$/, '');

  const match = new RegExp(pathWithoutQuery).test(pathnameWithoutQuery);
  const exact = pathnameWithoutQuery === pathWithoutQuery;
  const partial = !exact;

  return {
    match,
    partial,
    exact,
  };
}
