export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAnnouncement = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  message?: Maybe<ContentfulAnnouncementMessageTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnnouncementSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulAnnouncementMessageTextNode?: Maybe<ContentfulAnnouncementMessageTextNode>;
};


export type ContentfulAnnouncementCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnnouncementUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnnouncementConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnnouncementEdge>;
  nodes: Array<ContentfulAnnouncement>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnnouncementGroupConnection>;
};


export type ContentfulAnnouncementConnectionDistinctArgs = {
  field: ContentfulAnnouncementFieldsEnum;
};


export type ContentfulAnnouncementConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnnouncementFieldsEnum;
};

export type ContentfulAnnouncementEdge = {
  next?: Maybe<ContentfulAnnouncement>;
  node: ContentfulAnnouncement;
  previous?: Maybe<ContentfulAnnouncement>;
};

export type ContentfulAnnouncementFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'type'
  | 'title'
  | 'section'
  | 'section___id'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'section___name'
  | 'section___title'
  | 'section___subtitle'
  | 'section___type___id'
  | 'section___type___parent___id'
  | 'section___type___parent___children'
  | 'section___type___children'
  | 'section___type___children___id'
  | 'section___type___children___children'
  | 'section___type___internal___content'
  | 'section___type___internal___contentDigest'
  | 'section___type___internal___description'
  | 'section___type___internal___fieldOwners'
  | 'section___type___internal___ignoreType'
  | 'section___type___internal___mediaType'
  | 'section___type___internal___owner'
  | 'section___type___internal___type'
  | 'section___type___name'
  | 'section___type___type'
  | 'section___type___preview___id'
  | 'section___type___preview___children'
  | 'section___type___preview___contentful_id'
  | 'section___type___preview___spaceId'
  | 'section___type___preview___createdAt'
  | 'section___type___preview___updatedAt'
  | 'section___type___preview___title'
  | 'section___type___preview___description'
  | 'section___type___preview___node_locale'
  | 'section___type___spaceId'
  | 'section___type___contentful_id'
  | 'section___type___createdAt'
  | 'section___type___updatedAt'
  | 'section___type___sys___type'
  | 'section___type___sys___revision'
  | 'section___type___node_locale'
  | 'section___type___section'
  | 'section___type___section___id'
  | 'section___type___section___children'
  | 'section___type___section___name'
  | 'section___type___section___title'
  | 'section___type___section___subtitle'
  | 'section___type___section___page'
  | 'section___type___section___spaceId'
  | 'section___type___section___contentful_id'
  | 'section___type___section___createdAt'
  | 'section___type___section___updatedAt'
  | 'section___type___section___node_locale'
  | 'section___type___section___variant'
  | 'section___type___section___styleVariant'
  | 'section___type___section___announcements'
  | 'section___medias___id'
  | 'section___medias___parent___id'
  | 'section___medias___parent___children'
  | 'section___medias___children'
  | 'section___medias___children___id'
  | 'section___medias___children___children'
  | 'section___medias___internal___content'
  | 'section___medias___internal___contentDigest'
  | 'section___medias___internal___description'
  | 'section___medias___internal___fieldOwners'
  | 'section___medias___internal___ignoreType'
  | 'section___medias___internal___mediaType'
  | 'section___medias___internal___owner'
  | 'section___medias___internal___type'
  | 'section___medias___name'
  | 'section___medias___carouselStyle'
  | 'section___medias___medias'
  | 'section___medias___medias___id'
  | 'section___medias___medias___children'
  | 'section___medias___medias___contentful_id'
  | 'section___medias___medias___spaceId'
  | 'section___medias___medias___createdAt'
  | 'section___medias___medias___updatedAt'
  | 'section___medias___medias___title'
  | 'section___medias___medias___description'
  | 'section___medias___medias___node_locale'
  | 'section___medias___section'
  | 'section___medias___section___id'
  | 'section___medias___section___children'
  | 'section___medias___section___name'
  | 'section___medias___section___title'
  | 'section___medias___section___subtitle'
  | 'section___medias___section___page'
  | 'section___medias___section___spaceId'
  | 'section___medias___section___contentful_id'
  | 'section___medias___section___createdAt'
  | 'section___medias___section___updatedAt'
  | 'section___medias___section___node_locale'
  | 'section___medias___section___variant'
  | 'section___medias___section___styleVariant'
  | 'section___medias___section___announcements'
  | 'section___medias___spaceId'
  | 'section___medias___contentful_id'
  | 'section___medias___createdAt'
  | 'section___medias___updatedAt'
  | 'section___medias___sys___type'
  | 'section___medias___sys___revision'
  | 'section___medias___node_locale'
  | 'section___medias___size'
  | 'section___medias___variant'
  | 'section___medias___styleVariant'
  | 'section___page'
  | 'section___page___id'
  | 'section___page___parent___id'
  | 'section___page___parent___children'
  | 'section___page___children'
  | 'section___page___children___id'
  | 'section___page___children___children'
  | 'section___page___internal___content'
  | 'section___page___internal___contentDigest'
  | 'section___page___internal___description'
  | 'section___page___internal___fieldOwners'
  | 'section___page___internal___ignoreType'
  | 'section___page___internal___mediaType'
  | 'section___page___internal___owner'
  | 'section___page___internal___type'
  | 'section___page___name'
  | 'section___page___title'
  | 'section___page___slug'
  | 'section___page___type___id'
  | 'section___page___type___children'
  | 'section___page___type___name'
  | 'section___page___type___type'
  | 'section___page___type___page'
  | 'section___page___type___spaceId'
  | 'section___page___type___contentful_id'
  | 'section___page___type___createdAt'
  | 'section___page___type___updatedAt'
  | 'section___page___type___node_locale'
  | 'section___page___sections'
  | 'section___page___sections___id'
  | 'section___page___sections___children'
  | 'section___page___sections___name'
  | 'section___page___sections___title'
  | 'section___page___sections___subtitle'
  | 'section___page___sections___page'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___variant'
  | 'section___page___sections___styleVariant'
  | 'section___page___sections___announcements'
  | 'section___page___description___id'
  | 'section___page___description___children'
  | 'section___page___description___description'
  | 'section___page___spaceId'
  | 'section___page___contentful_id'
  | 'section___page___createdAt'
  | 'section___page___updatedAt'
  | 'section___page___sys___type'
  | 'section___page___sys___revision'
  | 'section___page___node_locale'
  | 'section___page___link'
  | 'section___page___link___id'
  | 'section___page___link___children'
  | 'section___page___link___type'
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___section'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___text___id'
  | 'section___text___parent___id'
  | 'section___text___parent___children'
  | 'section___text___children'
  | 'section___text___children___id'
  | 'section___text___children___children'
  | 'section___text___internal___content'
  | 'section___text___internal___contentDigest'
  | 'section___text___internal___description'
  | 'section___text___internal___fieldOwners'
  | 'section___text___internal___ignoreType'
  | 'section___text___internal___mediaType'
  | 'section___text___internal___owner'
  | 'section___text___internal___type'
  | 'section___text___text'
  | 'section___text___sys___type'
  | 'section___text___childMdx___rawBody'
  | 'section___text___childMdx___fileAbsolutePath'
  | 'section___text___childMdx___slug'
  | 'section___text___childMdx___body'
  | 'section___text___childMdx___excerpt'
  | 'section___text___childMdx___headings'
  | 'section___text___childMdx___html'
  | 'section___text___childMdx___mdxAST'
  | 'section___text___childMdx___tableOfContents'
  | 'section___text___childMdx___timeToRead'
  | 'section___text___childMdx___id'
  | 'section___text___childMdx___children'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
  | 'section___styleVariant'
  | 'section___announcements'
  | 'section___announcements___id'
  | 'section___announcements___parent___id'
  | 'section___announcements___parent___children'
  | 'section___announcements___children'
  | 'section___announcements___children___id'
  | 'section___announcements___children___children'
  | 'section___announcements___internal___content'
  | 'section___announcements___internal___contentDigest'
  | 'section___announcements___internal___description'
  | 'section___announcements___internal___fieldOwners'
  | 'section___announcements___internal___ignoreType'
  | 'section___announcements___internal___mediaType'
  | 'section___announcements___internal___owner'
  | 'section___announcements___internal___type'
  | 'section___announcements___name'
  | 'section___announcements___type'
  | 'section___announcements___title'
  | 'section___announcements___section'
  | 'section___announcements___section___id'
  | 'section___announcements___section___children'
  | 'section___announcements___section___name'
  | 'section___announcements___section___title'
  | 'section___announcements___section___subtitle'
  | 'section___announcements___section___page'
  | 'section___announcements___section___spaceId'
  | 'section___announcements___section___contentful_id'
  | 'section___announcements___section___createdAt'
  | 'section___announcements___section___updatedAt'
  | 'section___announcements___section___node_locale'
  | 'section___announcements___section___variant'
  | 'section___announcements___section___styleVariant'
  | 'section___announcements___section___announcements'
  | 'section___announcements___message___id'
  | 'section___announcements___message___children'
  | 'section___announcements___message___message'
  | 'section___announcements___spaceId'
  | 'section___announcements___contentful_id'
  | 'section___announcements___createdAt'
  | 'section___announcements___updatedAt'
  | 'section___announcements___sys___type'
  | 'section___announcements___sys___revision'
  | 'section___announcements___node_locale'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___id'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___children'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___message'
  | 'section___link___id'
  | 'section___link___parent___id'
  | 'section___link___parent___children'
  | 'section___link___children'
  | 'section___link___children___id'
  | 'section___link___children___children'
  | 'section___link___internal___content'
  | 'section___link___internal___contentDigest'
  | 'section___link___internal___description'
  | 'section___link___internal___fieldOwners'
  | 'section___link___internal___ignoreType'
  | 'section___link___internal___mediaType'
  | 'section___link___internal___owner'
  | 'section___link___internal___type'
  | 'section___link___type'
  | 'section___link___name'
  | 'section___link___label'
  | 'section___link___page___id'
  | 'section___link___page___children'
  | 'section___link___page___name'
  | 'section___link___page___title'
  | 'section___link___page___slug'
  | 'section___link___page___sections'
  | 'section___link___page___spaceId'
  | 'section___link___page___contentful_id'
  | 'section___link___page___createdAt'
  | 'section___link___page___updatedAt'
  | 'section___link___page___node_locale'
  | 'section___link___page___link'
  | 'section___link___section'
  | 'section___link___section___id'
  | 'section___link___section___children'
  | 'section___link___section___name'
  | 'section___link___section___title'
  | 'section___link___section___subtitle'
  | 'section___link___section___page'
  | 'section___link___section___spaceId'
  | 'section___link___section___contentful_id'
  | 'section___link___section___createdAt'
  | 'section___link___section___updatedAt'
  | 'section___link___section___node_locale'
  | 'section___link___section___variant'
  | 'section___link___section___styleVariant'
  | 'section___link___section___announcements'
  | 'section___link___spaceId'
  | 'section___link___contentful_id'
  | 'section___link___createdAt'
  | 'section___link___updatedAt'
  | 'section___link___sys___type'
  | 'section___link___sys___revision'
  | 'section___link___node_locale'
  | 'section___childContentfulSectionTextTextNode___id'
  | 'section___childContentfulSectionTextTextNode___parent___id'
  | 'section___childContentfulSectionTextTextNode___parent___children'
  | 'section___childContentfulSectionTextTextNode___children'
  | 'section___childContentfulSectionTextTextNode___children___id'
  | 'section___childContentfulSectionTextTextNode___children___children'
  | 'section___childContentfulSectionTextTextNode___internal___content'
  | 'section___childContentfulSectionTextTextNode___internal___contentDigest'
  | 'section___childContentfulSectionTextTextNode___internal___description'
  | 'section___childContentfulSectionTextTextNode___internal___fieldOwners'
  | 'section___childContentfulSectionTextTextNode___internal___ignoreType'
  | 'section___childContentfulSectionTextTextNode___internal___mediaType'
  | 'section___childContentfulSectionTextTextNode___internal___owner'
  | 'section___childContentfulSectionTextTextNode___internal___type'
  | 'section___childContentfulSectionTextTextNode___text'
  | 'section___childContentfulSectionTextTextNode___sys___type'
  | 'section___childContentfulSectionTextTextNode___childMdx___rawBody'
  | 'section___childContentfulSectionTextTextNode___childMdx___fileAbsolutePath'
  | 'section___childContentfulSectionTextTextNode___childMdx___slug'
  | 'section___childContentfulSectionTextTextNode___childMdx___body'
  | 'section___childContentfulSectionTextTextNode___childMdx___excerpt'
  | 'section___childContentfulSectionTextTextNode___childMdx___headings'
  | 'section___childContentfulSectionTextTextNode___childMdx___html'
  | 'section___childContentfulSectionTextTextNode___childMdx___mdxAST'
  | 'section___childContentfulSectionTextTextNode___childMdx___tableOfContents'
  | 'section___childContentfulSectionTextTextNode___childMdx___timeToRead'
  | 'section___childContentfulSectionTextTextNode___childMdx___id'
  | 'section___childContentfulSectionTextTextNode___childMdx___children'
  | 'message___id'
  | 'message___parent___id'
  | 'message___parent___parent___id'
  | 'message___parent___parent___children'
  | 'message___parent___children'
  | 'message___parent___children___id'
  | 'message___parent___children___children'
  | 'message___parent___internal___content'
  | 'message___parent___internal___contentDigest'
  | 'message___parent___internal___description'
  | 'message___parent___internal___fieldOwners'
  | 'message___parent___internal___ignoreType'
  | 'message___parent___internal___mediaType'
  | 'message___parent___internal___owner'
  | 'message___parent___internal___type'
  | 'message___children'
  | 'message___children___id'
  | 'message___children___parent___id'
  | 'message___children___parent___children'
  | 'message___children___children'
  | 'message___children___children___id'
  | 'message___children___children___children'
  | 'message___children___internal___content'
  | 'message___children___internal___contentDigest'
  | 'message___children___internal___description'
  | 'message___children___internal___fieldOwners'
  | 'message___children___internal___ignoreType'
  | 'message___children___internal___mediaType'
  | 'message___children___internal___owner'
  | 'message___children___internal___type'
  | 'message___internal___content'
  | 'message___internal___contentDigest'
  | 'message___internal___description'
  | 'message___internal___fieldOwners'
  | 'message___internal___ignoreType'
  | 'message___internal___mediaType'
  | 'message___internal___owner'
  | 'message___internal___type'
  | 'message___message'
  | 'message___sys___type'
  | 'message___childMdx___rawBody'
  | 'message___childMdx___fileAbsolutePath'
  | 'message___childMdx___frontmatter___title'
  | 'message___childMdx___frontmatter___name'
  | 'message___childMdx___frontmatter___tags'
  | 'message___childMdx___slug'
  | 'message___childMdx___body'
  | 'message___childMdx___excerpt'
  | 'message___childMdx___headings'
  | 'message___childMdx___headings___value'
  | 'message___childMdx___headings___depth'
  | 'message___childMdx___html'
  | 'message___childMdx___mdxAST'
  | 'message___childMdx___tableOfContents'
  | 'message___childMdx___timeToRead'
  | 'message___childMdx___wordCount___paragraphs'
  | 'message___childMdx___wordCount___sentences'
  | 'message___childMdx___wordCount___words'
  | 'message___childMdx___id'
  | 'message___childMdx___parent___id'
  | 'message___childMdx___parent___children'
  | 'message___childMdx___children'
  | 'message___childMdx___children___id'
  | 'message___childMdx___children___children'
  | 'message___childMdx___internal___content'
  | 'message___childMdx___internal___contentDigest'
  | 'message___childMdx___internal___description'
  | 'message___childMdx___internal___fieldOwners'
  | 'message___childMdx___internal___ignoreType'
  | 'message___childMdx___internal___mediaType'
  | 'message___childMdx___internal___owner'
  | 'message___childMdx___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulAnnouncementMessageTextNode___id'
  | 'childContentfulAnnouncementMessageTextNode___parent___id'
  | 'childContentfulAnnouncementMessageTextNode___parent___parent___id'
  | 'childContentfulAnnouncementMessageTextNode___parent___parent___children'
  | 'childContentfulAnnouncementMessageTextNode___parent___children'
  | 'childContentfulAnnouncementMessageTextNode___parent___children___id'
  | 'childContentfulAnnouncementMessageTextNode___parent___children___children'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___content'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___contentDigest'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___description'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___fieldOwners'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___ignoreType'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___mediaType'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___owner'
  | 'childContentfulAnnouncementMessageTextNode___parent___internal___type'
  | 'childContentfulAnnouncementMessageTextNode___children'
  | 'childContentfulAnnouncementMessageTextNode___children___id'
  | 'childContentfulAnnouncementMessageTextNode___children___parent___id'
  | 'childContentfulAnnouncementMessageTextNode___children___parent___children'
  | 'childContentfulAnnouncementMessageTextNode___children___children'
  | 'childContentfulAnnouncementMessageTextNode___children___children___id'
  | 'childContentfulAnnouncementMessageTextNode___children___children___children'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___content'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___contentDigest'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___description'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___fieldOwners'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___ignoreType'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___mediaType'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___owner'
  | 'childContentfulAnnouncementMessageTextNode___children___internal___type'
  | 'childContentfulAnnouncementMessageTextNode___internal___content'
  | 'childContentfulAnnouncementMessageTextNode___internal___contentDigest'
  | 'childContentfulAnnouncementMessageTextNode___internal___description'
  | 'childContentfulAnnouncementMessageTextNode___internal___fieldOwners'
  | 'childContentfulAnnouncementMessageTextNode___internal___ignoreType'
  | 'childContentfulAnnouncementMessageTextNode___internal___mediaType'
  | 'childContentfulAnnouncementMessageTextNode___internal___owner'
  | 'childContentfulAnnouncementMessageTextNode___internal___type'
  | 'childContentfulAnnouncementMessageTextNode___message'
  | 'childContentfulAnnouncementMessageTextNode___sys___type'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___rawBody'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___frontmatter___title'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___frontmatter___name'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___frontmatter___tags'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___slug'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___body'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___excerpt'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___headings'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___headings___value'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___headings___depth'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___html'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___mdxAST'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___tableOfContents'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___timeToRead'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___wordCount___sentences'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___wordCount___words'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___id'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___parent___id'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___parent___children'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___children'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___children___id'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___children___children'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___content'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___contentDigest'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___description'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___ignoreType'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___mediaType'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___owner'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___internal___type';

export type ContentfulAnnouncementFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  message?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnnouncementSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAnnouncementMessageTextNode?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
};

export type ContentfulAnnouncementFilterListInput = {
  elemMatch?: Maybe<ContentfulAnnouncementFilterInput>;
};

export type ContentfulAnnouncementGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnnouncementEdge>;
  nodes: Array<ContentfulAnnouncement>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnnouncementMessageTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  message?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAnnouncementMessageTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulAnnouncementMessageTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnnouncementMessageTextNodeEdge>;
  nodes: Array<ContentfulAnnouncementMessageTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnnouncementMessageTextNodeGroupConnection>;
};


export type ContentfulAnnouncementMessageTextNodeConnectionDistinctArgs = {
  field: ContentfulAnnouncementMessageTextNodeFieldsEnum;
};


export type ContentfulAnnouncementMessageTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnnouncementMessageTextNodeFieldsEnum;
};

export type ContentfulAnnouncementMessageTextNodeEdge = {
  next?: Maybe<ContentfulAnnouncementMessageTextNode>;
  node: ContentfulAnnouncementMessageTextNode;
  previous?: Maybe<ContentfulAnnouncementMessageTextNode>;
};

export type ContentfulAnnouncementMessageTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'message'
  | 'sys___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type ContentfulAnnouncementMessageTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  message?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAnnouncementMessageTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulAnnouncementMessageTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnnouncementMessageTextNodeEdge>;
  nodes: Array<ContentfulAnnouncementMessageTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnnouncementMessageTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnnouncementMessageTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnnouncementMessageTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAnnouncementMessageTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnnouncementSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnnouncementFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnnouncementSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnnouncementSysContentType>;
};

export type ContentfulAnnouncementSysContentType = {
  sys?: Maybe<ContentfulAnnouncementSysContentTypeSys>;
};

export type ContentfulAnnouncementSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnnouncementSysContentTypeSysFilterInput>;
};

export type ContentfulAnnouncementSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAnnouncementSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnnouncementSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnnouncementSysContentTypeFilterInput>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulCompanyAddress = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  websiteURL?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCompanyAddressSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyAddressCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyAddressUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyAddressConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyAddressEdge>;
  nodes: Array<ContentfulCompanyAddress>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCompanyAddressGroupConnection>;
};


export type ContentfulCompanyAddressConnectionDistinctArgs = {
  field: ContentfulCompanyAddressFieldsEnum;
};


export type ContentfulCompanyAddressConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCompanyAddressFieldsEnum;
};

export type ContentfulCompanyAddressEdge = {
  next?: Maybe<ContentfulCompanyAddress>;
  node: ContentfulCompanyAddress;
  previous?: Maybe<ContentfulCompanyAddress>;
};

export type ContentfulCompanyAddressFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'addressLine1'
  | 'city'
  | 'postalCode'
  | 'provinceState'
  | 'phone'
  | 'fax'
  | 'websiteURL'
  | 'email'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCompanyAddressFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  addressLine1?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  postalCode?: Maybe<StringQueryOperatorInput>;
  provinceState?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  fax?: Maybe<StringQueryOperatorInput>;
  websiteURL?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanyAddressSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanyAddressGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyAddressEdge>;
  nodes: Array<ContentfulCompanyAddress>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyAddressSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCompanyAddressFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCompanyAddressSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCompanyAddressSysContentType>;
};

export type ContentfulCompanyAddressSysContentType = {
  sys?: Maybe<ContentfulCompanyAddressSysContentTypeSys>;
};

export type ContentfulCompanyAddressSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCompanyAddressSysContentTypeSysFilterInput>;
};

export type ContentfulCompanyAddressSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyAddressSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanyAddressSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCompanyAddressSysContentTypeFilterInput>;
};

export type ContentfulCompanyInfo = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metadataSiteName?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  favicon?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCompanyInfoSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyInfoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyInfoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyInfoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyInfoEdge>;
  nodes: Array<ContentfulCompanyInfo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCompanyInfoGroupConnection>;
};


export type ContentfulCompanyInfoConnectionDistinctArgs = {
  field: ContentfulCompanyInfoFieldsEnum;
};


export type ContentfulCompanyInfoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCompanyInfoFieldsEnum;
};

export type ContentfulCompanyInfoEdge = {
  next?: Maybe<ContentfulCompanyInfo>;
  node: ContentfulCompanyInfo;
  previous?: Maybe<ContentfulCompanyInfo>;
};

export type ContentfulCompanyInfoFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'companyName'
  | 'description'
  | 'metadataSiteName'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'logo___contentful_id'
  | 'logo___spaceId'
  | 'logo___createdAt'
  | 'logo___updatedAt'
  | 'logo___file___url'
  | 'logo___file___details___size'
  | 'logo___file___fileName'
  | 'logo___file___contentType'
  | 'logo___title'
  | 'logo___description'
  | 'logo___node_locale'
  | 'logo___sys___type'
  | 'logo___sys___revision'
  | 'logo___fixed___base64'
  | 'logo___fixed___tracedSVG'
  | 'logo___fixed___aspectRatio'
  | 'logo___fixed___width'
  | 'logo___fixed___height'
  | 'logo___fixed___src'
  | 'logo___fixed___srcSet'
  | 'logo___fixed___srcWebp'
  | 'logo___fixed___srcSetWebp'
  | 'logo___resolutions___base64'
  | 'logo___resolutions___tracedSVG'
  | 'logo___resolutions___aspectRatio'
  | 'logo___resolutions___width'
  | 'logo___resolutions___height'
  | 'logo___resolutions___src'
  | 'logo___resolutions___srcSet'
  | 'logo___resolutions___srcWebp'
  | 'logo___resolutions___srcSetWebp'
  | 'logo___fluid___base64'
  | 'logo___fluid___tracedSVG'
  | 'logo___fluid___aspectRatio'
  | 'logo___fluid___src'
  | 'logo___fluid___srcSet'
  | 'logo___fluid___srcWebp'
  | 'logo___fluid___srcSetWebp'
  | 'logo___fluid___sizes'
  | 'logo___sizes___base64'
  | 'logo___sizes___tracedSVG'
  | 'logo___sizes___aspectRatio'
  | 'logo___sizes___src'
  | 'logo___sizes___srcSet'
  | 'logo___sizes___srcWebp'
  | 'logo___sizes___srcSetWebp'
  | 'logo___sizes___sizes'
  | 'logo___resize___base64'
  | 'logo___resize___tracedSVG'
  | 'logo___resize___src'
  | 'logo___resize___width'
  | 'logo___resize___height'
  | 'logo___resize___aspectRatio'
  | 'favicon___id'
  | 'favicon___parent___id'
  | 'favicon___parent___parent___id'
  | 'favicon___parent___parent___children'
  | 'favicon___parent___children'
  | 'favicon___parent___children___id'
  | 'favicon___parent___children___children'
  | 'favicon___parent___internal___content'
  | 'favicon___parent___internal___contentDigest'
  | 'favicon___parent___internal___description'
  | 'favicon___parent___internal___fieldOwners'
  | 'favicon___parent___internal___ignoreType'
  | 'favicon___parent___internal___mediaType'
  | 'favicon___parent___internal___owner'
  | 'favicon___parent___internal___type'
  | 'favicon___children'
  | 'favicon___children___id'
  | 'favicon___children___parent___id'
  | 'favicon___children___parent___children'
  | 'favicon___children___children'
  | 'favicon___children___children___id'
  | 'favicon___children___children___children'
  | 'favicon___children___internal___content'
  | 'favicon___children___internal___contentDigest'
  | 'favicon___children___internal___description'
  | 'favicon___children___internal___fieldOwners'
  | 'favicon___children___internal___ignoreType'
  | 'favicon___children___internal___mediaType'
  | 'favicon___children___internal___owner'
  | 'favicon___children___internal___type'
  | 'favicon___internal___content'
  | 'favicon___internal___contentDigest'
  | 'favicon___internal___description'
  | 'favicon___internal___fieldOwners'
  | 'favicon___internal___ignoreType'
  | 'favicon___internal___mediaType'
  | 'favicon___internal___owner'
  | 'favicon___internal___type'
  | 'favicon___contentful_id'
  | 'favicon___spaceId'
  | 'favicon___createdAt'
  | 'favicon___updatedAt'
  | 'favicon___file___url'
  | 'favicon___file___details___size'
  | 'favicon___file___fileName'
  | 'favicon___file___contentType'
  | 'favicon___title'
  | 'favicon___description'
  | 'favicon___node_locale'
  | 'favicon___sys___type'
  | 'favicon___sys___revision'
  | 'favicon___fixed___base64'
  | 'favicon___fixed___tracedSVG'
  | 'favicon___fixed___aspectRatio'
  | 'favicon___fixed___width'
  | 'favicon___fixed___height'
  | 'favicon___fixed___src'
  | 'favicon___fixed___srcSet'
  | 'favicon___fixed___srcWebp'
  | 'favicon___fixed___srcSetWebp'
  | 'favicon___resolutions___base64'
  | 'favicon___resolutions___tracedSVG'
  | 'favicon___resolutions___aspectRatio'
  | 'favicon___resolutions___width'
  | 'favicon___resolutions___height'
  | 'favicon___resolutions___src'
  | 'favicon___resolutions___srcSet'
  | 'favicon___resolutions___srcWebp'
  | 'favicon___resolutions___srcSetWebp'
  | 'favicon___fluid___base64'
  | 'favicon___fluid___tracedSVG'
  | 'favicon___fluid___aspectRatio'
  | 'favicon___fluid___src'
  | 'favicon___fluid___srcSet'
  | 'favicon___fluid___srcWebp'
  | 'favicon___fluid___srcSetWebp'
  | 'favicon___fluid___sizes'
  | 'favicon___sizes___base64'
  | 'favicon___sizes___tracedSVG'
  | 'favicon___sizes___aspectRatio'
  | 'favicon___sizes___src'
  | 'favicon___sizes___srcSet'
  | 'favicon___sizes___srcWebp'
  | 'favicon___sizes___srcSetWebp'
  | 'favicon___sizes___sizes'
  | 'favicon___resize___base64'
  | 'favicon___resize___tracedSVG'
  | 'favicon___resize___src'
  | 'favicon___resize___width'
  | 'favicon___resize___height'
  | 'favicon___resize___aspectRatio'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCompanyInfoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  companyName?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  metadataSiteName?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  favicon?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanyInfoSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanyInfoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyInfoEdge>;
  nodes: Array<ContentfulCompanyInfo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyInfoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCompanyInfoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCompanyInfoSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCompanyInfoSysContentType>;
};

