import * as Migration from 'contentful-migration';

export const CompanyInfoExport: Migration.MigrationFunction = function (migration) {
  const companyInfo = migration.createContentType('CompanyInfo', {
    name: 'CompanyInfo',
  });

  const CompanyName = companyInfo.createField('CompanyName', { name: 'CompanyName', type: 'Symbol' });

  const Logo = companyInfo.createField('Logo', {
    name: 'Logo',
    type: 'Link',
    linkType: 'Asset',
  });

  const LogoFooter = companyInfo.createField('LogoFooter', {
    name: 'LogoFooter',
    type: 'Link',
    linkType: 'Asset',
  });

  const Favicon = companyInfo.createField('Favicon', {
    name: 'Favicon',
    type: 'Link',
    linkType: 'Asset',
  });

  const LinkedinPageURL = companyInfo.createField('LinkedinPageURL', { name: 'LinkedinPageURL', type: 'Symbol' });
  const FacebookPageURL = companyInfo.createField('FacebookPageURL', { name: 'FacebookPageURL', type: 'Symbol' });
  const InstagramPageURL = companyInfo.createField('InstagramPageURL', { name: 'InstagramPageURL', type: 'Symbol' });
  const TwitterPageURL = companyInfo.createField('TwitterPageURL', { name: 'TwitterPageURL', type: 'Symbol' });
  const MetadataTwitterSite = companyInfo.createField('MetadataTwitterSite', {
    name: 'MetadataTwitterSite',
    type: 'Symbol',
  });
  const MetadataTwitterCreator = companyInfo.createField('MetadataTwitterCreator', {
    name: 'MetadataTwitterCreator',
    type: 'Symbol',
  });
  const MetadataSiteName = companyInfo.createField('MetadataSiteName', { name: 'MetadataSiteName', type: 'Symbol' });
};
