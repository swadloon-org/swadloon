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
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601
   * standard for representationof dates and times using the Gregorian calendar.
   */
  GraphCMS_DateTime: any;
  /** Slate-compatible RichText AST */
  GraphCMS_RichTextAST: any;
  /** Raw JSON value */
  GraphCMS_Json: any;
  /**
   * The Long scalar type represents non-fractional signed whole numeric values. Long
   * can represent values between -(2^63) and 2^63 - 1.
   */
  GraphCMS_Long: any;
  GraphCMS_Hex: any;
  GraphCMS_RGBAHue: any;
  GraphCMS_RGBATransparency: any;
  /**
   * A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard
   * for representation of dates using the Gregorian calendar.
   */
  GraphCMS_Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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

export type GraphCms = {
  /** Fetches an object given its ID */
  node?: Maybe<GraphCms_Node>;
  /** Retrieve multiple assets */
  assets: Array<GraphCms_Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<GraphCms_Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: GraphCms_AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple blogAuthors */
  blogAuthors: Array<GraphCms_BlogAuthor>;
  /** Retrieve a single blogAuthor */
  blogAuthor?: Maybe<GraphCms_BlogAuthor>;
  /** Retrieve multiple blogAuthors using the Relay connection interface */
  blogAuthorsConnection: GraphCms_BlogAuthorConnection;
  /** Retrieve document version */
  blogAuthorVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple blogPosts */
  blogPosts: Array<GraphCms_BlogPost>;
  /** Retrieve a single blogPost */
  blogPost?: Maybe<GraphCms_BlogPost>;
  /** Retrieve multiple blogPosts using the Relay connection interface */
  blogPostsConnection: GraphCms_BlogPostConnection;
  /** Retrieve document version */
  blogPostVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple companies */
  companies: Array<GraphCms_Company>;
  /** Retrieve a single company */
  company?: Maybe<GraphCms_Company>;
  /** Retrieve multiple companies using the Relay connection interface */
  companiesConnection: GraphCms_CompanyConnection;
  /** Retrieve document version */
  companyVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple employees */
  employees: Array<GraphCms_Employee>;
  /** Retrieve a single employee */
  employee?: Maybe<GraphCms_Employee>;
  /** Retrieve multiple employees using the Relay connection interface */
  employeesConnection: GraphCms_EmployeeConnection;
  /** Retrieve document version */
  employeeVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple podcasts */
  podcasts: Array<GraphCms_Podcast>;
  /** Retrieve a single podcast */
  podcast?: Maybe<GraphCms_Podcast>;
  /** Retrieve multiple podcasts using the Relay connection interface */
  podcastsConnection: GraphCms_PodcastConnection;
  /** Retrieve document version */
  podcastVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple podcastStatuses */
  podcastStatuses: Array<GraphCms_PodcastStatus>;
  /** Retrieve a single podcastStatus */
  podcastStatus?: Maybe<GraphCms_PodcastStatus>;
  /** Retrieve multiple podcastStatuses using the Relay connection interface */
  podcastStatusesConnection: GraphCms_PodcastStatusConnection;
  /** Retrieve document version */
  podcastStatusVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple services */
  services: Array<GraphCms_Service>;
  /** Retrieve a single service */
  service?: Maybe<GraphCms_Service>;
  /** Retrieve multiple services using the Relay connection interface */
  servicesConnection: GraphCms_ServiceConnection;
  /** Retrieve document version */
  serviceVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple websites */
  websites: Array<GraphCms_Website>;
  /** Retrieve a single website */
  website?: Maybe<GraphCms_Website>;
  /** Retrieve multiple websites using the Relay connection interface */
  websitesConnection: GraphCms_WebsiteConnection;
  /** Retrieve document version */
  websiteVersion?: Maybe<GraphCms_DocumentVersion>;
};