export type ContentfulCompanyInfoSysContentType = {
  sys?: Maybe<ContentfulCompanyInfoSysContentTypeSys>;
};

export type ContentfulCompanyInfoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCompanyInfoSysContentTypeSysFilterInput>;
};

export type ContentfulCompanyInfoSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyInfoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanyInfoSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCompanyInfoSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCostItem = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCostItemSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCostItemCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCostItemUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCostItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCostItemEdge>;
  nodes: Array<ContentfulCostItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCostItemGroupConnection>;
};


export type ContentfulCostItemConnectionDistinctArgs = {
  field: ContentfulCostItemFieldsEnum;
};


export type ContentfulCostItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCostItemFieldsEnum;
};

export type ContentfulCostItemEdge = {
  next?: Maybe<ContentfulCostItem>;
  node: ContentfulCostItem;
  previous?: Maybe<ContentfulCostItem>;
};

export type ContentfulCostItemFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'price'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCostItemFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCostItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCostItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCostItemEdge>;
  nodes: Array<ContentfulCostItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCostItemSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCostItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCostItemSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCostItemSysContentType>;
};

export type ContentfulCostItemSysContentType = {
  sys?: Maybe<ContentfulCostItemSysContentTypeSys>;
};

export type ContentfulCostItemSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCostItemSysContentTypeSysFilterInput>;
};

export type ContentfulCostItemSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCostItemSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCostItemSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCostItemSysContentTypeFilterInput>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulLink = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  page?: Maybe<ContentfulPage>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLinkSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulLinkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLinkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLinkEdge>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLinkGroupConnection>;
};


export type ContentfulLinkConnectionDistinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


export type ContentfulLinkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLinkFieldsEnum;
};

export type ContentfulLinkEdge = {
  next?: Maybe<ContentfulLink>;
  node: ContentfulLink;
  previous?: Maybe<ContentfulLink>;
};

export type ContentfulLinkFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'name'
  | 'label'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___name'
  | 'page___title'
  | 'page___slug'
  | 'page___type___id'
  | 'page___type___parent___id'
  | 'page___type___parent___children'
  | 'page___type___children'
  | 'page___type___children___id'
  | 'page___type___children___children'
  | 'page___type___internal___content'
  | 'page___type___internal___contentDigest'
  | 'page___type___internal___description'
  | 'page___type___internal___fieldOwners'
  | 'page___type___internal___ignoreType'
  | 'page___type___internal___mediaType'
  | 'page___type___internal___owner'
  | 'page___type___internal___type'
  | 'page___type___name'
  | 'page___type___type'
  | 'page___type___preview___id'
  | 'page___type___preview___children'
  | 'page___type___preview___contentful_id'
  | 'page___type___preview___spaceId'
  | 'page___type___preview___createdAt'
  | 'page___type___preview___updatedAt'
  | 'page___type___preview___title'
  | 'page___type___preview___description'
  | 'page___type___preview___node_locale'
  | 'page___type___page'
  | 'page___type___page___id'
  | 'page___type___page___children'
  | 'page___type___page___name'
  | 'page___type___page___title'
  | 'page___type___page___slug'
  | 'page___type___page___sections'
  | 'page___type___page___spaceId'
  | 'page___type___page___contentful_id'
  | 'page___type___page___createdAt'
  | 'page___type___page___updatedAt'
  | 'page___type___page___node_locale'
  | 'page___type___page___link'
  | 'page___type___spaceId'
  | 'page___type___contentful_id'
  | 'page___type___createdAt'
  | 'page___type___updatedAt'
  | 'page___type___sys___type'
  | 'page___type___sys___revision'
  | 'page___type___node_locale'
  | 'page___sections'
  | 'page___sections___id'
  | 'page___sections___parent___id'
  | 'page___sections___parent___children'
  | 'page___sections___children'
  | 'page___sections___children___id'
  | 'page___sections___children___children'
  | 'page___sections___internal___content'
  | 'page___sections___internal___contentDigest'
  | 'page___sections___internal___description'
  | 'page___sections___internal___fieldOwners'
  | 'page___sections___internal___ignoreType'
  | 'page___sections___internal___mediaType'
  | 'page___sections___internal___owner'
  | 'page___sections___internal___type'
  | 'page___sections___name'
  | 'page___sections___title'
  | 'page___sections___subtitle'
  | 'page___sections___type___id'
  | 'page___sections___type___children'
  | 'page___sections___type___name'
  | 'page___sections___type___type'
  | 'page___sections___type___spaceId'
  | 'page___sections___type___contentful_id'
  | 'page___sections___type___createdAt'
  | 'page___sections___type___updatedAt'
  | 'page___sections___type___node_locale'
  | 'page___sections___type___section'
  | 'page___sections___medias___id'
  | 'page___sections___medias___children'
  | 'page___sections___medias___name'
  | 'page___sections___medias___carouselStyle'
  | 'page___sections___medias___medias'
  | 'page___sections___medias___section'
  | 'page___sections___medias___spaceId'
  | 'page___sections___medias___contentful_id'
  | 'page___sections___medias___createdAt'
  | 'page___sections___medias___updatedAt'
  | 'page___sections___medias___node_locale'
  | 'page___sections___medias___size'
  | 'page___sections___medias___variant'
  | 'page___sections___medias___styleVariant'
  | 'page___sections___page'
  | 'page___sections___page___id'
  | 'page___sections___page___children'
  | 'page___sections___page___name'
  | 'page___sections___page___title'
  | 'page___sections___page___slug'
  | 'page___sections___page___sections'
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___page___link'
  | 'page___sections___text___id'
  | 'page___sections___text___children'
  | 'page___sections___text___text'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
  | 'page___sections___styleVariant'
  | 'page___sections___announcements'
  | 'page___sections___announcements___id'
  | 'page___sections___announcements___children'
  | 'page___sections___announcements___name'
  | 'page___sections___announcements___type'
  | 'page___sections___announcements___title'
  | 'page___sections___announcements___section'
  | 'page___sections___announcements___spaceId'
  | 'page___sections___announcements___contentful_id'
  | 'page___sections___announcements___createdAt'
  | 'page___sections___announcements___updatedAt'
  | 'page___sections___announcements___node_locale'
  | 'page___sections___link___id'
  | 'page___sections___link___children'
  | 'page___sections___link___type'
  | 'page___sections___link___name'
  | 'page___sections___link___label'
  | 'page___sections___link___section'
  | 'page___sections___link___spaceId'
  | 'page___sections___link___contentful_id'
  | 'page___sections___link___createdAt'
  | 'page___sections___link___updatedAt'
  | 'page___sections___link___node_locale'
  | 'page___sections___childContentfulSectionTextTextNode___id'
  | 'page___sections___childContentfulSectionTextTextNode___children'
  | 'page___sections___childContentfulSectionTextTextNode___text'
  | 'page___description___id'
  | 'page___description___parent___id'
  | 'page___description___parent___children'
  | 'page___description___children'
  | 'page___description___children___id'
  | 'page___description___children___children'
  | 'page___description___internal___content'
  | 'page___description___internal___contentDigest'
  | 'page___description___internal___description'
  | 'page___description___internal___fieldOwners'
  | 'page___description___internal___ignoreType'
  | 'page___description___internal___mediaType'
  | 'page___description___internal___owner'
  | 'page___description___internal___type'
  | 'page___description___description'
  | 'page___description___sys___type'
  | 'page___description___childMdx___rawBody'
  | 'page___description___childMdx___fileAbsolutePath'
  | 'page___description___childMdx___slug'
  | 'page___description___childMdx___body'
  | 'page___description___childMdx___excerpt'
  | 'page___description___childMdx___headings'
  | 'page___description___childMdx___html'
  | 'page___description___childMdx___mdxAST'
  | 'page___description___childMdx___tableOfContents'
  | 'page___description___childMdx___timeToRead'
  | 'page___description___childMdx___id'
  | 'page___description___childMdx___children'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___type'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'page___link'
  | 'page___link___id'
  | 'page___link___parent___id'
  | 'page___link___parent___children'
  | 'page___link___children'
  | 'page___link___children___id'
  | 'page___link___children___children'
  | 'page___link___internal___content'
  | 'page___link___internal___contentDigest'
  | 'page___link___internal___description'
  | 'page___link___internal___fieldOwners'
  | 'page___link___internal___ignoreType'
  | 'page___link___internal___mediaType'
  | 'page___link___internal___owner'
  | 'page___link___internal___type'
  | 'page___link___type'
  | 'page___link___name'
  | 'page___link___label'
  | 'page___link___page___id'
  | 'page___link___page___children'
  | 'page___link___page___name'
  | 'page___link___page___title'
  | 'page___link___page___slug'
  | 'page___link___page___sections'
  | 'page___link___page___spaceId'
  | 'page___link___page___contentful_id'
  | 'page___link___page___createdAt'
  | 'page___link___page___updatedAt'
  | 'page___link___page___node_locale'
  | 'page___link___page___link'
  | 'page___link___section'
  | 'page___link___section___id'
  | 'page___link___section___children'
  | 'page___link___section___name'
  | 'page___link___section___title'
  | 'page___link___section___subtitle'
  | 'page___link___section___page'
  | 'page___link___section___spaceId'
  | 'page___link___section___contentful_id'
  | 'page___link___section___createdAt'
  | 'page___link___section___updatedAt'
  | 'page___link___section___node_locale'
  | 'page___link___section___variant'
  | 'page___link___section___styleVariant'
  | 'page___link___section___announcements'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___childContentfulPageDescriptionTextNode___id'
  | 'page___childContentfulPageDescriptionTextNode___parent___id'
  | 'page___childContentfulPageDescriptionTextNode___parent___children'
  | 'page___childContentfulPageDescriptionTextNode___children'
  | 'page___childContentfulPageDescriptionTextNode___children___id'
  | 'page___childContentfulPageDescriptionTextNode___children___children'
  | 'page___childContentfulPageDescriptionTextNode___internal___content'
  | 'page___childContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'page___childContentfulPageDescriptionTextNode___internal___description'
  | 'page___childContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'page___childContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'page___childContentfulPageDescriptionTextNode___internal___mediaType'
  | 'page___childContentfulPageDescriptionTextNode___internal___owner'
  | 'page___childContentfulPageDescriptionTextNode___internal___type'
  | 'page___childContentfulPageDescriptionTextNode___description'
  | 'page___childContentfulPageDescriptionTextNode___sys___type'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___slug'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___body'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___headings'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___html'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___id'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___children'
  | 'section'
  | 'section___id'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'section___name'
  | 'section___title'
  | 'section___subtitle'
  | 'section___type___id'
  | 'section___type___parent___id'
  | 'section___type___parent___children'
  | 'section___type___children'
  | 'section___type___children___id'
  | 'section___type___children___children'
  | 'section___type___internal___content'
  | 'section___type___internal___contentDigest'
  | 'section___type___internal___description'
  | 'section___type___internal___fieldOwners'
  | 'section___type___internal___ignoreType'
  | 'section___type___internal___mediaType'
  | 'section___type___internal___owner'
  | 'section___type___internal___type'
  | 'section___type___name'
  | 'section___type___type'
  | 'section___type___preview___id'
  | 'section___type___preview___children'
  | 'section___type___preview___contentful_id'
  | 'section___type___preview___spaceId'
  | 'section___type___preview___createdAt'
  | 'section___type___preview___updatedAt'
  | 'section___type___preview___title'
  | 'section___type___preview___description'
  | 'section___type___preview___node_locale'
  | 'section___type___spaceId'
  | 'section___type___contentful_id'
  | 'section___type___createdAt'
  | 'section___type___updatedAt'
  | 'section___type___sys___type'
  | 'section___type___sys___revision'
  | 'section___type___node_locale'
  | 'section___type___section'
  | 'section___type___section___id'
  | 'section___type___section___children'
  | 'section___type___section___name'
  | 'section___type___section___title'
  | 'section___type___section___subtitle'
  | 'section___type___section___page'
  | 'section___type___section___spaceId'
  | 'section___type___section___contentful_id'
  | 'section___type___section___createdAt'
  | 'section___type___section___updatedAt'
  | 'section___type___section___node_locale'
  | 'section___type___section___variant'
  | 'section___type___section___styleVariant'
  | 'section___type___section___announcements'
  | 'section___medias___id'
  | 'section___medias___parent___id'
  | 'section___medias___parent___children'
  | 'section___medias___children'
  | 'section___medias___children___id'
  | 'section___medias___children___children'
  | 'section___medias___internal___content'
  | 'section___medias___internal___contentDigest'
  | 'section___medias___internal___description'
  | 'section___medias___internal___fieldOwners'
  | 'section___medias___internal___ignoreType'
  | 'section___medias___internal___mediaType'
  | 'section___medias___internal___owner'
  | 'section___medias___internal___type'
  | 'section___medias___name'
  | 'section___medias___carouselStyle'
  | 'section___medias___medias'
  | 'section___medias___medias___id'
  | 'section___medias___medias___children'
  | 'section___medias___medias___contentful_id'
  | 'section___medias___medias___spaceId'
  | 'section___medias___medias___createdAt'
  | 'section___medias___medias___updatedAt'
  | 'section___medias___medias___title'
  | 'section___medias___medias___description'
  | 'section___medias___medias___node_locale'
  | 'section___medias___section'
  | 'section___medias___section___id'
  | 'section___medias___section___children'
  | 'section___medias___section___name'
  | 'section___medias___section___title'
  | 'section___medias___section___subtitle'
  | 'section___medias___section___page'
  | 'section___medias___section___spaceId'
  | 'section___medias___section___contentful_id'
  | 'section___medias___section___createdAt'
  | 'section___medias___section___updatedAt'
  | 'section___medias___section___node_locale'
  | 'section___medias___section___variant'
  | 'section___medias___section___styleVariant'
  | 'section___medias___section___announcements'
  | 'section___medias___spaceId'
  | 'section___medias___contentful_id'
  | 'section___medias___createdAt'
  | 'section___medias___updatedAt'
  | 'section___medias___sys___type'
  | 'section___medias___sys___revision'
  | 'section___medias___node_locale'
  | 'section___medias___size'
  | 'section___medias___variant'
  | 'section___medias___styleVariant'
  | 'section___page'
  | 'section___page___id'
  | 'section___page___parent___id'
  | 'section___page___parent___children'
  | 'section___page___children'
  | 'section___page___children___id'
  | 'section___page___children___children'
  | 'section___page___internal___content'
  | 'section___page___internal___contentDigest'
  | 'section___page___internal___description'
  | 'section___page___internal___fieldOwners'
  | 'section___page___internal___ignoreType'
  | 'section___page___internal___mediaType'
  | 'section___page___internal___owner'
  | 'section___page___internal___type'
  | 'section___page___name'
  | 'section___page___title'
  | 'section___page___slug'
  | 'section___page___type___id'
  | 'section___page___type___children'
  | 'section___page___type___name'
  | 'section___page___type___type'
  | 'section___page___type___page'
  | 'section___page___type___spaceId'
  | 'section___page___type___contentful_id'
  | 'section___page___type___createdAt'
  | 'section___page___type___updatedAt'
  | 'section___page___type___node_locale'
  | 'section___page___sections'
  | 'section___page___sections___id'
  | 'section___page___sections___children'
  | 'section___page___sections___name'
  | 'section___page___sections___title'
  | 'section___page___sections___subtitle'
  | 'section___page___sections___page'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___variant'
  | 'section___page___sections___styleVariant'
  | 'section___page___sections___announcements'
  | 'section___page___description___id'
  | 'section___page___description___children'
  | 'section___page___description___description'
  | 'section___page___spaceId'
  | 'section___page___contentful_id'
  | 'section___page___createdAt'
  | 'section___page___updatedAt'
  | 'section___page___sys___type'
  | 'section___page___sys___revision'
  | 'section___page___node_locale'
  | 'section___page___link'
  | 'section___page___link___id'
  | 'section___page___link___children'
  | 'section___page___link___type'
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___section'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___text___id'
  | 'section___text___parent___id'
  | 'section___text___parent___children'
  | 'section___text___children'
  | 'section___text___children___id'
  | 'section___text___children___children'
  | 'section___text___internal___content'
  | 'section___text___internal___contentDigest'
  | 'section___text___internal___description'
  | 'section___text___internal___fieldOwners'
  | 'section___text___internal___ignoreType'
  | 'section___text___internal___mediaType'
  | 'section___text___internal___owner'
  | 'section___text___internal___type'
  | 'section___text___text'
  | 'section___text___sys___type'
  | 'section___text___childMdx___rawBody'
  | 'section___text___childMdx___fileAbsolutePath'
  | 'section___text___childMdx___slug'
  | 'section___text___childMdx___body'
  | 'section___text___childMdx___excerpt'
  | 'section___text___childMdx___headings'
  | 'section___text___childMdx___html'
  | 'section___text___childMdx___mdxAST'
  | 'section___text___childMdx___tableOfContents'
  | 'section___text___childMdx___timeToRead'
  | 'section___text___childMdx___id'
  | 'section___text___childMdx___children'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
  | 'section___styleVariant'
  | 'section___announcements'
  | 'section___announcements___id'
  | 'section___announcements___parent___id'
  | 'section___announcements___parent___children'
  | 'section___announcements___children'
  | 'section___announcements___children___id'
  | 'section___announcements___children___children'
  | 'section___announcements___internal___content'
  | 'section___announcements___internal___contentDigest'
  | 'section___announcements___internal___description'
  | 'section___announcements___internal___fieldOwners'
  | 'section___announcements___internal___ignoreType'
  | 'section___announcements___internal___mediaType'
  | 'section___announcements___internal___owner'
  | 'section___announcements___internal___type'
  | 'section___announcements___name'
  | 'section___announcements___type'
  | 'section___announcements___title'
  | 'section___announcements___section'
  | 'section___announcements___section___id'
  | 'section___announcements___section___children'
  | 'section___announcements___section___name'
  | 'section___announcements___section___title'
  | 'section___announcements___section___subtitle'
  | 'section___announcements___section___page'
  | 'section___announcements___section___spaceId'
  | 'section___announcements___section___contentful_id'
  | 'section___announcements___section___createdAt'
  | 'section___announcements___section___updatedAt'
  | 'section___announcements___section___node_locale'
  | 'section___announcements___section___variant'
  | 'section___announcements___section___styleVariant'
  | 'section___announcements___section___announcements'
  | 'section___announcements___message___id'
  | 'section___announcements___message___children'
  | 'section___announcements___message___message'
  | 'section___announcements___spaceId'
  | 'section___announcements___contentful_id'
  | 'section___announcements___createdAt'
  | 'section___announcements___updatedAt'
  | 'section___announcements___sys___type'
  | 'section___announcements___sys___revision'
  | 'section___announcements___node_locale'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___id'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___children'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___message'
  | 'section___link___id'
  | 'section___link___parent___id'
  | 'section___link___parent___children'
  | 'section___link___children'
  | 'section___link___children___id'
  | 'section___link___children___children'
  | 'section___link___internal___content'
  | 'section___link___internal___contentDigest'
  | 'section___link___internal___description'
  | 'section___link___internal___fieldOwners'
  | 'section___link___internal___ignoreType'
  | 'section___link___internal___mediaType'
  | 'section___link___internal___owner'
  | 'section___link___internal___type'
  | 'section___link___type'
  | 'section___link___name'
  | 'section___link___label'
  | 'section___link___page___id'
  | 'section___link___page___children'
  | 'section___link___page___name'
  | 'section___link___page___title'
  | 'section___link___page___slug'
  | 'section___link___page___sections'
  | 'section___link___page___spaceId'
  | 'section___link___page___contentful_id'
  | 'section___link___page___createdAt'
  | 'section___link___page___updatedAt'
  | 'section___link___page___node_locale'
  | 'section___link___page___link'
  | 'section___link___section'
  | 'section___link___section___id'
  | 'section___link___section___children'
  | 'section___link___section___name'
  | 'section___link___section___title'
  | 'section___link___section___subtitle'
  | 'section___link___section___page'
  | 'section___link___section___spaceId'
  | 'section___link___section___contentful_id'
  | 'section___link___section___createdAt'
  | 'section___link___section___updatedAt'
  | 'section___link___section___node_locale'
  | 'section___link___section___variant'
  | 'section___link___section___styleVariant'
  | 'section___link___section___announcements'
  | 'section___link___spaceId'
  | 'section___link___contentful_id'
  | 'section___link___createdAt'
  | 'section___link___updatedAt'
  | 'section___link___sys___type'
  | 'section___link___sys___revision'
  | 'section___link___node_locale'
  | 'section___childContentfulSectionTextTextNode___id'
  | 'section___childContentfulSectionTextTextNode___parent___id'
  | 'section___childContentfulSectionTextTextNode___parent___children'
  | 'section___childContentfulSectionTextTextNode___children'
  | 'section___childContentfulSectionTextTextNode___children___id'
  | 'section___childContentfulSectionTextTextNode___children___children'
  | 'section___childContentfulSectionTextTextNode___internal___content'
  | 'section___childContentfulSectionTextTextNode___internal___contentDigest'
  | 'section___childContentfulSectionTextTextNode___internal___description'
  | 'section___childContentfulSectionTextTextNode___internal___fieldOwners'
  | 'section___childContentfulSectionTextTextNode___internal___ignoreType'
  | 'section___childContentfulSectionTextTextNode___internal___mediaType'
  | 'section___childContentfulSectionTextTextNode___internal___owner'
  | 'section___childContentfulSectionTextTextNode___internal___type'
  | 'section___childContentfulSectionTextTextNode___text'
  | 'section___childContentfulSectionTextTextNode___sys___type'
  | 'section___childContentfulSectionTextTextNode___childMdx___rawBody'
  | 'section___childContentfulSectionTextTextNode___childMdx___fileAbsolutePath'
  | 'section___childContentfulSectionTextTextNode___childMdx___slug'
  | 'section___childContentfulSectionTextTextNode___childMdx___body'
  | 'section___childContentfulSectionTextTextNode___childMdx___excerpt'
  | 'section___childContentfulSectionTextTextNode___childMdx___headings'
  | 'section___childContentfulSectionTextTextNode___childMdx___html'
  | 'section___childContentfulSectionTextTextNode___childMdx___mdxAST'
  | 'section___childContentfulSectionTextTextNode___childMdx___tableOfContents'
  | 'section___childContentfulSectionTextTextNode___childMdx___timeToRead'
  | 'section___childContentfulSectionTextTextNode___childMdx___id'
  | 'section___childContentfulSectionTextTextNode___childMdx___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulLinkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLinkFilterListInput = {
  elemMatch?: Maybe<ContentfulLinkFilterInput>;
};

export type ContentfulLinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLinkEdge>;
  nodes: Array<ContentfulLink>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLinkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLinkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLinkSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLinkSysContentType>;
};

export type ContentfulLinkSysContentType = {
  sys?: Maybe<ContentfulLinkSysContentTypeSys>;
};

export type ContentfulLinkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLinkSysContentTypeSysFilterInput>;
};

export type ContentfulLinkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulLinkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLinkSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulLinkSysContentTypeFilterInput>;
};

export type ContentfulMediaCollection = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  carouselStyle?: Maybe<Scalars['String']>;
  medias?: Maybe<Array<Maybe<ContentfulAsset>>>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMediaCollectionSys>;
  node_locale?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  styleVariant?: Maybe<Scalars['String']>;
};


