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
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
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

export type GraphCms_Asset = Node & {
  localFile?: Maybe<File>;
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  blogPostBannerImage: Array<GraphCms_BlogPost>;
  imageFile: Array<GraphCms_Image>;
  url: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_AssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_AssetGroupConnection>;
};


export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetEdge = {
  next?: Maybe<GraphCms_Asset>;
  node: GraphCms_Asset;
  previous?: Maybe<GraphCms_Asset>;
};

export type GraphCms_AssetFieldsEnum = 
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
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'handle'
  | 'fileName'
  | 'height'
  | 'width'
  | 'size'
  | 'mimeType'
  | 'blogPostBannerImage'
  | 'blogPostBannerImage___remoteTypeName'
  | 'blogPostBannerImage___remoteId'
  | 'blogPostBannerImage___locale'
  | 'blogPostBannerImage___stage'
  | 'blogPostBannerImage___createdAt'
  | 'blogPostBannerImage___updatedAt'
  | 'blogPostBannerImage___publishedAt'
  | 'blogPostBannerImage___title'
  | 'blogPostBannerImage___content'
  | 'blogPostBannerImage___bannerImage___localFile___sourceInstanceName'
  | 'blogPostBannerImage___bannerImage___localFile___absolutePath'
  | 'blogPostBannerImage___bannerImage___localFile___relativePath'
  | 'blogPostBannerImage___bannerImage___localFile___extension'
  | 'blogPostBannerImage___bannerImage___localFile___size'
  | 'blogPostBannerImage___bannerImage___localFile___prettySize'
  | 'blogPostBannerImage___bannerImage___localFile___modifiedTime'
  | 'blogPostBannerImage___bannerImage___localFile___accessTime'
  | 'blogPostBannerImage___bannerImage___localFile___changeTime'
  | 'blogPostBannerImage___bannerImage___localFile___birthTime'
  | 'blogPostBannerImage___bannerImage___localFile___root'
  | 'blogPostBannerImage___bannerImage___localFile___dir'
  | 'blogPostBannerImage___bannerImage___localFile___base'
  | 'blogPostBannerImage___bannerImage___localFile___ext'
  | 'blogPostBannerImage___bannerImage___localFile___name'
  | 'blogPostBannerImage___bannerImage___localFile___relativeDirectory'
  | 'blogPostBannerImage___bannerImage___localFile___dev'
  | 'blogPostBannerImage___bannerImage___localFile___mode'
  | 'blogPostBannerImage___bannerImage___localFile___nlink'
  | 'blogPostBannerImage___bannerImage___localFile___uid'
  | 'blogPostBannerImage___bannerImage___localFile___gid'
  | 'blogPostBannerImage___bannerImage___localFile___rdev'
  | 'blogPostBannerImage___bannerImage___localFile___ino'
  | 'blogPostBannerImage___bannerImage___localFile___atimeMs'
  | 'blogPostBannerImage___bannerImage___localFile___mtimeMs'
  | 'blogPostBannerImage___bannerImage___localFile___ctimeMs'
  | 'blogPostBannerImage___bannerImage___localFile___atime'
  | 'blogPostBannerImage___bannerImage___localFile___mtime'
  | 'blogPostBannerImage___bannerImage___localFile___ctime'
  | 'blogPostBannerImage___bannerImage___localFile___birthtime'
  | 'blogPostBannerImage___bannerImage___localFile___birthtimeMs'
  | 'blogPostBannerImage___bannerImage___localFile___blksize'
  | 'blogPostBannerImage___bannerImage___localFile___blocks'
  | 'blogPostBannerImage___bannerImage___localFile___url'
  | 'blogPostBannerImage___bannerImage___localFile___publicURL'
  | 'blogPostBannerImage___bannerImage___localFile___id'
  | 'blogPostBannerImage___bannerImage___localFile___children'
  | 'blogPostBannerImage___bannerImage___remoteTypeName'
  | 'blogPostBannerImage___bannerImage___remoteId'
  | 'blogPostBannerImage___bannerImage___locale'
  | 'blogPostBannerImage___bannerImage___stage'
  | 'blogPostBannerImage___bannerImage___createdAt'
  | 'blogPostBannerImage___bannerImage___updatedAt'
  | 'blogPostBannerImage___bannerImage___publishedAt'
  | 'blogPostBannerImage___bannerImage___handle'
  | 'blogPostBannerImage___bannerImage___fileName'
  | 'blogPostBannerImage___bannerImage___height'
  | 'blogPostBannerImage___bannerImage___width'
  | 'blogPostBannerImage___bannerImage___size'
  | 'blogPostBannerImage___bannerImage___mimeType'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___remoteTypeName'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___remoteId'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___locale'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___stage'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___createdAt'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___updatedAt'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___publishedAt'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___title'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___content'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___id'
  | 'blogPostBannerImage___bannerImage___blogPostBannerImage___children'
  | 'blogPostBannerImage___bannerImage___imageFile'
  | 'blogPostBannerImage___bannerImage___imageFile___remoteTypeName'
  | 'blogPostBannerImage___bannerImage___imageFile___remoteId'
  | 'blogPostBannerImage___bannerImage___imageFile___locale'
  | 'blogPostBannerImage___bannerImage___imageFile___stage'
  | 'blogPostBannerImage___bannerImage___imageFile___createdAt'
  | 'blogPostBannerImage___bannerImage___imageFile___updatedAt'
  | 'blogPostBannerImage___bannerImage___imageFile___publishedAt'
  | 'blogPostBannerImage___bannerImage___imageFile___name'
  | 'blogPostBannerImage___bannerImage___imageFile___description'
  | 'blogPostBannerImage___bannerImage___imageFile___id'
  | 'blogPostBannerImage___bannerImage___imageFile___children'
  | 'blogPostBannerImage___bannerImage___url'
  | 'blogPostBannerImage___bannerImage___id'
  | 'blogPostBannerImage___bannerImage___parent___id'
  | 'blogPostBannerImage___bannerImage___parent___children'
  | 'blogPostBannerImage___bannerImage___children'
  | 'blogPostBannerImage___bannerImage___children___id'
  | 'blogPostBannerImage___bannerImage___children___children'
  | 'blogPostBannerImage___bannerImage___internal___content'
  | 'blogPostBannerImage___bannerImage___internal___contentDigest'
  | 'blogPostBannerImage___bannerImage___internal___description'
  | 'blogPostBannerImage___bannerImage___internal___fieldOwners'
  | 'blogPostBannerImage___bannerImage___internal___ignoreType'
  | 'blogPostBannerImage___bannerImage___internal___mediaType'
  | 'blogPostBannerImage___bannerImage___internal___owner'
  | 'blogPostBannerImage___bannerImage___internal___type'
  | 'blogPostBannerImage___contentRich___markdownNode___id'
  | 'blogPostBannerImage___contentRich___markdownNode___children'
  | 'blogPostBannerImage___contentRich___remoteTypeName'
  | 'blogPostBannerImage___contentRich___raw'
  | 'blogPostBannerImage___contentRich___html'
  | 'blogPostBannerImage___contentRich___markdown'
  | 'blogPostBannerImage___contentRich___text'
  | 'blogPostBannerImage___id'
  | 'blogPostBannerImage___parent___id'
  | 'blogPostBannerImage___parent___parent___id'
  | 'blogPostBannerImage___parent___parent___children'
  | 'blogPostBannerImage___parent___children'
  | 'blogPostBannerImage___parent___children___id'
  | 'blogPostBannerImage___parent___children___children'
  | 'blogPostBannerImage___parent___internal___content'
  | 'blogPostBannerImage___parent___internal___contentDigest'
  | 'blogPostBannerImage___parent___internal___description'
  | 'blogPostBannerImage___parent___internal___fieldOwners'
  | 'blogPostBannerImage___parent___internal___ignoreType'
  | 'blogPostBannerImage___parent___internal___mediaType'
  | 'blogPostBannerImage___parent___internal___owner'
  | 'blogPostBannerImage___parent___internal___type'
  | 'blogPostBannerImage___children'
  | 'blogPostBannerImage___children___id'
  | 'blogPostBannerImage___children___parent___id'
  | 'blogPostBannerImage___children___parent___children'
  | 'blogPostBannerImage___children___children'
  | 'blogPostBannerImage___children___children___id'
  | 'blogPostBannerImage___children___children___children'
  | 'blogPostBannerImage___children___internal___content'
  | 'blogPostBannerImage___children___internal___contentDigest'
  | 'blogPostBannerImage___children___internal___description'
  | 'blogPostBannerImage___children___internal___fieldOwners'
  | 'blogPostBannerImage___children___internal___ignoreType'
  | 'blogPostBannerImage___children___internal___mediaType'
  | 'blogPostBannerImage___children___internal___owner'
  | 'blogPostBannerImage___children___internal___type'
  | 'blogPostBannerImage___internal___content'
  | 'blogPostBannerImage___internal___contentDigest'
  | 'blogPostBannerImage___internal___description'
  | 'blogPostBannerImage___internal___fieldOwners'
  | 'blogPostBannerImage___internal___ignoreType'
  | 'blogPostBannerImage___internal___mediaType'
  | 'blogPostBannerImage___internal___owner'
  | 'blogPostBannerImage___internal___type'
  | 'imageFile'
  | 'imageFile___remoteTypeName'
  | 'imageFile___remoteId'
  | 'imageFile___locale'
  | 'imageFile___stage'
  | 'imageFile___createdAt'
  | 'imageFile___updatedAt'
  | 'imageFile___publishedAt'
  | 'imageFile___name'
  | 'imageFile___description'
  | 'imageFile___file___localFile___sourceInstanceName'
  | 'imageFile___file___localFile___absolutePath'
  | 'imageFile___file___localFile___relativePath'
  | 'imageFile___file___localFile___extension'
  | 'imageFile___file___localFile___size'
  | 'imageFile___file___localFile___prettySize'
  | 'imageFile___file___localFile___modifiedTime'
  | 'imageFile___file___localFile___accessTime'
  | 'imageFile___file___localFile___changeTime'
  | 'imageFile___file___localFile___birthTime'
  | 'imageFile___file___localFile___root'
  | 'imageFile___file___localFile___dir'
  | 'imageFile___file___localFile___base'
  | 'imageFile___file___localFile___ext'
  | 'imageFile___file___localFile___name'
  | 'imageFile___file___localFile___relativeDirectory'
  | 'imageFile___file___localFile___dev'
  | 'imageFile___file___localFile___mode'
  | 'imageFile___file___localFile___nlink'
  | 'imageFile___file___localFile___uid'
  | 'imageFile___file___localFile___gid'
  | 'imageFile___file___localFile___rdev'
  | 'imageFile___file___localFile___ino'
  | 'imageFile___file___localFile___atimeMs'
  | 'imageFile___file___localFile___mtimeMs'
  | 'imageFile___file___localFile___ctimeMs'
  | 'imageFile___file___localFile___atime'
  | 'imageFile___file___localFile___mtime'
  | 'imageFile___file___localFile___ctime'
  | 'imageFile___file___localFile___birthtime'
  | 'imageFile___file___localFile___birthtimeMs'
  | 'imageFile___file___localFile___blksize'
  | 'imageFile___file___localFile___blocks'
  | 'imageFile___file___localFile___url'
  | 'imageFile___file___localFile___publicURL'
  | 'imageFile___file___localFile___id'
  | 'imageFile___file___localFile___children'
  | 'imageFile___file___remoteTypeName'
  | 'imageFile___file___remoteId'
  | 'imageFile___file___locale'
  | 'imageFile___file___stage'
  | 'imageFile___file___createdAt'
  | 'imageFile___file___updatedAt'
  | 'imageFile___file___publishedAt'
  | 'imageFile___file___handle'
  | 'imageFile___file___fileName'
  | 'imageFile___file___height'
  | 'imageFile___file___width'
  | 'imageFile___file___size'
  | 'imageFile___file___mimeType'
  | 'imageFile___file___blogPostBannerImage'
  | 'imageFile___file___blogPostBannerImage___remoteTypeName'
  | 'imageFile___file___blogPostBannerImage___remoteId'
  | 'imageFile___file___blogPostBannerImage___locale'
  | 'imageFile___file___blogPostBannerImage___stage'
  | 'imageFile___file___blogPostBannerImage___createdAt'
  | 'imageFile___file___blogPostBannerImage___updatedAt'
  | 'imageFile___file___blogPostBannerImage___publishedAt'
  | 'imageFile___file___blogPostBannerImage___title'
  | 'imageFile___file___blogPostBannerImage___content'
  | 'imageFile___file___blogPostBannerImage___id'
  | 'imageFile___file___blogPostBannerImage___children'
  | 'imageFile___file___imageFile'
  | 'imageFile___file___imageFile___remoteTypeName'
  | 'imageFile___file___imageFile___remoteId'
  | 'imageFile___file___imageFile___locale'
  | 'imageFile___file___imageFile___stage'
  | 'imageFile___file___imageFile___createdAt'
  | 'imageFile___file___imageFile___updatedAt'
  | 'imageFile___file___imageFile___publishedAt'
  | 'imageFile___file___imageFile___name'
  | 'imageFile___file___imageFile___description'
  | 'imageFile___file___imageFile___id'
  | 'imageFile___file___imageFile___children'
  | 'imageFile___file___url'
  | 'imageFile___file___id'
  | 'imageFile___file___parent___id'
  | 'imageFile___file___parent___children'
  | 'imageFile___file___children'
  | 'imageFile___file___children___id'
  | 'imageFile___file___children___children'
  | 'imageFile___file___internal___content'
  | 'imageFile___file___internal___contentDigest'
  | 'imageFile___file___internal___description'
  | 'imageFile___file___internal___fieldOwners'
  | 'imageFile___file___internal___ignoreType'
  | 'imageFile___file___internal___mediaType'
  | 'imageFile___file___internal___owner'
  | 'imageFile___file___internal___type'
  | 'imageFile___id'
  | 'imageFile___parent___id'
  | 'imageFile___parent___parent___id'
  | 'imageFile___parent___parent___children'
  | 'imageFile___parent___children'
  | 'imageFile___parent___children___id'
  | 'imageFile___parent___children___children'
  | 'imageFile___parent___internal___content'
  | 'imageFile___parent___internal___contentDigest'
  | 'imageFile___parent___internal___description'
  | 'imageFile___parent___internal___fieldOwners'
  | 'imageFile___parent___internal___ignoreType'
  | 'imageFile___parent___internal___mediaType'
  | 'imageFile___parent___internal___owner'
  | 'imageFile___parent___internal___type'
  | 'imageFile___children'
  | 'imageFile___children___id'
  | 'imageFile___children___parent___id'
  | 'imageFile___children___parent___children'
  | 'imageFile___children___children'
  | 'imageFile___children___children___id'
  | 'imageFile___children___children___children'
  | 'imageFile___children___internal___content'
  | 'imageFile___children___internal___contentDigest'
  | 'imageFile___children___internal___description'
  | 'imageFile___children___internal___fieldOwners'
  | 'imageFile___children___internal___ignoreType'
  | 'imageFile___children___internal___mediaType'
  | 'imageFile___children___internal___owner'
  | 'imageFile___children___internal___type'
  | 'imageFile___internal___content'
  | 'imageFile___internal___contentDigest'
  | 'imageFile___internal___description'
  | 'imageFile___internal___fieldOwners'
  | 'imageFile___internal___ignoreType'
  | 'imageFile___internal___mediaType'
  | 'imageFile___internal___owner'
  | 'imageFile___internal___type'
  | 'url'
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

