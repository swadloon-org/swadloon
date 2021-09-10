import { DEPLOY_ENV, SITE_LANGUAGES } from '@newrade/core-common';
import { NavComponent } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import { GatsbyPageNode } from '../gatsby-page-node';
import { getNavigationAPIFromPageNodes } from '../navigation-api.utilities';

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
  describe(`${getNavigationAPIFromPageNodes.name}`, () => {
    it('should return a valid NavigationAPI object from Gatsby page nodes', () => {
      const navigation = getNavigationAPIFromPageNodes({
        navigationName: 'test footer',
        navigationComponent: NavComponent.footer,
        pageNodes,
      });
      expect(navigation).toEqual({});
    });
  });
});
