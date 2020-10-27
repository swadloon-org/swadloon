import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common/types.constants';
import { titleFields } from '../common/types.models';

export const PageExport: Migration.MigrationFunction = function (migration) {
  const Page = migration.createContentType('Page', {
    name: 'Page',
  });

  // Fields basic
  const namePage = Page.createField('name');
  namePage.name('Name').type('Symbol');

  const titlePage = Page.createField('title', { ...titleFields });

  const descriptionPage = Page.createField('description');
  descriptionPage.name('Description').type('Text').localized(true);

  const routePage = Page.createField('Route');
  routePage.name('Route').type('Symbol').localized(true);

  const bannerTitle = Page.createField('BannerTitle');
  bannerTitle.name('BannerTitle').type('Symbol').localized(true);

  const bannerSubTitle = Page.createField('BannerSubTitle');
  bannerSubTitle.name('BannerSubTitle').type('Symbol').localized(true);

  const bannerImages = Page.createField('BannerImages');
  bannerImages.name('BannerImages').type('Array').items({ type: 'Link', linkType: 'Asset' });

  // Reference to the section
  const sections = Page.createField('sections');
  sections
    .name('Sections')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION] }] });
};
