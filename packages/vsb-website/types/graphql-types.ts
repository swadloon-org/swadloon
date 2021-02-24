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
  | 'message___childMdx___frontmatter___layout'
  | 'message___childMdx___frontmatter___template'
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
  | 'childContentfulAnnouncementMessageTextNode___childMdx___frontmatter___layout'
  | 'childContentfulAnnouncementMessageTextNode___childMdx___frontmatter___template'
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
  message?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnnouncementSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAnnouncementMessageTextNode?: Maybe<ContentfulAnnouncementMessageTextNodeFilterInput>;
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
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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
  localFile?: Maybe<File>;
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
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImage___imageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'localFile___childMdx___rawBody'
  | 'localFile___childMdx___fileAbsolutePath'
  | 'localFile___childMdx___frontmatter___title'
  | 'localFile___childMdx___frontmatter___name'
  | 'localFile___childMdx___frontmatter___layout'
  | 'localFile___childMdx___frontmatter___template'
  | 'localFile___childMdx___frontmatter___tags'
  | 'localFile___childMdx___slug'
  | 'localFile___childMdx___body'
  | 'localFile___childMdx___excerpt'
  | 'localFile___childMdx___headings'
  | 'localFile___childMdx___headings___value'
  | 'localFile___childMdx___headings___depth'
  | 'localFile___childMdx___html'
  | 'localFile___childMdx___mdxAST'
  | 'localFile___childMdx___tableOfContents'
  | 'localFile___childMdx___timeToRead'
  | 'localFile___childMdx___wordCount___paragraphs'
  | 'localFile___childMdx___wordCount___sentences'
  | 'localFile___childMdx___wordCount___words'
  | 'localFile___childMdx___id'
  | 'localFile___childMdx___parent___id'
  | 'localFile___childMdx___parent___children'
  | 'localFile___childMdx___children'
  | 'localFile___childMdx___children___id'
  | 'localFile___childMdx___children___children'
  | 'localFile___childMdx___internal___content'
  | 'localFile___childMdx___internal___contentDigest'
  | 'localFile___childMdx___internal___description'
  | 'localFile___childMdx___internal___fieldOwners'
  | 'localFile___childMdx___internal___ignoreType'
  | 'localFile___childMdx___internal___mediaType'
  | 'localFile___childMdx___internal___owner'
  | 'localFile___childMdx___internal___type'
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
  localFile?: Maybe<FileFilterInput>;
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

export type ContentfulBlock = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  text?: Maybe<ContentfulBlockTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockSys>;
  node_locale?: Maybe<Scalars['String']>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  medias?: Maybe<Array<Maybe<ContentfulMediaCollection>>>;
  link?: Maybe<ContentfulLink>;
  childContentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNode>;
};


export type ContentfulBlockCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockEdge>;
  nodes: Array<ContentfulBlock>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockGroupConnection>;
};


export type ContentfulBlockConnectionDistinctArgs = {
  field: ContentfulBlockFieldsEnum;
};


export type ContentfulBlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFieldsEnum;
};

export type ContentfulBlockContentfulBlockCostItemUnion = ContentfulBlock | ContentfulBlockCostItem;

export type ContentfulBlockCostItem = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockCostItemSys>;
  node_locale?: Maybe<Scalars['String']>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
};


export type ContentfulBlockCostItemCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockCostItemUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCostItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockCostItemEdge>;
  nodes: Array<ContentfulBlockCostItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockCostItemGroupConnection>;
};


export type ContentfulBlockCostItemConnectionDistinctArgs = {
  field: ContentfulBlockCostItemFieldsEnum;
};


export type ContentfulBlockCostItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockCostItemFieldsEnum;
};

export type ContentfulBlockCostItemEdge = {
  next?: Maybe<ContentfulBlockCostItem>;
  node: ContentfulBlockCostItem;
  previous?: Maybe<ContentfulBlockCostItem>;
};

export type ContentfulBlockCostItemFieldsEnum = 
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
  | 'section___layout'
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
  | 'section___page___sections'
  | 'section___page___sections___id'
  | 'section___page___sections___children'
  | 'section___page___sections___name'
  | 'section___page___sections___layout'
  | 'section___page___sections___page'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___variant'
  | 'section___page___link'
  | 'section___page___link___id'
  | 'section___page___link___children'
  | 'section___page___link___type'
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___navigation'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___link___block'
  | 'section___page___link___url'
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
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant';

export type ContentfulBlockCostItemFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockCostItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
};

export type ContentfulBlockCostItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockCostItemEdge>;
  nodes: Array<ContentfulBlockCostItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCostItemSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockCostItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockCostItemSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockCostItemSysContentType>;
};

export type ContentfulBlockCostItemSysContentType = {
  sys?: Maybe<ContentfulBlockCostItemSysContentTypeSys>;
};

export type ContentfulBlockCostItemSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockCostItemSysContentTypeSysFilterInput>;
};

export type ContentfulBlockCostItemSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCostItemSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCostItemSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockCostItemSysContentTypeFilterInput>;
};

export type ContentfulBlockEdge = {
  next?: Maybe<ContentfulBlock>;
  node: ContentfulBlock;
  previous?: Maybe<ContentfulBlock>;
};

export type ContentfulBlockFieldsEnum = 
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
  | 'variant'
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
  | 'text___childMdx___frontmatter___layout'
  | 'text___childMdx___frontmatter___template'
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
  | 'section___layout'
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
  | 'section___page___sections'
  | 'section___page___sections___id'
  | 'section___page___sections___children'
  | 'section___page___sections___name'
  | 'section___page___sections___layout'
  | 'section___page___sections___page'
  | 'section___page___sections___spaceId'
  | 'section___page___sections___contentful_id'
  | 'section___page___sections___createdAt'
  | 'section___page___sections___updatedAt'
  | 'section___page___sections___node_locale'
  | 'section___page___sections___variant'
  | 'section___page___link'
  | 'section___page___link___id'
  | 'section___page___link___children'
  | 'section___page___link___type'
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___navigation'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___link___block'
  | 'section___page___link___url'
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
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
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
  | 'medias___name'
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
  | 'medias___medias___localFile___sourceInstanceName'
  | 'medias___medias___localFile___absolutePath'
  | 'medias___medias___localFile___relativePath'
  | 'medias___medias___localFile___extension'
  | 'medias___medias___localFile___size'
  | 'medias___medias___localFile___prettySize'
  | 'medias___medias___localFile___modifiedTime'
  | 'medias___medias___localFile___accessTime'
  | 'medias___medias___localFile___changeTime'
  | 'medias___medias___localFile___birthTime'
  | 'medias___medias___localFile___root'
  | 'medias___medias___localFile___dir'
  | 'medias___medias___localFile___base'
  | 'medias___medias___localFile___ext'
  | 'medias___medias___localFile___name'
  | 'medias___medias___localFile___relativeDirectory'
  | 'medias___medias___localFile___dev'
  | 'medias___medias___localFile___mode'
  | 'medias___medias___localFile___nlink'
  | 'medias___medias___localFile___uid'
  | 'medias___medias___localFile___gid'
  | 'medias___medias___localFile___rdev'
  | 'medias___medias___localFile___ino'
  | 'medias___medias___localFile___atimeMs'
  | 'medias___medias___localFile___mtimeMs'
  | 'medias___medias___localFile___ctimeMs'
  | 'medias___medias___localFile___atime'
  | 'medias___medias___localFile___mtime'
  | 'medias___medias___localFile___ctime'
  | 'medias___medias___localFile___birthtime'
  | 'medias___medias___localFile___birthtimeMs'
  | 'medias___medias___localFile___blksize'
  | 'medias___medias___localFile___blocks'
  | 'medias___medias___localFile___url'
  | 'medias___medias___localFile___publicURL'
  | 'medias___medias___localFile___id'
  | 'medias___medias___localFile___children'
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
  | 'medias___block'
  | 'medias___block___id'
  | 'medias___block___parent___id'
  | 'medias___block___parent___children'
  | 'medias___block___children'
  | 'medias___block___children___id'
  | 'medias___block___children___children'
  | 'medias___block___internal___content'
  | 'medias___block___internal___contentDigest'
  | 'medias___block___internal___description'
  | 'medias___block___internal___fieldOwners'
  | 'medias___block___internal___ignoreType'
  | 'medias___block___internal___mediaType'
  | 'medias___block___internal___owner'
  | 'medias___block___internal___type'
  | 'medias___block___name'
  | 'medias___block___variant'
  | 'medias___block___text___id'
  | 'medias___block___text___children'
  | 'medias___block___text___text'
  | 'medias___block___spaceId'
  | 'medias___block___contentful_id'
  | 'medias___block___createdAt'
  | 'medias___block___updatedAt'
  | 'medias___block___sys___type'
  | 'medias___block___sys___revision'
  | 'medias___block___node_locale'
  | 'medias___block___section'
  | 'medias___block___section___id'
  | 'medias___block___section___children'
  | 'medias___block___section___name'
  | 'medias___block___section___layout'
  | 'medias___block___section___page'
  | 'medias___block___section___spaceId'
  | 'medias___block___section___contentful_id'
  | 'medias___block___section___createdAt'
  | 'medias___block___section___updatedAt'
  | 'medias___block___section___node_locale'
  | 'medias___block___section___variant'
  | 'medias___block___medias'
  | 'medias___block___medias___id'
  | 'medias___block___medias___children'
  | 'medias___block___medias___name'
  | 'medias___block___medias___medias'
  | 'medias___block___medias___block'
  | 'medias___block___medias___spaceId'
  | 'medias___block___medias___contentful_id'
  | 'medias___block___medias___createdAt'
  | 'medias___block___medias___updatedAt'
  | 'medias___block___medias___node_locale'
  | 'medias___block___medias___carouselStyle'
  | 'medias___block___medias___size'
  | 'medias___block___medias___variant'
  | 'medias___block___link___id'
  | 'medias___block___link___children'
  | 'medias___block___link___type'
  | 'medias___block___link___name'
  | 'medias___block___link___label'
  | 'medias___block___link___navigation'
  | 'medias___block___link___spaceId'
  | 'medias___block___link___contentful_id'
  | 'medias___block___link___createdAt'
  | 'medias___block___link___updatedAt'
  | 'medias___block___link___node_locale'
  | 'medias___block___link___block'
  | 'medias___block___link___url'
  | 'medias___block___childContentfulBlockTextTextNode___id'
  | 'medias___block___childContentfulBlockTextTextNode___children'
  | 'medias___block___childContentfulBlockTextTextNode___text'
  | 'medias___spaceId'
  | 'medias___contentful_id'
  | 'medias___createdAt'
  | 'medias___updatedAt'
  | 'medias___sys___type'
  | 'medias___sys___revision'
  | 'medias___node_locale'
  | 'medias___carouselStyle'
  | 'medias___size'
  | 'medias___variant'
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
  | 'link___page___sections'
  | 'link___page___sections___id'
  | 'link___page___sections___children'
  | 'link___page___sections___name'
  | 'link___page___sections___layout'
  | 'link___page___sections___page'
  | 'link___page___sections___spaceId'
  | 'link___page___sections___contentful_id'
  | 'link___page___sections___createdAt'
  | 'link___page___sections___updatedAt'
  | 'link___page___sections___node_locale'
  | 'link___page___sections___variant'
  | 'link___page___link'
  | 'link___page___link___id'
  | 'link___page___link___children'
  | 'link___page___link___type'
  | 'link___page___link___name'
  | 'link___page___link___label'
  | 'link___page___link___navigation'
  | 'link___page___link___spaceId'
  | 'link___page___link___contentful_id'
  | 'link___page___link___createdAt'
  | 'link___page___link___updatedAt'
  | 'link___page___link___node_locale'
  | 'link___page___link___block'
  | 'link___page___link___url'
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
  | 'link___page___childContentfulPageDescriptionTextNode___id'
  | 'link___page___childContentfulPageDescriptionTextNode___children'
  | 'link___page___childContentfulPageDescriptionTextNode___description'
  | 'link___navigation'
  | 'link___navigation___id'
  | 'link___navigation___parent___id'
  | 'link___navigation___parent___children'
  | 'link___navigation___children'
  | 'link___navigation___children___id'
  | 'link___navigation___children___children'
  | 'link___navigation___internal___content'
  | 'link___navigation___internal___contentDigest'
  | 'link___navigation___internal___description'
  | 'link___navigation___internal___fieldOwners'
  | 'link___navigation___internal___ignoreType'
  | 'link___navigation___internal___mediaType'
  | 'link___navigation___internal___owner'
  | 'link___navigation___internal___type'
  | 'link___navigation___name'
  | 'link___navigation___links'
  | 'link___navigation___links___id'
  | 'link___navigation___links___children'
  | 'link___navigation___links___type'
  | 'link___navigation___links___name'
  | 'link___navigation___links___label'
  | 'link___navigation___links___navigation'
  | 'link___navigation___links___spaceId'
  | 'link___navigation___links___contentful_id'
  | 'link___navigation___links___createdAt'
  | 'link___navigation___links___updatedAt'
  | 'link___navigation___links___node_locale'
  | 'link___navigation___links___block'
  | 'link___navigation___links___url'
  | 'link___navigation___spaceId'
  | 'link___navigation___contentful_id'
  | 'link___navigation___createdAt'
  | 'link___navigation___updatedAt'
  | 'link___navigation___sys___type'
  | 'link___navigation___sys___revision'
  | 'link___navigation___node_locale'
  | 'link___navigation___navigation'
  | 'link___navigation___navigation___id'
  | 'link___navigation___navigation___children'
  | 'link___navigation___navigation___name'
  | 'link___navigation___navigation___links'
  | 'link___navigation___navigation___spaceId'
  | 'link___navigation___navigation___contentful_id'
  | 'link___navigation___navigation___createdAt'
  | 'link___navigation___navigation___updatedAt'
  | 'link___navigation___navigation___node_locale'
  | 'link___navigation___navigation___navigation'
  | 'link___navigation___navigation___subNavigation'
  | 'link___navigation___subNavigation'
  | 'link___navigation___subNavigation___id'
  | 'link___navigation___subNavigation___children'
  | 'link___navigation___subNavigation___name'
  | 'link___navigation___subNavigation___links'
  | 'link___navigation___subNavigation___spaceId'
  | 'link___navigation___subNavigation___contentful_id'
  | 'link___navigation___subNavigation___createdAt'
  | 'link___navigation___subNavigation___updatedAt'
  | 'link___navigation___subNavigation___node_locale'
  | 'link___navigation___subNavigation___navigation'
  | 'link___navigation___subNavigation___subNavigation'
  | 'link___spaceId'
  | 'link___contentful_id'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___node_locale'
  | 'link___block'
  | 'link___block___id'
  | 'link___block___parent___id'
  | 'link___block___parent___children'
  | 'link___block___children'
  | 'link___block___children___id'
  | 'link___block___children___children'
  | 'link___block___internal___content'
  | 'link___block___internal___contentDigest'
  | 'link___block___internal___description'
  | 'link___block___internal___fieldOwners'
  | 'link___block___internal___ignoreType'
  | 'link___block___internal___mediaType'
  | 'link___block___internal___owner'
  | 'link___block___internal___type'
  | 'link___block___name'
  | 'link___block___variant'
  | 'link___block___text___id'
  | 'link___block___text___children'
  | 'link___block___text___text'
  | 'link___block___spaceId'
  | 'link___block___contentful_id'
  | 'link___block___createdAt'
  | 'link___block___updatedAt'
  | 'link___block___sys___type'
  | 'link___block___sys___revision'
  | 'link___block___node_locale'
  | 'link___block___section'
  | 'link___block___section___id'
  | 'link___block___section___children'
  | 'link___block___section___name'
  | 'link___block___section___layout'
  | 'link___block___section___page'
  | 'link___block___section___spaceId'
  | 'link___block___section___contentful_id'
  | 'link___block___section___createdAt'
  | 'link___block___section___updatedAt'
  | 'link___block___section___node_locale'
  | 'link___block___section___variant'
  | 'link___block___medias'
  | 'link___block___medias___id'
  | 'link___block___medias___children'
  | 'link___block___medias___name'
  | 'link___block___medias___medias'
  | 'link___block___medias___block'
  | 'link___block___medias___spaceId'
  | 'link___block___medias___contentful_id'
  | 'link___block___medias___createdAt'
  | 'link___block___medias___updatedAt'
  | 'link___block___medias___node_locale'
  | 'link___block___medias___carouselStyle'
  | 'link___block___medias___size'
  | 'link___block___medias___variant'
  | 'link___block___link___id'
  | 'link___block___link___children'
  | 'link___block___link___type'
  | 'link___block___link___name'
  | 'link___block___link___label'
  | 'link___block___link___navigation'
  | 'link___block___link___spaceId'
  | 'link___block___link___contentful_id'
  | 'link___block___link___createdAt'
  | 'link___block___link___updatedAt'
  | 'link___block___link___node_locale'
  | 'link___block___link___block'
  | 'link___block___link___url'
  | 'link___block___childContentfulBlockTextTextNode___id'
  | 'link___block___childContentfulBlockTextTextNode___children'
  | 'link___block___childContentfulBlockTextTextNode___text'
  | 'link___url'
  | 'childContentfulBlockTextTextNode___id'
  | 'childContentfulBlockTextTextNode___parent___id'
  | 'childContentfulBlockTextTextNode___parent___parent___id'
  | 'childContentfulBlockTextTextNode___parent___parent___children'
  | 'childContentfulBlockTextTextNode___parent___children'
  | 'childContentfulBlockTextTextNode___parent___children___id'
  | 'childContentfulBlockTextTextNode___parent___children___children'
  | 'childContentfulBlockTextTextNode___parent___internal___content'
  | 'childContentfulBlockTextTextNode___parent___internal___contentDigest'
  | 'childContentfulBlockTextTextNode___parent___internal___description'
  | 'childContentfulBlockTextTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlockTextTextNode___parent___internal___ignoreType'
  | 'childContentfulBlockTextTextNode___parent___internal___mediaType'
  | 'childContentfulBlockTextTextNode___parent___internal___owner'
  | 'childContentfulBlockTextTextNode___parent___internal___type'
  | 'childContentfulBlockTextTextNode___children'
  | 'childContentfulBlockTextTextNode___children___id'
  | 'childContentfulBlockTextTextNode___children___parent___id'
  | 'childContentfulBlockTextTextNode___children___parent___children'
  | 'childContentfulBlockTextTextNode___children___children'
  | 'childContentfulBlockTextTextNode___children___children___id'
  | 'childContentfulBlockTextTextNode___children___children___children'
  | 'childContentfulBlockTextTextNode___children___internal___content'
  | 'childContentfulBlockTextTextNode___children___internal___contentDigest'
  | 'childContentfulBlockTextTextNode___children___internal___description'
  | 'childContentfulBlockTextTextNode___children___internal___fieldOwners'
  | 'childContentfulBlockTextTextNode___children___internal___ignoreType'
  | 'childContentfulBlockTextTextNode___children___internal___mediaType'
  | 'childContentfulBlockTextTextNode___children___internal___owner'
  | 'childContentfulBlockTextTextNode___children___internal___type'
  | 'childContentfulBlockTextTextNode___internal___content'
  | 'childContentfulBlockTextTextNode___internal___contentDigest'
  | 'childContentfulBlockTextTextNode___internal___description'
  | 'childContentfulBlockTextTextNode___internal___fieldOwners'
  | 'childContentfulBlockTextTextNode___internal___ignoreType'
  | 'childContentfulBlockTextTextNode___internal___mediaType'
  | 'childContentfulBlockTextTextNode___internal___owner'
  | 'childContentfulBlockTextTextNode___internal___type'
  | 'childContentfulBlockTextTextNode___text'
  | 'childContentfulBlockTextTextNode___sys___type'
  | 'childContentfulBlockTextTextNode___childMdx___rawBody'
  | 'childContentfulBlockTextTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___title'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___name'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___layout'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___template'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___tags'
  | 'childContentfulBlockTextTextNode___childMdx___slug'
  | 'childContentfulBlockTextTextNode___childMdx___body'
  | 'childContentfulBlockTextTextNode___childMdx___excerpt'
  | 'childContentfulBlockTextTextNode___childMdx___headings'
  | 'childContentfulBlockTextTextNode___childMdx___headings___value'
  | 'childContentfulBlockTextTextNode___childMdx___headings___depth'
  | 'childContentfulBlockTextTextNode___childMdx___html'
  | 'childContentfulBlockTextTextNode___childMdx___mdxAST'
  | 'childContentfulBlockTextTextNode___childMdx___tableOfContents'
  | 'childContentfulBlockTextTextNode___childMdx___timeToRead'
  | 'childContentfulBlockTextTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulBlockTextTextNode___childMdx___wordCount___sentences'
  | 'childContentfulBlockTextTextNode___childMdx___wordCount___words'
  | 'childContentfulBlockTextTextNode___childMdx___id'
  | 'childContentfulBlockTextTextNode___childMdx___parent___id'
  | 'childContentfulBlockTextTextNode___childMdx___parent___children'
  | 'childContentfulBlockTextTextNode___childMdx___children'
  | 'childContentfulBlockTextTextNode___childMdx___children___id'
  | 'childContentfulBlockTextTextNode___childMdx___children___children'
  | 'childContentfulBlockTextTextNode___childMdx___internal___content'
  | 'childContentfulBlockTextTextNode___childMdx___internal___contentDigest'
  | 'childContentfulBlockTextTextNode___childMdx___internal___description'
  | 'childContentfulBlockTextTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulBlockTextTextNode___childMdx___internal___ignoreType'
  | 'childContentfulBlockTextTextNode___childMdx___internal___mediaType'
  | 'childContentfulBlockTextTextNode___childMdx___internal___owner'
  | 'childContentfulBlockTextTextNode___childMdx___internal___type';

