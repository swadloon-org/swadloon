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
  /** Slate-compatible RichText AST */
  GraphCMS_RichTextAST: any;
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
  /** Retrieve multiple blogPosts */
  blogPosts: Array<GraphCms_BlogPost>;
  /** Retrieve a single blogPost */
  blogPost?: Maybe<GraphCms_BlogPost>;
  /** Retrieve multiple blogPosts using the Relay connection interface */
  blogPostsConnection: GraphCms_BlogPostConnection;
  /** Retrieve document version */
  blogPostVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple blogSections */
  blogSections: Array<GraphCms_BlogSection>;
  /** Retrieve a single blogSection */
  blogSection?: Maybe<GraphCms_BlogSection>;
  /** Retrieve multiple blogSections using the Relay connection interface */
  blogSectionsConnection: GraphCms_BlogSectionConnection;
  /** Retrieve document version */
  blogSectionVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple companyAddresses */
  companyAddresses: Array<GraphCms_CompanyAddress>;
  /** Retrieve a single companyAddress */
  companyAddress?: Maybe<GraphCms_CompanyAddress>;
  /** Retrieve multiple companyAddresses using the Relay connection interface */
  companyAddressesConnection: GraphCms_CompanyAddressConnection;
  /** Retrieve document version */
  companyAddressVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple companyMedias */
  companyMedias: Array<GraphCms_CompanyMedia>;
  /** Retrieve a single companyMedia */
  companyMedia?: Maybe<GraphCms_CompanyMedia>;
  /** Retrieve multiple companyMedias using the Relay connection interface */
  companyMediasConnection: GraphCms_CompanyMediaConnection;
  /** Retrieve document version */
  companyMediaVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple infoSections */
  infoSections: Array<GraphCms_InfoSection>;
  /** Retrieve a single infoSection */
  infoSection?: Maybe<GraphCms_InfoSection>;
  /** Retrieve multiple infoSections using the Relay connection interface */
  infoSectionsConnection: GraphCms_InfoSectionConnection;
  /** Retrieve document version */
  infoSectionVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple infoTiles */
  infoTiles: Array<GraphCms_InfoTile>;
  /** Retrieve a single infoTile */
  infoTile?: Maybe<GraphCms_InfoTile>;
  /** Retrieve multiple infoTiles using the Relay connection interface */
  infoTilesConnection: GraphCms_InfoTileConnection;
  /** Retrieve document version */
  infoTileVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple pageIndices */
  pageIndices: Array<GraphCms_PageIndex>;
  /** Retrieve a single pageIndex */
  pageIndex?: Maybe<GraphCms_PageIndex>;
  /** Retrieve multiple pageIndices using the Relay connection interface */
  pageIndicesConnection: GraphCms_PageIndexConnection;
  /** Retrieve document version */
  pageIndexVersion?: Maybe<GraphCms_DocumentVersion>;
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