export type GraphCms_AssetFilterInput = {
  localFile?: Maybe<FileFilterInput>;
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  blogPostBannerImage?: Maybe<GraphCms_BlogPostFilterListInput>;
  imageFile?: Maybe<GraphCms_ImageFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_AssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_AssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_BlogPost = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_Asset>;
  contentRich?: Maybe<GraphCms_RichText>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_BlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_BlogPostEdge>;
  nodes: Array<GraphCms_BlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_BlogPostGroupConnection>;
};


export type GraphCms_BlogPostConnectionDistinctArgs = {
  field: GraphCms_BlogPostFieldsEnum;
};


export type GraphCms_BlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_BlogPostFieldsEnum;
};

export type GraphCms_BlogPostEdge = {
  next?: Maybe<GraphCms_BlogPost>;
  node: GraphCms_BlogPost;
  previous?: Maybe<GraphCms_BlogPost>;
};

export type GraphCms_BlogPostFieldsEnum = 
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'title'
  | 'content'
  | 'bannerImage___localFile___sourceInstanceName'
  | 'bannerImage___localFile___absolutePath'
  | 'bannerImage___localFile___relativePath'
  | 'bannerImage___localFile___extension'
  | 'bannerImage___localFile___size'
  | 'bannerImage___localFile___prettySize'
  | 'bannerImage___localFile___modifiedTime'
  | 'bannerImage___localFile___accessTime'
  | 'bannerImage___localFile___changeTime'
  | 'bannerImage___localFile___birthTime'
  | 'bannerImage___localFile___root'
  | 'bannerImage___localFile___dir'
  | 'bannerImage___localFile___base'
  | 'bannerImage___localFile___ext'
  | 'bannerImage___localFile___name'
  | 'bannerImage___localFile___relativeDirectory'
  | 'bannerImage___localFile___dev'
  | 'bannerImage___localFile___mode'
  | 'bannerImage___localFile___nlink'
  | 'bannerImage___localFile___uid'
  | 'bannerImage___localFile___gid'
  | 'bannerImage___localFile___rdev'
  | 'bannerImage___localFile___ino'
  | 'bannerImage___localFile___atimeMs'
  | 'bannerImage___localFile___mtimeMs'
  | 'bannerImage___localFile___ctimeMs'
  | 'bannerImage___localFile___atime'
  | 'bannerImage___localFile___mtime'
  | 'bannerImage___localFile___ctime'
  | 'bannerImage___localFile___birthtime'
  | 'bannerImage___localFile___birthtimeMs'
  | 'bannerImage___localFile___blksize'
  | 'bannerImage___localFile___blocks'
  | 'bannerImage___localFile___url'
  | 'bannerImage___localFile___publicURL'
  | 'bannerImage___localFile___childImageSharp___id'
  | 'bannerImage___localFile___childImageSharp___children'
  | 'bannerImage___localFile___id'
  | 'bannerImage___localFile___parent___id'
  | 'bannerImage___localFile___parent___children'
  | 'bannerImage___localFile___children'
  | 'bannerImage___localFile___children___id'
  | 'bannerImage___localFile___children___children'
  | 'bannerImage___localFile___internal___content'
  | 'bannerImage___localFile___internal___contentDigest'
  | 'bannerImage___localFile___internal___description'
  | 'bannerImage___localFile___internal___fieldOwners'
  | 'bannerImage___localFile___internal___ignoreType'
  | 'bannerImage___localFile___internal___mediaType'
  | 'bannerImage___localFile___internal___owner'
  | 'bannerImage___localFile___internal___type'
  | 'bannerImage___remoteTypeName'
  | 'bannerImage___remoteId'
  | 'bannerImage___locale'
  | 'bannerImage___stage'
  | 'bannerImage___createdAt'
  | 'bannerImage___updatedAt'
  | 'bannerImage___publishedAt'
  | 'bannerImage___handle'
  | 'bannerImage___fileName'
  | 'bannerImage___height'
  | 'bannerImage___width'
  | 'bannerImage___size'
  | 'bannerImage___mimeType'
  | 'bannerImage___blogPostBannerImage'
  | 'bannerImage___blogPostBannerImage___remoteTypeName'
  | 'bannerImage___blogPostBannerImage___remoteId'
  | 'bannerImage___blogPostBannerImage___locale'
  | 'bannerImage___blogPostBannerImage___stage'
  | 'bannerImage___blogPostBannerImage___createdAt'
  | 'bannerImage___blogPostBannerImage___updatedAt'
  | 'bannerImage___blogPostBannerImage___publishedAt'
  | 'bannerImage___blogPostBannerImage___title'
  | 'bannerImage___blogPostBannerImage___content'
  | 'bannerImage___blogPostBannerImage___bannerImage___remoteTypeName'
  | 'bannerImage___blogPostBannerImage___bannerImage___remoteId'
  | 'bannerImage___blogPostBannerImage___bannerImage___locale'
  | 'bannerImage___blogPostBannerImage___bannerImage___stage'
  | 'bannerImage___blogPostBannerImage___bannerImage___createdAt'
  | 'bannerImage___blogPostBannerImage___bannerImage___updatedAt'
  | 'bannerImage___blogPostBannerImage___bannerImage___publishedAt'
  | 'bannerImage___blogPostBannerImage___bannerImage___handle'
  | 'bannerImage___blogPostBannerImage___bannerImage___fileName'
  | 'bannerImage___blogPostBannerImage___bannerImage___height'
  | 'bannerImage___blogPostBannerImage___bannerImage___width'
  | 'bannerImage___blogPostBannerImage___bannerImage___size'
  | 'bannerImage___blogPostBannerImage___bannerImage___mimeType'
  | 'bannerImage___blogPostBannerImage___bannerImage___blogPostBannerImage'
  | 'bannerImage___blogPostBannerImage___bannerImage___imageFile'
  | 'bannerImage___blogPostBannerImage___bannerImage___url'
  | 'bannerImage___blogPostBannerImage___bannerImage___id'
  | 'bannerImage___blogPostBannerImage___bannerImage___children'
  | 'bannerImage___blogPostBannerImage___contentRich___remoteTypeName'
  | 'bannerImage___blogPostBannerImage___contentRich___raw'
  | 'bannerImage___blogPostBannerImage___contentRich___html'
  | 'bannerImage___blogPostBannerImage___contentRich___markdown'
  | 'bannerImage___blogPostBannerImage___contentRich___text'
  | 'bannerImage___blogPostBannerImage___id'
  | 'bannerImage___blogPostBannerImage___parent___id'
  | 'bannerImage___blogPostBannerImage___parent___children'
  | 'bannerImage___blogPostBannerImage___children'
  | 'bannerImage___blogPostBannerImage___children___id'
  | 'bannerImage___blogPostBannerImage___children___children'
  | 'bannerImage___blogPostBannerImage___internal___content'
  | 'bannerImage___blogPostBannerImage___internal___contentDigest'
  | 'bannerImage___blogPostBannerImage___internal___description'
  | 'bannerImage___blogPostBannerImage___internal___fieldOwners'
  | 'bannerImage___blogPostBannerImage___internal___ignoreType'
  | 'bannerImage___blogPostBannerImage___internal___mediaType'
  | 'bannerImage___blogPostBannerImage___internal___owner'
  | 'bannerImage___blogPostBannerImage___internal___type'
  | 'bannerImage___imageFile'
  | 'bannerImage___imageFile___remoteTypeName'
  | 'bannerImage___imageFile___remoteId'
  | 'bannerImage___imageFile___locale'
  | 'bannerImage___imageFile___stage'
  | 'bannerImage___imageFile___createdAt'
  | 'bannerImage___imageFile___updatedAt'
  | 'bannerImage___imageFile___publishedAt'
  | 'bannerImage___imageFile___name'
  | 'bannerImage___imageFile___description'
  | 'bannerImage___imageFile___file___remoteTypeName'
  | 'bannerImage___imageFile___file___remoteId'
  | 'bannerImage___imageFile___file___locale'
  | 'bannerImage___imageFile___file___stage'
  | 'bannerImage___imageFile___file___createdAt'
  | 'bannerImage___imageFile___file___updatedAt'
  | 'bannerImage___imageFile___file___publishedAt'
  | 'bannerImage___imageFile___file___handle'
  | 'bannerImage___imageFile___file___fileName'
  | 'bannerImage___imageFile___file___height'
  | 'bannerImage___imageFile___file___width'
  | 'bannerImage___imageFile___file___size'
  | 'bannerImage___imageFile___file___mimeType'
  | 'bannerImage___imageFile___file___blogPostBannerImage'
  | 'bannerImage___imageFile___file___imageFile'
  | 'bannerImage___imageFile___file___url'
  | 'bannerImage___imageFile___file___id'
  | 'bannerImage___imageFile___file___children'
  | 'bannerImage___imageFile___id'
  | 'bannerImage___imageFile___parent___id'
  | 'bannerImage___imageFile___parent___children'
  | 'bannerImage___imageFile___children'
  | 'bannerImage___imageFile___children___id'
  | 'bannerImage___imageFile___children___children'
  | 'bannerImage___imageFile___internal___content'
  | 'bannerImage___imageFile___internal___contentDigest'
  | 'bannerImage___imageFile___internal___description'
  | 'bannerImage___imageFile___internal___fieldOwners'
  | 'bannerImage___imageFile___internal___ignoreType'
  | 'bannerImage___imageFile___internal___mediaType'
  | 'bannerImage___imageFile___internal___owner'
  | 'bannerImage___imageFile___internal___type'
  | 'bannerImage___url'
  | 'bannerImage___id'
  | 'bannerImage___parent___id'
  | 'bannerImage___parent___parent___id'
  | 'bannerImage___parent___parent___children'
  | 'bannerImage___parent___children'
  | 'bannerImage___parent___children___id'
  | 'bannerImage___parent___children___children'
  | 'bannerImage___parent___internal___content'
  | 'bannerImage___parent___internal___contentDigest'
  | 'bannerImage___parent___internal___description'
  | 'bannerImage___parent___internal___fieldOwners'
  | 'bannerImage___parent___internal___ignoreType'
  | 'bannerImage___parent___internal___mediaType'
  | 'bannerImage___parent___internal___owner'
  | 'bannerImage___parent___internal___type'
  | 'bannerImage___children'
  | 'bannerImage___children___id'
  | 'bannerImage___children___parent___id'
  | 'bannerImage___children___parent___children'
  | 'bannerImage___children___children'
  | 'bannerImage___children___children___id'
  | 'bannerImage___children___children___children'
  | 'bannerImage___children___internal___content'
  | 'bannerImage___children___internal___contentDigest'
  | 'bannerImage___children___internal___description'
  | 'bannerImage___children___internal___fieldOwners'
  | 'bannerImage___children___internal___ignoreType'
  | 'bannerImage___children___internal___mediaType'
  | 'bannerImage___children___internal___owner'
  | 'bannerImage___children___internal___type'
  | 'bannerImage___internal___content'
  | 'bannerImage___internal___contentDigest'
  | 'bannerImage___internal___description'
  | 'bannerImage___internal___fieldOwners'
  | 'bannerImage___internal___ignoreType'
  | 'bannerImage___internal___mediaType'
  | 'bannerImage___internal___owner'
  | 'bannerImage___internal___type'
  | 'contentRich___markdownNode___id'
  | 'contentRich___markdownNode___parent___id'
  | 'contentRich___markdownNode___parent___children'
  | 'contentRich___markdownNode___children'
  | 'contentRich___markdownNode___children___id'
  | 'contentRich___markdownNode___children___children'
  | 'contentRich___markdownNode___internal___content'
  | 'contentRich___markdownNode___internal___contentDigest'
  | 'contentRich___markdownNode___internal___description'
  | 'contentRich___markdownNode___internal___fieldOwners'
  | 'contentRich___markdownNode___internal___ignoreType'
  | 'contentRich___markdownNode___internal___mediaType'
  | 'contentRich___markdownNode___internal___owner'
  | 'contentRich___markdownNode___internal___type'
  | 'contentRich___markdownNode___childMdx___rawBody'
  | 'contentRich___markdownNode___childMdx___fileAbsolutePath'
  | 'contentRich___markdownNode___childMdx___slug'
  | 'contentRich___markdownNode___childMdx___body'
  | 'contentRich___markdownNode___childMdx___excerpt'
  | 'contentRich___markdownNode___childMdx___headings'
  | 'contentRich___markdownNode___childMdx___html'
  | 'contentRich___markdownNode___childMdx___mdxAST'
  | 'contentRich___markdownNode___childMdx___tableOfContents'
  | 'contentRich___markdownNode___childMdx___timeToRead'
  | 'contentRich___markdownNode___childMdx___id'
  | 'contentRich___markdownNode___childMdx___children'
  | 'contentRich___remoteTypeName'
  | 'contentRich___raw'
  | 'contentRich___html'
  | 'contentRich___markdown'
  | 'contentRich___text'
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