export type GraphCmsNodeArgs = {
  id: Scalars['ID'];
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAssetsArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAssetArgs = {
  where: GraphCms_AssetWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAssetsConnectionArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAssetVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsBlogAuthorsArgs = {
  where?: Maybe<GraphCms_BlogAuthorWhereInput>;
  orderBy?: Maybe<GraphCms_BlogAuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogAuthorArgs = {
  where: GraphCms_BlogAuthorWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogAuthorsConnectionArgs = {
  where?: Maybe<GraphCms_BlogAuthorWhereInput>;
  orderBy?: Maybe<GraphCms_BlogAuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogAuthorVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsBlogPostsArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogPostArgs = {
  where: GraphCms_BlogPostWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogPostsConnectionArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogPostVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsCompaniesArgs = {
  where?: Maybe<GraphCms_CompanyWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsCompanyArgs = {
  where: GraphCms_CompanyWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsCompaniesConnectionArgs = {
  where?: Maybe<GraphCms_CompanyWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsCompanyVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsEmployeesArgs = {
  where?: Maybe<GraphCms_EmployeeWhereInput>;
  orderBy?: Maybe<GraphCms_EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsEmployeeArgs = {
  where: GraphCms_EmployeeWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsEmployeesConnectionArgs = {
  where?: Maybe<GraphCms_EmployeeWhereInput>;
  orderBy?: Maybe<GraphCms_EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsEmployeeVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsPodcastsArgs = {
  where?: Maybe<GraphCms_PodcastWhereInput>;
  orderBy?: Maybe<GraphCms_PodcastOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPodcastArgs = {
  where: GraphCms_PodcastWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPodcastsConnectionArgs = {
  where?: Maybe<GraphCms_PodcastWhereInput>;
  orderBy?: Maybe<GraphCms_PodcastOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPodcastVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsPodcastStatusesArgs = {
  where?: Maybe<GraphCms_PodcastStatusWhereInput>;
  orderBy?: Maybe<GraphCms_PodcastStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPodcastStatusArgs = {
  where: GraphCms_PodcastStatusWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPodcastStatusesConnectionArgs = {
  where?: Maybe<GraphCms_PodcastStatusWhereInput>;
  orderBy?: Maybe<GraphCms_PodcastStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPodcastStatusVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsServicesArgs = {
  where?: Maybe<GraphCms_ServiceWhereInput>;
  orderBy?: Maybe<GraphCms_ServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsServiceArgs = {
  where: GraphCms_ServiceWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsServicesConnectionArgs = {
  where?: Maybe<GraphCms_ServiceWhereInput>;
  orderBy?: Maybe<GraphCms_ServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsServiceVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsWebsitesArgs = {
  where?: Maybe<GraphCms_WebsiteWhereInput>;
  orderBy?: Maybe<GraphCms_WebsiteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsWebsiteArgs = {
  where: GraphCms_WebsiteWhereUniqueInput;
  stage?: GraphCms_Stage;
};


export type GraphCmsWebsitesConnectionArgs = {
  where?: Maybe<GraphCms_WebsiteWhereInput>;
  orderBy?: Maybe<GraphCms_WebsiteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsWebsiteVersionArgs = {
  where: GraphCms_VersionWhereInput;
};

export type GraphCms__FilterKind = 
  | 'search'
  | 'AND'
  | 'OR'
  | 'NOT'
  | 'eq'
  | 'eq_not'
  | 'in'
  | 'not_in'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'contains'
  | 'not_contains'
  | 'starts_with'
  | 'not_starts_with'
  | 'ends_with'
  | 'not_ends_with'
  | 'contains_all'
  | 'contains_some'
  | 'contains_none'
  | 'relational_single'
  | 'relational_every'
  | 'relational_some'
  | 'relational_none';

export type GraphCms__MutationInputFieldKind = 
  | 'scalar'
  | 'richText'
  | 'enum'
  | 'relation'
  | 'union'
  | 'virtual';

export type GraphCms__MutationKind = 
  | 'create'
  | 'publish'
  | 'unpublish'
  | 'update'
  | 'upsert'
  | 'delete'
  | 'updateMany'
  | 'publishMany'
  | 'unpublishMany'
  | 'deleteMany';

export type GraphCms__OrderDirection = 
  | 'asc'
  | 'desc';

export type GraphCms__RelationInputCardinality = 
  | 'one'
  | 'many';

export type GraphCms__RelationInputKind = 
  | 'create'
  | 'update';

export type GraphCms__RelationKind = 
  | 'regular'
  | 'union';

export type GraphCms__SystemDateTimeFieldVariation = 
  | 'base'
  | 'localization'
  | 'combined';

export type GraphCms_Aggregate = {
  count: Scalars['Int'];
};

/** Asset system model */
export type GraphCms_Asset = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Asset>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  blogAuthorProfilePicture: Array<GraphCms_BlogAuthor>;
  blogPostMainImage: Array<GraphCms_BlogPost>;
  employeeProfilePicture: Array<GraphCms_Employee>;
  podcastImage: Array<GraphCms_Podcast>;
  /** List of Asset versions */
  history: Array<GraphCms_Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type GraphCms_AssetLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type GraphCms_AssetDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type GraphCms_AssetCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GraphCms_AssetUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GraphCms_AssetPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GraphCms_AssetBlogAuthorProfilePictureArgs = {
  where?: Maybe<GraphCms_BlogAuthorWhereInput>;
  orderBy?: Maybe<GraphCms_BlogAuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetBlogPostMainImageArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetEmployeeProfilePictureArgs = {
  where?: Maybe<GraphCms_EmployeeWhereInput>;
  orderBy?: Maybe<GraphCms_EmployeeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetPodcastImageArgs = {
  where?: Maybe<GraphCms_PodcastWhereInput>;
  orderBy?: Maybe<GraphCms_PodcastOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};


/** Asset system model */
export type GraphCms_AssetUrlArgs = {
  transformation?: Maybe<GraphCms_AssetTransformationInput>;
};

export type GraphCms_AssetConnectInput = {
  /** Document to connect */
  where: GraphCms_AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_AssetConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_AssetEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_AssetCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  blogAuthorProfilePicture?: Maybe<GraphCms_BlogAuthorCreateManyInlineInput>;
  blogPostMainImage?: Maybe<GraphCms_BlogPostCreateManyInlineInput>;
  employeeProfilePicture?: Maybe<GraphCms_EmployeeCreateManyInlineInput>;
  podcastImage?: Maybe<GraphCms_PodcastCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_AssetCreateLocalizationsInput>;
};

export type GraphCms_AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_AssetCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_AssetCreateLocalizationInput>>;
};

export type GraphCms_AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<GraphCms_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
};

export type GraphCms_AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<GraphCms_AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_AssetEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  blogAuthorProfilePicture_every?: Maybe<GraphCms_BlogAuthorWhereInput>;
  blogAuthorProfilePicture_some?: Maybe<GraphCms_BlogAuthorWhereInput>;
  blogAuthorProfilePicture_none?: Maybe<GraphCms_BlogAuthorWhereInput>;
  blogPostMainImage_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostMainImage_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostMainImage_none?: Maybe<GraphCms_BlogPostWhereInput>;
  employeeProfilePicture_every?: Maybe<GraphCms_EmployeeWhereInput>;
  employeeProfilePicture_some?: Maybe<GraphCms_EmployeeWhereInput>;
  employeeProfilePicture_none?: Maybe<GraphCms_EmployeeWhereInput>;
  podcastImage_every?: Maybe<GraphCms_PodcastWhereInput>;
  podcastImage_some?: Maybe<GraphCms_PodcastWhereInput>;
  podcastImage_none?: Maybe<GraphCms_PodcastWhereInput>;
};

export type GraphCms_AssetOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'handle_ASC'
  | 'handle_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'width_ASC'
  | 'width_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'mimeType_ASC'
  | 'mimeType_DESC';

/** Transformations for Assets */
export type GraphCms_AssetTransformationInput = {
  image?: Maybe<GraphCms_ImageTransformationInput>;
  document?: Maybe<GraphCms_DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  blogAuthorProfilePicture?: Maybe<GraphCms_BlogAuthorUpdateManyInlineInput>;
  blogPostMainImage?: Maybe<GraphCms_BlogPostUpdateManyInlineInput>;
  employeeProfilePicture?: Maybe<GraphCms_EmployeeUpdateManyInlineInput>;
  podcastImage?: Maybe<GraphCms_PodcastUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_AssetUpdateLocalizationsInput>;
};

export type GraphCms_AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetUpdateLocalizationInput = {
  data: GraphCms_AssetUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<GraphCms_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<GraphCms_AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<GraphCms_AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<GraphCms_AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
};

export type GraphCms_AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_AssetUpdateManyLocalizationInput>>;
};

export type GraphCms_AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_AssetWhereInput;
  /** Update many input */
  data: GraphCms_AssetUpdateManyInput;
};

export type GraphCms_AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<GraphCms_AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<GraphCms_AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<GraphCms_AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_AssetWhereUniqueInput;
  /** Document to update */
  data: GraphCms_AssetUpdateInput;
};

export type GraphCms_AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_AssetCreateInput;
  /** Update document if it exists */
  update: GraphCms_AssetUpdateInput;
};

export type GraphCms_AssetUpsertLocalizationInput = {
  update: GraphCms_AssetUpdateLocalizationDataInput;
  create: GraphCms_AssetCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_AssetWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_AssetUpsertInput;
};

/** Identifies documents */
export type GraphCms_AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  blogAuthorProfilePicture_every?: Maybe<GraphCms_BlogAuthorWhereInput>;
  blogAuthorProfilePicture_some?: Maybe<GraphCms_BlogAuthorWhereInput>;
  blogAuthorProfilePicture_none?: Maybe<GraphCms_BlogAuthorWhereInput>;
  blogPostMainImage_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostMainImage_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostMainImage_none?: Maybe<GraphCms_BlogPostWhereInput>;
  employeeProfilePicture_every?: Maybe<GraphCms_EmployeeWhereInput>;
  employeeProfilePicture_some?: Maybe<GraphCms_EmployeeWhereInput>;
  employeeProfilePicture_none?: Maybe<GraphCms_EmployeeWhereInput>;
  podcastImage_every?: Maybe<GraphCms_PodcastWhereInput>;
  podcastImage_some?: Maybe<GraphCms_PodcastWhereInput>;
  podcastImage_none?: Maybe<GraphCms_PodcastWhereInput>;
};

/** References Asset record uniquely */
export type GraphCms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GraphCMS_Long'];
};

export type GraphCms_BlogAuthor = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_BlogAuthor>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_BlogAuthor>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profilePicture?: Maybe<GraphCms_Asset>;
  description?: Maybe<GraphCms_RichText>;
  twitterProfileUrl?: Maybe<Scalars['String']>;
  facebookProfileUrl?: Maybe<Scalars['String']>;
  linkedInProfileUrl?: Maybe<Scalars['String']>;
  instagramProfileUrl?: Maybe<Scalars['String']>;
  blogPost: Array<GraphCms_BlogPost>;
  /** List of BlogAuthor versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_BlogAuthorLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_BlogAuthorDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_BlogAuthorCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogAuthorUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogAuthorPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogAuthorBlogPostArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_BlogAuthorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_BlogAuthorConnectInput = {
  /** Document to connect */
  where: GraphCms_BlogAuthorWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_BlogAuthorConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_BlogAuthorEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_BlogAuthorCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profilePicture?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
  twitterProfileUrl?: Maybe<Scalars['String']>;
  facebookProfileUrl?: Maybe<Scalars['String']>;
  linkedInProfileUrl?: Maybe<Scalars['String']>;
  instagramProfileUrl?: Maybe<Scalars['String']>;
  blogPost?: Maybe<GraphCms_BlogPostCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogAuthorCreateLocalizationsInput>;
};

export type GraphCms_BlogAuthorCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
};

export type GraphCms_BlogAuthorCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_BlogAuthorCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogAuthorCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_BlogAuthorCreateLocalizationInput>>;
};

export type GraphCms_BlogAuthorCreateManyInlineInput = {
  /** Create and connect multiple existing BlogAuthor documents */
  create?: Maybe<Array<GraphCms_BlogAuthorCreateInput>>;
  /** Connect multiple existing BlogAuthor documents */
  connect?: Maybe<Array<GraphCms_BlogAuthorWhereUniqueInput>>;
};

export type GraphCms_BlogAuthorCreateOneInlineInput = {
  /** Create and connect one BlogAuthor document */
  create?: Maybe<GraphCms_BlogAuthorCreateInput>;
  /** Connect one existing BlogAuthor document */
  connect?: Maybe<GraphCms_BlogAuthorWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_BlogAuthorEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_BlogAuthor;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_BlogAuthorManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogAuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogAuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogAuthorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<GraphCms_AssetWhereInput>;
  twitterProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  twitterProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  twitterProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  twitterProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  twitterProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  facebookProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  facebookProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  facebookProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  facebookProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  facebookProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  linkedInProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  linkedInProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedInProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  linkedInProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  linkedInProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedInProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedInProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  linkedInProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedInProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedInProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  instagramProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  instagramProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  instagramProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  instagramProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  instagramProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  blogPost_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPost_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPost_none?: Maybe<GraphCms_BlogPostWhereInput>;
};

export type GraphCms_BlogAuthorOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'twitterProfileUrl_ASC'
  | 'twitterProfileUrl_DESC'
  | 'facebookProfileUrl_ASC'
  | 'facebookProfileUrl_DESC'
  | 'linkedInProfileUrl_ASC'
  | 'linkedInProfileUrl_DESC'
  | 'instagramProfileUrl_ASC'
  | 'instagramProfileUrl_DESC';

export type GraphCms_BlogAuthorUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
  twitterProfileUrl?: Maybe<Scalars['String']>;
  facebookProfileUrl?: Maybe<Scalars['String']>;
  linkedInProfileUrl?: Maybe<Scalars['String']>;
  instagramProfileUrl?: Maybe<Scalars['String']>;
  blogPost?: Maybe<GraphCms_BlogPostUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogAuthorUpdateLocalizationsInput>;
};

export type GraphCms_BlogAuthorUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
};

export type GraphCms_BlogAuthorUpdateLocalizationInput = {
  data: GraphCms_BlogAuthorUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogAuthorUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_BlogAuthorCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogAuthorUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_BlogAuthorUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_BlogAuthorUpdateManyInlineInput = {
  /** Create and connect multiple BlogAuthor documents */
  create?: Maybe<Array<GraphCms_BlogAuthorCreateInput>>;
  /** Connect multiple existing BlogAuthor documents */
  connect?: Maybe<Array<GraphCms_BlogAuthorConnectInput>>;
  /** Override currently-connected documents with multiple existing BlogAuthor documents */
  set?: Maybe<Array<GraphCms_BlogAuthorWhereUniqueInput>>;
  /** Update multiple BlogAuthor documents */
  update?: Maybe<Array<GraphCms_BlogAuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogAuthor documents */
  upsert?: Maybe<Array<GraphCms_BlogAuthorUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple BlogAuthor documents */
  disconnect?: Maybe<Array<GraphCms_BlogAuthorWhereUniqueInput>>;
  /** Delete multiple BlogAuthor documents */
  delete?: Maybe<Array<GraphCms_BlogAuthorWhereUniqueInput>>;
};

export type GraphCms_BlogAuthorUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  twitterProfileUrl?: Maybe<Scalars['String']>;
  facebookProfileUrl?: Maybe<Scalars['String']>;
  linkedInProfileUrl?: Maybe<Scalars['String']>;
  instagramProfileUrl?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_BlogAuthorUpdateManyLocalizationInput>>;
};

export type GraphCms_BlogAuthorUpdateManyLocalizationInput = {
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
};

export type GraphCms_BlogAuthorUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_BlogAuthorWhereInput;
  /** Update many input */
  data: GraphCms_BlogAuthorUpdateManyInput;
};

export type GraphCms_BlogAuthorUpdateOneInlineInput = {
  /** Create and connect one BlogAuthor document */
  create?: Maybe<GraphCms_BlogAuthorCreateInput>;
  /** Update single BlogAuthor document */
  update?: Maybe<GraphCms_BlogAuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogAuthor document */
  upsert?: Maybe<GraphCms_BlogAuthorUpsertWithNestedWhereUniqueInput>;
  /** Connect existing BlogAuthor document */
  connect?: Maybe<GraphCms_BlogAuthorWhereUniqueInput>;
  /** Disconnect currently connected BlogAuthor document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected BlogAuthor document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_BlogAuthorUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogAuthorWhereUniqueInput;
  /** Document to update */
  data: GraphCms_BlogAuthorUpdateInput;
};

export type GraphCms_BlogAuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_BlogAuthorCreateInput;
  /** Update document if it exists */
  update: GraphCms_BlogAuthorUpdateInput;
};

export type GraphCms_BlogAuthorUpsertLocalizationInput = {
  update: GraphCms_BlogAuthorUpdateLocalizationDataInput;
  create: GraphCms_BlogAuthorCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogAuthorUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogAuthorWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_BlogAuthorUpsertInput;
};

/** Identifies documents */
export type GraphCms_BlogAuthorWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogAuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogAuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogAuthorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<GraphCms_AssetWhereInput>;
  twitterProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  twitterProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  twitterProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  twitterProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  twitterProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  facebookProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  facebookProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  facebookProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  facebookProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  facebookProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  linkedInProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  linkedInProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedInProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  linkedInProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  linkedInProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedInProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedInProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  linkedInProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedInProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedInProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  instagramProfileUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  instagramProfileUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramProfileUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  instagramProfileUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  instagramProfileUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramProfileUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramProfileUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  instagramProfileUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramProfileUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramProfileUrl_not_ends_with?: Maybe<Scalars['String']>;
  blogPost_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPost_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPost_none?: Maybe<GraphCms_BlogPostWhereInput>;
};

/** References BlogAuthor record uniquely */
export type GraphCms_BlogAuthorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_BlogPost = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_BlogPost>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_BlogPost>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  type: GraphCms_BlogPostType;
  title: Scalars['String'];
  /** Short summary of the article */
  excerpt?: Maybe<Scalars['String']>;
  authors: Array<GraphCms_BlogAuthor>;
  mainImage?: Maybe<GraphCms_Asset>;
  content: Scalars['String'];
  /** List of BlogPost versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_BlogPostLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_BlogPostDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_BlogPostCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogPostUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogPostPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogPostAuthorsArgs = {
  where?: Maybe<GraphCms_BlogAuthorWhereInput>;
  orderBy?: Maybe<GraphCms_BlogAuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_BlogPostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_BlogPostConnectInput = {
  /** Document to connect */
  where: GraphCms_BlogPostWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_BlogPostConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_BlogPostEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_BlogPostCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** type input for default locale (fr) */
  type: GraphCms_BlogPostType;
  /** title input for default locale (fr) */
  title: Scalars['String'];
  /** excerpt input for default locale (fr) */
  excerpt?: Maybe<Scalars['String']>;
  authors?: Maybe<GraphCms_BlogAuthorCreateManyInlineInput>;
  mainImage?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  /** content input for default locale (fr) */
  content: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogPostCreateLocalizationsInput>;
};

export type GraphCms_BlogPostCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  type: GraphCms_BlogPostType;
  title: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  content: Scalars['String'];
};

export type GraphCms_BlogPostCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_BlogPostCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPostCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_BlogPostCreateLocalizationInput>>;
};

export type GraphCms_BlogPostCreateManyInlineInput = {
  /** Create and connect multiple existing BlogPost documents */
  create?: Maybe<Array<GraphCms_BlogPostCreateInput>>;
  /** Connect multiple existing BlogPost documents */
  connect?: Maybe<Array<GraphCms_BlogPostWhereUniqueInput>>;
};

export type GraphCms_BlogPostCreateOneInlineInput = {
  /** Create and connect one BlogPost document */
  create?: Maybe<GraphCms_BlogPostCreateInput>;
  /** Connect one existing BlogPost document */
  connect?: Maybe<GraphCms_BlogPostWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_BlogPostEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_BlogPost;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_BlogPostManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogPostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  authors_every?: Maybe<GraphCms_BlogAuthorWhereInput>;
  authors_some?: Maybe<GraphCms_BlogAuthorWhereInput>;
  authors_none?: Maybe<GraphCms_BlogAuthorWhereInput>;
  mainImage?: Maybe<GraphCms_AssetWhereInput>;
};

export type GraphCms_BlogPostOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'excerpt_ASC'
  | 'excerpt_DESC'
  | 'content_ASC'
  | 'content_DESC';

export type GraphCms_BlogPostType = 
  | 'BLOG'
  | 'CASE_STUDY';

export type GraphCms_BlogPostUpdateInput = {
  /** type input for default locale (fr) */
  type?: Maybe<GraphCms_BlogPostType>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** excerpt input for default locale (fr) */
  excerpt?: Maybe<Scalars['String']>;
  authors?: Maybe<GraphCms_BlogAuthorUpdateManyInlineInput>;
  mainImage?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  /** content input for default locale (fr) */
  content?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogPostUpdateLocalizationsInput>;
};

export type GraphCms_BlogPostUpdateLocalizationDataInput = {
  type?: Maybe<GraphCms_BlogPostType>;
  title?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogPostUpdateLocalizationInput = {
  data: GraphCms_BlogPostUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPostUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_BlogPostCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogPostUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_BlogPostUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_BlogPostUpdateManyInlineInput = {
  /** Create and connect multiple BlogPost documents */
  create?: Maybe<Array<GraphCms_BlogPostCreateInput>>;
  /** Connect multiple existing BlogPost documents */
  connect?: Maybe<Array<GraphCms_BlogPostConnectInput>>;
  /** Override currently-connected documents with multiple existing BlogPost documents */
  set?: Maybe<Array<GraphCms_BlogPostWhereUniqueInput>>;
  /** Update multiple BlogPost documents */
  update?: Maybe<Array<GraphCms_BlogPostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogPost documents */
  upsert?: Maybe<Array<GraphCms_BlogPostUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple BlogPost documents */
  disconnect?: Maybe<Array<GraphCms_BlogPostWhereUniqueInput>>;
  /** Delete multiple BlogPost documents */
  delete?: Maybe<Array<GraphCms_BlogPostWhereUniqueInput>>;
};

export type GraphCms_BlogPostUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_BlogPostUpdateManyLocalizationInput>>;
};

export type GraphCms_BlogPostUpdateManyLocalizationInput = {
  type: GraphCms_BlogPostType;
  title: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  content: Scalars['String'];
};

export type GraphCms_BlogPostUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_BlogPostWhereInput;
  /** Update many input */
  data: GraphCms_BlogPostUpdateManyInput;
};

export type GraphCms_BlogPostUpdateOneInlineInput = {
  /** Create and connect one BlogPost document */
  create?: Maybe<GraphCms_BlogPostCreateInput>;
  /** Update single BlogPost document */
  update?: Maybe<GraphCms_BlogPostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogPost document */
  upsert?: Maybe<GraphCms_BlogPostUpsertWithNestedWhereUniqueInput>;
  /** Connect existing BlogPost document */
  connect?: Maybe<GraphCms_BlogPostWhereUniqueInput>;
  /** Disconnect currently connected BlogPost document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected BlogPost document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_BlogPostUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogPostWhereUniqueInput;
  /** Document to update */
  data: GraphCms_BlogPostUpdateInput;
};

export type GraphCms_BlogPostUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_BlogPostCreateInput;
  /** Update document if it exists */
  update: GraphCms_BlogPostUpdateInput;
};

export type GraphCms_BlogPostUpsertLocalizationInput = {
  update: GraphCms_BlogPostUpdateLocalizationDataInput;
  create: GraphCms_BlogPostCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPostUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogPostWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_BlogPostUpsertInput;
};

/** Identifies documents */
export type GraphCms_BlogPostWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogPostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  type?: Maybe<GraphCms_BlogPostType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GraphCms_BlogPostType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GraphCms_BlogPostType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GraphCms_BlogPostType>>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  authors_every?: Maybe<GraphCms_BlogAuthorWhereInput>;
  authors_some?: Maybe<GraphCms_BlogAuthorWhereInput>;
  authors_none?: Maybe<GraphCms_BlogAuthorWhereInput>;
  mainImage?: Maybe<GraphCms_AssetWhereInput>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
};

/** References BlogPost record uniquely */
export type GraphCms_BlogPostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type GraphCms_Color = {
  hex: Scalars['GraphCMS_Hex'];
  rgba: GraphCms_Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type GraphCms_ColorInput = {
  hex?: Maybe<Scalars['GraphCMS_Hex']>;
  rgba?: Maybe<GraphCms_RgbaInput>;
};

export type GraphCms_Company = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Company>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Company>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  name: Scalars['String'];
  /** List of Company versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_CompanyLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_CompanyDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_CompanyCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_CompanyUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_CompanyPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_CompanyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

/** A connection to a list of items. */
export type GraphCms_CompanyConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_CompanyEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_CompanyCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** name input for default locale (fr) */
  name: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_CompanyCreateLocalizationsInput>;
};

export type GraphCms_CompanyCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  name: Scalars['String'];
};

export type GraphCms_CompanyCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_CompanyCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CompanyCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_CompanyCreateLocalizationInput>>;
};

/** An edge in a connection. */
export type GraphCms_CompanyEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Company;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_CompanyManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_CompanyOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC';

export type GraphCms_CompanyUpdateInput = {
  /** name input for default locale (fr) */
  name?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_CompanyUpdateLocalizationsInput>;
};

export type GraphCms_CompanyUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type GraphCms_CompanyUpdateLocalizationInput = {
  data: GraphCms_CompanyUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CompanyUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_CompanyCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_CompanyUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_CompanyUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_CompanyUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_CompanyUpdateManyLocalizationInput>>;
};

export type GraphCms_CompanyUpdateManyLocalizationInput = {
  name: Scalars['String'];
};

export type GraphCms_CompanyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_CompanyWhereInput;
  /** Update many input */
  data: GraphCms_CompanyUpdateManyInput;
};