export type ContentfulBlockFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  medias?: Maybe<ContentfulMediaCollectionFilterListInput>;
  link?: Maybe<ContentfulLinkFilterInput>;
  childContentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
};

export type ContentfulBlockFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockFilterInput>;
};

export type ContentfulBlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockEdge>;
  nodes: Array<ContentfulBlock>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockStep = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<ContentfulBlockStepTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockStepSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlockStepTextTextNode?: Maybe<ContentfulBlockStepTextTextNode>;
};


export type ContentfulBlockStepCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockStepUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockStepConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockStepEdge>;
  nodes: Array<ContentfulBlockStep>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockStepGroupConnection>;
};


export type ContentfulBlockStepConnectionDistinctArgs = {
  field: ContentfulBlockStepFieldsEnum;
};


export type ContentfulBlockStepConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockStepFieldsEnum;
};

export type ContentfulBlockStepEdge = {
  next?: Maybe<ContentfulBlockStep>;
  node: ContentfulBlockStep;
  previous?: Maybe<ContentfulBlockStep>;
};

export type ContentfulBlockStepFieldsEnum = 
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
  | 'text___childMdx___frontmatter___layout'
  | 'text___childMdx___frontmatter___template'
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
  | 'childContentfulBlockStepTextTextNode___id'
  | 'childContentfulBlockStepTextTextNode___parent___id'
  | 'childContentfulBlockStepTextTextNode___parent___parent___id'
  | 'childContentfulBlockStepTextTextNode___parent___parent___children'
  | 'childContentfulBlockStepTextTextNode___parent___children'
  | 'childContentfulBlockStepTextTextNode___parent___children___id'
  | 'childContentfulBlockStepTextTextNode___parent___children___children'
  | 'childContentfulBlockStepTextTextNode___parent___internal___content'
  | 'childContentfulBlockStepTextTextNode___parent___internal___contentDigest'
  | 'childContentfulBlockStepTextTextNode___parent___internal___description'
  | 'childContentfulBlockStepTextTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlockStepTextTextNode___parent___internal___ignoreType'
  | 'childContentfulBlockStepTextTextNode___parent___internal___mediaType'
  | 'childContentfulBlockStepTextTextNode___parent___internal___owner'
  | 'childContentfulBlockStepTextTextNode___parent___internal___type'
  | 'childContentfulBlockStepTextTextNode___children'
  | 'childContentfulBlockStepTextTextNode___children___id'
  | 'childContentfulBlockStepTextTextNode___children___parent___id'
  | 'childContentfulBlockStepTextTextNode___children___parent___children'
  | 'childContentfulBlockStepTextTextNode___children___children'
  | 'childContentfulBlockStepTextTextNode___children___children___id'
  | 'childContentfulBlockStepTextTextNode___children___children___children'
  | 'childContentfulBlockStepTextTextNode___children___internal___content'
  | 'childContentfulBlockStepTextTextNode___children___internal___contentDigest'
  | 'childContentfulBlockStepTextTextNode___children___internal___description'
  | 'childContentfulBlockStepTextTextNode___children___internal___fieldOwners'
  | 'childContentfulBlockStepTextTextNode___children___internal___ignoreType'
  | 'childContentfulBlockStepTextTextNode___children___internal___mediaType'
  | 'childContentfulBlockStepTextTextNode___children___internal___owner'
  | 'childContentfulBlockStepTextTextNode___children___internal___type'
  | 'childContentfulBlockStepTextTextNode___internal___content'
  | 'childContentfulBlockStepTextTextNode___internal___contentDigest'
  | 'childContentfulBlockStepTextTextNode___internal___description'
  | 'childContentfulBlockStepTextTextNode___internal___fieldOwners'
  | 'childContentfulBlockStepTextTextNode___internal___ignoreType'
  | 'childContentfulBlockStepTextTextNode___internal___mediaType'
  | 'childContentfulBlockStepTextTextNode___internal___owner'
  | 'childContentfulBlockStepTextTextNode___internal___type'
  | 'childContentfulBlockStepTextTextNode___text'
  | 'childContentfulBlockStepTextTextNode___sys___type'
  | 'childContentfulBlockStepTextTextNode___childMdx___rawBody'
  | 'childContentfulBlockStepTextTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulBlockStepTextTextNode___childMdx___frontmatter___title'
  | 'childContentfulBlockStepTextTextNode___childMdx___frontmatter___name'
  | 'childContentfulBlockStepTextTextNode___childMdx___frontmatter___layout'
  | 'childContentfulBlockStepTextTextNode___childMdx___frontmatter___template'
  | 'childContentfulBlockStepTextTextNode___childMdx___frontmatter___tags'
  | 'childContentfulBlockStepTextTextNode___childMdx___slug'
  | 'childContentfulBlockStepTextTextNode___childMdx___body'
  | 'childContentfulBlockStepTextTextNode___childMdx___excerpt'
  | 'childContentfulBlockStepTextTextNode___childMdx___headings'
  | 'childContentfulBlockStepTextTextNode___childMdx___headings___value'
  | 'childContentfulBlockStepTextTextNode___childMdx___headings___depth'
  | 'childContentfulBlockStepTextTextNode___childMdx___html'
  | 'childContentfulBlockStepTextTextNode___childMdx___mdxAST'
  | 'childContentfulBlockStepTextTextNode___childMdx___tableOfContents'
  | 'childContentfulBlockStepTextTextNode___childMdx___timeToRead'
  | 'childContentfulBlockStepTextTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulBlockStepTextTextNode___childMdx___wordCount___sentences'
  | 'childContentfulBlockStepTextTextNode___childMdx___wordCount___words'
  | 'childContentfulBlockStepTextTextNode___childMdx___id'
  | 'childContentfulBlockStepTextTextNode___childMdx___parent___id'
  | 'childContentfulBlockStepTextTextNode___childMdx___parent___children'
  | 'childContentfulBlockStepTextTextNode___childMdx___children'
  | 'childContentfulBlockStepTextTextNode___childMdx___children___id'
  | 'childContentfulBlockStepTextTextNode___childMdx___children___children'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___content'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___contentDigest'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___description'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___ignoreType'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___mediaType'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___owner'
  | 'childContentfulBlockStepTextTextNode___childMdx___internal___type';

export type ContentfulBlockStepFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulBlockStepTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockStepSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlockStepTextTextNode?: Maybe<ContentfulBlockStepTextTextNodeFilterInput>;
};

export type ContentfulBlockStepGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockStepEdge>;
  nodes: Array<ContentfulBlockStep>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockStepSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockStepFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockStepSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockStepSysContentType>;
};

export type ContentfulBlockStepSysContentType = {
  sys?: Maybe<ContentfulBlockStepSysContentTypeSys>;
};

export type ContentfulBlockStepSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockStepSysContentTypeSysFilterInput>;
};

export type ContentfulBlockStepSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockStepSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockStepSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockStepSysContentTypeFilterInput>;
};

export type ContentfulBlockStepTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlockStepTextTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulBlockStepTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockStepTextTextNodeEdge>;
  nodes: Array<ContentfulBlockStepTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockStepTextTextNodeGroupConnection>;
};


export type ContentfulBlockStepTextTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockStepTextTextNodeFieldsEnum;
};


export type ContentfulBlockStepTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockStepTextTextNodeFieldsEnum;
};

export type ContentfulBlockStepTextTextNodeEdge = {
  next?: Maybe<ContentfulBlockStepTextTextNode>;
  node: ContentfulBlockStepTextTextNode;
  previous?: Maybe<ContentfulBlockStepTextTextNode>;
};

export type ContentfulBlockStepTextTextNodeFieldsEnum = 
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
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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

export type ContentfulBlockStepTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockStepTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulBlockStepTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockStepTextTextNodeEdge>;
  nodes: Array<ContentfulBlockStepTextTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockStepTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockStepTextTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockStepTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockStepTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockSysContentType>;
};

export type ContentfulBlockSysContentType = {
  sys?: Maybe<ContentfulBlockSysContentTypeSys>;
};

export type ContentfulBlockSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockSysContentTypeSysFilterInput>;
};

export type ContentfulBlockSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockSysContentTypeFilterInput>;
};

export type ContentfulBlockTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlockTextTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulBlockTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockTextTextNodeEdge>;
  nodes: Array<ContentfulBlockTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockTextTextNodeGroupConnection>;
};


export type ContentfulBlockTextTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockTextTextNodeFieldsEnum;
};


export type ContentfulBlockTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockTextTextNodeFieldsEnum;
};

export type ContentfulBlockTextTextNodeEdge = {
  next?: Maybe<ContentfulBlockTextTextNode>;
  node: ContentfulBlockTextTextNode;
  previous?: Maybe<ContentfulBlockTextTextNode>;
};

export type ContentfulBlockTextTextNodeFieldsEnum = 
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
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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

export type ContentfulBlockTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulBlockTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockTextTextNodeEdge>;
  nodes: Array<ContentfulBlockTextTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockTextTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  blogSlug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  blogExcerpt?: Maybe<ContentfulBlogPostBlogExcerptTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlogPostBlogExcerptTextNode?: Maybe<ContentfulBlogPostBlogExcerptTextNode>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBlogExcerptTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  blogExcerpt?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogPostBlogExcerptTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulBlogPostBlogExcerptTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBlogExcerptTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBlogExcerptTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBlogExcerptTextNodeGroupConnection>;
};


export type ContentfulBlogPostBlogExcerptTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBlogExcerptTextNodeFieldsEnum;
};


export type ContentfulBlogPostBlogExcerptTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBlogExcerptTextNodeFieldsEnum;
};

export type ContentfulBlogPostBlogExcerptTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBlogExcerptTextNode>;
  node: ContentfulBlogPostBlogExcerptTextNode;
  previous?: Maybe<ContentfulBlogPostBlogExcerptTextNode>;
};

export type ContentfulBlogPostBlogExcerptTextNodeFieldsEnum = 
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
  | 'blogExcerpt'
  | 'sys___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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

export type ContentfulBlogPostBlogExcerptTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  blogExcerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostBlogExcerptTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulBlogPostBlogExcerptTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBlogExcerptTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBlogExcerptTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBlogExcerptTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBlogExcerptTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostBlogExcerptTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBlogExcerptTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum = 
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
  | 'blogSlug'
  | 'subtitle'
  | 'blogExcerpt___id'
  | 'blogExcerpt___parent___id'
  | 'blogExcerpt___parent___parent___id'
  | 'blogExcerpt___parent___parent___children'
  | 'blogExcerpt___parent___children'
  | 'blogExcerpt___parent___children___id'
  | 'blogExcerpt___parent___children___children'
  | 'blogExcerpt___parent___internal___content'
  | 'blogExcerpt___parent___internal___contentDigest'
  | 'blogExcerpt___parent___internal___description'
  | 'blogExcerpt___parent___internal___fieldOwners'
  | 'blogExcerpt___parent___internal___ignoreType'
  | 'blogExcerpt___parent___internal___mediaType'
  | 'blogExcerpt___parent___internal___owner'
  | 'blogExcerpt___parent___internal___type'
  | 'blogExcerpt___children'
  | 'blogExcerpt___children___id'
  | 'blogExcerpt___children___parent___id'
  | 'blogExcerpt___children___parent___children'
  | 'blogExcerpt___children___children'
  | 'blogExcerpt___children___children___id'
  | 'blogExcerpt___children___children___children'
  | 'blogExcerpt___children___internal___content'
  | 'blogExcerpt___children___internal___contentDigest'
  | 'blogExcerpt___children___internal___description'
  | 'blogExcerpt___children___internal___fieldOwners'
  | 'blogExcerpt___children___internal___ignoreType'
  | 'blogExcerpt___children___internal___mediaType'
  | 'blogExcerpt___children___internal___owner'
  | 'blogExcerpt___children___internal___type'
  | 'blogExcerpt___internal___content'
  | 'blogExcerpt___internal___contentDigest'
  | 'blogExcerpt___internal___description'
  | 'blogExcerpt___internal___fieldOwners'
  | 'blogExcerpt___internal___ignoreType'
  | 'blogExcerpt___internal___mediaType'
  | 'blogExcerpt___internal___owner'
  | 'blogExcerpt___internal___type'
  | 'blogExcerpt___blogExcerpt'
  | 'blogExcerpt___sys___type'
  | 'blogExcerpt___childMdx___rawBody'
  | 'blogExcerpt___childMdx___fileAbsolutePath'
  | 'blogExcerpt___childMdx___frontmatter___title'
  | 'blogExcerpt___childMdx___frontmatter___name'
  | 'blogExcerpt___childMdx___frontmatter___layout'
  | 'blogExcerpt___childMdx___frontmatter___template'
  | 'blogExcerpt___childMdx___frontmatter___tags'
  | 'blogExcerpt___childMdx___slug'
  | 'blogExcerpt___childMdx___body'
  | 'blogExcerpt___childMdx___excerpt'
  | 'blogExcerpt___childMdx___headings'
  | 'blogExcerpt___childMdx___headings___value'
  | 'blogExcerpt___childMdx___headings___depth'
  | 'blogExcerpt___childMdx___html'
  | 'blogExcerpt___childMdx___mdxAST'
  | 'blogExcerpt___childMdx___tableOfContents'
  | 'blogExcerpt___childMdx___timeToRead'
  | 'blogExcerpt___childMdx___wordCount___paragraphs'
  | 'blogExcerpt___childMdx___wordCount___sentences'
  | 'blogExcerpt___childMdx___wordCount___words'
  | 'blogExcerpt___childMdx___id'
  | 'blogExcerpt___childMdx___parent___id'
  | 'blogExcerpt___childMdx___parent___children'
  | 'blogExcerpt___childMdx___children'
  | 'blogExcerpt___childMdx___children___id'
  | 'blogExcerpt___childMdx___children___children'
  | 'blogExcerpt___childMdx___internal___content'
  | 'blogExcerpt___childMdx___internal___contentDigest'
  | 'blogExcerpt___childMdx___internal___description'
  | 'blogExcerpt___childMdx___internal___fieldOwners'
  | 'blogExcerpt___childMdx___internal___ignoreType'
  | 'blogExcerpt___childMdx___internal___mediaType'
  | 'blogExcerpt___childMdx___internal___owner'
  | 'blogExcerpt___childMdx___internal___type'
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
  | 'childContentfulBlogPostBlogExcerptTextNode___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___parent___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___parent___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___children___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___children___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___content'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___description'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___owner'
  | 'childContentfulBlogPostBlogExcerptTextNode___parent___internal___type'
  | 'childContentfulBlogPostBlogExcerptTextNode___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___parent___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___parent___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___children___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___children___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___content'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___description'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___owner'
  | 'childContentfulBlogPostBlogExcerptTextNode___children___internal___type'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___content'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___contentDigest'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___description'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___ignoreType'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___mediaType'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___owner'
  | 'childContentfulBlogPostBlogExcerptTextNode___internal___type'
  | 'childContentfulBlogPostBlogExcerptTextNode___blogExcerpt'
  | 'childContentfulBlogPostBlogExcerptTextNode___sys___type'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___rawBody'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___frontmatter___title'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___frontmatter___name'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___frontmatter___layout'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___frontmatter___template'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___frontmatter___tags'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___slug'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___body'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___excerpt'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___headings'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___headings___value'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___headings___depth'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___html'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___mdxAST'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___tableOfContents'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___timeToRead'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___wordCount___sentences'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___wordCount___words'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___parent___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___parent___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___children___id'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___children___children'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___content'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___contentDigest'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___description'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___ignoreType'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___mediaType'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___owner'
  | 'childContentfulBlogPostBlogExcerptTextNode___childMdx___internal___type';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  blogSlug?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  blogExcerpt?: Maybe<ContentfulBlogPostBlogExcerptTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostBlogExcerptTextNode?: Maybe<ContentfulBlogPostBlogExcerptTextNodeFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulCompanyAddress = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
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
  | 'addressLine2'
  | 'city'
  | 'postalCode'
  | 'provinceState'
  | 'country'
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
  addressLine2?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  postalCode?: Maybe<StringQueryOperatorInput>;
  provinceState?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
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
  linkedinPageURL?: Maybe<Scalars['String']>;
  facebookPageURL?: Maybe<Scalars['String']>;
  instagramPageURL?: Maybe<Scalars['String']>;
  twitterPageURL?: Maybe<Scalars['String']>;
  metadataTwitterSite?: Maybe<Scalars['String']>;
  metadataTwitterCreator?: Maybe<Scalars['String']>;
  metadataSiteName?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
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
  | 'linkedinPageURL'
  | 'facebookPageURL'
  | 'instagramPageURL'
  | 'twitterPageURL'
  | 'metadataTwitterSite'
  | 'metadataTwitterCreator'
  | 'metadataSiteName'
  | 'copyright'
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
  linkedinPageURL?: Maybe<StringQueryOperatorInput>;
  facebookPageURL?: Maybe<StringQueryOperatorInput>;
  instagramPageURL?: Maybe<StringQueryOperatorInput>;
  twitterPageURL?: Maybe<StringQueryOperatorInput>;
  metadataTwitterSite?: Maybe<StringQueryOperatorInput>;
  metadataTwitterCreator?: Maybe<StringQueryOperatorInput>;
  metadataSiteName?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
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
  navigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLinkSys>;
  node_locale?: Maybe<Scalars['String']>;
  block?: Maybe<Array<Maybe<ContentfulBlock>>>;
  url?: Maybe<Scalars['String']>;
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
  | 'page___sections___layout'
  | 'page___sections___page'
  | 'page___sections___page___id'
  | 'page___sections___page___children'
  | 'page___sections___page___name'
  | 'page___sections___page___title'
  | 'page___sections___page___slug'
  | 'page___sections___page___sections'
  | 'page___sections___page___link'
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
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
  | 'page___link___page___link'
  | 'page___link___page___spaceId'
  | 'page___link___page___contentful_id'
  | 'page___link___page___createdAt'
  | 'page___link___page___updatedAt'
  | 'page___link___page___node_locale'
  | 'page___link___navigation'
  | 'page___link___navigation___id'
  | 'page___link___navigation___children'
  | 'page___link___navigation___name'
  | 'page___link___navigation___links'
  | 'page___link___navigation___spaceId'
  | 'page___link___navigation___contentful_id'
  | 'page___link___navigation___createdAt'
  | 'page___link___navigation___updatedAt'
  | 'page___link___navigation___node_locale'
  | 'page___link___navigation___navigation'
  | 'page___link___navigation___subNavigation'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___link___block'
  | 'page___link___block___id'
  | 'page___link___block___children'
  | 'page___link___block___name'
  | 'page___link___block___variant'
  | 'page___link___block___spaceId'
  | 'page___link___block___contentful_id'
  | 'page___link___block___createdAt'
  | 'page___link___block___updatedAt'
  | 'page___link___block___node_locale'
  | 'page___link___block___section'
  | 'page___link___block___medias'
  | 'page___link___url'
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
  | 'navigation'
  | 'navigation___id'
  | 'navigation___parent___id'
  | 'navigation___parent___parent___id'
  | 'navigation___parent___parent___children'
  | 'navigation___parent___children'
  | 'navigation___parent___children___id'
  | 'navigation___parent___children___children'
  | 'navigation___parent___internal___content'
  | 'navigation___parent___internal___contentDigest'
  | 'navigation___parent___internal___description'
  | 'navigation___parent___internal___fieldOwners'
  | 'navigation___parent___internal___ignoreType'
  | 'navigation___parent___internal___mediaType'
  | 'navigation___parent___internal___owner'
  | 'navigation___parent___internal___type'
  | 'navigation___children'
  | 'navigation___children___id'
  | 'navigation___children___parent___id'
  | 'navigation___children___parent___children'
  | 'navigation___children___children'
  | 'navigation___children___children___id'
  | 'navigation___children___children___children'
  | 'navigation___children___internal___content'
  | 'navigation___children___internal___contentDigest'
  | 'navigation___children___internal___description'
  | 'navigation___children___internal___fieldOwners'
  | 'navigation___children___internal___ignoreType'
  | 'navigation___children___internal___mediaType'
  | 'navigation___children___internal___owner'
  | 'navigation___children___internal___type'
  | 'navigation___internal___content'
  | 'navigation___internal___contentDigest'
  | 'navigation___internal___description'
  | 'navigation___internal___fieldOwners'
  | 'navigation___internal___ignoreType'
  | 'navigation___internal___mediaType'
  | 'navigation___internal___owner'
  | 'navigation___internal___type'
  | 'navigation___name'
  | 'navigation___links'
  | 'navigation___links___id'
  | 'navigation___links___parent___id'
  | 'navigation___links___parent___children'
  | 'navigation___links___children'
  | 'navigation___links___children___id'
  | 'navigation___links___children___children'
  | 'navigation___links___internal___content'
  | 'navigation___links___internal___contentDigest'
  | 'navigation___links___internal___description'
  | 'navigation___links___internal___fieldOwners'
  | 'navigation___links___internal___ignoreType'
  | 'navigation___links___internal___mediaType'
  | 'navigation___links___internal___owner'
  | 'navigation___links___internal___type'
  | 'navigation___links___type'
  | 'navigation___links___name'
  | 'navigation___links___label'
  | 'navigation___links___page___id'
  | 'navigation___links___page___children'
  | 'navigation___links___page___name'
  | 'navigation___links___page___title'
  | 'navigation___links___page___slug'
  | 'navigation___links___page___sections'
  | 'navigation___links___page___link'
  | 'navigation___links___page___spaceId'
  | 'navigation___links___page___contentful_id'
  | 'navigation___links___page___createdAt'
  | 'navigation___links___page___updatedAt'
  | 'navigation___links___page___node_locale'
  | 'navigation___links___navigation'
  | 'navigation___links___navigation___id'
  | 'navigation___links___navigation___children'
  | 'navigation___links___navigation___name'
  | 'navigation___links___navigation___links'
  | 'navigation___links___navigation___spaceId'
  | 'navigation___links___navigation___contentful_id'
  | 'navigation___links___navigation___createdAt'
  | 'navigation___links___navigation___updatedAt'
  | 'navigation___links___navigation___node_locale'
  | 'navigation___links___navigation___navigation'
  | 'navigation___links___navigation___subNavigation'
  | 'navigation___links___spaceId'
  | 'navigation___links___contentful_id'
  | 'navigation___links___createdAt'
  | 'navigation___links___updatedAt'
  | 'navigation___links___sys___type'
  | 'navigation___links___sys___revision'
  | 'navigation___links___node_locale'
  | 'navigation___links___block'
  | 'navigation___links___block___id'
  | 'navigation___links___block___children'
  | 'navigation___links___block___name'
  | 'navigation___links___block___variant'
  | 'navigation___links___block___spaceId'
  | 'navigation___links___block___contentful_id'
  | 'navigation___links___block___createdAt'
  | 'navigation___links___block___updatedAt'
  | 'navigation___links___block___node_locale'
  | 'navigation___links___block___section'
  | 'navigation___links___block___medias'
  | 'navigation___links___url'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___type'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
  | 'navigation___navigation'
  | 'navigation___navigation___id'
  | 'navigation___navigation___parent___id'
  | 'navigation___navigation___parent___children'
  | 'navigation___navigation___children'
  | 'navigation___navigation___children___id'
  | 'navigation___navigation___children___children'
  | 'navigation___navigation___internal___content'
  | 'navigation___navigation___internal___contentDigest'
  | 'navigation___navigation___internal___description'
  | 'navigation___navigation___internal___fieldOwners'
  | 'navigation___navigation___internal___ignoreType'
  | 'navigation___navigation___internal___mediaType'
  | 'navigation___navigation___internal___owner'
  | 'navigation___navigation___internal___type'
  | 'navigation___navigation___name'
  | 'navigation___navigation___links'
  | 'navigation___navigation___links___id'
  | 'navigation___navigation___links___children'
  | 'navigation___navigation___links___type'
  | 'navigation___navigation___links___name'
  | 'navigation___navigation___links___label'
  | 'navigation___navigation___links___navigation'
  | 'navigation___navigation___links___spaceId'
  | 'navigation___navigation___links___contentful_id'
  | 'navigation___navigation___links___createdAt'
  | 'navigation___navigation___links___updatedAt'
  | 'navigation___navigation___links___node_locale'
  | 'navigation___navigation___links___block'
  | 'navigation___navigation___links___url'
  | 'navigation___navigation___spaceId'
  | 'navigation___navigation___contentful_id'
  | 'navigation___navigation___createdAt'
  | 'navigation___navigation___updatedAt'
  | 'navigation___navigation___sys___type'
  | 'navigation___navigation___sys___revision'
  | 'navigation___navigation___node_locale'
  | 'navigation___navigation___navigation'
  | 'navigation___navigation___navigation___id'
  | 'navigation___navigation___navigation___children'
  | 'navigation___navigation___navigation___name'
  | 'navigation___navigation___navigation___links'
  | 'navigation___navigation___navigation___spaceId'
  | 'navigation___navigation___navigation___contentful_id'
  | 'navigation___navigation___navigation___createdAt'
  | 'navigation___navigation___navigation___updatedAt'
  | 'navigation___navigation___navigation___node_locale'
  | 'navigation___navigation___navigation___navigation'
  | 'navigation___navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation___id'
  | 'navigation___navigation___subNavigation___children'
  | 'navigation___navigation___subNavigation___name'
  | 'navigation___navigation___subNavigation___links'
  | 'navigation___navigation___subNavigation___spaceId'
  | 'navigation___navigation___subNavigation___contentful_id'
  | 'navigation___navigation___subNavigation___createdAt'
  | 'navigation___navigation___subNavigation___updatedAt'
  | 'navigation___navigation___subNavigation___node_locale'
  | 'navigation___navigation___subNavigation___navigation'
  | 'navigation___navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation'
  | 'navigation___subNavigation___id'
  | 'navigation___subNavigation___parent___id'
  | 'navigation___subNavigation___parent___children'
  | 'navigation___subNavigation___children'
  | 'navigation___subNavigation___children___id'
  | 'navigation___subNavigation___children___children'
  | 'navigation___subNavigation___internal___content'
  | 'navigation___subNavigation___internal___contentDigest'
  | 'navigation___subNavigation___internal___description'
  | 'navigation___subNavigation___internal___fieldOwners'
  | 'navigation___subNavigation___internal___ignoreType'
  | 'navigation___subNavigation___internal___mediaType'
  | 'navigation___subNavigation___internal___owner'
  | 'navigation___subNavigation___internal___type'
  | 'navigation___subNavigation___name'
  | 'navigation___subNavigation___links'
  | 'navigation___subNavigation___links___id'
  | 'navigation___subNavigation___links___children'
  | 'navigation___subNavigation___links___type'
  | 'navigation___subNavigation___links___name'
  | 'navigation___subNavigation___links___label'
  | 'navigation___subNavigation___links___navigation'
  | 'navigation___subNavigation___links___spaceId'
  | 'navigation___subNavigation___links___contentful_id'
  | 'navigation___subNavigation___links___createdAt'
  | 'navigation___subNavigation___links___updatedAt'
  | 'navigation___subNavigation___links___node_locale'
  | 'navigation___subNavigation___links___block'
  | 'navigation___subNavigation___links___url'
  | 'navigation___subNavigation___spaceId'
  | 'navigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___createdAt'
  | 'navigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___sys___type'
  | 'navigation___subNavigation___sys___revision'
  | 'navigation___subNavigation___node_locale'
  | 'navigation___subNavigation___navigation'
  | 'navigation___subNavigation___navigation___id'
  | 'navigation___subNavigation___navigation___children'
  | 'navigation___subNavigation___navigation___name'
  | 'navigation___subNavigation___navigation___links'
  | 'navigation___subNavigation___navigation___spaceId'
  | 'navigation___subNavigation___navigation___contentful_id'
  | 'navigation___subNavigation___navigation___createdAt'
  | 'navigation___subNavigation___navigation___updatedAt'
  | 'navigation___subNavigation___navigation___node_locale'
  | 'navigation___subNavigation___navigation___navigation'
  | 'navigation___subNavigation___navigation___subNavigation'
  | 'navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___id'
  | 'navigation___subNavigation___subNavigation___children'
  | 'navigation___subNavigation___subNavigation___name'
  | 'navigation___subNavigation___subNavigation___links'
  | 'navigation___subNavigation___subNavigation___spaceId'
  | 'navigation___subNavigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___subNavigation___createdAt'
  | 'navigation___subNavigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation___navigation'
  | 'navigation___subNavigation___subNavigation___subNavigation'
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
  | 'block'
  | 'block___id'
  | 'block___parent___id'
  | 'block___parent___parent___id'
  | 'block___parent___parent___children'
  | 'block___parent___children'
  | 'block___parent___children___id'
  | 'block___parent___children___children'
  | 'block___parent___internal___content'
  | 'block___parent___internal___contentDigest'
  | 'block___parent___internal___description'
  | 'block___parent___internal___fieldOwners'
  | 'block___parent___internal___ignoreType'
  | 'block___parent___internal___mediaType'
  | 'block___parent___internal___owner'
  | 'block___parent___internal___type'
  | 'block___children'
  | 'block___children___id'
  | 'block___children___parent___id'
  | 'block___children___parent___children'
  | 'block___children___children'
  | 'block___children___children___id'
  | 'block___children___children___children'
  | 'block___children___internal___content'
  | 'block___children___internal___contentDigest'
  | 'block___children___internal___description'
  | 'block___children___internal___fieldOwners'
  | 'block___children___internal___ignoreType'
  | 'block___children___internal___mediaType'
  | 'block___children___internal___owner'
  | 'block___children___internal___type'
  | 'block___internal___content'
  | 'block___internal___contentDigest'
  | 'block___internal___description'
  | 'block___internal___fieldOwners'
  | 'block___internal___ignoreType'
  | 'block___internal___mediaType'
  | 'block___internal___owner'
  | 'block___internal___type'
  | 'block___name'
  | 'block___variant'
  | 'block___text___id'
  | 'block___text___parent___id'
  | 'block___text___parent___children'
  | 'block___text___children'
  | 'block___text___children___id'
  | 'block___text___children___children'
  | 'block___text___internal___content'
  | 'block___text___internal___contentDigest'
  | 'block___text___internal___description'
  | 'block___text___internal___fieldOwners'
  | 'block___text___internal___ignoreType'
  | 'block___text___internal___mediaType'
  | 'block___text___internal___owner'
  | 'block___text___internal___type'
  | 'block___text___text'
  | 'block___text___sys___type'
  | 'block___text___childMdx___rawBody'
  | 'block___text___childMdx___fileAbsolutePath'
  | 'block___text___childMdx___slug'
  | 'block___text___childMdx___body'
  | 'block___text___childMdx___excerpt'
  | 'block___text___childMdx___headings'
  | 'block___text___childMdx___html'
  | 'block___text___childMdx___mdxAST'
  | 'block___text___childMdx___tableOfContents'
  | 'block___text___childMdx___timeToRead'
  | 'block___text___childMdx___id'
  | 'block___text___childMdx___children'
  | 'block___spaceId'
  | 'block___contentful_id'
  | 'block___createdAt'
  | 'block___updatedAt'
  | 'block___sys___type'
  | 'block___sys___revision'
  | 'block___node_locale'
  | 'block___section'
  | 'block___section___id'
  | 'block___section___parent___id'
  | 'block___section___parent___children'
  | 'block___section___children'
  | 'block___section___children___id'
  | 'block___section___children___children'
  | 'block___section___internal___content'
  | 'block___section___internal___contentDigest'
  | 'block___section___internal___description'
  | 'block___section___internal___fieldOwners'
  | 'block___section___internal___ignoreType'
  | 'block___section___internal___mediaType'
  | 'block___section___internal___owner'
  | 'block___section___internal___type'
  | 'block___section___name'
  | 'block___section___layout'
  | 'block___section___page'
  | 'block___section___page___id'
  | 'block___section___page___children'
  | 'block___section___page___name'
  | 'block___section___page___title'
  | 'block___section___page___slug'
  | 'block___section___page___sections'
  | 'block___section___page___link'
  | 'block___section___page___spaceId'
  | 'block___section___page___contentful_id'
  | 'block___section___page___createdAt'
  | 'block___section___page___updatedAt'
  | 'block___section___page___node_locale'
  | 'block___section___spaceId'
  | 'block___section___contentful_id'
  | 'block___section___createdAt'
  | 'block___section___updatedAt'
  | 'block___section___sys___type'
  | 'block___section___sys___revision'
  | 'block___section___node_locale'
  | 'block___section___variant'
  | 'block___medias'
  | 'block___medias___id'
  | 'block___medias___parent___id'
  | 'block___medias___parent___children'
  | 'block___medias___children'
  | 'block___medias___children___id'
  | 'block___medias___children___children'
  | 'block___medias___internal___content'
  | 'block___medias___internal___contentDigest'
  | 'block___medias___internal___description'
  | 'block___medias___internal___fieldOwners'
  | 'block___medias___internal___ignoreType'
  | 'block___medias___internal___mediaType'
  | 'block___medias___internal___owner'
  | 'block___medias___internal___type'
  | 'block___medias___name'
  | 'block___medias___medias'
  | 'block___medias___medias___id'
  | 'block___medias___medias___children'
  | 'block___medias___medias___contentful_id'
  | 'block___medias___medias___spaceId'
  | 'block___medias___medias___createdAt'
  | 'block___medias___medias___updatedAt'
  | 'block___medias___medias___title'
  | 'block___medias___medias___description'
  | 'block___medias___medias___node_locale'
  | 'block___medias___block'
  | 'block___medias___block___id'
  | 'block___medias___block___children'
  | 'block___medias___block___name'
  | 'block___medias___block___variant'
  | 'block___medias___block___spaceId'
  | 'block___medias___block___contentful_id'
  | 'block___medias___block___createdAt'
  | 'block___medias___block___updatedAt'
  | 'block___medias___block___node_locale'
  | 'block___medias___block___section'
  | 'block___medias___block___medias'
  | 'block___medias___spaceId'
  | 'block___medias___contentful_id'
  | 'block___medias___createdAt'
  | 'block___medias___updatedAt'
  | 'block___medias___sys___type'
  | 'block___medias___sys___revision'
  | 'block___medias___node_locale'
  | 'block___medias___carouselStyle'
  | 'block___medias___size'
  | 'block___medias___variant'
  | 'block___link___id'
  | 'block___link___parent___id'
  | 'block___link___parent___children'
  | 'block___link___children'
  | 'block___link___children___id'
  | 'block___link___children___children'
  | 'block___link___internal___content'
  | 'block___link___internal___contentDigest'
  | 'block___link___internal___description'
  | 'block___link___internal___fieldOwners'
  | 'block___link___internal___ignoreType'
  | 'block___link___internal___mediaType'
  | 'block___link___internal___owner'
  | 'block___link___internal___type'
  | 'block___link___type'
  | 'block___link___name'
  | 'block___link___label'
  | 'block___link___page___id'
  | 'block___link___page___children'
  | 'block___link___page___name'
  | 'block___link___page___title'
  | 'block___link___page___slug'
  | 'block___link___page___sections'
  | 'block___link___page___link'
  | 'block___link___page___spaceId'
  | 'block___link___page___contentful_id'
  | 'block___link___page___createdAt'
  | 'block___link___page___updatedAt'
  | 'block___link___page___node_locale'
  | 'block___link___navigation'
  | 'block___link___navigation___id'
  | 'block___link___navigation___children'
  | 'block___link___navigation___name'
  | 'block___link___navigation___links'
  | 'block___link___navigation___spaceId'
  | 'block___link___navigation___contentful_id'
  | 'block___link___navigation___createdAt'
  | 'block___link___navigation___updatedAt'
  | 'block___link___navigation___node_locale'
  | 'block___link___navigation___navigation'
  | 'block___link___navigation___subNavigation'
  | 'block___link___spaceId'
  | 'block___link___contentful_id'
  | 'block___link___createdAt'
  | 'block___link___updatedAt'
  | 'block___link___sys___type'
  | 'block___link___sys___revision'
  | 'block___link___node_locale'
  | 'block___link___block'
  | 'block___link___block___id'
  | 'block___link___block___children'
  | 'block___link___block___name'
  | 'block___link___block___variant'
  | 'block___link___block___spaceId'
  | 'block___link___block___contentful_id'
  | 'block___link___block___createdAt'
  | 'block___link___block___updatedAt'
  | 'block___link___block___node_locale'
  | 'block___link___block___section'
  | 'block___link___block___medias'
  | 'block___link___url'
  | 'block___childContentfulBlockTextTextNode___id'
  | 'block___childContentfulBlockTextTextNode___parent___id'
  | 'block___childContentfulBlockTextTextNode___parent___children'
  | 'block___childContentfulBlockTextTextNode___children'
  | 'block___childContentfulBlockTextTextNode___children___id'
  | 'block___childContentfulBlockTextTextNode___children___children'
  | 'block___childContentfulBlockTextTextNode___internal___content'
  | 'block___childContentfulBlockTextTextNode___internal___contentDigest'
  | 'block___childContentfulBlockTextTextNode___internal___description'
  | 'block___childContentfulBlockTextTextNode___internal___fieldOwners'
  | 'block___childContentfulBlockTextTextNode___internal___ignoreType'
  | 'block___childContentfulBlockTextTextNode___internal___mediaType'
  | 'block___childContentfulBlockTextTextNode___internal___owner'
  | 'block___childContentfulBlockTextTextNode___internal___type'
  | 'block___childContentfulBlockTextTextNode___text'
  | 'block___childContentfulBlockTextTextNode___sys___type'
  | 'block___childContentfulBlockTextTextNode___childMdx___rawBody'
  | 'block___childContentfulBlockTextTextNode___childMdx___fileAbsolutePath'
  | 'block___childContentfulBlockTextTextNode___childMdx___slug'
  | 'block___childContentfulBlockTextTextNode___childMdx___body'
  | 'block___childContentfulBlockTextTextNode___childMdx___excerpt'
  | 'block___childContentfulBlockTextTextNode___childMdx___headings'
  | 'block___childContentfulBlockTextTextNode___childMdx___html'
  | 'block___childContentfulBlockTextTextNode___childMdx___mdxAST'
  | 'block___childContentfulBlockTextTextNode___childMdx___tableOfContents'
  | 'block___childContentfulBlockTextTextNode___childMdx___timeToRead'
  | 'block___childContentfulBlockTextTextNode___childMdx___id'
  | 'block___childContentfulBlockTextTextNode___childMdx___children'
  | 'url';