export type GraphCms_BlogPostFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  bannerImage?: Maybe<GraphCms_AssetFilterInput>;
  contentRich?: Maybe<GraphCms_RichTextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_BlogPostFilterListInput = {
  elemMatch?: Maybe<GraphCms_BlogPostFilterInput>;
};

export type GraphCms_BlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_BlogPostEdge>;
  nodes: Array<GraphCms_BlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogPostSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_BlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_CompanyInfo = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_CompanyInfoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_CompanyInfoEdge>;
  nodes: Array<GraphCms_CompanyInfo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_CompanyInfoGroupConnection>;
};


export type GraphCms_CompanyInfoConnectionDistinctArgs = {
  field: GraphCms_CompanyInfoFieldsEnum;
};


export type GraphCms_CompanyInfoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_CompanyInfoFieldsEnum;
};

export type GraphCms_CompanyInfoEdge = {
  next?: Maybe<GraphCms_CompanyInfo>;
  node: GraphCms_CompanyInfo;
  previous?: Maybe<GraphCms_CompanyInfo>;
};

export type GraphCms_CompanyInfoFieldsEnum = 
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
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

export type GraphCms_CompanyInfoFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_CompanyInfoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_CompanyInfoEdge>;
  nodes: Array<GraphCms_CompanyInfo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_CompanyInfoSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_CompanyInfoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_FieldType = 
  | 'CHECKBOX'
  | 'MARKDOWN'
  | 'SWITCH'
  | 'TEXT'
  | 'TEXT_AREA';

export type GraphCms_FieldTypeQueryOperatorInput = {
  eq?: Maybe<GraphCms_FieldType>;
  ne?: Maybe<GraphCms_FieldType>;
  in?: Maybe<Array<Maybe<GraphCms_FieldType>>>;
  nin?: Maybe<Array<Maybe<GraphCms_FieldType>>>;
};

export type GraphCms_Form = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  remoteParent: Array<GraphCms_Form>;
  name?: Maybe<Scalars['String']>;
  childs: Array<GraphCms_Form>;
  formFields: Array<GraphCms_FormField>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_FormConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_FormEdge>;
  nodes: Array<GraphCms_Form>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_FormGroupConnection>;
};


export type GraphCms_FormConnectionDistinctArgs = {
  field: GraphCms_FormFieldsEnum;
};


export type GraphCms_FormConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_FormFieldsEnum;
};

export type GraphCms_FormEdge = {
  next?: Maybe<GraphCms_Form>;
  node: GraphCms_Form;
  previous?: Maybe<GraphCms_Form>;
};

export type GraphCms_FormField = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  type?: Maybe<GraphCms_FieldType>;
  name?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  validations: Array<GraphCms_FormFieldValidation>;
  form: Array<GraphCms_Form>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_FormFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_FormFieldEdge>;
  nodes: Array<GraphCms_FormField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_FormFieldGroupConnection>;
};


export type GraphCms_FormFieldConnectionDistinctArgs = {
  field: GraphCms_FormFieldFieldsEnum;
};


export type GraphCms_FormFieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_FormFieldFieldsEnum;
};

export type GraphCms_FormFieldEdge = {
  next?: Maybe<GraphCms_FormField>;
  node: GraphCms_FormField;
  previous?: Maybe<GraphCms_FormField>;
};