export type GraphCmsBlogSectionsArgs = {
  where?: Maybe<GraphCms_BlogSectionWhereInput>;
  orderBy?: Maybe<GraphCms_BlogSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogSectionArgs = {
  where: GraphCms_BlogSectionWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogSectionsConnectionArgs = {
  where?: Maybe<GraphCms_BlogSectionWhereInput>;
  orderBy?: Maybe<GraphCms_BlogSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogSectionVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsCompanyAddressesArgs = {
  where?: Maybe<GraphCms_CompanyAddressWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyAddressOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsCompanyAddressArgs = {
  where: GraphCms_CompanyAddressWhereUniqueInput;
  stage?: GraphCms_Stage;
};


export type GraphCmsCompanyAddressesConnectionArgs = {
  where?: Maybe<GraphCms_CompanyAddressWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyAddressOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsCompanyAddressVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsCompanyMediasArgs = {
  where?: Maybe<GraphCms_CompanyMediaWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyMediaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsCompanyMediaArgs = {
  where: GraphCms_CompanyMediaWhereUniqueInput;
  stage?: GraphCms_Stage;
};


export type GraphCmsCompanyMediasConnectionArgs = {
  where?: Maybe<GraphCms_CompanyMediaWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyMediaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsCompanyMediaVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsInfoSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoSectionArgs = {
  where: GraphCms_InfoSectionWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoSectionsConnectionArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoSectionVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsInfoTilesArgs = {
  where?: Maybe<GraphCms_InfoTileWhereInput>;
  orderBy?: Maybe<GraphCms_InfoTileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoTileArgs = {
  where: GraphCms_InfoTileWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoTilesConnectionArgs = {
  where?: Maybe<GraphCms_InfoTileWhereInput>;
  orderBy?: Maybe<GraphCms_InfoTileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoTileVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsPageIndicesArgs = {
  where?: Maybe<GraphCms_PageIndexWhereInput>;
  orderBy?: Maybe<GraphCms_PageIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPageIndexArgs = {
  where: GraphCms_PageIndexWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPageIndicesConnectionArgs = {
  where?: Maybe<GraphCms_PageIndexWhereInput>;
  orderBy?: Maybe<GraphCms_PageIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsPageIndexVersionArgs = {
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
  companyMediaLogoFooter: Array<GraphCms_CompanyMedia>;
  companyMediaLogo: Array<GraphCms_CompanyMedia>;
  pageIndexBannerImage: Array<GraphCms_PageIndex>;
  infoSectionImage: Array<GraphCms_InfoSection>;
  blogPostImage: Array<GraphCms_BlogPost>;
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
export type GraphCms_AssetCompanyMediaLogoFooterArgs = {
  where?: Maybe<GraphCms_CompanyMediaWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyMediaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetCompanyMediaLogoArgs = {
  where?: Maybe<GraphCms_CompanyMediaWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyMediaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetPageIndexBannerImageArgs = {
  where?: Maybe<GraphCms_PageIndexWhereInput>;
  orderBy?: Maybe<GraphCms_PageIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetInfoSectionImageArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetBlogPostImageArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
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
  companyMediaLogoFooter?: Maybe<GraphCms_CompanyMediaCreateManyInlineInput>;
  companyMediaLogo?: Maybe<GraphCms_CompanyMediaCreateManyInlineInput>;
  pageIndexBannerImage?: Maybe<GraphCms_PageIndexCreateManyInlineInput>;
  infoSectionImage?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  blogPostImage?: Maybe<GraphCms_BlogPostCreateManyInlineInput>;
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
  companyMediaLogoFooter_every?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogoFooter_some?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogoFooter_none?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogo_every?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogo_some?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogo_none?: Maybe<GraphCms_CompanyMediaWhereInput>;
  pageIndexBannerImage_every?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndexBannerImage_some?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndexBannerImage_none?: Maybe<GraphCms_PageIndexWhereInput>;
  infoSectionImage_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  blogPostImage_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_none?: Maybe<GraphCms_BlogPostWhereInput>;
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
  companyMediaLogoFooter?: Maybe<GraphCms_CompanyMediaUpdateManyInlineInput>;
  companyMediaLogo?: Maybe<GraphCms_CompanyMediaUpdateManyInlineInput>;
  pageIndexBannerImage?: Maybe<GraphCms_PageIndexUpdateManyInlineInput>;
  infoSectionImage?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  blogPostImage?: Maybe<GraphCms_BlogPostUpdateManyInlineInput>;
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
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_AssetUpdateManyLocalizationsInput>;
};

export type GraphCms_AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetUpdateManyLocalizationInput = {
  data: GraphCms_AssetUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_AssetUpdateManyLocalizationInput>>;
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
  companyMediaLogoFooter_every?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogoFooter_some?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogoFooter_none?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogo_every?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogo_some?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaLogo_none?: Maybe<GraphCms_CompanyMediaWhereInput>;
  pageIndexBannerImage_every?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndexBannerImage_some?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndexBannerImage_none?: Maybe<GraphCms_PageIndexWhereInput>;
  infoSectionImage_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  blogPostImage_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_none?: Maybe<GraphCms_BlogPostWhereInput>;
};

/** References Asset record uniquely */
export type GraphCms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GraphCMS_Long'];
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
  title?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_Asset>;
  content?: Maybe<Scalars['String']>;
  blogSection?: Maybe<GraphCms_BlogSection>;
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
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars['String']>;
  blogSection?: Maybe<GraphCms_BlogSectionCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogPostCreateLocalizationsInput>;
};

export type GraphCms_BlogPostCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
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
  image?: Maybe<GraphCms_AssetWhereInput>;
  blogSection?: Maybe<GraphCms_BlogSectionWhereInput>;
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
  | 'title_ASC'
  | 'title_DESC'
  | 'content_ASC'
  | 'content_DESC';

export type GraphCms_BlogPostUpdateInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars['String']>;
  blogSection?: Maybe<GraphCms_BlogSectionUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogPostUpdateLocalizationsInput>;
};

export type GraphCms_BlogPostUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
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
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_BlogPostUpdateManyLocalizationsInput>;
};

export type GraphCms_BlogPostUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogPostUpdateManyLocalizationInput = {
  data: GraphCms_BlogPostUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPostUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogPostUpdateManyLocalizationInput>>;
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
  image?: Maybe<GraphCms_AssetWhereInput>;
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
  blogSection?: Maybe<GraphCms_BlogSectionWhereInput>;
};

/** References BlogPost record uniquely */
export type GraphCms_BlogPostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_BlogSection = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_BlogSection>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_BlogSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionLabel?: Maybe<Scalars['String']>;
  featuredPosts: Array<GraphCms_BlogPost>;
  /** List of BlogSection versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_BlogSectionLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_BlogSectionDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_BlogSectionCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogSectionUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogSectionPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogSectionFeaturedPostsArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_BlogSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_BlogSectionConnectInput = {
  /** Document to connect */
  where: GraphCms_BlogSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_BlogSectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_BlogSectionEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_BlogSectionCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** actionLabel input for default locale (en) */
  actionLabel?: Maybe<Scalars['String']>;
  featuredPosts?: Maybe<GraphCms_BlogPostCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogSectionCreateLocalizationsInput>;
};

export type GraphCms_BlogSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionLabel?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogSectionCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_BlogSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_BlogSectionCreateLocalizationInput>>;
};

export type GraphCms_BlogSectionCreateManyInlineInput = {
  /** Create and connect multiple existing BlogSection documents */
  create?: Maybe<Array<GraphCms_BlogSectionCreateInput>>;
  /** Connect multiple existing BlogSection documents */
  connect?: Maybe<Array<GraphCms_BlogSectionWhereUniqueInput>>;
};

export type GraphCms_BlogSectionCreateOneInlineInput = {
  /** Create and connect one BlogSection document */
  create?: Maybe<GraphCms_BlogSectionCreateInput>;
  /** Connect one existing BlogSection document */
  connect?: Maybe<GraphCms_BlogSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_BlogSectionEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_BlogSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_BlogSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogSectionWhereInput>>;
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
  featuredPosts_every?: Maybe<GraphCms_BlogPostWhereInput>;
  featuredPosts_some?: Maybe<GraphCms_BlogPostWhereInput>;
  featuredPosts_none?: Maybe<GraphCms_BlogPostWhereInput>;
};

export type GraphCms_BlogSectionOrderByInput = 
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
  | 'text_ASC'
  | 'text_DESC'
  | 'actionLabel_ASC'
  | 'actionLabel_DESC';

export type GraphCms_BlogSectionUpdateInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** actionLabel input for default locale (en) */
  actionLabel?: Maybe<Scalars['String']>;
  featuredPosts?: Maybe<GraphCms_BlogPostUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogSectionUpdateLocalizationsInput>;
};

export type GraphCms_BlogSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionLabel?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogSectionUpdateLocalizationInput = {
  data: GraphCms_BlogSectionUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_BlogSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_BlogSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_BlogSectionUpdateManyInlineInput = {
  /** Create and connect multiple BlogSection documents */
  create?: Maybe<Array<GraphCms_BlogSectionCreateInput>>;
  /** Connect multiple existing BlogSection documents */
  connect?: Maybe<Array<GraphCms_BlogSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing BlogSection documents */
  set?: Maybe<Array<GraphCms_BlogSectionWhereUniqueInput>>;
  /** Update multiple BlogSection documents */
  update?: Maybe<Array<GraphCms_BlogSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogSection documents */
  upsert?: Maybe<Array<GraphCms_BlogSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple BlogSection documents */
  disconnect?: Maybe<Array<GraphCms_BlogSectionWhereUniqueInput>>;
  /** Delete multiple BlogSection documents */
  delete?: Maybe<Array<GraphCms_BlogSectionWhereUniqueInput>>;
};

export type GraphCms_BlogSectionUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** actionLabel input for default locale (en) */
  actionLabel?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_BlogSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_BlogSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionLabel?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogSectionUpdateManyLocalizationInput = {
  data: GraphCms_BlogSectionUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogSectionUpdateManyLocalizationInput>>;
};

export type GraphCms_BlogSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_BlogSectionWhereInput;
  /** Update many input */
  data: GraphCms_BlogSectionUpdateManyInput;
};

export type GraphCms_BlogSectionUpdateOneInlineInput = {
  /** Create and connect one BlogSection document */
  create?: Maybe<GraphCms_BlogSectionCreateInput>;
  /** Update single BlogSection document */
  update?: Maybe<GraphCms_BlogSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogSection document */
  upsert?: Maybe<GraphCms_BlogSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing BlogSection document */
  connect?: Maybe<GraphCms_BlogSectionWhereUniqueInput>;
  /** Disconnect currently connected BlogSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected BlogSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_BlogSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogSectionWhereUniqueInput;
  /** Document to update */
  data: GraphCms_BlogSectionUpdateInput;
};

export type GraphCms_BlogSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_BlogSectionCreateInput;
  /** Update document if it exists */
  update: GraphCms_BlogSectionUpdateInput;
};

export type GraphCms_BlogSectionUpsertLocalizationInput = {
  update: GraphCms_BlogSectionUpdateLocalizationDataInput;
  create: GraphCms_BlogSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogSectionWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_BlogSectionUpsertInput;
};

/** Identifies documents */
export type GraphCms_BlogSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogSectionWhereInput>>;
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
  text?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  actionLabel?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  actionLabel_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  actionLabel_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  actionLabel_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  actionLabel_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  actionLabel_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  actionLabel_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  actionLabel_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  actionLabel_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  actionLabel_not_ends_with?: Maybe<Scalars['String']>;
  featuredPosts_every?: Maybe<GraphCms_BlogPostWhereInput>;
  featuredPosts_some?: Maybe<GraphCms_BlogPostWhereInput>;
  featuredPosts_none?: Maybe<GraphCms_BlogPostWhereInput>;
};

/** References BlogSection record uniquely */
export type GraphCms_BlogSectionWhereUniqueInput = {
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

export type GraphCms_CompanyAddress = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_CompanyAddress>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneNoFees?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** List of CompanyAddress versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_CompanyAddressDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_CompanyAddressHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

/** A connection to a list of items. */
export type GraphCms_CompanyAddressConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_CompanyAddressEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_CompanyAddressCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneNoFees?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type GraphCms_CompanyAddressEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_CompanyAddress;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_CompanyAddressManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CompanyAddressWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CompanyAddressWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CompanyAddressWhereInput>>;
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
  addressLine1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  addressLine1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressLine1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  addressLine1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  addressLine1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressLine1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressLine1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  addressLine1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressLine1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressLine1_not_ends_with?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  addressLine2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressLine2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  addressLine2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  addressLine2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressLine2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressLine2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  addressLine2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressLine2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressLine2_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  postalCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  postalCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  postalCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  postalCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  postalCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  postalCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  postalCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  postalCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  postalCode_not_ends_with?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  provinceState_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  provinceState_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  provinceState_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  provinceState_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  provinceState_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  provinceState_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  provinceState_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  provinceState_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  provinceState_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phoneNoFees?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phoneNoFees_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNoFees_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phoneNoFees_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phoneNoFees_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNoFees_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNoFees_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phoneNoFees_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNoFees_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNoFees_not_ends_with?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  websiteUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  websiteUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  websiteUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  websiteUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  websiteUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  websiteUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  websiteUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  websiteUrl_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
};

export type GraphCms_CompanyAddressOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'addressLine1_ASC'
  | 'addressLine1_DESC'
  | 'addressLine2_ASC'
  | 'addressLine2_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'postalCode_ASC'
  | 'postalCode_DESC'
  | 'provinceState_ASC'
  | 'provinceState_DESC'
  | 'country_ASC'
  | 'country_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'phoneNoFees_ASC'
  | 'phoneNoFees_DESC'
  | 'websiteUrl_ASC'
  | 'websiteUrl_DESC'
  | 'email_ASC'
  | 'email_DESC';

export type GraphCms_CompanyAddressUpdateInput = {
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneNoFees?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type GraphCms_CompanyAddressUpdateManyInput = {
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneNoFees?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type GraphCms_CompanyAddressUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_CompanyAddressWhereInput;
  /** Update many input */
  data: GraphCms_CompanyAddressUpdateManyInput;
};

export type GraphCms_CompanyAddressUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CompanyAddressWhereUniqueInput;
  /** Document to update */
  data: GraphCms_CompanyAddressUpdateInput;
};

export type GraphCms_CompanyAddressUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_CompanyAddressCreateInput;
  /** Update document if it exists */
  update: GraphCms_CompanyAddressUpdateInput;
};

export type GraphCms_CompanyAddressUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CompanyAddressWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_CompanyAddressUpsertInput;
};

/** Identifies documents */
export type GraphCms_CompanyAddressWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CompanyAddressWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CompanyAddressWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CompanyAddressWhereInput>>;
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
  addressLine1?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  addressLine1_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressLine1_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  addressLine1_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  addressLine1_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressLine1_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressLine1_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  addressLine1_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressLine1_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressLine1_not_ends_with?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  addressLine2_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  addressLine2_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  addressLine2_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  addressLine2_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  addressLine2_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  addressLine2_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  addressLine2_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  addressLine2_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  addressLine2_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  city_not_ends_with?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  postalCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  postalCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  postalCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  postalCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  postalCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  postalCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  postalCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  postalCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  postalCode_not_ends_with?: Maybe<Scalars['String']>;
  provinceState?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  provinceState_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  provinceState_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  provinceState_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  provinceState_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  provinceState_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  provinceState_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  provinceState_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  provinceState_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  provinceState_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  country_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phoneNoFees?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phoneNoFees_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNoFees_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phoneNoFees_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  phoneNoFees_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNoFees_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNoFees_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phoneNoFees_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNoFees_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNoFees_not_ends_with?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  websiteUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  websiteUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  websiteUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  websiteUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  websiteUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  websiteUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  websiteUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  websiteUrl_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
};

/** References CompanyAddress record uniquely */
export type GraphCms_CompanyAddressWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_CompanyMedia = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_CompanyMedia>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  logoFooter?: Maybe<GraphCms_Asset>;
  logo?: Maybe<GraphCms_Asset>;
  /** List of CompanyMedia versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_CompanyMediaDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_CompanyMediaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_CompanyMediaConnectInput = {
  /** Document to connect */
  where: GraphCms_CompanyMediaWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_CompanyMediaConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_CompanyMediaEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_CompanyMediaCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  logoFooter?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  logo?: Maybe<GraphCms_AssetCreateOneInlineInput>;
};

export type GraphCms_CompanyMediaCreateManyInlineInput = {
  /** Create and connect multiple existing CompanyMedia documents */
  create?: Maybe<Array<GraphCms_CompanyMediaCreateInput>>;
  /** Connect multiple existing CompanyMedia documents */
  connect?: Maybe<Array<GraphCms_CompanyMediaWhereUniqueInput>>;
};

export type GraphCms_CompanyMediaCreateOneInlineInput = {
  /** Create and connect one CompanyMedia document */
  create?: Maybe<GraphCms_CompanyMediaCreateInput>;
  /** Connect one existing CompanyMedia document */
  connect?: Maybe<GraphCms_CompanyMediaWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_CompanyMediaEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_CompanyMedia;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_CompanyMediaManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CompanyMediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CompanyMediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CompanyMediaWhereInput>>;
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
  logoFooter?: Maybe<GraphCms_AssetWhereInput>;
  logo?: Maybe<GraphCms_AssetWhereInput>;
};

export type GraphCms_CompanyMediaOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC';

export type GraphCms_CompanyMediaUpdateInput = {
  logoFooter?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  logo?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
};

export type GraphCms_CompanyMediaUpdateManyInlineInput = {
  /** Create and connect multiple CompanyMedia documents */
  create?: Maybe<Array<GraphCms_CompanyMediaCreateInput>>;
  /** Connect multiple existing CompanyMedia documents */
  connect?: Maybe<Array<GraphCms_CompanyMediaConnectInput>>;
  /** Override currently-connected documents with multiple existing CompanyMedia documents */
  set?: Maybe<Array<GraphCms_CompanyMediaWhereUniqueInput>>;
  /** Update multiple CompanyMedia documents */
  update?: Maybe<Array<GraphCms_CompanyMediaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CompanyMedia documents */
  upsert?: Maybe<Array<GraphCms_CompanyMediaUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple CompanyMedia documents */
  disconnect?: Maybe<Array<GraphCms_CompanyMediaWhereUniqueInput>>;
  /** Delete multiple CompanyMedia documents */
  delete?: Maybe<Array<GraphCms_CompanyMediaWhereUniqueInput>>;
};

export type GraphCms_CompanyMediaUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type GraphCms_CompanyMediaUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_CompanyMediaWhereInput;
  /** Update many input */
  data: GraphCms_CompanyMediaUpdateManyInput;
};

export type GraphCms_CompanyMediaUpdateOneInlineInput = {
  /** Create and connect one CompanyMedia document */
  create?: Maybe<GraphCms_CompanyMediaCreateInput>;
  /** Update single CompanyMedia document */
  update?: Maybe<GraphCms_CompanyMediaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CompanyMedia document */
  upsert?: Maybe<GraphCms_CompanyMediaUpsertWithNestedWhereUniqueInput>;
  /** Connect existing CompanyMedia document */
  connect?: Maybe<GraphCms_CompanyMediaWhereUniqueInput>;
  /** Disconnect currently connected CompanyMedia document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected CompanyMedia document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_CompanyMediaUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CompanyMediaWhereUniqueInput;
  /** Document to update */
  data: GraphCms_CompanyMediaUpdateInput;
};

export type GraphCms_CompanyMediaUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_CompanyMediaCreateInput;
  /** Update document if it exists */
  update: GraphCms_CompanyMediaUpdateInput;
};

export type GraphCms_CompanyMediaUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CompanyMediaWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_CompanyMediaUpsertInput;
};

/** Identifies documents */
export type GraphCms_CompanyMediaWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CompanyMediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CompanyMediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CompanyMediaWhereInput>>;
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
  logoFooter?: Maybe<GraphCms_AssetWhereInput>;
  logo?: Maybe<GraphCms_AssetWhereInput>;
};

/** References CompanyMedia record uniquely */
export type GraphCms_CompanyMediaWhereUniqueInput = {
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

export type GraphCms_InfoSection = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_InfoSection>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_InfoSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  image?: Maybe<GraphCms_Asset>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_InfoSectionType>;
  infoTiles: Array<GraphCms_InfoTile>;
  showTabs?: Maybe<Scalars['Boolean']>;
  childs: Array<GraphCms_InfoSection>;
  infoSection: Array<GraphCms_InfoSection>;
  pageIndex: Array<GraphCms_PageIndex>;
  titleTab?: Maybe<Scalars['String']>;
  /** List of InfoSection versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_InfoSectionLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_InfoSectionDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_InfoSectionCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoSectionUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoSectionPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoSectionInfoTilesArgs = {
  where?: Maybe<GraphCms_InfoTileWhereInput>;
  orderBy?: Maybe<GraphCms_InfoTileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionChildsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionInfoSectionArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionPageIndexArgs = {
  where?: Maybe<GraphCms_PageIndexWhereInput>;
  orderBy?: Maybe<GraphCms_PageIndexOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_InfoSectionConnectInput = {
  /** Document to connect */
  where: GraphCms_InfoSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_InfoSectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_InfoSectionEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_InfoSectionCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  image?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (en) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** actionText input for default locale (en) */
  actionText?: Maybe<Scalars['String']>;
  /** type input for default locale (en) */
  type?: Maybe<GraphCms_InfoSectionType>;
  infoTiles?: Maybe<GraphCms_InfoTileCreateManyInlineInput>;
  showTabs?: Maybe<Scalars['Boolean']>;
  childs?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  infoSection?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  pageIndex?: Maybe<GraphCms_PageIndexCreateManyInlineInput>;
  /** titleTab input for default locale (en) */
  titleTab?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_InfoSectionCreateLocalizationsInput>;
};

export type GraphCms_InfoSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_InfoSectionType>;
  titleTab?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoSectionCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_InfoSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_InfoSectionCreateLocalizationInput>>;
};

