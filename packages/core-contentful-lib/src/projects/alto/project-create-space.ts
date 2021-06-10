import * as Migration from 'contentful-migration';
import { createBlogPost } from '../../common-type';
import { createBlock } from '../../common-type/block';
import { createBlogAuthor } from '../../common-type/blog-author';
import { createCompanyAddress } from '../../common-type/company-address';
import { createCompanyInfo } from '../../common-type/company-info';
import { createTranslation } from '../../common-type/field-translation';
import { createLink } from '../../common-type/link';
import { createMedia } from '../../common-type/media';
import { createMediaCollection } from '../../common-type/media-collection';
import { createNavigation } from '../../common-type/navigation';
import { createPage } from '../../common-type/page';
import { createSection } from '../../common-type/section';
import { createTag } from '../../common-type/tag';
import { createTagType } from '../../common-type';

const program: Migration.MigrationFunction = function Program(migration) {
  /**
   * Common
   */
  createTranslation(migration);
  createLink(migration);
  createMedia(migration);
  createTagType(migration);
  createTag(migration);
  createMediaCollection(migration);

  /**
   * Company
   */
  createCompanyAddress(migration);
  createCompanyInfo(migration);

  /**
   * Blog
   */
  createBlogAuthor(migration);
  createBlogPost(migration);

  /**
   * Block
   */
  createBlock(migration);

  /**
   * Section
   */
  createSection(migration);

  /**
   * Pages
   */
  createNavigation(migration);
  createPage(migration);
};

// @ts-ignore
export = program;