export type GraphCms_FormFieldFieldsEnum = 
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'type'
  | 'name'
  | 'placeholder'
  | 'validations'
  | 'validations___remoteTypeName'
  | 'validations___remoteId'
  | 'validations___locale'
  | 'validations___stage'
  | 'validations___createdAt'
  | 'validations___updatedAt'
  | 'validations___publishedAt'
  | 'validations___name'
  | 'validations___errorMessage'
  | 'validations___required'
  | 'validations___unique'
  | 'validations___matchPattern'
  | 'validations___pattern'
  | 'validations___formField'
  | 'validations___formField___remoteTypeName'
  | 'validations___formField___remoteId'
  | 'validations___formField___locale'
  | 'validations___formField___stage'
  | 'validations___formField___createdAt'
  | 'validations___formField___updatedAt'
  | 'validations___formField___publishedAt'
  | 'validations___formField___type'
  | 'validations___formField___name'
  | 'validations___formField___placeholder'
  | 'validations___formField___validations'
  | 'validations___formField___validations___remoteTypeName'
  | 'validations___formField___validations___remoteId'
  | 'validations___formField___validations___locale'
  | 'validations___formField___validations___stage'
  | 'validations___formField___validations___createdAt'
  | 'validations___formField___validations___updatedAt'
  | 'validations___formField___validations___publishedAt'
  | 'validations___formField___validations___name'
  | 'validations___formField___validations___errorMessage'
  | 'validations___formField___validations___required'
  | 'validations___formField___validations___unique'
  | 'validations___formField___validations___matchPattern'
  | 'validations___formField___validations___pattern'
  | 'validations___formField___validations___formField'
  | 'validations___formField___validations___id'
  | 'validations___formField___validations___children'
  | 'validations___formField___form'
  | 'validations___formField___form___remoteTypeName'
  | 'validations___formField___form___remoteId'
  | 'validations___formField___form___locale'
  | 'validations___formField___form___stage'
  | 'validations___formField___form___createdAt'
  | 'validations___formField___form___updatedAt'
  | 'validations___formField___form___publishedAt'
  | 'validations___formField___form___remoteParent'
  | 'validations___formField___form___name'
  | 'validations___formField___form___childs'
  | 'validations___formField___form___formFields'
  | 'validations___formField___form___id'
  | 'validations___formField___form___children'
  | 'validations___formField___id'
  | 'validations___formField___parent___id'
  | 'validations___formField___parent___children'
  | 'validations___formField___children'
  | 'validations___formField___children___id'
  | 'validations___formField___children___children'
  | 'validations___formField___internal___content'
  | 'validations___formField___internal___contentDigest'
  | 'validations___formField___internal___description'
  | 'validations___formField___internal___fieldOwners'
  | 'validations___formField___internal___ignoreType'
  | 'validations___formField___internal___mediaType'
  | 'validations___formField___internal___owner'
  | 'validations___formField___internal___type'
  | 'validations___id'
  | 'validations___parent___id'
  | 'validations___parent___parent___id'
  | 'validations___parent___parent___children'
  | 'validations___parent___children'
  | 'validations___parent___children___id'
  | 'validations___parent___children___children'
  | 'validations___parent___internal___content'
  | 'validations___parent___internal___contentDigest'
  | 'validations___parent___internal___description'
  | 'validations___parent___internal___fieldOwners'
  | 'validations___parent___internal___ignoreType'
  | 'validations___parent___internal___mediaType'
  | 'validations___parent___internal___owner'
  | 'validations___parent___internal___type'
  | 'validations___children'
  | 'validations___children___id'
  | 'validations___children___parent___id'
  | 'validations___children___parent___children'
  | 'validations___children___children'
  | 'validations___children___children___id'
  | 'validations___children___children___children'
  | 'validations___children___internal___content'
  | 'validations___children___internal___contentDigest'
  | 'validations___children___internal___description'
  | 'validations___children___internal___fieldOwners'
  | 'validations___children___internal___ignoreType'
  | 'validations___children___internal___mediaType'
  | 'validations___children___internal___owner'
  | 'validations___children___internal___type'
  | 'validations___internal___content'
  | 'validations___internal___contentDigest'
  | 'validations___internal___description'
  | 'validations___internal___fieldOwners'
  | 'validations___internal___ignoreType'
  | 'validations___internal___mediaType'
  | 'validations___internal___owner'
  | 'validations___internal___type'
  | 'form'
  | 'form___remoteTypeName'
  | 'form___remoteId'
  | 'form___locale'
  | 'form___stage'
  | 'form___createdAt'
  | 'form___updatedAt'
  | 'form___publishedAt'
  | 'form___remoteParent'
  | 'form___remoteParent___remoteTypeName'
  | 'form___remoteParent___remoteId'
  | 'form___remoteParent___locale'
  | 'form___remoteParent___stage'
  | 'form___remoteParent___createdAt'
  | 'form___remoteParent___updatedAt'
  | 'form___remoteParent___publishedAt'
  | 'form___remoteParent___remoteParent'
  | 'form___remoteParent___remoteParent___remoteTypeName'
  | 'form___remoteParent___remoteParent___remoteId'
  | 'form___remoteParent___remoteParent___locale'
  | 'form___remoteParent___remoteParent___stage'
  | 'form___remoteParent___remoteParent___createdAt'
  | 'form___remoteParent___remoteParent___updatedAt'
  | 'form___remoteParent___remoteParent___publishedAt'
  | 'form___remoteParent___remoteParent___remoteParent'
  | 'form___remoteParent___remoteParent___name'
  | 'form___remoteParent___remoteParent___childs'
  | 'form___remoteParent___remoteParent___formFields'
  | 'form___remoteParent___remoteParent___id'
  | 'form___remoteParent___remoteParent___children'
  | 'form___remoteParent___name'
  | 'form___remoteParent___childs'
  | 'form___remoteParent___childs___remoteTypeName'
  | 'form___remoteParent___childs___remoteId'
  | 'form___remoteParent___childs___locale'
  | 'form___remoteParent___childs___stage'
  | 'form___remoteParent___childs___createdAt'
  | 'form___remoteParent___childs___updatedAt'
  | 'form___remoteParent___childs___publishedAt'
  | 'form___remoteParent___childs___remoteParent'
  | 'form___remoteParent___childs___name'
  | 'form___remoteParent___childs___childs'
  | 'form___remoteParent___childs___formFields'
  | 'form___remoteParent___childs___id'
  | 'form___remoteParent___childs___children'
  | 'form___remoteParent___formFields'
  | 'form___remoteParent___formFields___remoteTypeName'
  | 'form___remoteParent___formFields___remoteId'
  | 'form___remoteParent___formFields___locale'
  | 'form___remoteParent___formFields___stage'
  | 'form___remoteParent___formFields___createdAt'
  | 'form___remoteParent___formFields___updatedAt'
  | 'form___remoteParent___formFields___publishedAt'
  | 'form___remoteParent___formFields___type'
  | 'form___remoteParent___formFields___name'
  | 'form___remoteParent___formFields___placeholder'
  | 'form___remoteParent___formFields___validations'
  | 'form___remoteParent___formFields___form'
  | 'form___remoteParent___formFields___id'
  | 'form___remoteParent___formFields___children'
  | 'form___remoteParent___id'
  | 'form___remoteParent___parent___id'
  | 'form___remoteParent___parent___children'
  | 'form___remoteParent___children'
  | 'form___remoteParent___children___id'
  | 'form___remoteParent___children___children'
  | 'form___remoteParent___internal___content'
  | 'form___remoteParent___internal___contentDigest'
  | 'form___remoteParent___internal___description'
  | 'form___remoteParent___internal___fieldOwners'
  | 'form___remoteParent___internal___ignoreType'
  | 'form___remoteParent___internal___mediaType'
  | 'form___remoteParent___internal___owner'
  | 'form___remoteParent___internal___type'
  | 'form___name'
  | 'form___childs'
  | 'form___childs___remoteTypeName'
  | 'form___childs___remoteId'
  | 'form___childs___locale'
  | 'form___childs___stage'
  | 'form___childs___createdAt'
  | 'form___childs___updatedAt'
  | 'form___childs___publishedAt'
  | 'form___childs___remoteParent'
  | 'form___childs___remoteParent___remoteTypeName'
  | 'form___childs___remoteParent___remoteId'
  | 'form___childs___remoteParent___locale'
  | 'form___childs___remoteParent___stage'
  | 'form___childs___remoteParent___createdAt'
  | 'form___childs___remoteParent___updatedAt'
  | 'form___childs___remoteParent___publishedAt'
  | 'form___childs___remoteParent___remoteParent'
  | 'form___childs___remoteParent___name'
  | 'form___childs___remoteParent___childs'
  | 'form___childs___remoteParent___formFields'
  | 'form___childs___remoteParent___id'
  | 'form___childs___remoteParent___children'
  | 'form___childs___name'
  | 'form___childs___childs'
  | 'form___childs___childs___remoteTypeName'
  | 'form___childs___childs___remoteId'
  | 'form___childs___childs___locale'
  | 'form___childs___childs___stage'
  | 'form___childs___childs___createdAt'
  | 'form___childs___childs___updatedAt'
  | 'form___childs___childs___publishedAt'
  | 'form___childs___childs___remoteParent'
  | 'form___childs___childs___name'
  | 'form___childs___childs___childs'
  | 'form___childs___childs___formFields'
  | 'form___childs___childs___id'
  | 'form___childs___childs___children'
  | 'form___childs___formFields'
  | 'form___childs___formFields___remoteTypeName'
  | 'form___childs___formFields___remoteId'
  | 'form___childs___formFields___locale'
  | 'form___childs___formFields___stage'
  | 'form___childs___formFields___createdAt'
  | 'form___childs___formFields___updatedAt'
  | 'form___childs___formFields___publishedAt'
  | 'form___childs___formFields___type'
  | 'form___childs___formFields___name'
  | 'form___childs___formFields___placeholder'
  | 'form___childs___formFields___validations'
  | 'form___childs___formFields___form'
  | 'form___childs___formFields___id'
  | 'form___childs___formFields___children'
  | 'form___childs___id'
  | 'form___childs___parent___id'
  | 'form___childs___parent___children'
  | 'form___childs___children'
  | 'form___childs___children___id'
  | 'form___childs___children___children'
  | 'form___childs___internal___content'
  | 'form___childs___internal___contentDigest'
  | 'form___childs___internal___description'
  | 'form___childs___internal___fieldOwners'
  | 'form___childs___internal___ignoreType'
  | 'form___childs___internal___mediaType'
  | 'form___childs___internal___owner'
  | 'form___childs___internal___type'
  | 'form___formFields'
  | 'form___formFields___remoteTypeName'
  | 'form___formFields___remoteId'
  | 'form___formFields___locale'
  | 'form___formFields___stage'
  | 'form___formFields___createdAt'
  | 'form___formFields___updatedAt'
  | 'form___formFields___publishedAt'
  | 'form___formFields___type'
  | 'form___formFields___name'
  | 'form___formFields___placeholder'
  | 'form___formFields___validations'
  | 'form___formFields___validations___remoteTypeName'
  | 'form___formFields___validations___remoteId'
  | 'form___formFields___validations___locale'
  | 'form___formFields___validations___stage'
  | 'form___formFields___validations___createdAt'
  | 'form___formFields___validations___updatedAt'
  | 'form___formFields___validations___publishedAt'
  | 'form___formFields___validations___name'
  | 'form___formFields___validations___errorMessage'
  | 'form___formFields___validations___required'
  | 'form___formFields___validations___unique'
  | 'form___formFields___validations___matchPattern'
  | 'form___formFields___validations___pattern'
  | 'form___formFields___validations___formField'
  | 'form___formFields___validations___id'
  | 'form___formFields___validations___children'
  | 'form___formFields___form'
  | 'form___formFields___form___remoteTypeName'
  | 'form___formFields___form___remoteId'
  | 'form___formFields___form___locale'
  | 'form___formFields___form___stage'
  | 'form___formFields___form___createdAt'
  | 'form___formFields___form___updatedAt'
  | 'form___formFields___form___publishedAt'
  | 'form___formFields___form___remoteParent'
  | 'form___formFields___form___name'
  | 'form___formFields___form___childs'
  | 'form___formFields___form___formFields'
  | 'form___formFields___form___id'
  | 'form___formFields___form___children'
  | 'form___formFields___id'
  | 'form___formFields___parent___id'
  | 'form___formFields___parent___children'
  | 'form___formFields___children'
  | 'form___formFields___children___id'
  | 'form___formFields___children___children'
  | 'form___formFields___internal___content'
  | 'form___formFields___internal___contentDigest'
  | 'form___formFields___internal___description'
  | 'form___formFields___internal___fieldOwners'
  | 'form___formFields___internal___ignoreType'
  | 'form___formFields___internal___mediaType'
  | 'form___formFields___internal___owner'
  | 'form___formFields___internal___type'
  | 'form___id'
  | 'form___parent___id'
  | 'form___parent___parent___id'
  | 'form___parent___parent___children'
  | 'form___parent___children'
  | 'form___parent___children___id'
  | 'form___parent___children___children'
  | 'form___parent___internal___content'
  | 'form___parent___internal___contentDigest'
  | 'form___parent___internal___description'
  | 'form___parent___internal___fieldOwners'
  | 'form___parent___internal___ignoreType'
  | 'form___parent___internal___mediaType'
  | 'form___parent___internal___owner'
  | 'form___parent___internal___type'
  | 'form___children'
  | 'form___children___id'
  | 'form___children___parent___id'
  | 'form___children___parent___children'
  | 'form___children___children'
  | 'form___children___children___id'
  | 'form___children___children___children'
  | 'form___children___internal___content'
  | 'form___children___internal___contentDigest'
  | 'form___children___internal___description'
  | 'form___children___internal___fieldOwners'
  | 'form___children___internal___ignoreType'
  | 'form___children___internal___mediaType'
  | 'form___children___internal___owner'
  | 'form___children___internal___type'
  | 'form___internal___content'
  | 'form___internal___contentDigest'
  | 'form___internal___description'
  | 'form___internal___fieldOwners'
  | 'form___internal___ignoreType'
  | 'form___internal___mediaType'
  | 'form___internal___owner'
  | 'form___internal___type'
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

export type GraphCms_FormFieldFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  type?: Maybe<GraphCms_FieldTypeQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
  validations?: Maybe<GraphCms_FormFieldValidationFilterListInput>;
  form?: Maybe<GraphCms_FormFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_FormFieldFilterListInput = {
  elemMatch?: Maybe<GraphCms_FormFieldFilterInput>;
};