export type ContentfulLinkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
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
  medias?: Maybe<Array<Maybe<ContentfulAsset>>>;
  block?: Maybe<Array<Maybe<ContentfulBlock>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMediaCollectionSys>;
  node_locale?: Maybe<Scalars['String']>;
  carouselStyle?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
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
  | 'medias___localFile___sourceInstanceName'
  | 'medias___localFile___absolutePath'
  | 'medias___localFile___relativePath'
  | 'medias___localFile___extension'
  | 'medias___localFile___size'
  | 'medias___localFile___prettySize'
  | 'medias___localFile___modifiedTime'
  | 'medias___localFile___accessTime'
  | 'medias___localFile___changeTime'
  | 'medias___localFile___birthTime'
  | 'medias___localFile___root'
  | 'medias___localFile___dir'
  | 'medias___localFile___base'
  | 'medias___localFile___ext'
  | 'medias___localFile___name'
  | 'medias___localFile___relativeDirectory'
  | 'medias___localFile___dev'
  | 'medias___localFile___mode'
  | 'medias___localFile___nlink'
  | 'medias___localFile___uid'
  | 'medias___localFile___gid'
  | 'medias___localFile___rdev'
  | 'medias___localFile___ino'
  | 'medias___localFile___atimeMs'
  | 'medias___localFile___mtimeMs'
  | 'medias___localFile___ctimeMs'
  | 'medias___localFile___atime'
  | 'medias___localFile___mtime'
  | 'medias___localFile___ctime'
  | 'medias___localFile___birthtime'
  | 'medias___localFile___birthtimeMs'
  | 'medias___localFile___blksize'
  | 'medias___localFile___blocks'
  | 'medias___localFile___url'
  | 'medias___localFile___publicURL'
  | 'medias___localFile___childImageSharp___id'
  | 'medias___localFile___childImageSharp___children'
  | 'medias___localFile___id'
  | 'medias___localFile___parent___id'
  | 'medias___localFile___parent___children'
  | 'medias___localFile___children'
  | 'medias___localFile___children___id'
  | 'medias___localFile___children___children'
  | 'medias___localFile___internal___content'
  | 'medias___localFile___internal___contentDigest'
  | 'medias___localFile___internal___description'
  | 'medias___localFile___internal___fieldOwners'
  | 'medias___localFile___internal___ignoreType'
  | 'medias___localFile___internal___mediaType'
  | 'medias___localFile___internal___owner'
  | 'medias___localFile___internal___type'
  | 'medias___localFile___childMdx___rawBody'
  | 'medias___localFile___childMdx___fileAbsolutePath'
  | 'medias___localFile___childMdx___slug'
  | 'medias___localFile___childMdx___body'
  | 'medias___localFile___childMdx___excerpt'
  | 'medias___localFile___childMdx___headings'
  | 'medias___localFile___childMdx___html'
  | 'medias___localFile___childMdx___mdxAST'
  | 'medias___localFile___childMdx___tableOfContents'
  | 'medias___localFile___childMdx___timeToRead'
  | 'medias___localFile___childMdx___id'
  | 'medias___localFile___childMdx___children'
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
  | 'block'
  | 'block___id'
  | 'block___parent___id'
  | 'block___parent___parent___id'
  | 'block___parent___parent___children'
  | 'block___parent___children'
  | 'block___parent___children___id'
  | 'block___parent___children___children'
  | 'block___parent___internal___content'
  | 'block___parent___internal___contentDigest'
  | 'block___parent___internal___description'
  | 'block___parent___internal___fieldOwners'
  | 'block___parent___internal___ignoreType'
  | 'block___parent___internal___mediaType'
  | 'block___parent___internal___owner'
  | 'block___parent___internal___type'
  | 'block___children'
  | 'block___children___id'
  | 'block___children___parent___id'
  | 'block___children___parent___children'
  | 'block___children___children'
  | 'block___children___children___id'
  | 'block___children___children___children'
  | 'block___children___internal___content'
  | 'block___children___internal___contentDigest'
  | 'block___children___internal___description'
  | 'block___children___internal___fieldOwners'
  | 'block___children___internal___ignoreType'
  | 'block___children___internal___mediaType'
  | 'block___children___internal___owner'
  | 'block___children___internal___type'
  | 'block___internal___content'
  | 'block___internal___contentDigest'
  | 'block___internal___description'
  | 'block___internal___fieldOwners'
  | 'block___internal___ignoreType'
  | 'block___internal___mediaType'
  | 'block___internal___owner'
  | 'block___internal___type'
  | 'block___name'
  | 'block___variant'
  | 'block___text___id'
  | 'block___text___parent___id'
  | 'block___text___parent___children'
  | 'block___text___children'
  | 'block___text___children___id'
  | 'block___text___children___children'
  | 'block___text___internal___content'
  | 'block___text___internal___contentDigest'
  | 'block___text___internal___description'
  | 'block___text___internal___fieldOwners'
  | 'block___text___internal___ignoreType'
  | 'block___text___internal___mediaType'
  | 'block___text___internal___owner'
  | 'block___text___internal___type'
  | 'block___text___text'
  | 'block___text___sys___type'
  | 'block___text___childMdx___rawBody'
  | 'block___text___childMdx___fileAbsolutePath'
  | 'block___text___childMdx___slug'
  | 'block___text___childMdx___body'
  | 'block___text___childMdx___excerpt'
  | 'block___text___childMdx___headings'
  | 'block___text___childMdx___html'
  | 'block___text___childMdx___mdxAST'
  | 'block___text___childMdx___tableOfContents'
  | 'block___text___childMdx___timeToRead'
  | 'block___text___childMdx___id'
  | 'block___text___childMdx___children'
  | 'block___spaceId'
  | 'block___contentful_id'
  | 'block___createdAt'
  | 'block___updatedAt'
  | 'block___sys___type'
  | 'block___sys___revision'
  | 'block___node_locale'
  | 'block___section'
  | 'block___section___id'
  | 'block___section___parent___id'
  | 'block___section___parent___children'
  | 'block___section___children'
  | 'block___section___children___id'
  | 'block___section___children___children'
  | 'block___section___internal___content'
  | 'block___section___internal___contentDigest'
  | 'block___section___internal___description'
  | 'block___section___internal___fieldOwners'
  | 'block___section___internal___ignoreType'
  | 'block___section___internal___mediaType'
  | 'block___section___internal___owner'
  | 'block___section___internal___type'
  | 'block___section___name'
  | 'block___section___layout'
  | 'block___section___page'
  | 'block___section___page___id'
  | 'block___section___page___children'
  | 'block___section___page___name'
  | 'block___section___page___title'
  | 'block___section___page___slug'
  | 'block___section___page___sections'
  | 'block___section___page___link'
  | 'block___section___page___spaceId'
  | 'block___section___page___contentful_id'
  | 'block___section___page___createdAt'
  | 'block___section___page___updatedAt'
  | 'block___section___page___node_locale'
  | 'block___section___spaceId'
  | 'block___section___contentful_id'
  | 'block___section___createdAt'
  | 'block___section___updatedAt'
  | 'block___section___sys___type'
  | 'block___section___sys___revision'
  | 'block___section___node_locale'
  | 'block___section___variant'
  | 'block___medias'
  | 'block___medias___id'
  | 'block___medias___parent___id'
  | 'block___medias___parent___children'
  | 'block___medias___children'
  | 'block___medias___children___id'
  | 'block___medias___children___children'
  | 'block___medias___internal___content'
  | 'block___medias___internal___contentDigest'
  | 'block___medias___internal___description'
  | 'block___medias___internal___fieldOwners'
  | 'block___medias___internal___ignoreType'
  | 'block___medias___internal___mediaType'
  | 'block___medias___internal___owner'
  | 'block___medias___internal___type'
  | 'block___medias___name'
  | 'block___medias___medias'
  | 'block___medias___medias___id'
  | 'block___medias___medias___children'
  | 'block___medias___medias___contentful_id'
  | 'block___medias___medias___spaceId'
  | 'block___medias___medias___createdAt'
  | 'block___medias___medias___updatedAt'
  | 'block___medias___medias___title'
  | 'block___medias___medias___description'
  | 'block___medias___medias___node_locale'
  | 'block___medias___block'
  | 'block___medias___block___id'
  | 'block___medias___block___children'
  | 'block___medias___block___name'
  | 'block___medias___block___variant'
  | 'block___medias___block___spaceId'
  | 'block___medias___block___contentful_id'
  | 'block___medias___block___createdAt'
  | 'block___medias___block___updatedAt'
  | 'block___medias___block___node_locale'
  | 'block___medias___block___section'
  | 'block___medias___block___medias'
  | 'block___medias___spaceId'
  | 'block___medias___contentful_id'
  | 'block___medias___createdAt'
  | 'block___medias___updatedAt'
  | 'block___medias___sys___type'
  | 'block___medias___sys___revision'
  | 'block___medias___node_locale'
  | 'block___medias___carouselStyle'
  | 'block___medias___size'
  | 'block___medias___variant'
  | 'block___link___id'
  | 'block___link___parent___id'
  | 'block___link___parent___children'
  | 'block___link___children'
  | 'block___link___children___id'
  | 'block___link___children___children'
  | 'block___link___internal___content'
  | 'block___link___internal___contentDigest'
  | 'block___link___internal___description'
  | 'block___link___internal___fieldOwners'
  | 'block___link___internal___ignoreType'
  | 'block___link___internal___mediaType'
  | 'block___link___internal___owner'
  | 'block___link___internal___type'
  | 'block___link___type'
  | 'block___link___name'
  | 'block___link___label'
  | 'block___link___page___id'
  | 'block___link___page___children'
  | 'block___link___page___name'
  | 'block___link___page___title'
  | 'block___link___page___slug'
  | 'block___link___page___sections'
  | 'block___link___page___link'
  | 'block___link___page___spaceId'
  | 'block___link___page___contentful_id'
  | 'block___link___page___createdAt'
  | 'block___link___page___updatedAt'
  | 'block___link___page___node_locale'
  | 'block___link___navigation'
  | 'block___link___navigation___id'
  | 'block___link___navigation___children'
  | 'block___link___navigation___name'
  | 'block___link___navigation___links'
  | 'block___link___navigation___spaceId'
  | 'block___link___navigation___contentful_id'
  | 'block___link___navigation___createdAt'
  | 'block___link___navigation___updatedAt'
  | 'block___link___navigation___node_locale'
  | 'block___link___navigation___navigation'
  | 'block___link___navigation___subNavigation'
  | 'block___link___spaceId'
  | 'block___link___contentful_id'
  | 'block___link___createdAt'
  | 'block___link___updatedAt'
  | 'block___link___sys___type'
  | 'block___link___sys___revision'
  | 'block___link___node_locale'
  | 'block___link___block'
  | 'block___link___block___id'
  | 'block___link___block___children'
  | 'block___link___block___name'
  | 'block___link___block___variant'
  | 'block___link___block___spaceId'
  | 'block___link___block___contentful_id'
  | 'block___link___block___createdAt'
  | 'block___link___block___updatedAt'
  | 'block___link___block___node_locale'
  | 'block___link___block___section'
  | 'block___link___block___medias'
  | 'block___link___url'
  | 'block___childContentfulBlockTextTextNode___id'
  | 'block___childContentfulBlockTextTextNode___parent___id'
  | 'block___childContentfulBlockTextTextNode___parent___children'
  | 'block___childContentfulBlockTextTextNode___children'
  | 'block___childContentfulBlockTextTextNode___children___id'
  | 'block___childContentfulBlockTextTextNode___children___children'
  | 'block___childContentfulBlockTextTextNode___internal___content'
  | 'block___childContentfulBlockTextTextNode___internal___contentDigest'
  | 'block___childContentfulBlockTextTextNode___internal___description'
  | 'block___childContentfulBlockTextTextNode___internal___fieldOwners'
  | 'block___childContentfulBlockTextTextNode___internal___ignoreType'
  | 'block___childContentfulBlockTextTextNode___internal___mediaType'
  | 'block___childContentfulBlockTextTextNode___internal___owner'
  | 'block___childContentfulBlockTextTextNode___internal___type'
  | 'block___childContentfulBlockTextTextNode___text'
  | 'block___childContentfulBlockTextTextNode___sys___type'
  | 'block___childContentfulBlockTextTextNode___childMdx___rawBody'
  | 'block___childContentfulBlockTextTextNode___childMdx___fileAbsolutePath'
  | 'block___childContentfulBlockTextTextNode___childMdx___slug'
  | 'block___childContentfulBlockTextTextNode___childMdx___body'
  | 'block___childContentfulBlockTextTextNode___childMdx___excerpt'
  | 'block___childContentfulBlockTextTextNode___childMdx___headings'
  | 'block___childContentfulBlockTextTextNode___childMdx___html'
  | 'block___childContentfulBlockTextTextNode___childMdx___mdxAST'
  | 'block___childContentfulBlockTextTextNode___childMdx___tableOfContents'
  | 'block___childContentfulBlockTextTextNode___childMdx___timeToRead'
  | 'block___childContentfulBlockTextTextNode___childMdx___id'
  | 'block___childContentfulBlockTextTextNode___childMdx___children'
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
  | 'carouselStyle'
  | 'size'
  | 'variant';

export type ContentfulMediaCollectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  medias?: Maybe<ContentfulAssetFilterListInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaCollectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  carouselStyle?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMediaCollectionFilterListInput = {
  elemMatch?: Maybe<ContentfulMediaCollectionFilterInput>;
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

export type ContentfulNavigation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ContentfulLink>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNavigationSys>;
  node_locale?: Maybe<Scalars['String']>;
  navigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  subNavigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
};


export type ContentfulNavigationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationEdge>;
  nodes: Array<ContentfulNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNavigationGroupConnection>;
};


export type ContentfulNavigationConnectionDistinctArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNavigationFieldsEnum;
};

export type ContentfulNavigationEdge = {
  next?: Maybe<ContentfulNavigation>;
  node: ContentfulNavigation;
  previous?: Maybe<ContentfulNavigation>;
};

