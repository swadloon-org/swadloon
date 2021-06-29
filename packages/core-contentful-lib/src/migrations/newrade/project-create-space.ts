import * as Migration from 'contentful-migration';
import { createBlogPost } from '../../common-type';
import { createGoogleMapsBlock } from '../../common-type/block-google-maps.contentful';
import { createImageCarouselBlock } from '../../common-type/block-image-carousel.contentful';
import { createImageBlock } from '../../common-type/block-image.contentful';
import { createBlock } from '../../common-type/block.contentful';
import { createBlogAuthor } from '../../common-type/blog-author.contentful';
import { createCompanyAddress } from '../../common-type/company-address.contentful';
import { createCompanyInfo } from '../../common-type/company-info.contentful';
import { createTranslation } from '../../common-type/field-translation.contentful';
import { createFooter } from '../../common-type/footer.contentful';
import { createLink } from '../../common-type/link.contentful';
import { createMediaCollection } from '../../common-type/media-collection.contentful';
import { createMedia } from '../../common-type/media.contentful';
import { createNavbar } from '../../common-type/navbar.contentful';
import { createNavigation } from '../../common-type/navigation.contentful';
import { createPage } from '../../common-type/page.contentful';
import { createSection } from '../../common-type/section.contentful';
import { createTagType } from '../../common-type/tag-type.contentful';
import { createTag } from '../../common-type/tag.contentful';

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
   * Navigation
   */
  createNavigation(migration);
  createFooter(migration);
  createNavbar(migration);

  /**
   * Block
   */
  createBlock(migration);
  createImageBlock(migration);
  createImageCarouselBlock(migration);
  createGoogleMapsBlock(migration);

  /**
   * Section
   */
  createSection(migration);

  /**
   * Pages
   */
  createPage(migration);
};

// @ts-ignore
export = program;