export type GraphCms_FormFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_FormFieldEdge>;
  nodes: Array<GraphCms_FormField>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_FormFieldsEnum = 
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'remoteParent'
  | 'remoteParent___remoteTypeName'
  | 'remoteParent___remoteId'
  | 'remoteParent___locale'
  | 'remoteParent___stage'
  | 'remoteParent___createdAt'
  | 'remoteParent___updatedAt'
  | 'remoteParent___publishedAt'
  | 'remoteParent___remoteParent'
  | 'remoteParent___remoteParent___remoteTypeName'
  | 'remoteParent___remoteParent___remoteId'
  | 'remoteParent___remoteParent___locale'
  | 'remoteParent___remoteParent___stage'
  | 'remoteParent___remoteParent___createdAt'
  | 'remoteParent___remoteParent___updatedAt'
  | 'remoteParent___remoteParent___publishedAt'
  | 'remoteParent___remoteParent___remoteParent'
  | 'remoteParent___remoteParent___remoteParent___remoteTypeName'
  | 'remoteParent___remoteParent___remoteParent___remoteId'
  | 'remoteParent___remoteParent___remoteParent___locale'
  | 'remoteParent___remoteParent___remoteParent___stage'
  | 'remoteParent___remoteParent___remoteParent___createdAt'
  | 'remoteParent___remoteParent___remoteParent___updatedAt'
  | 'remoteParent___remoteParent___remoteParent___publishedAt'
  | 'remoteParent___remoteParent___remoteParent___remoteParent'
  | 'remoteParent___remoteParent___remoteParent___name'
  | 'remoteParent___remoteParent___remoteParent___childs'
  | 'remoteParent___remoteParent___remoteParent___formFields'
  | 'remoteParent___remoteParent___remoteParent___id'
  | 'remoteParent___remoteParent___remoteParent___children'
  | 'remoteParent___remoteParent___name'
  | 'remoteParent___remoteParent___childs'
  | 'remoteParent___remoteParent___childs___remoteTypeName'
  | 'remoteParent___remoteParent___childs___remoteId'
  | 'remoteParent___remoteParent___childs___locale'
  | 'remoteParent___remoteParent___childs___stage'
  | 'remoteParent___remoteParent___childs___createdAt'
  | 'remoteParent___remoteParent___childs___updatedAt'
  | 'remoteParent___remoteParent___childs___publishedAt'
  | 'remoteParent___remoteParent___childs___remoteParent'
  | 'remoteParent___remoteParent___childs___name'
  | 'remoteParent___remoteParent___childs___childs'
  | 'remoteParent___remoteParent___childs___formFields'
  | 'remoteParent___remoteParent___childs___id'
  | 'remoteParent___remoteParent___childs___children'
  | 'remoteParent___remoteParent___formFields'
  | 'remoteParent___remoteParent___formFields___remoteTypeName'
  | 'remoteParent___remoteParent___formFields___remoteId'
  | 'remoteParent___remoteParent___formFields___locale'
  | 'remoteParent___remoteParent___formFields___stage'
  | 'remoteParent___remoteParent___formFields___createdAt'
  | 'remoteParent___remoteParent___formFields___updatedAt'
  | 'remoteParent___remoteParent___formFields___publishedAt'
  | 'remoteParent___remoteParent___formFields___type'
  | 'remoteParent___remoteParent___formFields___name'
  | 'remoteParent___remoteParent___formFields___placeholder'
  | 'remoteParent___remoteParent___formFields___validations'
  | 'remoteParent___remoteParent___formFields___form'
  | 'remoteParent___remoteParent___formFields___id'
  | 'remoteParent___remoteParent___formFields___children'
  | 'remoteParent___remoteParent___id'
  | 'remoteParent___remoteParent___parent___id'
  | 'remoteParent___remoteParent___parent___children'
  | 'remoteParent___remoteParent___children'
  | 'remoteParent___remoteParent___children___id'
  | 'remoteParent___remoteParent___children___children'
  | 'remoteParent___remoteParent___internal___content'
  | 'remoteParent___remoteParent___internal___contentDigest'
  | 'remoteParent___remoteParent___internal___description'
  | 'remoteParent___remoteParent___internal___fieldOwners'
  | 'remoteParent___remoteParent___internal___ignoreType'
  | 'remoteParent___remoteParent___internal___mediaType'
  | 'remoteParent___remoteParent___internal___owner'
  | 'remoteParent___remoteParent___internal___type'
  | 'remoteParent___name'
  | 'remoteParent___childs'
  | 'remoteParent___childs___remoteTypeName'
  | 'remoteParent___childs___remoteId'
  | 'remoteParent___childs___locale'
  | 'remoteParent___childs___stage'
  | 'remoteParent___childs___createdAt'
  | 'remoteParent___childs___updatedAt'
  | 'remoteParent___childs___publishedAt'
  | 'remoteParent___childs___remoteParent'
  | 'remoteParent___childs___remoteParent___remoteTypeName'
  | 'remoteParent___childs___remoteParent___remoteId'
  | 'remoteParent___childs___remoteParent___locale'
  | 'remoteParent___childs___remoteParent___stage'
  | 'remoteParent___childs___remoteParent___createdAt'
  | 'remoteParent___childs___remoteParent___updatedAt'
  | 'remoteParent___childs___remoteParent___publishedAt'
  | 'remoteParent___childs___remoteParent___remoteParent'
  | 'remoteParent___childs___remoteParent___name'
  | 'remoteParent___childs___remoteParent___childs'
  | 'remoteParent___childs___remoteParent___formFields'
  | 'remoteParent___childs___remoteParent___id'
  | 'remoteParent___childs___remoteParent___children'
  | 'remoteParent___childs___name'
  | 'remoteParent___childs___childs'
  | 'remoteParent___childs___childs___remoteTypeName'
  | 'remoteParent___childs___childs___remoteId'
  | 'remoteParent___childs___childs___locale'
  | 'remoteParent___childs___childs___stage'
  | 'remoteParent___childs___childs___createdAt'
  | 'remoteParent___childs___childs___updatedAt'
  | 'remoteParent___childs___childs___publishedAt'
  | 'remoteParent___childs___childs___remoteParent'
  | 'remoteParent___childs___childs___name'
  | 'remoteParent___childs___childs___childs'
  | 'remoteParent___childs___childs___formFields'
  | 'remoteParent___childs___childs___id'
  | 'remoteParent___childs___childs___children'
  | 'remoteParent___childs___formFields'
  | 'remoteParent___childs___formFields___remoteTypeName'
  | 'remoteParent___childs___formFields___remoteId'
  | 'remoteParent___childs___formFields___locale'
  | 'remoteParent___childs___formFields___stage'
  | 'remoteParent___childs___formFields___createdAt'
  | 'remoteParent___childs___formFields___updatedAt'
  | 'remoteParent___childs___formFields___publishedAt'
  | 'remoteParent___childs___formFields___type'
  | 'remoteParent___childs___formFields___name'
  | 'remoteParent___childs___formFields___placeholder'
  | 'remoteParent___childs___formFields___validations'
  | 'remoteParent___childs___formFields___form'
  | 'remoteParent___childs___formFields___id'
  | 'remoteParent___childs___formFields___children'
  | 'remoteParent___childs___id'
  | 'remoteParent___childs___parent___id'
  | 'remoteParent___childs___parent___children'
  | 'remoteParent___childs___children'
  | 'remoteParent___childs___children___id'
  | 'remoteParent___childs___children___children'
  | 'remoteParent___childs___internal___content'
  | 'remoteParent___childs___internal___contentDigest'
  | 'remoteParent___childs___internal___description'
  | 'remoteParent___childs___internal___fieldOwners'
  | 'remoteParent___childs___internal___ignoreType'
  | 'remoteParent___childs___internal___mediaType'
  | 'remoteParent___childs___internal___owner'
  | 'remoteParent___childs___internal___type'
  | 'remoteParent___formFields'
  | 'remoteParent___formFields___remoteTypeName'
  | 'remoteParent___formFields___remoteId'
  | 'remoteParent___formFields___locale'
  | 'remoteParent___formFields___stage'
  | 'remoteParent___formFields___createdAt'
  | 'remoteParent___formFields___updatedAt'
  | 'remoteParent___formFields___publishedAt'
  | 'remoteParent___formFields___type'
  | 'remoteParent___formFields___name'
  | 'remoteParent___formFields___placeholder'
  | 'remoteParent___formFields___validations'
  | 'remoteParent___formFields___validations___remoteTypeName'
  | 'remoteParent___formFields___validations___remoteId'
  | 'remoteParent___formFields___validations___locale'
  | 'remoteParent___formFields___validations___stage'
  | 'remoteParent___formFields___validations___createdAt'
  | 'remoteParent___formFields___validations___updatedAt'
  | 'remoteParent___formFields___validations___publishedAt'
  | 'remoteParent___formFields___validations___name'
  | 'remoteParent___formFields___validations___errorMessage'
  | 'remoteParent___formFields___validations___required'
  | 'remoteParent___formFields___validations___unique'
  | 'remoteParent___formFields___validations___matchPattern'
  | 'remoteParent___formFields___validations___pattern'
  | 'remoteParent___formFields___validations___formField'
  | 'remoteParent___formFields___validations___id'
  | 'remoteParent___formFields___validations___children'
  | 'remoteParent___formFields___form'
  | 'remoteParent___formFields___form___remoteTypeName'
  | 'remoteParent___formFields___form___remoteId'
  | 'remoteParent___formFields___form___locale'
  | 'remoteParent___formFields___form___stage'
  | 'remoteParent___formFields___form___createdAt'
  | 'remoteParent___formFields___form___updatedAt'
  | 'remoteParent___formFields___form___publishedAt'
  | 'remoteParent___formFields___form___remoteParent'
  | 'remoteParent___formFields___form___name'
  | 'remoteParent___formFields___form___childs'
  | 'remoteParent___formFields___form___formFields'
  | 'remoteParent___formFields___form___id'
  | 'remoteParent___formFields___form___children'
  | 'remoteParent___formFields___id'
  | 'remoteParent___formFields___parent___id'
  | 'remoteParent___formFields___parent___children'
  | 'remoteParent___formFields___children'
  | 'remoteParent___formFields___children___id'
  | 'remoteParent___formFields___children___children'
  | 'remoteParent___formFields___internal___content'
  | 'remoteParent___formFields___internal___contentDigest'
  | 'remoteParent___formFields___internal___description'
  | 'remoteParent___formFields___internal___fieldOwners'
  | 'remoteParent___formFields___internal___ignoreType'
  | 'remoteParent___formFields___internal___mediaType'
  | 'remoteParent___formFields___internal___owner'
  | 'remoteParent___formFields___internal___type'
  | 'remoteParent___id'
  | 'remoteParent___parent___id'
  | 'remoteParent___parent___parent___id'
  | 'remoteParent___parent___parent___children'
  | 'remoteParent___parent___children'
  | 'remoteParent___parent___children___id'
  | 'remoteParent___parent___children___children'
  | 'remoteParent___parent___internal___content'
  | 'remoteParent___parent___internal___contentDigest'
  | 'remoteParent___parent___internal___description'
  | 'remoteParent___parent___internal___fieldOwners'
  | 'remoteParent___parent___internal___ignoreType'
  | 'remoteParent___parent___internal___mediaType'
  | 'remoteParent___parent___internal___owner'
  | 'remoteParent___parent___internal___type'
  | 'remoteParent___children'
  | 'remoteParent___children___id'
  | 'remoteParent___children___parent___id'
  | 'remoteParent___children___parent___children'
  | 'remoteParent___children___children'
  | 'remoteParent___children___children___id'
  | 'remoteParent___children___children___children'
  | 'remoteParent___children___internal___content'
  | 'remoteParent___children___internal___contentDigest'
  | 'remoteParent___children___internal___description'
  | 'remoteParent___children___internal___fieldOwners'
  | 'remoteParent___children___internal___ignoreType'
  | 'remoteParent___children___internal___mediaType'
  | 'remoteParent___children___internal___owner'
  | 'remoteParent___children___internal___type'
  | 'remoteParent___internal___content'
  | 'remoteParent___internal___contentDigest'
  | 'remoteParent___internal___description'
  | 'remoteParent___internal___fieldOwners'
  | 'remoteParent___internal___ignoreType'
  | 'remoteParent___internal___mediaType'
  | 'remoteParent___internal___owner'
  | 'remoteParent___internal___type'
  | 'name'
  | 'childs'
  | 'childs___remoteTypeName'
  | 'childs___remoteId'
  | 'childs___locale'
  | 'childs___stage'
  | 'childs___createdAt'
  | 'childs___updatedAt'
  | 'childs___publishedAt'
  | 'childs___remoteParent'
  | 'childs___remoteParent___remoteTypeName'
  | 'childs___remoteParent___remoteId'
  | 'childs___remoteParent___locale'
  | 'childs___remoteParent___stage'
  | 'childs___remoteParent___createdAt'
  | 'childs___remoteParent___updatedAt'
  | 'childs___remoteParent___publishedAt'
  | 'childs___remoteParent___remoteParent'
  | 'childs___remoteParent___remoteParent___remoteTypeName'
  | 'childs___remoteParent___remoteParent___remoteId'
  | 'childs___remoteParent___remoteParent___locale'
  | 'childs___remoteParent___remoteParent___stage'
  | 'childs___remoteParent___remoteParent___createdAt'
  | 'childs___remoteParent___remoteParent___updatedAt'
  | 'childs___remoteParent___remoteParent___publishedAt'
  | 'childs___remoteParent___remoteParent___remoteParent'
  | 'childs___remoteParent___remoteParent___name'
  | 'childs___remoteParent___remoteParent___childs'
  | 'childs___remoteParent___remoteParent___formFields'
  | 'childs___remoteParent___remoteParent___id'
  | 'childs___remoteParent___remoteParent___children'
  | 'childs___remoteParent___name'
  | 'childs___remoteParent___childs'
  | 'childs___remoteParent___childs___remoteTypeName'
  | 'childs___remoteParent___childs___remoteId'
  | 'childs___remoteParent___childs___locale'
  | 'childs___remoteParent___childs___stage'
  | 'childs___remoteParent___childs___createdAt'
  | 'childs___remoteParent___childs___updatedAt'
  | 'childs___remoteParent___childs___publishedAt'
  | 'childs___remoteParent___childs___remoteParent'
  | 'childs___remoteParent___childs___name'
  | 'childs___remoteParent___childs___childs'
  | 'childs___remoteParent___childs___formFields'
  | 'childs___remoteParent___childs___id'
  | 'childs___remoteParent___childs___children'
  | 'childs___remoteParent___formFields'
  | 'childs___remoteParent___formFields___remoteTypeName'
  | 'childs___remoteParent___formFields___remoteId'
  | 'childs___remoteParent___formFields___locale'
  | 'childs___remoteParent___formFields___stage'
  | 'childs___remoteParent___formFields___createdAt'
  | 'childs___remoteParent___formFields___updatedAt'
  | 'childs___remoteParent___formFields___publishedAt'
  | 'childs___remoteParent___formFields___type'
  | 'childs___remoteParent___formFields___name'
  | 'childs___remoteParent___formFields___placeholder'
  | 'childs___remoteParent___formFields___validations'
  | 'childs___remoteParent___formFields___form'
  | 'childs___remoteParent___formFields___id'
  | 'childs___remoteParent___formFields___children'
  | 'childs___remoteParent___id'
  | 'childs___remoteParent___parent___id'
  | 'childs___remoteParent___parent___children'
  | 'childs___remoteParent___children'
  | 'childs___remoteParent___children___id'
  | 'childs___remoteParent___children___children'
  | 'childs___remoteParent___internal___content'
  | 'childs___remoteParent___internal___contentDigest'
  | 'childs___remoteParent___internal___description'
  | 'childs___remoteParent___internal___fieldOwners'
  | 'childs___remoteParent___internal___ignoreType'
  | 'childs___remoteParent___internal___mediaType'
  | 'childs___remoteParent___internal___owner'
  | 'childs___remoteParent___internal___type'
  | 'childs___name'
  | 'childs___childs'
  | 'childs___childs___remoteTypeName'
  | 'childs___childs___remoteId'
  | 'childs___childs___locale'
  | 'childs___childs___stage'
  | 'childs___childs___createdAt'
  | 'childs___childs___updatedAt'
  | 'childs___childs___publishedAt'
  | 'childs___childs___remoteParent'
  | 'childs___childs___remoteParent___remoteTypeName'
  | 'childs___childs___remoteParent___remoteId'
  | 'childs___childs___remoteParent___locale'
  | 'childs___childs___remoteParent___stage'
  | 'childs___childs___remoteParent___createdAt'
  | 'childs___childs___remoteParent___updatedAt'
  | 'childs___childs___remoteParent___publishedAt'
  | 'childs___childs___remoteParent___remoteParent'
  | 'childs___childs___remoteParent___name'
  | 'childs___childs___remoteParent___childs'
  | 'childs___childs___remoteParent___formFields'
  | 'childs___childs___remoteParent___id'
  | 'childs___childs___remoteParent___children'
  | 'childs___childs___name'
  | 'childs___childs___childs'
  | 'childs___childs___childs___remoteTypeName'
  | 'childs___childs___childs___remoteId'
  | 'childs___childs___childs___locale'
  | 'childs___childs___childs___stage'
  | 'childs___childs___childs___createdAt'
  | 'childs___childs___childs___updatedAt'
  | 'childs___childs___childs___publishedAt'
  | 'childs___childs___childs___remoteParent'
  | 'childs___childs___childs___name'
  | 'childs___childs___childs___childs'
  | 'childs___childs___childs___formFields'
  | 'childs___childs___childs___id'
  | 'childs___childs___childs___children'
  | 'childs___childs___formFields'
  | 'childs___childs___formFields___remoteTypeName'
  | 'childs___childs___formFields___remoteId'
  | 'childs___childs___formFields___locale'
  | 'childs___childs___formFields___stage'
  | 'childs___childs___formFields___createdAt'
  | 'childs___childs___formFields___updatedAt'
  | 'childs___childs___formFields___publishedAt'
  | 'childs___childs___formFields___type'
  | 'childs___childs___formFields___name'
  | 'childs___childs___formFields___placeholder'
  | 'childs___childs___formFields___validations'
  | 'childs___childs___formFields___form'
  | 'childs___childs___formFields___id'
  | 'childs___childs___formFields___children'
  | 'childs___childs___id'
  | 'childs___childs___parent___id'
  | 'childs___childs___parent___children'
  | 'childs___childs___children'
  | 'childs___childs___children___id'
  | 'childs___childs___children___children'
  | 'childs___childs___internal___content'
  | 'childs___childs___internal___contentDigest'
  | 'childs___childs___internal___description'
  | 'childs___childs___internal___fieldOwners'
  | 'childs___childs___internal___ignoreType'
  | 'childs___childs___internal___mediaType'
  | 'childs___childs___internal___owner'
  | 'childs___childs___internal___type'
  | 'childs___formFields'
  | 'childs___formFields___remoteTypeName'
  | 'childs___formFields___remoteId'
  | 'childs___formFields___locale'
  | 'childs___formFields___stage'
  | 'childs___formFields___createdAt'
  | 'childs___formFields___updatedAt'
  | 'childs___formFields___publishedAt'
  | 'childs___formFields___type'
  | 'childs___formFields___name'
  | 'childs___formFields___placeholder'
  | 'childs___formFields___validations'
  | 'childs___formFields___validations___remoteTypeName'
  | 'childs___formFields___validations___remoteId'
  | 'childs___formFields___validations___locale'
  | 'childs___formFields___validations___stage'
  | 'childs___formFields___validations___createdAt'
  | 'childs___formFields___validations___updatedAt'
  | 'childs___formFields___validations___publishedAt'
  | 'childs___formFields___validations___name'
  | 'childs___formFields___validations___errorMessage'
  | 'childs___formFields___validations___required'
  | 'childs___formFields___validations___unique'
  | 'childs___formFields___validations___matchPattern'
  | 'childs___formFields___validations___pattern'
  | 'childs___formFields___validations___formField'
  | 'childs___formFields___validations___id'
  | 'childs___formFields___validations___children'
  | 'childs___formFields___form'
  | 'childs___formFields___form___remoteTypeName'
  | 'childs___formFields___form___remoteId'
  | 'childs___formFields___form___locale'
  | 'childs___formFields___form___stage'
  | 'childs___formFields___form___createdAt'
  | 'childs___formFields___form___updatedAt'
  | 'childs___formFields___form___publishedAt'
  | 'childs___formFields___form___remoteParent'
  | 'childs___formFields___form___name'
  | 'childs___formFields___form___childs'
  | 'childs___formFields___form___formFields'
  | 'childs___formFields___form___id'
  | 'childs___formFields___form___children'
  | 'childs___formFields___id'
  | 'childs___formFields___parent___id'
  | 'childs___formFields___parent___children'
  | 'childs___formFields___children'
  | 'childs___formFields___children___id'
  | 'childs___formFields___children___children'
  | 'childs___formFields___internal___content'
  | 'childs___formFields___internal___contentDigest'
  | 'childs___formFields___internal___description'
  | 'childs___formFields___internal___fieldOwners'
  | 'childs___formFields___internal___ignoreType'
  | 'childs___formFields___internal___mediaType'
  | 'childs___formFields___internal___owner'
  | 'childs___formFields___internal___type'
  | 'childs___id'
  | 'childs___parent___id'
  | 'childs___parent___parent___id'
  | 'childs___parent___parent___children'
  | 'childs___parent___children'
  | 'childs___parent___children___id'
  | 'childs___parent___children___children'
  | 'childs___parent___internal___content'
  | 'childs___parent___internal___contentDigest'
  | 'childs___parent___internal___description'
  | 'childs___parent___internal___fieldOwners'
  | 'childs___parent___internal___ignoreType'
  | 'childs___parent___internal___mediaType'
  | 'childs___parent___internal___owner'
  | 'childs___parent___internal___type'
  | 'childs___children'
  | 'childs___children___id'
  | 'childs___children___parent___id'
  | 'childs___children___parent___children'
  | 'childs___children___children'
  | 'childs___children___children___id'
  | 'childs___children___children___children'
  | 'childs___children___internal___content'
  | 'childs___children___internal___contentDigest'
  | 'childs___children___internal___description'
  | 'childs___children___internal___fieldOwners'
  | 'childs___children___internal___ignoreType'
  | 'childs___children___internal___mediaType'
  | 'childs___children___internal___owner'
  | 'childs___children___internal___type'
  | 'childs___internal___content'
  | 'childs___internal___contentDigest'
  | 'childs___internal___description'
  | 'childs___internal___fieldOwners'
  | 'childs___internal___ignoreType'
  | 'childs___internal___mediaType'
  | 'childs___internal___owner'
  | 'childs___internal___type'
  | 'formFields'
  | 'formFields___remoteTypeName'
  | 'formFields___remoteId'
  | 'formFields___locale'
  | 'formFields___stage'
  | 'formFields___createdAt'
  | 'formFields___updatedAt'
  | 'formFields___publishedAt'
  | 'formFields___type'
  | 'formFields___name'
  | 'formFields___placeholder'
  | 'formFields___validations'
  | 'formFields___validations___remoteTypeName'
  | 'formFields___validations___remoteId'
  | 'formFields___validations___locale'
  | 'formFields___validations___stage'
  | 'formFields___validations___createdAt'
  | 'formFields___validations___updatedAt'
  | 'formFields___validations___publishedAt'
  | 'formFields___validations___name'
  | 'formFields___validations___errorMessage'
  | 'formFields___validations___required'
  | 'formFields___validations___unique'
  | 'formFields___validations___matchPattern'
  | 'formFields___validations___pattern'
  | 'formFields___validations___formField'
  | 'formFields___validations___formField___remoteTypeName'
  | 'formFields___validations___formField___remoteId'
  | 'formFields___validations___formField___locale'
  | 'formFields___validations___formField___stage'
  | 'formFields___validations___formField___createdAt'
  | 'formFields___validations___formField___updatedAt'
  | 'formFields___validations___formField___publishedAt'
  | 'formFields___validations___formField___type'
  | 'formFields___validations___formField___name'
  | 'formFields___validations___formField___placeholder'
  | 'formFields___validations___formField___validations'
  | 'formFields___validations___formField___form'
  | 'formFields___validations___formField___id'
  | 'formFields___validations___formField___children'
  | 'formFields___validations___id'
  | 'formFields___validations___parent___id'
  | 'formFields___validations___parent___children'
  | 'formFields___validations___children'
  | 'formFields___validations___children___id'
  | 'formFields___validations___children___children'
  | 'formFields___validations___internal___content'
  | 'formFields___validations___internal___contentDigest'
  | 'formFields___validations___internal___description'
  | 'formFields___validations___internal___fieldOwners'
  | 'formFields___validations___internal___ignoreType'
  | 'formFields___validations___internal___mediaType'
  | 'formFields___validations___internal___owner'
  | 'formFields___validations___internal___type'
  | 'formFields___form'
  | 'formFields___form___remoteTypeName'
  | 'formFields___form___remoteId'
  | 'formFields___form___locale'
  | 'formFields___form___stage'
  | 'formFields___form___createdAt'
  | 'formFields___form___updatedAt'
  | 'formFields___form___publishedAt'
  | 'formFields___form___remoteParent'
  | 'formFields___form___remoteParent___remoteTypeName'
  | 'formFields___form___remoteParent___remoteId'
  | 'formFields___form___remoteParent___locale'
  | 'formFields___form___remoteParent___stage'
  | 'formFields___form___remoteParent___createdAt'
  | 'formFields___form___remoteParent___updatedAt'
  | 'formFields___form___remoteParent___publishedAt'
  | 'formFields___form___remoteParent___remoteParent'
  | 'formFields___form___remoteParent___name'
  | 'formFields___form___remoteParent___childs'
  | 'formFields___form___remoteParent___formFields'
  | 'formFields___form___remoteParent___id'
  | 'formFields___form___remoteParent___children'
  | 'formFields___form___name'
  | 'formFields___form___childs'
  | 'formFields___form___childs___remoteTypeName'
  | 'formFields___form___childs___remoteId'
  | 'formFields___form___childs___locale'
  | 'formFields___form___childs___stage'
  | 'formFields___form___childs___createdAt'
  | 'formFields___form___childs___updatedAt'
  | 'formFields___form___childs___publishedAt'
  | 'formFields___form___childs___remoteParent'
  | 'formFields___form___childs___name'
  | 'formFields___form___childs___childs'
  | 'formFields___form___childs___formFields'
  | 'formFields___form___childs___id'
  | 'formFields___form___childs___children'
  | 'formFields___form___formFields'
  | 'formFields___form___formFields___remoteTypeName'
  | 'formFields___form___formFields___remoteId'
  | 'formFields___form___formFields___locale'
  | 'formFields___form___formFields___stage'
  | 'formFields___form___formFields___createdAt'
  | 'formFields___form___formFields___updatedAt'
  | 'formFields___form___formFields___publishedAt'
  | 'formFields___form___formFields___type'
  | 'formFields___form___formFields___name'
  | 'formFields___form___formFields___placeholder'
  | 'formFields___form___formFields___validations'
  | 'formFields___form___formFields___form'
  | 'formFields___form___formFields___id'
  | 'formFields___form___formFields___children'
  | 'formFields___form___id'
  | 'formFields___form___parent___id'
  | 'formFields___form___parent___children'
  | 'formFields___form___children'
  | 'formFields___form___children___id'
  | 'formFields___form___children___children'
  | 'formFields___form___internal___content'
  | 'formFields___form___internal___contentDigest'
  | 'formFields___form___internal___description'
  | 'formFields___form___internal___fieldOwners'
  | 'formFields___form___internal___ignoreType'
  | 'formFields___form___internal___mediaType'
  | 'formFields___form___internal___owner'
  | 'formFields___form___internal___type'
  | 'formFields___id'
  | 'formFields___parent___id'
  | 'formFields___parent___parent___id'
  | 'formFields___parent___parent___children'
  | 'formFields___parent___children'
  | 'formFields___parent___children___id'
  | 'formFields___parent___children___children'
  | 'formFields___parent___internal___content'
  | 'formFields___parent___internal___contentDigest'
  | 'formFields___parent___internal___description'
  | 'formFields___parent___internal___fieldOwners'
  | 'formFields___parent___internal___ignoreType'
  | 'formFields___parent___internal___mediaType'
  | 'formFields___parent___internal___owner'
  | 'formFields___parent___internal___type'
  | 'formFields___children'
  | 'formFields___children___id'
  | 'formFields___children___parent___id'
  | 'formFields___children___parent___children'
  | 'formFields___children___children'
  | 'formFields___children___children___id'
  | 'formFields___children___children___children'
  | 'formFields___children___internal___content'
  | 'formFields___children___internal___contentDigest'
  | 'formFields___children___internal___description'
  | 'formFields___children___internal___fieldOwners'
  | 'formFields___children___internal___ignoreType'
  | 'formFields___children___internal___mediaType'
  | 'formFields___children___internal___owner'
  | 'formFields___children___internal___type'
  | 'formFields___internal___content'
  | 'formFields___internal___contentDigest'
  | 'formFields___internal___description'
  | 'formFields___internal___fieldOwners'
  | 'formFields___internal___ignoreType'
  | 'formFields___internal___mediaType'
  | 'formFields___internal___owner'
  | 'formFields___internal___type'
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

