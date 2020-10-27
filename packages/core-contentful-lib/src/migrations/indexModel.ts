import * as Migration from 'contentful-migration';
import { BlogExport } from '../content-types/blog';
import { BlogAuthorExport } from '../content-types/blog-author';
import { BlogPostExport } from '../content-types/blog-post';
import { CompanyAddressExport } from '../content-types/company-address';
import { CompanyInfoExport } from '../content-types/company-info';
import { ContactUsFormExport } from '../content-types/contact-form';
import { FormFieldExport } from '../content-types/form-field';
import { ImageCollectionExport } from '../content-types/image-collection';
import { InfoCheckExport } from '../content-types/info-check';
import { InfoTileExport } from '../content-types/info-tile';
import { JobExport } from '../content-types/job';
import { JobGroupExport } from '../content-types/job-groupe';
import { LinkExport } from '../content-types/link';
import { PageExport } from '../content-types/page';
import { ProcessStepExport } from '../content-types/process-step';
import { sectionExport } from '../content-types/section';
const MurmurHash3 = require('imurmurhash');

const execute: Migration.MigrationFunction = function IndexModel(migration) {
  /**
   * Page
   */
  PageExport(migration);
  /**
   * Section
   */
  sectionExport(migration);
  /**
   * Blog
   */
  BlogExport(migration);
  /**
   * BlogPost
   */
  BlogPostExport(migration);
  /**
   * BlogAuthor
   */
  BlogAuthorExport(migration);
  /**
   * Link
   */
  LinkExport(migration);
  /**
   * ImageCollection
   */
  ImageCollectionExport(migration);
  /**
   * CompanyAddress
   */
  CompanyAddressExport(migration);
  /**
   * CompanyInfo
   */
  CompanyInfoExport(migration);
  /*
   * ContactUsForm
   */
  ContactUsFormExport(migration);
  /**
   * FormField
   */
  FormFieldExport(migration);
  /**
   * JobGroup
   */
  JobGroupExport(migration);
  /**
   * Job
   */
  JobExport(migration);
  /**
   * InfoCheck
   */
  InfoCheckExport(migration);
  /**
   * InfoTile
   */
  InfoTileExport(migration);
  /**
   * ProcessStep
   */
  ProcessStepExport(migration);
};
// @ts-ignore
export = execute;
