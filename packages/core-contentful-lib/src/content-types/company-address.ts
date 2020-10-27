import * as Migration from 'contentful-migration';

export const CompanyAddressExport: Migration.MigrationFunction = function (migration) {
  const companyAddress = migration.createContentType('CompanyAddress', {
    name: 'CompanyAddress',
  });

  const AddressLine1 = companyAddress.createField('AddressLine1', { name: 'AddressLine1', type: 'Symbol' });
  const AddressLine2 = companyAddress.createField('AddressLine2', { name: 'AddressLine2', type: 'Symbol' });
  const City = companyAddress.createField('City', { name: 'City', type: 'Symbol' });
  const PostalCode = companyAddress.createField('PostalCode', { name: 'PostalCode', type: 'Symbol' });
  const ProvinceState = companyAddress.createField('ProvinceState', { name: 'ProvinceState', type: 'Symbol' });
  const Country = companyAddress.createField('Country', { name: 'Country', type: 'Symbol' });
  const Phone = companyAddress.createField('Phone', { name: 'Phone', type: 'Symbol' });
  const PhoneNoFees = companyAddress.createField('PhoneNoFees', { name: 'PhoneNoFees', type: 'Symbol' });
  const WebsiteURL = companyAddress.createField('WebsiteURL', { name: 'WebsiteURL', type: 'Symbol' });
  const Email = companyAddress.createField('Email', { name: 'Email', type: 'Symbol' });
};
