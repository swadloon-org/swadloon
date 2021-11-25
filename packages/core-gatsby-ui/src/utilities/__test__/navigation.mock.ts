import { DEPLOY_ENV } from '@newrade/core-common';
import { SITE_LANGUAGES } from '@newrade/core-common';
import { PAGE_LAYOUT, PAGE_TEMPLATE } from '@newrade/core-gatsb-config/config';

import { GatsbyPageNode } from '../gatsby-page-node';

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

export const navigationMock = {
  name: 'navigation test',
  sortOrderItems: ['index', 'page-2', 'page-1'],
  sortOrderDirectories: ['path-a', ''],
  pageNodes: [
    // root page
    {
      path: '/',
      context: {
        id: '54e31cc0-ebe2-5af2-a6aa-9ff3f481ab23',
        siteMetadata,
        locale: SITE_LANGUAGES.EN,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'index.page',
        displayName: 'Design System',
      },
    },
    // root page in different localte
    {
      path: '/fr/',
      context: {
        id: '54e31cc0-ebe2-5af2-a6aa-9ff3f481ab23',
        siteMetadata,
        locale: SITE_LANGUAGES.FR,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'index.page',
        displayName: 'Système de design',
      },
    },
    // root path with prefix
    {
      path: '/design-system/',
      context: {
        id: '54e31cc0-ebe2-5af2-a6aa-9ff3f481ab23',
        siteMetadata,
        locale: SITE_LANGUAGES.EN,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'index.page',
        displayName: 'Design System',
      },
    },
    // nested home page in directory
    {
      path: '/design-system/path-a/',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9425f40614d',
        siteMetadata,
        locale: SITE_LANGUAGES.EN,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'index.page',
        displayName: 'Design System - Oveview',
      },
    },
    // nested page in directory
    {
      path: '/design-system/path-a/page-1',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9445f40614d',
        siteMetadata,
        locale: SITE_LANGUAGES.EN,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'page-1.page',
        displayName: 'Design System - MicroInteractions',
      },
    },
    // nested page in directory
    {
      path: '/design-system/path-a/page-2',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9445f40614d',
        siteMetadata,
        locale: SITE_LANGUAGES.EN,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'page-2.page',
        displayName: 'Design System - MicroInteractions',
      },
    },
    // nested page in another directory
    {
      path: '/design-system/path-b/page-1',
      context: {
        id: '6206baa6-18d0-5b8f-b457-e9445f40614d',
        siteMetadata,
        locale: SITE_LANGUAGES.EN,
        layout: 'designSystem' as PAGE_LAYOUT,
        template: 'designSystem' as PAGE_TEMPLATE,
        name: 'page-1.page',
        displayName: 'Design System - MicroInteractions',
      },
    },
  ] as GatsbyPageNode[],
};
