import * as Migration from 'contentful-migration';
import { createTranslation } from '../atoms/field-translation';
import { createLink } from '../atoms/link';
import { createMedia } from '../atoms/media';
import { createTag } from '../atoms/tag';
import { createTagType } from '../atoms/tag-type';
import { createBlock } from '../molecules/block';
import { createMediaCollection } from '../molecules/media-collection';
import { createBlogAuthor } from '../organisms/blog-author';
import { createBlogPost } from '../organisms/blog-post';
import { createCompanyAddress } from '../organisms/company-address';
import { createCompanyInfo } from '../organisms/company-info';
import { createPortfolioClient } from '../organisms/portfolio-client';
import { createPortfolioProject } from '../organisms/portfolio-project';
import { createNavigation } from '../pages/navigation';
import { createPage } from '../pages/page';
import { createSection } from '../section/section';

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