export type ContentfulMediaCollectionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMediaCollectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMediaCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMediaCollectionEdge>;
  nodes: Array<ContentfulMediaCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMediaCollectionGroupConnection>;
};


export type ContentfulMediaCollectionConnectionDistinctArgs = {
  field: ContentfulMediaCollectionFieldsEnum;
};


export type ContentfulMediaCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMediaCollectionFieldsEnum;
};

export type ContentfulMediaCollectionEdge = {
  next?: Maybe<ContentfulMediaCollection>;
  node: ContentfulMediaCollection;
  previous?: Maybe<ContentfulMediaCollection>;
};

export type ContentfulMediaCollectionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'carouselStyle'
  | 'medias'
  | 'medias___id'
  | 'medias___parent___id'
  | 'medias___parent___parent___id'
  | 'medias___parent___parent___children'
  | 'medias___parent___children'
  | 'medias___parent___children___id'
  | 'medias___parent___children___children'
  | 'medias___parent___internal___content'
  | 'medias___parent___internal___contentDigest'
  | 'medias___parent___internal___description'
  | 'medias___parent___internal___fieldOwners'
  | 'medias___parent___internal___ignoreType'
  | 'medias___parent___internal___mediaType'
  | 'medias___parent___internal___owner'
  | 'medias___parent___internal___type'
  | 'medias___children'
  | 'medias___children___id'
  | 'medias___children___parent___id'
  | 'medias___children___parent___children'
  | 'medias___children___children'
  | 'medias___children___children___id'
  | 'medias___children___children___children'
  | 'medias___children___internal___content'
  | 'medias___children___internal___contentDigest'
  | 'medias___children___internal___description'
  | 'medias___children___internal___fieldOwners'
  | 'medias___children___internal___ignoreType'
  | 'medias___children___internal___mediaType'
  | 'medias___children___internal___owner'
  | 'medias___children___internal___type'
  | 'medias___internal___content'
  | 'medias___internal___contentDigest'
  | 'medias___internal___description'
  | 'medias___internal___fieldOwners'
  | 'medias___internal___ignoreType'
  | 'medias___internal___mediaType'
  | 'medias___internal___owner'
  | 'medias___internal___type'
  | 'medias___contentful_id'
  | 'medias___spaceId'
  | 'medias___createdAt'
  | 'medias___updatedAt'
  | 'medias___file___url'
  | 'medias___file___details___size'
  | 'medias___file___fileName'
  | 'medias___file___contentType'
  | 'medias___title'
  | 'medias___description'
  | 'medias___node_locale'
  | 'medias___sys___type'
  | 'medias___sys___revision'
  | 'medias___fixed___base64'
  | 'medias___fixed___tracedSVG'
  | 'medias___fixed___aspectRatio'
  | 'medias___fixed___width'
  | 'medias___fixed___height'
  | 'medias___fixed___src'
  | 'medias___fixed___srcSet'
  | 'medias___fixed___srcWebp'
  | 'medias___fixed___srcSetWebp'
  | 'medias___resolutions___base64'
  | 'medias___resolutions___tracedSVG'
  | 'medias___resolutions___aspectRatio'
  | 'medias___resolutions___width'
  | 'medias___resolutions___height'
  | 'medias___resolutions___src'
  | 'medias___resolutions___srcSet'
  | 'medias___resolutions___srcWebp'
  | 'medias___resolutions___srcSetWebp'
  | 'medias___fluid___base64'
  | 'medias___fluid___tracedSVG'
  | 'medias___fluid___aspectRatio'
  | 'medias___fluid___src'
  | 'medias___fluid___srcSet'
  | 'medias___fluid___srcWebp'
  | 'medias___fluid___srcSetWebp'
  | 'medias___fluid___sizes'
  | 'medias___sizes___base64'
  | 'medias___sizes___tracedSVG'
  | 'medias___sizes___aspectRatio'
  | 'medias___sizes___src'
  | 'medias___sizes___srcSet'
  | 'medias___sizes___srcWebp'
  | 'medias___sizes___srcSetWebp'
  | 'medias___sizes___sizes'
  | 'medias___resize___base64'
  | 'medias___resize___tracedSVG'
  | 'medias___resize___src'
  | 'medias___resize___width'
  | 'medias___resize___height'
  | 'medias___resize___aspectRatio'
  | 'section'
  | 'section___id'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'section___name'
  | 'section___title'
  | 'section___subtitle'
  | 'section___type___id'
  | 'section___type___parent___id'
  | 'section___type___parent___children'
  | 'section___type___children'
  | 'section___type___children___id'
  | 'section___type___children___children'
  | 'section___type___internal___content'
  | 'section___type___internal___contentDigest'
  | 'section___type___internal___description'
  | 'section___type___internal___fieldOwners'
  | 'section___type___internal___ignoreType'
  | 'section___type___internal___mediaType'
  | 'section___type___internal___owner'
  | 'section___type___internal___type'
  | 'section___type___name'
  | 'section___type___type'
  | 'section___type___preview___id'
  | 'section___type___preview___children'
  | 'section___type___preview___contentful_id'
  | 'section___type___preview___spaceId'
  | 'section___type___preview___createdAt'
  | 'section___type___preview___updatedAt'
  | 'section___type___preview___title'
  | 'section___type___preview___description'
  | 'section___type___preview___node_locale'
  | 'section___type___spaceId'
  | 'section___type___contentful_id'
  | 'section___type___createdAt'
  | 'section___type___updatedAt'
  | 'section___type___sys___type'
  | 'section___type___sys___revision'
  | 'section___type___node_locale'
  | 'section___type___section'
  | 'section___type___section___id'
  | 'section___type___section___children'
  | 'section___type___section___name'
  | 'section___type___section___title'
  | 'section___type___section___subtitle'
  | 'section___type___section___page'
  | 'section___type___section___spaceId'
  | 'section___type___section___contentful_id'
  | 'section___type___section___createdAt'
  | 'section___type___section___updatedAt'
  | 'section___type___section___node_locale'
  | 'section___type___section___variant'
  | 'section___type___section___styleVariant'
  | 'section___type___section___announcements'
  | 'section___medias___id'
  | 'section___medias___parent___id'
  | 'section___medias___parent___children'
  | 'section___medias___children'
  | 'section___medias___children___id'
  | 'section___medias___children___children'
  | 'section___medias___internal___content'
  | 'section___medias___internal___contentDigest'
  | 'section___medias___internal___description'
  | 'section___medias___internal___fieldOwners'
  | 'section___medias___internal___ignoreType'
  | 'section___medias___internal___mediaType'
  | 'section___medias___internal___owner'
  | 'section___medias___internal___type'
  | 'section___medias___name'
  | 'section___medias___carouselStyle'
  | 'section___medias___medias'
  | 'section___medias___medias___id'
  | 'section___medias___medias___children'
  | 'section___medias___medias___contentful_id'
  | 'section___medias___medias___spaceId'
  | 'section___medias___medias___createdAt'
  | 'section___medias___medias___updatedAt'
  | 'section___medias___medias___title'
  | 'section___medias___medias___description'
  | 'section___medias___medias___node_locale'
  | 'section___medias___section'
  | 'section___medias___section___id'
  | 'section___medias___section___children'
  | 'section___medias___section___name'
  | 'section___medias___section___title'
  | 'section___medias___section___subtitle'
  | 'section___medias___section___page'
  | 'section___medias___section___spaceId'
  | 'section___medias___section___contentful_id'
  | 'section___medias___section___createdAt'
  | 'section___medias___section___updatedAt'
  | 'section___medias___section___node_locale'
  | 'section___medias___section___variant'
  | 'section___medias___section___styleVariant'
  | 'section___medias___section___announcements'
  | 'section___medias___spaceId'
  | 'section___medias___contentful_id'
  | 'section___medias___createdAt'
  | 'section___medias___updatedAt'
  | 'section___medias___sys___type'
  | 'section___medias___sys___revision'
  | 'section___medias___node_locale'
  | 'section___medias___size'
  | 'section___medias___variant'
  | 'section___medias___styleVariant'
  | 'section___page'
  | 'section___page___id'
  | 'section___page___parent___id'
  | 'section___page___parent___children'
  | 'section___page___children'
  | 'section___page___children___id'
  | 'section___page___children___children'
  | 'section___page___internal___content'
  | 'section___page___internal___contentDigest'
  | 'section___page___internal___description'
  | 'section___page___internal___fieldOwners'
  | 'section___page___internal___ignoreType'
  | 'section___page___internal___mediaType'
  | 'section___page___internal___owner'
  | 'section___page___internal___type'
  | 'section___page___name'
  | 'section___page___title'
  | 'section___page___slug'
  | 'section___page___type___id'
  | 'section___page___type___children'
  | 'section___page___type___name'
  | 'section___page___type___type'
  | 'section___page___type___page'
  | 'section___page___type___spaceId'
  | 'section___page___type___contentful_id'
  | 'section___page___type___createdAt'
  | 'section___page___type___updatedAt'
  | 'section___page___type___node_locale'
  | 'section___page___sections'
  | 'section___page___sections___id'
  | 'section___page___sections___children'
  | 'section___page___sections___name'
  | 'section___page___sections___title'
  | 'section___page___sections___subtitle'
  | 'section___page___sections___page'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___variant'
  | 'section___page___sections___styleVariant'
  | 'section___page___sections___announcements'
  | 'section___page___description___id'
  | 'section___page___description___children'
  | 'section___page___description___description'
  | 'section___page___spaceId'
  | 'section___page___contentful_id'
  | 'section___page___createdAt'
  | 'section___page___updatedAt'
  | 'section___page___sys___type'
  | 'section___page___sys___revision'
  | 'section___page___node_locale'
  | 'section___page___link'
  | 'section___page___link___id'
  | 'section___page___link___children'
  | 'section___page___link___type'
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___section'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___text___id'
  | 'section___text___parent___id'
  | 'section___text___parent___children'
  | 'section___text___children'
  | 'section___text___children___id'
  | 'section___text___children___children'
  | 'section___text___internal___content'
  | 'section___text___internal___contentDigest'
  | 'section___text___internal___description'
  | 'section___text___internal___fieldOwners'
  | 'section___text___internal___ignoreType'
  | 'section___text___internal___mediaType'
  | 'section___text___internal___owner'
  | 'section___text___internal___type'
  | 'section___text___text'
  | 'section___text___sys___type'
  | 'section___text___childMdx___rawBody'
  | 'section___text___childMdx___fileAbsolutePath'
  | 'section___text___childMdx___slug'
  | 'section___text___childMdx___body'
  | 'section___text___childMdx___excerpt'
  | 'section___text___childMdx___headings'
  | 'section___text___childMdx___html'
  | 'section___text___childMdx___mdxAST'
  | 'section___text___childMdx___tableOfContents'
  | 'section___text___childMdx___timeToRead'
  | 'section___text___childMdx___id'
  | 'section___text___childMdx___children'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
  | 'section___styleVariant'
  | 'section___announcements'
  | 'section___announcements___id'
  | 'section___announcements___parent___id'
  | 'section___announcements___parent___children'
  | 'section___announcements___children'
  | 'section___announcements___children___id'
  | 'section___announcements___children___children'
  | 'section___announcements___internal___content'
  | 'section___announcements___internal___contentDigest'
  | 'section___announcements___internal___description'
  | 'section___announcements___internal___fieldOwners'
  | 'section___announcements___internal___ignoreType'
  | 'section___announcements___internal___mediaType'
  | 'section___announcements___internal___owner'
  | 'section___announcements___internal___type'
  | 'section___announcements___name'
  | 'section___announcements___type'
  | 'section___announcements___title'
  | 'section___announcements___section'
  | 'section___announcements___section___id'
  | 'section___announcements___section___children'
  | 'section___announcements___section___name'
  | 'section___announcements___section___title'
  | 'section___announcements___section___subtitle'
  | 'section___announcements___section___page'
  | 'section___announcements___section___spaceId'
  | 'section___announcements___section___contentful_id'
  | 'section___announcements___section___createdAt'
  | 'section___announcements___section___updatedAt'
  | 'section___announcements___section___node_locale'
  | 'section___announcements___section___variant'
  | 'section___announcements___section___styleVariant'
  | 'section___announcements___section___announcements'
  | 'section___announcements___message___id'
  | 'section___announcements___message___children'
  | 'section___announcements___message___message'
  | 'section___announcements___spaceId'
  | 'section___announcements___contentful_id'
  | 'section___announcements___createdAt'
  | 'section___announcements___updatedAt'
  | 'section___announcements___sys___type'
  | 'section___announcements___sys___revision'
  | 'section___announcements___node_locale'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___id'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___children'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___message'
  | 'section___link___id'
  | 'section___link___parent___id'
  | 'section___link___parent___children'
  | 'section___link___children'
  | 'section___link___children___id'
  | 'section___link___children___children'
  | 'section___link___internal___content'
  | 'section___link___internal___contentDigest'
  | 'section___link___internal___description'
  | 'section___link___internal___fieldOwners'
  | 'section___link___internal___ignoreType'
  | 'section___link___internal___mediaType'
  | 'section___link___internal___owner'
  | 'section___link___internal___type'
  | 'section___link___type'
  | 'section___link___name'
  | 'section___link___label'
  | 'section___link___page___id'
  | 'section___link___page___children'
  | 'section___link___page___name'
  | 'section___link___page___title'
  | 'section___link___page___slug'
  | 'section___link___page___sections'
  | 'section___link___page___spaceId'
  | 'section___link___page___contentful_id'
  | 'section___link___page___createdAt'
  | 'section___link___page___updatedAt'
  | 'section___link___page___node_locale'
  | 'section___link___page___link'
  | 'section___link___section'
  | 'section___link___section___id'
  | 'section___link___section___children'
  | 'section___link___section___name'
  | 'section___link___section___title'
  | 'section___link___section___subtitle'
  | 'section___link___section___page'
  | 'section___link___section___spaceId'
  | 'section___link___section___contentful_id'
  | 'section___link___section___createdAt'
  | 'section___link___section___updatedAt'
  | 'section___link___section___node_locale'
  | 'section___link___section___variant'
  | 'section___link___section___styleVariant'
  | 'section___link___section___announcements'
  | 'section___link___spaceId'
  | 'section___link___contentful_id'
  | 'section___link___createdAt'
  | 'section___link___updatedAt'
  | 'section___link___sys___type'
  | 'section___link___sys___revision'
  | 'section___link___node_locale'
  | 'section___childContentfulSectionTextTextNode___id'
  | 'section___childContentfulSectionTextTextNode___parent___id'
  | 'section___childContentfulSectionTextTextNode___parent___children'
  | 'section___childContentfulSectionTextTextNode___children'
  | 'section___childContentfulSectionTextTextNode___children___id'
  | 'section___childContentfulSectionTextTextNode___children___children'
  | 'section___childContentfulSectionTextTextNode___internal___content'
  | 'section___childContentfulSectionTextTextNode___internal___contentDigest'
  | 'section___childContentfulSectionTextTextNode___internal___description'
  | 'section___childContentfulSectionTextTextNode___internal___fieldOwners'
  | 'section___childContentfulSectionTextTextNode___internal___ignoreType'
  | 'section___childContentfulSectionTextTextNode___internal___mediaType'
  | 'section___childContentfulSectionTextTextNode___internal___owner'
  | 'section___childContentfulSectionTextTextNode___internal___type'
  | 'section___childContentfulSectionTextTextNode___text'
  | 'section___childContentfulSectionTextTextNode___sys___type'
  | 'section___childContentfulSectionTextTextNode___childMdx___rawBody'
  | 'section___childContentfulSectionTextTextNode___childMdx___fileAbsolutePath'
  | 'section___childContentfulSectionTextTextNode___childMdx___slug'
  | 'section___childContentfulSectionTextTextNode___childMdx___body'
  | 'section___childContentfulSectionTextTextNode___childMdx___excerpt'
  | 'section___childContentfulSectionTextTextNode___childMdx___headings'
  | 'section___childContentfulSectionTextTextNode___childMdx___html'
  | 'section___childContentfulSectionTextTextNode___childMdx___mdxAST'
  | 'section___childContentfulSectionTextTextNode___childMdx___tableOfContents'
  | 'section___childContentfulSectionTextTextNode___childMdx___timeToRead'
  | 'section___childContentfulSectionTextTextNode___childMdx___id'
  | 'section___childContentfulSectionTextTextNode___childMdx___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'size'
  | 'variant'
  | 'styleVariant';

export type ContentfulMediaCollectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  carouselStyle?: Maybe<StringQueryOperatorInput>;
  medias?: Maybe<ContentfulAssetFilterListInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaCollectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  styleVariant?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMediaCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMediaCollectionEdge>;
  nodes: Array<ContentfulMediaCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMediaCollectionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMediaCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMediaCollectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMediaCollectionSysContentType>;
};

export type ContentfulMediaCollectionSysContentType = {
  sys?: Maybe<ContentfulMediaCollectionSysContentTypeSys>;
};

export type ContentfulMediaCollectionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMediaCollectionSysContentTypeSysFilterInput>;
};

export type ContentfulMediaCollectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMediaCollectionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMediaCollectionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMediaCollectionSysContentTypeFilterInput>;
};

export type ContentfulPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<ContentfulPageType>;
  sections?: Maybe<Array<Maybe<ContentfulSection>>>;
  description?: Maybe<ContentfulPageDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<ContentfulLink>>>;
  childContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNode>;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulPageDescriptionTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulPageDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPageDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageDescriptionTextNodeGroupConnection>;
};


export type ContentfulPageDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulPageDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulPageDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulPageDescriptionTextNode>;
  node: ContentfulPageDescriptionTextNode;
  previous?: Maybe<ContentfulPageDescriptionTextNode>;
};

