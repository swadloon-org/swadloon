import { DEPLOY_ENV, SITE_LANGUAGES } from '@newrade/core-common';
import { LinkType, NavComponent, NavigationAPI } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import { GatsbyPageNode } from '../gatsby-page-node';
import {
  defaultOptions,
  getFilteredPageNodes,
  getNavigationAPIFromPageNodes,
  getNavigationForPath,
  setNavigationAtPath,
  setNavigationLinkAtPath,
} from '../navigation-api.utilities';

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
        includeLocales: [SITE_LANGUAGES.FR_CA],
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
        includeLocales: [SITE_LANGUAGES.EN],
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
                    links: [
                      {
                        name: 'd',
                        label: 'D',
                        type: LinkType.internalPage,
                        page: {
                          name: 'd',
                          slug: '/a/b/c/d/',
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
        links: [
          {
            name: 'help',
            label: 'Help',
            type: LinkType.internalPage,
            page: {
              name: 'help',
              title: 'Help',
              slug: '/help/',
            },
          },
        ],
        subNavigation: [],
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
            name: 'en.index',
            path: '/docs/',
            label: 'Docs',
            links: [
              {
                name: 'en.index',
                label: 'Docs',
                type: LinkType.internalPage,
                page: {
                  title: 'Docs',
                  name: 'en.index',
                  slug: '/docs/',
                },
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

    it('should build the correct navigation tree for a root page', () => {
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
          path: '/help/',
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
          },
        },
        {
          path: '/design-system/',
          context: {
            siteMetadata,
            name: 'index',
            displayName: 'Overview',
          },
        },
        {
          path: '/design-system/components/',
          context: {
            siteMetadata,
            name: 'index',
            displayName: 'Overview',
          },
        },
        {
          path: '/design-system/components/buttons/',
          context: {
            siteMetadata,
            name: 'buttons',
            displayName: 'Buttons',
          },
        },
      ];

      const expected: NavigationAPI = {
        name: 'test',
        component: NavComponent.sidebar,
        path: '/',
        links: [
          {
            name: 'fr.help',
            label: 'Help',
            type: LinkType.internalPage,
            page: {
              name: 'fr.help',
              title: 'Help',
              slug: '/help/',
            },
          },
        ],
        subNavigation: [
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
          },
          {
            name: 'design-system',
            label: 'Design System',
            path: '/design-system/',
            links: [
              {
                name: 'index',
                label: 'Overview',
                type: LinkType.internalPage,
                page: {
                  name: 'index',
                  title: 'Overview',
                  slug: '/design-system/',
                },
              },
            ],
            subNavigation: [
              {
                name: 'index',
                path: '/design-system/components/',
                label: 'Components',
                links: [
                  {
                    name: 'index',
                    label: 'Overview',
                    type: LinkType.internalPage,
                    page: {
                      name: 'index',
                      title: 'Overview',
                      slug: '/design-system/components/',
                    },
                  },
                  {
                    name: 'buttons',
                    label: 'Buttons',
                    type: LinkType.internalPage,
                    page: {
                      name: 'buttons',
                      title: 'Buttons',
                      slug: '/design-system/components/buttons/',
                    },
                  },
                ],
              },
            ],
          },
        ],
      };

      const navigation = getNavigationAPIFromPageNodes({
        navigationName: 'test',
        navigationComponent: NavComponent.sidebar,
        includeLocales: [SITE_LANGUAGES.EN, SITE_LANGUAGES.FR],
        pageNodes: pageNodes,
      });

      expect(navigation).toEqual(expected);
    });
  });
});