export type GraphCms_FormFieldSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_FormFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_FormFieldValidation = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  unique?: Maybe<Scalars['Boolean']>;
  matchPattern?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  formField: Array<GraphCms_FormField>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_FormFieldValidationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_FormFieldValidationEdge>;
  nodes: Array<GraphCms_FormFieldValidation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_FormFieldValidationGroupConnection>;
};


export type GraphCms_FormFieldValidationConnectionDistinctArgs = {
  field: GraphCms_FormFieldValidationFieldsEnum;
};


export type GraphCms_FormFieldValidationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_FormFieldValidationFieldsEnum;
};

export type GraphCms_FormFieldValidationEdge = {
  next?: Maybe<GraphCms_FormFieldValidation>;
  node: GraphCms_FormFieldValidation;
  previous?: Maybe<GraphCms_FormFieldValidation>;
};

export type GraphCms_FormFieldValidationFieldsEnum = 
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'errorMessage'
  | 'required'
  | 'unique'
  | 'matchPattern'
  | 'pattern'
  | 'formField'
  | 'formField___remoteTypeName'
  | 'formField___remoteId'
  | 'formField___locale'
  | 'formField___stage'
  | 'formField___createdAt'
  | 'formField___updatedAt'
  | 'formField___publishedAt'
  | 'formField___type'
  | 'formField___name'
  | 'formField___placeholder'
  | 'formField___validations'
  | 'formField___validations___remoteTypeName'
  | 'formField___validations___remoteId'
  | 'formField___validations___locale'
  | 'formField___validations___stage'
  | 'formField___validations___createdAt'
  | 'formField___validations___updatedAt'
  | 'formField___validations___publishedAt'
  | 'formField___validations___name'
  | 'formField___validations___errorMessage'
  | 'formField___validations___required'
  | 'formField___validations___unique'
  | 'formField___validations___matchPattern'
  | 'formField___validations___pattern'
  | 'formField___validations___formField'
  | 'formField___validations___formField___remoteTypeName'
  | 'formField___validations___formField___remoteId'
  | 'formField___validations___formField___locale'
  | 'formField___validations___formField___stage'
  | 'formField___validations___formField___createdAt'
  | 'formField___validations___formField___updatedAt'
  | 'formField___validations___formField___publishedAt'
  | 'formField___validations___formField___type'
  | 'formField___validations___formField___name'
  | 'formField___validations___formField___placeholder'
  | 'formField___validations___formField___validations'
  | 'formField___validations___formField___form'
  | 'formField___validations___formField___id'
  | 'formField___validations___formField___children'
  | 'formField___validations___id'
  | 'formField___validations___parent___id'
  | 'formField___validations___parent___children'
  | 'formField___validations___children'
  | 'formField___validations___children___id'
  | 'formField___validations___children___children'
  | 'formField___validations___internal___content'
  | 'formField___validations___internal___contentDigest'
  | 'formField___validations___internal___description'
  | 'formField___validations___internal___fieldOwners'
  | 'formField___validations___internal___ignoreType'
  | 'formField___validations___internal___mediaType'
  | 'formField___validations___internal___owner'
  | 'formField___validations___internal___type'
  | 'formField___form'
  | 'formField___form___remoteTypeName'
  | 'formField___form___remoteId'
  | 'formField___form___locale'
  | 'formField___form___stage'
  | 'formField___form___createdAt'
  | 'formField___form___updatedAt'
  | 'formField___form___publishedAt'
  | 'formField___form___remoteParent'
  | 'formField___form___remoteParent___remoteTypeName'
  | 'formField___form___remoteParent___remoteId'
  | 'formField___form___remoteParent___locale'
  | 'formField___form___remoteParent___stage'
  | 'formField___form___remoteParent___createdAt'
  | 'formField___form___remoteParent___updatedAt'
  | 'formField___form___remoteParent___publishedAt'
  | 'formField___form___remoteParent___remoteParent'
  | 'formField___form___remoteParent___name'
  | 'formField___form___remoteParent___childs'
  | 'formField___form___remoteParent___formFields'
  | 'formField___form___remoteParent___id'
  | 'formField___form___remoteParent___children'
  | 'formField___form___name'
  | 'formField___form___childs'
  | 'formField___form___childs___remoteTypeName'
  | 'formField___form___childs___remoteId'
  | 'formField___form___childs___locale'
  | 'formField___form___childs___stage'
  | 'formField___form___childs___createdAt'
  | 'formField___form___childs___updatedAt'
  | 'formField___form___childs___publishedAt'
  | 'formField___form___childs___remoteParent'
  | 'formField___form___childs___name'
  | 'formField___form___childs___childs'
  | 'formField___form___childs___formFields'
  | 'formField___form___childs___id'
  | 'formField___form___childs___children'
  | 'formField___form___formFields'
  | 'formField___form___formFields___remoteTypeName'
  | 'formField___form___formFields___remoteId'
  | 'formField___form___formFields___locale'
  | 'formField___form___formFields___stage'
  | 'formField___form___formFields___createdAt'
  | 'formField___form___formFields___updatedAt'
  | 'formField___form___formFields___publishedAt'
  | 'formField___form___formFields___type'
  | 'formField___form___formFields___name'
  | 'formField___form___formFields___placeholder'
  | 'formField___form___formFields___validations'
  | 'formField___form___formFields___form'
  | 'formField___form___formFields___id'
  | 'formField___form___formFields___children'
  | 'formField___form___id'
  | 'formField___form___parent___id'
  | 'formField___form___parent___children'
  | 'formField___form___children'
  | 'formField___form___children___id'
  | 'formField___form___children___children'
  | 'formField___form___internal___content'
  | 'formField___form___internal___contentDigest'
  | 'formField___form___internal___description'
  | 'formField___form___internal___fieldOwners'
  | 'formField___form___internal___ignoreType'
  | 'formField___form___internal___mediaType'
  | 'formField___form___internal___owner'
  | 'formField___form___internal___type'
  | 'formField___id'
  | 'formField___parent___id'
  | 'formField___parent___parent___id'
  | 'formField___parent___parent___children'
  | 'formField___parent___children'
  | 'formField___parent___children___id'
  | 'formField___parent___children___children'
  | 'formField___parent___internal___content'
  | 'formField___parent___internal___contentDigest'
  | 'formField___parent___internal___description'
  | 'formField___parent___internal___fieldOwners'
  | 'formField___parent___internal___ignoreType'
  | 'formField___parent___internal___mediaType'
  | 'formField___parent___internal___owner'
  | 'formField___parent___internal___type'
  | 'formField___children'
  | 'formField___children___id'
  | 'formField___children___parent___id'
  | 'formField___children___parent___children'
  | 'formField___children___children'
  | 'formField___children___children___id'
  | 'formField___children___children___children'
  | 'formField___children___internal___content'
  | 'formField___children___internal___contentDigest'
  | 'formField___children___internal___description'
  | 'formField___children___internal___fieldOwners'
  | 'formField___children___internal___ignoreType'
  | 'formField___children___internal___mediaType'
  | 'formField___children___internal___owner'
  | 'formField___children___internal___type'
  | 'formField___internal___content'
  | 'formField___internal___contentDigest'
  | 'formField___internal___description'
  | 'formField___internal___fieldOwners'
  | 'formField___internal___ignoreType'
  | 'formField___internal___mediaType'
  | 'formField___internal___owner'
  | 'formField___internal___type'
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