export type GraphCms_InfoSectionCreateManyInlineInput = {
  /** Create and connect multiple existing InfoSection documents */
  create?: Maybe<Array<GraphCms_InfoSectionCreateInput>>;
  /** Connect multiple existing InfoSection documents */
  connect?: Maybe<Array<GraphCms_InfoSectionWhereUniqueInput>>;
};

export type GraphCms_InfoSectionCreateOneInlineInput = {
  /** Create and connect one InfoSection document */
  create?: Maybe<GraphCms_InfoSectionCreateInput>;
  /** Connect one existing InfoSection document */
  connect?: Maybe<GraphCms_InfoSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_InfoSectionEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_InfoSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_InfoSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InfoSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InfoSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InfoSectionWhereInput>>;
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
  infoTiles_every?: Maybe<GraphCms_InfoTileWhereInput>;
  infoTiles_some?: Maybe<GraphCms_InfoTileWhereInput>;
  infoTiles_none?: Maybe<GraphCms_InfoTileWhereInput>;
  showTabs?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showTabs_not?: Maybe<Scalars['Boolean']>;
  childs_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  childs_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  childs_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  pageIndex_every?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndex_some?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndex_none?: Maybe<GraphCms_PageIndexWhereInput>;
};

export type GraphCms_InfoSectionOrderByInput = 
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
  | 'titleHighlight_ASC'
  | 'titleHighlight_DESC'
  | 'text_ASC'
  | 'text_DESC'
  | 'actionText_ASC'
  | 'actionText_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'showTabs_ASC'
  | 'showTabs_DESC'
  | 'titleTab_ASC'
  | 'titleTab_DESC';