export type ContentfulNavigationFieldsEnum = 
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
  | 'links'
  | 'links___id'
  | 'links___parent___id'
  | 'links___parent___parent___id'
  | 'links___parent___parent___children'
  | 'links___parent___children'
  | 'links___parent___children___id'
  | 'links___parent___children___children'
  | 'links___parent___internal___content'
  | 'links___parent___internal___contentDigest'
  | 'links___parent___internal___description'
  | 'links___parent___internal___fieldOwners'
  | 'links___parent___internal___ignoreType'
  | 'links___parent___internal___mediaType'
  | 'links___parent___internal___owner'
  | 'links___parent___internal___type'
  | 'links___children'
  | 'links___children___id'
  | 'links___children___parent___id'
  | 'links___children___parent___children'
  | 'links___children___children'
  | 'links___children___children___id'
  | 'links___children___children___children'
  | 'links___children___internal___content'
  | 'links___children___internal___contentDigest'
  | 'links___children___internal___description'
  | 'links___children___internal___fieldOwners'
  | 'links___children___internal___ignoreType'
  | 'links___children___internal___mediaType'
  | 'links___children___internal___owner'
  | 'links___children___internal___type'
  | 'links___internal___content'
  | 'links___internal___contentDigest'
  | 'links___internal___description'
  | 'links___internal___fieldOwners'
  | 'links___internal___ignoreType'
  | 'links___internal___mediaType'
  | 'links___internal___owner'
  | 'links___internal___type'
  | 'links___type'
  | 'links___name'
  | 'links___label'
  | 'links___page___id'
  | 'links___page___parent___id'
  | 'links___page___parent___children'
  | 'links___page___children'
  | 'links___page___children___id'
  | 'links___page___children___children'
  | 'links___page___internal___content'
  | 'links___page___internal___contentDigest'
  | 'links___page___internal___description'
  | 'links___page___internal___fieldOwners'
  | 'links___page___internal___ignoreType'
  | 'links___page___internal___mediaType'
  | 'links___page___internal___owner'
  | 'links___page___internal___type'
  | 'links___page___name'
  | 'links___page___title'
  | 'links___page___slug'
  | 'links___page___sections'
  | 'links___page___sections___id'
  | 'links___page___sections___children'
  | 'links___page___sections___name'
  | 'links___page___sections___layout'
  | 'links___page___sections___page'
  | 'links___page___sections___spaceId'
  | 'links___page___sections___contentful_id'
  | 'links___page___sections___createdAt'
  | 'links___page___sections___updatedAt'
  | 'links___page___sections___node_locale'
  | 'links___page___sections___variant'
  | 'links___page___link'
  | 'links___page___link___id'
  | 'links___page___link___children'
  | 'links___page___link___type'
  | 'links___page___link___name'
  | 'links___page___link___label'
  | 'links___page___link___navigation'
  | 'links___page___link___spaceId'
  | 'links___page___link___contentful_id'
  | 'links___page___link___createdAt'
  | 'links___page___link___updatedAt'
  | 'links___page___link___node_locale'
  | 'links___page___link___block'
  | 'links___page___link___url'
  | 'links___page___description___id'
  | 'links___page___description___children'
  | 'links___page___description___description'
  | 'links___page___spaceId'
  | 'links___page___contentful_id'
  | 'links___page___createdAt'
  | 'links___page___updatedAt'
  | 'links___page___sys___type'
  | 'links___page___sys___revision'
  | 'links___page___node_locale'
  | 'links___page___childContentfulPageDescriptionTextNode___id'
  | 'links___page___childContentfulPageDescriptionTextNode___children'
  | 'links___page___childContentfulPageDescriptionTextNode___description'
  | 'links___navigation'
  | 'links___navigation___id'
  | 'links___navigation___parent___id'
  | 'links___navigation___parent___children'
  | 'links___navigation___children'
  | 'links___navigation___children___id'
  | 'links___navigation___children___children'
  | 'links___navigation___internal___content'
  | 'links___navigation___internal___contentDigest'
  | 'links___navigation___internal___description'
  | 'links___navigation___internal___fieldOwners'
  | 'links___navigation___internal___ignoreType'
  | 'links___navigation___internal___mediaType'
  | 'links___navigation___internal___owner'
  | 'links___navigation___internal___type'
  | 'links___navigation___name'
  | 'links___navigation___links'
  | 'links___navigation___links___id'
  | 'links___navigation___links___children'
  | 'links___navigation___links___type'
  | 'links___navigation___links___name'
  | 'links___navigation___links___label'
  | 'links___navigation___links___navigation'
  | 'links___navigation___links___spaceId'
  | 'links___navigation___links___contentful_id'
  | 'links___navigation___links___createdAt'
  | 'links___navigation___links___updatedAt'
  | 'links___navigation___links___node_locale'
  | 'links___navigation___links___block'
  | 'links___navigation___links___url'
  | 'links___navigation___spaceId'
  | 'links___navigation___contentful_id'
  | 'links___navigation___createdAt'
  | 'links___navigation___updatedAt'
  | 'links___navigation___sys___type'
  | 'links___navigation___sys___revision'
  | 'links___navigation___node_locale'
  | 'links___navigation___navigation'
  | 'links___navigation___navigation___id'
  | 'links___navigation___navigation___children'
  | 'links___navigation___navigation___name'
  | 'links___navigation___navigation___links'
  | 'links___navigation___navigation___spaceId'
  | 'links___navigation___navigation___contentful_id'
  | 'links___navigation___navigation___createdAt'
  | 'links___navigation___navigation___updatedAt'
  | 'links___navigation___navigation___node_locale'
  | 'links___navigation___navigation___navigation'
  | 'links___navigation___navigation___subNavigation'
  | 'links___navigation___subNavigation'
  | 'links___navigation___subNavigation___id'
  | 'links___navigation___subNavigation___children'
  | 'links___navigation___subNavigation___name'
  | 'links___navigation___subNavigation___links'
  | 'links___navigation___subNavigation___spaceId'
  | 'links___navigation___subNavigation___contentful_id'
  | 'links___navigation___subNavigation___createdAt'
  | 'links___navigation___subNavigation___updatedAt'
  | 'links___navigation___subNavigation___node_locale'
  | 'links___navigation___subNavigation___navigation'
  | 'links___navigation___subNavigation___subNavigation'
  | 'links___spaceId'
  | 'links___contentful_id'
  | 'links___createdAt'
  | 'links___updatedAt'
  | 'links___sys___type'
  | 'links___sys___revision'
  | 'links___node_locale'
  | 'links___block'
  | 'links___block___id'
  | 'links___block___parent___id'
  | 'links___block___parent___children'
  | 'links___block___children'
  | 'links___block___children___id'
  | 'links___block___children___children'
  | 'links___block___internal___content'
  | 'links___block___internal___contentDigest'
  | 'links___block___internal___description'
  | 'links___block___internal___fieldOwners'
  | 'links___block___internal___ignoreType'
  | 'links___block___internal___mediaType'
  | 'links___block___internal___owner'
  | 'links___block___internal___type'
  | 'links___block___name'
  | 'links___block___variant'
  | 'links___block___text___id'
  | 'links___block___text___children'
  | 'links___block___text___text'
  | 'links___block___spaceId'
  | 'links___block___contentful_id'
  | 'links___block___createdAt'
  | 'links___block___updatedAt'
  | 'links___block___sys___type'
  | 'links___block___sys___revision'
  | 'links___block___node_locale'
  | 'links___block___section'
  | 'links___block___section___id'
  | 'links___block___section___children'
  | 'links___block___section___name'
  | 'links___block___section___layout'
  | 'links___block___section___page'
  | 'links___block___section___spaceId'
  | 'links___block___section___contentful_id'
  | 'links___block___section___createdAt'
  | 'links___block___section___updatedAt'
  | 'links___block___section___node_locale'
  | 'links___block___section___variant'
  | 'links___block___medias'
  | 'links___block___medias___id'
  | 'links___block___medias___children'
  | 'links___block___medias___name'
  | 'links___block___medias___medias'
  | 'links___block___medias___block'
  | 'links___block___medias___spaceId'
  | 'links___block___medias___contentful_id'
  | 'links___block___medias___createdAt'
  | 'links___block___medias___updatedAt'
  | 'links___block___medias___node_locale'
  | 'links___block___medias___carouselStyle'
  | 'links___block___medias___size'
  | 'links___block___medias___variant'
  | 'links___block___link___id'
  | 'links___block___link___children'
  | 'links___block___link___type'
  | 'links___block___link___name'
  | 'links___block___link___label'
  | 'links___block___link___navigation'
  | 'links___block___link___spaceId'
  | 'links___block___link___contentful_id'
  | 'links___block___link___createdAt'
  | 'links___block___link___updatedAt'
  | 'links___block___link___node_locale'
  | 'links___block___link___block'
  | 'links___block___link___url'
  | 'links___block___childContentfulBlockTextTextNode___id'
  | 'links___block___childContentfulBlockTextTextNode___children'
  | 'links___block___childContentfulBlockTextTextNode___text'
  | 'links___url'
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
  | 'navigation'
  | 'navigation___id'
  | 'navigation___parent___id'
  | 'navigation___parent___parent___id'
  | 'navigation___parent___parent___children'
  | 'navigation___parent___children'
  | 'navigation___parent___children___id'
  | 'navigation___parent___children___children'
  | 'navigation___parent___internal___content'
  | 'navigation___parent___internal___contentDigest'
  | 'navigation___parent___internal___description'
  | 'navigation___parent___internal___fieldOwners'
  | 'navigation___parent___internal___ignoreType'
  | 'navigation___parent___internal___mediaType'
  | 'navigation___parent___internal___owner'
  | 'navigation___parent___internal___type'
  | 'navigation___children'
  | 'navigation___children___id'
  | 'navigation___children___parent___id'
  | 'navigation___children___parent___children'
  | 'navigation___children___children'
  | 'navigation___children___children___id'
  | 'navigation___children___children___children'
  | 'navigation___children___internal___content'
  | 'navigation___children___internal___contentDigest'
  | 'navigation___children___internal___description'
  | 'navigation___children___internal___fieldOwners'
  | 'navigation___children___internal___ignoreType'
  | 'navigation___children___internal___mediaType'
  | 'navigation___children___internal___owner'
  | 'navigation___children___internal___type'
  | 'navigation___internal___content'
  | 'navigation___internal___contentDigest'
  | 'navigation___internal___description'
  | 'navigation___internal___fieldOwners'
  | 'navigation___internal___ignoreType'
  | 'navigation___internal___mediaType'
  | 'navigation___internal___owner'
  | 'navigation___internal___type'
  | 'navigation___name'
  | 'navigation___links'
  | 'navigation___links___id'
  | 'navigation___links___parent___id'
  | 'navigation___links___parent___children'
  | 'navigation___links___children'
  | 'navigation___links___children___id'
  | 'navigation___links___children___children'
  | 'navigation___links___internal___content'
  | 'navigation___links___internal___contentDigest'
  | 'navigation___links___internal___description'
  | 'navigation___links___internal___fieldOwners'
  | 'navigation___links___internal___ignoreType'
  | 'navigation___links___internal___mediaType'
  | 'navigation___links___internal___owner'
  | 'navigation___links___internal___type'
  | 'navigation___links___type'
  | 'navigation___links___name'
  | 'navigation___links___label'
  | 'navigation___links___page___id'
  | 'navigation___links___page___children'
  | 'navigation___links___page___name'
  | 'navigation___links___page___title'
  | 'navigation___links___page___slug'
  | 'navigation___links___page___sections'
  | 'navigation___links___page___link'
  | 'navigation___links___page___spaceId'
  | 'navigation___links___page___contentful_id'
  | 'navigation___links___page___createdAt'
  | 'navigation___links___page___updatedAt'
  | 'navigation___links___page___node_locale'
  | 'navigation___links___navigation'
  | 'navigation___links___navigation___id'
  | 'navigation___links___navigation___children'
  | 'navigation___links___navigation___name'
  | 'navigation___links___navigation___links'
  | 'navigation___links___navigation___spaceId'
  | 'navigation___links___navigation___contentful_id'
  | 'navigation___links___navigation___createdAt'
  | 'navigation___links___navigation___updatedAt'
  | 'navigation___links___navigation___node_locale'
  | 'navigation___links___navigation___navigation'
  | 'navigation___links___navigation___subNavigation'
  | 'navigation___links___spaceId'
  | 'navigation___links___contentful_id'
  | 'navigation___links___createdAt'
  | 'navigation___links___updatedAt'
  | 'navigation___links___sys___type'
  | 'navigation___links___sys___revision'
  | 'navigation___links___node_locale'
  | 'navigation___links___block'
  | 'navigation___links___block___id'
  | 'navigation___links___block___children'
  | 'navigation___links___block___name'
  | 'navigation___links___block___variant'
  | 'navigation___links___block___spaceId'
  | 'navigation___links___block___contentful_id'
  | 'navigation___links___block___createdAt'
  | 'navigation___links___block___updatedAt'
  | 'navigation___links___block___node_locale'
  | 'navigation___links___block___section'
  | 'navigation___links___block___medias'
  | 'navigation___links___url'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___type'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
  | 'navigation___navigation'
  | 'navigation___navigation___id'
  | 'navigation___navigation___parent___id'
  | 'navigation___navigation___parent___children'
  | 'navigation___navigation___children'
  | 'navigation___navigation___children___id'
  | 'navigation___navigation___children___children'
  | 'navigation___navigation___internal___content'
  | 'navigation___navigation___internal___contentDigest'
  | 'navigation___navigation___internal___description'
  | 'navigation___navigation___internal___fieldOwners'
  | 'navigation___navigation___internal___ignoreType'
  | 'navigation___navigation___internal___mediaType'
  | 'navigation___navigation___internal___owner'
  | 'navigation___navigation___internal___type'
  | 'navigation___navigation___name'
  | 'navigation___navigation___links'
  | 'navigation___navigation___links___id'
  | 'navigation___navigation___links___children'
  | 'navigation___navigation___links___type'
  | 'navigation___navigation___links___name'
  | 'navigation___navigation___links___label'
  | 'navigation___navigation___links___navigation'
  | 'navigation___navigation___links___spaceId'
  | 'navigation___navigation___links___contentful_id'
  | 'navigation___navigation___links___createdAt'
  | 'navigation___navigation___links___updatedAt'
  | 'navigation___navigation___links___node_locale'
  | 'navigation___navigation___links___block'
  | 'navigation___navigation___links___url'
  | 'navigation___navigation___spaceId'
  | 'navigation___navigation___contentful_id'
  | 'navigation___navigation___createdAt'
  | 'navigation___navigation___updatedAt'
  | 'navigation___navigation___sys___type'
  | 'navigation___navigation___sys___revision'
  | 'navigation___navigation___node_locale'
  | 'navigation___navigation___navigation'
  | 'navigation___navigation___navigation___id'
  | 'navigation___navigation___navigation___children'
  | 'navigation___navigation___navigation___name'
  | 'navigation___navigation___navigation___links'
  | 'navigation___navigation___navigation___spaceId'
  | 'navigation___navigation___navigation___contentful_id'
  | 'navigation___navigation___navigation___createdAt'
  | 'navigation___navigation___navigation___updatedAt'
  | 'navigation___navigation___navigation___node_locale'
  | 'navigation___navigation___navigation___navigation'
  | 'navigation___navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation___id'
  | 'navigation___navigation___subNavigation___children'
  | 'navigation___navigation___subNavigation___name'
  | 'navigation___navigation___subNavigation___links'
  | 'navigation___navigation___subNavigation___spaceId'
  | 'navigation___navigation___subNavigation___contentful_id'
  | 'navigation___navigation___subNavigation___createdAt'
  | 'navigation___navigation___subNavigation___updatedAt'
  | 'navigation___navigation___subNavigation___node_locale'
  | 'navigation___navigation___subNavigation___navigation'
  | 'navigation___navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation'
  | 'navigation___subNavigation___id'
  | 'navigation___subNavigation___parent___id'
  | 'navigation___subNavigation___parent___children'
  | 'navigation___subNavigation___children'
  | 'navigation___subNavigation___children___id'
  | 'navigation___subNavigation___children___children'
  | 'navigation___subNavigation___internal___content'
  | 'navigation___subNavigation___internal___contentDigest'
  | 'navigation___subNavigation___internal___description'
  | 'navigation___subNavigation___internal___fieldOwners'
  | 'navigation___subNavigation___internal___ignoreType'
  | 'navigation___subNavigation___internal___mediaType'
  | 'navigation___subNavigation___internal___owner'
  | 'navigation___subNavigation___internal___type'
  | 'navigation___subNavigation___name'
  | 'navigation___subNavigation___links'
  | 'navigation___subNavigation___links___id'
  | 'navigation___subNavigation___links___children'
  | 'navigation___subNavigation___links___type'
  | 'navigation___subNavigation___links___name'
  | 'navigation___subNavigation___links___label'
  | 'navigation___subNavigation___links___navigation'
  | 'navigation___subNavigation___links___spaceId'
  | 'navigation___subNavigation___links___contentful_id'
  | 'navigation___subNavigation___links___createdAt'
  | 'navigation___subNavigation___links___updatedAt'
  | 'navigation___subNavigation___links___node_locale'
  | 'navigation___subNavigation___links___block'
  | 'navigation___subNavigation___links___url'
  | 'navigation___subNavigation___spaceId'
  | 'navigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___createdAt'
  | 'navigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___sys___type'
  | 'navigation___subNavigation___sys___revision'
  | 'navigation___subNavigation___node_locale'
  | 'navigation___subNavigation___navigation'
  | 'navigation___subNavigation___navigation___id'
  | 'navigation___subNavigation___navigation___children'
  | 'navigation___subNavigation___navigation___name'
  | 'navigation___subNavigation___navigation___links'
  | 'navigation___subNavigation___navigation___spaceId'
  | 'navigation___subNavigation___navigation___contentful_id'
  | 'navigation___subNavigation___navigation___createdAt'
  | 'navigation___subNavigation___navigation___updatedAt'
  | 'navigation___subNavigation___navigation___node_locale'
  | 'navigation___subNavigation___navigation___navigation'
  | 'navigation___subNavigation___navigation___subNavigation'
  | 'navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___id'
  | 'navigation___subNavigation___subNavigation___children'
  | 'navigation___subNavigation___subNavigation___name'
  | 'navigation___subNavigation___subNavigation___links'
  | 'navigation___subNavigation___subNavigation___spaceId'
  | 'navigation___subNavigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___subNavigation___createdAt'
  | 'navigation___subNavigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation___navigation'
  | 'navigation___subNavigation___subNavigation___subNavigation'
  | 'subNavigation'
  | 'subNavigation___id'
  | 'subNavigation___parent___id'
  | 'subNavigation___parent___parent___id'
  | 'subNavigation___parent___parent___children'
  | 'subNavigation___parent___children'
  | 'subNavigation___parent___children___id'
  | 'subNavigation___parent___children___children'
  | 'subNavigation___parent___internal___content'
  | 'subNavigation___parent___internal___contentDigest'
  | 'subNavigation___parent___internal___description'
  | 'subNavigation___parent___internal___fieldOwners'
  | 'subNavigation___parent___internal___ignoreType'
  | 'subNavigation___parent___internal___mediaType'
  | 'subNavigation___parent___internal___owner'
  | 'subNavigation___parent___internal___type'
  | 'subNavigation___children'
  | 'subNavigation___children___id'
  | 'subNavigation___children___parent___id'
  | 'subNavigation___children___parent___children'
  | 'subNavigation___children___children'
  | 'subNavigation___children___children___id'
  | 'subNavigation___children___children___children'
  | 'subNavigation___children___internal___content'
  | 'subNavigation___children___internal___contentDigest'
  | 'subNavigation___children___internal___description'
  | 'subNavigation___children___internal___fieldOwners'
  | 'subNavigation___children___internal___ignoreType'
  | 'subNavigation___children___internal___mediaType'
  | 'subNavigation___children___internal___owner'
  | 'subNavigation___children___internal___type'
  | 'subNavigation___internal___content'
  | 'subNavigation___internal___contentDigest'
  | 'subNavigation___internal___description'
  | 'subNavigation___internal___fieldOwners'
  | 'subNavigation___internal___ignoreType'
  | 'subNavigation___internal___mediaType'
  | 'subNavigation___internal___owner'
  | 'subNavigation___internal___type'
  | 'subNavigation___name'
  | 'subNavigation___links'
  | 'subNavigation___links___id'
  | 'subNavigation___links___parent___id'
  | 'subNavigation___links___parent___children'
  | 'subNavigation___links___children'
  | 'subNavigation___links___children___id'
  | 'subNavigation___links___children___children'
  | 'subNavigation___links___internal___content'
  | 'subNavigation___links___internal___contentDigest'
  | 'subNavigation___links___internal___description'
  | 'subNavigation___links___internal___fieldOwners'
  | 'subNavigation___links___internal___ignoreType'
  | 'subNavigation___links___internal___mediaType'
  | 'subNavigation___links___internal___owner'
  | 'subNavigation___links___internal___type'
  | 'subNavigation___links___type'
  | 'subNavigation___links___name'
  | 'subNavigation___links___label'
  | 'subNavigation___links___page___id'
  | 'subNavigation___links___page___children'
  | 'subNavigation___links___page___name'
  | 'subNavigation___links___page___title'
  | 'subNavigation___links___page___slug'
  | 'subNavigation___links___page___sections'
  | 'subNavigation___links___page___link'
  | 'subNavigation___links___page___spaceId'
  | 'subNavigation___links___page___contentful_id'
  | 'subNavigation___links___page___createdAt'
  | 'subNavigation___links___page___updatedAt'
  | 'subNavigation___links___page___node_locale'
  | 'subNavigation___links___navigation'
  | 'subNavigation___links___navigation___id'
  | 'subNavigation___links___navigation___children'
  | 'subNavigation___links___navigation___name'
  | 'subNavigation___links___navigation___links'
  | 'subNavigation___links___navigation___spaceId'
  | 'subNavigation___links___navigation___contentful_id'
  | 'subNavigation___links___navigation___createdAt'
  | 'subNavigation___links___navigation___updatedAt'
  | 'subNavigation___links___navigation___node_locale'
  | 'subNavigation___links___navigation___navigation'
  | 'subNavigation___links___navigation___subNavigation'
  | 'subNavigation___links___spaceId'
  | 'subNavigation___links___contentful_id'
  | 'subNavigation___links___createdAt'
  | 'subNavigation___links___updatedAt'
  | 'subNavigation___links___sys___type'
  | 'subNavigation___links___sys___revision'
  | 'subNavigation___links___node_locale'
  | 'subNavigation___links___block'
  | 'subNavigation___links___block___id'
  | 'subNavigation___links___block___children'
  | 'subNavigation___links___block___name'
  | 'subNavigation___links___block___variant'
  | 'subNavigation___links___block___spaceId'
  | 'subNavigation___links___block___contentful_id'
  | 'subNavigation___links___block___createdAt'
  | 'subNavigation___links___block___updatedAt'
  | 'subNavigation___links___block___node_locale'
  | 'subNavigation___links___block___section'
  | 'subNavigation___links___block___medias'
  | 'subNavigation___links___url'
  | 'subNavigation___spaceId'
  | 'subNavigation___contentful_id'
  | 'subNavigation___createdAt'
  | 'subNavigation___updatedAt'
  | 'subNavigation___sys___type'
  | 'subNavigation___sys___revision'
  | 'subNavigation___node_locale'
  | 'subNavigation___navigation'
  | 'subNavigation___navigation___id'
  | 'subNavigation___navigation___parent___id'
  | 'subNavigation___navigation___parent___children'
  | 'subNavigation___navigation___children'
  | 'subNavigation___navigation___children___id'
  | 'subNavigation___navigation___children___children'
  | 'subNavigation___navigation___internal___content'
  | 'subNavigation___navigation___internal___contentDigest'
  | 'subNavigation___navigation___internal___description'
  | 'subNavigation___navigation___internal___fieldOwners'
  | 'subNavigation___navigation___internal___ignoreType'
  | 'subNavigation___navigation___internal___mediaType'
  | 'subNavigation___navigation___internal___owner'
  | 'subNavigation___navigation___internal___type'
  | 'subNavigation___navigation___name'
  | 'subNavigation___navigation___links'
  | 'subNavigation___navigation___links___id'
  | 'subNavigation___navigation___links___children'
  | 'subNavigation___navigation___links___type'
  | 'subNavigation___navigation___links___name'
  | 'subNavigation___navigation___links___label'
  | 'subNavigation___navigation___links___navigation'
  | 'subNavigation___navigation___links___spaceId'
  | 'subNavigation___navigation___links___contentful_id'
  | 'subNavigation___navigation___links___createdAt'
  | 'subNavigation___navigation___links___updatedAt'
  | 'subNavigation___navigation___links___node_locale'
  | 'subNavigation___navigation___links___block'
  | 'subNavigation___navigation___links___url'
  | 'subNavigation___navigation___spaceId'
  | 'subNavigation___navigation___contentful_id'
  | 'subNavigation___navigation___createdAt'
  | 'subNavigation___navigation___updatedAt'
  | 'subNavigation___navigation___sys___type'
  | 'subNavigation___navigation___sys___revision'
  | 'subNavigation___navigation___node_locale'
  | 'subNavigation___navigation___navigation'
  | 'subNavigation___navigation___navigation___id'
  | 'subNavigation___navigation___navigation___children'
  | 'subNavigation___navigation___navigation___name'
  | 'subNavigation___navigation___navigation___links'
  | 'subNavigation___navigation___navigation___spaceId'
  | 'subNavigation___navigation___navigation___contentful_id'
  | 'subNavigation___navigation___navigation___createdAt'
  | 'subNavigation___navigation___navigation___updatedAt'
  | 'subNavigation___navigation___navigation___node_locale'
  | 'subNavigation___navigation___navigation___navigation'
  | 'subNavigation___navigation___navigation___subNavigation'
  | 'subNavigation___navigation___subNavigation'
  | 'subNavigation___navigation___subNavigation___id'
  | 'subNavigation___navigation___subNavigation___children'
  | 'subNavigation___navigation___subNavigation___name'
  | 'subNavigation___navigation___subNavigation___links'
  | 'subNavigation___navigation___subNavigation___spaceId'
  | 'subNavigation___navigation___subNavigation___contentful_id'
  | 'subNavigation___navigation___subNavigation___createdAt'
  | 'subNavigation___navigation___subNavigation___updatedAt'
  | 'subNavigation___navigation___subNavigation___node_locale'
  | 'subNavigation___navigation___subNavigation___navigation'
  | 'subNavigation___navigation___subNavigation___subNavigation'
  | 'subNavigation___subNavigation'
  | 'subNavigation___subNavigation___id'
  | 'subNavigation___subNavigation___parent___id'
  | 'subNavigation___subNavigation___parent___children'
  | 'subNavigation___subNavigation___children'
  | 'subNavigation___subNavigation___children___id'
  | 'subNavigation___subNavigation___children___children'
  | 'subNavigation___subNavigation___internal___content'
  | 'subNavigation___subNavigation___internal___contentDigest'
  | 'subNavigation___subNavigation___internal___description'
  | 'subNavigation___subNavigation___internal___fieldOwners'
  | 'subNavigation___subNavigation___internal___ignoreType'
  | 'subNavigation___subNavigation___internal___mediaType'
  | 'subNavigation___subNavigation___internal___owner'
  | 'subNavigation___subNavigation___internal___type'
  | 'subNavigation___subNavigation___name'
  | 'subNavigation___subNavigation___links'
  | 'subNavigation___subNavigation___links___id'
  | 'subNavigation___subNavigation___links___children'
  | 'subNavigation___subNavigation___links___type'
  | 'subNavigation___subNavigation___links___name'
  | 'subNavigation___subNavigation___links___label'
  | 'subNavigation___subNavigation___links___navigation'
  | 'subNavigation___subNavigation___links___spaceId'
  | 'subNavigation___subNavigation___links___contentful_id'
  | 'subNavigation___subNavigation___links___createdAt'
  | 'subNavigation___subNavigation___links___updatedAt'
  | 'subNavigation___subNavigation___links___node_locale'
  | 'subNavigation___subNavigation___links___block'
  | 'subNavigation___subNavigation___links___url'
  | 'subNavigation___subNavigation___spaceId'
  | 'subNavigation___subNavigation___contentful_id'
  | 'subNavigation___subNavigation___createdAt'
  | 'subNavigation___subNavigation___updatedAt'
  | 'subNavigation___subNavigation___sys___type'
  | 'subNavigation___subNavigation___sys___revision'
  | 'subNavigation___subNavigation___node_locale'
  | 'subNavigation___subNavigation___navigation'
  | 'subNavigation___subNavigation___navigation___id'
  | 'subNavigation___subNavigation___navigation___children'
  | 'subNavigation___subNavigation___navigation___name'
  | 'subNavigation___subNavigation___navigation___links'
  | 'subNavigation___subNavigation___navigation___spaceId'
  | 'subNavigation___subNavigation___navigation___contentful_id'
  | 'subNavigation___subNavigation___navigation___createdAt'
  | 'subNavigation___subNavigation___navigation___updatedAt'
  | 'subNavigation___subNavigation___navigation___node_locale'
  | 'subNavigation___subNavigation___navigation___navigation'
  | 'subNavigation___subNavigation___navigation___subNavigation'
  | 'subNavigation___subNavigation___subNavigation'
  | 'subNavigation___subNavigation___subNavigation___id'
  | 'subNavigation___subNavigation___subNavigation___children'
  | 'subNavigation___subNavigation___subNavigation___name'
  | 'subNavigation___subNavigation___subNavigation___links'
  | 'subNavigation___subNavigation___subNavigation___spaceId'
  | 'subNavigation___subNavigation___subNavigation___contentful_id'
  | 'subNavigation___subNavigation___subNavigation___createdAt'
  | 'subNavigation___subNavigation___subNavigation___updatedAt'
  | 'subNavigation___subNavigation___subNavigation___node_locale'
  | 'subNavigation___subNavigation___subNavigation___navigation'
  | 'subNavigation___subNavigation___subNavigation___subNavigation';

