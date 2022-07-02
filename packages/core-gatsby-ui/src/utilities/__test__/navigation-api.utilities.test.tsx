import { DEPLOY_ENV, SITE_LANGUAGES } from '@newrade/core-common';
import { LinkAPI, LinkType, NavComponent, NavigationAPI } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/utilities';

import { GatsbyPageNode } from '../gatsby-page-node.js';
import {
  defaultOptions,
  getBreadcrumbsForPath,
  getFilteredPageNodes,
  getNavigationAPIFromPageNodes,
  getNavigationForPath,
  getSortedNavigation,
  isPathActive,
  setNavigationAtPath,
  setNavigationLinkAtPath,
  sortLinkPredicate,
  sortNavigationPredicate,
} from '../navigation-api.utilities.js';

const siteMetadata = {
  title: 'Website',
  description: 'Description',
  siteEnv: DEPLOY_ENV.LOCAL,
  siteUrl: '',
  languages: {
    defaultLangKey: SITE_LANGUAGES.EN,
    langs: [SITE_LANGUAGES.EN, SITE_LANGUAGES.FR],
  },
};

const pageNodes: PartialOrNull<GatsbyPageNode>[] = [
  {
    id: 'SitePage /docs/',
    path: '/docs/',
    context: {
      siteMetadata,
      id: 'f6e614ad-e012-5236-a7ab-fb670e2e9059',
      name: 'en.index',
      locale: SITE_LANGUAGES.EN,
      layout: 'docs',
      template: 'markdownDoc',
      frontmatter: {
        title: 'Design UX',
        subject: 'Docs',
        tags: ['tag1', 'tag2'],
        description: 'Sample documentation',
        version: 'v1',
        published: 'true',
        status: 'published',
        deprecated: 'true',
        editPageUrl: null,
        nextPageLabel: null,
        nextPageUrl: null,
        componentStatus: 'published',
        componentVersion: 'v1',
        componentTests: 'ok',
      },
    },
  },
];

