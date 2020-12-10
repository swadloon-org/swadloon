import * as Migration from 'contentful-migration';
import { SPECIFIC_SECTION_TYPE } from '../common/constants/content-types';
import { createForm } from '../common/content-types/basic/form';
import { createLink } from '../common/content-types/basic/link';
import { createMediaCollection } from '../common/content-types/basic/media-collection';
import { createTile } from '../common/content-types/basic/tile';
import { createFormField } from '../common/content-types/form-field';
import { createBlogAuthor } from '../content-types-default/blog/blog-author';
import { createBlogPost } from '../content-types-default/blog/blog-post';
import { createBanner } from '../content-types-default/page/banner';
import { createPage } from '../content-types-default/page/page';
import { createSection } from '../content-types-default/section/section';
import { createSectionType } from '../content-types-default/section/section-type';
import { createCompanyAdress } from '../content-types-default/static/company-address';
import { createCompanyInfo } from '../content-types-default/static/company-info';
import { createFieldTranslation } from '../content-types-default/static/field-translation';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  /**
   * Common
   */
  createCompanyAdress(migration);
  createCompanyInfo(migration);
  createMediaCollection(migration);
  createFieldTranslation(migration);

  /**
   * Common part
   */
  createLink(migration);
  createTile(migration);

  /**
   * Section
   */
  createSection(migration, { type: [SPECIFIC_SECTION_TYPE.NONE] });
  createSectionType(migration);

  /**
   * Page and banner
   */
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
  createBlogAuthor(migration);
  createBlogPost(migration);

  /**
   * With Project
   */
  // createProject(migration);
  // createTag(migration);
};

// @ts-ignore
export = program;