export type GraphCms_CompanyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CompanyWhereUniqueInput;
  /** Document to update */
  data: GraphCms_CompanyUpdateInput;
};

export type GraphCms_CompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_CompanyCreateInput;
  /** Update document if it exists */
  update: GraphCms_CompanyUpdateInput;
};

export type GraphCms_CompanyUpsertLocalizationInput = {
  update: GraphCms_CompanyUpdateLocalizationDataInput;
  create: GraphCms_CompanyCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CompanyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CompanyWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_CompanyUpsertInput;
};

/** Identifies documents */
export type GraphCms_CompanyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Company record uniquely */
export type GraphCms_CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export type GraphCms_DocumentFileTypes = 
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'png'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'docx'
  | 'pdf'
  | 'html'
  | 'doc'
  | 'xlsx'
  | 'xls'
  | 'pptx'
  | 'ppt';

export type GraphCms_DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<GraphCms_DocumentFileTypes>;
};

/** Transformations for Documents */
export type GraphCms_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<GraphCms_DocumentOutputInput>;
};

export type GraphCms_DocumentVersion = {
  id: Scalars['ID'];
  stage: GraphCms_Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['GraphCMS_DateTime'];
  data?: Maybe<Scalars['GraphCMS_Json']>;
};

export type GraphCms_Employee = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Employee>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Employee>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  title: Scalars['String'];
  profilePicture?: Maybe<GraphCms_Asset>;
  description?: Maybe<GraphCms_RichText>;
  /** List of Employee versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_EmployeeLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_EmployeeDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_EmployeeCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_EmployeeUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_EmployeePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_EmployeeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_EmployeeConnectInput = {
  /** Document to connect */
  where: GraphCms_EmployeeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_EmployeeConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_EmployeeEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_EmployeeCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** title input for default locale (fr) */
  title: Scalars['String'];
  profilePicture?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_EmployeeCreateLocalizationsInput>;
};

