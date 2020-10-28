import { pascal } from 'case';
import { IFieldOptions } from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from './content-types';

export enum COMMON_FIELD {
  /**
   * Contentful defaults
   */
  NAME = 'name',
  DESCRIPTION = 'description',
  /**
   * Custom fields
   */
  TYPE = 'type',
  VARIANT = 'variant',
  SIZE = 'size',
  /**
   * Section / Layout related fields
   */
  PAGE = 'page',
  SECTION = 'section',
  SECTIONS = 'sections',
  /**
   * Commonly used fields
   */
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  TEXT = 'text',
  LABEL = 'label',
  MEDIAS = 'medias',
  IMAGE = 'image',
  IMAGES = 'images',
  URL = 'url',
  EMAIL = 'email',
  /**
   * Navigation related fields
   */
  LINK = 'link',
  /**
   * For Markdown Content
   */
  CONTENT = 'content',
  /**
   * Company related fields
   */
  COMPANY_NAME = 'companyName',
  LOGO = 'logo',
  LOGO_FOOTER = 'logoFooter',
  FAVICON = 'favicon',
  LINKEDIN_PAGE_URL = 'linkedinPageURL',
  FACEBOOK_PAGE_URL = 'facebookPageURL',
  INSTAGRAM_PAGE_URL = 'instagramPageURL',
  TWITTER_PAGE_URL = 'twitterPageURL',
  METADATA_TWITTER_SITE = 'metadataTwitterSite',
  METADATA_TWITTER_CREATOR = 'metadataTwitterCreator',
  METADATA_SITE_NAME = 'metadataSiteName',
  /**
   * Person fields
   */
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  JOB_TITLE = 'jobTitle',
  PROFILE_PICTURE = 'profilePicture',
  BIO = 'bio',
  TWITTER_URL = 'twitterUrl',
  FACEBOOK_URL = 'facebookUrl',
  LINKEDIN_URL = 'linkedinUrl',
  /**
   * Blog fields
   */
  BLOG_POSTS = 'blogPosts',
  BLOG_TYPE = 'blogType',
  BLOG_AUTHOR = 'blogAuthor',
  BLOG_SLUG = 'blogSlug',
  BLOG_EXCERPT = 'blogExcerpt',
  BLOG_MAIN_IMAGE = 'blogMainImage',
}

/**
 * Commonly used fields
 */
export const nameField: IFieldOptions = {
  name: pascal(COMMON_FIELD.NAME),
  type: 'Symbol',
  localized: true,
};

export const descriptionField: IFieldOptions = {
  name: pascal(COMMON_FIELD.NAME),
  type: 'Text',
  localized: true,
};

export const typeField: IFieldOptions = {
  name: pascal(COMMON_FIELD.TYPE),
  type: 'Symbol',
  required: true,
};

export const variantField: IFieldOptions = {
  name: pascal(COMMON_FIELD.VARIANT),
  type: 'Symbol',
  required: true,
};

export const sizeField: IFieldOptions = {
  name: pascal(COMMON_FIELD.SIZE),
  type: 'Symbol',
  required: true,
};

/**
 * Used to hold markdown formatted text
 */
export const markdownField: IFieldOptions = {
  name: pascal(COMMON_FIELD.CONTENT),
  type: 'Text',
  localized: true,
};

/**
 * Reusable field for URLs
 */
export const urlField: IFieldOptions = {
  name: pascal(COMMON_FIELD.URL),
  type: 'Symbol',
  validations: [
    {
      regexp: {
        pattern: `^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$`,
        flags: 'g',
      },
    },
  ],
};

/**
 * Reusable field for URLs
 */
export const emailField: IFieldOptions = {
  name: pascal(COMMON_FIELD.EMAIL),
  type: 'Symbol',
  validations: [
    {
      regexp: {
        pattern: `^\w[\w.-]*@([\w-]+\.)+[\w-]+$`,
        flags: 'g',
      },
    },
  ],
};

/**
 * Reusable field for media collection
 * e.g. carousels, video reel etc.
 */
export const mediaField: IFieldOptions = {
  name: pascal(COMMON_FIELD.MEDIAS),
  type: 'Link',
  linkType: 'Entry',
  validations: [{ linkContentType: [COMMON_CONTENT_TYPE.MEDIA_COLLECTION] }],
};