export type ContentfulPageDescriptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'sys___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type ContentfulPageDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPageDescriptionTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulPageDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPageDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulPageDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'slug'
  | 'type___id'
  | 'type___parent___id'
  | 'type___parent___parent___id'
  | 'type___parent___parent___children'
  | 'type___parent___children'
  | 'type___parent___children___id'
  | 'type___parent___children___children'
  | 'type___parent___internal___content'
  | 'type___parent___internal___contentDigest'
  | 'type___parent___internal___description'
  | 'type___parent___internal___fieldOwners'
  | 'type___parent___internal___ignoreType'
  | 'type___parent___internal___mediaType'
  | 'type___parent___internal___owner'
  | 'type___parent___internal___type'
  | 'type___children'
  | 'type___children___id'
  | 'type___children___parent___id'
  | 'type___children___parent___children'
  | 'type___children___children'
  | 'type___children___children___id'
  | 'type___children___children___children'
  | 'type___children___internal___content'
  | 'type___children___internal___contentDigest'
  | 'type___children___internal___description'
  | 'type___children___internal___fieldOwners'
  | 'type___children___internal___ignoreType'
  | 'type___children___internal___mediaType'
  | 'type___children___internal___owner'
  | 'type___children___internal___type'
  | 'type___internal___content'
  | 'type___internal___contentDigest'
  | 'type___internal___description'
  | 'type___internal___fieldOwners'
  | 'type___internal___ignoreType'
  | 'type___internal___mediaType'
  | 'type___internal___owner'
  | 'type___internal___type'
  | 'type___name'
  | 'type___type'
  | 'type___preview___id'
  | 'type___preview___parent___id'
  | 'type___preview___parent___children'
  | 'type___preview___children'
  | 'type___preview___children___id'
  | 'type___preview___children___children'
  | 'type___preview___internal___content'
  | 'type___preview___internal___contentDigest'
  | 'type___preview___internal___description'
  | 'type___preview___internal___fieldOwners'
  | 'type___preview___internal___ignoreType'
  | 'type___preview___internal___mediaType'
  | 'type___preview___internal___owner'
  | 'type___preview___internal___type'
  | 'type___preview___contentful_id'
  | 'type___preview___spaceId'
  | 'type___preview___createdAt'
  | 'type___preview___updatedAt'
  | 'type___preview___file___url'
  | 'type___preview___file___fileName'
  | 'type___preview___file___contentType'
  | 'type___preview___title'
  | 'type___preview___description'
  | 'type___preview___node_locale'
  | 'type___preview___sys___type'
  | 'type___preview___sys___revision'
  | 'type___preview___fixed___base64'
  | 'type___preview___fixed___tracedSVG'
  | 'type___preview___fixed___aspectRatio'
  | 'type___preview___fixed___width'
  | 'type___preview___fixed___height'
  | 'type___preview___fixed___src'
  | 'type___preview___fixed___srcSet'
  | 'type___preview___fixed___srcWebp'
  | 'type___preview___fixed___srcSetWebp'
  | 'type___preview___resolutions___base64'
  | 'type___preview___resolutions___tracedSVG'
  | 'type___preview___resolutions___aspectRatio'
  | 'type___preview___resolutions___width'
  | 'type___preview___resolutions___height'
  | 'type___preview___resolutions___src'
  | 'type___preview___resolutions___srcSet'
  | 'type___preview___resolutions___srcWebp'
  | 'type___preview___resolutions___srcSetWebp'
  | 'type___preview___fluid___base64'
  | 'type___preview___fluid___tracedSVG'
  | 'type___preview___fluid___aspectRatio'
  | 'type___preview___fluid___src'
  | 'type___preview___fluid___srcSet'
  | 'type___preview___fluid___srcWebp'
  | 'type___preview___fluid___srcSetWebp'
  | 'type___preview___fluid___sizes'
  | 'type___preview___sizes___base64'
  | 'type___preview___sizes___tracedSVG'
  | 'type___preview___sizes___aspectRatio'
  | 'type___preview___sizes___src'
  | 'type___preview___sizes___srcSet'
  | 'type___preview___sizes___srcWebp'
  | 'type___preview___sizes___srcSetWebp'
  | 'type___preview___sizes___sizes'
  | 'type___preview___resize___base64'
  | 'type___preview___resize___tracedSVG'
  | 'type___preview___resize___src'
  | 'type___preview___resize___width'
  | 'type___preview___resize___height'
  | 'type___preview___resize___aspectRatio'
  | 'type___page'
  | 'type___page___id'
  | 'type___page___parent___id'
  | 'type___page___parent___children'
  | 'type___page___children'
  | 'type___page___children___id'
  | 'type___page___children___children'
  | 'type___page___internal___content'
  | 'type___page___internal___contentDigest'
  | 'type___page___internal___description'
  | 'type___page___internal___fieldOwners'
  | 'type___page___internal___ignoreType'
  | 'type___page___internal___mediaType'
  | 'type___page___internal___owner'
  | 'type___page___internal___type'
  | 'type___page___name'
  | 'type___page___title'
  | 'type___page___slug'
  | 'type___page___type___id'
  | 'type___page___type___children'
  | 'type___page___type___name'
  | 'type___page___type___type'
  | 'type___page___type___page'
  | 'type___page___type___spaceId'
  | 'type___page___type___contentful_id'
  | 'type___page___type___createdAt'
  | 'type___page___type___updatedAt'
  | 'type___page___type___node_locale'
  | 'type___page___sections'
  | 'type___page___sections___id'
  | 'type___page___sections___children'
  | 'type___page___sections___name'
  | 'type___page___sections___title'
  | 'type___page___sections___subtitle'
  | 'type___page___sections___page'
  | 'type___page___sections___spaceId'
  | 'type___page___sections___contentful_id'
  | 'type___page___sections___createdAt'
  | 'type___page___sections___updatedAt'
  | 'type___page___sections___node_locale'
  | 'type___page___sections___variant'
  | 'type___page___sections___styleVariant'
  | 'type___page___sections___announcements'
  | 'type___page___description___id'
  | 'type___page___description___children'
  | 'type___page___description___description'
  | 'type___page___spaceId'
  | 'type___page___contentful_id'
  | 'type___page___createdAt'
  | 'type___page___updatedAt'
  | 'type___page___sys___type'
  | 'type___page___sys___revision'
  | 'type___page___node_locale'
  | 'type___page___link'
  | 'type___page___link___id'
  | 'type___page___link___children'
  | 'type___page___link___type'
  | 'type___page___link___name'
  | 'type___page___link___label'
  | 'type___page___link___section'
  | 'type___page___link___spaceId'
  | 'type___page___link___contentful_id'
  | 'type___page___link___createdAt'
  | 'type___page___link___updatedAt'
  | 'type___page___link___node_locale'
  | 'type___page___childContentfulPageDescriptionTextNode___id'
  | 'type___page___childContentfulPageDescriptionTextNode___children'
  | 'type___page___childContentfulPageDescriptionTextNode___description'
  | 'type___spaceId'
  | 'type___contentful_id'
  | 'type___createdAt'
  | 'type___updatedAt'
  | 'type___sys___type'
  | 'type___sys___revision'
  | 'type___node_locale'
  | 'sections'
  | 'sections___id'
  | 'sections___parent___id'
  | 'sections___parent___parent___id'
  | 'sections___parent___parent___children'
  | 'sections___parent___children'
  | 'sections___parent___children___id'
  | 'sections___parent___children___children'
  | 'sections___parent___internal___content'
  | 'sections___parent___internal___contentDigest'
  | 'sections___parent___internal___description'
  | 'sections___parent___internal___fieldOwners'
  | 'sections___parent___internal___ignoreType'
  | 'sections___parent___internal___mediaType'
  | 'sections___parent___internal___owner'
  | 'sections___parent___internal___type'
  | 'sections___children'
  | 'sections___children___id'
  | 'sections___children___parent___id'
  | 'sections___children___parent___children'
  | 'sections___children___children'
  | 'sections___children___children___id'
  | 'sections___children___children___children'
  | 'sections___children___internal___content'
  | 'sections___children___internal___contentDigest'
  | 'sections___children___internal___description'
  | 'sections___children___internal___fieldOwners'
  | 'sections___children___internal___ignoreType'
  | 'sections___children___internal___mediaType'
  | 'sections___children___internal___owner'
  | 'sections___children___internal___type'
  | 'sections___internal___content'
  | 'sections___internal___contentDigest'
  | 'sections___internal___description'
  | 'sections___internal___fieldOwners'
  | 'sections___internal___ignoreType'
  | 'sections___internal___mediaType'
  | 'sections___internal___owner'
  | 'sections___internal___type'
  | 'sections___name'
  | 'sections___title'
  | 'sections___subtitle'
  | 'sections___type___id'
  | 'sections___type___parent___id'
  | 'sections___type___parent___children'
  | 'sections___type___children'
  | 'sections___type___children___id'
  | 'sections___type___children___children'
  | 'sections___type___internal___content'
  | 'sections___type___internal___contentDigest'
  | 'sections___type___internal___description'
  | 'sections___type___internal___fieldOwners'
  | 'sections___type___internal___ignoreType'
  | 'sections___type___internal___mediaType'
  | 'sections___type___internal___owner'
  | 'sections___type___internal___type'
  | 'sections___type___name'
  | 'sections___type___type'
  | 'sections___type___preview___id'
  | 'sections___type___preview___children'
  | 'sections___type___preview___contentful_id'
  | 'sections___type___preview___spaceId'
  | 'sections___type___preview___createdAt'
  | 'sections___type___preview___updatedAt'
  | 'sections___type___preview___title'
  | 'sections___type___preview___description'
  | 'sections___type___preview___node_locale'
  | 'sections___type___spaceId'
  | 'sections___type___contentful_id'
  | 'sections___type___createdAt'
  | 'sections___type___updatedAt'
  | 'sections___type___sys___type'
  | 'sections___type___sys___revision'
  | 'sections___type___node_locale'
  | 'sections___type___section'
  | 'sections___type___section___id'
  | 'sections___type___section___children'
  | 'sections___type___section___name'
  | 'sections___type___section___title'
  | 'sections___type___section___subtitle'
  | 'sections___type___section___page'
  | 'sections___type___section___spaceId'
  | 'sections___type___section___contentful_id'
  | 'sections___type___section___createdAt'
  | 'sections___type___section___updatedAt'
  | 'sections___type___section___node_locale'
  | 'sections___type___section___variant'
  | 'sections___type___section___styleVariant'
  | 'sections___type___section___announcements'
  | 'sections___medias___id'
  | 'sections___medias___parent___id'
  | 'sections___medias___parent___children'
  | 'sections___medias___children'
  | 'sections___medias___children___id'
  | 'sections___medias___children___children'
  | 'sections___medias___internal___content'
  | 'sections___medias___internal___contentDigest'
  | 'sections___medias___internal___description'
  | 'sections___medias___internal___fieldOwners'
  | 'sections___medias___internal___ignoreType'
  | 'sections___medias___internal___mediaType'
  | 'sections___medias___internal___owner'
  | 'sections___medias___internal___type'
  | 'sections___medias___name'
  | 'sections___medias___carouselStyle'
  | 'sections___medias___medias'
  | 'sections___medias___medias___id'
  | 'sections___medias___medias___children'
  | 'sections___medias___medias___contentful_id'
  | 'sections___medias___medias___spaceId'
  | 'sections___medias___medias___createdAt'
  | 'sections___medias___medias___updatedAt'
  | 'sections___medias___medias___title'
  | 'sections___medias___medias___description'
  | 'sections___medias___medias___node_locale'
  | 'sections___medias___section'
  | 'sections___medias___section___id'
  | 'sections___medias___section___children'
  | 'sections___medias___section___name'
  | 'sections___medias___section___title'
  | 'sections___medias___section___subtitle'
  | 'sections___medias___section___page'
  | 'sections___medias___section___spaceId'
  | 'sections___medias___section___contentful_id'
  | 'sections___medias___section___createdAt'
  | 'sections___medias___section___updatedAt'
  | 'sections___medias___section___node_locale'
  | 'sections___medias___section___variant'
  | 'sections___medias___section___styleVariant'
  | 'sections___medias___section___announcements'
  | 'sections___medias___spaceId'
  | 'sections___medias___contentful_id'
  | 'sections___medias___createdAt'
  | 'sections___medias___updatedAt'
  | 'sections___medias___sys___type'
  | 'sections___medias___sys___revision'
  | 'sections___medias___node_locale'
  | 'sections___medias___size'
  | 'sections___medias___variant'
  | 'sections___medias___styleVariant'
  | 'sections___page'
  | 'sections___page___id'
  | 'sections___page___parent___id'
  | 'sections___page___parent___children'
  | 'sections___page___children'
  | 'sections___page___children___id'
  | 'sections___page___children___children'
  | 'sections___page___internal___content'
  | 'sections___page___internal___contentDigest'
  | 'sections___page___internal___description'
  | 'sections___page___internal___fieldOwners'
  | 'sections___page___internal___ignoreType'
  | 'sections___page___internal___mediaType'
  | 'sections___page___internal___owner'
  | 'sections___page___internal___type'
  | 'sections___page___name'
  | 'sections___page___title'
  | 'sections___page___slug'
  | 'sections___page___type___id'
  | 'sections___page___type___children'
  | 'sections___page___type___name'
  | 'sections___page___type___type'
  | 'sections___page___type___page'
  | 'sections___page___type___spaceId'
  | 'sections___page___type___contentful_id'
  | 'sections___page___type___createdAt'
  | 'sections___page___type___updatedAt'
  | 'sections___page___type___node_locale'
  | 'sections___page___sections'
  | 'sections___page___sections___id'
  | 'sections___page___sections___children'
  | 'sections___page___sections___name'
  | 'sections___page___sections___title'
  | 'sections___page___sections___subtitle'
  | 'sections___page___sections___page'
  | 'sections___page___sections___spaceId'
  | 'sections___page___sections___contentful_id'
  | 'sections___page___sections___createdAt'
  | 'sections___page___sections___updatedAt'
  | 'sections___page___sections___node_locale'
  | 'sections___page___sections___variant'
  | 'sections___page___sections___styleVariant'
  | 'sections___page___sections___announcements'
  | 'sections___page___description___id'
  | 'sections___page___description___children'
  | 'sections___page___description___description'
  | 'sections___page___spaceId'
  | 'sections___page___contentful_id'
  | 'sections___page___createdAt'
  | 'sections___page___updatedAt'
  | 'sections___page___sys___type'
  | 'sections___page___sys___revision'
  | 'sections___page___node_locale'
  | 'sections___page___link'
  | 'sections___page___link___id'
  | 'sections___page___link___children'
  | 'sections___page___link___type'
  | 'sections___page___link___name'
  | 'sections___page___link___label'
  | 'sections___page___link___section'
  | 'sections___page___link___spaceId'
  | 'sections___page___link___contentful_id'
  | 'sections___page___link___createdAt'
  | 'sections___page___link___updatedAt'
  | 'sections___page___link___node_locale'
  | 'sections___page___childContentfulPageDescriptionTextNode___id'
  | 'sections___page___childContentfulPageDescriptionTextNode___children'
  | 'sections___page___childContentfulPageDescriptionTextNode___description'
  | 'sections___text___id'
  | 'sections___text___parent___id'
  | 'sections___text___parent___children'
  | 'sections___text___children'
  | 'sections___text___children___id'
  | 'sections___text___children___children'
  | 'sections___text___internal___content'
  | 'sections___text___internal___contentDigest'
  | 'sections___text___internal___description'
  | 'sections___text___internal___fieldOwners'
  | 'sections___text___internal___ignoreType'
  | 'sections___text___internal___mediaType'
  | 'sections___text___internal___owner'
  | 'sections___text___internal___type'
  | 'sections___text___text'
  | 'sections___text___sys___type'
  | 'sections___text___childMdx___rawBody'
  | 'sections___text___childMdx___fileAbsolutePath'
  | 'sections___text___childMdx___slug'
  | 'sections___text___childMdx___body'
  | 'sections___text___childMdx___excerpt'
  | 'sections___text___childMdx___headings'
  | 'sections___text___childMdx___html'
  | 'sections___text___childMdx___mdxAST'
  | 'sections___text___childMdx___tableOfContents'
  | 'sections___text___childMdx___timeToRead'
  | 'sections___text___childMdx___id'
  | 'sections___text___childMdx___children'
  | 'sections___spaceId'
  | 'sections___contentful_id'
  | 'sections___createdAt'
  | 'sections___updatedAt'
  | 'sections___sys___type'
  | 'sections___sys___revision'
  | 'sections___node_locale'
  | 'sections___variant'
  | 'sections___styleVariant'
  | 'sections___announcements'
  | 'sections___announcements___id'
  | 'sections___announcements___parent___id'
  | 'sections___announcements___parent___children'
  | 'sections___announcements___children'
  | 'sections___announcements___children___id'
  | 'sections___announcements___children___children'
  | 'sections___announcements___internal___content'
  | 'sections___announcements___internal___contentDigest'
  | 'sections___announcements___internal___description'
  | 'sections___announcements___internal___fieldOwners'
  | 'sections___announcements___internal___ignoreType'
  | 'sections___announcements___internal___mediaType'
  | 'sections___announcements___internal___owner'
  | 'sections___announcements___internal___type'
  | 'sections___announcements___name'
  | 'sections___announcements___type'
  | 'sections___announcements___title'
  | 'sections___announcements___section'
  | 'sections___announcements___section___id'
  | 'sections___announcements___section___children'
  | 'sections___announcements___section___name'
  | 'sections___announcements___section___title'
  | 'sections___announcements___section___subtitle'
  | 'sections___announcements___section___page'
  | 'sections___announcements___section___spaceId'
  | 'sections___announcements___section___contentful_id'
  | 'sections___announcements___section___createdAt'
  | 'sections___announcements___section___updatedAt'
  | 'sections___announcements___section___node_locale'
  | 'sections___announcements___section___variant'
  | 'sections___announcements___section___styleVariant'
  | 'sections___announcements___section___announcements'
  | 'sections___announcements___message___id'
  | 'sections___announcements___message___children'
  | 'sections___announcements___message___message'
  | 'sections___announcements___spaceId'
  | 'sections___announcements___contentful_id'
  | 'sections___announcements___createdAt'
  | 'sections___announcements___updatedAt'
  | 'sections___announcements___sys___type'
  | 'sections___announcements___sys___revision'
  | 'sections___announcements___node_locale'
  | 'sections___announcements___childContentfulAnnouncementMessageTextNode___id'
  | 'sections___announcements___childContentfulAnnouncementMessageTextNode___children'
  | 'sections___announcements___childContentfulAnnouncementMessageTextNode___message'
  | 'sections___link___id'
  | 'sections___link___parent___id'
  | 'sections___link___parent___children'
  | 'sections___link___children'
  | 'sections___link___children___id'
  | 'sections___link___children___children'
  | 'sections___link___internal___content'
  | 'sections___link___internal___contentDigest'
  | 'sections___link___internal___description'
  | 'sections___link___internal___fieldOwners'
  | 'sections___link___internal___ignoreType'
  | 'sections___link___internal___mediaType'
  | 'sections___link___internal___owner'
  | 'sections___link___internal___type'
  | 'sections___link___type'
  | 'sections___link___name'
  | 'sections___link___label'
  | 'sections___link___page___id'
  | 'sections___link___page___children'
  | 'sections___link___page___name'
  | 'sections___link___page___title'
  | 'sections___link___page___slug'
  | 'sections___link___page___sections'
  | 'sections___link___page___spaceId'
  | 'sections___link___page___contentful_id'
  | 'sections___link___page___createdAt'
  | 'sections___link___page___updatedAt'
  | 'sections___link___page___node_locale'
  | 'sections___link___page___link'
  | 'sections___link___section'
  | 'sections___link___section___id'
  | 'sections___link___section___children'
  | 'sections___link___section___name'
  | 'sections___link___section___title'
  | 'sections___link___section___subtitle'
  | 'sections___link___section___page'
  | 'sections___link___section___spaceId'
  | 'sections___link___section___contentful_id'
  | 'sections___link___section___createdAt'
  | 'sections___link___section___updatedAt'
  | 'sections___link___section___node_locale'
  | 'sections___link___section___variant'
  | 'sections___link___section___styleVariant'
  | 'sections___link___section___announcements'
  | 'sections___link___spaceId'
  | 'sections___link___contentful_id'
  | 'sections___link___createdAt'
  | 'sections___link___updatedAt'
  | 'sections___link___sys___type'
  | 'sections___link___sys___revision'
  | 'sections___link___node_locale'
  | 'sections___childContentfulSectionTextTextNode___id'
  | 'sections___childContentfulSectionTextTextNode___parent___id'
  | 'sections___childContentfulSectionTextTextNode___parent___children'
  | 'sections___childContentfulSectionTextTextNode___children'
  | 'sections___childContentfulSectionTextTextNode___children___id'
  | 'sections___childContentfulSectionTextTextNode___children___children'
  | 'sections___childContentfulSectionTextTextNode___internal___content'
  | 'sections___childContentfulSectionTextTextNode___internal___contentDigest'
  | 'sections___childContentfulSectionTextTextNode___internal___description'
  | 'sections___childContentfulSectionTextTextNode___internal___fieldOwners'
  | 'sections___childContentfulSectionTextTextNode___internal___ignoreType'
  | 'sections___childContentfulSectionTextTextNode___internal___mediaType'
  | 'sections___childContentfulSectionTextTextNode___internal___owner'
  | 'sections___childContentfulSectionTextTextNode___internal___type'
  | 'sections___childContentfulSectionTextTextNode___text'
  | 'sections___childContentfulSectionTextTextNode___sys___type'
  | 'sections___childContentfulSectionTextTextNode___childMdx___rawBody'
  | 'sections___childContentfulSectionTextTextNode___childMdx___fileAbsolutePath'
  | 'sections___childContentfulSectionTextTextNode___childMdx___slug'
  | 'sections___childContentfulSectionTextTextNode___childMdx___body'
  | 'sections___childContentfulSectionTextTextNode___childMdx___excerpt'
  | 'sections___childContentfulSectionTextTextNode___childMdx___headings'
  | 'sections___childContentfulSectionTextTextNode___childMdx___html'
  | 'sections___childContentfulSectionTextTextNode___childMdx___mdxAST'
  | 'sections___childContentfulSectionTextTextNode___childMdx___tableOfContents'
  | 'sections___childContentfulSectionTextTextNode___childMdx___timeToRead'
  | 'sections___childContentfulSectionTextTextNode___childMdx___id'
  | 'sections___childContentfulSectionTextTextNode___childMdx___children'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'description___sys___type'
  | 'description___childMdx___rawBody'
  | 'description___childMdx___fileAbsolutePath'
  | 'description___childMdx___frontmatter___title'
  | 'description___childMdx___frontmatter___name'
  | 'description___childMdx___frontmatter___tags'
  | 'description___childMdx___slug'
  | 'description___childMdx___body'
  | 'description___childMdx___excerpt'
  | 'description___childMdx___headings'
  | 'description___childMdx___headings___value'
  | 'description___childMdx___headings___depth'
  | 'description___childMdx___html'
  | 'description___childMdx___mdxAST'
  | 'description___childMdx___tableOfContents'
  | 'description___childMdx___timeToRead'
  | 'description___childMdx___wordCount___paragraphs'
  | 'description___childMdx___wordCount___sentences'
  | 'description___childMdx___wordCount___words'
  | 'description___childMdx___id'
  | 'description___childMdx___parent___id'
  | 'description___childMdx___parent___children'
  | 'description___childMdx___children'
  | 'description___childMdx___children___id'
  | 'description___childMdx___children___children'
  | 'description___childMdx___internal___content'
  | 'description___childMdx___internal___contentDigest'
  | 'description___childMdx___internal___description'
  | 'description___childMdx___internal___fieldOwners'
  | 'description___childMdx___internal___ignoreType'
  | 'description___childMdx___internal___mediaType'
  | 'description___childMdx___internal___owner'
  | 'description___childMdx___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'link'
  | 'link___id'
  | 'link___parent___id'
  | 'link___parent___parent___id'
  | 'link___parent___parent___children'
  | 'link___parent___children'
  | 'link___parent___children___id'
  | 'link___parent___children___children'
  | 'link___parent___internal___content'
  | 'link___parent___internal___contentDigest'
  | 'link___parent___internal___description'
  | 'link___parent___internal___fieldOwners'
  | 'link___parent___internal___ignoreType'
  | 'link___parent___internal___mediaType'
  | 'link___parent___internal___owner'
  | 'link___parent___internal___type'
  | 'link___children'
  | 'link___children___id'
  | 'link___children___parent___id'
  | 'link___children___parent___children'
  | 'link___children___children'
  | 'link___children___children___id'
  | 'link___children___children___children'
  | 'link___children___internal___content'
  | 'link___children___internal___contentDigest'
  | 'link___children___internal___description'
  | 'link___children___internal___fieldOwners'
  | 'link___children___internal___ignoreType'
  | 'link___children___internal___mediaType'
  | 'link___children___internal___owner'
  | 'link___children___internal___type'
  | 'link___internal___content'
  | 'link___internal___contentDigest'
  | 'link___internal___description'
  | 'link___internal___fieldOwners'
  | 'link___internal___ignoreType'
  | 'link___internal___mediaType'
  | 'link___internal___owner'
  | 'link___internal___type'
  | 'link___type'
  | 'link___name'
  | 'link___label'
  | 'link___page___id'
  | 'link___page___parent___id'
  | 'link___page___parent___children'
  | 'link___page___children'
  | 'link___page___children___id'
  | 'link___page___children___children'
  | 'link___page___internal___content'
  | 'link___page___internal___contentDigest'
  | 'link___page___internal___description'
  | 'link___page___internal___fieldOwners'
  | 'link___page___internal___ignoreType'
  | 'link___page___internal___mediaType'
  | 'link___page___internal___owner'
  | 'link___page___internal___type'
  | 'link___page___name'
  | 'link___page___title'
  | 'link___page___slug'
  | 'link___page___type___id'
  | 'link___page___type___children'
  | 'link___page___type___name'
  | 'link___page___type___type'
  | 'link___page___type___page'
  | 'link___page___type___spaceId'
  | 'link___page___type___contentful_id'
  | 'link___page___type___createdAt'
  | 'link___page___type___updatedAt'
  | 'link___page___type___node_locale'
  | 'link___page___sections'
  | 'link___page___sections___id'
  | 'link___page___sections___children'
  | 'link___page___sections___name'
  | 'link___page___sections___title'
  | 'link___page___sections___subtitle'
  | 'link___page___sections___page'
  | 'link___page___sections___spaceId'
  | 'link___page___sections___contentful_id'
  | 'link___page___sections___createdAt'
  | 'link___page___sections___updatedAt'
  | 'link___page___sections___node_locale'
  | 'link___page___sections___variant'
  | 'link___page___sections___styleVariant'
  | 'link___page___sections___announcements'
  | 'link___page___description___id'
  | 'link___page___description___children'
  | 'link___page___description___description'
  | 'link___page___spaceId'
  | 'link___page___contentful_id'
  | 'link___page___createdAt'
  | 'link___page___updatedAt'
  | 'link___page___sys___type'
  | 'link___page___sys___revision'
  | 'link___page___node_locale'
  | 'link___page___link'
  | 'link___page___link___id'
  | 'link___page___link___children'
  | 'link___page___link___type'
  | 'link___page___link___name'
  | 'link___page___link___label'
  | 'link___page___link___section'
  | 'link___page___link___spaceId'
  | 'link___page___link___contentful_id'
  | 'link___page___link___createdAt'
  | 'link___page___link___updatedAt'
  | 'link___page___link___node_locale'
  | 'link___page___childContentfulPageDescriptionTextNode___id'
  | 'link___page___childContentfulPageDescriptionTextNode___children'
  | 'link___page___childContentfulPageDescriptionTextNode___description'
  | 'link___section'
  | 'link___section___id'
  | 'link___section___parent___id'
  | 'link___section___parent___children'
  | 'link___section___children'
  | 'link___section___children___id'
  | 'link___section___children___children'
  | 'link___section___internal___content'
  | 'link___section___internal___contentDigest'
  | 'link___section___internal___description'
  | 'link___section___internal___fieldOwners'
  | 'link___section___internal___ignoreType'
  | 'link___section___internal___mediaType'
  | 'link___section___internal___owner'
  | 'link___section___internal___type'
  | 'link___section___name'
  | 'link___section___title'
  | 'link___section___subtitle'
  | 'link___section___type___id'
  | 'link___section___type___children'
  | 'link___section___type___name'
  | 'link___section___type___type'
  | 'link___section___type___spaceId'
  | 'link___section___type___contentful_id'
  | 'link___section___type___createdAt'
  | 'link___section___type___updatedAt'
  | 'link___section___type___node_locale'
  | 'link___section___type___section'
  | 'link___section___medias___id'
  | 'link___section___medias___children'
  | 'link___section___medias___name'
  | 'link___section___medias___carouselStyle'
  | 'link___section___medias___medias'
  | 'link___section___medias___section'
  | 'link___section___medias___spaceId'
  | 'link___section___medias___contentful_id'
  | 'link___section___medias___createdAt'
  | 'link___section___medias___updatedAt'
  | 'link___section___medias___node_locale'
  | 'link___section___medias___size'
  | 'link___section___medias___variant'
  | 'link___section___medias___styleVariant'
  | 'link___section___page'
  | 'link___section___page___id'
  | 'link___section___page___children'
  | 'link___section___page___name'
  | 'link___section___page___title'
  | 'link___section___page___slug'
  | 'link___section___page___sections'
  | 'link___section___page___spaceId'
  | 'link___section___page___contentful_id'
  | 'link___section___page___createdAt'
  | 'link___section___page___updatedAt'
  | 'link___section___page___node_locale'
  | 'link___section___page___link'
  | 'link___section___text___id'
  | 'link___section___text___children'
  | 'link___section___text___text'
  | 'link___section___spaceId'
  | 'link___section___contentful_id'
  | 'link___section___createdAt'
  | 'link___section___updatedAt'
  | 'link___section___sys___type'
  | 'link___section___sys___revision'
  | 'link___section___node_locale'
  | 'link___section___variant'
  | 'link___section___styleVariant'
  | 'link___section___announcements'
  | 'link___section___announcements___id'
  | 'link___section___announcements___children'
  | 'link___section___announcements___name'
  | 'link___section___announcements___type'
  | 'link___section___announcements___title'
  | 'link___section___announcements___section'
  | 'link___section___announcements___spaceId'
  | 'link___section___announcements___contentful_id'
  | 'link___section___announcements___createdAt'
  | 'link___section___announcements___updatedAt'
  | 'link___section___announcements___node_locale'
  | 'link___section___link___id'
  | 'link___section___link___children'
  | 'link___section___link___type'
  | 'link___section___link___name'
  | 'link___section___link___label'
  | 'link___section___link___section'
  | 'link___section___link___spaceId'
  | 'link___section___link___contentful_id'
  | 'link___section___link___createdAt'
  | 'link___section___link___updatedAt'
  | 'link___section___link___node_locale'
  | 'link___section___childContentfulSectionTextTextNode___id'
  | 'link___section___childContentfulSectionTextTextNode___children'
  | 'link___section___childContentfulSectionTextTextNode___text'
  | 'link___spaceId'
  | 'link___contentful_id'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___node_locale'
  | 'childContentfulPageDescriptionTextNode___id'
  | 'childContentfulPageDescriptionTextNode___parent___id'
  | 'childContentfulPageDescriptionTextNode___parent___parent___id'
  | 'childContentfulPageDescriptionTextNode___parent___parent___children'
  | 'childContentfulPageDescriptionTextNode___parent___children'
  | 'childContentfulPageDescriptionTextNode___parent___children___id'
  | 'childContentfulPageDescriptionTextNode___parent___children___children'
  | 'childContentfulPageDescriptionTextNode___parent___internal___content'
  | 'childContentfulPageDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulPageDescriptionTextNode___parent___internal___description'
  | 'childContentfulPageDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulPageDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulPageDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulPageDescriptionTextNode___parent___internal___owner'
  | 'childContentfulPageDescriptionTextNode___parent___internal___type'
  | 'childContentfulPageDescriptionTextNode___children'
  | 'childContentfulPageDescriptionTextNode___children___id'
  | 'childContentfulPageDescriptionTextNode___children___parent___id'
  | 'childContentfulPageDescriptionTextNode___children___parent___children'
  | 'childContentfulPageDescriptionTextNode___children___children'
  | 'childContentfulPageDescriptionTextNode___children___children___id'
  | 'childContentfulPageDescriptionTextNode___children___children___children'
  | 'childContentfulPageDescriptionTextNode___children___internal___content'
  | 'childContentfulPageDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulPageDescriptionTextNode___children___internal___description'
  | 'childContentfulPageDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulPageDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulPageDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulPageDescriptionTextNode___children___internal___owner'
  | 'childContentfulPageDescriptionTextNode___children___internal___type'
  | 'childContentfulPageDescriptionTextNode___internal___content'
  | 'childContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'childContentfulPageDescriptionTextNode___internal___description'
  | 'childContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'childContentfulPageDescriptionTextNode___internal___mediaType'
  | 'childContentfulPageDescriptionTextNode___internal___owner'
  | 'childContentfulPageDescriptionTextNode___internal___type'
  | 'childContentfulPageDescriptionTextNode___description'
  | 'childContentfulPageDescriptionTextNode___sys___type'
  | 'childContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___title'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___name'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___tags'
  | 'childContentfulPageDescriptionTextNode___childMdx___slug'
  | 'childContentfulPageDescriptionTextNode___childMdx___body'
  | 'childContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'childContentfulPageDescriptionTextNode___childMdx___headings'
  | 'childContentfulPageDescriptionTextNode___childMdx___headings___value'
  | 'childContentfulPageDescriptionTextNode___childMdx___headings___depth'
  | 'childContentfulPageDescriptionTextNode___childMdx___html'
  | 'childContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'childContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'childContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'childContentfulPageDescriptionTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulPageDescriptionTextNode___childMdx___wordCount___sentences'
  | 'childContentfulPageDescriptionTextNode___childMdx___wordCount___words'
  | 'childContentfulPageDescriptionTextNode___childMdx___id'
  | 'childContentfulPageDescriptionTextNode___childMdx___parent___id'
  | 'childContentfulPageDescriptionTextNode___childMdx___parent___children'
  | 'childContentfulPageDescriptionTextNode___childMdx___children'
  | 'childContentfulPageDescriptionTextNode___childMdx___children___id'
  | 'childContentfulPageDescriptionTextNode___childMdx___children___children'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___content'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___contentDigest'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___description'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___ignoreType'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___mediaType'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___owner'
  | 'childContentfulPageDescriptionTextNode___childMdx___internal___type';

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<ContentfulPageTypeFilterInput>;
  sections?: Maybe<ContentfulSectionFilterListInput>;
  description?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<ContentfulLinkFilterListInput>;
  childContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPageType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  preview?: Maybe<ContentfulAsset>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageTypeSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageTypeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageTypeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageTypeEdge>;
  nodes: Array<ContentfulPageType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageTypeGroupConnection>;
};