export type GraphCms_EmployeeCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
};

export type GraphCms_EmployeeCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_EmployeeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployeeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_EmployeeCreateLocalizationInput>>;
};

export type GraphCms_EmployeeCreateManyInlineInput = {
  /** Create and connect multiple existing Employee documents */
  create?: Maybe<Array<GraphCms_EmployeeCreateInput>>;
  /** Connect multiple existing Employee documents */
  connect?: Maybe<Array<GraphCms_EmployeeWhereUniqueInput>>;
};

export type GraphCms_EmployeeCreateOneInlineInput = {
  /** Create and connect one Employee document */
  create?: Maybe<GraphCms_EmployeeCreateInput>;
  /** Connect one existing Employee document */
  connect?: Maybe<GraphCms_EmployeeWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_EmployeeEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Employee;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_EmployeeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EmployeeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EmployeeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EmployeeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<GraphCms_AssetWhereInput>;
};

export type GraphCms_EmployeeOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'active_ASC'
  | 'active_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type GraphCms_EmployeeUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_EmployeeUpdateLocalizationsInput>;
};

export type GraphCms_EmployeeUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
};

export type GraphCms_EmployeeUpdateLocalizationInput = {
  data: GraphCms_EmployeeUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployeeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_EmployeeCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_EmployeeUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_EmployeeUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_EmployeeUpdateManyInlineInput = {
  /** Create and connect multiple Employee documents */
  create?: Maybe<Array<GraphCms_EmployeeCreateInput>>;
  /** Connect multiple existing Employee documents */
  connect?: Maybe<Array<GraphCms_EmployeeConnectInput>>;
  /** Override currently-connected documents with multiple existing Employee documents */
  set?: Maybe<Array<GraphCms_EmployeeWhereUniqueInput>>;
  /** Update multiple Employee documents */
  update?: Maybe<Array<GraphCms_EmployeeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Employee documents */
  upsert?: Maybe<Array<GraphCms_EmployeeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Employee documents */
  disconnect?: Maybe<Array<GraphCms_EmployeeWhereUniqueInput>>;
  /** Delete multiple Employee documents */
  delete?: Maybe<Array<GraphCms_EmployeeWhereUniqueInput>>;
};

export type GraphCms_EmployeeUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_EmployeeUpdateManyLocalizationInput>>;
};

export type GraphCms_EmployeeUpdateManyLocalizationInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>;
};

export type GraphCms_EmployeeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_EmployeeWhereInput;
  /** Update many input */
  data: GraphCms_EmployeeUpdateManyInput;
};

export type GraphCms_EmployeeUpdateOneInlineInput = {
  /** Create and connect one Employee document */
  create?: Maybe<GraphCms_EmployeeCreateInput>;
  /** Update single Employee document */
  update?: Maybe<GraphCms_EmployeeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Employee document */
  upsert?: Maybe<GraphCms_EmployeeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Employee document */
  connect?: Maybe<GraphCms_EmployeeWhereUniqueInput>;
  /** Disconnect currently connected Employee document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Employee document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_EmployeeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_EmployeeWhereUniqueInput;
  /** Document to update */
  data: GraphCms_EmployeeUpdateInput;
};

export type GraphCms_EmployeeUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_EmployeeCreateInput;
  /** Update document if it exists */
  update: GraphCms_EmployeeUpdateInput;
};

export type GraphCms_EmployeeUpsertLocalizationInput = {
  update: GraphCms_EmployeeUpdateLocalizationDataInput;
  create: GraphCms_EmployeeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployeeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_EmployeeWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_EmployeeUpsertInput;
};

/** Identifies documents */
export type GraphCms_EmployeeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EmployeeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EmployeeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EmployeeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<GraphCms_AssetWhereInput>;
};

