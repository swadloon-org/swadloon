import * as Migration from 'contentful-migration';
import { createTranslation } from '../../common-type/field-translation.contentful';
import { createImageBlock } from '../../common-type/block-image.contentful';
import { createBlogAuthor } from '../../common-type/blog-author.contentful';
import { createNavigation } from '../../common-type/navigation.contentful';
import { createSection } from '../../common-type/section.contentful';
import { createBlogPost } from '../../common-type/blog-post.contentful';
import { createCompanyAddress } from '../../common-type/company-address.contentful';
import { createCompanyInfo } from '../../common-type/company-info.contentful';
import { createLink } from '../../common-type/link.contentful';
import { createMedia } from '../../common-type/media.contentful';
import { createMediaCollection } from '../../common-type/media-collection.contentful';
import { createPage } from '../../common-type/page.contentful';
import { createPortfolioClient } from '../../common-type/portfolio-client.contentful';
import { createPortfolioProject } from '../../common-type/portfolio-project.contentful';
import { createTag } from '../../common-type/tag.contentful';
import { createTagType } from '../../common-type/tag-type.contentful';

const program: Migration.MigrationFunction = function Program(migration) {
  createTranslation(migration);
  createLink(migration);
  createMedia(migration);
  createTagType(migration);

  createTag(migration);

  createImageBlock(migration);
  createMediaCollection(migration);

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
