import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { ContentType } from '@newrade/core-website-api';
import { COMMON_FIELD, emailField, urlField } from './common-fields.contentful';

export const createCompanyAddress: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.COMPANY_ADDRESS, {
    name: pascal(ContentType.COMPANY_ADDRESS),
    displayField: COMMON_FIELD.NAME,
  });
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol' });

  content.createField('addressLine1', { name: 'AddressLine1', type: 'Symbol' });
  content.createField('addressLine2', { name: 'AddressLine2', type: 'Symbol' });
  content.createField('city', { name: 'City', type: 'Symbol' });
  content.createField('postalCode', { name: 'PostalCode', type: 'Symbol' });
  content.createField('provinceState', { name: 'ProvinceState', type: 'Symbol' });
  content.createField('country', { name: 'Country', type: 'Symbol' });
  content.createField('phone', { name: 'Phone', type: 'Symbol' });
  content.createField('phoneNoFees', { name: 'PhoneNoFees', type: 'Symbol' });
  content.createField('fax', { name: 'Fax', type: 'Symbol' });
  content.createField('websiteURL', {
    name: 'WebsiteURL',
    type: 'Symbol',
    validations: urlField.validations,
  });
  content.createField('email', {
    name: 'Email',
    type: 'Symbol',
    validations: emailField.validations,
  });
};