describe(`navigation api utilities`, () => {
  describe(`${getNavigationForPath.name}`, () => {
    it('should retrieve the correct sub nav (root level)', () => {
      const { foundNav } = getNavigationForPath([], [{ name: 'test', path: '/' }]);
      const expected: NavigationAPI = {
        name: 'test',
        path: '/',
      };
      expect(foundNav).toEqual(expected);
    });

    it('should retrieve the correct sub nav (2 levels)', () => {
      const { foundNav } = getNavigationForPath(['a', 'b'], [{ name: 'test', path: '/a/b/' }]);
      const expected: NavigationAPI = {
        name: 'test',
        path: '/a/b/',
      };
      expect(foundNav).toEqual(expected);
    });

    it('should retrieve the correct sub nav (3 levels)', () => {
      const { foundNav } = getNavigationForPath(
        ['a', 'b', 'c'],
        [{ name: 'test', path: '/a/b/c/' }]
      );
      const expected: NavigationAPI = {
        name: 'test',
        path: '/a/b/c/',
      };
      expect(foundNav).toEqual(expected);
    });

    it('should retrieve the correct sub nav (3 levels)', () => {
      const navDeep = [
        {
          name: 'test',
          path: '/',
          subNavigation: [
            {
              name: 'a',
              path: '/a/',
              subNavigation: [
                { name: 'b', path: '/a/b/', subNavigation: [{ name: 'c', path: '/a/b/c/' }] },
              ],
            },
          ],
        },
      ];
      const result3rdLevel = getNavigationForPath(['a', 'b', 'c'], navDeep);
      const expected3rdLevel: NavigationAPI = {
        name: 'c',
        path: '/a/b/c/',
      };
      expect(result3rdLevel.foundNav).toEqual(expected3rdLevel);

      const result2ndLevel = getNavigationForPath(['a', 'b'], navDeep);
      const expected2ndLevel: NavigationAPI = {
        name: 'b',
        path: '/a/b/',
        subNavigation: [{ name: 'c', path: '/a/b/c/' }],
      };
      expect(result2ndLevel.foundNav).toEqual(expected2ndLevel);
    });
  });

  describe(`${getFilteredPageNodes.name}`, () => {
    it('should filter specific locales', () => {
      const pageNodes: PartialOrNull<GatsbyPageNode>[] = [
        {
          id: 'SitePage /dev-404-page/',
          path: '/dev-404-page/',
          context: {
            siteMetadata,
            id: '1',
            name: 'dev-404-page',
            locale: SITE_LANGUAGES.EN,
          },
        },
        {
          id: 'SitePage /ignored/',
          path: '/ignored/',
          context: {
            siteMetadata,
            id: '1',
            name: 'ignored',
            locale: SITE_LANGUAGES.FR_CA,
          },
        },
        {
          id: 'SitePage /docs/',
          path: '/docs/',
          context: {
            siteMetadata,
            id: '1',
            name: 'en.index',
            locale: SITE_LANGUAGES.EN,
          },
        },
        {
          id: 'SitePage /fr-CA/docs/',
          path: '/fr-CA/docs/',
          context: {
            siteMetadata,
            id: '2',
            name: 'fr.index',
            locale: SITE_LANGUAGES.FR_CA,
          },
        },
      ];

      const filteredPageNodes = getFilteredPageNodes({
        pageNodes: pageNodes,
        locale: SITE_LANGUAGES.FR_CA,
        excludePaths: ['/ignored/'],
        includedPaths: [],
      });

      expect(filteredPageNodes).toEqual([
        {
          context: {
            id: '2',
            locale: 'fr-CA',
            name: 'fr.index',
            siteMetadata,
          },
          id: 'SitePage /fr-CA/docs/',
          path: '/fr-CA/docs/',
        },
      ]);

      const filteredPageNodesInclude = getFilteredPageNodes({
        pageNodes: pageNodes,
        locale: SITE_LANGUAGES.EN,
        excludePaths: [],
        includedPaths: ['/docs/'],
      });

      expect(filteredPageNodesInclude).toEqual([
        {
          id: 'SitePage /docs/',
          path: '/docs/',
          context: {
            siteMetadata,
            id: '1',
            name: 'en.index',
            locale: SITE_LANGUAGES.EN,
          },
        },
      ]);
    });
  });

  describe(`${setNavigationAtPath.name}`, () => {
    it('should create a single sub nav', () => {
      const result = setNavigationAtPath({
        paths: [],
        pageLocale: SITE_LANGUAGES.EN,
        nav: { name: 'test' },
        options: defaultOptions,
      });
      const expected: NavigationAPI = {
        name: 'test',
        path: '/',
      };
      expect(result).toEqual(expected);
    });

    it('should create a sub navigation at the correct level', () => {
      const result = setNavigationAtPath({
        paths: ['a', 'b'],
        pageLocale: SITE_LANGUAGES.EN,
        nav: {
          name: 'test',
        },
        options: defaultOptions,
      });
      const expected: NavigationAPI = {
        name: 'test',
        path: '/',
        subNavigation: [
          {
            name: 'a',
            label: 'A',
            path: '/a/',
            subNavigation: [
              {
                name: 'b',
                label: 'B',
                path: '/a/b/',
              },
            ],
          },
        ],
      };
      expect(result).toEqual(expected);
    });

    it('should insert a sub navigation at the correct level', () => {
      const result = setNavigationAtPath({
        nav: {
          name: 'test',
          path: '/',
          subNavigation: [
            {
              name: 'a',
              path: '/a/',
              subNavigation: [
                {
                  name: 'b',
                  path: '/a/b/',
                },
              ],
            },
          ],
        },
        paths: ['a', 'b'],
        navigationEntry: {
          name: 'custom',
          label: 'Custom',
        },
        pageLocale: SITE_LANGUAGES.EN,
        options: defaultOptions,
      });

      const expected: NavigationAPI = {
        name: 'test',
        path: '/',
        subNavigation: [
          {
            name: 'a',
            label: 'A',
            path: '/a/',
            subNavigation: [
              {
                name: 'custom',
                label: 'Custom',
                path: '/a/b/',
              },
            ],
          },
        ],
      };
      expect(result).toEqual(expected);
    });

    it('should insert a sub navigation at the correct level (level 2)', () => {
      const result = setNavigationAtPath({
        nav: {
          name: 'test',
          path: '/',
          subNavigation: [
            {
              name: 'a',
              path: '/a/',
              subNavigation: [
                {
                  name: 'b',
                  path: '/a/b/',
                },
              ],
            },
          ],
        },
        paths: ['a'],
        navigationEntry: {
          name: 'custom',
        },
        pageLocale: SITE_LANGUAGES.EN,
        options: defaultOptions,
      });
      const expected: NavigationAPI = {
        name: 'test',
        path: '/',
        subNavigation: [
          {
            name: 'custom',
            label: 'A',
            path: '/a/',
            subNavigation: [
              {
                name: 'b',
                path: '/a/b/',
              },
            ],
          },
        ],
      };
      expect(result).toEqual(expected);
    });
  });

  describe(`${setNavigationLinkAtPath.name}`, () => {
    it('should create a link at the correct navigation level', () => {
      const result = setNavigationLinkAtPath({
        paths: ['a', 'b', 'c', 'd'],
        nav: {
          name: 'test',
          path: '/',
          subNavigation: [
            {
              name: 'a',
              path: '/a/',
              subNavigation: [
                { name: 'b', path: '/a/b/', subNavigation: [{ name: 'c', path: '/a/b/c/' }] },
              ],
            },
          ],
        },
        pageLocale: SITE_LANGUAGES.EN,
        options: defaultOptions,
      });

      const expected: NavigationAPI = {
        name: 'test',
        path: '/',
        subNavigation: [
          {
            name: 'a',
            path: '/a/',
            subNavigation: [
              {
                name: 'b',
                path: '/a/b/',
                subNavigation: [
                  {
                    name: 'c',
                    path: '/a/b/c/',
                    links: [],
                    subNavigation: [
                      {
                        name: 'a.b.c.d',
                        label: 'D',
                        path: '/a/b/c/d/',
                        component: NavComponent.link,
                        link: {
                          name: 'a.b.c.d',
                          label: 'D',
                          type: LinkType.internalPage,
                          page: {
                            name: 'a.b.c.d',
                            slug: '/a/b/c/d/',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };
      expect(result).toEqual(expected);
    });
  });

  describe(`${getNavigationAPIFromPageNodes.name}`, () => {
    it('should build the correct navigation tree for a root page', () => {
      const pageNodes: PartialOrNull<GatsbyPageNode>[] = [
        {
          path: '/help/',
          context: {
            siteMetadata,
            name: 'help',
            displayName: 'Help',
          },
        },
      ];

      const expected: NavigationAPI = {
        name: 'test',
        component: NavComponent.sidebar,
        path: '/',
        links: [],
        subNavigation: [
          {
            name: 'help',
            label: 'Help',
            path: '/help/',
            component: NavComponent.link,
            link: {
              name: 'help',
              label: 'Help',
              type: LinkType.internalPage,
              page: {
                name: 'help',
                title: 'Help',
                slug: '/help/',
              },
            },
            links: [],
            subNavigation: [],
          },
        ],
      };

      const navigation = getNavigationAPIFromPageNodes({
        navigationName: 'test',
        navigationComponent: NavComponent.sidebar,
        pageNodes: pageNodes,
      });

      expect(navigation).toEqual(expected);
    });

    it('should build the correct navigation tree for a root page', () => {
      const pageNodes: PartialOrNull<GatsbyPageNode>[] = [
        {
          path: '/docs/',
          context: {
            siteMetadata,
            name: 'en.index',
            displayName: 'Docs',
          },
        },
      ];

      const expected: NavigationAPI = {
        name: 'test',
        component: NavComponent.sidebar,
        path: '/',
        links: [],
        subNavigation: [
          {
            name: 'docs',
            path: '/docs/',
            label: 'Docs',
            links: [],
            component: NavComponent.menu,
            subNavigation: [
              {
                name: 'en.index',
                label: 'Overview',
                component: NavComponent.link,
                path: '/docs/',
                link: {
                  name: 'en.index',
                  label: 'Overview',
                  type: LinkType.internalPage,
                  page: {
                    title: 'Docs',
                    name: 'en.index',
                    slug: '/docs/',
                  },
                },
                links: [],
                subNavigation: [],
              },
            ],
          },
        ],
      };

      const navigation = getNavigationAPIFromPageNodes({
        navigationName: 'test',
        navigationComponent: NavComponent.sidebar,
        pageNodes: pageNodes,
      });

      expect(navigation).toEqual(expected);
    });

    it('should build the correct navigation tree nested pages', () => {
      //
      // examples
      //
      // /design-system/components/a/
      // /design-system/components/b/
      // /design-system/components/index/
      // /design-system/data-viz/a/
      // /design-system/data-viz/b/
      // /design-system/data-viz/index/

      const pageNodes: PartialOrNull<GatsbyPageNode>[] = [
        {
          path: '/fr/help/',
          context: {
            siteMetadata,
            name: 'fr.help',
            displayName: 'Help',
            locale: SITE_LANGUAGES.FR,
          },
        },
        {
          path: '/docs/',
          context: {
            siteMetadata,
            name: 'index',
            displayName: 'Overview',
            locale: SITE_LANGUAGES.EN,
          },
        },
        {
          path: '/design-system/components/',
          context: {
            siteMetadata,
            name: 'index',
            displayName: 'Overview',
            locale: SITE_LANGUAGES.EN,
          },
        },
        {
          path: '/design-system/',
          context: {
            siteMetadata,
            name: 'index',
            displayName: 'Overview',
            locale: SITE_LANGUAGES.EN,
          },
        },
        {
          path: '/fr/design-system/',
          context: {
            siteMetadata,
            locale: SITE_LANGUAGES.FR,
            name: 'fr.index',
            displayName: `Vue d'ensemble`,
          },
        },
        {
          path: '/design-system/components/buttons/',
          context: {
            siteMetadata,
            name: 'buttons',
            displayName: 'Buttons',
            locale: SITE_LANGUAGES.EN,
          },
        },
      ];

      const expectedEN: NavigationAPI = {
        name: 'test',
        component: NavComponent.sidebar,
        path: '/',
        links: [],
        subNavigation: [
          {
            name: 'design-system',
            label: 'Design System',
            path: '/design-system/',
            component: NavComponent.menu,
            links: [],
            subNavigation: [
              {
                name: 'design-system',
                label: 'Design System',
                path: '/design-system/',
                component: NavComponent.link,
                link: {
                  name: 'index',
                  label: 'Overview',
                  type: LinkType.internalPage,
                  page: {
                    name: 'index',
                    title: 'Overview',
                    slug: '/design-system/',
                  },
                },
                links: [],
                subNavigation: [],
              },
              {
                name: 'index',
                path: '/design-system/components/',
                label: 'Components',
                links: [],
                link: {
                  name: 'index',
                  label: 'Overview',
                  type: LinkType.internalPage,
                  page: {
                    name: 'index',
                    title: 'Overview',
                    slug: '/design-system/components/',
                  },
                },
                subNavigation: [
                  {
                    name: 'buttons',
                    label: 'Buttons',
                    path: '/design-system/components/buttons/',
                    component: NavComponent.link,
                    link: {
                      name: 'buttons',
                      label: 'Buttons',
                      type: LinkType.internalPage,
                      page: {
                        name: 'buttons',
                        title: 'Buttons',
                        slug: '/design-system/components/buttons/',
                      },
                    },
                    subNavigation: [],
                    links: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'index',
            label: 'Docs',
            path: '/docs/',
            links: [
              {
                name: 'index',
                label: 'Overview',
                type: LinkType.internalPage,
                page: {
                  name: 'index',
                  title: 'Overview',
                  slug: '/docs/',
                },
              },
            ],
            subNavigation: [],
          },
        ],
      };

      const navigationEN = getNavigationAPIFromPageNodes({
        navigationName: 'test',
        navigationComponent: NavComponent.sidebar,
        locale: SITE_LANGUAGES.EN,
        pageNodes: pageNodes,
      });

      expect(navigationEN).toEqual(navigationEN);

      const expectedFR: NavigationAPI = {
        name: 'test',
        component: NavComponent.sidebar,
        path: '/',
        links: [],
        subNavigation: [
          {
            name: 'fr.design-system',
            label: 'Design system',
            component: NavComponent.menu,
            path: '/fr/design-system/',
            links: [],
            subNavigation: [
              {
                name: 'fr.index',
                label: `Vue d'ensemble`,
                path: '/fr/design-system/',
                component: NavComponent.link,
                link: {
                  name: 'fr.index',
                  label: `Vue d'ensemble`,
                  type: LinkType.internalPage,
                  page: {
                    name: 'fr.index',
                    title: `Vue d'ensemble`,
                    slug: '/fr/design-system/',
                  },
                },
                links: [],
                subNavigation: [],
              },
            ],
          },
          {
            name: 'fr.help',
            label: 'Help',
            path: '/fr/help/',
            component: NavComponent.link,
            link: {
              name: 'fr.help',
              label: 'Help',
              type: LinkType.internalPage,
              page: {
                name: 'fr.help',
                title: 'Help',
                slug: '/fr/help/',
              },
            },
            links: [],
            subNavigation: [],
          },
        ],
      };

      const navigationFR = getNavigationAPIFromPageNodes({
        navigationName: 'test',
        navigationComponent: NavComponent.sidebar,
        locale: SITE_LANGUAGES.FR,
        pageNodes: pageNodes,
      });

      expect(navigationFR).toEqual(expectedFR);
    });
  });

  describe(`${isPathActive.name}`, () => {
    it('should have an exact match', () => {
      expect(
        isPathActive({
          path: '/fr/design-system/',
          pathname: '/fr/design-system/',
        })
      ).toEqual({
        match: true,
        partial: false,
        exact: true,
      });
    });

    it('should have a partial match', () => {
      expect(
        isPathActive({
          path: '/fr/',
          pathname: '/fr/design-system/',
        })
      ).toEqual({
        match: true,
        partial: true,
        exact: false,
      });
    });

    it('should have a partial match with prefix', () => {
      expect(
        isPathActive({
          path: '/fr/',
          pathname: '/fr/design-system/',
          prefix: '/fr/',
        })
      ).toEqual({
        match: true,
        partial: true,
        exact: false,
      });
    });

    it('should have a match with prefix', () => {
      expect(
        isPathActive({
          path: '/fr/design-system/',
          pathname: '/fr/design-system/',
          prefix: '/fr/',
        })
      ).toEqual({
        match: true,
        partial: false,
        exact: true,
      });
    });

    it('should handle path with query parameters', () => {
      expect(
        isPathActive({
          path: '/design-system/',
          pathname: '/design-system/?some=value',
        })
      ).toEqual({
        match: true,
        partial: false,
        exact: true,
      });
    });
  });

  describe(`${sortLinkPredicate.name}`, () => {
    it('should sort links correctly', () => {
      const links = [
        {
          name: 'link 2',
          label: 'Link 2 ✅',
        },
        {
          name: 'link 1',
          label: 'Link 1',
        },
        {
          name: 'link 1',
          label: 'Overview',
        },
      ];
      expect(
        links.sort(
          sortLinkPredicate({
            sortOrderItems: [/overview/i, /link 1/i, /link 2/i],
          } as any)
        )
      ).toEqual([
        {
          name: 'link 1',
          label: 'Overview',
        },
        {
          name: 'link 1',
          label: 'Link 1',
        },
        {
          name: 'link 2',
          label: 'Link 2 ✅',
        },
      ]);
    });
  });

  describe(`${sortNavigationPredicate.name}`, () => {
    it('should sort navs correctly', () => {
      const links = [
        {
          name: 'link 1',
          label: 'Another Link',
        },
        {
          name: 'link 2',
          label: 'Link 2 ✅',
        },
        {
          name: 'link 1',
          label: 'Link 1',
        },
        {
          name: 'link 1',
          label: 'Overview',
        },
      ];
      const nav: NavigationAPI = {
        name: 'name',
        label: 'Nav 1',
        links: [...links],
        subNavigation: [
          {
            name: 'name',
            label: 'sub nav 2',
            links: [...links],
            subNavigation: [],
          },
          {
            name: 'name',
            label: 'sub nav end',
            links: [...links],
            subNavigation: [],
          },
          {
            name: 'name',
            label: 'sub nav 1',
            links: [...links],
            subNavigation: [],
          },
        ],
      };
      const expectedLinks = [
        {
          name: 'link 1',
          label: 'Overview',
        },
        {
          name: 'link 1',
          label: 'Link 1',
        },
        {
          name: 'link 2',
          label: 'Link 2 ✅',
        },
        {
          name: 'link 1',
          label: 'Another Link',
        },
      ];
      const navExpected: NavigationAPI = {
        name: 'name',
        label: 'Nav 1',
        links: [...expectedLinks],
        subNavigation: [
          {
            name: 'name',
            label: 'sub nav 1',
            links: [...expectedLinks],
            subNavigation: [],
          },
          {
            name: 'name',
            label: 'sub nav 2',
            links: [...expectedLinks],
            subNavigation: [],
          },
          {
            name: 'name',
            label: 'sub nav end',
            links: [...expectedLinks],
            subNavigation: [],
          },
        ],
      };
      expect(
        getSortedNavigation(nav, {
          sortOrderDirectories: [/sub nav 1/i, /sub nav 2/i],
          sortOrderItems: [/overview/i, /link 1/i, /link 2/i],
        } as any)
      ).toEqual(navExpected);
    });
  });

  describe(`${getBreadcrumbsForPath.name}`, () => {
    it('should return a list of links for a given path in a given NavigationAPI tree', () => {
      const nav: NavigationAPI = {
        name: 'top nav',
        label: 'Top Nav',
        path: '/top-nav/',
        subNavigation: [
          {
            name: 'sub nav',
            label: 'Sub Nav',
            path: '/top-nav/sub-nav/',
            subNavigation: [
              {
                name: 'sub sub nav',
                label: 'Sub Sub Nav',
                path: '/top-nav/sub-nav/sub-sub-nav/',
                subNavigation: [],
              },
            ],
          },
        ],
      };
      const expectedLinks: LinkAPI[] = [
        {
          name: 'top nav',
          label: 'Top Nav',
        },
        {
          name: 'sub nav',
          label: 'Sub Nav',
        },
      ];

      expect(getBreadcrumbsForPath(['top-nav', 'sub-nav', 'sub-sub-nav'], [nav])).toEqual({
        links: expectedLinks,
      });
    });
  });
});
