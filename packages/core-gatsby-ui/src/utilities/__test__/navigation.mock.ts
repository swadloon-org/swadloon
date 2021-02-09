import { DEPLOY_ENV } from '@newrade/core-common';
import { SITE_LANGUAGES, SITE_LAYOUT } from '@newrade/core-gatsby-config';

export const navigationMock = {
  name: 'navigation test',
  sortOrderItems: ['page-2', 'page-1'],
  sortOrderDirectories: ['path-a', ''],
  pageNodes: [
    // root page
    {
      path: '/',
      context: {
        id: '54e31cc0-ebe2-5af2-a6aa-9ff3f481ab23',
        siteMetadata: {
          title: 'Website',
          description: 'Description',
          siteEnv: DEPLOY_ENV.LOCAL,
          siteUrl: '',
          languages: {
            defaultLangKey: SITE_LANGUAGES.EN,
            langs: [SITE_LANGUAGES.EN],
          },
        },
        locale: SITE_LANGUAGES.EN,
        layout: 'DESIGN_SYSTEM' as SITE_LAYOUT,
        name: 'index.page',
        displayName: 'Design System',
        dirName: '',
      },
    },
    // root path with prefix
    {
      path: '/design-system/',
      context: {
        id: '54e31cc0-ebe2-5af2-a6aa-9ff3f481ab23',
        siteMetadata: {
          title: 'Website',
          description: 'Description',
          siteEnv: DEPLOY_ENV.LOCAL,
          siteUrl: '',
          languages: {
            defaultLangKey: SITE_LANGUAGES.EN,
            langs: [SITE_LANGUAGES.EN],
          },
        },
        locale: SITE_LANGUAGES.EN,
        layout: 'DESIGN_SYSTEM' as SITE_LAYOUT,
        name: 'home.page',
        displayName: 'Design System',
        dirName: '',
      },
    },
    // nested page in directory
    {
      path: '/design-system/path-a/page-1',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9445f40614d',
        siteMetadata: {
          title: 'Website',
          description: 'Description',
          siteEnv: DEPLOY_ENV.LOCAL,
          siteUrl: '',
          languages: {
            defaultLangKey: SITE_LANGUAGES.EN,
            langs: [SITE_LANGUAGES.EN],
          },
        },
        locale: SITE_LANGUAGES.EN,
        layout: 'DESIGN_SYSTEM' as SITE_LAYOUT,
        name: 'page-1.page',
        displayName: 'Design System - MicroInteractions',
        dirName: 'path-a',
      },
    },
    // nested page in directory
    {
      path: '/design-system/path-a/page-2',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9445f40614d',
        siteMetadata: {
          title: 'Website',
          description: 'Description',
          siteEnv: DEPLOY_ENV.LOCAL,
          siteUrl: '',
          languages: {
            defaultLangKey: SITE_LANGUAGES.EN,
            langs: [SITE_LANGUAGES.EN],
          },
        },
        locale: SITE_LANGUAGES.EN,
        layout: 'DESIGN_SYSTEM' as SITE_LAYOUT,
        name: 'page-2.page',
        displayName: 'Design System - MicroInteractions',
        dirName: 'path-a',
      },
    },
    // nested page in another directory
    {
      path: '/design-system/path-b/page-1',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9445f40614d',
        siteMetadata: {
          title: 'Website',
          description: 'Description',
          siteEnv: DEPLOY_ENV.LOCAL,
          siteUrl: '',
          languages: {
            defaultLangKey: SITE_LANGUAGES.EN,
            langs: [SITE_LANGUAGES.EN],
          },
        },
        locale: SITE_LANGUAGES.EN,
        layout: 'DESIGN_SYSTEM' as SITE_LAYOUT,
        name: 'page-1.page',
        displayName: 'Design System - MicroInteractions',
        dirName: 'path-b',
      },
    },
  ],
};
