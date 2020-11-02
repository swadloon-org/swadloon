import * as Migration from 'contentful-migration';
import { createSectionType } from './../content-types-mir/section';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  /**
   * Common
   */
  // createBlogAuthor(migration);
  // createBlogPost(migration);
  // createCompanyAdress(migration);
  // createCompanyInfo(migration);
  // createMediaCollection(migration);
  // createLink(migration);

  // /**
  //  * MIR specific
  //  */
  // createInfoCheck(migration);
  // createInfoTile(migration);
  // createJob(migration);
  // createJobGroup(migration);
  // createProcessStep(migration);

  // createPage(migration);
  // createSection(migration);
  createSectionType(migration);
};

// @ts-ignore
export = program;