export type GraphCms_InfoSectionType = 
  | 'default'
  | 'defaultShadow'
  | 'reversed'
  | 'reversedShadow'
  | 'type1'
  | 'type1default'
  | 'type1group'
  | 'type1reversed'
  | 'type2'
  | 'type3'
  | 'type4';

export type GraphCms_InfoSectionUpdateInput = {
  image?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (en) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** actionText input for default locale (en) */
  actionText?: Maybe<Scalars['String']>;
  /** type input for default locale (en) */
  type?: Maybe<GraphCms_InfoSectionType>;
  infoTiles?: Maybe<GraphCms_InfoTileUpdateManyInlineInput>;
  showTabs?: Maybe<Scalars['Boolean']>;
  childs?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  infoSection?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  pageIndex?: Maybe<GraphCms_PageIndexUpdateManyInlineInput>;
  /** titleTab input for default locale (en) */
  titleTab?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_InfoSectionUpdateLocalizationsInput>;
};

export type GraphCms_InfoSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_InfoSectionType>;
  titleTab?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoSectionUpdateLocalizationInput = {
  data: GraphCms_InfoSectionUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_InfoSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_InfoSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_InfoSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_InfoSectionUpdateManyInlineInput = {
  /** Create and connect multiple InfoSection documents */
  create?: Maybe<Array<GraphCms_InfoSectionCreateInput>>;
  /** Connect multiple existing InfoSection documents */
  connect?: Maybe<Array<GraphCms_InfoSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing InfoSection documents */
  set?: Maybe<Array<GraphCms_InfoSectionWhereUniqueInput>>;
  /** Update multiple InfoSection documents */
  update?: Maybe<Array<GraphCms_InfoSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple InfoSection documents */
  upsert?: Maybe<Array<GraphCms_InfoSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple InfoSection documents */
  disconnect?: Maybe<Array<GraphCms_InfoSectionWhereUniqueInput>>;
  /** Delete multiple InfoSection documents */
  delete?: Maybe<Array<GraphCms_InfoSectionWhereUniqueInput>>;
};

export type GraphCms_InfoSectionUpdateManyInput = {
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (en) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** actionText input for default locale (en) */
  actionText?: Maybe<Scalars['String']>;
  /** type input for default locale (en) */
  type?: Maybe<GraphCms_InfoSectionType>;
  showTabs?: Maybe<Scalars['Boolean']>;
  /** titleTab input for default locale (en) */
  titleTab?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_InfoSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_InfoSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_InfoSectionType>;
  titleTab?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoSectionUpdateManyLocalizationInput = {
  data: GraphCms_InfoSectionUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_InfoSectionUpdateManyLocalizationInput>>;
};

export type GraphCms_InfoSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_InfoSectionWhereInput;
  /** Update many input */
  data: GraphCms_InfoSectionUpdateManyInput;
};

export type GraphCms_InfoSectionUpdateOneInlineInput = {
  /** Create and connect one InfoSection document */
  create?: Maybe<GraphCms_InfoSectionCreateInput>;
  /** Update single InfoSection document */
  update?: Maybe<GraphCms_InfoSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single InfoSection document */
  upsert?: Maybe<GraphCms_InfoSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing InfoSection document */
  connect?: Maybe<GraphCms_InfoSectionWhereUniqueInput>;
  /** Disconnect currently connected InfoSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected InfoSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_InfoSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_InfoSectionWhereUniqueInput;
  /** Document to update */
  data: GraphCms_InfoSectionUpdateInput;
};

export type GraphCms_InfoSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_InfoSectionCreateInput;
  /** Update document if it exists */
  update: GraphCms_InfoSectionUpdateInput;
};