/** References Employee record uniquely */
export type GraphCms_EmployeeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
};


export type GraphCms_ImageFit = 
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  | 'crop'
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  | 'scale'
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  | 'max';

export type GraphCms_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<GraphCms_ImageFit>;
};

/** Transformations for Images */
export type GraphCms_ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<GraphCms_ImageResizeInput>;
};


/** Locale system enumeration */
export type GraphCms_Locale = 
  /** System locale */
  | 'fr';

/** Representing a geolocation point with latitude and longitude */
export type GraphCms_Location = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type GraphCms_LocationDistanceArgs = {
  from: GraphCms_LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type GraphCms_LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** An object with an ID */
export type GraphCms_Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: GraphCms_Stage;
};

/** Information about pagination in a connection. */
export type GraphCms_PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type GraphCms_Podcast = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Podcast>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Podcast>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title: Scalars['String'];
  subTitle: Scalars['String'];
  image?: Maybe<GraphCms_Asset>;
  startDate: Scalars['GraphCMS_DateTime'];
  description: Scalars['String'];
  spotifyUrl?: Maybe<Scalars['String']>;
  googlePodcastUrl?: Maybe<Scalars['String']>;
  radioPublicUrl?: Maybe<Scalars['String']>;
  podcastStatus?: Maybe<GraphCms_PodcastStatus>;
  /** List of Podcast versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_PodcastLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_PodcastDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_PodcastCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PodcastUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PodcastPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PodcastHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_PodcastConnectInput = {
  /** Document to connect */
  where: GraphCms_PodcastWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_PodcastConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_PodcastEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_PodcastCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title: Scalars['String'];
  /** subTitle input for default locale (fr) */
  subTitle: Scalars['String'];
  image?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  startDate: Scalars['GraphCMS_DateTime'];
  /** description input for default locale (fr) */
  description: Scalars['String'];
  spotifyUrl?: Maybe<Scalars['String']>;
  googlePodcastUrl?: Maybe<Scalars['String']>;
  radioPublicUrl?: Maybe<Scalars['String']>;
  podcastStatus?: Maybe<GraphCms_PodcastStatusCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_PodcastCreateLocalizationsInput>;
};

export type GraphCms_PodcastCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title: Scalars['String'];
  subTitle: Scalars['String'];
  description: Scalars['String'];
};

export type GraphCms_PodcastCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_PodcastCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PodcastCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_PodcastCreateLocalizationInput>>;
};

export type GraphCms_PodcastCreateManyInlineInput = {
  /** Create and connect multiple existing Podcast documents */
  create?: Maybe<Array<GraphCms_PodcastCreateInput>>;
  /** Connect multiple existing Podcast documents */
  connect?: Maybe<Array<GraphCms_PodcastWhereUniqueInput>>;
};

export type GraphCms_PodcastCreateOneInlineInput = {
  /** Create and connect one Podcast document */
  create?: Maybe<GraphCms_PodcastCreateInput>;
  /** Connect one existing Podcast document */
  connect?: Maybe<GraphCms_PodcastWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_PodcastEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Podcast;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_PodcastManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PodcastWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PodcastWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PodcastWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  image?: Maybe<GraphCms_AssetWhereInput>;
  startDate?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  spotifyUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  spotifyUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotifyUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  spotifyUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  spotifyUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotifyUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotifyUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  spotifyUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotifyUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotifyUrl_not_ends_with?: Maybe<Scalars['String']>;
  googlePodcastUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  googlePodcastUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  googlePodcastUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  googlePodcastUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  googlePodcastUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  googlePodcastUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  googlePodcastUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  googlePodcastUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  googlePodcastUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  googlePodcastUrl_not_ends_with?: Maybe<Scalars['String']>;
  radioPublicUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  radioPublicUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  radioPublicUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  radioPublicUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  radioPublicUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  radioPublicUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  radioPublicUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  radioPublicUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  radioPublicUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  radioPublicUrl_not_ends_with?: Maybe<Scalars['String']>;
  podcastStatus?: Maybe<GraphCms_PodcastStatusWhereInput>;
};

export type GraphCms_PodcastOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'subTitle_ASC'
  | 'subTitle_DESC'
  | 'startDate_ASC'
  | 'startDate_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'spotifyUrl_ASC'
  | 'spotifyUrl_DESC'
  | 'googlePodcastUrl_ASC'
  | 'googlePodcastUrl_DESC'
  | 'radioPublicUrl_ASC'
  | 'radioPublicUrl_DESC';

export type GraphCms_PodcastStatus = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_PodcastStatus>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_PodcastStatus>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  message?: Maybe<Scalars['String']>;
  nextPodcast?: Maybe<GraphCms_Podcast>;
  /** List of PodcastStatus versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_PodcastStatusLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_PodcastStatusDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_PodcastStatusCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PodcastStatusUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PodcastStatusPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PodcastStatusHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_PodcastStatusConnectInput = {
  /** Document to connect */
  where: GraphCms_PodcastStatusWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_PodcastStatusConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_PodcastStatusEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_PodcastStatusCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** message input for default locale (fr) */
  message?: Maybe<Scalars['String']>;
  nextPodcast?: Maybe<GraphCms_PodcastCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_PodcastStatusCreateLocalizationsInput>;
};

export type GraphCms_PodcastStatusCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  message?: Maybe<Scalars['String']>;
};

export type GraphCms_PodcastStatusCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_PodcastStatusCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PodcastStatusCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_PodcastStatusCreateLocalizationInput>>;
};

export type GraphCms_PodcastStatusCreateManyInlineInput = {
  /** Create and connect multiple existing PodcastStatus documents */
  create?: Maybe<Array<GraphCms_PodcastStatusCreateInput>>;
  /** Connect multiple existing PodcastStatus documents */
  connect?: Maybe<Array<GraphCms_PodcastStatusWhereUniqueInput>>;
};

