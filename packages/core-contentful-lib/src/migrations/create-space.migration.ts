import * as Migration from 'contentful-migration';
import { createInfoCheck } from '../content-types-mir/info-check';
import { createInfoTile } from '../content-types-mir/info-tile';
import { createJob } from '../content-types-mir/job';
import { createJobGroup } from '../content-types-mir/job-groupe';
import { createPage } from '../content-types-mir/page';
import { createProcessStep } from '../content-types-mir/process-step';
import { createSection } from '../content-types-mir/section';
import { createBlogAuthor } from '../content-types/blog-author';
import { createBlogPost } from '../content-types/blog-post';
import { createCompanyAdress } from '../content-types/company-address';
import { createCompanyInfo } from '../content-types/company-info';
import { createLink } from '../content-types/link';
import { createMediaCollection } from '../content-types/media-collection';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  /**
   * Common
   */
  createBlogAuthor(migration);
  createBlogPost(migration);
  createCompanyAdress(migration);
  createCompanyInfo(migration);
  createMediaCollection(migration);
  createLink(migration);

  /**
   * MIR specific
   */
  createInfoCheck(migration);
  createInfoTile(migration);
  createJob(migration);
  createJobGroup(migration);
  createProcessStep(migration);

  createPage(migration);
  createSection(migration);
};

// @ts-ignore
export = program;