export type GraphCms_InfoSectionUpsertLocalizationInput = {
  update: GraphCms_InfoSectionUpdateLocalizationDataInput;
  create: GraphCms_InfoSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_InfoSectionWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_InfoSectionUpsertInput;
};

/** Identifies documents */
export type GraphCms_InfoSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InfoSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InfoSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InfoSectionWhereInput>>;
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
  titleHighlight?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  titleHighlight_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  titleHighlight_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  titleHighlight_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  titleHighlight_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  titleHighlight_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  titleHighlight_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  titleHighlight_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  titleHighlight_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  titleHighlight_not_ends_with?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  actionText_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  actionText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  actionText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  actionText_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  actionText_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  actionText_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  actionText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  actionText_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  actionText_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_InfoSectionType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GraphCms_InfoSectionType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GraphCms_InfoSectionType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GraphCms_InfoSectionType>>;
  infoTiles_every?: Maybe<GraphCms_InfoTileWhereInput>;
  infoTiles_some?: Maybe<GraphCms_InfoTileWhereInput>;
  infoTiles_none?: Maybe<GraphCms_InfoTileWhereInput>;
  showTabs?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showTabs_not?: Maybe<Scalars['Boolean']>;
  childs_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  childs_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  childs_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  pageIndex_every?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndex_some?: Maybe<GraphCms_PageIndexWhereInput>;
  pageIndex_none?: Maybe<GraphCms_PageIndexWhereInput>;
  titleTab?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  titleTab_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  titleTab_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  titleTab_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  titleTab_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  titleTab_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  titleTab_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  titleTab_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  titleTab_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  titleTab_not_ends_with?: Maybe<Scalars['String']>;
};