export type ContentfulPageTypeConnectionDistinctArgs = {
  field: ContentfulPageTypeFieldsEnum;
};


export type ContentfulPageTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageTypeFieldsEnum;
};

export type ContentfulPageTypeEdge = {
  next?: Maybe<ContentfulPageType>;
  node: ContentfulPageType;
  previous?: Maybe<ContentfulPageType>;
};

export type ContentfulPageTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'type'
  | 'preview___id'
  | 'preview___parent___id'
  | 'preview___parent___parent___id'
  | 'preview___parent___parent___children'
  | 'preview___parent___children'
  | 'preview___parent___children___id'
  | 'preview___parent___children___children'
  | 'preview___parent___internal___content'
  | 'preview___parent___internal___contentDigest'
  | 'preview___parent___internal___description'
  | 'preview___parent___internal___fieldOwners'
  | 'preview___parent___internal___ignoreType'
  | 'preview___parent___internal___mediaType'
  | 'preview___parent___internal___owner'
  | 'preview___parent___internal___type'
  | 'preview___children'
  | 'preview___children___id'
  | 'preview___children___parent___id'
  | 'preview___children___parent___children'
  | 'preview___children___children'
  | 'preview___children___children___id'
  | 'preview___children___children___children'
  | 'preview___children___internal___content'
  | 'preview___children___internal___contentDigest'
  | 'preview___children___internal___description'
  | 'preview___children___internal___fieldOwners'
  | 'preview___children___internal___ignoreType'
  | 'preview___children___internal___mediaType'
  | 'preview___children___internal___owner'
  | 'preview___children___internal___type'
  | 'preview___internal___content'
  | 'preview___internal___contentDigest'
  | 'preview___internal___description'
  | 'preview___internal___fieldOwners'
  | 'preview___internal___ignoreType'
  | 'preview___internal___mediaType'
  | 'preview___internal___owner'
  | 'preview___internal___type'
  | 'preview___contentful_id'
  | 'preview___spaceId'
  | 'preview___createdAt'
  | 'preview___updatedAt'
  | 'preview___file___url'
  | 'preview___file___details___size'
  | 'preview___file___fileName'
  | 'preview___file___contentType'
  | 'preview___title'
  | 'preview___description'
  | 'preview___node_locale'
  | 'preview___sys___type'
  | 'preview___sys___revision'
  | 'preview___fixed___base64'
  | 'preview___fixed___tracedSVG'
  | 'preview___fixed___aspectRatio'
  | 'preview___fixed___width'
  | 'preview___fixed___height'
  | 'preview___fixed___src'
  | 'preview___fixed___srcSet'
  | 'preview___fixed___srcWebp'
  | 'preview___fixed___srcSetWebp'
  | 'preview___resolutions___base64'
  | 'preview___resolutions___tracedSVG'
  | 'preview___resolutions___aspectRatio'
  | 'preview___resolutions___width'
  | 'preview___resolutions___height'
  | 'preview___resolutions___src'
  | 'preview___resolutions___srcSet'
  | 'preview___resolutions___srcWebp'
  | 'preview___resolutions___srcSetWebp'
  | 'preview___fluid___base64'
  | 'preview___fluid___tracedSVG'
  | 'preview___fluid___aspectRatio'
  | 'preview___fluid___src'
  | 'preview___fluid___srcSet'
  | 'preview___fluid___srcWebp'
  | 'preview___fluid___srcSetWebp'
  | 'preview___fluid___sizes'
  | 'preview___sizes___base64'
  | 'preview___sizes___tracedSVG'
  | 'preview___sizes___aspectRatio'
  | 'preview___sizes___src'
  | 'preview___sizes___srcSet'
  | 'preview___sizes___srcWebp'
  | 'preview___sizes___srcSetWebp'
  | 'preview___sizes___sizes'
  | 'preview___resize___base64'
  | 'preview___resize___tracedSVG'
  | 'preview___resize___src'
  | 'preview___resize___width'
  | 'preview___resize___height'
  | 'preview___resize___aspectRatio'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___name'
  | 'page___title'
  | 'page___slug'
  | 'page___type___id'
  | 'page___type___parent___id'
  | 'page___type___parent___children'
  | 'page___type___children'
  | 'page___type___children___id'
  | 'page___type___children___children'
  | 'page___type___internal___content'
  | 'page___type___internal___contentDigest'
  | 'page___type___internal___description'
  | 'page___type___internal___fieldOwners'
  | 'page___type___internal___ignoreType'
  | 'page___type___internal___mediaType'
  | 'page___type___internal___owner'
  | 'page___type___internal___type'
  | 'page___type___name'
  | 'page___type___type'
  | 'page___type___preview___id'
  | 'page___type___preview___children'
  | 'page___type___preview___contentful_id'
  | 'page___type___preview___spaceId'
  | 'page___type___preview___createdAt'
  | 'page___type___preview___updatedAt'
  | 'page___type___preview___title'
  | 'page___type___preview___description'
  | 'page___type___preview___node_locale'
  | 'page___type___page'
  | 'page___type___page___id'
  | 'page___type___page___children'
  | 'page___type___page___name'
  | 'page___type___page___title'
  | 'page___type___page___slug'
  | 'page___type___page___sections'
  | 'page___type___page___spaceId'
  | 'page___type___page___contentful_id'
  | 'page___type___page___createdAt'
  | 'page___type___page___updatedAt'
  | 'page___type___page___node_locale'
  | 'page___type___page___link'
  | 'page___type___spaceId'
  | 'page___type___contentful_id'
  | 'page___type___createdAt'
  | 'page___type___updatedAt'
  | 'page___type___sys___type'
  | 'page___type___sys___revision'
  | 'page___type___node_locale'
  | 'page___sections'
  | 'page___sections___id'
  | 'page___sections___parent___id'
  | 'page___sections___parent___children'
  | 'page___sections___children'
  | 'page___sections___children___id'
  | 'page___sections___children___children'
  | 'page___sections___internal___content'
  | 'page___sections___internal___contentDigest'
  | 'page___sections___internal___description'
  | 'page___sections___internal___fieldOwners'
  | 'page___sections___internal___ignoreType'
  | 'page___sections___internal___mediaType'
  | 'page___sections___internal___owner'
  | 'page___sections___internal___type'
  | 'page___sections___name'
  | 'page___sections___title'
  | 'page___sections___subtitle'
  | 'page___sections___type___id'
  | 'page___sections___type___children'
  | 'page___sections___type___name'
  | 'page___sections___type___type'
  | 'page___sections___type___spaceId'
  | 'page___sections___type___contentful_id'
  | 'page___sections___type___createdAt'
  | 'page___sections___type___updatedAt'
  | 'page___sections___type___node_locale'
  | 'page___sections___type___section'
  | 'page___sections___medias___id'
  | 'page___sections___medias___children'
  | 'page___sections___medias___name'
  | 'page___sections___medias___carouselStyle'
  | 'page___sections___medias___medias'
  | 'page___sections___medias___section'
  | 'page___sections___medias___spaceId'
  | 'page___sections___medias___contentful_id'
  | 'page___sections___medias___createdAt'
  | 'page___sections___medias___updatedAt'
  | 'page___sections___medias___node_locale'
  | 'page___sections___medias___size'
  | 'page___sections___medias___variant'
  | 'page___sections___medias___styleVariant'
  | 'page___sections___page'
  | 'page___sections___page___id'
  | 'page___sections___page___children'
  | 'page___sections___page___name'
  | 'page___sections___page___title'
  | 'page___sections___page___slug'
  | 'page___sections___page___sections'
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___page___link'
  | 'page___sections___text___id'
  | 'page___sections___text___children'
  | 'page___sections___text___text'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
  | 'page___sections___styleVariant'
  | 'page___sections___announcements'
  | 'page___sections___announcements___id'
  | 'page___sections___announcements___children'
  | 'page___sections___announcements___name'
  | 'page___sections___announcements___type'
  | 'page___sections___announcements___title'
  | 'page___sections___announcements___section'
  | 'page___sections___announcements___spaceId'
  | 'page___sections___announcements___contentful_id'
  | 'page___sections___announcements___createdAt'
  | 'page___sections___announcements___updatedAt'
  | 'page___sections___announcements___node_locale'
  | 'page___sections___link___id'
  | 'page___sections___link___children'
  | 'page___sections___link___type'
  | 'page___sections___link___name'
  | 'page___sections___link___label'
  | 'page___sections___link___section'
  | 'page___sections___link___spaceId'
  | 'page___sections___link___contentful_id'
  | 'page___sections___link___createdAt'
  | 'page___sections___link___updatedAt'
  | 'page___sections___link___node_locale'
  | 'page___sections___childContentfulSectionTextTextNode___id'
  | 'page___sections___childContentfulSectionTextTextNode___children'
  | 'page___sections___childContentfulSectionTextTextNode___text'
  | 'page___description___id'
  | 'page___description___parent___id'
  | 'page___description___parent___children'
  | 'page___description___children'
  | 'page___description___children___id'
  | 'page___description___children___children'
  | 'page___description___internal___content'
  | 'page___description___internal___contentDigest'
  | 'page___description___internal___description'
  | 'page___description___internal___fieldOwners'
  | 'page___description___internal___ignoreType'
  | 'page___description___internal___mediaType'
  | 'page___description___internal___owner'
  | 'page___description___internal___type'
  | 'page___description___description'
  | 'page___description___sys___type'
  | 'page___description___childMdx___rawBody'
  | 'page___description___childMdx___fileAbsolutePath'
  | 'page___description___childMdx___slug'
  | 'page___description___childMdx___body'
  | 'page___description___childMdx___excerpt'
  | 'page___description___childMdx___headings'
  | 'page___description___childMdx___html'
  | 'page___description___childMdx___mdxAST'
  | 'page___description___childMdx___tableOfContents'
  | 'page___description___childMdx___timeToRead'
  | 'page___description___childMdx___id'
  | 'page___description___childMdx___children'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___type'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'page___link'
  | 'page___link___id'
  | 'page___link___parent___id'
  | 'page___link___parent___children'
  | 'page___link___children'
  | 'page___link___children___id'
  | 'page___link___children___children'
  | 'page___link___internal___content'
  | 'page___link___internal___contentDigest'
  | 'page___link___internal___description'
  | 'page___link___internal___fieldOwners'
  | 'page___link___internal___ignoreType'
  | 'page___link___internal___mediaType'
  | 'page___link___internal___owner'
  | 'page___link___internal___type'
  | 'page___link___type'
  | 'page___link___name'
  | 'page___link___label'
  | 'page___link___page___id'
  | 'page___link___page___children'
  | 'page___link___page___name'
  | 'page___link___page___title'
  | 'page___link___page___slug'
  | 'page___link___page___sections'
  | 'page___link___page___spaceId'
  | 'page___link___page___contentful_id'
  | 'page___link___page___createdAt'
  | 'page___link___page___updatedAt'
  | 'page___link___page___node_locale'
  | 'page___link___page___link'
  | 'page___link___section'
  | 'page___link___section___id'
  | 'page___link___section___children'
  | 'page___link___section___name'
  | 'page___link___section___title'
  | 'page___link___section___subtitle'
  | 'page___link___section___page'
  | 'page___link___section___spaceId'
  | 'page___link___section___contentful_id'
  | 'page___link___section___createdAt'
  | 'page___link___section___updatedAt'
  | 'page___link___section___node_locale'
  | 'page___link___section___variant'
  | 'page___link___section___styleVariant'
  | 'page___link___section___announcements'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___childContentfulPageDescriptionTextNode___id'
  | 'page___childContentfulPageDescriptionTextNode___parent___id'
  | 'page___childContentfulPageDescriptionTextNode___parent___children'
  | 'page___childContentfulPageDescriptionTextNode___children'
  | 'page___childContentfulPageDescriptionTextNode___children___id'
  | 'page___childContentfulPageDescriptionTextNode___children___children'
  | 'page___childContentfulPageDescriptionTextNode___internal___content'
  | 'page___childContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'page___childContentfulPageDescriptionTextNode___internal___description'
  | 'page___childContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'page___childContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'page___childContentfulPageDescriptionTextNode___internal___mediaType'
  | 'page___childContentfulPageDescriptionTextNode___internal___owner'
  | 'page___childContentfulPageDescriptionTextNode___internal___type'
  | 'page___childContentfulPageDescriptionTextNode___description'
  | 'page___childContentfulPageDescriptionTextNode___sys___type'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___slug'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___body'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___headings'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___html'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___id'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulPageTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageTypeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageTypeEdge>;
  nodes: Array<ContentfulPageType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageTypeSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageTypeSysContentType>;
};

export type ContentfulPageTypeSysContentType = {
  sys?: Maybe<ContentfulPageTypeSysContentTypeSys>;
};

export type ContentfulPageTypeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageTypeSysContentTypeSysFilterInput>;
};

export type ContentfulPageTypeSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageTypeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageTypeSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSection = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  type?: Maybe<ContentfulSectionType>;
  medias?: Maybe<ContentfulMediaCollection>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  text?: Maybe<ContentfulSectionTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSectionSys>;
  node_locale?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  styleVariant?: Maybe<Scalars['String']>;
  announcements?: Maybe<Array<Maybe<ContentfulAnnouncement>>>;
  link?: Maybe<ContentfulLink>;
  childContentfulSectionTextTextNode?: Maybe<ContentfulSectionTextTextNode>;
};


export type ContentfulSectionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSectionGroupConnection>;
};


export type ContentfulSectionConnectionDistinctArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSectionFieldsEnum;
};

export type ContentfulSectionEdge = {
  next?: Maybe<ContentfulSection>;
  node: ContentfulSection;
  previous?: Maybe<ContentfulSection>;
};

