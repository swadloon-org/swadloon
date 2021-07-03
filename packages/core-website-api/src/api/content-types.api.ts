/**
 * All content type enum value show be PascalCased
 */
export enum ContentType {
  /**
   * Navigation related types
   */
  LINK = 'Link',

  /**
   * Company related content types
   */
  COMPANY_INFO = 'CompanyInfo',
  EMPLOYEE_PROFILE = 'EmployeeProfile',
  COMPANY_ADDRESS = 'CompanyAddress',

  /**
   * Tag
   */
  TAG = 'Tag',
  TAG_TYPE = 'TagType',

  /**
   * Blog content types
   */
  BLOG = 'Blog',
  BLOG_POST = 'BlogPost',
  BLOG_AUTHOR = 'BlogAuthor',

  /**
   * Portfolio content types
   */
  PORTFOLIO_PROJECT = 'PortfolioProject',
  PORTFOLIO_CLIENT = 'PortfolioClient',
  PORTFOLIO_TAG = 'PortfolioTag',

  /**
   * Customer content types
   */
  CUSTOMER = 'Customer',

  /**
   * Invoice content types
   */
  INVOICE = 'Invoice',

  /**
   * Assets related types
   */
  MEDIA = 'Media',
  MEDIA_COLLECTION = 'MediaCollection',

  /**
   * Form content types
   */
  FORM = 'Form',
  FIELD = 'Field',

  /**
   * Field Translation content types
   */
  TRANSLATION = 'Translation',

  /**
   * Page / section / layout content types
   */
  PAGE = 'Page',
  SECTION = 'Section',

  /**
   * Blocks
   */
  BLOCK = 'Block',
  BLOCK_IMAGE = 'BlockImage',
  BLOCK_GOOGLE_MAPS = 'BlockGoogleMaps',
  BLOCK_IMAGE_CAROUSEL = 'BlockImageCarousel',
  BLOCK_TYPE = 'BlockType',

  /**
   * Navigation
   */
  NAVIGATION = 'Navigation',
  FOOTER = 'Footer',
  NAVBAR = 'Navbar',
}
