import * as Migration from 'contentful-migration';
import { createBlogAuthor } from '../common/content-types/blog-author';
import { createBlogPost } from '../common/content-types/blog-post';
import { createCompanyAddress } from '../common/content-types/company-address';
import { createCompanyInfo } from '../common/content-types/company-info';
import { createFieldTranslation } from '../common/content-types/field-translation';
import { createLink } from '../common/content-types/link';
import { createMediaCollection } from '../common/content-types/media-collection';
import { createPage } from '../common/content-types/page';
import { createPortfolioClient } from '../common/content-types/portfolio-client';
import { createPortfolioProject } from '../common/content-types/portfolio-project';
import { createSection } from '../common/content-types/section';
import { createSectionType } from '../common/content-types/section-type';
import { createTag } from '../common/content-types/tag';
import { PROJECT_SECTION_TYPE } from './project-content-types';

const program: Migration.MigrationFunction = function Program(migration) {
  /**
   * Common
   */
  createFieldTranslation(migration);
  createLink(migration);
  createMediaCollection(migration);
  createCompanyAddress(migration);
  createCompanyInfo(migration);
  createPage(migration);
  createTag(migration);
  createBlogAuthor(migration);
  createBlogPost(migration);
  createPortfolioProject(migration);
  createPortfolioClient(migration);
  createSectionType(migration, { sectionTypes: PROJECT_SECTION_TYPE });
  const section = createSection(migration, { sectionTypes: PROJECT_SECTION_TYPE });
  /**
   * Project specific
   */
};

// @ts-ignore
export = program;
