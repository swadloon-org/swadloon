import { pascal } from 'case';
import { IFieldOptions } from 'contentful-migration';
import { ContentType } from '@newrade/core-website-api';

export enum COMMON_FIELD {
  /**
   * Contentful defaults
   */
  NAME = 'name',
  DESCRIPTION = 'description',
  KEY = 'key',
  VALUE = 'value',
  /**
   * Custom fields
   */
  TYPE = 'type',
  VARIANT = 'variant',
  COMPONENT = 'component',
  ICON = 'icon',
  LAYOUT = 'layout',
  STYLE_VARIANT = 'styleVariant',
  SIZE = 'size',
  TAGS = 'tags',
  /**
   * Section / Layout related fields
   */
  PAGE = 'page',
  SECTION = 'section',
  SECTIONS = 'sections',
  SLUG = 'slug',
  /**
   * section V2
   */
  BLOCK = 'block',
  BLOCKS = 'blocks',
  /**
   * Banner fields
   */
  BANNER = 'banner',
  BANNER_IMAGES = 'bannerImages',
  /**
   * Commonly used fields
   */
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  TEXT = 'text',
  PRICE = 'price',
  LABEL = 'label',
  MEDIA = 'media',
  MEDIAS = 'medias',
  IMAGE = 'image',
  IMAGES = 'images',
  URL = 'url',
  EMAIL = 'email',
  /**
   * Navigation related fields
   */
  LINK = 'link',
  LINKS = 'links',
  /**
   * For Markdown Content
   */
  CONTENT = 'content',
  /**
   * Company related fields
   */
  COMPANY_NAME = 'companyName',
  COPYRIGHT = 'copyright',
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
   * Blog
   */
  BLOG_POSTS = 'blogPosts',
  BLOG_TYPE = 'blogType',
  BLOG_AUTHOR = 'blogAuthor',
  BLOG_SLUG = 'blogSlug',
  BLOG_EXCERPT = 'blogExcerpt',
  BLOG_MAIN_IMAGE = 'blogMainImage',
  /**
   * Project
   */
  PORTFOLIOS = 'portfolios',
  PORTFOLIO_PROJECT_SLUG = 'portfolioProjectSlug',
  PORTFOLIO_PROJECTS = 'portfolioProjects',
  PORTFOLIO_PROJECT_EXCERPT = 'portfolioProjectExcerpt',

  /**
   * Navigation
   */
  NAVIGATION = 'navigation',
  SUB_NAVIGATION = 'subNavigation',

  /**
   * Media
   */
  BACKGROUND_POSITION_Y = 'backgroundPositionY',
}

/**
 * Reusable field for URLs
 */
export const urlField: IFieldOptions = {
  name: pascal(COMMON_FIELD.URL),
  type: 'Symbol',
  validations: [
    {
      regexp: {
        pattern: `^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\-/]))?$`,
        flags: 'g',
      },
      message: 'Please enter a valid URL (e.g. https://www.google.com)',
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
        pattern: `^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$`,
        flags: 'g',
      },
      message: 'Please enter a valid email',
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
  validations: [{ linkContentType: [ContentType.MEDIA_COLLECTION] }],
};

/**
 * Input type for the from field
 */
export enum INPUT_TYPE {
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  COLOR = 'color',
  DATE = 'date',
  DATETIME_LOCAL = 'datetime-local',
  EMAIL = 'email',
  FILE = 'file',
  HIDDEN = 'hidden',
  IMAGE = 'image',
  MONTH = 'month',
  NUMBER = 'number',
  PASSWORD = 'password',
  RADIO = 'radio',
  RANGE = 'range',
  RESET = 'reset',
  SEARCH = 'search',
  SUBMIT = 'submit',
  TEL = 'tel',
  TEXT = 'text',
  TIME = 'time',
  URL = 'url',
  WEEK = 'week',
}
