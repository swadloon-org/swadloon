import { SITE_LANGUAGES } from '@newrade/core-common';
import { NavComponent, NavigationAPI } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import { GatsbyPageNode } from './gatsby-page-node';

export type GetNavigationAPIOptions = {
  /**
   * Page nodes to transform
   */
  pageNodes?: PartialOrNull<GatsbyPageNode>[];
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

const defaultUppercaseWords = [
  'wsl',
  'ui',
  'ux',
  'seo',
  'ssh',
  'css',
  'api',
  'ci',
  'vm',
  'cms',
  'pr',
  'cli',
];

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

  // build tree navigation structure

  // format name and label

  // create links

  const uppercaseWords = options.uppercaseWords || defaultUppercaseWords;

  return {
    id: options.navigationName,
    name: options.navigationName,
    label: '',
    component: NavComponent.sidebar,
    links: [],
    subNavigation: [],
    tags: [],
  };
}
