import * as Migration from 'contentful-migration';
import { SPECIFIC_SECTION_TYPE } from './constants/content-types';
import { createBlogAuthor } from './content-types/blog-author';
import { createBlogPost } from './content-types/blog-post';
import { createCompanyAdress } from './content-types/company-address';
import { createCompanyInfo } from './content-types/company-info';
import { createFieldTranslation } from './content-types/field-translation';
import { createFormField } from './content-types/form-field';
import { createLink } from './content-types/link';
import { createMediaCollection } from './content-types/media-collection';
import { createPage } from './content-types/page';
import { createBanner } from './content-types/page-banner';
import { createSection } from './content-types/section';
import { createSectionType } from './content-types/section-type';
import { createTile } from './content-types/tile';

export const createCommonContentTypes: Migration.MigrationFunction = function IndexModel(migration) {
  /**
   * Essentials
   */
  createFieldTranslation(migration);
  createLink(migration); // todo check if working with arbitrary pages

  /**
   * Media
   */
  createMediaCollection(migration);

  /**
   * Company
   */
  createCompanyAdress(migration);
  createCompanyInfo(migration);

  /**
   * Common part
   */
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