export type GraphCms_FormFieldValidationFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  errorMessage?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<BooleanQueryOperatorInput>;
  unique?: Maybe<BooleanQueryOperatorInput>;
  matchPattern?: Maybe<BooleanQueryOperatorInput>;
  pattern?: Maybe<StringQueryOperatorInput>;
  formField?: Maybe<GraphCms_FormFieldFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_FormFieldValidationFilterListInput = {
  elemMatch?: Maybe<GraphCms_FormFieldValidationFilterInput>;
};

export type GraphCms_FormFieldValidationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_FormFieldValidationEdge>;
  nodes: Array<GraphCms_FormFieldValidation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_FormFieldValidationSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_FormFieldValidationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_FormFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  remoteParent?: Maybe<GraphCms_FormFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  childs?: Maybe<GraphCms_FormFilterListInput>;
  formFields?: Maybe<GraphCms_FormFieldFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_FormFilterListInput = {
  elemMatch?: Maybe<GraphCms_FormFilterInput>;
};

export type GraphCms_FormGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_FormEdge>;
  nodes: Array<GraphCms_Form>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_FormSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_FormFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_Image = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  createdAt: Scalars['JSON'];
  updatedAt: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<GraphCms_Asset>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_ImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ImageEdge>;
  nodes: Array<GraphCms_Image>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_ImageGroupConnection>;
};


export type GraphCms_ImageConnectionDistinctArgs = {
  field: GraphCms_ImageFieldsEnum;
};


export type GraphCms_ImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_ImageFieldsEnum;
};

export type GraphCms_ImageEdge = {
  next?: Maybe<GraphCms_Image>;
  node: GraphCms_Image;
  previous?: Maybe<GraphCms_Image>;
};

export type GraphCms_ImageFieldsEnum = 
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'description'
  | 'file___localFile___sourceInstanceName'
  | 'file___localFile___absolutePath'
  | 'file___localFile___relativePath'
  | 'file___localFile___extension'
  | 'file___localFile___size'
  | 'file___localFile___prettySize'
  | 'file___localFile___modifiedTime'
  | 'file___localFile___accessTime'
  | 'file___localFile___changeTime'
  | 'file___localFile___birthTime'
  | 'file___localFile___root'
  | 'file___localFile___dir'
  | 'file___localFile___base'
  | 'file___localFile___ext'
  | 'file___localFile___name'
  | 'file___localFile___relativeDirectory'
  | 'file___localFile___dev'
  | 'file___localFile___mode'
  | 'file___localFile___nlink'
  | 'file___localFile___uid'
  | 'file___localFile___gid'
  | 'file___localFile___rdev'
  | 'file___localFile___ino'
  | 'file___localFile___atimeMs'
  | 'file___localFile___mtimeMs'
  | 'file___localFile___ctimeMs'
  | 'file___localFile___atime'
  | 'file___localFile___mtime'
  | 'file___localFile___ctime'
  | 'file___localFile___birthtime'
  | 'file___localFile___birthtimeMs'
  | 'file___localFile___blksize'
  | 'file___localFile___blocks'
  | 'file___localFile___url'
  | 'file___localFile___publicURL'
  | 'file___localFile___childImageSharp___id'
  | 'file___localFile___childImageSharp___children'
  | 'file___localFile___id'
  | 'file___localFile___parent___id'
  | 'file___localFile___parent___children'
  | 'file___localFile___children'
  | 'file___localFile___children___id'
  | 'file___localFile___children___children'
  | 'file___localFile___internal___content'
  | 'file___localFile___internal___contentDigest'
  | 'file___localFile___internal___description'
  | 'file___localFile___internal___fieldOwners'
  | 'file___localFile___internal___ignoreType'
  | 'file___localFile___internal___mediaType'
  | 'file___localFile___internal___owner'
  | 'file___localFile___internal___type'
  | 'file___remoteTypeName'
  | 'file___remoteId'
  | 'file___locale'
  | 'file___stage'
  | 'file___createdAt'
  | 'file___updatedAt'
  | 'file___publishedAt'
  | 'file___handle'
  | 'file___fileName'
  | 'file___height'
  | 'file___width'
  | 'file___size'
  | 'file___mimeType'
  | 'file___blogPostBannerImage'
  | 'file___blogPostBannerImage___remoteTypeName'
  | 'file___blogPostBannerImage___remoteId'
  | 'file___blogPostBannerImage___locale'
  | 'file___blogPostBannerImage___stage'
  | 'file___blogPostBannerImage___createdAt'
  | 'file___blogPostBannerImage___updatedAt'
  | 'file___blogPostBannerImage___publishedAt'
  | 'file___blogPostBannerImage___title'
  | 'file___blogPostBannerImage___content'
  | 'file___blogPostBannerImage___bannerImage___remoteTypeName'
  | 'file___blogPostBannerImage___bannerImage___remoteId'
  | 'file___blogPostBannerImage___bannerImage___locale'
  | 'file___blogPostBannerImage___bannerImage___stage'
  | 'file___blogPostBannerImage___bannerImage___createdAt'
  | 'file___blogPostBannerImage___bannerImage___updatedAt'
  | 'file___blogPostBannerImage___bannerImage___publishedAt'
  | 'file___blogPostBannerImage___bannerImage___handle'
  | 'file___blogPostBannerImage___bannerImage___fileName'
  | 'file___blogPostBannerImage___bannerImage___height'
  | 'file___blogPostBannerImage___bannerImage___width'
  | 'file___blogPostBannerImage___bannerImage___size'
  | 'file___blogPostBannerImage___bannerImage___mimeType'
  | 'file___blogPostBannerImage___bannerImage___blogPostBannerImage'
  | 'file___blogPostBannerImage___bannerImage___imageFile'
  | 'file___blogPostBannerImage___bannerImage___url'
  | 'file___blogPostBannerImage___bannerImage___id'
  | 'file___blogPostBannerImage___bannerImage___children'
  | 'file___blogPostBannerImage___contentRich___remoteTypeName'
  | 'file___blogPostBannerImage___contentRich___raw'
  | 'file___blogPostBannerImage___contentRich___html'
  | 'file___blogPostBannerImage___contentRich___markdown'
  | 'file___blogPostBannerImage___contentRich___text'
  | 'file___blogPostBannerImage___id'
  | 'file___blogPostBannerImage___parent___id'
  | 'file___blogPostBannerImage___parent___children'
  | 'file___blogPostBannerImage___children'
  | 'file___blogPostBannerImage___children___id'
  | 'file___blogPostBannerImage___children___children'
  | 'file___blogPostBannerImage___internal___content'
  | 'file___blogPostBannerImage___internal___contentDigest'
  | 'file___blogPostBannerImage___internal___description'
  | 'file___blogPostBannerImage___internal___fieldOwners'
  | 'file___blogPostBannerImage___internal___ignoreType'
  | 'file___blogPostBannerImage___internal___mediaType'
  | 'file___blogPostBannerImage___internal___owner'
  | 'file___blogPostBannerImage___internal___type'
  | 'file___imageFile'
  | 'file___imageFile___remoteTypeName'
  | 'file___imageFile___remoteId'
  | 'file___imageFile___locale'
  | 'file___imageFile___stage'
  | 'file___imageFile___createdAt'
  | 'file___imageFile___updatedAt'
  | 'file___imageFile___publishedAt'
  | 'file___imageFile___name'
  | 'file___imageFile___description'
  | 'file___imageFile___file___remoteTypeName'
  | 'file___imageFile___file___remoteId'
  | 'file___imageFile___file___locale'
  | 'file___imageFile___file___stage'
  | 'file___imageFile___file___createdAt'
  | 'file___imageFile___file___updatedAt'
  | 'file___imageFile___file___publishedAt'
  | 'file___imageFile___file___handle'
  | 'file___imageFile___file___fileName'
  | 'file___imageFile___file___height'
  | 'file___imageFile___file___width'
  | 'file___imageFile___file___size'
  | 'file___imageFile___file___mimeType'
  | 'file___imageFile___file___blogPostBannerImage'
  | 'file___imageFile___file___imageFile'
  | 'file___imageFile___file___url'
  | 'file___imageFile___file___id'
  | 'file___imageFile___file___children'
  | 'file___imageFile___id'
  | 'file___imageFile___parent___id'
  | 'file___imageFile___parent___children'
  | 'file___imageFile___children'
  | 'file___imageFile___children___id'
  | 'file___imageFile___children___children'
  | 'file___imageFile___internal___content'
  | 'file___imageFile___internal___contentDigest'
  | 'file___imageFile___internal___description'
  | 'file___imageFile___internal___fieldOwners'
  | 'file___imageFile___internal___ignoreType'
  | 'file___imageFile___internal___mediaType'
  | 'file___imageFile___internal___owner'
  | 'file___imageFile___internal___type'
  | 'file___url'
  | 'file___id'
  | 'file___parent___id'
  | 'file___parent___parent___id'
  | 'file___parent___parent___children'
  | 'file___parent___children'
  | 'file___parent___children___id'
  | 'file___parent___children___children'
  | 'file___parent___internal___content'
  | 'file___parent___internal___contentDigest'
  | 'file___parent___internal___description'
  | 'file___parent___internal___fieldOwners'
  | 'file___parent___internal___ignoreType'
  | 'file___parent___internal___mediaType'
  | 'file___parent___internal___owner'
  | 'file___parent___internal___type'
  | 'file___children'
  | 'file___children___id'
  | 'file___children___parent___id'
  | 'file___children___parent___children'
  | 'file___children___children'
  | 'file___children___children___id'
  | 'file___children___children___children'
  | 'file___children___internal___content'
  | 'file___children___internal___contentDigest'
  | 'file___children___internal___description'
  | 'file___children___internal___fieldOwners'
  | 'file___children___internal___ignoreType'
  | 'file___children___internal___mediaType'
  | 'file___children___internal___owner'
  | 'file___children___internal___type'
  | 'file___internal___content'
  | 'file___internal___contentDigest'
  | 'file___internal___description'
  | 'file___internal___fieldOwners'
  | 'file___internal___ignoreType'
  | 'file___internal___mediaType'
  | 'file___internal___owner'
  | 'file___internal___type'
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