export type ContentfulSectionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'subtitle'
  | 'type___id'
  | 'type___parent___id'
  | 'type___parent___parent___id'
  | 'type___parent___parent___children'
  | 'type___parent___children'
  | 'type___parent___children___id'
  | 'type___parent___children___children'
  | 'type___parent___internal___content'
  | 'type___parent___internal___contentDigest'
  | 'type___parent___internal___description'
  | 'type___parent___internal___fieldOwners'
  | 'type___parent___internal___ignoreType'
  | 'type___parent___internal___mediaType'
  | 'type___parent___internal___owner'
  | 'type___parent___internal___type'
  | 'type___children'
  | 'type___children___id'
  | 'type___children___parent___id'
  | 'type___children___parent___children'
  | 'type___children___children'
  | 'type___children___children___id'
  | 'type___children___children___children'
  | 'type___children___internal___content'
  | 'type___children___internal___contentDigest'
  | 'type___children___internal___description'
  | 'type___children___internal___fieldOwners'
  | 'type___children___internal___ignoreType'
  | 'type___children___internal___mediaType'
  | 'type___children___internal___owner'
  | 'type___children___internal___type'
  | 'type___internal___content'
  | 'type___internal___contentDigest'
  | 'type___internal___description'
  | 'type___internal___fieldOwners'
  | 'type___internal___ignoreType'
  | 'type___internal___mediaType'
  | 'type___internal___owner'
  | 'type___internal___type'
  | 'type___name'
  | 'type___type'
  | 'type___preview___id'
  | 'type___preview___parent___id'
  | 'type___preview___parent___children'
  | 'type___preview___children'
  | 'type___preview___children___id'
  | 'type___preview___children___children'
  | 'type___preview___internal___content'
  | 'type___preview___internal___contentDigest'
  | 'type___preview___internal___description'
  | 'type___preview___internal___fieldOwners'
  | 'type___preview___internal___ignoreType'
  | 'type___preview___internal___mediaType'
  | 'type___preview___internal___owner'
  | 'type___preview___internal___type'
  | 'type___preview___contentful_id'
  | 'type___preview___spaceId'
  | 'type___preview___createdAt'
  | 'type___preview___updatedAt'
  | 'type___preview___file___url'
  | 'type___preview___file___fileName'
  | 'type___preview___file___contentType'
  | 'type___preview___title'
  | 'type___preview___description'
  | 'type___preview___node_locale'
  | 'type___preview___sys___type'
  | 'type___preview___sys___revision'
  | 'type___preview___fixed___base64'
  | 'type___preview___fixed___tracedSVG'
  | 'type___preview___fixed___aspectRatio'
  | 'type___preview___fixed___width'
  | 'type___preview___fixed___height'
  | 'type___preview___fixed___src'
  | 'type___preview___fixed___srcSet'
  | 'type___preview___fixed___srcWebp'
  | 'type___preview___fixed___srcSetWebp'
  | 'type___preview___resolutions___base64'
  | 'type___preview___resolutions___tracedSVG'
  | 'type___preview___resolutions___aspectRatio'
  | 'type___preview___resolutions___width'
  | 'type___preview___resolutions___height'
  | 'type___preview___resolutions___src'
  | 'type___preview___resolutions___srcSet'
  | 'type___preview___resolutions___srcWebp'
  | 'type___preview___resolutions___srcSetWebp'
  | 'type___preview___fluid___base64'
  | 'type___preview___fluid___tracedSVG'
  | 'type___preview___fluid___aspectRatio'
  | 'type___preview___fluid___src'
  | 'type___preview___fluid___srcSet'
  | 'type___preview___fluid___srcWebp'
  | 'type___preview___fluid___srcSetWebp'
  | 'type___preview___fluid___sizes'
  | 'type___preview___sizes___base64'
  | 'type___preview___sizes___tracedSVG'
  | 'type___preview___sizes___aspectRatio'
  | 'type___preview___sizes___src'
  | 'type___preview___sizes___srcSet'
  | 'type___preview___sizes___srcWebp'
  | 'type___preview___sizes___srcSetWebp'
  | 'type___preview___sizes___sizes'
  | 'type___preview___resize___base64'
  | 'type___preview___resize___tracedSVG'
  | 'type___preview___resize___src'
  | 'type___preview___resize___width'
  | 'type___preview___resize___height'
  | 'type___preview___resize___aspectRatio'
  | 'type___spaceId'
  | 'type___contentful_id'
  | 'type___createdAt'
  | 'type___updatedAt'
  | 'type___sys___type'
  | 'type___sys___revision'
  | 'type___node_locale'
  | 'type___section'
  | 'type___section___id'
  | 'type___section___parent___id'
  | 'type___section___parent___children'
  | 'type___section___children'
  | 'type___section___children___id'
  | 'type___section___children___children'
  | 'type___section___internal___content'
  | 'type___section___internal___contentDigest'
  | 'type___section___internal___description'
  | 'type___section___internal___fieldOwners'
  | 'type___section___internal___ignoreType'
  | 'type___section___internal___mediaType'
  | 'type___section___internal___owner'
  | 'type___section___internal___type'
  | 'type___section___name'
  | 'type___section___title'
  | 'type___section___subtitle'
  | 'type___section___type___id'
  | 'type___section___type___children'
  | 'type___section___type___name'
  | 'type___section___type___type'
  | 'type___section___type___spaceId'
  | 'type___section___type___contentful_id'
  | 'type___section___type___createdAt'
  | 'type___section___type___updatedAt'
  | 'type___section___type___node_locale'
  | 'type___section___type___section'
  | 'type___section___medias___id'
  | 'type___section___medias___children'
  | 'type___section___medias___name'
  | 'type___section___medias___carouselStyle'
  | 'type___section___medias___medias'
  | 'type___section___medias___section'
  | 'type___section___medias___spaceId'
  | 'type___section___medias___contentful_id'
  | 'type___section___medias___createdAt'
  | 'type___section___medias___updatedAt'
  | 'type___section___medias___node_locale'
  | 'type___section___medias___size'
  | 'type___section___medias___variant'
  | 'type___section___medias___styleVariant'
  | 'type___section___page'
  | 'type___section___page___id'
  | 'type___section___page___children'
  | 'type___section___page___name'
  | 'type___section___page___title'
  | 'type___section___page___slug'
  | 'type___section___page___sections'
  | 'type___section___page___spaceId'
  | 'type___section___page___contentful_id'
  | 'type___section___page___createdAt'
  | 'type___section___page___updatedAt'
  | 'type___section___page___node_locale'
  | 'type___section___page___link'
  | 'type___section___text___id'
  | 'type___section___text___children'
  | 'type___section___text___text'
  | 'type___section___spaceId'
  | 'type___section___contentful_id'
  | 'type___section___createdAt'
  | 'type___section___updatedAt'
  | 'type___section___sys___type'
  | 'type___section___sys___revision'
  | 'type___section___node_locale'
  | 'type___section___variant'
  | 'type___section___styleVariant'
  | 'type___section___announcements'
  | 'type___section___announcements___id'
  | 'type___section___announcements___children'
  | 'type___section___announcements___name'
  | 'type___section___announcements___type'
  | 'type___section___announcements___title'
  | 'type___section___announcements___section'
  | 'type___section___announcements___spaceId'
  | 'type___section___announcements___contentful_id'
  | 'type___section___announcements___createdAt'
  | 'type___section___announcements___updatedAt'
  | 'type___section___announcements___node_locale'
  | 'type___section___link___id'
  | 'type___section___link___children'
  | 'type___section___link___type'
  | 'type___section___link___name'
  | 'type___section___link___label'
  | 'type___section___link___section'
  | 'type___section___link___spaceId'
  | 'type___section___link___contentful_id'
  | 'type___section___link___createdAt'
  | 'type___section___link___updatedAt'
  | 'type___section___link___node_locale'
  | 'type___section___childContentfulSectionTextTextNode___id'
  | 'type___section___childContentfulSectionTextTextNode___children'
  | 'type___section___childContentfulSectionTextTextNode___text'
  | 'medias___id'
  | 'medias___parent___id'
  | 'medias___parent___parent___id'
  | 'medias___parent___parent___children'
  | 'medias___parent___children'
  | 'medias___parent___children___id'
  | 'medias___parent___children___children'
  | 'medias___parent___internal___content'
  | 'medias___parent___internal___contentDigest'
  | 'medias___parent___internal___description'
  | 'medias___parent___internal___fieldOwners'
  | 'medias___parent___internal___ignoreType'
  | 'medias___parent___internal___mediaType'
  | 'medias___parent___internal___owner'
  | 'medias___parent___internal___type'
  | 'medias___children'
  | 'medias___children___id'
  | 'medias___children___parent___id'
  | 'medias___children___parent___children'
  | 'medias___children___children'
  | 'medias___children___children___id'
  | 'medias___children___children___children'
  | 'medias___children___internal___content'
  | 'medias___children___internal___contentDigest'
  | 'medias___children___internal___description'
  | 'medias___children___internal___fieldOwners'
  | 'medias___children___internal___ignoreType'
  | 'medias___children___internal___mediaType'
  | 'medias___children___internal___owner'
  | 'medias___children___internal___type'
  | 'medias___internal___content'
  | 'medias___internal___contentDigest'
  | 'medias___internal___description'
  | 'medias___internal___fieldOwners'
  | 'medias___internal___ignoreType'
  | 'medias___internal___mediaType'
  | 'medias___internal___owner'
  | 'medias___internal___type'
  | 'medias___name'
  | 'medias___carouselStyle'
  | 'medias___medias'
  | 'medias___medias___id'
  | 'medias___medias___parent___id'
  | 'medias___medias___parent___children'
  | 'medias___medias___children'
  | 'medias___medias___children___id'
  | 'medias___medias___children___children'
  | 'medias___medias___internal___content'
  | 'medias___medias___internal___contentDigest'
  | 'medias___medias___internal___description'
  | 'medias___medias___internal___fieldOwners'
  | 'medias___medias___internal___ignoreType'
  | 'medias___medias___internal___mediaType'
  | 'medias___medias___internal___owner'
  | 'medias___medias___internal___type'
  | 'medias___medias___contentful_id'
  | 'medias___medias___spaceId'
  | 'medias___medias___createdAt'
  | 'medias___medias___updatedAt'
  | 'medias___medias___file___url'
  | 'medias___medias___file___fileName'
  | 'medias___medias___file___contentType'
  | 'medias___medias___title'
  | 'medias___medias___description'
  | 'medias___medias___node_locale'
  | 'medias___medias___sys___type'
  | 'medias___medias___sys___revision'
  | 'medias___medias___fixed___base64'
  | 'medias___medias___fixed___tracedSVG'
  | 'medias___medias___fixed___aspectRatio'
  | 'medias___medias___fixed___width'
  | 'medias___medias___fixed___height'
  | 'medias___medias___fixed___src'
  | 'medias___medias___fixed___srcSet'
  | 'medias___medias___fixed___srcWebp'
  | 'medias___medias___fixed___srcSetWebp'
  | 'medias___medias___resolutions___base64'
  | 'medias___medias___resolutions___tracedSVG'
  | 'medias___medias___resolutions___aspectRatio'
  | 'medias___medias___resolutions___width'
  | 'medias___medias___resolutions___height'
  | 'medias___medias___resolutions___src'
  | 'medias___medias___resolutions___srcSet'
  | 'medias___medias___resolutions___srcWebp'
  | 'medias___medias___resolutions___srcSetWebp'
  | 'medias___medias___fluid___base64'
  | 'medias___medias___fluid___tracedSVG'
  | 'medias___medias___fluid___aspectRatio'
  | 'medias___medias___fluid___src'
  | 'medias___medias___fluid___srcSet'
  | 'medias___medias___fluid___srcWebp'
  | 'medias___medias___fluid___srcSetWebp'
  | 'medias___medias___fluid___sizes'
  | 'medias___medias___sizes___base64'
  | 'medias___medias___sizes___tracedSVG'
  | 'medias___medias___sizes___aspectRatio'
  | 'medias___medias___sizes___src'
  | 'medias___medias___sizes___srcSet'
  | 'medias___medias___sizes___srcWebp'
  | 'medias___medias___sizes___srcSetWebp'
  | 'medias___medias___sizes___sizes'
  | 'medias___medias___resize___base64'
  | 'medias___medias___resize___tracedSVG'
  | 'medias___medias___resize___src'
  | 'medias___medias___resize___width'
  | 'medias___medias___resize___height'
  | 'medias___medias___resize___aspectRatio'
  | 'medias___section'
  | 'medias___section___id'
  | 'medias___section___parent___id'
  | 'medias___section___parent___children'
  | 'medias___section___children'
  | 'medias___section___children___id'
  | 'medias___section___children___children'
  | 'medias___section___internal___content'
  | 'medias___section___internal___contentDigest'
  | 'medias___section___internal___description'
  | 'medias___section___internal___fieldOwners'
  | 'medias___section___internal___ignoreType'
  | 'medias___section___internal___mediaType'
  | 'medias___section___internal___owner'
  | 'medias___section___internal___type'
  | 'medias___section___name'
  | 'medias___section___title'
  | 'medias___section___subtitle'
  | 'medias___section___type___id'
  | 'medias___section___type___children'
  | 'medias___section___type___name'
  | 'medias___section___type___type'
  | 'medias___section___type___spaceId'
  | 'medias___section___type___contentful_id'
  | 'medias___section___type___createdAt'
  | 'medias___section___type___updatedAt'
  | 'medias___section___type___node_locale'
  | 'medias___section___type___section'
  | 'medias___section___medias___id'
  | 'medias___section___medias___children'
  | 'medias___section___medias___name'
  | 'medias___section___medias___carouselStyle'
  | 'medias___section___medias___medias'
  | 'medias___section___medias___section'
  | 'medias___section___medias___spaceId'
  | 'medias___section___medias___contentful_id'
  | 'medias___section___medias___createdAt'
  | 'medias___section___medias___updatedAt'
  | 'medias___section___medias___node_locale'
  | 'medias___section___medias___size'
  | 'medias___section___medias___variant'
  | 'medias___section___medias___styleVariant'
  | 'medias___section___page'
  | 'medias___section___page___id'
  | 'medias___section___page___children'
  | 'medias___section___page___name'
  | 'medias___section___page___title'
  | 'medias___section___page___slug'
  | 'medias___section___page___sections'
  | 'medias___section___page___spaceId'
  | 'medias___section___page___contentful_id'
  | 'medias___section___page___createdAt'
  | 'medias___section___page___updatedAt'
  | 'medias___section___page___node_locale'
  | 'medias___section___page___link'
  | 'medias___section___text___id'
  | 'medias___section___text___children'
  | 'medias___section___text___text'
  | 'medias___section___spaceId'
  | 'medias___section___contentful_id'
  | 'medias___section___createdAt'
  | 'medias___section___updatedAt'
  | 'medias___section___sys___type'
  | 'medias___section___sys___revision'
  | 'medias___section___node_locale'
  | 'medias___section___variant'
  | 'medias___section___styleVariant'
  | 'medias___section___announcements'
  | 'medias___section___announcements___id'
  | 'medias___section___announcements___children'
  | 'medias___section___announcements___name'
  | 'medias___section___announcements___type'
  | 'medias___section___announcements___title'
  | 'medias___section___announcements___section'
  | 'medias___section___announcements___spaceId'
  | 'medias___section___announcements___contentful_id'
  | 'medias___section___announcements___createdAt'
  | 'medias___section___announcements___updatedAt'
  | 'medias___section___announcements___node_locale'
  | 'medias___section___link___id'
  | 'medias___section___link___children'
  | 'medias___section___link___type'
  | 'medias___section___link___name'
  | 'medias___section___link___label'
  | 'medias___section___link___section'
  | 'medias___section___link___spaceId'
  | 'medias___section___link___contentful_id'
  | 'medias___section___link___createdAt'
  | 'medias___section___link___updatedAt'
  | 'medias___section___link___node_locale'
  | 'medias___section___childContentfulSectionTextTextNode___id'
  | 'medias___section___childContentfulSectionTextTextNode___children'
  | 'medias___section___childContentfulSectionTextTextNode___text'
  | 'medias___spaceId'
  | 'medias___contentful_id'
  | 'medias___createdAt'
  | 'medias___updatedAt'
  | 'medias___sys___type'
  | 'medias___sys___revision'
  | 'medias___node_locale'
  | 'medias___size'
  | 'medias___variant'
  | 'medias___styleVariant'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___name'
  | 'page___title'
  | 'page___slug'
  | 'page___type___id'
  | 'page___type___parent___id'
  | 'page___type___parent___children'
  | 'page___type___children'
  | 'page___type___children___id'
  | 'page___type___children___children'
  | 'page___type___internal___content'
  | 'page___type___internal___contentDigest'
  | 'page___type___internal___description'
  | 'page___type___internal___fieldOwners'
  | 'page___type___internal___ignoreType'
  | 'page___type___internal___mediaType'
  | 'page___type___internal___owner'
  | 'page___type___internal___type'
  | 'page___type___name'
  | 'page___type___type'
  | 'page___type___preview___id'
  | 'page___type___preview___children'
  | 'page___type___preview___contentful_id'
  | 'page___type___preview___spaceId'
  | 'page___type___preview___createdAt'
  | 'page___type___preview___updatedAt'
  | 'page___type___preview___title'
  | 'page___type___preview___description'
  | 'page___type___preview___node_locale'
  | 'page___type___page'
  | 'page___type___page___id'
  | 'page___type___page___children'
  | 'page___type___page___name'
  | 'page___type___page___title'
  | 'page___type___page___slug'
  | 'page___type___page___sections'
  | 'page___type___page___spaceId'
  | 'page___type___page___contentful_id'
  | 'page___type___page___createdAt'
  | 'page___type___page___updatedAt'
  | 'page___type___page___node_locale'
  | 'page___type___page___link'
  | 'page___type___spaceId'
  | 'page___type___contentful_id'
  | 'page___type___createdAt'
  | 'page___type___updatedAt'
  | 'page___type___sys___type'
  | 'page___type___sys___revision'
  | 'page___type___node_locale'
  | 'page___sections'
  | 'page___sections___id'
  | 'page___sections___parent___id'
  | 'page___sections___parent___children'
  | 'page___sections___children'
  | 'page___sections___children___id'
  | 'page___sections___children___children'
  | 'page___sections___internal___content'
  | 'page___sections___internal___contentDigest'
  | 'page___sections___internal___description'
  | 'page___sections___internal___fieldOwners'
  | 'page___sections___internal___ignoreType'
  | 'page___sections___internal___mediaType'
  | 'page___sections___internal___owner'
  | 'page___sections___internal___type'
  | 'page___sections___name'
  | 'page___sections___title'
  | 'page___sections___subtitle'
  | 'page___sections___type___id'
  | 'page___sections___type___children'
  | 'page___sections___type___name'
  | 'page___sections___type___type'
  | 'page___sections___type___spaceId'
  | 'page___sections___type___contentful_id'
  | 'page___sections___type___createdAt'
  | 'page___sections___type___updatedAt'
  | 'page___sections___type___node_locale'
  | 'page___sections___type___section'
  | 'page___sections___medias___id'
  | 'page___sections___medias___children'
  | 'page___sections___medias___name'
  | 'page___sections___medias___carouselStyle'
  | 'page___sections___medias___medias'
  | 'page___sections___medias___section'
  | 'page___sections___medias___spaceId'
  | 'page___sections___medias___contentful_id'
  | 'page___sections___medias___createdAt'
  | 'page___sections___medias___updatedAt'
  | 'page___sections___medias___node_locale'
  | 'page___sections___medias___size'
  | 'page___sections___medias___variant'
  | 'page___sections___medias___styleVariant'
  | 'page___sections___page'
  | 'page___sections___page___id'
  | 'page___sections___page___children'
  | 'page___sections___page___name'
  | 'page___sections___page___title'
  | 'page___sections___page___slug'
  | 'page___sections___page___sections'
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___page___link'
  | 'page___sections___text___id'
  | 'page___sections___text___children'
  | 'page___sections___text___text'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
  | 'page___sections___styleVariant'
  | 'page___sections___announcements'
  | 'page___sections___announcements___id'
  | 'page___sections___announcements___children'
  | 'page___sections___announcements___name'
  | 'page___sections___announcements___type'
  | 'page___sections___announcements___title'
  | 'page___sections___announcements___section'
  | 'page___sections___announcements___spaceId'
  | 'page___sections___announcements___contentful_id'
  | 'page___sections___announcements___createdAt'
  | 'page___sections___announcements___updatedAt'
  | 'page___sections___announcements___node_locale'
  | 'page___sections___link___id'
  | 'page___sections___link___children'
  | 'page___sections___link___type'
  | 'page___sections___link___name'
  | 'page___sections___link___label'
  | 'page___sections___link___section'
  | 'page___sections___link___spaceId'
  | 'page___sections___link___contentful_id'
  | 'page___sections___link___createdAt'
  | 'page___sections___link___updatedAt'
  | 'page___sections___link___node_locale'
  | 'page___sections___childContentfulSectionTextTextNode___id'
  | 'page___sections___childContentfulSectionTextTextNode___children'
  | 'page___sections___childContentfulSectionTextTextNode___text'
  | 'page___description___id'
  | 'page___description___parent___id'
  | 'page___description___parent___children'
  | 'page___description___children'
  | 'page___description___children___id'
  | 'page___description___children___children'
  | 'page___description___internal___content'
  | 'page___description___internal___contentDigest'
  | 'page___description___internal___description'
  | 'page___description___internal___fieldOwners'
  | 'page___description___internal___ignoreType'
  | 'page___description___internal___mediaType'
  | 'page___description___internal___owner'
  | 'page___description___internal___type'
  | 'page___description___description'
  | 'page___description___sys___type'
  | 'page___description___childMdx___rawBody'
  | 'page___description___childMdx___fileAbsolutePath'
  | 'page___description___childMdx___slug'
  | 'page___description___childMdx___body'
  | 'page___description___childMdx___excerpt'
  | 'page___description___childMdx___headings'
  | 'page___description___childMdx___html'
  | 'page___description___childMdx___mdxAST'
  | 'page___description___childMdx___tableOfContents'
  | 'page___description___childMdx___timeToRead'
  | 'page___description___childMdx___id'
  | 'page___description___childMdx___children'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___type'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'page___link'
  | 'page___link___id'
  | 'page___link___parent___id'
  | 'page___link___parent___children'
  | 'page___link___children'
  | 'page___link___children___id'
  | 'page___link___children___children'
  | 'page___link___internal___content'
  | 'page___link___internal___contentDigest'
  | 'page___link___internal___description'
  | 'page___link___internal___fieldOwners'
  | 'page___link___internal___ignoreType'
  | 'page___link___internal___mediaType'
  | 'page___link___internal___owner'
  | 'page___link___internal___type'
  | 'page___link___type'
  | 'page___link___name'
  | 'page___link___label'
  | 'page___link___page___id'
  | 'page___link___page___children'
  | 'page___link___page___name'
  | 'page___link___page___title'
  | 'page___link___page___slug'
  | 'page___link___page___sections'
  | 'page___link___page___spaceId'
  | 'page___link___page___contentful_id'
  | 'page___link___page___createdAt'
  | 'page___link___page___updatedAt'
  | 'page___link___page___node_locale'
  | 'page___link___page___link'
  | 'page___link___section'
  | 'page___link___section___id'
  | 'page___link___section___children'
  | 'page___link___section___name'
  | 'page___link___section___title'
  | 'page___link___section___subtitle'
  | 'page___link___section___page'
  | 'page___link___section___spaceId'
  | 'page___link___section___contentful_id'
  | 'page___link___section___createdAt'
  | 'page___link___section___updatedAt'
  | 'page___link___section___node_locale'
  | 'page___link___section___variant'
  | 'page___link___section___styleVariant'
  | 'page___link___section___announcements'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___childContentfulPageDescriptionTextNode___id'
  | 'page___childContentfulPageDescriptionTextNode___parent___id'
  | 'page___childContentfulPageDescriptionTextNode___parent___children'
  | 'page___childContentfulPageDescriptionTextNode___children'
  | 'page___childContentfulPageDescriptionTextNode___children___id'
  | 'page___childContentfulPageDescriptionTextNode___children___children'
  | 'page___childContentfulPageDescriptionTextNode___internal___content'
  | 'page___childContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'page___childContentfulPageDescriptionTextNode___internal___description'
  | 'page___childContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'page___childContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'page___childContentfulPageDescriptionTextNode___internal___mediaType'
  | 'page___childContentfulPageDescriptionTextNode___internal___owner'
  | 'page___childContentfulPageDescriptionTextNode___internal___type'
  | 'page___childContentfulPageDescriptionTextNode___description'
  | 'page___childContentfulPageDescriptionTextNode___sys___type'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___slug'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___body'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___headings'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___html'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___id'
  | 'page___childContentfulPageDescriptionTextNode___childMdx___children'
  | 'text___id'
  | 'text___parent___id'
  | 'text___parent___parent___id'
  | 'text___parent___parent___children'
  | 'text___parent___children'
  | 'text___parent___children___id'
  | 'text___parent___children___children'
  | 'text___parent___internal___content'
  | 'text___parent___internal___contentDigest'
  | 'text___parent___internal___description'
  | 'text___parent___internal___fieldOwners'
  | 'text___parent___internal___ignoreType'
  | 'text___parent___internal___mediaType'
  | 'text___parent___internal___owner'
  | 'text___parent___internal___type'
  | 'text___children'
  | 'text___children___id'
  | 'text___children___parent___id'
  | 'text___children___parent___children'
  | 'text___children___children'
  | 'text___children___children___id'
  | 'text___children___children___children'
  | 'text___children___internal___content'
  | 'text___children___internal___contentDigest'
  | 'text___children___internal___description'
  | 'text___children___internal___fieldOwners'
  | 'text___children___internal___ignoreType'
  | 'text___children___internal___mediaType'
  | 'text___children___internal___owner'
  | 'text___children___internal___type'
  | 'text___internal___content'
  | 'text___internal___contentDigest'
  | 'text___internal___description'
  | 'text___internal___fieldOwners'
  | 'text___internal___ignoreType'
  | 'text___internal___mediaType'
  | 'text___internal___owner'
  | 'text___internal___type'
  | 'text___text'
  | 'text___sys___type'
  | 'text___childMdx___rawBody'
  | 'text___childMdx___fileAbsolutePath'
  | 'text___childMdx___frontmatter___title'
  | 'text___childMdx___frontmatter___name'
  | 'text___childMdx___frontmatter___tags'
  | 'text___childMdx___slug'
  | 'text___childMdx___body'
  | 'text___childMdx___excerpt'
  | 'text___childMdx___headings'
  | 'text___childMdx___headings___value'
  | 'text___childMdx___headings___depth'
  | 'text___childMdx___html'
  | 'text___childMdx___mdxAST'
  | 'text___childMdx___tableOfContents'
  | 'text___childMdx___timeToRead'
  | 'text___childMdx___wordCount___paragraphs'
  | 'text___childMdx___wordCount___sentences'
  | 'text___childMdx___wordCount___words'
  | 'text___childMdx___id'
  | 'text___childMdx___parent___id'
  | 'text___childMdx___parent___children'
  | 'text___childMdx___children'
  | 'text___childMdx___children___id'
  | 'text___childMdx___children___children'
  | 'text___childMdx___internal___content'
  | 'text___childMdx___internal___contentDigest'
  | 'text___childMdx___internal___description'
  | 'text___childMdx___internal___fieldOwners'
  | 'text___childMdx___internal___ignoreType'
  | 'text___childMdx___internal___mediaType'
  | 'text___childMdx___internal___owner'
  | 'text___childMdx___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'variant'
  | 'styleVariant'
  | 'announcements'
  | 'announcements___id'
  | 'announcements___parent___id'
  | 'announcements___parent___parent___id'
  | 'announcements___parent___parent___children'
  | 'announcements___parent___children'
  | 'announcements___parent___children___id'
  | 'announcements___parent___children___children'
  | 'announcements___parent___internal___content'
  | 'announcements___parent___internal___contentDigest'
  | 'announcements___parent___internal___description'
  | 'announcements___parent___internal___fieldOwners'
  | 'announcements___parent___internal___ignoreType'
  | 'announcements___parent___internal___mediaType'
  | 'announcements___parent___internal___owner'
  | 'announcements___parent___internal___type'
  | 'announcements___children'
  | 'announcements___children___id'
  | 'announcements___children___parent___id'
  | 'announcements___children___parent___children'
  | 'announcements___children___children'
  | 'announcements___children___children___id'
  | 'announcements___children___children___children'
  | 'announcements___children___internal___content'
  | 'announcements___children___internal___contentDigest'
  | 'announcements___children___internal___description'
  | 'announcements___children___internal___fieldOwners'
  | 'announcements___children___internal___ignoreType'
  | 'announcements___children___internal___mediaType'
  | 'announcements___children___internal___owner'
  | 'announcements___children___internal___type'
  | 'announcements___internal___content'
  | 'announcements___internal___contentDigest'
  | 'announcements___internal___description'
  | 'announcements___internal___fieldOwners'
  | 'announcements___internal___ignoreType'
  | 'announcements___internal___mediaType'
  | 'announcements___internal___owner'
  | 'announcements___internal___type'
  | 'announcements___name'
  | 'announcements___type'
  | 'announcements___title'
  | 'announcements___section'
  | 'announcements___section___id'
  | 'announcements___section___parent___id'
  | 'announcements___section___parent___children'
  | 'announcements___section___children'
  | 'announcements___section___children___id'
  | 'announcements___section___children___children'
  | 'announcements___section___internal___content'
  | 'announcements___section___internal___contentDigest'
  | 'announcements___section___internal___description'
  | 'announcements___section___internal___fieldOwners'
  | 'announcements___section___internal___ignoreType'
  | 'announcements___section___internal___mediaType'
  | 'announcements___section___internal___owner'
  | 'announcements___section___internal___type'
  | 'announcements___section___name'
  | 'announcements___section___title'
  | 'announcements___section___subtitle'
  | 'announcements___section___type___id'
  | 'announcements___section___type___children'
  | 'announcements___section___type___name'
  | 'announcements___section___type___type'
  | 'announcements___section___type___spaceId'
  | 'announcements___section___type___contentful_id'
  | 'announcements___section___type___createdAt'
  | 'announcements___section___type___updatedAt'
  | 'announcements___section___type___node_locale'
  | 'announcements___section___type___section'
  | 'announcements___section___medias___id'
  | 'announcements___section___medias___children'
  | 'announcements___section___medias___name'
  | 'announcements___section___medias___carouselStyle'
  | 'announcements___section___medias___medias'
  | 'announcements___section___medias___section'
  | 'announcements___section___medias___spaceId'
  | 'announcements___section___medias___contentful_id'
  | 'announcements___section___medias___createdAt'
  | 'announcements___section___medias___updatedAt'
  | 'announcements___section___medias___node_locale'
  | 'announcements___section___medias___size'
  | 'announcements___section___medias___variant'
  | 'announcements___section___medias___styleVariant'
  | 'announcements___section___page'
  | 'announcements___section___page___id'
  | 'announcements___section___page___children'
  | 'announcements___section___page___name'
  | 'announcements___section___page___title'
  | 'announcements___section___page___slug'
  | 'announcements___section___page___sections'
  | 'announcements___section___page___spaceId'
  | 'announcements___section___page___contentful_id'
  | 'announcements___section___page___createdAt'
  | 'announcements___section___page___updatedAt'
  | 'announcements___section___page___node_locale'
  | 'announcements___section___page___link'
  | 'announcements___section___text___id'
  | 'announcements___section___text___children'
  | 'announcements___section___text___text'
  | 'announcements___section___spaceId'
  | 'announcements___section___contentful_id'
  | 'announcements___section___createdAt'
  | 'announcements___section___updatedAt'
  | 'announcements___section___sys___type'
  | 'announcements___section___sys___revision'
  | 'announcements___section___node_locale'
  | 'announcements___section___variant'
  | 'announcements___section___styleVariant'
  | 'announcements___section___announcements'
  | 'announcements___section___announcements___id'
  | 'announcements___section___announcements___children'
  | 'announcements___section___announcements___name'
  | 'announcements___section___announcements___type'
  | 'announcements___section___announcements___title'
  | 'announcements___section___announcements___section'
  | 'announcements___section___announcements___spaceId'
  | 'announcements___section___announcements___contentful_id'
  | 'announcements___section___announcements___createdAt'
  | 'announcements___section___announcements___updatedAt'
  | 'announcements___section___announcements___node_locale'
  | 'announcements___section___link___id'
  | 'announcements___section___link___children'
  | 'announcements___section___link___type'
  | 'announcements___section___link___name'
  | 'announcements___section___link___label'
  | 'announcements___section___link___section'
  | 'announcements___section___link___spaceId'
  | 'announcements___section___link___contentful_id'
  | 'announcements___section___link___createdAt'
  | 'announcements___section___link___updatedAt'
  | 'announcements___section___link___node_locale'
  | 'announcements___section___childContentfulSectionTextTextNode___id'
  | 'announcements___section___childContentfulSectionTextTextNode___children'
  | 'announcements___section___childContentfulSectionTextTextNode___text'
  | 'announcements___message___id'
  | 'announcements___message___parent___id'
  | 'announcements___message___parent___children'
  | 'announcements___message___children'
  | 'announcements___message___children___id'
  | 'announcements___message___children___children'
  | 'announcements___message___internal___content'
  | 'announcements___message___internal___contentDigest'
  | 'announcements___message___internal___description'
  | 'announcements___message___internal___fieldOwners'
  | 'announcements___message___internal___ignoreType'
  | 'announcements___message___internal___mediaType'
  | 'announcements___message___internal___owner'
  | 'announcements___message___internal___type'
  | 'announcements___message___message'
  | 'announcements___message___sys___type'
  | 'announcements___message___childMdx___rawBody'
  | 'announcements___message___childMdx___fileAbsolutePath'
  | 'announcements___message___childMdx___slug'
  | 'announcements___message___childMdx___body'
  | 'announcements___message___childMdx___excerpt'
  | 'announcements___message___childMdx___headings'
  | 'announcements___message___childMdx___html'
  | 'announcements___message___childMdx___mdxAST'
  | 'announcements___message___childMdx___tableOfContents'
  | 'announcements___message___childMdx___timeToRead'
  | 'announcements___message___childMdx___id'
  | 'announcements___message___childMdx___children'
  | 'announcements___spaceId'
  | 'announcements___contentful_id'
  | 'announcements___createdAt'
  | 'announcements___updatedAt'
  | 'announcements___sys___type'
  | 'announcements___sys___revision'
  | 'announcements___node_locale'
  | 'announcements___childContentfulAnnouncementMessageTextNode___id'
  | 'announcements___childContentfulAnnouncementMessageTextNode___parent___id'
  | 'announcements___childContentfulAnnouncementMessageTextNode___parent___children'
  | 'announcements___childContentfulAnnouncementMessageTextNode___children'
  | 'announcements___childContentfulAnnouncementMessageTextNode___children___id'
  | 'announcements___childContentfulAnnouncementMessageTextNode___children___children'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___content'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___contentDigest'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___description'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___fieldOwners'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___ignoreType'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___mediaType'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___owner'
  | 'announcements___childContentfulAnnouncementMessageTextNode___internal___type'
  | 'announcements___childContentfulAnnouncementMessageTextNode___message'
  | 'announcements___childContentfulAnnouncementMessageTextNode___sys___type'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___rawBody'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___fileAbsolutePath'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___slug'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___body'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___excerpt'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___headings'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___html'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___mdxAST'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___tableOfContents'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___timeToRead'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___id'
  | 'announcements___childContentfulAnnouncementMessageTextNode___childMdx___children'
  | 'link___id'
  | 'link___parent___id'
  | 'link___parent___parent___id'
  | 'link___parent___parent___children'
  | 'link___parent___children'
  | 'link___parent___children___id'
  | 'link___parent___children___children'
  | 'link___parent___internal___content'
  | 'link___parent___internal___contentDigest'
  | 'link___parent___internal___description'
  | 'link___parent___internal___fieldOwners'
  | 'link___parent___internal___ignoreType'
  | 'link___parent___internal___mediaType'
  | 'link___parent___internal___owner'
  | 'link___parent___internal___type'
  | 'link___children'
  | 'link___children___id'
  | 'link___children___parent___id'
  | 'link___children___parent___children'
  | 'link___children___children'
  | 'link___children___children___id'
  | 'link___children___children___children'
  | 'link___children___internal___content'
  | 'link___children___internal___contentDigest'
  | 'link___children___internal___description'
  | 'link___children___internal___fieldOwners'
  | 'link___children___internal___ignoreType'
  | 'link___children___internal___mediaType'
  | 'link___children___internal___owner'
  | 'link___children___internal___type'
  | 'link___internal___content'
  | 'link___internal___contentDigest'
  | 'link___internal___description'
  | 'link___internal___fieldOwners'
  | 'link___internal___ignoreType'
  | 'link___internal___mediaType'
  | 'link___internal___owner'
  | 'link___internal___type'
  | 'link___type'
  | 'link___name'
  | 'link___label'
  | 'link___page___id'
  | 'link___page___parent___id'
  | 'link___page___parent___children'
  | 'link___page___children'
  | 'link___page___children___id'
  | 'link___page___children___children'
  | 'link___page___internal___content'
  | 'link___page___internal___contentDigest'
  | 'link___page___internal___description'
  | 'link___page___internal___fieldOwners'
  | 'link___page___internal___ignoreType'
  | 'link___page___internal___mediaType'
  | 'link___page___internal___owner'
  | 'link___page___internal___type'
  | 'link___page___name'
  | 'link___page___title'
  | 'link___page___slug'
  | 'link___page___type___id'
  | 'link___page___type___children'
  | 'link___page___type___name'
  | 'link___page___type___type'
  | 'link___page___type___page'
  | 'link___page___type___spaceId'
  | 'link___page___type___contentful_id'
  | 'link___page___type___createdAt'
  | 'link___page___type___updatedAt'
  | 'link___page___type___node_locale'
  | 'link___page___sections'
  | 'link___page___sections___id'
  | 'link___page___sections___children'
  | 'link___page___sections___name'
  | 'link___page___sections___title'
  | 'link___page___sections___subtitle'
  | 'link___page___sections___page'
  | 'link___page___sections___spaceId'
  | 'link___page___sections___contentful_id'
  | 'link___page___sections___createdAt'
  | 'link___page___sections___updatedAt'
  | 'link___page___sections___node_locale'
  | 'link___page___sections___variant'
  | 'link___page___sections___styleVariant'
  | 'link___page___sections___announcements'
  | 'link___page___description___id'
  | 'link___page___description___children'
  | 'link___page___description___description'
  | 'link___page___spaceId'
  | 'link___page___contentful_id'
  | 'link___page___createdAt'
  | 'link___page___updatedAt'
  | 'link___page___sys___type'
  | 'link___page___sys___revision'
  | 'link___page___node_locale'
  | 'link___page___link'
  | 'link___page___link___id'
  | 'link___page___link___children'
  | 'link___page___link___type'
  | 'link___page___link___name'
  | 'link___page___link___label'
  | 'link___page___link___section'
  | 'link___page___link___spaceId'
  | 'link___page___link___contentful_id'
  | 'link___page___link___createdAt'
  | 'link___page___link___updatedAt'
  | 'link___page___link___node_locale'
  | 'link___page___childContentfulPageDescriptionTextNode___id'
  | 'link___page___childContentfulPageDescriptionTextNode___children'
  | 'link___page___childContentfulPageDescriptionTextNode___description'
  | 'link___section'
  | 'link___section___id'
  | 'link___section___parent___id'
  | 'link___section___parent___children'
  | 'link___section___children'
  | 'link___section___children___id'
  | 'link___section___children___children'
  | 'link___section___internal___content'
  | 'link___section___internal___contentDigest'
  | 'link___section___internal___description'
  | 'link___section___internal___fieldOwners'
  | 'link___section___internal___ignoreType'
  | 'link___section___internal___mediaType'
  | 'link___section___internal___owner'
  | 'link___section___internal___type'
  | 'link___section___name'
  | 'link___section___title'
  | 'link___section___subtitle'
  | 'link___section___type___id'
  | 'link___section___type___children'
  | 'link___section___type___name'
  | 'link___section___type___type'
  | 'link___section___type___spaceId'
  | 'link___section___type___contentful_id'
  | 'link___section___type___createdAt'
  | 'link___section___type___updatedAt'
  | 'link___section___type___node_locale'
  | 'link___section___type___section'
  | 'link___section___medias___id'
  | 'link___section___medias___children'
  | 'link___section___medias___name'
  | 'link___section___medias___carouselStyle'
  | 'link___section___medias___medias'
  | 'link___section___medias___section'
  | 'link___section___medias___spaceId'
  | 'link___section___medias___contentful_id'
  | 'link___section___medias___createdAt'
  | 'link___section___medias___updatedAt'
  | 'link___section___medias___node_locale'
  | 'link___section___medias___size'
  | 'link___section___medias___variant'
  | 'link___section___medias___styleVariant'
  | 'link___section___page'
  | 'link___section___page___id'
  | 'link___section___page___children'
  | 'link___section___page___name'
  | 'link___section___page___title'
  | 'link___section___page___slug'
  | 'link___section___page___sections'
  | 'link___section___page___spaceId'
  | 'link___section___page___contentful_id'
  | 'link___section___page___createdAt'
  | 'link___section___page___updatedAt'
  | 'link___section___page___node_locale'
  | 'link___section___page___link'
  | 'link___section___text___id'
  | 'link___section___text___children'
  | 'link___section___text___text'
  | 'link___section___spaceId'
  | 'link___section___contentful_id'
  | 'link___section___createdAt'
  | 'link___section___updatedAt'
  | 'link___section___sys___type'
  | 'link___section___sys___revision'
  | 'link___section___node_locale'
  | 'link___section___variant'
  | 'link___section___styleVariant'
  | 'link___section___announcements'
  | 'link___section___announcements___id'
  | 'link___section___announcements___children'
  | 'link___section___announcements___name'
  | 'link___section___announcements___type'
  | 'link___section___announcements___title'
  | 'link___section___announcements___section'
  | 'link___section___announcements___spaceId'
  | 'link___section___announcements___contentful_id'
  | 'link___section___announcements___createdAt'
  | 'link___section___announcements___updatedAt'
  | 'link___section___announcements___node_locale'
  | 'link___section___link___id'
  | 'link___section___link___children'
  | 'link___section___link___type'
  | 'link___section___link___name'
  | 'link___section___link___label'
  | 'link___section___link___section'
  | 'link___section___link___spaceId'
  | 'link___section___link___contentful_id'
  | 'link___section___link___createdAt'
  | 'link___section___link___updatedAt'
  | 'link___section___link___node_locale'
  | 'link___section___childContentfulSectionTextTextNode___id'
  | 'link___section___childContentfulSectionTextTextNode___children'
  | 'link___section___childContentfulSectionTextTextNode___text'
  | 'link___spaceId'
  | 'link___contentful_id'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___node_locale'
  | 'childContentfulSectionTextTextNode___id'
  | 'childContentfulSectionTextTextNode___parent___id'
  | 'childContentfulSectionTextTextNode___parent___parent___id'
  | 'childContentfulSectionTextTextNode___parent___parent___children'
  | 'childContentfulSectionTextTextNode___parent___children'
  | 'childContentfulSectionTextTextNode___parent___children___id'
  | 'childContentfulSectionTextTextNode___parent___children___children'
  | 'childContentfulSectionTextTextNode___parent___internal___content'
  | 'childContentfulSectionTextTextNode___parent___internal___contentDigest'
  | 'childContentfulSectionTextTextNode___parent___internal___description'
  | 'childContentfulSectionTextTextNode___parent___internal___fieldOwners'
  | 'childContentfulSectionTextTextNode___parent___internal___ignoreType'
  | 'childContentfulSectionTextTextNode___parent___internal___mediaType'
  | 'childContentfulSectionTextTextNode___parent___internal___owner'
  | 'childContentfulSectionTextTextNode___parent___internal___type'
  | 'childContentfulSectionTextTextNode___children'
  | 'childContentfulSectionTextTextNode___children___id'
  | 'childContentfulSectionTextTextNode___children___parent___id'
  | 'childContentfulSectionTextTextNode___children___parent___children'
  | 'childContentfulSectionTextTextNode___children___children'
  | 'childContentfulSectionTextTextNode___children___children___id'
  | 'childContentfulSectionTextTextNode___children___children___children'
  | 'childContentfulSectionTextTextNode___children___internal___content'
  | 'childContentfulSectionTextTextNode___children___internal___contentDigest'
  | 'childContentfulSectionTextTextNode___children___internal___description'
  | 'childContentfulSectionTextTextNode___children___internal___fieldOwners'
  | 'childContentfulSectionTextTextNode___children___internal___ignoreType'
  | 'childContentfulSectionTextTextNode___children___internal___mediaType'
  | 'childContentfulSectionTextTextNode___children___internal___owner'
  | 'childContentfulSectionTextTextNode___children___internal___type'
  | 'childContentfulSectionTextTextNode___internal___content'
  | 'childContentfulSectionTextTextNode___internal___contentDigest'
  | 'childContentfulSectionTextTextNode___internal___description'
  | 'childContentfulSectionTextTextNode___internal___fieldOwners'
  | 'childContentfulSectionTextTextNode___internal___ignoreType'
  | 'childContentfulSectionTextTextNode___internal___mediaType'
  | 'childContentfulSectionTextTextNode___internal___owner'
  | 'childContentfulSectionTextTextNode___internal___type'
  | 'childContentfulSectionTextTextNode___text'
  | 'childContentfulSectionTextTextNode___sys___type'
  | 'childContentfulSectionTextTextNode___childMdx___rawBody'
  | 'childContentfulSectionTextTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulSectionTextTextNode___childMdx___frontmatter___title'
  | 'childContentfulSectionTextTextNode___childMdx___frontmatter___name'
  | 'childContentfulSectionTextTextNode___childMdx___frontmatter___tags'
  | 'childContentfulSectionTextTextNode___childMdx___slug'
  | 'childContentfulSectionTextTextNode___childMdx___body'
  | 'childContentfulSectionTextTextNode___childMdx___excerpt'
  | 'childContentfulSectionTextTextNode___childMdx___headings'
  | 'childContentfulSectionTextTextNode___childMdx___headings___value'
  | 'childContentfulSectionTextTextNode___childMdx___headings___depth'
  | 'childContentfulSectionTextTextNode___childMdx___html'
  | 'childContentfulSectionTextTextNode___childMdx___mdxAST'
  | 'childContentfulSectionTextTextNode___childMdx___tableOfContents'
  | 'childContentfulSectionTextTextNode___childMdx___timeToRead'
  | 'childContentfulSectionTextTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulSectionTextTextNode___childMdx___wordCount___sentences'
  | 'childContentfulSectionTextTextNode___childMdx___wordCount___words'
  | 'childContentfulSectionTextTextNode___childMdx___id'
  | 'childContentfulSectionTextTextNode___childMdx___parent___id'
  | 'childContentfulSectionTextTextNode___childMdx___parent___children'
  | 'childContentfulSectionTextTextNode___childMdx___children'
  | 'childContentfulSectionTextTextNode___childMdx___children___id'
  | 'childContentfulSectionTextTextNode___childMdx___children___children'
  | 'childContentfulSectionTextTextNode___childMdx___internal___content'
  | 'childContentfulSectionTextTextNode___childMdx___internal___contentDigest'
  | 'childContentfulSectionTextTextNode___childMdx___internal___description'
  | 'childContentfulSectionTextTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulSectionTextTextNode___childMdx___internal___ignoreType'
  | 'childContentfulSectionTextTextNode___childMdx___internal___mediaType'
  | 'childContentfulSectionTextTextNode___childMdx___internal___owner'
  | 'childContentfulSectionTextTextNode___childMdx___internal___type';

