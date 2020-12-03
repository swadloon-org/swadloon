import * as Migration from 'contentful-migration';
import { createBlogAuthor } from '../content-types-default/blog/blog-author';
import { createBlogPost } from '../content-types-default/blog/blog-post';
import { createPage } from '../content-types-default/page/page';
import { createSection } from '../content-types-default/section/section';
import { createSectionType } from '../content-types-default/section/section-type';
import { createCompanyAdress } from '../content-types-default/static/company-address';
import { createCompanyInfo } from '../content-types-default/static/company-info';
import { createLink } from '../content-types-default/ui/link';
import { createMediaCollection } from '../content-types-default/ui/media-collection';
import { createTile } from '../content-types-default/ui/tile';

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
  createPage(migration);
  createSection(migration);
  createSectionType(migration);
  createTile(migration);

  // /**
  //  * MIR specific
  //  */
  // createInfoCheck(migration);
  // createInfoTile(migration);
  // createJob(migration);
  // createJobGroup(migration);
  // createProcessStep(migration);

  // createBanner(migration);
  // createPage(migration);
  // createSectionType(migration);
};

// @ts-ignore
export = program;
