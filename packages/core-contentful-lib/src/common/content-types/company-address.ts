import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common-content-types';

export const createCompanyAddress: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.COMPANY_ADDRESS, {
    name: pascal(COMMON_CONTENT_TYPE.COMPANY_ADDRESS),
  });

  content.createField('addressLine1', { name: 'AddressLine1', type: 'Symbol' });
  content.createField('addressLine2', { name: 'AddressLine2', type: 'Symbol' });
  content.createField('city', { name: 'City', type: 'Symbol' });
  content.createField('postalCode', { name: 'PostalCode', type: 'Symbol' });
  content.createField('provinceState', { name: 'ProvinceState', type: 'Symbol' });
  content.createField('country', { name: 'Country', type: 'Symbol' });
  content.createField('phone', { name: 'Phone', type: 'Symbol' });
  content.createField('phoneNoFees', { name: 'PhoneNoFees', type: 'Symbol' });
  content.createField('fax', { name: 'Fax', type: 'Symbol' });
  content.createField('websiteURL', { name: 'WebsiteURL', type: 'Symbol' });
  content.createField('email', { name: 'Email', type: 'Symbol' });
};
