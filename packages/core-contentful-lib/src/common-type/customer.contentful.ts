import { ContentType } from '@newrade/core-website-api';
import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_FIELD, emailField, urlField } from './common-fields.contentful';

export const createCustomer: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.CUSTOMER, {
    name: ContentType.CUSTOMER,
    displayField: COMMON_FIELD.NAME,
  });

  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
  });

  /**
   * Billing Address
   */
  content.createField('billingAddressLine1', { name: 'BillingAddressLine1', type: 'Symbol' });
  content.createField('billingAddressLine2', { name: 'BillingAddressLine2', type: 'Symbol' });
  content.createField('billingCity', { name: 'BillingCity', type: 'Symbol' });
  content.createField('billingPostalCode', { name: 'BillingPostalCode', type: 'Symbol' });
  content.createField('billingProvinceState', { name: 'BillingProvinceState', type: 'Symbol' });
  content.createField('billingCountry', { name: 'BillingCountry', type: 'Symbol' });
  content.createField('billingPhone', { name: 'BillingPhone', type: 'Symbol' });
  content.createField('billingPhoneNoFees', { name: 'BillingPhoneNoFees', type: 'Symbol' });
  content.createField('billingFax', { name: 'BillingFax', type: 'Symbol' });
  content.createField('billingWebsiteURL', {
    name: 'BillingWebsiteURL',
    type: 'Symbol',
    validations: urlField.validations,
  });
  content.createField('billingEmail', {
    name: 'BillingEmail',
    type: 'Symbol',
    validations: emailField.validations,
  });

  /**
   * Shipping Address
   */
  content.createField('shippingAddressLine1', { name: 'ShippingAddressLine1', type: 'Symbol' });
  content.createField('shippingAddressLine2', { name: 'ShippingAddressLine2', type: 'Symbol' });
  content.createField('shippingCity', { name: 'ShippingCity', type: 'Symbol' });
  content.createField('shippingPostalCode', { name: 'ShippingPostalCode', type: 'Symbol' });
  content.createField('shippingProvinceState', { name: 'ShippingProvinceState', type: 'Symbol' });
  content.createField('shippingCountry', { name: 'ShippingCountry', type: 'Symbol' });
  content.createField('shippingPhone', { name: 'ShippingPhone', type: 'Symbol' });
  content.createField('shippingPhoneNoFees', { name: 'ShippingPhoneNoFees', type: 'Symbol' });
  content.createField('shippingFax', { name: 'ShippingFax', type: 'Symbol' });
  content.createField('shippingWebsiteURL', {
    name: 'ShippingWebsiteURL',
    type: 'Symbol',
    validations: urlField.validations,
  });
  content.createField('shippingEmail', {
    name: 'ShippingEmail',
    type: 'Symbol',
    validations: emailField.validations,
  });
};