export type ContentfulSectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<ContentfulSectionTypeFilterInput>;
  medias?: Maybe<ContentfulMediaCollectionFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  text?: Maybe<ContentfulSectionTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  styleVariant?: Maybe<StringQueryOperatorInput>;
  announcements?: Maybe<ContentfulAnnouncementFilterListInput>;
  link?: Maybe<ContentfulLinkFilterInput>;
  childContentfulSectionTextTextNode?: Maybe<ContentfulSectionTextTextNodeFilterInput>;
};

export type ContentfulSectionFilterListInput = {
  elemMatch?: Maybe<ContentfulSectionFilterInput>;
};

export type ContentfulSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSectionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSectionSysContentType>;
};

export type ContentfulSectionSysContentType = {
  sys?: Maybe<ContentfulSectionSysContentTypeSys>;
};

export type ContentfulSectionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSectionSysContentTypeSysFilterInput>;
};

export type ContentfulSectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSectionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSectionSysContentTypeFilterInput>;
};

export type ContentfulSectionTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulSectionTextTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulSectionTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionTextTextNodeEdge>;
  nodes: Array<ContentfulSectionTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSectionTextTextNodeGroupConnection>;
};


export type ContentfulSectionTextTextNodeConnectionDistinctArgs = {
  field: ContentfulSectionTextTextNodeFieldsEnum;
};


export type ContentfulSectionTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSectionTextTextNodeFieldsEnum;
};

export type ContentfulSectionTextTextNodeEdge = {
  next?: Maybe<ContentfulSectionTextTextNode>;
  node: ContentfulSectionTextTextNode;
  previous?: Maybe<ContentfulSectionTextTextNode>;
};

export type ContentfulSectionTextTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'text'
  | 'sys___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type ContentfulSectionTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulSectionTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionTextTextNodeEdge>;
  nodes: Array<ContentfulSectionTextTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSectionTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSectionTextTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSectionTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulSectionTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  preview?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSectionTypeSys>;
  node_locale?: Maybe<Scalars['String']>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
};


export type ContentfulSectionTypeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSectionTypeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSectionTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionTypeEdge>;
  nodes: Array<ContentfulSectionType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSectionTypeGroupConnection>;
};


export type ContentfulSectionTypeConnectionDistinctArgs = {
  field: ContentfulSectionTypeFieldsEnum;
};


export type ContentfulSectionTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSectionTypeFieldsEnum;
};

export type ContentfulSectionTypeEdge = {
  next?: Maybe<ContentfulSectionType>;
  node: ContentfulSectionType;
  previous?: Maybe<ContentfulSectionType>;
};

export type ContentfulSectionTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'type'
  | 'preview___id'
  | 'preview___parent___id'
  | 'preview___parent___parent___id'
  | 'preview___parent___parent___children'
  | 'preview___parent___children'
  | 'preview___parent___children___id'
  | 'preview___parent___children___children'
  | 'preview___parent___internal___content'
  | 'preview___parent___internal___contentDigest'
  | 'preview___parent___internal___description'
  | 'preview___parent___internal___fieldOwners'
  | 'preview___parent___internal___ignoreType'
  | 'preview___parent___internal___mediaType'
  | 'preview___parent___internal___owner'
  | 'preview___parent___internal___type'
  | 'preview___children'
  | 'preview___children___id'
  | 'preview___children___parent___id'
  | 'preview___children___parent___children'
  | 'preview___children___children'
  | 'preview___children___children___id'
  | 'preview___children___children___children'
  | 'preview___children___internal___content'
  | 'preview___children___internal___contentDigest'
  | 'preview___children___internal___description'
  | 'preview___children___internal___fieldOwners'
  | 'preview___children___internal___ignoreType'
  | 'preview___children___internal___mediaType'
  | 'preview___children___internal___owner'
  | 'preview___children___internal___type'
  | 'preview___internal___content'
  | 'preview___internal___contentDigest'
  | 'preview___internal___description'
  | 'preview___internal___fieldOwners'
  | 'preview___internal___ignoreType'
  | 'preview___internal___mediaType'
  | 'preview___internal___owner'
  | 'preview___internal___type'
  | 'preview___contentful_id'
  | 'preview___spaceId'
  | 'preview___createdAt'
  | 'preview___updatedAt'
  | 'preview___file___url'
  | 'preview___file___details___size'
  | 'preview___file___fileName'
  | 'preview___file___contentType'
  | 'preview___title'
  | 'preview___description'
  | 'preview___node_locale'
  | 'preview___sys___type'
  | 'preview___sys___revision'
  | 'preview___fixed___base64'
  | 'preview___fixed___tracedSVG'
  | 'preview___fixed___aspectRatio'
  | 'preview___fixed___width'
  | 'preview___fixed___height'
  | 'preview___fixed___src'
  | 'preview___fixed___srcSet'
  | 'preview___fixed___srcWebp'
  | 'preview___fixed___srcSetWebp'
  | 'preview___resolutions___base64'
  | 'preview___resolutions___tracedSVG'
  | 'preview___resolutions___aspectRatio'
  | 'preview___resolutions___width'
  | 'preview___resolutions___height'
  | 'preview___resolutions___src'
  | 'preview___resolutions___srcSet'
  | 'preview___resolutions___srcWebp'
  | 'preview___resolutions___srcSetWebp'
  | 'preview___fluid___base64'
  | 'preview___fluid___tracedSVG'
  | 'preview___fluid___aspectRatio'
  | 'preview___fluid___src'
  | 'preview___fluid___srcSet'
  | 'preview___fluid___srcWebp'
  | 'preview___fluid___srcSetWebp'
  | 'preview___fluid___sizes'
  | 'preview___sizes___base64'
  | 'preview___sizes___tracedSVG'
  | 'preview___sizes___aspectRatio'
  | 'preview___sizes___src'
  | 'preview___sizes___srcSet'
  | 'preview___sizes___srcWebp'
  | 'preview___sizes___srcSetWebp'
  | 'preview___sizes___sizes'
  | 'preview___resize___base64'
  | 'preview___resize___tracedSVG'
  | 'preview___resize___src'
  | 'preview___resize___width'
  | 'preview___resize___height'
  | 'preview___resize___aspectRatio'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'section'
  | 'section___id'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'section___name'
  | 'section___title'
  | 'section___subtitle'
  | 'section___type___id'
  | 'section___type___parent___id'
  | 'section___type___parent___children'
  | 'section___type___children'
  | 'section___type___children___id'
  | 'section___type___children___children'
  | 'section___type___internal___content'
  | 'section___type___internal___contentDigest'
  | 'section___type___internal___description'
  | 'section___type___internal___fieldOwners'
  | 'section___type___internal___ignoreType'
  | 'section___type___internal___mediaType'
  | 'section___type___internal___owner'
  | 'section___type___internal___type'
  | 'section___type___name'
  | 'section___type___type'
  | 'section___type___preview___id'
  | 'section___type___preview___children'
  | 'section___type___preview___contentful_id'
  | 'section___type___preview___spaceId'
  | 'section___type___preview___createdAt'
  | 'section___type___preview___updatedAt'
  | 'section___type___preview___title'
  | 'section___type___preview___description'
  | 'section___type___preview___node_locale'
  | 'section___type___spaceId'
  | 'section___type___contentful_id'
  | 'section___type___createdAt'
  | 'section___type___updatedAt'
  | 'section___type___sys___type'
  | 'section___type___sys___revision'
  | 'section___type___node_locale'
  | 'section___type___section'
  | 'section___type___section___id'
  | 'section___type___section___children'
  | 'section___type___section___name'
  | 'section___type___section___title'
  | 'section___type___section___subtitle'
  | 'section___type___section___page'
  | 'section___type___section___spaceId'
  | 'section___type___section___contentful_id'
  | 'section___type___section___createdAt'
  | 'section___type___section___updatedAt'
  | 'section___type___section___node_locale'
  | 'section___type___section___variant'
  | 'section___type___section___styleVariant'
  | 'section___type___section___announcements'
  | 'section___medias___id'
  | 'section___medias___parent___id'
  | 'section___medias___parent___children'
  | 'section___medias___children'
  | 'section___medias___children___id'
  | 'section___medias___children___children'
  | 'section___medias___internal___content'
  | 'section___medias___internal___contentDigest'
  | 'section___medias___internal___description'
  | 'section___medias___internal___fieldOwners'
  | 'section___medias___internal___ignoreType'
  | 'section___medias___internal___mediaType'
  | 'section___medias___internal___owner'
  | 'section___medias___internal___type'
  | 'section___medias___name'
  | 'section___medias___carouselStyle'
  | 'section___medias___medias'
  | 'section___medias___medias___id'
  | 'section___medias___medias___children'
  | 'section___medias___medias___contentful_id'
  | 'section___medias___medias___spaceId'
  | 'section___medias___medias___createdAt'
  | 'section___medias___medias___updatedAt'
  | 'section___medias___medias___title'
  | 'section___medias___medias___description'
  | 'section___medias___medias___node_locale'
  | 'section___medias___section'
  | 'section___medias___section___id'
  | 'section___medias___section___children'
  | 'section___medias___section___name'
  | 'section___medias___section___title'
  | 'section___medias___section___subtitle'
  | 'section___medias___section___page'
  | 'section___medias___section___spaceId'
  | 'section___medias___section___contentful_id'
  | 'section___medias___section___createdAt'
  | 'section___medias___section___updatedAt'
  | 'section___medias___section___node_locale'
  | 'section___medias___section___variant'
  | 'section___medias___section___styleVariant'
  | 'section___medias___section___announcements'
  | 'section___medias___spaceId'
  | 'section___medias___contentful_id'
  | 'section___medias___createdAt'
  | 'section___medias___updatedAt'
  | 'section___medias___sys___type'
  | 'section___medias___sys___revision'
  | 'section___medias___node_locale'
  | 'section___medias___size'
  | 'section___medias___variant'
  | 'section___medias___styleVariant'
  | 'section___page'
  | 'section___page___id'
  | 'section___page___parent___id'
  | 'section___page___parent___children'
  | 'section___page___children'
  | 'section___page___children___id'
  | 'section___page___children___children'
  | 'section___page___internal___content'
  | 'section___page___internal___contentDigest'
  | 'section___page___internal___description'
  | 'section___page___internal___fieldOwners'
  | 'section___page___internal___ignoreType'
  | 'section___page___internal___mediaType'
  | 'section___page___internal___owner'
  | 'section___page___internal___type'
  | 'section___page___name'
  | 'section___page___title'
  | 'section___page___slug'
  | 'section___page___type___id'
  | 'section___page___type___children'
  | 'section___page___type___name'
  | 'section___page___type___type'
  | 'section___page___type___page'
  | 'section___page___type___spaceId'
  | 'section___page___type___contentful_id'
  | 'section___page___type___createdAt'
  | 'section___page___type___updatedAt'
  | 'section___page___type___node_locale'
  | 'section___page___sections'
  | 'section___page___sections___id'
  | 'section___page___sections___children'
  | 'section___page___sections___name'
  | 'section___page___sections___title'
  | 'section___page___sections___subtitle'
  | 'section___page___sections___page'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___variant'
  | 'section___page___sections___styleVariant'
  | 'section___page___sections___announcements'
  | 'section___page___description___id'
  | 'section___page___description___children'
  | 'section___page___description___description'
  | 'section___page___spaceId'
  | 'section___page___contentful_id'
  | 'section___page___createdAt'
  | 'section___page___updatedAt'
  | 'section___page___sys___type'
  | 'section___page___sys___revision'
  | 'section___page___node_locale'
  | 'section___page___link'
  | 'section___page___link___id'
  | 'section___page___link___children'
  | 'section___page___link___type'
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___section'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___text___id'
  | 'section___text___parent___id'
  | 'section___text___parent___children'
  | 'section___text___children'
  | 'section___text___children___id'
  | 'section___text___children___children'
  | 'section___text___internal___content'
  | 'section___text___internal___contentDigest'
  | 'section___text___internal___description'
  | 'section___text___internal___fieldOwners'
  | 'section___text___internal___ignoreType'
  | 'section___text___internal___mediaType'
  | 'section___text___internal___owner'
  | 'section___text___internal___type'
  | 'section___text___text'
  | 'section___text___sys___type'
  | 'section___text___childMdx___rawBody'
  | 'section___text___childMdx___fileAbsolutePath'
  | 'section___text___childMdx___slug'
  | 'section___text___childMdx___body'
  | 'section___text___childMdx___excerpt'
  | 'section___text___childMdx___headings'
  | 'section___text___childMdx___html'
  | 'section___text___childMdx___mdxAST'
  | 'section___text___childMdx___tableOfContents'
  | 'section___text___childMdx___timeToRead'
  | 'section___text___childMdx___id'
  | 'section___text___childMdx___children'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
  | 'section___styleVariant'
  | 'section___announcements'
  | 'section___announcements___id'
  | 'section___announcements___parent___id'
  | 'section___announcements___parent___children'
  | 'section___announcements___children'
  | 'section___announcements___children___id'
  | 'section___announcements___children___children'
  | 'section___announcements___internal___content'
  | 'section___announcements___internal___contentDigest'
  | 'section___announcements___internal___description'
  | 'section___announcements___internal___fieldOwners'
  | 'section___announcements___internal___ignoreType'
  | 'section___announcements___internal___mediaType'
  | 'section___announcements___internal___owner'
  | 'section___announcements___internal___type'
  | 'section___announcements___name'
  | 'section___announcements___type'
  | 'section___announcements___title'
  | 'section___announcements___section'
  | 'section___announcements___section___id'
  | 'section___announcements___section___children'
  | 'section___announcements___section___name'
  | 'section___announcements___section___title'
  | 'section___announcements___section___subtitle'
  | 'section___announcements___section___page'
  | 'section___announcements___section___spaceId'
  | 'section___announcements___section___contentful_id'
  | 'section___announcements___section___createdAt'
  | 'section___announcements___section___updatedAt'
  | 'section___announcements___section___node_locale'
  | 'section___announcements___section___variant'
  | 'section___announcements___section___styleVariant'
  | 'section___announcements___section___announcements'
  | 'section___announcements___message___id'
  | 'section___announcements___message___children'
  | 'section___announcements___message___message'
  | 'section___announcements___spaceId'
  | 'section___announcements___contentful_id'
  | 'section___announcements___createdAt'
  | 'section___announcements___updatedAt'
  | 'section___announcements___sys___type'
  | 'section___announcements___sys___revision'
  | 'section___announcements___node_locale'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___id'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___children'
  | 'section___announcements___childContentfulAnnouncementMessageTextNode___message'
  | 'section___link___id'
  | 'section___link___parent___id'
  | 'section___link___parent___children'
  | 'section___link___children'
  | 'section___link___children___id'
  | 'section___link___children___children'
  | 'section___link___internal___content'
  | 'section___link___internal___contentDigest'
  | 'section___link___internal___description'
  | 'section___link___internal___fieldOwners'
  | 'section___link___internal___ignoreType'
  | 'section___link___internal___mediaType'
  | 'section___link___internal___owner'
  | 'section___link___internal___type'
  | 'section___link___type'
  | 'section___link___name'
  | 'section___link___label'
  | 'section___link___page___id'
  | 'section___link___page___children'
  | 'section___link___page___name'
  | 'section___link___page___title'
  | 'section___link___page___slug'
  | 'section___link___page___sections'
  | 'section___link___page___spaceId'
  | 'section___link___page___contentful_id'
  | 'section___link___page___createdAt'
  | 'section___link___page___updatedAt'
  | 'section___link___page___node_locale'
  | 'section___link___page___link'
  | 'section___link___section'
  | 'section___link___section___id'
  | 'section___link___section___children'
  | 'section___link___section___name'
  | 'section___link___section___title'
  | 'section___link___section___subtitle'
  | 'section___link___section___page'
  | 'section___link___section___spaceId'
  | 'section___link___section___contentful_id'
  | 'section___link___section___createdAt'
  | 'section___link___section___updatedAt'
  | 'section___link___section___node_locale'
  | 'section___link___section___variant'
  | 'section___link___section___styleVariant'
  | 'section___link___section___announcements'
  | 'section___link___spaceId'
  | 'section___link___contentful_id'
  | 'section___link___createdAt'
  | 'section___link___updatedAt'
  | 'section___link___sys___type'
  | 'section___link___sys___revision'
  | 'section___link___node_locale'
  | 'section___childContentfulSectionTextTextNode___id'
  | 'section___childContentfulSectionTextTextNode___parent___id'
  | 'section___childContentfulSectionTextTextNode___parent___children'
  | 'section___childContentfulSectionTextTextNode___children'
  | 'section___childContentfulSectionTextTextNode___children___id'
  | 'section___childContentfulSectionTextTextNode___children___children'
  | 'section___childContentfulSectionTextTextNode___internal___content'
  | 'section___childContentfulSectionTextTextNode___internal___contentDigest'
  | 'section___childContentfulSectionTextTextNode___internal___description'
  | 'section___childContentfulSectionTextTextNode___internal___fieldOwners'
  | 'section___childContentfulSectionTextTextNode___internal___ignoreType'
  | 'section___childContentfulSectionTextTextNode___internal___mediaType'
  | 'section___childContentfulSectionTextTextNode___internal___owner'
  | 'section___childContentfulSectionTextTextNode___internal___type'
  | 'section___childContentfulSectionTextTextNode___text'
  | 'section___childContentfulSectionTextTextNode___sys___type'
  | 'section___childContentfulSectionTextTextNode___childMdx___rawBody'
  | 'section___childContentfulSectionTextTextNode___childMdx___fileAbsolutePath'
  | 'section___childContentfulSectionTextTextNode___childMdx___slug'
  | 'section___childContentfulSectionTextTextNode___childMdx___body'
  | 'section___childContentfulSectionTextTextNode___childMdx___excerpt'
  | 'section___childContentfulSectionTextTextNode___childMdx___headings'
  | 'section___childContentfulSectionTextTextNode___childMdx___html'
  | 'section___childContentfulSectionTextTextNode___childMdx___mdxAST'
  | 'section___childContentfulSectionTextTextNode___childMdx___tableOfContents'
  | 'section___childContentfulSectionTextTextNode___childMdx___timeToRead'
  | 'section___childContentfulSectionTextTextNode___childMdx___id'
  | 'section___childContentfulSectionTextTextNode___childMdx___children';