export type ContentfulNavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<ContentfulLinkFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  subNavigation?: Maybe<ContentfulNavigationFilterListInput>;
};

export type ContentfulNavigationFilterListInput = {
  elemMatch?: Maybe<ContentfulNavigationFilterInput>;
};

export type ContentfulNavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationEdge>;
  nodes: Array<ContentfulNavigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNavigationSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNavigationSysContentType>;
};

export type ContentfulNavigationSysContentType = {
  sys?: Maybe<ContentfulNavigationSysContentTypeSys>;
};

export type ContentfulNavigationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNavigationSysContentTypeSysFilterInput>;
};

export type ContentfulNavigationSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNavigationSysContentTypeFilterInput>;
};

export type ContentfulPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<ContentfulSection>>>;
  link?: Maybe<Array<Maybe<ContentfulLink>>>;
  description?: Maybe<ContentfulPageDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
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
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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
  | 'sections___layout'
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
  | 'sections___page___sections'
  | 'sections___page___sections___id'
  | 'sections___page___sections___children'
  | 'sections___page___sections___name'
  | 'sections___page___sections___layout'
  | 'sections___page___sections___page'
  | 'sections___page___sections___spaceId'
  | 'sections___page___sections___contentful_id'
  | 'sections___page___sections___createdAt'
  | 'sections___page___sections___updatedAt'
  | 'sections___page___sections___node_locale'
  | 'sections___page___sections___variant'
  | 'sections___page___link'
  | 'sections___page___link___id'
  | 'sections___page___link___children'
  | 'sections___page___link___type'
  | 'sections___page___link___name'
  | 'sections___page___link___label'
  | 'sections___page___link___navigation'
  | 'sections___page___link___spaceId'
  | 'sections___page___link___contentful_id'
  | 'sections___page___link___createdAt'
  | 'sections___page___link___updatedAt'
  | 'sections___page___link___node_locale'
  | 'sections___page___link___block'
  | 'sections___page___link___url'
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
  | 'sections___page___childContentfulPageDescriptionTextNode___id'
  | 'sections___page___childContentfulPageDescriptionTextNode___children'
  | 'sections___page___childContentfulPageDescriptionTextNode___description'
  | 'sections___spaceId'
  | 'sections___contentful_id'
  | 'sections___createdAt'
  | 'sections___updatedAt'
  | 'sections___sys___type'
  | 'sections___sys___revision'
  | 'sections___node_locale'
  | 'sections___variant'
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
  | 'link___page___sections'
  | 'link___page___sections___id'
  | 'link___page___sections___children'
  | 'link___page___sections___name'
  | 'link___page___sections___layout'
  | 'link___page___sections___page'
  | 'link___page___sections___spaceId'
  | 'link___page___sections___contentful_id'
  | 'link___page___sections___createdAt'
  | 'link___page___sections___updatedAt'
  | 'link___page___sections___node_locale'
  | 'link___page___sections___variant'
  | 'link___page___link'
  | 'link___page___link___id'
  | 'link___page___link___children'
  | 'link___page___link___type'
  | 'link___page___link___name'
  | 'link___page___link___label'
  | 'link___page___link___navigation'
  | 'link___page___link___spaceId'
  | 'link___page___link___contentful_id'
  | 'link___page___link___createdAt'
  | 'link___page___link___updatedAt'
  | 'link___page___link___node_locale'
  | 'link___page___link___block'
  | 'link___page___link___url'
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
  | 'link___page___childContentfulPageDescriptionTextNode___id'
  | 'link___page___childContentfulPageDescriptionTextNode___children'
  | 'link___page___childContentfulPageDescriptionTextNode___description'
  | 'link___navigation'
  | 'link___navigation___id'
  | 'link___navigation___parent___id'
  | 'link___navigation___parent___children'
  | 'link___navigation___children'
  | 'link___navigation___children___id'
  | 'link___navigation___children___children'
  | 'link___navigation___internal___content'
  | 'link___navigation___internal___contentDigest'
  | 'link___navigation___internal___description'
  | 'link___navigation___internal___fieldOwners'
  | 'link___navigation___internal___ignoreType'
  | 'link___navigation___internal___mediaType'
  | 'link___navigation___internal___owner'
  | 'link___navigation___internal___type'
  | 'link___navigation___name'
  | 'link___navigation___links'
  | 'link___navigation___links___id'
  | 'link___navigation___links___children'
  | 'link___navigation___links___type'
  | 'link___navigation___links___name'
  | 'link___navigation___links___label'
  | 'link___navigation___links___navigation'
  | 'link___navigation___links___spaceId'
  | 'link___navigation___links___contentful_id'
  | 'link___navigation___links___createdAt'
  | 'link___navigation___links___updatedAt'
  | 'link___navigation___links___node_locale'
  | 'link___navigation___links___block'
  | 'link___navigation___links___url'
  | 'link___navigation___spaceId'
  | 'link___navigation___contentful_id'
  | 'link___navigation___createdAt'
  | 'link___navigation___updatedAt'
  | 'link___navigation___sys___type'
  | 'link___navigation___sys___revision'
  | 'link___navigation___node_locale'
  | 'link___navigation___navigation'
  | 'link___navigation___navigation___id'
  | 'link___navigation___navigation___children'
  | 'link___navigation___navigation___name'
  | 'link___navigation___navigation___links'
  | 'link___navigation___navigation___spaceId'
  | 'link___navigation___navigation___contentful_id'
  | 'link___navigation___navigation___createdAt'
  | 'link___navigation___navigation___updatedAt'
  | 'link___navigation___navigation___node_locale'
  | 'link___navigation___navigation___navigation'
  | 'link___navigation___navigation___subNavigation'
  | 'link___navigation___subNavigation'
  | 'link___navigation___subNavigation___id'
  | 'link___navigation___subNavigation___children'
  | 'link___navigation___subNavigation___name'
  | 'link___navigation___subNavigation___links'
  | 'link___navigation___subNavigation___spaceId'
  | 'link___navigation___subNavigation___contentful_id'
  | 'link___navigation___subNavigation___createdAt'
  | 'link___navigation___subNavigation___updatedAt'
  | 'link___navigation___subNavigation___node_locale'
  | 'link___navigation___subNavigation___navigation'
  | 'link___navigation___subNavigation___subNavigation'
  | 'link___spaceId'
  | 'link___contentful_id'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___node_locale'
  | 'link___block'
  | 'link___block___id'
  | 'link___block___parent___id'
  | 'link___block___parent___children'
  | 'link___block___children'
  | 'link___block___children___id'
  | 'link___block___children___children'
  | 'link___block___internal___content'
  | 'link___block___internal___contentDigest'
  | 'link___block___internal___description'
  | 'link___block___internal___fieldOwners'
  | 'link___block___internal___ignoreType'
  | 'link___block___internal___mediaType'
  | 'link___block___internal___owner'
  | 'link___block___internal___type'
  | 'link___block___name'
  | 'link___block___variant'
  | 'link___block___text___id'
  | 'link___block___text___children'
  | 'link___block___text___text'
  | 'link___block___spaceId'
  | 'link___block___contentful_id'
  | 'link___block___createdAt'
  | 'link___block___updatedAt'
  | 'link___block___sys___type'
  | 'link___block___sys___revision'
  | 'link___block___node_locale'
  | 'link___block___section'
  | 'link___block___section___id'
  | 'link___block___section___children'
  | 'link___block___section___name'
  | 'link___block___section___layout'
  | 'link___block___section___page'
  | 'link___block___section___spaceId'
  | 'link___block___section___contentful_id'
  | 'link___block___section___createdAt'
  | 'link___block___section___updatedAt'
  | 'link___block___section___node_locale'
  | 'link___block___section___variant'
  | 'link___block___medias'
  | 'link___block___medias___id'
  | 'link___block___medias___children'
  | 'link___block___medias___name'
  | 'link___block___medias___medias'
  | 'link___block___medias___block'
  | 'link___block___medias___spaceId'
  | 'link___block___medias___contentful_id'
  | 'link___block___medias___createdAt'
  | 'link___block___medias___updatedAt'
  | 'link___block___medias___node_locale'
  | 'link___block___medias___carouselStyle'
  | 'link___block___medias___size'
  | 'link___block___medias___variant'
  | 'link___block___link___id'
  | 'link___block___link___children'
  | 'link___block___link___type'
  | 'link___block___link___name'
  | 'link___block___link___label'
  | 'link___block___link___navigation'
  | 'link___block___link___spaceId'
  | 'link___block___link___contentful_id'
  | 'link___block___link___createdAt'
  | 'link___block___link___updatedAt'
  | 'link___block___link___node_locale'
  | 'link___block___link___block'
  | 'link___block___link___url'
  | 'link___block___childContentfulBlockTextTextNode___id'
  | 'link___block___childContentfulBlockTextTextNode___children'
  | 'link___block___childContentfulBlockTextTextNode___text'
  | 'link___url'
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
  | 'description___childMdx___frontmatter___layout'
  | 'description___childMdx___frontmatter___template'
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
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___layout'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___template'
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
  sections?: Maybe<ContentfulSectionFilterListInput>;
  link?: Maybe<ContentfulLinkFilterListInput>;
  description?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
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
  | 'preview___localFile___sourceInstanceName'
  | 'preview___localFile___absolutePath'
  | 'preview___localFile___relativePath'
  | 'preview___localFile___extension'
  | 'preview___localFile___size'
  | 'preview___localFile___prettySize'
  | 'preview___localFile___modifiedTime'
  | 'preview___localFile___accessTime'
  | 'preview___localFile___changeTime'
  | 'preview___localFile___birthTime'
  | 'preview___localFile___root'
  | 'preview___localFile___dir'
  | 'preview___localFile___base'
  | 'preview___localFile___ext'
  | 'preview___localFile___name'
  | 'preview___localFile___relativeDirectory'
  | 'preview___localFile___dev'
  | 'preview___localFile___mode'
  | 'preview___localFile___nlink'
  | 'preview___localFile___uid'
  | 'preview___localFile___gid'
  | 'preview___localFile___rdev'
  | 'preview___localFile___ino'
  | 'preview___localFile___atimeMs'
  | 'preview___localFile___mtimeMs'
  | 'preview___localFile___ctimeMs'
  | 'preview___localFile___atime'
  | 'preview___localFile___mtime'
  | 'preview___localFile___ctime'
  | 'preview___localFile___birthtime'
  | 'preview___localFile___birthtimeMs'
  | 'preview___localFile___blksize'
  | 'preview___localFile___blocks'
  | 'preview___localFile___url'
  | 'preview___localFile___publicURL'
  | 'preview___localFile___childImageSharp___id'
  | 'preview___localFile___childImageSharp___children'
  | 'preview___localFile___id'
  | 'preview___localFile___parent___id'
  | 'preview___localFile___parent___children'
  | 'preview___localFile___children'
  | 'preview___localFile___children___id'
  | 'preview___localFile___children___children'
  | 'preview___localFile___internal___content'
  | 'preview___localFile___internal___contentDigest'
  | 'preview___localFile___internal___description'
  | 'preview___localFile___internal___fieldOwners'
  | 'preview___localFile___internal___ignoreType'
  | 'preview___localFile___internal___mediaType'
  | 'preview___localFile___internal___owner'
  | 'preview___localFile___internal___type'
  | 'preview___localFile___childMdx___rawBody'
  | 'preview___localFile___childMdx___fileAbsolutePath'
  | 'preview___localFile___childMdx___slug'
  | 'preview___localFile___childMdx___body'
  | 'preview___localFile___childMdx___excerpt'
  | 'preview___localFile___childMdx___headings'
  | 'preview___localFile___childMdx___html'
  | 'preview___localFile___childMdx___mdxAST'
  | 'preview___localFile___childMdx___tableOfContents'
  | 'preview___localFile___childMdx___timeToRead'
  | 'preview___localFile___childMdx___id'
  | 'preview___localFile___childMdx___children'
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
  | 'node_locale';

