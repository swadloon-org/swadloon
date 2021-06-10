import * as Migration from 'contentful-migration';
import { createTranslation } from '../../common-type/field-translation';
import { createBlock } from '../../common-type/block';
import { createBlogAuthor } from '../../common-type/blog-author';
import { createNavigation } from '../../common-type/navigation';
import { createSection } from '../../common-type/section';
import { createBlogPost } from '../../common-type';
import { createCompanyAddress } from '../../common-type/company-address';
import { createCompanyInfo } from '../../common-type/company-info';
import { createLink } from '../../common-type/link';
import { createMedia } from '../../common-type/media';
import { createMediaCollection } from '../../common-type/media-collection';
import { createPage } from '../../common-type/page';
import { createPortfolioClient } from '../../common-type/portfolio-client';
import { createPortfolioProject } from '../../common-type/portfolio-project';
import { createTag } from '../../common-type/tag';
import { createTagType } from '../../common-type/tag-type';

const program: Migration.MigrationFunction = function Program(migration) {
  /**
   * Atoms
   */
  createTranslation(migration);
  createLink(migration);
  createMedia(migration);
  createTagType(migration);

  createTag(migration);
  /**
   * Molecules
   */

  createBlock(migration);
  createMediaCollection(migration);

  /**
   * Organisms
   */
  createBlogAuthor(migration);
  createBlogPost(migration);
  createCompanyAddress(migration);
  createCompanyInfo(migration);
  createPortfolioClient(migration);
  createPortfolioProject(migration);

  /**
   * Pages
   */
  createNavigation(migration);
  createPage(migration);

  /**
   * Section
   */
  createSection(migration);
};

// @ts-ignore
export = program;
