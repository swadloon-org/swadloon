import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { COMMON_FIELD } from '../constants/fields';

export const createCompanyInfo: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.COMPANY_INFO, {
    name: pascal(COMMON_CONTENT_TYPE.COMPANY_INFO),
  });

  content.createField(COMMON_FIELD.COMPANY_NAME, {
    name: pascal(COMMON_FIELD.COMPANY_NAME),
    type: 'Symbol',
    required: true,
  });

  content.createField(COMMON_FIELD.LOGO, {
    name: pascal(COMMON_FIELD.LOGO),
    type: 'Link',
    linkType: 'Asset',
  });

  content.createField(COMMON_FIELD.LOGO_FOOTER, {
    name: pascal(COMMON_FIELD.LOGO),
    type: 'Link',
    linkType: 'Asset',
  });

  content.createField(COMMON_FIELD.FAVICON, {
    name: pascal(COMMON_FIELD.FAVICON),
    type: 'Link',
    linkType: 'Asset',
  });

  content.createField('linkedinPageURL', { name: 'LinkedinPageURL', type: 'Symbol' });
  content.createField('facebookPageURL', { name: 'FacebookPageURL', type: 'Symbol' });
  content.createField('instagramPageURL', { name: 'InstagramPageURL', type: 'Symbol' });
  content.createField('twitterPageURL', { name: 'TwitterPageURL', type: 'Symbol' });
  content.createField('metadataTwitterSite', {
    name: 'MetadataTwitterSite',
    type: 'Symbol',
  });
  content.createField('metadataTwitterCreator', {
    name: 'MetadataTwitterCreator',
    type: 'Symbol',
  });
  content.createField('metadataSiteName', { name: 'MetadataSiteName', type: 'Symbol' });
};
