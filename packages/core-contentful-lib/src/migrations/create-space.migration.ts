import * as Migration from 'contentful-migration';
import { createForm } from '../content-types-default/basic/form';
import { createFormField } from '../content-types-default/basic/form-field';
import { createLink } from '../content-types-default/basic/link';
import { createMediaCollection } from '../content-types-default/basic/media-collection';
import { createTile } from '../content-types-default/basic/tile';
import { createBanner } from '../content-types-default/page/banner';
import { createPage } from '../content-types-default/page/page';
import { createSectionType } from '../content-types-default/section/section-type';
import { createCompanyAdress } from '../content-types-default/static/company-address';
import { createCompanyInfo } from '../content-types-default/static/company-info';
import { createFieldTranslation } from '../content-types-default/static/field-translation';
import { createProject } from '../content-types-valentine/portfolio/project';
import { createSectionProject } from '../content-types-valentine/portfolio/section';
import { createTag } from '../content-types-valentine/portfolio/tag';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  /**
   * Common
   */
  createCompanyAdress(migration);
  createCompanyInfo(migration);
  createMediaCollection(migration);

  createFieldTranslation(migration);

  createLink(migration);

  createTile(migration);

  createSectionType(migration);

  createBanner(migration);
  createPage(migration);

  /**
   * Form
   */
  createForm(migration);
  createFormField(migration);
  /**
   * With blog
   */
  // createSection(migration);
  // createBlogAuthor(migration);
  // createBlogPost(migration);

  /**
   * With Project
   */
  createSectionProject(migration);
  createProject(migration);
  createTag(migration);

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