export type GraphCms_ImageFilterInput = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<GraphCms_AssetFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GraphCms_ImageFilterListInput = {
  elemMatch?: Maybe<GraphCms_ImageFilterInput>;
};

export type GraphCms_ImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ImageEdge>;
  nodes: Array<GraphCms_Image>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_ImageSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_ImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_Locale = 
  | 'en';

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: Maybe<GraphCms_Locale>;
  ne?: Maybe<GraphCms_Locale>;
  in?: Maybe<Array<Maybe<GraphCms_Locale>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Locale>>>;
};

export type GraphCms_MarkdownNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMdx?: Maybe<Mdx>;
};

export type GraphCms_MarkdownNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_MarkdownNodeEdge>;
  nodes: Array<GraphCms_MarkdownNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphCms_MarkdownNodeGroupConnection>;
};


export type GraphCms_MarkdownNodeConnectionDistinctArgs = {
  field: GraphCms_MarkdownNodeFieldsEnum;
};


export type GraphCms_MarkdownNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphCms_MarkdownNodeFieldsEnum;
};

export type GraphCms_MarkdownNodeEdge = {
  next?: Maybe<GraphCms_MarkdownNode>;
  node: GraphCms_MarkdownNode;
  previous?: Maybe<GraphCms_MarkdownNode>;
};

export type GraphCms_MarkdownNodeFieldsEnum = 
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

export type GraphCms_MarkdownNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type GraphCms_MarkdownNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_MarkdownNodeEdge>;
  nodes: Array<GraphCms_MarkdownNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_MarkdownNodeSortInput = {
  fields?: Maybe<Array<Maybe<GraphCms_MarkdownNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_RichText = {
  markdownNode?: Maybe<GraphCms_MarkdownNode>;
  remoteTypeName: Scalars['String'];
  raw: Scalars['JSON'];
  html: Scalars['String'];
  markdown: Scalars['String'];
  text: Scalars['String'];
};

export type GraphCms_RichTextFilterInput = {
  markdownNode?: Maybe<GraphCms_MarkdownNodeFilterInput>;
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  markdown?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type GraphCms_Stage = 
  | 'PUBLISHED'
  | 'DRAFT';

export type GraphCms_StageQueryOperatorInput = {
  eq?: Maybe<GraphCms_Stage>;
  ne?: Maybe<GraphCms_Stage>;
  in?: Maybe<Array<Maybe<GraphCms_Stage>>>;
  nin?: Maybe<Array<Maybe<GraphCms_Stage>>>;
};

export type HeadingsMdx = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

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

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
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
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
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
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphCmsAsset?: Maybe<GraphCms_Asset>;
  allGraphCmsAsset: GraphCms_AssetConnection;
  graphCmsMarkdownNode?: Maybe<GraphCms_MarkdownNode>;
  allGraphCmsMarkdownNode: GraphCms_MarkdownNodeConnection;
  graphCmsBlogPost?: Maybe<GraphCms_BlogPost>;
  allGraphCmsBlogPost: GraphCms_BlogPostConnection;
  graphCmsImage?: Maybe<GraphCms_Image>;
  allGraphCmsImage: GraphCms_ImageConnection;
  graphCmsCompanyInfo?: Maybe<GraphCms_CompanyInfo>;
  allGraphCmsCompanyInfo: GraphCms_CompanyInfoConnection;
  graphCmsForm?: Maybe<GraphCms_Form>;
  allGraphCmsForm: GraphCms_FormConnection;
  graphCmsFormField?: Maybe<GraphCms_FormField>;
  allGraphCmsFormField: GraphCms_FormFieldConnection;
  graphCmsFormFieldValidation?: Maybe<GraphCms_FormFieldValidation>;
  allGraphCmsFormFieldValidation: GraphCms_FormFieldValidationConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
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


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
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


export type QueryGraphCmsAssetArgs = {
  localFile?: Maybe<FileFilterInput>;
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  blogPostBannerImage?: Maybe<GraphCms_BlogPostFilterListInput>;
  imageFile?: Maybe<GraphCms_ImageFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsAssetArgs = {
  filter?: Maybe<GraphCms_AssetFilterInput>;
  sort?: Maybe<GraphCms_AssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsMarkdownNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllGraphCmsMarkdownNodeArgs = {
  filter?: Maybe<GraphCms_MarkdownNodeFilterInput>;
  sort?: Maybe<GraphCms_MarkdownNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsBlogPostArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  bannerImage?: Maybe<GraphCms_AssetFilterInput>;
  contentRich?: Maybe<GraphCms_RichTextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsBlogPostArgs = {
  filter?: Maybe<GraphCms_BlogPostFilterInput>;
  sort?: Maybe<GraphCms_BlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsImageArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<GraphCms_AssetFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsImageArgs = {
  filter?: Maybe<GraphCms_ImageFilterInput>;
  sort?: Maybe<GraphCms_ImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsCompanyInfoArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsCompanyInfoArgs = {
  filter?: Maybe<GraphCms_CompanyInfoFilterInput>;
  sort?: Maybe<GraphCms_CompanyInfoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsFormArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  remoteParent?: Maybe<GraphCms_FormFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  childs?: Maybe<GraphCms_FormFilterListInput>;
  formFields?: Maybe<GraphCms_FormFieldFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsFormArgs = {
  filter?: Maybe<GraphCms_FormFilterInput>;
  sort?: Maybe<GraphCms_FormSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsFormFieldArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  type?: Maybe<GraphCms_FieldTypeQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
  validations?: Maybe<GraphCms_FormFieldValidationFilterListInput>;
  form?: Maybe<GraphCms_FormFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsFormFieldArgs = {
  filter?: Maybe<GraphCms_FormFieldFilterInput>;
  sort?: Maybe<GraphCms_FormFieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphCmsFormFieldValidationArgs = {
  remoteTypeName?: Maybe<StringQueryOperatorInput>;
  remoteId?: Maybe<IdQueryOperatorInput>;
  locale?: Maybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: Maybe<GraphCms_StageQueryOperatorInput>;
  createdAt?: Maybe<JsonQueryOperatorInput>;
  updatedAt?: Maybe<JsonQueryOperatorInput>;
  publishedAt?: Maybe<JsonQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  errorMessage?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<BooleanQueryOperatorInput>;
  unique?: Maybe<BooleanQueryOperatorInput>;
  matchPattern?: Maybe<BooleanQueryOperatorInput>;
  pattern?: Maybe<StringQueryOperatorInput>;
  formField?: Maybe<GraphCms_FormFieldFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGraphCmsFormFieldValidationArgs = {
  filter?: Maybe<GraphCms_FormFieldValidationFilterInput>;
  sort?: Maybe<GraphCms_FormFieldValidationSortInput>;
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
  id?: Maybe<Scalars['String']>;
  content?: Maybe<SitePageContextContent>;
};

export type SitePageContextContent = {
  markdownNode?: Maybe<SitePageContextContentMarkdownNode>;
};

export type SitePageContextContentFilterInput = {
  markdownNode?: Maybe<SitePageContextContentMarkdownNodeFilterInput>;
};

export type SitePageContextContentMarkdownNode = {
  childMdx?: Maybe<SitePageContextContentMarkdownNodeChildMdx>;
};

export type SitePageContextContentMarkdownNodeChildMdx = {
  body?: Maybe<Scalars['String']>;
};

export type SitePageContextContentMarkdownNodeChildMdxFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentMarkdownNodeFilterInput = {
  childMdx?: Maybe<SitePageContextContentMarkdownNodeChildMdxFilterInput>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<SitePageContextContentFilterInput>;
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
  | 'context___id'
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
  | 'pluginCreator___pluginOptions___tsLoader___configFile'
  | 'pluginCreator___pluginOptions___tsLoader___logLevel'
  | 'pluginCreator___pluginOptions___tsLoader___projectReferences'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___downloadLocalImages'
  | 'pluginCreator___pluginOptions___buildMarkdownNodes'
  | 'pluginCreator___pluginOptions___endpoint'
  | 'pluginCreator___pluginOptions___token'
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
  context?: Maybe<SitePageContextFilterInput>;
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
  | 'pluginOptions___tsLoader___configFile'
  | 'pluginOptions___tsLoader___logLevel'
  | 'pluginOptions___tsLoader___projectReferences'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___downloadLocalImages'
  | 'pluginOptions___buildMarkdownNodes'
  | 'pluginOptions___endpoint'
  | 'pluginOptions___token'
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
  tsLoader?: Maybe<SitePluginPluginOptionsTsLoader>;
  failOnError?: Maybe<Scalars['Boolean']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  downloadLocalImages?: Maybe<Scalars['Boolean']>;
  buildMarkdownNodes?: Maybe<Scalars['Boolean']>;
  endpoint?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  tsLoader?: Maybe<SitePluginPluginOptionsTsLoaderFilterInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  downloadLocalImages?: Maybe<BooleanQueryOperatorInput>;
  buildMarkdownNodes?: Maybe<BooleanQueryOperatorInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
  token?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsTsLoader = {
  configFile?: Maybe<Scalars['String']>;
  logLevel?: Maybe<Scalars['String']>;
  projectReferences?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsTsLoaderFilterInput = {
  configFile?: Maybe<StringQueryOperatorInput>;
  logLevel?: Maybe<StringQueryOperatorInput>;
  projectReferences?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  languages?: Maybe<SiteSiteMetadataLanguages>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
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

export type BlogPostQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostQuery = { graphCmsBlogPost?: Maybe<Pick<GraphCms_BlogPost, 'content'>> };