export type GraphCms_PodcastStatusCreateOneInlineInput = {
  /** Create and connect one PodcastStatus document */
  create?: Maybe<GraphCms_PodcastStatusCreateInput>;
  /** Connect one existing PodcastStatus document */
  connect?: Maybe<GraphCms_PodcastStatusWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_PodcastStatusEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_PodcastStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_PodcastStatusManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PodcastStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PodcastStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PodcastStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  nextPodcast?: Maybe<GraphCms_PodcastWhereInput>;
};

export type GraphCms_PodcastStatusOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'message_ASC'
  | 'message_DESC';

export type GraphCms_PodcastStatusUpdateInput = {
  /** message input for default locale (fr) */
  message?: Maybe<Scalars['String']>;
  nextPodcast?: Maybe<GraphCms_PodcastUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_PodcastStatusUpdateLocalizationsInput>;
};

export type GraphCms_PodcastStatusUpdateLocalizationDataInput = {
  message?: Maybe<Scalars['String']>;
};

export type GraphCms_PodcastStatusUpdateLocalizationInput = {
  data: GraphCms_PodcastStatusUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PodcastStatusUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_PodcastStatusCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_PodcastStatusUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_PodcastStatusUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_PodcastStatusUpdateManyInlineInput = {
  /** Create and connect multiple PodcastStatus documents */
  create?: Maybe<Array<GraphCms_PodcastStatusCreateInput>>;
  /** Connect multiple existing PodcastStatus documents */
  connect?: Maybe<Array<GraphCms_PodcastStatusConnectInput>>;
  /** Override currently-connected documents with multiple existing PodcastStatus documents */
  set?: Maybe<Array<GraphCms_PodcastStatusWhereUniqueInput>>;
  /** Update multiple PodcastStatus documents */
  update?: Maybe<Array<GraphCms_PodcastStatusUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PodcastStatus documents */
  upsert?: Maybe<Array<GraphCms_PodcastStatusUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PodcastStatus documents */
  disconnect?: Maybe<Array<GraphCms_PodcastStatusWhereUniqueInput>>;
  /** Delete multiple PodcastStatus documents */
  delete?: Maybe<Array<GraphCms_PodcastStatusWhereUniqueInput>>;
};

export type GraphCms_PodcastStatusUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_PodcastStatusUpdateManyLocalizationInput>>;
};

export type GraphCms_PodcastStatusUpdateManyLocalizationInput = {
  message?: Maybe<Scalars['String']>;
};

export type GraphCms_PodcastStatusUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_PodcastStatusWhereInput;
  /** Update many input */
  data: GraphCms_PodcastStatusUpdateManyInput;
};

export type GraphCms_PodcastStatusUpdateOneInlineInput = {
  /** Create and connect one PodcastStatus document */
  create?: Maybe<GraphCms_PodcastStatusCreateInput>;
  /** Update single PodcastStatus document */
  update?: Maybe<GraphCms_PodcastStatusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PodcastStatus document */
  upsert?: Maybe<GraphCms_PodcastStatusUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PodcastStatus document */
  connect?: Maybe<GraphCms_PodcastStatusWhereUniqueInput>;
  /** Disconnect currently connected PodcastStatus document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PodcastStatus document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_PodcastStatusUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_PodcastStatusWhereUniqueInput;
  /** Document to update */
  data: GraphCms_PodcastStatusUpdateInput;
};

export type GraphCms_PodcastStatusUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_PodcastStatusCreateInput;
  /** Update document if it exists */
  update: GraphCms_PodcastStatusUpdateInput;
};

export type GraphCms_PodcastStatusUpsertLocalizationInput = {
  update: GraphCms_PodcastStatusUpdateLocalizationDataInput;
  create: GraphCms_PodcastStatusCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PodcastStatusUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_PodcastStatusWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_PodcastStatusUpsertInput;
};

/** Identifies documents */
export type GraphCms_PodcastStatusWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PodcastStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PodcastStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PodcastStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  message?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  message_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  message_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  message_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  message_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  message_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  message_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  message_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  message_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  message_not_ends_with?: Maybe<Scalars['String']>;
  nextPodcast?: Maybe<GraphCms_PodcastWhereInput>;
};

/** References PodcastStatus record uniquely */
export type GraphCms_PodcastStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_PodcastUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** subTitle input for default locale (fr) */
  subTitle?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  startDate?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  spotifyUrl?: Maybe<Scalars['String']>;
  googlePodcastUrl?: Maybe<Scalars['String']>;
  radioPublicUrl?: Maybe<Scalars['String']>;
  podcastStatus?: Maybe<GraphCms_PodcastStatusUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_PodcastUpdateLocalizationsInput>;
};

export type GraphCms_PodcastUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_PodcastUpdateLocalizationInput = {
  data: GraphCms_PodcastUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PodcastUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_PodcastCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_PodcastUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_PodcastUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_PodcastUpdateManyInlineInput = {
  /** Create and connect multiple Podcast documents */
  create?: Maybe<Array<GraphCms_PodcastCreateInput>>;
  /** Connect multiple existing Podcast documents */
  connect?: Maybe<Array<GraphCms_PodcastConnectInput>>;
  /** Override currently-connected documents with multiple existing Podcast documents */
  set?: Maybe<Array<GraphCms_PodcastWhereUniqueInput>>;
  /** Update multiple Podcast documents */
  update?: Maybe<Array<GraphCms_PodcastUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Podcast documents */
  upsert?: Maybe<Array<GraphCms_PodcastUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Podcast documents */
  disconnect?: Maybe<Array<GraphCms_PodcastWhereUniqueInput>>;
  /** Delete multiple Podcast documents */
  delete?: Maybe<Array<GraphCms_PodcastWhereUniqueInput>>;
};

export type GraphCms_PodcastUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  startDate: Scalars['GraphCMS_DateTime'];
  spotifyUrl?: Maybe<Scalars['String']>;
  googlePodcastUrl?: Maybe<Scalars['String']>;
  radioPublicUrl?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_PodcastUpdateManyLocalizationInput>>;
};

export type GraphCms_PodcastUpdateManyLocalizationInput = {
  title: Scalars['String'];
  subTitle: Scalars['String'];
  description: Scalars['String'];
};

export type GraphCms_PodcastUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_PodcastWhereInput;
  /** Update many input */
  data: GraphCms_PodcastUpdateManyInput;
};

export type GraphCms_PodcastUpdateOneInlineInput = {
  /** Create and connect one Podcast document */
  create?: Maybe<GraphCms_PodcastCreateInput>;
  /** Update single Podcast document */
  update?: Maybe<GraphCms_PodcastUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Podcast document */
  upsert?: Maybe<GraphCms_PodcastUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Podcast document */
  connect?: Maybe<GraphCms_PodcastWhereUniqueInput>;
  /** Disconnect currently connected Podcast document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Podcast document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_PodcastUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_PodcastWhereUniqueInput;
  /** Document to update */
  data: GraphCms_PodcastUpdateInput;
};

