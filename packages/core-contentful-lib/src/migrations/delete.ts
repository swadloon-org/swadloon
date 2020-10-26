import * as Migration from 'contentful-migration';
import * as sectionExport from '../content-types/section';
import { exec } from 'child_process';

const execute: Migration.MigrationFunction = function IndexModel(migration) {
  /***
  Page
  ***/

  const Page = migration.deleteContentType('Page');

  /***
  Section
  ***/

  const Section = migration.deleteContentType('Section');

  /*
  Blog
  */
  const Blog = migration.deleteContentType('Blog');

  /*
  BlogPost
  */
  const BlogPost = migration.deleteContentType('BlogPost');

  /*
  BlogAuthor
  */
  const BlogAuthor = migration.deleteContentType('BlogAuthor');

  /*
  Link
  */
  const link = migration.deleteContentType('Link');

  /*
  'ImageCollection'
  */
  const imageCollection = migration.deleteContentType('ImageCollection');

  /*
  'ImageCollection'
  */
  const companyAddress = migration.deleteContentType('CompanyAddress');
  /*
  'CompanyInfo'
  */
  const companyInfo = migration.deleteContentType('CompanyInfo');
  /*
  'ContactUsForm'
  */
  const contactUsForm = migration.deleteContentType('ContactUsForm');

  /*
  'FormField'
  */
  const formField = migration.deleteContentType('FormField');
  /*
  'JobGroup'
  */
  const jobGroup = migration.deleteContentType('JobGroup');
  /*
  'Job'
  */
  const job = migration.deleteContentType('Job');

  /*
  'InfoCheck'
  */
  const infoCheck = migration.deleteContentType('InfoCheck');
  /*
  'InfoTile'
  */
  const infoTile = migration.deleteContentType('InfoTile');
  /*
 'ProcessStep
  */
  const processStep = migration.deleteContentType('ProcessStep');
};
// @ts-ignore
export = execute;