export type ContentfulSectionTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionTypeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
};

export type ContentfulSectionTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionTypeEdge>;
  nodes: Array<ContentfulSectionType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSectionTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSectionTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSectionTypeSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSectionTypeSysContentType>;
};

export type ContentfulSectionTypeSysContentType = {
  sys?: Maybe<ContentfulSectionTypeSysContentTypeSys>;
};

export type ContentfulSectionTypeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSectionTypeSysContentTypeSysFilterInput>;
};

export type ContentfulSectionTypeSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSectionTypeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSectionTypeSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulStep = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<ContentfulStepTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulStepSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulStepTextTextNode?: Maybe<ContentfulStepTextTextNode>;
};


export type ContentfulStepCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulStepUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulStepConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStepEdge>;
  nodes: Array<ContentfulStep>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulStepGroupConnection>;
};


export type ContentfulStepConnectionDistinctArgs = {
  field: ContentfulStepFieldsEnum;
};


export type ContentfulStepConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulStepFieldsEnum;
};

export type ContentfulStepEdge = {
  next?: Maybe<ContentfulStep>;
  node: ContentfulStep;
  previous?: Maybe<ContentfulStep>;
};

export type ContentfulStepFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'text___id'
  | 'text___parent___id'
  | 'text___parent___parent___id'
  | 'text___parent___parent___children'
  | 'text___parent___children'
  | 'text___parent___children___id'
  | 'text___parent___children___children'
  | 'text___parent___internal___content'
  | 'text___parent___internal___contentDigest'
  | 'text___parent___internal___description'
  | 'text___parent___internal___fieldOwners'
  | 'text___parent___internal___ignoreType'
  | 'text___parent___internal___mediaType'
  | 'text___parent___internal___owner'
  | 'text___parent___internal___type'
  | 'text___children'
  | 'text___children___id'
  | 'text___children___parent___id'
  | 'text___children___parent___children'
  | 'text___children___children'
  | 'text___children___children___id'
  | 'text___children___children___children'
  | 'text___children___internal___content'
  | 'text___children___internal___contentDigest'
  | 'text___children___internal___description'
  | 'text___children___internal___fieldOwners'
  | 'text___children___internal___ignoreType'
  | 'text___children___internal___mediaType'
  | 'text___children___internal___owner'
  | 'text___children___internal___type'
  | 'text___internal___content'
  | 'text___internal___contentDigest'
  | 'text___internal___description'
  | 'text___internal___fieldOwners'
  | 'text___internal___ignoreType'
  | 'text___internal___mediaType'
  | 'text___internal___owner'
  | 'text___internal___type'
  | 'text___text'
  | 'text___sys___type'
  | 'text___childMdx___rawBody'
  | 'text___childMdx___fileAbsolutePath'
  | 'text___childMdx___frontmatter___title'
  | 'text___childMdx___frontmatter___name'
  | 'text___childMdx___frontmatter___tags'
  | 'text___childMdx___slug'
  | 'text___childMdx___body'
  | 'text___childMdx___excerpt'
  | 'text___childMdx___headings'
  | 'text___childMdx___headings___value'
  | 'text___childMdx___headings___depth'
  | 'text___childMdx___html'
  | 'text___childMdx___mdxAST'
  | 'text___childMdx___tableOfContents'
  | 'text___childMdx___timeToRead'
  | 'text___childMdx___wordCount___paragraphs'
  | 'text___childMdx___wordCount___sentences'
  | 'text___childMdx___wordCount___words'
  | 'text___childMdx___id'
  | 'text___childMdx___parent___id'
  | 'text___childMdx___parent___children'
  | 'text___childMdx___children'
  | 'text___childMdx___children___id'
  | 'text___childMdx___children___children'
  | 'text___childMdx___internal___content'
  | 'text___childMdx___internal___contentDigest'
  | 'text___childMdx___internal___description'
  | 'text___childMdx___internal___fieldOwners'
  | 'text___childMdx___internal___ignoreType'
  | 'text___childMdx___internal___mediaType'
  | 'text___childMdx___internal___owner'
  | 'text___childMdx___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulStepTextTextNode___id'
  | 'childContentfulStepTextTextNode___parent___id'
  | 'childContentfulStepTextTextNode___parent___parent___id'
  | 'childContentfulStepTextTextNode___parent___parent___children'
  | 'childContentfulStepTextTextNode___parent___children'
  | 'childContentfulStepTextTextNode___parent___children___id'
  | 'childContentfulStepTextTextNode___parent___children___children'
  | 'childContentfulStepTextTextNode___parent___internal___content'
  | 'childContentfulStepTextTextNode___parent___internal___contentDigest'
  | 'childContentfulStepTextTextNode___parent___internal___description'
  | 'childContentfulStepTextTextNode___parent___internal___fieldOwners'
  | 'childContentfulStepTextTextNode___parent___internal___ignoreType'
  | 'childContentfulStepTextTextNode___parent___internal___mediaType'
  | 'childContentfulStepTextTextNode___parent___internal___owner'
  | 'childContentfulStepTextTextNode___parent___internal___type'
  | 'childContentfulStepTextTextNode___children'
  | 'childContentfulStepTextTextNode___children___id'
  | 'childContentfulStepTextTextNode___children___parent___id'
  | 'childContentfulStepTextTextNode___children___parent___children'
  | 'childContentfulStepTextTextNode___children___children'
  | 'childContentfulStepTextTextNode___children___children___id'
  | 'childContentfulStepTextTextNode___children___children___children'
  | 'childContentfulStepTextTextNode___children___internal___content'
  | 'childContentfulStepTextTextNode___children___internal___contentDigest'
  | 'childContentfulStepTextTextNode___children___internal___description'
  | 'childContentfulStepTextTextNode___children___internal___fieldOwners'
  | 'childContentfulStepTextTextNode___children___internal___ignoreType'
  | 'childContentfulStepTextTextNode___children___internal___mediaType'
  | 'childContentfulStepTextTextNode___children___internal___owner'
  | 'childContentfulStepTextTextNode___children___internal___type'
  | 'childContentfulStepTextTextNode___internal___content'
  | 'childContentfulStepTextTextNode___internal___contentDigest'
  | 'childContentfulStepTextTextNode___internal___description'
  | 'childContentfulStepTextTextNode___internal___fieldOwners'
  | 'childContentfulStepTextTextNode___internal___ignoreType'
  | 'childContentfulStepTextTextNode___internal___mediaType'
  | 'childContentfulStepTextTextNode___internal___owner'
  | 'childContentfulStepTextTextNode___internal___type'
  | 'childContentfulStepTextTextNode___text'
  | 'childContentfulStepTextTextNode___sys___type'
  | 'childContentfulStepTextTextNode___childMdx___rawBody'
  | 'childContentfulStepTextTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulStepTextTextNode___childMdx___frontmatter___title'
  | 'childContentfulStepTextTextNode___childMdx___frontmatter___name'
  | 'childContentfulStepTextTextNode___childMdx___frontmatter___tags'
  | 'childContentfulStepTextTextNode___childMdx___slug'
  | 'childContentfulStepTextTextNode___childMdx___body'
  | 'childContentfulStepTextTextNode___childMdx___excerpt'
  | 'childContentfulStepTextTextNode___childMdx___headings'
  | 'childContentfulStepTextTextNode___childMdx___headings___value'
  | 'childContentfulStepTextTextNode___childMdx___headings___depth'
  | 'childContentfulStepTextTextNode___childMdx___html'
  | 'childContentfulStepTextTextNode___childMdx___mdxAST'
  | 'childContentfulStepTextTextNode___childMdx___tableOfContents'
  | 'childContentfulStepTextTextNode___childMdx___timeToRead'
  | 'childContentfulStepTextTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulStepTextTextNode___childMdx___wordCount___sentences'
  | 'childContentfulStepTextTextNode___childMdx___wordCount___words'
  | 'childContentfulStepTextTextNode___childMdx___id'
  | 'childContentfulStepTextTextNode___childMdx___parent___id'
  | 'childContentfulStepTextTextNode___childMdx___parent___children'
  | 'childContentfulStepTextTextNode___childMdx___children'
  | 'childContentfulStepTextTextNode___childMdx___children___id'
  | 'childContentfulStepTextTextNode___childMdx___children___children'
  | 'childContentfulStepTextTextNode___childMdx___internal___content'
  | 'childContentfulStepTextTextNode___childMdx___internal___contentDigest'
  | 'childContentfulStepTextTextNode___childMdx___internal___description'
  | 'childContentfulStepTextTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulStepTextTextNode___childMdx___internal___ignoreType'
  | 'childContentfulStepTextTextNode___childMdx___internal___mediaType'
  | 'childContentfulStepTextTextNode___childMdx___internal___owner'
  | 'childContentfulStepTextTextNode___childMdx___internal___type';

export type ContentfulStepFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulStepTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulStepSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulStepTextTextNode?: Maybe<ContentfulStepTextTextNodeFilterInput>;
};

export type ContentfulStepGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStepEdge>;
  nodes: Array<ContentfulStep>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulStepSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulStepFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulStepSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulStepSysContentType>;
};

export type ContentfulStepSysContentType = {
  sys?: Maybe<ContentfulStepSysContentTypeSys>;
};

export type ContentfulStepSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulStepSysContentTypeSysFilterInput>;
};

export type ContentfulStepSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulStepSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulStepSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulStepSysContentTypeFilterInput>;
};

export type ContentfulStepTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulStepTextTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulStepTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStepTextTextNodeEdge>;
  nodes: Array<ContentfulStepTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulStepTextTextNodeGroupConnection>;
};


export type ContentfulStepTextTextNodeConnectionDistinctArgs = {
  field: ContentfulStepTextTextNodeFieldsEnum;
};


export type ContentfulStepTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulStepTextTextNodeFieldsEnum;
};

export type ContentfulStepTextTextNodeEdge = {
  next?: Maybe<ContentfulStepTextTextNode>;
  node: ContentfulStepTextTextNode;
  previous?: Maybe<ContentfulStepTextTextNode>;
};

export type ContentfulStepTextTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'text'
  | 'sys___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type ContentfulStepTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulStepTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulStepTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStepTextTextNodeEdge>;
  nodes: Array<ContentfulStepTextTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulStepTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulStepTextTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulStepTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulStepTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMdx?: Maybe<Mdx>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImage___imageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type HeadingsMdx = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type ImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BASE64'
  | 'NONE';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImage?: Maybe<ImageSharpGatsbyImage>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  tracedSVGOptions?: Maybe<Potrace>;
  webP?: Maybe<Scalars['Boolean']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImage___imageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImage?: Maybe<ImageSharpGatsbyImageFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGatsbyImage = {
  imageData: Scalars['JSON'];
};

export type ImageSharpGatsbyImageFilterInput = {
  imageData?: Maybe<JsonQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum = 
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___name'
  | 'frontmatter___tags'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulAnnouncementMessageTextNode?: Maybe<ContentfulAnnouncementMessageTextNode>;
  allContentfulAnnouncementMessageTextNode: ContentfulAnnouncementMessageTextNodeConnection;
  contentfulAnnouncement?: Maybe<ContentfulAnnouncement>;
  allContentfulAnnouncement: ContentfulAnnouncementConnection;
  contentfulCostItem?: Maybe<ContentfulCostItem>;
  allContentfulCostItem: ContentfulCostItemConnection;
  contentfulStepTextTextNode?: Maybe<ContentfulStepTextTextNode>;
  allContentfulStepTextTextNode: ContentfulStepTextTextNodeConnection;
  contentfulStep?: Maybe<ContentfulStep>;
  allContentfulStep: ContentfulStepConnection;
  contentfulSectionTextTextNode?: Maybe<ContentfulSectionTextTextNode>;
  allContentfulSectionTextTextNode: ContentfulSectionTextTextNodeConnection;
  contentfulSection?: Maybe<ContentfulSection>;
  allContentfulSection: ContentfulSectionConnection;
  contentfulSectionType?: Maybe<ContentfulSectionType>;
  allContentfulSectionType: ContentfulSectionTypeConnection;
  contentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNode>;
  allContentfulPageDescriptionTextNode: ContentfulPageDescriptionTextNodeConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulPageType?: Maybe<ContentfulPageType>;
  allContentfulPageType: ContentfulPageTypeConnection;
  contentfulCompanyInfo?: Maybe<ContentfulCompanyInfo>;
  allContentfulCompanyInfo: ContentfulCompanyInfoConnection;
  contentfulCompanyAddress?: Maybe<ContentfulCompanyAddress>;
  allContentfulCompanyAddress: ContentfulCompanyAddressConnection;
  contentfulMediaCollection?: Maybe<ContentfulMediaCollection>;
  allContentfulMediaCollection: ContentfulMediaCollectionConnection;
  contentfulLink?: Maybe<ContentfulLink>;
  allContentfulLink: ContentfulLinkConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageFieldsFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImage?: Maybe<ImageSharpGatsbyImageFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnnouncementMessageTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  message?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAnnouncementMessageTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulAnnouncementMessageTextNodeArgs = {
  filter?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
  sort?: Maybe<ContentfulAnnouncementMessageTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnnouncementArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  message?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnnouncementSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAnnouncementMessageTextNode?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
};


export type QueryAllContentfulAnnouncementArgs = {
  filter?: Maybe<ContentfulAnnouncementFilterInput>;
  sort?: Maybe<ContentfulAnnouncementSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCostItemArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCostItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCostItemArgs = {
  filter?: Maybe<ContentfulCostItemFilterInput>;
  sort?: Maybe<ContentfulCostItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulStepTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulStepTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulStepTextTextNodeArgs = {
  filter?: Maybe<ContentfulStepTextTextNodeFilterInput>;
  sort?: Maybe<ContentfulStepTextTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulStepArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulStepTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulStepSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulStepTextTextNode?: Maybe<ContentfulStepTextTextNodeFilterInput>;
};


export type QueryAllContentfulStepArgs = {
  filter?: Maybe<ContentfulStepFilterInput>;
  sort?: Maybe<ContentfulStepSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulSectionTextTextNodeArgs = {
  filter?: Maybe<ContentfulSectionTextTextNodeFilterInput>;
  sort?: Maybe<ContentfulSectionTextTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<ContentfulSectionTypeFilterInput>;
  medias?: Maybe<ContentfulMediaCollectionFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  text?: Maybe<ContentfulSectionTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  styleVariant?: Maybe<StringQueryOperatorInput>;
  announcements?: Maybe<ContentfulAnnouncementFilterListInput>;
  link?: Maybe<ContentfulLinkFilterInput>;
  childContentfulSectionTextTextNode?: Maybe<ContentfulSectionTextTextNodeFilterInput>;
};


export type QueryAllContentfulSectionArgs = {
  filter?: Maybe<ContentfulSectionFilterInput>;
  sort?: Maybe<ContentfulSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionTypeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
};


export type QueryAllContentfulSectionTypeArgs = {
  filter?: Maybe<ContentfulSectionTypeFilterInput>;
  sort?: Maybe<ContentfulSectionTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPageDescriptionTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulPageDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulPageDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<ContentfulPageTypeFilterInput>;
  sections?: Maybe<ContentfulSectionFilterListInput>;
  description?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<ContentfulLinkFilterListInput>;
  childContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageTypeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPageTypeArgs = {
  filter?: Maybe<ContentfulPageTypeFilterInput>;
  sort?: Maybe<ContentfulPageTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCompanyInfoArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  companyName?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  metadataSiteName?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  favicon?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanyInfoSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCompanyInfoArgs = {
  filter?: Maybe<ContentfulCompanyInfoFilterInput>;
  sort?: Maybe<ContentfulCompanyInfoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCompanyAddressArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  addressLine1?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  postalCode?: Maybe<StringQueryOperatorInput>;
  provinceState?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  fax?: Maybe<StringQueryOperatorInput>;
  websiteURL?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanyAddressSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCompanyAddressArgs = {
  filter?: Maybe<ContentfulCompanyAddressFilterInput>;
  sort?: Maybe<ContentfulCompanyAddressSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMediaCollectionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  carouselStyle?: Maybe<StringQueryOperatorInput>;
  medias?: Maybe<ContentfulAssetFilterListInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaCollectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  styleVariant?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulMediaCollectionArgs = {
  filter?: Maybe<ContentfulMediaCollectionFilterInput>;
  sort?: Maybe<ContentfulMediaCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLinkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulLinkArgs = {
  filter?: Maybe<ContentfulLinkFilterInput>;
  sort?: Maybe<ContentfulLinkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___siteEnv'
  | 'siteMetadata___languages___langs'
  | 'siteMetadata___languages___defaultLangKey'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  fields?: Maybe<SitePageFields>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  siteMetadata?: Maybe<SitePageContextSiteMetadata>;
  pageId?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
  frontmatter?: Maybe<SitePageContextFrontmatter>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  siteMetadata?: Maybe<SitePageContextSiteMetadataFilterInput>;
  pageId?: Maybe<StringQueryOperatorInput>;
  fileId?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatter = {
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextFrontmatterFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteEnv?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  languages?: Maybe<SitePageContextSiteMetadataLanguages>;
};

export type SitePageContextSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteEnv?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<SitePageContextSiteMetadataLanguagesFilterInput>;
};

export type SitePageContextSiteMetadataLanguages = {
  langs?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLangKey?: Maybe<Scalars['String']>;
};

export type SitePageContextSiteMetadataLanguagesFilterInput = {
  langs?: Maybe<StringQueryOperatorInput>;
  defaultLangKey?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFields = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___siteMetadata___title'
  | 'context___siteMetadata___description'
  | 'context___siteMetadata___siteEnv'
  | 'context___siteMetadata___siteUrl'
  | 'context___siteMetadata___languages___langs'
  | 'context___siteMetadata___languages___defaultLangKey'
  | 'context___pageId'
  | 'context___fileId'
  | 'context___frontmatter___name'
  | 'context___frontmatter___tags'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___tsLoader___configFile'
  | 'pluginCreator___pluginOptions___tsLoader___logLevel'
  | 'pluginCreator___pluginOptions___tsLoader___transpileOnly'
  | 'pluginCreator___pluginOptions___tsLoader___projectReferences'
  | 'pluginCreator___pluginOptions___typeCheck'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___ignore'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___sitemap'
  | 'pluginCreator___pluginOptions___headers____x'
  | 'pluginCreator___pluginOptions___mergeSecurityHeaders'
  | 'pluginCreator___pluginOptions___mergeLinkHeaders'
  | 'pluginCreator___pluginOptions___mergeCachingHeaders'
  | 'pluginCreator___pluginOptions___generateMatchPathRewrites'
  | 'pluginCreator___pluginOptions___packageName'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'fields___slug';

export type SitePageFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageFieldsFilterInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___environment'
  | 'pluginOptions___fileName'
  | 'pluginOptions___tsLoader___configFile'
  | 'pluginOptions___tsLoader___logLevel'
  | 'pluginOptions___tsLoader___transpileOnly'
  | 'pluginOptions___tsLoader___projectReferences'
  | 'pluginOptions___typeCheck'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___path'
  | 'pluginOptions___ignore'
  | 'pluginOptions___name'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___extensions'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___output'
  | 'pluginOptions___host'
  | 'pluginOptions___sitemap'
  | 'pluginOptions___env___local___policy'
  | 'pluginOptions___env___dev___policy'
  | 'pluginOptions___env___staging___policy'
  | 'pluginOptions___env___production___policy'
  | 'pluginOptions___headers____x'
  | 'pluginOptions___mergeSecurityHeaders'
  | 'pluginOptions___mergeLinkHeaders'
  | 'pluginOptions___mergeCachingHeaders'
  | 'pluginOptions___generateMatchPathRewrites'
  | 'pluginOptions___packageName'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  tsLoader?: Maybe<SitePluginPluginOptionsTsLoader>;
  typeCheck?: Maybe<Scalars['Boolean']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  ignore?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  sitemap?: Maybe<Scalars['String']>;
  env?: Maybe<SitePluginPluginOptionsEnv>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>;
  mergeLinkHeaders?: Maybe<Scalars['Boolean']>;
  mergeCachingHeaders?: Maybe<Scalars['Boolean']>;
  generateMatchPathRewrites?: Maybe<Scalars['Boolean']>;
  packageName?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsEnv = {
  local?: Maybe<SitePluginPluginOptionsEnvLocal>;
  dev?: Maybe<SitePluginPluginOptionsEnvDev>;
  staging?: Maybe<SitePluginPluginOptionsEnvStaging>;
  production?: Maybe<SitePluginPluginOptionsEnvProduction>;
};

export type SitePluginPluginOptionsEnvDev = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDevPolicy>>>;
};

export type SitePluginPluginOptionsEnvDevFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvDevPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvDevPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvDevPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvDevPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDevPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvFilterInput = {
  local?: Maybe<SitePluginPluginOptionsEnvLocalFilterInput>;
  dev?: Maybe<SitePluginPluginOptionsEnvDevFilterInput>;
  staging?: Maybe<SitePluginPluginOptionsEnvStagingFilterInput>;
  production?: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>;
};

export type SitePluginPluginOptionsEnvLocal = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvLocalPolicy>>>;
};

export type SitePluginPluginOptionsEnvLocalFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvLocalPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvLocalPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvLocalPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvLocalPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvLocalPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvProduction = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>;
};

export type SitePluginPluginOptionsEnvProductionFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvStaging = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvStagingPolicy>>>;
};

export type SitePluginPluginOptionsEnvStagingFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvStagingPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvStagingPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvStagingPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvStagingPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvStagingPolicyFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  tsLoader?: Maybe<SitePluginPluginOptionsTsLoaderFilterInput>;
  typeCheck?: Maybe<BooleanQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  ignore?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  sitemap?: Maybe<StringQueryOperatorInput>;
  env?: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeLinkHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeCachingHeaders?: Maybe<BooleanQueryOperatorInput>;
  generateMatchPathRewrites?: Maybe<BooleanQueryOperatorInput>;
  packageName?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsTsLoader = {
  configFile?: Maybe<Scalars['String']>;
  logLevel?: Maybe<Scalars['String']>;
  transpileOnly?: Maybe<Scalars['Boolean']>;
  projectReferences?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsTsLoaderFilterInput = {
  configFile?: Maybe<StringQueryOperatorInput>;
  logLevel?: Maybe<StringQueryOperatorInput>;
  transpileOnly?: Maybe<BooleanQueryOperatorInput>;
  projectReferences?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  siteEnv?: Maybe<Scalars['String']>;
  languages?: Maybe<SiteSiteMetadataLanguages>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  siteEnv?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<SiteSiteMetadataLanguagesFilterInput>;
};

export type SiteSiteMetadataLanguages = {
  langs?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLangKey?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataLanguagesFilterInput = {
  langs?: Maybe<StringQueryOperatorInput>;
  defaultLangKey?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type MarkdownTemplateQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type MarkdownTemplateQuery = { mdx?: Maybe<(
    Pick<Mdx, 'slug' | 'excerpt' | 'timeToRead' | 'tableOfContents' | 'body'>
    & { frontmatter?: Maybe<Pick<MdxFrontmatter, 'title' | 'name' | 'tags'>>, headings?: Maybe<Array<Maybe<Pick<MdxHeadingMdx, 'value' | 'depth'>>>> }
  )> };

export type GatsbyNodeAllSiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyNodeAllSiteQuery = { site?: Maybe<{ siteMetadata?: Maybe<GatsbyNodeSiteMetadataFragment> }> };

export type GatsbyNodeSiteMetadataFragment = (
  Pick<SiteSiteMetadata, 'title' | 'description' | 'siteEnv' | 'siteUrl'>
  & { languages?: Maybe<Pick<SiteSiteMetadataLanguages, 'langs' | 'defaultLangKey'>> }
);

export type GatsbyNodePagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyNodePagesQuery = { allContentfulPage: { edges: Array<{ node: Pick<ContentfulPage, 'node_locale' | 'id' | 'name' | 'slug'> }> } };