export type ContentfulPageTypeFilterInput = {
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
  layout?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<ContentfulBlockContentfulBlockCostItemUnion>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSectionSys>;
  node_locale?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
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
  | 'layout'
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
  | 'page___sections___layout'
  | 'page___sections___page'
  | 'page___sections___page___id'
  | 'page___sections___page___children'
  | 'page___sections___page___name'
  | 'page___sections___page___title'
  | 'page___sections___page___slug'
  | 'page___sections___page___sections'
  | 'page___sections___page___link'
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
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
  | 'page___link___page___link'
  | 'page___link___page___spaceId'
  | 'page___link___page___contentful_id'
  | 'page___link___page___createdAt'
  | 'page___link___page___updatedAt'
  | 'page___link___page___node_locale'
  | 'page___link___navigation'
  | 'page___link___navigation___id'
  | 'page___link___navigation___children'
  | 'page___link___navigation___name'
  | 'page___link___navigation___links'
  | 'page___link___navigation___spaceId'
  | 'page___link___navigation___contentful_id'
  | 'page___link___navigation___createdAt'
  | 'page___link___navigation___updatedAt'
  | 'page___link___navigation___node_locale'
  | 'page___link___navigation___navigation'
  | 'page___link___navigation___subNavigation'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___link___block'
  | 'page___link___block___id'
  | 'page___link___block___children'
  | 'page___link___block___name'
  | 'page___link___block___variant'
  | 'page___link___block___spaceId'
  | 'page___link___block___contentful_id'
  | 'page___link___block___createdAt'
  | 'page___link___block___updatedAt'
  | 'page___link___block___node_locale'
  | 'page___link___block___section'
  | 'page___link___block___medias'
  | 'page___link___url'
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
  | 'node_locale'
  | 'variant';

export type ContentfulSectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
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
  | 'preview___localFile___sourceInstanceName'
  | 'preview___localFile___absolutePath'
  | 'preview___localFile___relativePath'
  | 'preview___localFile___extension'
  | 'preview___localFile___size'
  | 'preview___localFile___prettySize'
  | 'preview___localFile___modifiedTime'
  | 'preview___localFile___accessTime'
  | 'preview___localFile___changeTime'
  | 'preview___localFile___birthTime'
  | 'preview___localFile___root'
  | 'preview___localFile___dir'
  | 'preview___localFile___base'
  | 'preview___localFile___ext'
  | 'preview___localFile___name'
  | 'preview___localFile___relativeDirectory'
  | 'preview___localFile___dev'
  | 'preview___localFile___mode'
  | 'preview___localFile___nlink'
  | 'preview___localFile___uid'
  | 'preview___localFile___gid'
  | 'preview___localFile___rdev'
  | 'preview___localFile___ino'
  | 'preview___localFile___atimeMs'
  | 'preview___localFile___mtimeMs'
  | 'preview___localFile___ctimeMs'
  | 'preview___localFile___atime'
  | 'preview___localFile___mtime'
  | 'preview___localFile___ctime'
  | 'preview___localFile___birthtime'
  | 'preview___localFile___birthtimeMs'
  | 'preview___localFile___blksize'
  | 'preview___localFile___blocks'
  | 'preview___localFile___url'
  | 'preview___localFile___publicURL'
  | 'preview___localFile___childImageSharp___id'
  | 'preview___localFile___childImageSharp___children'
  | 'preview___localFile___id'
  | 'preview___localFile___parent___id'
  | 'preview___localFile___parent___children'
  | 'preview___localFile___children'
  | 'preview___localFile___children___id'
  | 'preview___localFile___children___children'
  | 'preview___localFile___internal___content'
  | 'preview___localFile___internal___contentDigest'
  | 'preview___localFile___internal___description'
  | 'preview___localFile___internal___fieldOwners'
  | 'preview___localFile___internal___ignoreType'
  | 'preview___localFile___internal___mediaType'
  | 'preview___localFile___internal___owner'
  | 'preview___localFile___internal___type'
  | 'preview___localFile___childMdx___rawBody'
  | 'preview___localFile___childMdx___fileAbsolutePath'
  | 'preview___localFile___childMdx___slug'
  | 'preview___localFile___childMdx___body'
  | 'preview___localFile___childMdx___excerpt'
  | 'preview___localFile___childMdx___headings'
  | 'preview___localFile___childMdx___html'
  | 'preview___localFile___childMdx___mdxAST'
  | 'preview___localFile___childMdx___tableOfContents'
  | 'preview___localFile___childMdx___timeToRead'
  | 'preview___localFile___childMdx___id'
  | 'preview___localFile___childMdx___children'
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
  | 'node_locale';

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

export type ContentfulTag = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ContentfulTagType>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTagSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagGroupConnection>;
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagEdge = {
  next?: Maybe<ContentfulTag>;
  node: ContentfulTag;
  previous?: Maybe<ContentfulTag>;
};

export type ContentfulTagFieldsEnum = 
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
  | 'type___tag'
  | 'type___tag___id'
  | 'type___tag___parent___id'
  | 'type___tag___parent___children'
  | 'type___tag___children'
  | 'type___tag___children___id'
  | 'type___tag___children___children'
  | 'type___tag___internal___content'
  | 'type___tag___internal___contentDigest'
  | 'type___tag___internal___description'
  | 'type___tag___internal___fieldOwners'
  | 'type___tag___internal___ignoreType'
  | 'type___tag___internal___mediaType'
  | 'type___tag___internal___owner'
  | 'type___tag___internal___type'
  | 'type___tag___name'
  | 'type___tag___type___id'
  | 'type___tag___type___children'
  | 'type___tag___type___tag'
  | 'type___tag___type___spaceId'
  | 'type___tag___type___contentful_id'
  | 'type___tag___type___createdAt'
  | 'type___tag___type___updatedAt'
  | 'type___tag___type___node_locale'
  | 'type___tag___spaceId'
  | 'type___tag___contentful_id'
  | 'type___tag___createdAt'
  | 'type___tag___updatedAt'
  | 'type___tag___sys___type'
  | 'type___tag___sys___revision'
  | 'type___tag___node_locale'
  | 'type___name___id'
  | 'type___name___parent___id'
  | 'type___name___parent___children'
  | 'type___name___children'
  | 'type___name___children___id'
  | 'type___name___children___children'
  | 'type___name___internal___content'
  | 'type___name___internal___contentDigest'
  | 'type___name___internal___description'
  | 'type___name___internal___fieldOwners'
  | 'type___name___internal___ignoreType'
  | 'type___name___internal___mediaType'
  | 'type___name___internal___owner'
  | 'type___name___internal___type'
  | 'type___name___name'
  | 'type___name___sys___type'
  | 'type___name___childMdx___rawBody'
  | 'type___name___childMdx___fileAbsolutePath'
  | 'type___name___childMdx___slug'
  | 'type___name___childMdx___body'
  | 'type___name___childMdx___excerpt'
  | 'type___name___childMdx___headings'
  | 'type___name___childMdx___html'
  | 'type___name___childMdx___mdxAST'
  | 'type___name___childMdx___tableOfContents'
  | 'type___name___childMdx___timeToRead'
  | 'type___name___childMdx___id'
  | 'type___name___childMdx___children'
  | 'type___spaceId'
  | 'type___contentful_id'
  | 'type___createdAt'
  | 'type___updatedAt'
  | 'type___sys___type'
  | 'type___sys___revision'
  | 'type___node_locale'
  | 'type___childContentfulTagTypeNameTextNode___id'
  | 'type___childContentfulTagTypeNameTextNode___parent___id'
  | 'type___childContentfulTagTypeNameTextNode___parent___children'
  | 'type___childContentfulTagTypeNameTextNode___children'
  | 'type___childContentfulTagTypeNameTextNode___children___id'
  | 'type___childContentfulTagTypeNameTextNode___children___children'
  | 'type___childContentfulTagTypeNameTextNode___internal___content'
  | 'type___childContentfulTagTypeNameTextNode___internal___contentDigest'
  | 'type___childContentfulTagTypeNameTextNode___internal___description'
  | 'type___childContentfulTagTypeNameTextNode___internal___fieldOwners'
  | 'type___childContentfulTagTypeNameTextNode___internal___ignoreType'
  | 'type___childContentfulTagTypeNameTextNode___internal___mediaType'
  | 'type___childContentfulTagTypeNameTextNode___internal___owner'
  | 'type___childContentfulTagTypeNameTextNode___internal___type'
  | 'type___childContentfulTagTypeNameTextNode___name'
  | 'type___childContentfulTagTypeNameTextNode___sys___type'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___rawBody'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___fileAbsolutePath'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___slug'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___body'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___excerpt'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___headings'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___html'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___mdxAST'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___tableOfContents'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___timeToRead'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___id'
  | 'type___childContentfulTagTypeNameTextNode___childMdx___children'
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

export type ContentfulTagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<ContentfulTagTypeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagFilterListInput = {
  elemMatch?: Maybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagEdge>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTagSysContentType>;
};

export type ContentfulTagSysContentType = {
  sys?: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulTagSysContentTypeFilterInput>;
};

export type ContentfulTagType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  tag?: Maybe<Array<Maybe<ContentfulTag>>>;
  name?: Maybe<ContentfulTagTypeNameTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTagTypeSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulTagTypeNameTextNode?: Maybe<ContentfulTagTypeNameTextNode>;
};


export type ContentfulTagTypeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagTypeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulTagTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagTypeEdge>;
  nodes: Array<ContentfulTagType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagTypeGroupConnection>;
};


export type ContentfulTagTypeConnectionDistinctArgs = {
  field: ContentfulTagTypeFieldsEnum;
};


export type ContentfulTagTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagTypeFieldsEnum;
};

export type ContentfulTagTypeEdge = {
  next?: Maybe<ContentfulTagType>;
  node: ContentfulTagType;
  previous?: Maybe<ContentfulTagType>;
};

export type ContentfulTagTypeFieldsEnum = 
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
  | 'tag'
  | 'tag___id'
  | 'tag___parent___id'
  | 'tag___parent___parent___id'
  | 'tag___parent___parent___children'
  | 'tag___parent___children'
  | 'tag___parent___children___id'
  | 'tag___parent___children___children'
  | 'tag___parent___internal___content'
  | 'tag___parent___internal___contentDigest'
  | 'tag___parent___internal___description'
  | 'tag___parent___internal___fieldOwners'
  | 'tag___parent___internal___ignoreType'
  | 'tag___parent___internal___mediaType'
  | 'tag___parent___internal___owner'
  | 'tag___parent___internal___type'
  | 'tag___children'
  | 'tag___children___id'
  | 'tag___children___parent___id'
  | 'tag___children___parent___children'
  | 'tag___children___children'
  | 'tag___children___children___id'
  | 'tag___children___children___children'
  | 'tag___children___internal___content'
  | 'tag___children___internal___contentDigest'
  | 'tag___children___internal___description'
  | 'tag___children___internal___fieldOwners'
  | 'tag___children___internal___ignoreType'
  | 'tag___children___internal___mediaType'
  | 'tag___children___internal___owner'
  | 'tag___children___internal___type'
  | 'tag___internal___content'
  | 'tag___internal___contentDigest'
  | 'tag___internal___description'
  | 'tag___internal___fieldOwners'
  | 'tag___internal___ignoreType'
  | 'tag___internal___mediaType'
  | 'tag___internal___owner'
  | 'tag___internal___type'
  | 'tag___name'
  | 'tag___type___id'
  | 'tag___type___parent___id'
  | 'tag___type___parent___children'
  | 'tag___type___children'
  | 'tag___type___children___id'
  | 'tag___type___children___children'
  | 'tag___type___internal___content'
  | 'tag___type___internal___contentDigest'
  | 'tag___type___internal___description'
  | 'tag___type___internal___fieldOwners'
  | 'tag___type___internal___ignoreType'
  | 'tag___type___internal___mediaType'
  | 'tag___type___internal___owner'
  | 'tag___type___internal___type'
  | 'tag___type___tag'
  | 'tag___type___tag___id'
  | 'tag___type___tag___children'
  | 'tag___type___tag___name'
  | 'tag___type___tag___spaceId'
  | 'tag___type___tag___contentful_id'
  | 'tag___type___tag___createdAt'
  | 'tag___type___tag___updatedAt'
  | 'tag___type___tag___node_locale'
  | 'tag___type___name___id'
  | 'tag___type___name___children'
  | 'tag___type___name___name'
  | 'tag___type___spaceId'
  | 'tag___type___contentful_id'
  | 'tag___type___createdAt'
  | 'tag___type___updatedAt'
  | 'tag___type___sys___type'
  | 'tag___type___sys___revision'
  | 'tag___type___node_locale'
  | 'tag___type___childContentfulTagTypeNameTextNode___id'
  | 'tag___type___childContentfulTagTypeNameTextNode___children'
  | 'tag___type___childContentfulTagTypeNameTextNode___name'
  | 'tag___spaceId'
  | 'tag___contentful_id'
  | 'tag___createdAt'
  | 'tag___updatedAt'
  | 'tag___sys___type'
  | 'tag___sys___revision'
  | 'tag___node_locale'
  | 'name___id'
  | 'name___parent___id'
  | 'name___parent___parent___id'
  | 'name___parent___parent___children'
  | 'name___parent___children'
  | 'name___parent___children___id'
  | 'name___parent___children___children'
  | 'name___parent___internal___content'
  | 'name___parent___internal___contentDigest'
  | 'name___parent___internal___description'
  | 'name___parent___internal___fieldOwners'
  | 'name___parent___internal___ignoreType'
  | 'name___parent___internal___mediaType'
  | 'name___parent___internal___owner'
  | 'name___parent___internal___type'
  | 'name___children'
  | 'name___children___id'
  | 'name___children___parent___id'
  | 'name___children___parent___children'
  | 'name___children___children'
  | 'name___children___children___id'
  | 'name___children___children___children'
  | 'name___children___internal___content'
  | 'name___children___internal___contentDigest'
  | 'name___children___internal___description'
  | 'name___children___internal___fieldOwners'
  | 'name___children___internal___ignoreType'
  | 'name___children___internal___mediaType'
  | 'name___children___internal___owner'
  | 'name___children___internal___type'
  | 'name___internal___content'
  | 'name___internal___contentDigest'
  | 'name___internal___description'
  | 'name___internal___fieldOwners'
  | 'name___internal___ignoreType'
  | 'name___internal___mediaType'
  | 'name___internal___owner'
  | 'name___internal___type'
  | 'name___name'
  | 'name___sys___type'
  | 'name___childMdx___rawBody'
  | 'name___childMdx___fileAbsolutePath'
  | 'name___childMdx___frontmatter___title'
  | 'name___childMdx___frontmatter___name'
  | 'name___childMdx___frontmatter___layout'
  | 'name___childMdx___frontmatter___template'
  | 'name___childMdx___frontmatter___tags'
  | 'name___childMdx___slug'
  | 'name___childMdx___body'
  | 'name___childMdx___excerpt'
  | 'name___childMdx___headings'
  | 'name___childMdx___headings___value'
  | 'name___childMdx___headings___depth'
  | 'name___childMdx___html'
  | 'name___childMdx___mdxAST'
  | 'name___childMdx___tableOfContents'
  | 'name___childMdx___timeToRead'
  | 'name___childMdx___wordCount___paragraphs'
  | 'name___childMdx___wordCount___sentences'
  | 'name___childMdx___wordCount___words'
  | 'name___childMdx___id'
  | 'name___childMdx___parent___id'
  | 'name___childMdx___parent___children'
  | 'name___childMdx___children'
  | 'name___childMdx___children___id'
  | 'name___childMdx___children___children'
  | 'name___childMdx___internal___content'
  | 'name___childMdx___internal___contentDigest'
  | 'name___childMdx___internal___description'
  | 'name___childMdx___internal___fieldOwners'
  | 'name___childMdx___internal___ignoreType'
  | 'name___childMdx___internal___mediaType'
  | 'name___childMdx___internal___owner'
  | 'name___childMdx___internal___type'
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
  | 'childContentfulTagTypeNameTextNode___id'
  | 'childContentfulTagTypeNameTextNode___parent___id'
  | 'childContentfulTagTypeNameTextNode___parent___parent___id'
  | 'childContentfulTagTypeNameTextNode___parent___parent___children'
  | 'childContentfulTagTypeNameTextNode___parent___children'
  | 'childContentfulTagTypeNameTextNode___parent___children___id'
  | 'childContentfulTagTypeNameTextNode___parent___children___children'
  | 'childContentfulTagTypeNameTextNode___parent___internal___content'
  | 'childContentfulTagTypeNameTextNode___parent___internal___contentDigest'
  | 'childContentfulTagTypeNameTextNode___parent___internal___description'
  | 'childContentfulTagTypeNameTextNode___parent___internal___fieldOwners'
  | 'childContentfulTagTypeNameTextNode___parent___internal___ignoreType'
  | 'childContentfulTagTypeNameTextNode___parent___internal___mediaType'
  | 'childContentfulTagTypeNameTextNode___parent___internal___owner'
  | 'childContentfulTagTypeNameTextNode___parent___internal___type'
  | 'childContentfulTagTypeNameTextNode___children'
  | 'childContentfulTagTypeNameTextNode___children___id'
  | 'childContentfulTagTypeNameTextNode___children___parent___id'
  | 'childContentfulTagTypeNameTextNode___children___parent___children'
  | 'childContentfulTagTypeNameTextNode___children___children'
  | 'childContentfulTagTypeNameTextNode___children___children___id'
  | 'childContentfulTagTypeNameTextNode___children___children___children'
  | 'childContentfulTagTypeNameTextNode___children___internal___content'
  | 'childContentfulTagTypeNameTextNode___children___internal___contentDigest'
  | 'childContentfulTagTypeNameTextNode___children___internal___description'
  | 'childContentfulTagTypeNameTextNode___children___internal___fieldOwners'
  | 'childContentfulTagTypeNameTextNode___children___internal___ignoreType'
  | 'childContentfulTagTypeNameTextNode___children___internal___mediaType'
  | 'childContentfulTagTypeNameTextNode___children___internal___owner'
  | 'childContentfulTagTypeNameTextNode___children___internal___type'
  | 'childContentfulTagTypeNameTextNode___internal___content'
  | 'childContentfulTagTypeNameTextNode___internal___contentDigest'
  | 'childContentfulTagTypeNameTextNode___internal___description'
  | 'childContentfulTagTypeNameTextNode___internal___fieldOwners'
  | 'childContentfulTagTypeNameTextNode___internal___ignoreType'
  | 'childContentfulTagTypeNameTextNode___internal___mediaType'
  | 'childContentfulTagTypeNameTextNode___internal___owner'
  | 'childContentfulTagTypeNameTextNode___internal___type'
  | 'childContentfulTagTypeNameTextNode___name'
  | 'childContentfulTagTypeNameTextNode___sys___type'
  | 'childContentfulTagTypeNameTextNode___childMdx___rawBody'
  | 'childContentfulTagTypeNameTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulTagTypeNameTextNode___childMdx___frontmatter___title'
  | 'childContentfulTagTypeNameTextNode___childMdx___frontmatter___name'
  | 'childContentfulTagTypeNameTextNode___childMdx___frontmatter___layout'
  | 'childContentfulTagTypeNameTextNode___childMdx___frontmatter___template'
  | 'childContentfulTagTypeNameTextNode___childMdx___frontmatter___tags'
  | 'childContentfulTagTypeNameTextNode___childMdx___slug'
  | 'childContentfulTagTypeNameTextNode___childMdx___body'
  | 'childContentfulTagTypeNameTextNode___childMdx___excerpt'
  | 'childContentfulTagTypeNameTextNode___childMdx___headings'
  | 'childContentfulTagTypeNameTextNode___childMdx___headings___value'
  | 'childContentfulTagTypeNameTextNode___childMdx___headings___depth'
  | 'childContentfulTagTypeNameTextNode___childMdx___html'
  | 'childContentfulTagTypeNameTextNode___childMdx___mdxAST'
  | 'childContentfulTagTypeNameTextNode___childMdx___tableOfContents'
  | 'childContentfulTagTypeNameTextNode___childMdx___timeToRead'
  | 'childContentfulTagTypeNameTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulTagTypeNameTextNode___childMdx___wordCount___sentences'
  | 'childContentfulTagTypeNameTextNode___childMdx___wordCount___words'
  | 'childContentfulTagTypeNameTextNode___childMdx___id'
  | 'childContentfulTagTypeNameTextNode___childMdx___parent___id'
  | 'childContentfulTagTypeNameTextNode___childMdx___parent___children'
  | 'childContentfulTagTypeNameTextNode___childMdx___children'
  | 'childContentfulTagTypeNameTextNode___childMdx___children___id'
  | 'childContentfulTagTypeNameTextNode___childMdx___children___children'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___content'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___contentDigest'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___description'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___ignoreType'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___mediaType'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___owner'
  | 'childContentfulTagTypeNameTextNode___childMdx___internal___type';

export type ContentfulTagTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  tag?: Maybe<ContentfulTagFilterListInput>;
  name?: Maybe<ContentfulTagTypeNameTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagTypeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulTagTypeNameTextNode?: Maybe<ContentfulTagTypeNameTextNodeFilterInput>;
};

export type ContentfulTagTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagTypeEdge>;
  nodes: Array<ContentfulTagType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagTypeNameTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulTagTypeNameTextNodeSys>;
  childMdx?: Maybe<Mdx>;
};

export type ContentfulTagTypeNameTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagTypeNameTextNodeEdge>;
  nodes: Array<ContentfulTagTypeNameTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagTypeNameTextNodeGroupConnection>;
};


export type ContentfulTagTypeNameTextNodeConnectionDistinctArgs = {
  field: ContentfulTagTypeNameTextNodeFieldsEnum;
};


export type ContentfulTagTypeNameTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagTypeNameTextNodeFieldsEnum;
};

export type ContentfulTagTypeNameTextNodeEdge = {
  next?: Maybe<ContentfulTagTypeNameTextNode>;
  node: ContentfulTagTypeNameTextNode;
  previous?: Maybe<ContentfulTagTypeNameTextNode>;
};

export type ContentfulTagTypeNameTextNodeFieldsEnum = 
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
  | 'sys___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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

export type ContentfulTagTypeNameTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulTagTypeNameTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulTagTypeNameTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagTypeNameTextNodeEdge>;
  nodes: Array<ContentfulTagTypeNameTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagTypeNameTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagTypeNameTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagTypeNameTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulTagTypeNameTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagTypeSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTagTypeSysContentType>;
};

export type ContentfulTagTypeSysContentType = {
  sys?: Maybe<ContentfulTagTypeSysContentTypeSys>;
};

export type ContentfulTagTypeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTagTypeSysContentTypeSysFilterInput>;
};

export type ContentfulTagTypeSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulTagTypeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulTagTypeSysContentTypeFilterInput>;
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
  url?: Maybe<Scalars['String']>;
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
  | 'url'
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
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___template'
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
  url?: Maybe<StringQueryOperatorInput>;
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
  | 'frontmatter___layout'
  | 'frontmatter___template'
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
  layout?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
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
  contentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNode>;
  allContentfulBlockTextTextNode: ContentfulBlockTextTextNodeConnection;
  contentfulBlock?: Maybe<ContentfulBlock>;
  allContentfulBlock: ContentfulBlockConnection;
  contentfulNavigation?: Maybe<ContentfulNavigation>;
  allContentfulNavigation: ContentfulNavigationConnection;
  contentfulAnnouncementMessageTextNode?: Maybe<ContentfulAnnouncementMessageTextNode>;
  allContentfulAnnouncementMessageTextNode: ContentfulAnnouncementMessageTextNodeConnection;
  contentfulAnnouncement?: Maybe<ContentfulAnnouncement>;
  allContentfulAnnouncement: ContentfulAnnouncementConnection;
  contentfulBlockCostItem?: Maybe<ContentfulBlockCostItem>;
  allContentfulBlockCostItem: ContentfulBlockCostItemConnection;
  contentfulBlockStepTextTextNode?: Maybe<ContentfulBlockStepTextTextNode>;
  allContentfulBlockStepTextTextNode: ContentfulBlockStepTextTextNodeConnection;
  contentfulBlockStep?: Maybe<ContentfulBlockStep>;
  allContentfulBlockStep: ContentfulBlockStepConnection;
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
  contentfulBlogPostBlogExcerptTextNode?: Maybe<ContentfulBlogPostBlogExcerptTextNode>;
  allContentfulBlogPostBlogExcerptTextNode: ContentfulBlogPostBlogExcerptTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulTag?: Maybe<ContentfulTag>;
  allContentfulTag: ContentfulTagConnection;
  contentfulTagTypeNameTextNode?: Maybe<ContentfulTagTypeNameTextNode>;
  allContentfulTagTypeNameTextNode: ContentfulTagTypeNameTextNodeConnection;
  contentfulTagType?: Maybe<ContentfulTagType>;
  allContentfulTagType: ContentfulTagTypeConnection;
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
  url?: Maybe<StringQueryOperatorInput>;
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
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
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
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  localFile?: Maybe<FileFilterInput>;
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


export type QueryContentfulBlockTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulBlockTextTextNodeArgs = {
  filter?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockTextTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  medias?: Maybe<ContentfulMediaCollectionFilterListInput>;
  link?: Maybe<ContentfulLinkFilterInput>;
  childContentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
};


export type QueryAllContentfulBlockArgs = {
  filter?: Maybe<ContentfulBlockFilterInput>;
  sort?: Maybe<ContentfulBlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNavigationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<ContentfulLinkFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  subNavigation?: Maybe<ContentfulNavigationFilterListInput>;
};


export type QueryAllContentfulNavigationArgs = {
  filter?: Maybe<ContentfulNavigationFilterInput>;
  sort?: Maybe<ContentfulNavigationSortInput>;
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


export type QueryContentfulBlockCostItemArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockCostItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
};


export type QueryAllContentfulBlockCostItemArgs = {
  filter?: Maybe<ContentfulBlockCostItemFilterInput>;
  sort?: Maybe<ContentfulBlockCostItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockStepTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockStepTextTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulBlockStepTextTextNodeArgs = {
  filter?: Maybe<ContentfulBlockStepTextTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockStepTextTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockStepArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulBlockStepTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockStepSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlockStepTextTextNode?: Maybe<ContentfulBlockStepTextTextNodeFilterInput>;
};


export type QueryAllContentfulBlockStepArgs = {
  filter?: Maybe<ContentfulBlockStepFilterInput>;
  sort?: Maybe<ContentfulBlockStepSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
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
  sections?: Maybe<ContentfulSectionFilterListInput>;
  link?: Maybe<ContentfulLinkFilterListInput>;
  description?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
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


export type QueryContentfulBlogPostBlogExcerptTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  blogExcerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostBlogExcerptTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulBlogPostBlogExcerptTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBlogExcerptTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBlogExcerptTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  blogSlug?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  blogExcerpt?: Maybe<ContentfulBlogPostBlogExcerptTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostBlogExcerptTextNode?: Maybe<ContentfulBlogPostBlogExcerptTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<ContentfulTagTypeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulTagArgs = {
  filter?: Maybe<ContentfulTagFilterInput>;
  sort?: Maybe<ContentfulTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagTypeNameTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulTagTypeNameTextNodeSysFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulTagTypeNameTextNodeArgs = {
  filter?: Maybe<ContentfulTagTypeNameTextNodeFilterInput>;
  sort?: Maybe<ContentfulTagTypeNameTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  tag?: Maybe<ContentfulTagFilterListInput>;
  name?: Maybe<ContentfulTagTypeNameTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagTypeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulTagTypeNameTextNode?: Maybe<ContentfulTagTypeNameTextNodeFilterInput>;
};


export type QueryAllContentfulTagTypeArgs = {
  filter?: Maybe<ContentfulTagTypeFilterInput>;
  sort?: Maybe<ContentfulTagTypeSortInput>;
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
  linkedinPageURL?: Maybe<StringQueryOperatorInput>;
  facebookPageURL?: Maybe<StringQueryOperatorInput>;
  instagramPageURL?: Maybe<StringQueryOperatorInput>;
  twitterPageURL?: Maybe<StringQueryOperatorInput>;
  metadataTwitterSite?: Maybe<StringQueryOperatorInput>;
  metadataTwitterCreator?: Maybe<StringQueryOperatorInput>;
  metadataSiteName?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
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
  addressLine2?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  postalCode?: Maybe<StringQueryOperatorInput>;
  provinceState?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
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
  medias?: Maybe<ContentfulAssetFilterListInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaCollectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  carouselStyle?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
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
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
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
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
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
  | 'port'
  | 'host'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'flags___PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'flags___QUERY_ON_DEMAND'
  | 'flags___LAZY_IMAGES'
  | 'flags___PARALLEL_SOURCING'
  | 'flags___DEV_SSR'
  | 'flags___FAST_DEV'
  | 'flags___FAST_REFRESH'
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
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<Scalars['Boolean']>;
  QUERY_ON_DEMAND?: Maybe<Scalars['Boolean']>;
  LAZY_IMAGES?: Maybe<Scalars['Boolean']>;
  PARALLEL_SOURCING?: Maybe<Scalars['Boolean']>;
  DEV_SSR?: Maybe<Scalars['Boolean']>;
  FAST_DEV?: Maybe<Scalars['Boolean']>;
  FAST_REFRESH?: Maybe<Scalars['Boolean']>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>;
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<BooleanQueryOperatorInput>;
  QUERY_ON_DEMAND?: Maybe<BooleanQueryOperatorInput>;
  LAZY_IMAGES?: Maybe<BooleanQueryOperatorInput>;
  PARALLEL_SOURCING?: Maybe<BooleanQueryOperatorInput>;
  DEV_SSR?: Maybe<BooleanQueryOperatorInput>;
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>;
  FAST_REFRESH?: Maybe<BooleanQueryOperatorInput>;
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
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  siteMetadata?: Maybe<SitePageContextSiteMetadataFilterInput>;
  pageId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  fileId?: Maybe<StringQueryOperatorInput>;
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

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'context___siteMetadata___title'
  | 'context___siteMetadata___description'
  | 'context___siteMetadata___siteEnv'
  | 'context___siteMetadata___siteUrl'
  | 'context___siteMetadata___languages___langs'
  | 'context___siteMetadata___languages___defaultLangKey'
  | 'context___pageId'
  | 'context___id'
  | 'context___name'
  | 'context___slug'
  | 'context___locale'
  | 'context___layout'
  | 'context___template'
  | 'context___displayName'
  | 'context___fileId'
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
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___ignore'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___gatsbyRemarkPlugins'
  | 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve'
  | 'pluginCreator___pluginOptions___remarkPlugins'
  | 'pluginCreator___pluginOptions___remarkPlugins___target'
  | 'pluginCreator___pluginOptions___remarkPlugins___rel'
  | 'pluginCreator___pluginOptions___rehypePlugins'
  | 'pluginCreator___pluginOptions___source'
  | 'pluginCreator___pluginOptions___destination'
  | 'pluginCreator___pluginOptions___purge'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___sitemap'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___headers____x'
  | 'pluginCreator___pluginOptions___mergeSecurityHeaders'
  | 'pluginCreator___pluginOptions___mergeLinkHeaders'
  | 'pluginCreator___pluginOptions___mergeCachingHeaders'
  | 'pluginCreator___pluginOptions___generateMatchPathRewrites'
  | 'pluginCreator___pluginOptions___pluginName'
  | 'pluginCreator___pluginOptions___packageName'
  | 'pluginCreator___pluginOptions___locales'
  | 'pluginCreator___pluginOptions___features___blog'
  | 'pluginCreator___pluginOptions___features___portfolio'
  | 'pluginCreator___pluginOptions___features___renderDesignSystemPages'
  | 'pluginCreator___pluginOptions___features___renderDocsPages'
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

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___path'
  | 'pluginOptions___ignore'
  | 'pluginOptions___extensions'
  | 'pluginOptions___gatsbyRemarkPlugins'
  | 'pluginOptions___gatsbyRemarkPlugins___resolve'
  | 'pluginOptions___gatsbyRemarkPlugins___options___destinationDir'
  | 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth'
  | 'pluginOptions___remarkPlugins'
  | 'pluginOptions___remarkPlugins___target'
  | 'pluginOptions___remarkPlugins___rel'
  | 'pluginOptions___rehypePlugins'
  | 'pluginOptions___rehypePlugins___properties___className'
  | 'pluginOptions___rehypePlugins___content___type'
  | 'pluginOptions___rehypePlugins___content___tagName'
  | 'pluginOptions___rehypePlugins___content___children'
  | 'pluginOptions___source'
  | 'pluginOptions___destination'
  | 'pluginOptions___purge'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___host'
  | 'pluginOptions___sitemap'
  | 'pluginOptions___output'
  | 'pluginOptions___env___local___policy'
  | 'pluginOptions___env___dev___policy'
  | 'pluginOptions___env___staging___policy'
  | 'pluginOptions___env___production___policy'
  | 'pluginOptions___headers____x'
  | 'pluginOptions___mergeSecurityHeaders'
  | 'pluginOptions___mergeLinkHeaders'
  | 'pluginOptions___mergeCachingHeaders'
  | 'pluginOptions___generateMatchPathRewrites'
  | 'pluginOptions___pluginName'
  | 'pluginOptions___packageName'
  | 'pluginOptions___locales'
  | 'pluginOptions___features___blog'
  | 'pluginOptions___features___portfolio'
  | 'pluginOptions___features___renderDesignSystemPages'
  | 'pluginOptions___features___renderDocsPages'
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
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  ignore?: Maybe<Array<Maybe<Scalars['String']>>>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  remarkPlugins?: Maybe<Array<Maybe<Array<Maybe<SitePluginPluginOptionsRemarkPlugins>>>>>;
  rehypePlugins?: Maybe<Array<Maybe<Array<Maybe<SitePluginPluginOptionsRehypePlugins>>>>>;
  source?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  purge?: Maybe<Scalars['Boolean']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  sitemap?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  env?: Maybe<SitePluginPluginOptionsEnv>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>;
  mergeLinkHeaders?: Maybe<Scalars['Boolean']>;
  mergeCachingHeaders?: Maybe<Scalars['Boolean']>;
  generateMatchPathRewrites?: Maybe<Scalars['Boolean']>;
  pluginName?: Maybe<Scalars['String']>;
  packageName?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  features?: Maybe<SitePluginPluginOptionsFeatures>;
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

export type SitePluginPluginOptionsFeatures = {
  blog?: Maybe<Scalars['Boolean']>;
  portfolio?: Maybe<Scalars['Boolean']>;
  renderDesignSystemPages?: Maybe<Scalars['Boolean']>;
  renderDocsPages?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFeaturesFilterInput = {
  blog?: Maybe<BooleanQueryOperatorInput>;
  portfolio?: Maybe<BooleanQueryOperatorInput>;
  renderDesignSystemPages?: Maybe<BooleanQueryOperatorInput>;
  renderDocsPages?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  ignore?: Maybe<StringQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  remarkPlugins?: Maybe<SitePluginPluginOptionsRemarkPluginsFilterListInput>;
  rehypePlugins?: Maybe<SitePluginPluginOptionsRehypePluginsFilterListInput>;
  source?: Maybe<StringQueryOperatorInput>;
  destination?: Maybe<StringQueryOperatorInput>;
  purge?: Maybe<BooleanQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  sitemap?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  env?: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeLinkHeaders?: Maybe<BooleanQueryOperatorInput>;
  mergeCachingHeaders?: Maybe<BooleanQueryOperatorInput>;
  generateMatchPathRewrites?: Maybe<BooleanQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  packageName?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  features?: Maybe<SitePluginPluginOptionsFeaturesFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  destinationDir?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  destinationDir?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRehypePlugins = {
  properties?: Maybe<SitePluginPluginOptionsRehypePluginsProperties>;
  content?: Maybe<SitePluginPluginOptionsRehypePluginsContent>;
};

export type SitePluginPluginOptionsRehypePluginsContent = {
  type?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePluginPluginOptionsRehypePluginsContentProperties>;
  children?: Maybe<Array<Maybe<SitePluginPluginOptionsRehypePluginsContentChildren>>>;
};

export type SitePluginPluginOptionsRehypePluginsContentChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRehypePluginsContentChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRehypePluginsContentChildrenFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRehypePluginsContentChildrenFilterInput>;
};

export type SitePluginPluginOptionsRehypePluginsContentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePluginPluginOptionsRehypePluginsContentPropertiesFilterInput>;
  children?: Maybe<SitePluginPluginOptionsRehypePluginsContentChildrenFilterListInput>;
};

export type SitePluginPluginOptionsRehypePluginsContentProperties = {
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsRehypePluginsContentPropertiesFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRehypePluginsFilterInput = {
  properties?: Maybe<SitePluginPluginOptionsRehypePluginsPropertiesFilterInput>;
  content?: Maybe<SitePluginPluginOptionsRehypePluginsContentFilterInput>;
};

export type SitePluginPluginOptionsRehypePluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRehypePluginsFilterInput>;
};

export type SitePluginPluginOptionsRehypePluginsProperties = {
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsRehypePluginsPropertiesFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRemarkPlugins = {
  target?: Maybe<Scalars['String']>;
  rel?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsRemarkPluginsFilterInput = {
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRemarkPluginsFilterInput>;
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

export type MobileFluidImageFragment = { fluid?: Maybe<Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> };

export type DesktopFluidImageFragment = { fluid?: Maybe<Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> };

export type SiteMetadataFragment = { siteMetadata?: Maybe<(
    Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl' | 'siteEnv'>
    & { languages?: Maybe<Pick<SiteSiteMetadataLanguages, 'defaultLangKey' | 'langs'>> }
  )> };

export type CompanyInfoFragment = Pick<ContentfulCompanyInfo, 'companyName' | 'linkedinPageURL' | 'facebookPageURL' | 'instagramPageURL' | 'twitterPageURL' | 'metadataTwitterSite' | 'metadataTwitterCreator' | 'metadataSiteName' | 'copyright'>;

export type MediaCollectionFragment = (
  Pick<ContentfulMediaCollection, 'name'>
  & { medias?: Maybe<Array<Maybe<(
    { file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    & MobileFluidImageFragment
  )>>> }
);

export type CompanyAddressFragment = Pick<ContentfulCompanyAddress, 'name' | 'phone' | 'email' | 'city' | 'postalCode' | 'provinceState' | 'websiteURL' | 'addressLine1' | 'fax'>;

export type LinkFragment = (
  Pick<ContentfulLink, 'name' | 'type' | 'label' | 'url'>
  & { page?: Maybe<Pick<ContentfulPage, 'id' | 'name' | 'slug'>> }
);

export type PageFragmentFragment = (
  Pick<ContentfulPage, 'id' | 'name' | 'node_locale' | 'title' | 'slug'>
  & { description?: Maybe<(
    Pick<ContentfulPageDescriptionTextNode, 'description'>
    & { childMdx?: Maybe<Pick<Mdx, 'body'>> }
  )>, sections?: Maybe<Array<Maybe<SectionFragment>>> }
);

export type SectionFragment = (
  Pick<ContentfulSection, 'id' | 'node_locale' | 'name' | 'variant'>
  & { blocks?: Maybe<Array<Maybe<(
    Pick<ContentfulBlock, 'id' | 'name'>
    & { text?: Maybe<{ childMdx?: Maybe<Pick<Mdx, 'body'>> }> }
  ) | Pick<ContentfulBlockCostItem, 'id'>>>> }
);

export type LayoutAllSitePageQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutAllSitePageQuery = { pages: (
    Pick<SitePageConnection, 'totalCount'>
    & { nodes: Array<(
      Pick<SitePage, 'id' | 'path'>
      & { context?: Maybe<(
        Pick<SitePageContext, 'id' | 'name' | 'locale' | 'layout' | 'template'>
        & { siteMetadata?: Maybe<(
          Pick<SitePageContextSiteMetadata, 'description' | 'siteEnv' | 'siteUrl' | 'title'>
          & { languages?: Maybe<Pick<SitePageContextSiteMetadataLanguages, 'defaultLangKey' | 'langs'>> }
        )> }
      )> }
    )> }
  ), companyAddress?: Maybe<Pick<ContentfulCompanyAddress, 'addressLine1' | 'addressLine2' | 'city' | 'provinceState' | 'postalCode' | 'websiteURL' | 'phone' | 'email' | 'fax'>>, companyInfo?: Maybe<Pick<ContentfulCompanyInfo, 'copyright'>> };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { contentfulNavigation?: Maybe<(
    Pick<ContentfulNavigation, 'id' | 'name'>
    & { subNavigation?: Maybe<Array<Maybe<(
      Pick<ContentfulNavigation, 'id' | 'name'>
      & { links?: Maybe<Array<Maybe<(
        Pick<ContentfulLink, 'id' | 'label'>
        & { page?: Maybe<Pick<ContentfulPage, 'slug'>> }
      )>>>, subNavigation?: Maybe<Array<Maybe<(
        Pick<ContentfulNavigation, 'id' | 'name'>
        & { links?: Maybe<Array<Maybe<(
          Pick<ContentfulLink, 'id' | 'label'>
          & { page?: Maybe<Pick<ContentfulPage, 'slug'>> }
        )>>> }
      )>>> }
    )>>> }
  )>, contentfulCompanyAddress?: Maybe<Pick<ContentfulCompanyAddress, 'addressLine1' | 'addressLine2' | 'city' | 'provinceState' | 'postalCode' | 'websiteURL' | 'phone' | 'email' | 'fax'>>, contentfulCompanyInfo?: Maybe<Pick<ContentfulCompanyInfo, 'copyright'>> };

export type PageQueryVariables = Exact<{
  pageId?: Maybe<Scalars['String']>;
}>;


export type PageQuery = { site?: Maybe<SiteMetadataFragment>, contentfulCompanyInfo?: Maybe<CompanyInfoFragment>, contentfulPage?: Maybe<PageFragmentFragment> };