/** References InfoSection record uniquely */
export type GraphCms_InfoSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_InfoTile = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_InfoTile>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_InfoTile>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  infoSection: Array<GraphCms_InfoSection>;
  /** List of InfoTile versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_InfoTileLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_InfoTileDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_InfoTileCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoTileUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoTilePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoTileInfoSectionArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoTileHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_InfoTileConnectInput = {
  /** Document to connect */
  where: GraphCms_InfoTileWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_InfoTileConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_InfoTileEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_InfoTileCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  icon?: Maybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  infoSection?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_InfoTileCreateLocalizationsInput>;
};

export type GraphCms_InfoTileCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoTileCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_InfoTileCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoTileCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_InfoTileCreateLocalizationInput>>;
};

export type GraphCms_InfoTileCreateManyInlineInput = {
  /** Create and connect multiple existing InfoTile documents */
  create?: Maybe<Array<GraphCms_InfoTileCreateInput>>;
  /** Connect multiple existing InfoTile documents */
  connect?: Maybe<Array<GraphCms_InfoTileWhereUniqueInput>>;
};

export type GraphCms_InfoTileCreateOneInlineInput = {
  /** Create and connect one InfoTile document */
  create?: Maybe<GraphCms_InfoTileCreateInput>;
  /** Connect one existing InfoTile document */
  connect?: Maybe<GraphCms_InfoTileWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_InfoTileEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_InfoTile;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_InfoTileManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InfoTileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InfoTileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InfoTileWhereInput>>;
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
  icon?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  icon_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  icon_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  icon_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  icon_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  icon_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  icon_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  icon_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  icon_not_ends_with?: Maybe<Scalars['String']>;
  infoSection_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_none?: Maybe<GraphCms_InfoSectionWhereInput>;
};

export type GraphCms_InfoTileOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'icon_ASC'
  | 'icon_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'text_ASC'
  | 'text_DESC';

export type GraphCms_InfoTileUpdateInput = {
  icon?: Maybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  infoSection?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_InfoTileUpdateLocalizationsInput>;
};

