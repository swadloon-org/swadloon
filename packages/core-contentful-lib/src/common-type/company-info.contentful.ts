import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';

import { COMMON_FIELD } from './common-fields.contentful.js';

export const createCompanyInfo: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(CONTENT_TYPE.COMPANY_INFO, {
    name: pascal(CONTENT_TYPE.COMPANY_INFO),
    displayField: COMMON_FIELD.COMPANY_NAME,
  });

  content.createField(COMMON_FIELD.COMPANY_NAME, {
    name: pascal(COMMON_FIELD.COMPANY_NAME),
    type: 'Symbol',
    required: true,
  });
  content.changeFieldControl(COMMON_FIELD.COMPANY_NAME, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Complete name of the company.',
  });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Symbol',
  });
  content.changeFieldControl(COMMON_FIELD.DESCRIPTION, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Short description of the company.',
  });

  content.createField(COMMON_FIELD.COPYRIGHT, {
    name: pascal(COMMON_FIELD.COPYRIGHT),
    type: 'Symbol',
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
