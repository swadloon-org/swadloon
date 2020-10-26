import * as Migration from 'contentful-migration';
import { PageExport } from '../content-types/page';
import { sectionExport } from '../content-types/section';
import { BlogExport } from '../content-types/blog';
import { BlogPostExport } from '../content-types/blog-post';
import { BlogAuthorExport } from '../content-types/blog-author';
import { LinkExport } from '../content-types/link';
import { ImageCollectionExport } from '../content-types/image-collection';
import { CompanyAddressExport } from '../content-types/company-address';
import { CompanyInfoExport } from '../content-types/company-info';
import { ContactUsFormExport } from '../content-types/contact-form';
import { FormFieldExport } from '../content-types/form-field';
import { JobGroupExport } from '../content-types/job-groupe';
import { JobExport } from '../content-types/job';
import { exec } from 'child_process';
const MurmurHash3 = require('imurmurhash');

const execute: Migration.MigrationFunction = function IndexModel(migration) {
  /***
  Page
  ***/

  PageExport(migration);
  /***
  Section
  ***/
  sectionExport(migration);
  /*
  Blog
  */
  BlogExport(migration);
  /*
  BlogPost
   */
  BlogPostExport(migration);
  /*
  BlogAuthor
  */
  BlogAuthorExport(migration);
  /*
  Link
  */
  LinkExport(migration);
  /*
  'ImageCollection'
  */
  ImageCollectionExport(migration);
  /*
  'CompanyAddress'
  */
  CompanyAddressExport(migration);
  /**
   *'CompanyInfo'
   */
  CompanyInfoExport(migration);
  /*
  'ContactUsForm'
  */
  ContactUsFormExport(migration);
  /**
  'FormField'
  */
  FormFieldExport(migration);
  /**
  'JobGroup'
  */
  JobGroupExport(migration);
  /**
  'Job'
  */
  JobExport(migration);
  /**
  'InfoCheck'
  */
  const infoCheck = migration.createContentType('InfoCheck', {
    name: 'InfoCheck',
  });
  const textCheck = infoCheck.createField('Text');
  textCheck.name('Text').type('Symbol').localized(true);

  /*
  'InfoTile'
  */
  const infoTile = migration.createContentType('InfoTile', {
    name: 'InfoTile',
  });
  const illustrationTile = infoTile.createField('Illustration');
  illustrationTile.name('Illustration').type('Symbol');

  const titleTile = infoTile.createField('title');
  titleTile.name('Title').type('Symbol').localized(true);

  const textTile = infoTile.createField('Text');
  textTile.name('Text').type('Text').localized(true);

  /*
  'ProcessStep
  */
  const processStep = migration.createContentType('ProcessStep', {
    name: 'ProcessStep',
  });

  const titleStep = processStep.createField('title');
  titleStep.name('Title').type('Symbol').localized(true);

  const descriptionStep = processStep.createField('description');
  descriptionStep.name('Description').type('Text').localized(true);
};

// @ts-ignore
export = execute;