export type GraphCms_InfoTileUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoTileUpdateLocalizationInput = {
  data: GraphCms_InfoTileUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoTileUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_InfoTileCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_InfoTileUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_InfoTileUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_InfoTileUpdateManyInlineInput = {
  /** Create and connect multiple InfoTile documents */
  create?: Maybe<Array<GraphCms_InfoTileCreateInput>>;
  /** Connect multiple existing InfoTile documents */
  connect?: Maybe<Array<GraphCms_InfoTileConnectInput>>;
  /** Override currently-connected documents with multiple existing InfoTile documents */
  set?: Maybe<Array<GraphCms_InfoTileWhereUniqueInput>>;
  /** Update multiple InfoTile documents */
  update?: Maybe<Array<GraphCms_InfoTileUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple InfoTile documents */
  upsert?: Maybe<Array<GraphCms_InfoTileUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple InfoTile documents */
  disconnect?: Maybe<Array<GraphCms_InfoTileWhereUniqueInput>>;
  /** Delete multiple InfoTile documents */
  delete?: Maybe<Array<GraphCms_InfoTileWhereUniqueInput>>;
};

export type GraphCms_InfoTileUpdateManyInput = {
  icon?: Maybe<Scalars['String']>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (en) */
  text?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_InfoTileUpdateManyLocalizationsInput>;
};

export type GraphCms_InfoTileUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoTileUpdateManyLocalizationInput = {
  data: GraphCms_InfoTileUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoTileUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_InfoTileUpdateManyLocalizationInput>>;
};

export type GraphCms_InfoTileUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_InfoTileWhereInput;
  /** Update many input */
  data: GraphCms_InfoTileUpdateManyInput;
};

export type GraphCms_InfoTileUpdateOneInlineInput = {
  /** Create and connect one InfoTile document */
  create?: Maybe<GraphCms_InfoTileCreateInput>;
  /** Update single InfoTile document */
  update?: Maybe<GraphCms_InfoTileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single InfoTile document */
  upsert?: Maybe<GraphCms_InfoTileUpsertWithNestedWhereUniqueInput>;
  /** Connect existing InfoTile document */
  connect?: Maybe<GraphCms_InfoTileWhereUniqueInput>;
  /** Disconnect currently connected InfoTile document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected InfoTile document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_InfoTileUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_InfoTileWhereUniqueInput;
  /** Document to update */
  data: GraphCms_InfoTileUpdateInput;
};

export type GraphCms_InfoTileUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_InfoTileCreateInput;
  /** Update document if it exists */
  update: GraphCms_InfoTileUpdateInput;
};

export type GraphCms_InfoTileUpsertLocalizationInput = {
  update: GraphCms_InfoTileUpdateLocalizationDataInput;
  create: GraphCms_InfoTileCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoTileUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_InfoTileWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_InfoTileUpsertInput;
};

/** Identifies documents */
export type GraphCms_InfoTileWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InfoTileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InfoTileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InfoTileWhereInput>>;
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
  icon?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  icon_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  icon_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  icon_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  icon_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  icon_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  icon_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  icon_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  icon_not_ends_with?: Maybe<Scalars['String']>;
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
  text?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  infoSection_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_none?: Maybe<GraphCms_InfoSectionWhereInput>;
};

/** References InfoTile record uniquely */
export type GraphCms_InfoTileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


/** Locale system enumeration */
export type GraphCms_Locale = 
  /** System locale */
  | 'en'
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

export type GraphCms_PageIndex = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_PageIndex>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_PageIndex>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
  bannerImage: Array<GraphCms_Asset>;
  employeeEmployerSections: Array<GraphCms_InfoSection>;
  /** List of PageIndex versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_PageIndexLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_PageIndexDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_PageIndexCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PageIndexUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PageIndexPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_PageIndexBannerImageArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_PageIndexEmployeeEmployerSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_PageIndexHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_PageIndexConnectInput = {
  /** Document to connect */
  where: GraphCms_PageIndexWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_PageIndexConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_PageIndexEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_PageIndexCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (en) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** bannerSubTitle input for default locale (en) */
  bannerSubTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateManyInlineInput>;
  employeeEmployerSections?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_PageIndexCreateLocalizationsInput>;
};

export type GraphCms_PageIndexCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_PageIndexCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_PageIndexCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PageIndexCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_PageIndexCreateLocalizationInput>>;
};

export type GraphCms_PageIndexCreateManyInlineInput = {
  /** Create and connect multiple existing PageIndex documents */
  create?: Maybe<Array<GraphCms_PageIndexCreateInput>>;
  /** Connect multiple existing PageIndex documents */
  connect?: Maybe<Array<GraphCms_PageIndexWhereUniqueInput>>;
};

export type GraphCms_PageIndexCreateOneInlineInput = {
  /** Create and connect one PageIndex document */
  create?: Maybe<GraphCms_PageIndexCreateInput>;
  /** Connect one existing PageIndex document */
  connect?: Maybe<GraphCms_PageIndexWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_PageIndexEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_PageIndex;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_PageIndexManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PageIndexWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PageIndexWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PageIndexWhereInput>>;
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
  bannerImage_every?: Maybe<GraphCms_AssetWhereInput>;
  bannerImage_some?: Maybe<GraphCms_AssetWhereInput>;
  bannerImage_none?: Maybe<GraphCms_AssetWhereInput>;
  employeeEmployerSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  employeeEmployerSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  employeeEmployerSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
};

export type GraphCms_PageIndexOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'bannerTitle_ASC'
  | 'bannerTitle_DESC'
  | 'bannerSubTitle_ASC'
  | 'bannerSubTitle_DESC';