export type GraphCms_PodcastUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_PodcastCreateInput;
  /** Update document if it exists */
  update: GraphCms_PodcastUpdateInput;
};

export type GraphCms_PodcastUpsertLocalizationInput = {
  update: GraphCms_PodcastUpdateLocalizationDataInput;
  create: GraphCms_PodcastCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PodcastUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_PodcastWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_PodcastUpsertInput;
};

/** Identifies documents */
export type GraphCms_PodcastWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PodcastWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PodcastWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PodcastWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  subTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  subTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  subTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  subTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subTitle_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_AssetWhereInput>;
  startDate?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  spotifyUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  spotifyUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotifyUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  spotifyUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  spotifyUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotifyUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotifyUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  spotifyUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotifyUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotifyUrl_not_ends_with?: Maybe<Scalars['String']>;
  googlePodcastUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  googlePodcastUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  googlePodcastUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  googlePodcastUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  googlePodcastUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  googlePodcastUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  googlePodcastUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  googlePodcastUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  googlePodcastUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  googlePodcastUrl_not_ends_with?: Maybe<Scalars['String']>;
  radioPublicUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  radioPublicUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  radioPublicUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  radioPublicUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  radioPublicUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  radioPublicUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  radioPublicUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  radioPublicUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  radioPublicUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  radioPublicUrl_not_ends_with?: Maybe<Scalars['String']>;
  podcastStatus?: Maybe<GraphCms_PodcastStatusWhereInput>;
};

/** References Podcast record uniquely */
export type GraphCms_PodcastWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_PublishLocaleInput = {
  /** Locales to publish */
  locale: GraphCms_Locale;
  /** Stages to publish selected locales to */
  stages: Array<GraphCms_Stage>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GraphCms_Rgba = {
  r: Scalars['GraphCMS_RGBAHue'];
  g: Scalars['GraphCMS_RGBAHue'];
  b: Scalars['GraphCMS_RGBAHue'];
  a: Scalars['GraphCMS_RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GraphCms_RgbaInput = {
  r: Scalars['GraphCMS_RGBAHue'];
  g: Scalars['GraphCMS_RGBAHue'];
  b: Scalars['GraphCMS_RGBAHue'];
  a: Scalars['GraphCMS_RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type GraphCms_RichText = {
  /** Returns AST representation */
  raw: Scalars['GraphCMS_RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** List of services or expertises. */
export type GraphCms_Service = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Service>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Service>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  /** List of Service versions */
  history: Array<GraphCms_Version>;
};


/** List of services or expertises. */
export type GraphCms_ServiceLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** List of services or expertises. */
export type GraphCms_ServiceDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** List of services or expertises. */
export type GraphCms_ServiceCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** List of services or expertises. */
export type GraphCms_ServiceUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** List of services or expertises. */
export type GraphCms_ServicePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** List of services or expertises. */
export type GraphCms_ServiceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

/** A connection to a list of items. */
export type GraphCms_ServiceConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ServiceEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ServiceCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** name input for default locale (fr) */
  name: Scalars['String'];
  /** description input for default locale (fr) */
  description: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ServiceCreateLocalizationsInput>;
};

export type GraphCms_ServiceCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type GraphCms_ServiceCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ServiceCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ServiceCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ServiceCreateLocalizationInput>>;
};

/** An edge in a connection. */
export type GraphCms_ServiceEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Service;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ServiceManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ServiceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ServiceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ServiceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_ServiceOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC';

export type GraphCms_ServiceUpdateInput = {
  /** name input for default locale (fr) */
  name?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ServiceUpdateLocalizationsInput>;
};

export type GraphCms_ServiceUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_ServiceUpdateLocalizationInput = {
  data: GraphCms_ServiceUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ServiceUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ServiceCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ServiceUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ServiceUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ServiceUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** Optional updates to localizations */
  localizations?: Maybe<Array<GraphCms_ServiceUpdateManyLocalizationInput>>;
};

export type GraphCms_ServiceUpdateManyLocalizationInput = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type GraphCms_ServiceUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ServiceWhereInput;
  /** Update many input */
  data: GraphCms_ServiceUpdateManyInput;
};

export type GraphCms_ServiceUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ServiceWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ServiceUpdateInput;
};

export type GraphCms_ServiceUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ServiceCreateInput;
  /** Update document if it exists */
  update: GraphCms_ServiceUpdateInput;
};

export type GraphCms_ServiceUpsertLocalizationInput = {
  update: GraphCms_ServiceUpdateLocalizationDataInput;
  create: GraphCms_ServiceCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ServiceUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ServiceWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ServiceUpsertInput;
};

/** Identifies documents */
export type GraphCms_ServiceWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ServiceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ServiceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ServiceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Service record uniquely */
export type GraphCms_ServiceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export type GraphCms_Stage = 
  /** System Published Stage */
  | 'PUBLISHED'
  /** System Draft Stage */
  | 'DRAFT';

export type GraphCms_SystemDateTimeFieldVariation = 
  | 'BASE'
  | 'LOCALIZATION'
  | 'COMBINED';

export type GraphCms_UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: GraphCms_Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<GraphCms_Stage>;
};

export type GraphCms_Version = {
  id: Scalars['ID'];
  stage: GraphCms_Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['GraphCMS_DateTime'];
};

export type GraphCms_VersionWhereInput = {
  id: Scalars['ID'];
  stage: GraphCms_Stage;
  revision: Scalars['Int'];
};

export type GraphCms_Website = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Website>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** List of Website versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_WebsiteDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_WebsiteHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

/** A connection to a list of items. */
export type GraphCms_WebsiteConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_WebsiteEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_WebsiteCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
};

/** An edge in a connection. */
export type GraphCms_WebsiteEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Website;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_WebsiteManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_WebsiteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_WebsiteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_WebsiteWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_WebsiteOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC';

export type GraphCms_WebsiteUpdateInput = {
  /** No fields in update input */
  _?: Maybe<Scalars['String']>;
};

export type GraphCms_WebsiteUpdateManyInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_WebsiteUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_WebsiteWhereInput;
  /** Update many input */
  data: GraphCms_WebsiteUpdateManyInput;
};

export type GraphCms_WebsiteUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_WebsiteWhereUniqueInput;
  /** Document to update */
  data: GraphCms_WebsiteUpdateInput;
};

export type GraphCms_WebsiteUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_WebsiteCreateInput;
  /** Update document if it exists */
  update: GraphCms_WebsiteUpdateInput;
};

export type GraphCms_WebsiteUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_WebsiteWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_WebsiteUpsertInput;
};

/** Identifies documents */
export type GraphCms_WebsiteWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_WebsiteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_WebsiteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_WebsiteWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
};

/** References Website record uniquely */
export type GraphCms_WebsiteWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum = 
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
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
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

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  gcms: GraphCms;
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
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


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
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
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
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
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___headers___Authorization'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
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
  | 'componentPath';

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
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
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
  | 'pluginOptions___fileName'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___headers___Authorization'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
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
  fileName?: Maybe<Scalars['String']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  Authorization?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
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
