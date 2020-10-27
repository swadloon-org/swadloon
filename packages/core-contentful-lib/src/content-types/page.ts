import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common/types.constants';
import { descriptionFields, titleFields } from '../common/types.models';

export const PageExport: Migration.MigrationFunction = function (migration) {
  const Page = migration.createContentType('Page', {
    name: 'Page',
  });

  // Fields basic
  const namePage = Page.createField('name');
  namePage.name('Name').type('Symbol');

  const titlePage = Page.createField('title', { ...titleFields });

  const descriptionPage = Page.createField('description', { ...descriptionFields });

  const routePage = Page.createField('Route', { name: 'Route', type: 'Symbol', localized: true });

  const bannerTitle = Page.createField('BannerTitle', { name: 'BannerTitle', type: 'Symbol', localized: true });

  const bannerSubTitle = Page.createField('BannerSubTitle', {
    name: 'BannerSubTitle',
    type: 'Symbol',
    localized: true,
  });

  const bannerImages = Page.createField('BannerImages', {
    name: 'BannerImages',
    type: 'Array',
    items: { type: 'Link', linkType: 'Asset' },
  });

  /**
   * Reference to the section
   */
  const sections = Page.createField('sections', {
    name: 'Sections',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION] }] },
  });
};