export type GraphCms_PageIndexUpdateInput = {
  /** bannerTitle input for default locale (en) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** bannerSubTitle input for default locale (en) */
  bannerSubTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateManyInlineInput>;
  employeeEmployerSections?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_PageIndexUpdateLocalizationsInput>;
};

export type GraphCms_PageIndexUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_PageIndexUpdateLocalizationInput = {
  data: GraphCms_PageIndexUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PageIndexUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_PageIndexCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_PageIndexUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_PageIndexUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_PageIndexUpdateManyInlineInput = {
  /** Create and connect multiple PageIndex documents */
  create?: Maybe<Array<GraphCms_PageIndexCreateInput>>;
  /** Connect multiple existing PageIndex documents */
  connect?: Maybe<Array<GraphCms_PageIndexConnectInput>>;
  /** Override currently-connected documents with multiple existing PageIndex documents */
  set?: Maybe<Array<GraphCms_PageIndexWhereUniqueInput>>;
  /** Update multiple PageIndex documents */
  update?: Maybe<Array<GraphCms_PageIndexUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageIndex documents */
  upsert?: Maybe<Array<GraphCms_PageIndexUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PageIndex documents */
  disconnect?: Maybe<Array<GraphCms_PageIndexWhereUniqueInput>>;
  /** Delete multiple PageIndex documents */
  delete?: Maybe<Array<GraphCms_PageIndexWhereUniqueInput>>;
};

export type GraphCms_PageIndexUpdateManyInput = {
  /** bannerTitle input for default locale (en) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** bannerSubTitle input for default locale (en) */
  bannerSubTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_PageIndexUpdateManyLocalizationsInput>;
};

export type GraphCms_PageIndexUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_PageIndexUpdateManyLocalizationInput = {
  data: GraphCms_PageIndexUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PageIndexUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_PageIndexUpdateManyLocalizationInput>>;
};

export type GraphCms_PageIndexUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_PageIndexWhereInput;
  /** Update many input */
  data: GraphCms_PageIndexUpdateManyInput;
};

export type GraphCms_PageIndexUpdateOneInlineInput = {
  /** Create and connect one PageIndex document */
  create?: Maybe<GraphCms_PageIndexCreateInput>;
  /** Update single PageIndex document */
  update?: Maybe<GraphCms_PageIndexUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageIndex document */
  upsert?: Maybe<GraphCms_PageIndexUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PageIndex document */
  connect?: Maybe<GraphCms_PageIndexWhereUniqueInput>;
  /** Disconnect currently connected PageIndex document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PageIndex document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_PageIndexUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_PageIndexWhereUniqueInput;
  /** Document to update */
  data: GraphCms_PageIndexUpdateInput;
};

export type GraphCms_PageIndexUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_PageIndexCreateInput;
  /** Update document if it exists */
  update: GraphCms_PageIndexUpdateInput;
};

export type GraphCms_PageIndexUpsertLocalizationInput = {
  update: GraphCms_PageIndexUpdateLocalizationDataInput;
  create: GraphCms_PageIndexCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_PageIndexUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_PageIndexWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_PageIndexUpsertInput;
};

/** Identifies documents */
export type GraphCms_PageIndexWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PageIndexWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PageIndexWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PageIndexWhereInput>>;
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
  bannerTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bannerTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bannerTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bannerTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bannerTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bannerTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bannerTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bannerTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bannerTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bannerTitle_not_ends_with?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bannerSubTitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bannerSubTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bannerSubTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  bannerSubTitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bannerSubTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bannerSubTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bannerSubTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bannerSubTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  bannerSubTitle_not_ends_with?: Maybe<Scalars['String']>;
  bannerImage_every?: Maybe<GraphCms_AssetWhereInput>;
  bannerImage_some?: Maybe<GraphCms_AssetWhereInput>;
  bannerImage_none?: Maybe<GraphCms_AssetWhereInput>;
  employeeEmployerSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  employeeEmployerSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  employeeEmployerSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
};

/** References PageIndex record uniquely */
export type GraphCms_PageIndexWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
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
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
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
  | 'port'
  | 'host'
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
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___headers___Authorization'
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
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
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
  | 'pluginOptions___fileName'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___headers___Authorization'
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
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
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
  fileName?: Maybe<Scalars['String']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
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
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
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

export type BannerQueryVariables = Exact<{ [key: string]: never; }>;


export type BannerQuery = { gcms: { pageIndices: Array<(
      Pick<GraphCms_PageIndex, 'bannerTitle' | 'bannerSubTitle'>
      & { bannerImage: Array<Pick<GraphCms_Asset, 'url'>> }
    )> } };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { gcms: { companyMedias: Array<{ logoFooter?: Maybe<Pick<GraphCms_Asset, 'url'>> }>, companyAddresses: Array<Pick<GraphCms_CompanyAddress, 'addressLine1' | 'addressLine2' | 'city' | 'provinceState' | 'postalCode' | 'country' | 'websiteUrl' | 'phone' | 'phoneNoFees' | 'email'>> } };

export type TopBarQueryVariables = Exact<{ [key: string]: never; }>;


export type TopBarQuery = { gcms: { companyMedias: Array<{ logo?: Maybe<Pick<GraphCms_Asset, 'url'>> }> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { gcms: { companyMedias: Array<{ logoFooter?: Maybe<Pick<GraphCms_Asset, 'url'>>, logo?: Maybe<Pick<GraphCms_Asset, 'url'>> }>, assets: Array<Pick<GraphCms_Asset, 'url'>>, pageIndices: Array<(
      Pick<GraphCms_PageIndex, 'id'>
      & { employeeEmployerSections: Array<(
        Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'>
        & { infoTiles: Array<Pick<GraphCms_InfoTile, 'icon' | 'title' | 'text'>>, childs: Array<Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>>, image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
      )> }
    )> } };
