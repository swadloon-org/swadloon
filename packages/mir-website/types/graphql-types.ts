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

export type GraphCms = {
  /** Fetches an object given its ID */
  node?: Maybe<GraphCms_Node>;
  /** Retrieve multiple aboutPages */
  aboutPages: Array<GraphCms_AboutPage>;
  /** Retrieve a single aboutPage */
  aboutPage?: Maybe<GraphCms_AboutPage>;
  /** Retrieve multiple aboutPages using the Relay connection interface */
  aboutPagesConnection: GraphCms_AboutPageConnection;
  /** Retrieve document version */
  aboutPageVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple actionSections */
  actionSections: Array<GraphCms_ActionSection>;
  /** Retrieve a single actionSection */
  actionSection?: Maybe<GraphCms_ActionSection>;
  /** Retrieve multiple actionSections using the Relay connection interface */
  actionSectionsConnection: GraphCms_ActionSectionConnection;
  /** Retrieve document version */
  actionSectionVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<GraphCms_Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<GraphCms_Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: GraphCms_AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple blogPages */
  blogPages: Array<GraphCms_BlogPage>;
  /** Retrieve a single blogPage */
  blogPage?: Maybe<GraphCms_BlogPage>;
  /** Retrieve multiple blogPages using the Relay connection interface */
  blogPagesConnection: GraphCms_BlogPageConnection;
  /** Retrieve document version */
  blogPageVersion?: Maybe<GraphCms_DocumentVersion>;
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
  /** Retrieve multiple candidatePages */
  candidatePages: Array<GraphCms_CandidatePage>;
  /** Retrieve a single candidatePage */
  candidatePage?: Maybe<GraphCms_CandidatePage>;
  /** Retrieve multiple candidatePages using the Relay connection interface */
  candidatePagesConnection: GraphCms_CandidatePageConnection;
  /** Retrieve document version */
  candidatePageVersion?: Maybe<GraphCms_DocumentVersion>;
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
  /** Retrieve multiple contactUsForms */
  contactUsForms: Array<GraphCms_ContactUsForm>;
  /** Retrieve a single contactUsForm */
  contactUsForm?: Maybe<GraphCms_ContactUsForm>;
  /** Retrieve multiple contactUsForms using the Relay connection interface */
  contactUsFormsConnection: GraphCms_ContactUsFormConnection;
  /** Retrieve document version */
  contactUsFormVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple contactUsPages */
  contactUsPages: Array<GraphCms_ContactUsPage>;
  /** Retrieve a single contactUsPage */
  contactUsPage?: Maybe<GraphCms_ContactUsPage>;
  /** Retrieve multiple contactUsPages using the Relay connection interface */
  contactUsPagesConnection: GraphCms_ContactUsPageConnection;
  /** Retrieve document version */
  contactUsPageVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple employerPages */
  employerPages: Array<GraphCms_EmployerPage>;
  /** Retrieve a single employerPage */
  employerPage?: Maybe<GraphCms_EmployerPage>;
  /** Retrieve multiple employerPages using the Relay connection interface */
  employerPagesConnection: GraphCms_EmployerPageConnection;
  /** Retrieve document version */
  employerPageVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple indexPages */
  indexPages: Array<GraphCms_IndexPage>;
  /** Retrieve a single indexPage */
  indexPage?: Maybe<GraphCms_IndexPage>;
  /** Retrieve multiple indexPages using the Relay connection interface */
  indexPagesConnection: GraphCms_IndexPageConnection;
  /** Retrieve document version */
  indexPageVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple infoChecks */
  infoChecks: Array<GraphCms_InfoCheck>;
  /** Retrieve a single infoCheck */
  infoCheck?: Maybe<GraphCms_InfoCheck>;
  /** Retrieve multiple infoChecks using the Relay connection interface */
  infoChecksConnection: GraphCms_InfoCheckConnection;
  /** Retrieve document version */
  infoCheckVersion?: Maybe<GraphCms_DocumentVersion>;
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
  /** Retrieve multiple jobs */
  jobs: Array<GraphCms_Job>;
  /** Retrieve a single job */
  job?: Maybe<GraphCms_Job>;
  /** Retrieve multiple jobs using the Relay connection interface */
  jobsConnection: GraphCms_JobConnection;
  /** Retrieve document version */
  jobVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple jobGroups */
  jobGroups: Array<GraphCms_JobGroup>;
  /** Retrieve a single jobGroup */
  jobGroup?: Maybe<GraphCms_JobGroup>;
  /** Retrieve multiple jobGroups using the Relay connection interface */
  jobGroupsConnection: GraphCms_JobGroupConnection;
  /** Retrieve document version */
  jobGroupVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple jobSections */
  jobSections: Array<GraphCms_JobSection>;
  /** Retrieve a single jobSection */
  jobSection?: Maybe<GraphCms_JobSection>;
  /** Retrieve multiple jobSections using the Relay connection interface */
  jobSectionsConnection: GraphCms_JobSectionConnection;
  /** Retrieve document version */
  jobSectionVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple jobSectionTypes */
  jobSectionTypes: Array<GraphCms_JobSectionType>;
  /** Retrieve a single jobSectionType */
  jobSectionType?: Maybe<GraphCms_JobSectionType>;
  /** Retrieve multiple jobSectionTypes using the Relay connection interface */
  jobSectionTypesConnection: GraphCms_JobSectionTypeConnection;
  /** Retrieve document version */
  jobSectionTypeVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple jobTypes */
  jobTypes: Array<GraphCms_JobType>;
  /** Retrieve a single jobType */
  jobType?: Maybe<GraphCms_JobType>;
  /** Retrieve multiple jobTypes using the Relay connection interface */
  jobTypesConnection: GraphCms_JobTypeConnection;
  /** Retrieve document version */
  jobTypeVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple processSections */
  processSections: Array<GraphCms_ProcessSection>;
  /** Retrieve a single processSection */
  processSection?: Maybe<GraphCms_ProcessSection>;
  /** Retrieve multiple processSections using the Relay connection interface */
  processSectionsConnection: GraphCms_ProcessSectionConnection;
  /** Retrieve document version */
  processSectionVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple processSectionTypes */
  processSectionTypes: Array<GraphCms_ProcessSectionType>;
  /** Retrieve a single processSectionType */
  processSectionType?: Maybe<GraphCms_ProcessSectionType>;
  /** Retrieve multiple processSectionTypes using the Relay connection interface */
  processSectionTypesConnection: GraphCms_ProcessSectionTypeConnection;
  /** Retrieve document version */
  processSectionTypeVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple processSteps */
  processSteps: Array<GraphCms_ProcessStep>;
  /** Retrieve a single processStep */
  processStep?: Maybe<GraphCms_ProcessStep>;
  /** Retrieve multiple processSteps using the Relay connection interface */
  processStepsConnection: GraphCms_ProcessStepConnection;
  /** Retrieve document version */
  processStepVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple testimonials */
  testimonials: Array<GraphCms_Testimonial>;
  /** Retrieve a single testimonial */
  testimonial?: Maybe<GraphCms_Testimonial>;
  /** Retrieve multiple testimonials using the Relay connection interface */
  testimonialsConnection: GraphCms_TestimonialConnection;
  /** Retrieve document version */
  testimonialVersion?: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple testimonialSections */
  testimonialSections: Array<GraphCms_TestimonialSection>;
  /** Retrieve a single testimonialSection */
  testimonialSection?: Maybe<GraphCms_TestimonialSection>;
  /** Retrieve multiple testimonialSections using the Relay connection interface */
  testimonialSectionsConnection: GraphCms_TestimonialSectionConnection;
  /** Retrieve document version */
  testimonialSectionVersion?: Maybe<GraphCms_DocumentVersion>;
};


export type GraphCmsNodeArgs = {
  id: Scalars['ID'];
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAboutPagesArgs = {
  where?: Maybe<GraphCms_AboutPageWhereInput>;
  orderBy?: Maybe<GraphCms_AboutPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAboutPageArgs = {
  where: GraphCms_AboutPageWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAboutPagesConnectionArgs = {
  where?: Maybe<GraphCms_AboutPageWhereInput>;
  orderBy?: Maybe<GraphCms_AboutPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsAboutPageVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsActionSectionsArgs = {
  where?: Maybe<GraphCms_ActionSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ActionSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsActionSectionArgs = {
  where: GraphCms_ActionSectionWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsActionSectionsConnectionArgs = {
  where?: Maybe<GraphCms_ActionSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ActionSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsActionSectionVersionArgs = {
  where: GraphCms_VersionWhereInput;
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


export type GraphCmsBlogPagesArgs = {
  where?: Maybe<GraphCms_BlogPageWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogPageArgs = {
  where: GraphCms_BlogPageWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogPagesConnectionArgs = {
  where?: Maybe<GraphCms_BlogPageWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsBlogPageVersionArgs = {
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


export type GraphCmsCandidatePagesArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsCandidatePageArgs = {
  where: GraphCms_CandidatePageWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsCandidatePagesConnectionArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsCandidatePageVersionArgs = {
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


export type GraphCmsContactUsFormsArgs = {
  where?: Maybe<GraphCms_ContactUsFormWhereInput>;
  orderBy?: Maybe<GraphCms_ContactUsFormOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsContactUsFormArgs = {
  where: GraphCms_ContactUsFormWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsContactUsFormsConnectionArgs = {
  where?: Maybe<GraphCms_ContactUsFormWhereInput>;
  orderBy?: Maybe<GraphCms_ContactUsFormOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsContactUsFormVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsContactUsPagesArgs = {
  where?: Maybe<GraphCms_ContactUsPageWhereInput>;
  orderBy?: Maybe<GraphCms_ContactUsPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsContactUsPageArgs = {
  where: GraphCms_ContactUsPageWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsContactUsPagesConnectionArgs = {
  where?: Maybe<GraphCms_ContactUsPageWhereInput>;
  orderBy?: Maybe<GraphCms_ContactUsPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsContactUsPageVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsEmployerPagesArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsEmployerPageArgs = {
  where: GraphCms_EmployerPageWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsEmployerPagesConnectionArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsEmployerPageVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsIndexPagesArgs = {
  where?: Maybe<GraphCms_IndexPageWhereInput>;
  orderBy?: Maybe<GraphCms_IndexPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsIndexPageArgs = {
  where: GraphCms_IndexPageWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsIndexPagesConnectionArgs = {
  where?: Maybe<GraphCms_IndexPageWhereInput>;
  orderBy?: Maybe<GraphCms_IndexPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsIndexPageVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsInfoChecksArgs = {
  where?: Maybe<GraphCms_InfoCheckWhereInput>;
  orderBy?: Maybe<GraphCms_InfoCheckOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoCheckArgs = {
  where: GraphCms_InfoCheckWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoChecksConnectionArgs = {
  where?: Maybe<GraphCms_InfoCheckWhereInput>;
  orderBy?: Maybe<GraphCms_InfoCheckOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsInfoCheckVersionArgs = {
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


export type GraphCmsJobsArgs = {
  where?: Maybe<GraphCms_JobWhereInput>;
  orderBy?: Maybe<GraphCms_JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobArgs = {
  where: GraphCms_JobWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobsConnectionArgs = {
  where?: Maybe<GraphCms_JobWhereInput>;
  orderBy?: Maybe<GraphCms_JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsJobGroupsArgs = {
  where?: Maybe<GraphCms_JobGroupWhereInput>;
  orderBy?: Maybe<GraphCms_JobGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsJobGroupArgs = {
  where: GraphCms_JobGroupWhereUniqueInput;
  stage?: GraphCms_Stage;
};


export type GraphCmsJobGroupsConnectionArgs = {
  where?: Maybe<GraphCms_JobGroupWhereInput>;
  orderBy?: Maybe<GraphCms_JobGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
};


export type GraphCmsJobGroupVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsJobSectionsArgs = {
  where?: Maybe<GraphCms_JobSectionWhereInput>;
  orderBy?: Maybe<GraphCms_JobSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobSectionArgs = {
  where: GraphCms_JobSectionWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobSectionsConnectionArgs = {
  where?: Maybe<GraphCms_JobSectionWhereInput>;
  orderBy?: Maybe<GraphCms_JobSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobSectionVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsJobSectionTypesArgs = {
  where?: Maybe<GraphCms_JobSectionTypeWhereInput>;
  orderBy?: Maybe<GraphCms_JobSectionTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobSectionTypeArgs = {
  where: GraphCms_JobSectionTypeWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobSectionTypesConnectionArgs = {
  where?: Maybe<GraphCms_JobSectionTypeWhereInput>;
  orderBy?: Maybe<GraphCms_JobSectionTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobSectionTypeVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsJobTypesArgs = {
  where?: Maybe<GraphCms_JobTypeWhereInput>;
  orderBy?: Maybe<GraphCms_JobTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobTypeArgs = {
  where: GraphCms_JobTypeWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobTypesConnectionArgs = {
  where?: Maybe<GraphCms_JobTypeWhereInput>;
  orderBy?: Maybe<GraphCms_JobTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsJobTypeVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsProcessSectionsArgs = {
  where?: Maybe<GraphCms_ProcessSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessSectionArgs = {
  where: GraphCms_ProcessSectionWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessSectionsConnectionArgs = {
  where?: Maybe<GraphCms_ProcessSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessSectionVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsProcessSectionTypesArgs = {
  where?: Maybe<GraphCms_ProcessSectionTypeWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessSectionTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessSectionTypeArgs = {
  where: GraphCms_ProcessSectionTypeWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessSectionTypesConnectionArgs = {
  where?: Maybe<GraphCms_ProcessSectionTypeWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessSectionTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessSectionTypeVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsProcessStepsArgs = {
  where?: Maybe<GraphCms_ProcessStepWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessStepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessStepArgs = {
  where: GraphCms_ProcessStepWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessStepsConnectionArgs = {
  where?: Maybe<GraphCms_ProcessStepWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessStepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsProcessStepVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsTestimonialsArgs = {
  where?: Maybe<GraphCms_TestimonialWhereInput>;
  orderBy?: Maybe<GraphCms_TestimonialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsTestimonialArgs = {
  where: GraphCms_TestimonialWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsTestimonialsConnectionArgs = {
  where?: Maybe<GraphCms_TestimonialWhereInput>;
  orderBy?: Maybe<GraphCms_TestimonialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsTestimonialVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsTestimonialSectionsArgs = {
  where?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  orderBy?: Maybe<GraphCms_TestimonialSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsTestimonialSectionArgs = {
  where: GraphCms_TestimonialSectionWhereUniqueInput;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsTestimonialSectionsConnectionArgs = {
  where?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  orderBy?: Maybe<GraphCms_TestimonialSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  locales?: Array<GraphCms_Locale>;
};


export type GraphCmsTestimonialSectionVersionArgs = {
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

export type GraphCms_AboutPage = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_AboutPage>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_AboutPage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_Asset>;
  infoSections: Array<GraphCms_InfoSection>;
  actionSections: Array<GraphCms_ActionSection>;
  /** List of AboutPage versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_AboutPageLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_AboutPageDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_AboutPageCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_AboutPageUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_AboutPagePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_AboutPageInfoSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_AboutPageActionSectionsArgs = {
  where?: Maybe<GraphCms_ActionSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ActionSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_AboutPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_AboutPageConnectInput = {
  /** Document to connect */
  where: GraphCms_AboutPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_AboutPageConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_AboutPageEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_AboutPageCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  actionSections?: Maybe<GraphCms_ActionSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_AboutPageCreateLocalizationsInput>;
};

export type GraphCms_AboutPageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_AboutPageCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_AboutPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AboutPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_AboutPageCreateLocalizationInput>>;
};

export type GraphCms_AboutPageCreateManyInlineInput = {
  /** Create and connect multiple existing AboutPage documents */
  create?: Maybe<Array<GraphCms_AboutPageCreateInput>>;
  /** Connect multiple existing AboutPage documents */
  connect?: Maybe<Array<GraphCms_AboutPageWhereUniqueInput>>;
};

export type GraphCms_AboutPageCreateOneInlineInput = {
  /** Create and connect one AboutPage document */
  create?: Maybe<GraphCms_AboutPageCreateInput>;
  /** Connect one existing AboutPage document */
  connect?: Maybe<GraphCms_AboutPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_AboutPageEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_AboutPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_AboutPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AboutPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AboutPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AboutPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  actionSections_every?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_some?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_none?: Maybe<GraphCms_ActionSectionWhereInput>;
};

export type GraphCms_AboutPageOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'bannerTitle_ASC'
  | 'bannerTitle_DESC';

export type GraphCms_AboutPageUpdateInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  actionSections?: Maybe<GraphCms_ActionSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_AboutPageUpdateLocalizationsInput>;
};

export type GraphCms_AboutPageUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_AboutPageUpdateLocalizationInput = {
  data: GraphCms_AboutPageUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AboutPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_AboutPageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_AboutPageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_AboutPageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_AboutPageUpdateManyInlineInput = {
  /** Create and connect multiple AboutPage documents */
  create?: Maybe<Array<GraphCms_AboutPageCreateInput>>;
  /** Connect multiple existing AboutPage documents */
  connect?: Maybe<Array<GraphCms_AboutPageConnectInput>>;
  /** Override currently-connected documents with multiple existing AboutPage documents */
  set?: Maybe<Array<GraphCms_AboutPageWhereUniqueInput>>;
  /** Update multiple AboutPage documents */
  update?: Maybe<Array<GraphCms_AboutPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AboutPage documents */
  upsert?: Maybe<Array<GraphCms_AboutPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple AboutPage documents */
  disconnect?: Maybe<Array<GraphCms_AboutPageWhereUniqueInput>>;
  /** Delete multiple AboutPage documents */
  delete?: Maybe<Array<GraphCms_AboutPageWhereUniqueInput>>;
};

export type GraphCms_AboutPageUpdateManyInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_AboutPageUpdateManyLocalizationsInput>;
};

export type GraphCms_AboutPageUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_AboutPageUpdateManyLocalizationInput = {
  data: GraphCms_AboutPageUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AboutPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_AboutPageUpdateManyLocalizationInput>>;
};

export type GraphCms_AboutPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_AboutPageWhereInput;
  /** Update many input */
  data: GraphCms_AboutPageUpdateManyInput;
};

export type GraphCms_AboutPageUpdateOneInlineInput = {
  /** Create and connect one AboutPage document */
  create?: Maybe<GraphCms_AboutPageCreateInput>;
  /** Update single AboutPage document */
  update?: Maybe<GraphCms_AboutPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutPage document */
  upsert?: Maybe<GraphCms_AboutPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing AboutPage document */
  connect?: Maybe<GraphCms_AboutPageWhereUniqueInput>;
  /** Disconnect currently connected AboutPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected AboutPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_AboutPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_AboutPageWhereUniqueInput;
  /** Document to update */
  data: GraphCms_AboutPageUpdateInput;
};

export type GraphCms_AboutPageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_AboutPageCreateInput;
  /** Update document if it exists */
  update: GraphCms_AboutPageUpdateInput;
};

export type GraphCms_AboutPageUpsertLocalizationInput = {
  update: GraphCms_AboutPageUpdateLocalizationDataInput;
  create: GraphCms_AboutPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AboutPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_AboutPageWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_AboutPageUpsertInput;
};

/** Identifies documents */
export type GraphCms_AboutPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AboutPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AboutPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AboutPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  actionSections_every?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_some?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_none?: Maybe<GraphCms_ActionSectionWhereInput>;
};

/** References AboutPage record uniquely */
export type GraphCms_AboutPageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_ActionSection = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_ActionSection>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ActionSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  type?: Maybe<GraphCms_ActionSectionType>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  candidatePage: Array<GraphCms_CandidatePage>;
  employerPage: Array<GraphCms_EmployerPage>;
  aboutPage: Array<GraphCms_AboutPage>;
  /** List of ActionSection versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_ActionSectionLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_ActionSectionDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_ActionSectionCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ActionSectionUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ActionSectionPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ActionSectionCandidatePageArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ActionSectionEmployerPageArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ActionSectionAboutPageArgs = {
  where?: Maybe<GraphCms_AboutPageWhereInput>;
  orderBy?: Maybe<GraphCms_AboutPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ActionSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_ActionSectionConnectInput = {
  /** Document to connect */
  where: GraphCms_ActionSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_ActionSectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ActionSectionEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ActionSectionCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  type?: Maybe<GraphCms_ActionSectionType>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** subtitle input for default locale (fr) */
  subtitle?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  candidatePage?: Maybe<GraphCms_CandidatePageCreateManyInlineInput>;
  employerPage?: Maybe<GraphCms_EmployerPageCreateManyInlineInput>;
  aboutPage?: Maybe<GraphCms_AboutPageCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ActionSectionCreateLocalizationsInput>;
};

export type GraphCms_ActionSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
};

export type GraphCms_ActionSectionCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ActionSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ActionSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ActionSectionCreateLocalizationInput>>;
};

export type GraphCms_ActionSectionCreateManyInlineInput = {
  /** Create and connect multiple existing ActionSection documents */
  create?: Maybe<Array<GraphCms_ActionSectionCreateInput>>;
  /** Connect multiple existing ActionSection documents */
  connect?: Maybe<Array<GraphCms_ActionSectionWhereUniqueInput>>;
};

export type GraphCms_ActionSectionCreateOneInlineInput = {
  /** Create and connect one ActionSection document */
  create?: Maybe<GraphCms_ActionSectionCreateInput>;
  /** Connect one existing ActionSection document */
  connect?: Maybe<GraphCms_ActionSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_ActionSectionEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_ActionSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ActionSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ActionSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ActionSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ActionSectionWhereInput>>;
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
  type?: Maybe<GraphCms_ActionSectionType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GraphCms_ActionSectionType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GraphCms_ActionSectionType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GraphCms_ActionSectionType>>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
  employerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  aboutPage_every?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_some?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_none?: Maybe<GraphCms_AboutPageWhereInput>;
};

export type GraphCms_ActionSectionOrderByInput = 
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
  | 'titleHighlight_ASC'
  | 'titleHighlight_DESC'
  | 'subtitle_ASC'
  | 'subtitle_DESC'
  | 'actionText_ASC'
  | 'actionText_DESC';

export type GraphCms_ActionSectionType = 
  | 'default'
  | 'reversed';

export type GraphCms_ActionSectionUpdateInput = {
  type?: Maybe<GraphCms_ActionSectionType>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** subtitle input for default locale (fr) */
  subtitle?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  candidatePage?: Maybe<GraphCms_CandidatePageUpdateManyInlineInput>;
  employerPage?: Maybe<GraphCms_EmployerPageUpdateManyInlineInput>;
  aboutPage?: Maybe<GraphCms_AboutPageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ActionSectionUpdateLocalizationsInput>;
};

export type GraphCms_ActionSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
};

export type GraphCms_ActionSectionUpdateLocalizationInput = {
  data: GraphCms_ActionSectionUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ActionSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ActionSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ActionSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ActionSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ActionSectionUpdateManyInlineInput = {
  /** Create and connect multiple ActionSection documents */
  create?: Maybe<Array<GraphCms_ActionSectionCreateInput>>;
  /** Connect multiple existing ActionSection documents */
  connect?: Maybe<Array<GraphCms_ActionSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing ActionSection documents */
  set?: Maybe<Array<GraphCms_ActionSectionWhereUniqueInput>>;
  /** Update multiple ActionSection documents */
  update?: Maybe<Array<GraphCms_ActionSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ActionSection documents */
  upsert?: Maybe<Array<GraphCms_ActionSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ActionSection documents */
  disconnect?: Maybe<Array<GraphCms_ActionSectionWhereUniqueInput>>;
  /** Delete multiple ActionSection documents */
  delete?: Maybe<Array<GraphCms_ActionSectionWhereUniqueInput>>;
};

export type GraphCms_ActionSectionUpdateManyInput = {
  type?: Maybe<GraphCms_ActionSectionType>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** subtitle input for default locale (fr) */
  subtitle?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_ActionSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_ActionSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
};

export type GraphCms_ActionSectionUpdateManyLocalizationInput = {
  data: GraphCms_ActionSectionUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ActionSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ActionSectionUpdateManyLocalizationInput>>;
};

export type GraphCms_ActionSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ActionSectionWhereInput;
  /** Update many input */
  data: GraphCms_ActionSectionUpdateManyInput;
};

export type GraphCms_ActionSectionUpdateOneInlineInput = {
  /** Create and connect one ActionSection document */
  create?: Maybe<GraphCms_ActionSectionCreateInput>;
  /** Update single ActionSection document */
  update?: Maybe<GraphCms_ActionSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ActionSection document */
  upsert?: Maybe<GraphCms_ActionSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ActionSection document */
  connect?: Maybe<GraphCms_ActionSectionWhereUniqueInput>;
  /** Disconnect currently connected ActionSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ActionSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_ActionSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ActionSectionWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ActionSectionUpdateInput;
};

export type GraphCms_ActionSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ActionSectionCreateInput;
  /** Update document if it exists */
  update: GraphCms_ActionSectionUpdateInput;
};

export type GraphCms_ActionSectionUpsertLocalizationInput = {
  update: GraphCms_ActionSectionUpdateLocalizationDataInput;
  create: GraphCms_ActionSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ActionSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ActionSectionWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ActionSectionUpsertInput;
};

/** Identifies documents */
export type GraphCms_ActionSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ActionSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ActionSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ActionSectionWhereInput>>;
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
  type?: Maybe<GraphCms_ActionSectionType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<GraphCms_ActionSectionType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GraphCms_ActionSectionType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GraphCms_ActionSectionType>>;
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
  subtitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars['String']>;
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
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
  employerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  aboutPage_every?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_some?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_none?: Maybe<GraphCms_AboutPageWhereInput>;
};

/** References ActionSection record uniquely */
export type GraphCms_ActionSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

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
  bannerImageIndexPage: Array<GraphCms_IndexPage>;
  infoSectionImage: Array<GraphCms_InfoSection>;
  blogPostImage: Array<GraphCms_BlogPost>;
  bannerImageEmployerPage: Array<GraphCms_EmployerPage>;
  bannerImageCandidatePage: Array<GraphCms_CandidatePage>;
  companyMediaFavicon: Array<GraphCms_CompanyMedia>;
  aboutPageBannerImage: Array<GraphCms_AboutPage>;
  contactUsPageBannerImage: Array<GraphCms_ContactUsPage>;
  blogPageBannerImage: Array<GraphCms_BlogPage>;
  infoSectionImages: Array<GraphCms_InfoSection>;
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
export type GraphCms_AssetBannerImageIndexPageArgs = {
  where?: Maybe<GraphCms_IndexPageWhereInput>;
  orderBy?: Maybe<GraphCms_IndexPageOrderByInput>;
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
export type GraphCms_AssetBannerImageEmployerPageArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetBannerImageCandidatePageArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetCompanyMediaFaviconArgs = {
  where?: Maybe<GraphCms_CompanyMediaWhereInput>;
  orderBy?: Maybe<GraphCms_CompanyMediaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetAboutPageBannerImageArgs = {
  where?: Maybe<GraphCms_AboutPageWhereInput>;
  orderBy?: Maybe<GraphCms_AboutPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetContactUsPageBannerImageArgs = {
  where?: Maybe<GraphCms_ContactUsPageWhereInput>;
  orderBy?: Maybe<GraphCms_ContactUsPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetBlogPageBannerImageArgs = {
  where?: Maybe<GraphCms_BlogPageWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type GraphCms_AssetInfoSectionImagesArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
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
  bannerImageIndexPage?: Maybe<GraphCms_IndexPageCreateManyInlineInput>;
  infoSectionImage?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  blogPostImage?: Maybe<GraphCms_BlogPostCreateManyInlineInput>;
  bannerImageEmployerPage?: Maybe<GraphCms_EmployerPageCreateManyInlineInput>;
  bannerImageCandidatePage?: Maybe<GraphCms_CandidatePageCreateManyInlineInput>;
  companyMediaFavicon?: Maybe<GraphCms_CompanyMediaCreateManyInlineInput>;
  aboutPageBannerImage?: Maybe<GraphCms_AboutPageCreateManyInlineInput>;
  contactUsPageBannerImage?: Maybe<GraphCms_ContactUsPageCreateManyInlineInput>;
  blogPageBannerImage?: Maybe<GraphCms_BlogPageCreateManyInlineInput>;
  infoSectionImages?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
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
  bannerImageIndexPage_every?: Maybe<GraphCms_IndexPageWhereInput>;
  bannerImageIndexPage_some?: Maybe<GraphCms_IndexPageWhereInput>;
  bannerImageIndexPage_none?: Maybe<GraphCms_IndexPageWhereInput>;
  infoSectionImage_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  blogPostImage_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_none?: Maybe<GraphCms_BlogPostWhereInput>;
  bannerImageEmployerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  bannerImageEmployerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  bannerImageEmployerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  bannerImageCandidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  bannerImageCandidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  bannerImageCandidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
  companyMediaFavicon_every?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaFavicon_some?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaFavicon_none?: Maybe<GraphCms_CompanyMediaWhereInput>;
  aboutPageBannerImage_every?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPageBannerImage_some?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPageBannerImage_none?: Maybe<GraphCms_AboutPageWhereInput>;
  contactUsPageBannerImage_every?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPageBannerImage_some?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPageBannerImage_none?: Maybe<GraphCms_ContactUsPageWhereInput>;
  blogPageBannerImage_every?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPageBannerImage_some?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPageBannerImage_none?: Maybe<GraphCms_BlogPageWhereInput>;
  infoSectionImages_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImages_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImages_none?: Maybe<GraphCms_InfoSectionWhereInput>;
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
  bannerImageIndexPage?: Maybe<GraphCms_IndexPageUpdateManyInlineInput>;
  infoSectionImage?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  blogPostImage?: Maybe<GraphCms_BlogPostUpdateManyInlineInput>;
  bannerImageEmployerPage?: Maybe<GraphCms_EmployerPageUpdateManyInlineInput>;
  bannerImageCandidatePage?: Maybe<GraphCms_CandidatePageUpdateManyInlineInput>;
  companyMediaFavicon?: Maybe<GraphCms_CompanyMediaUpdateManyInlineInput>;
  aboutPageBannerImage?: Maybe<GraphCms_AboutPageUpdateManyInlineInput>;
  contactUsPageBannerImage?: Maybe<GraphCms_ContactUsPageUpdateManyInlineInput>;
  blogPageBannerImage?: Maybe<GraphCms_BlogPageUpdateManyInlineInput>;
  infoSectionImages?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
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
  bannerImageIndexPage_every?: Maybe<GraphCms_IndexPageWhereInput>;
  bannerImageIndexPage_some?: Maybe<GraphCms_IndexPageWhereInput>;
  bannerImageIndexPage_none?: Maybe<GraphCms_IndexPageWhereInput>;
  infoSectionImage_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImage_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  blogPostImage_every?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_some?: Maybe<GraphCms_BlogPostWhereInput>;
  blogPostImage_none?: Maybe<GraphCms_BlogPostWhereInput>;
  bannerImageEmployerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  bannerImageEmployerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  bannerImageEmployerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  bannerImageCandidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  bannerImageCandidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  bannerImageCandidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
  companyMediaFavicon_every?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaFavicon_some?: Maybe<GraphCms_CompanyMediaWhereInput>;
  companyMediaFavicon_none?: Maybe<GraphCms_CompanyMediaWhereInput>;
  aboutPageBannerImage_every?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPageBannerImage_some?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPageBannerImage_none?: Maybe<GraphCms_AboutPageWhereInput>;
  contactUsPageBannerImage_every?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPageBannerImage_some?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPageBannerImage_none?: Maybe<GraphCms_ContactUsPageWhereInput>;
  blogPageBannerImage_every?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPageBannerImage_some?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPageBannerImage_none?: Maybe<GraphCms_BlogPageWhereInput>;
  infoSectionImages_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImages_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSectionImages_none?: Maybe<GraphCms_InfoSectionWhereInput>;
};

/** References Asset record uniquely */
export type GraphCms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GraphCMS_Long'];
};

export type GraphCms_BlogPage = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_BlogPage>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_BlogPage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_Asset>;
  blogSection?: Maybe<GraphCms_BlogSection>;
  /** List of BlogPage versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_BlogPageLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_BlogPageDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_BlogPageCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogPageUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogPagePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_BlogPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_BlogPageConnectInput = {
  /** Document to connect */
  where: GraphCms_BlogPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_BlogPageConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_BlogPageEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_BlogPageCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  blogSection?: Maybe<GraphCms_BlogSectionCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogPageCreateLocalizationsInput>;
};

export type GraphCms_BlogPageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogPageCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_BlogPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_BlogPageCreateLocalizationInput>>;
};

export type GraphCms_BlogPageCreateManyInlineInput = {
  /** Create and connect multiple existing BlogPage documents */
  create?: Maybe<Array<GraphCms_BlogPageCreateInput>>;
  /** Connect multiple existing BlogPage documents */
  connect?: Maybe<Array<GraphCms_BlogPageWhereUniqueInput>>;
};

export type GraphCms_BlogPageCreateOneInlineInput = {
  /** Create and connect one BlogPage document */
  create?: Maybe<GraphCms_BlogPageCreateInput>;
  /** Connect one existing BlogPage document */
  connect?: Maybe<GraphCms_BlogPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_BlogPageEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_BlogPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_BlogPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  blogSection?: Maybe<GraphCms_BlogSectionWhereInput>;
};

export type GraphCms_BlogPageOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'bannerTitle_ASC'
  | 'bannerTitle_DESC';

export type GraphCms_BlogPageUpdateInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  blogSection?: Maybe<GraphCms_BlogSectionUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogPageUpdateLocalizationsInput>;
};

export type GraphCms_BlogPageUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogPageUpdateLocalizationInput = {
  data: GraphCms_BlogPageUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_BlogPageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogPageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_BlogPageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_BlogPageUpdateManyInlineInput = {
  /** Create and connect multiple BlogPage documents */
  create?: Maybe<Array<GraphCms_BlogPageCreateInput>>;
  /** Connect multiple existing BlogPage documents */
  connect?: Maybe<Array<GraphCms_BlogPageConnectInput>>;
  /** Override currently-connected documents with multiple existing BlogPage documents */
  set?: Maybe<Array<GraphCms_BlogPageWhereUniqueInput>>;
  /** Update multiple BlogPage documents */
  update?: Maybe<Array<GraphCms_BlogPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BlogPage documents */
  upsert?: Maybe<Array<GraphCms_BlogPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple BlogPage documents */
  disconnect?: Maybe<Array<GraphCms_BlogPageWhereUniqueInput>>;
  /** Delete multiple BlogPage documents */
  delete?: Maybe<Array<GraphCms_BlogPageWhereUniqueInput>>;
};

export type GraphCms_BlogPageUpdateManyInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_BlogPageUpdateManyLocalizationsInput>;
};

export type GraphCms_BlogPageUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogPageUpdateManyLocalizationInput = {
  data: GraphCms_BlogPageUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_BlogPageUpdateManyLocalizationInput>>;
};

export type GraphCms_BlogPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_BlogPageWhereInput;
  /** Update many input */
  data: GraphCms_BlogPageUpdateManyInput;
};

export type GraphCms_BlogPageUpdateOneInlineInput = {
  /** Create and connect one BlogPage document */
  create?: Maybe<GraphCms_BlogPageCreateInput>;
  /** Update single BlogPage document */
  update?: Maybe<GraphCms_BlogPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BlogPage document */
  upsert?: Maybe<GraphCms_BlogPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing BlogPage document */
  connect?: Maybe<GraphCms_BlogPageWhereUniqueInput>;
  /** Disconnect currently connected BlogPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected BlogPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_BlogPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogPageWhereUniqueInput;
  /** Document to update */
  data: GraphCms_BlogPageUpdateInput;
};

export type GraphCms_BlogPageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_BlogPageCreateInput;
  /** Update document if it exists */
  update: GraphCms_BlogPageUpdateInput;
};

export type GraphCms_BlogPageUpsertLocalizationInput = {
  update: GraphCms_BlogPageUpdateLocalizationDataInput;
  create: GraphCms_BlogPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_BlogPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_BlogPageWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_BlogPageUpsertInput;
};

/** Identifies documents */
export type GraphCms_BlogPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BlogPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BlogPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BlogPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  blogSection?: Maybe<GraphCms_BlogSectionWhereInput>;
};

/** References BlogPage record uniquely */
export type GraphCms_BlogPageWhereUniqueInput = {
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
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
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
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** subTitle input for default locale (fr) */
  subTitle?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  /** content input for default locale (fr) */
  content?: Maybe<Scalars['String']>;
  blogSection?: Maybe<GraphCms_BlogSectionCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogPostCreateLocalizationsInput>;
};

export type GraphCms_BlogPostCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
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
  | 'subTitle_ASC'
  | 'subTitle_DESC'
  | 'content_ASC'
  | 'content_DESC';

export type GraphCms_BlogPostUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** subTitle input for default locale (fr) */
  subTitle?: Maybe<Scalars['String']>;
  image?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  /** content input for default locale (fr) */
  content?: Maybe<Scalars['String']>;
  blogSection?: Maybe<GraphCms_BlogSectionUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogPostUpdateLocalizationsInput>;
};

export type GraphCms_BlogPostUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
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
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** subTitle input for default locale (fr) */
  subTitle?: Maybe<Scalars['String']>;
  /** content input for default locale (fr) */
  content?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_BlogPostUpdateManyLocalizationsInput>;
};

export type GraphCms_BlogPostUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
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
  titleHighlight?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionLabel?: Maybe<Scalars['String']>;
  posts: Array<GraphCms_BlogPost>;
  indexPage: Array<GraphCms_IndexPage>;
  blogPage: Array<GraphCms_BlogPage>;
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


export type GraphCms_BlogSectionPostsArgs = {
  where?: Maybe<GraphCms_BlogPostWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_BlogSectionIndexPageArgs = {
  where?: Maybe<GraphCms_IndexPageWhereInput>;
  orderBy?: Maybe<GraphCms_IndexPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_BlogSectionBlogPageArgs = {
  where?: Maybe<GraphCms_BlogPageWhereInput>;
  orderBy?: Maybe<GraphCms_BlogPageOrderByInput>;
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
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** actionLabel input for default locale (fr) */
  actionLabel?: Maybe<Scalars['String']>;
  posts?: Maybe<GraphCms_BlogPostCreateManyInlineInput>;
  indexPage?: Maybe<GraphCms_IndexPageCreateManyInlineInput>;
  blogPage?: Maybe<GraphCms_BlogPageCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_BlogSectionCreateLocalizationsInput>;
};

export type GraphCms_BlogSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
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
  posts_every?: Maybe<GraphCms_BlogPostWhereInput>;
  posts_some?: Maybe<GraphCms_BlogPostWhereInput>;
  posts_none?: Maybe<GraphCms_BlogPostWhereInput>;
  indexPage_every?: Maybe<GraphCms_IndexPageWhereInput>;
  indexPage_some?: Maybe<GraphCms_IndexPageWhereInput>;
  indexPage_none?: Maybe<GraphCms_IndexPageWhereInput>;
  blogPage_every?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPage_some?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPage_none?: Maybe<GraphCms_BlogPageWhereInput>;
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
  | 'titleHighlight_ASC'
  | 'titleHighlight_DESC'
  | 'text_ASC'
  | 'text_DESC'
  | 'actionLabel_ASC'
  | 'actionLabel_DESC';

export type GraphCms_BlogSectionUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** actionLabel input for default locale (fr) */
  actionLabel?: Maybe<Scalars['String']>;
  posts?: Maybe<GraphCms_BlogPostUpdateManyInlineInput>;
  indexPage?: Maybe<GraphCms_IndexPageUpdateManyInlineInput>;
  blogPage?: Maybe<GraphCms_BlogPageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_BlogSectionUpdateLocalizationsInput>;
};

export type GraphCms_BlogSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
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
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** actionLabel input for default locale (fr) */
  actionLabel?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_BlogSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_BlogSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
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
  posts_every?: Maybe<GraphCms_BlogPostWhereInput>;
  posts_some?: Maybe<GraphCms_BlogPostWhereInput>;
  posts_none?: Maybe<GraphCms_BlogPostWhereInput>;
  indexPage_every?: Maybe<GraphCms_IndexPageWhereInput>;
  indexPage_some?: Maybe<GraphCms_IndexPageWhereInput>;
  indexPage_none?: Maybe<GraphCms_IndexPageWhereInput>;
  blogPage_every?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPage_some?: Maybe<GraphCms_BlogPageWhereInput>;
  blogPage_none?: Maybe<GraphCms_BlogPageWhereInput>;
};

/** References BlogSection record uniquely */
export type GraphCms_BlogSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_CandidatePage = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_CandidatePage>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_CandidatePage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_Asset>;
  actionSections: Array<GraphCms_ActionSection>;
  infoSections: Array<GraphCms_InfoSection>;
  jobSection?: Maybe<GraphCms_JobSection>;
  processSection?: Maybe<GraphCms_ProcessSection>;
  /** List of CandidatePage versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_CandidatePageLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_CandidatePageDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_CandidatePageCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_CandidatePageUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_CandidatePagePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_CandidatePageActionSectionsArgs = {
  where?: Maybe<GraphCms_ActionSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ActionSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_CandidatePageInfoSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_CandidatePageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_CandidatePageConnectInput = {
  /** Document to connect */
  where: GraphCms_CandidatePageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_CandidatePageConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_CandidatePageEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_CandidatePageCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  actionSections?: Maybe<GraphCms_ActionSectionCreateManyInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  jobSection?: Maybe<GraphCms_JobSectionCreateOneInlineInput>;
  processSection?: Maybe<GraphCms_ProcessSectionCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_CandidatePageCreateLocalizationsInput>;
};

export type GraphCms_CandidatePageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_CandidatePageCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_CandidatePageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CandidatePageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_CandidatePageCreateLocalizationInput>>;
};

export type GraphCms_CandidatePageCreateManyInlineInput = {
  /** Create and connect multiple existing CandidatePage documents */
  create?: Maybe<Array<GraphCms_CandidatePageCreateInput>>;
  /** Connect multiple existing CandidatePage documents */
  connect?: Maybe<Array<GraphCms_CandidatePageWhereUniqueInput>>;
};

export type GraphCms_CandidatePageCreateOneInlineInput = {
  /** Create and connect one CandidatePage document */
  create?: Maybe<GraphCms_CandidatePageCreateInput>;
  /** Connect one existing CandidatePage document */
  connect?: Maybe<GraphCms_CandidatePageWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_CandidatePageEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_CandidatePage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_CandidatePageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CandidatePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CandidatePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CandidatePageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  actionSections_every?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_some?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_none?: Maybe<GraphCms_ActionSectionWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  jobSection?: Maybe<GraphCms_JobSectionWhereInput>;
  processSection?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

export type GraphCms_CandidatePageOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'bannerTitle_ASC'
  | 'bannerTitle_DESC';

export type GraphCms_CandidatePageUpdateInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  actionSections?: Maybe<GraphCms_ActionSectionUpdateManyInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  jobSection?: Maybe<GraphCms_JobSectionUpdateOneInlineInput>;
  processSection?: Maybe<GraphCms_ProcessSectionUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_CandidatePageUpdateLocalizationsInput>;
};

export type GraphCms_CandidatePageUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_CandidatePageUpdateLocalizationInput = {
  data: GraphCms_CandidatePageUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CandidatePageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_CandidatePageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_CandidatePageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_CandidatePageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_CandidatePageUpdateManyInlineInput = {
  /** Create and connect multiple CandidatePage documents */
  create?: Maybe<Array<GraphCms_CandidatePageCreateInput>>;
  /** Connect multiple existing CandidatePage documents */
  connect?: Maybe<Array<GraphCms_CandidatePageConnectInput>>;
  /** Override currently-connected documents with multiple existing CandidatePage documents */
  set?: Maybe<Array<GraphCms_CandidatePageWhereUniqueInput>>;
  /** Update multiple CandidatePage documents */
  update?: Maybe<Array<GraphCms_CandidatePageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CandidatePage documents */
  upsert?: Maybe<Array<GraphCms_CandidatePageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple CandidatePage documents */
  disconnect?: Maybe<Array<GraphCms_CandidatePageWhereUniqueInput>>;
  /** Delete multiple CandidatePage documents */
  delete?: Maybe<Array<GraphCms_CandidatePageWhereUniqueInput>>;
};

export type GraphCms_CandidatePageUpdateManyInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_CandidatePageUpdateManyLocalizationsInput>;
};

export type GraphCms_CandidatePageUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_CandidatePageUpdateManyLocalizationInput = {
  data: GraphCms_CandidatePageUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CandidatePageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_CandidatePageUpdateManyLocalizationInput>>;
};

export type GraphCms_CandidatePageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_CandidatePageWhereInput;
  /** Update many input */
  data: GraphCms_CandidatePageUpdateManyInput;
};

export type GraphCms_CandidatePageUpdateOneInlineInput = {
  /** Create and connect one CandidatePage document */
  create?: Maybe<GraphCms_CandidatePageCreateInput>;
  /** Update single CandidatePage document */
  update?: Maybe<GraphCms_CandidatePageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CandidatePage document */
  upsert?: Maybe<GraphCms_CandidatePageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing CandidatePage document */
  connect?: Maybe<GraphCms_CandidatePageWhereUniqueInput>;
  /** Disconnect currently connected CandidatePage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected CandidatePage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_CandidatePageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CandidatePageWhereUniqueInput;
  /** Document to update */
  data: GraphCms_CandidatePageUpdateInput;
};

export type GraphCms_CandidatePageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_CandidatePageCreateInput;
  /** Update document if it exists */
  update: GraphCms_CandidatePageUpdateInput;
};

export type GraphCms_CandidatePageUpsertLocalizationInput = {
  update: GraphCms_CandidatePageUpdateLocalizationDataInput;
  create: GraphCms_CandidatePageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_CandidatePageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_CandidatePageWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_CandidatePageUpsertInput;
};

/** Identifies documents */
export type GraphCms_CandidatePageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_CandidatePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_CandidatePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_CandidatePageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  actionSections_every?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_some?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_none?: Maybe<GraphCms_ActionSectionWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  jobSection?: Maybe<GraphCms_JobSectionWhereInput>;
  processSection?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

/** References CandidatePage record uniquely */
export type GraphCms_CandidatePageWhereUniqueInput = {
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
  logo?: Maybe<GraphCms_Asset>;
  logoFooter?: Maybe<GraphCms_Asset>;
  favicon?: Maybe<GraphCms_Asset>;
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
  logo?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  logoFooter?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  favicon?: Maybe<GraphCms_AssetCreateOneInlineInput>;
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
  logo?: Maybe<GraphCms_AssetWhereInput>;
  logoFooter?: Maybe<GraphCms_AssetWhereInput>;
  favicon?: Maybe<GraphCms_AssetWhereInput>;
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
  logo?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  logoFooter?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  favicon?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
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
  logo?: Maybe<GraphCms_AssetWhereInput>;
  logoFooter?: Maybe<GraphCms_AssetWhereInput>;
  favicon?: Maybe<GraphCms_AssetWhereInput>;
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

export type GraphCms_ContactUsForm = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_ContactUsForm>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ContactUsForm>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  contactUsPage?: Maybe<GraphCms_ContactUsPage>;
  /** List of ContactUsForm versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_ContactUsFormLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_ContactUsFormDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_ContactUsFormCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ContactUsFormUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ContactUsFormPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ContactUsFormHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_ContactUsFormConnectInput = {
  /** Document to connect */
  where: GraphCms_ContactUsFormWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_ContactUsFormConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ContactUsFormEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ContactUsFormCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  contactUsPage?: Maybe<GraphCms_ContactUsPageCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ContactUsFormCreateLocalizationsInput>;
};

export type GraphCms_ContactUsFormCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
};

export type GraphCms_ContactUsFormCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ContactUsFormCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsFormCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ContactUsFormCreateLocalizationInput>>;
};

export type GraphCms_ContactUsFormCreateManyInlineInput = {
  /** Create and connect multiple existing ContactUsForm documents */
  create?: Maybe<Array<GraphCms_ContactUsFormCreateInput>>;
  /** Connect multiple existing ContactUsForm documents */
  connect?: Maybe<Array<GraphCms_ContactUsFormWhereUniqueInput>>;
};

export type GraphCms_ContactUsFormCreateOneInlineInput = {
  /** Create and connect one ContactUsForm document */
  create?: Maybe<GraphCms_ContactUsFormCreateInput>;
  /** Connect one existing ContactUsForm document */
  connect?: Maybe<GraphCms_ContactUsFormWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_ContactUsFormEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_ContactUsForm;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ContactUsFormManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ContactUsFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ContactUsFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ContactUsFormWhereInput>>;
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
  contactUsPage?: Maybe<GraphCms_ContactUsPageWhereInput>;
};

export type GraphCms_ContactUsFormOrderByInput = 
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
  | 'actionText_ASC'
  | 'actionText_DESC';

export type GraphCms_ContactUsFormUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  contactUsPage?: Maybe<GraphCms_ContactUsPageUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ContactUsFormUpdateLocalizationsInput>;
};

export type GraphCms_ContactUsFormUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
};

export type GraphCms_ContactUsFormUpdateLocalizationInput = {
  data: GraphCms_ContactUsFormUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsFormUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ContactUsFormCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ContactUsFormUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ContactUsFormUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ContactUsFormUpdateManyInlineInput = {
  /** Create and connect multiple ContactUsForm documents */
  create?: Maybe<Array<GraphCms_ContactUsFormCreateInput>>;
  /** Connect multiple existing ContactUsForm documents */
  connect?: Maybe<Array<GraphCms_ContactUsFormConnectInput>>;
  /** Override currently-connected documents with multiple existing ContactUsForm documents */
  set?: Maybe<Array<GraphCms_ContactUsFormWhereUniqueInput>>;
  /** Update multiple ContactUsForm documents */
  update?: Maybe<Array<GraphCms_ContactUsFormUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactUsForm documents */
  upsert?: Maybe<Array<GraphCms_ContactUsFormUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ContactUsForm documents */
  disconnect?: Maybe<Array<GraphCms_ContactUsFormWhereUniqueInput>>;
  /** Delete multiple ContactUsForm documents */
  delete?: Maybe<Array<GraphCms_ContactUsFormWhereUniqueInput>>;
};

export type GraphCms_ContactUsFormUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_ContactUsFormUpdateManyLocalizationsInput>;
};

export type GraphCms_ContactUsFormUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
};

export type GraphCms_ContactUsFormUpdateManyLocalizationInput = {
  data: GraphCms_ContactUsFormUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsFormUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ContactUsFormUpdateManyLocalizationInput>>;
};

export type GraphCms_ContactUsFormUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ContactUsFormWhereInput;
  /** Update many input */
  data: GraphCms_ContactUsFormUpdateManyInput;
};

export type GraphCms_ContactUsFormUpdateOneInlineInput = {
  /** Create and connect one ContactUsForm document */
  create?: Maybe<GraphCms_ContactUsFormCreateInput>;
  /** Update single ContactUsForm document */
  update?: Maybe<GraphCms_ContactUsFormUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactUsForm document */
  upsert?: Maybe<GraphCms_ContactUsFormUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ContactUsForm document */
  connect?: Maybe<GraphCms_ContactUsFormWhereUniqueInput>;
  /** Disconnect currently connected ContactUsForm document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ContactUsForm document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_ContactUsFormUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ContactUsFormWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ContactUsFormUpdateInput;
};

export type GraphCms_ContactUsFormUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ContactUsFormCreateInput;
  /** Update document if it exists */
  update: GraphCms_ContactUsFormUpdateInput;
};

export type GraphCms_ContactUsFormUpsertLocalizationInput = {
  update: GraphCms_ContactUsFormUpdateLocalizationDataInput;
  create: GraphCms_ContactUsFormCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsFormUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ContactUsFormWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ContactUsFormUpsertInput;
};

/** Identifies documents */
export type GraphCms_ContactUsFormWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ContactUsFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ContactUsFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ContactUsFormWhereInput>>;
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
  contactUsPage?: Maybe<GraphCms_ContactUsPageWhereInput>;
};

/** References ContactUsForm record uniquely */
export type GraphCms_ContactUsFormWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_ContactUsPage = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_ContactUsPage>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ContactUsPage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_Asset>;
  infoSections: Array<GraphCms_InfoSection>;
  form?: Maybe<GraphCms_ContactUsForm>;
  /** List of ContactUsPage versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_ContactUsPageLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_ContactUsPageDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_ContactUsPageCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ContactUsPageUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ContactUsPagePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ContactUsPageInfoSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ContactUsPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_ContactUsPageConnectInput = {
  /** Document to connect */
  where: GraphCms_ContactUsPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_ContactUsPageConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ContactUsPageEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ContactUsPageCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  form?: Maybe<GraphCms_ContactUsFormCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ContactUsPageCreateLocalizationsInput>;
};

export type GraphCms_ContactUsPageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_ContactUsPageCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ContactUsPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ContactUsPageCreateLocalizationInput>>;
};

export type GraphCms_ContactUsPageCreateManyInlineInput = {
  /** Create and connect multiple existing ContactUsPage documents */
  create?: Maybe<Array<GraphCms_ContactUsPageCreateInput>>;
  /** Connect multiple existing ContactUsPage documents */
  connect?: Maybe<Array<GraphCms_ContactUsPageWhereUniqueInput>>;
};

export type GraphCms_ContactUsPageCreateOneInlineInput = {
  /** Create and connect one ContactUsPage document */
  create?: Maybe<GraphCms_ContactUsPageCreateInput>;
  /** Connect one existing ContactUsPage document */
  connect?: Maybe<GraphCms_ContactUsPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_ContactUsPageEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_ContactUsPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ContactUsPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ContactUsPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ContactUsPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ContactUsPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  form?: Maybe<GraphCms_ContactUsFormWhereInput>;
};

export type GraphCms_ContactUsPageOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'bannerTitle_ASC'
  | 'bannerTitle_DESC';

export type GraphCms_ContactUsPageUpdateInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  form?: Maybe<GraphCms_ContactUsFormUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ContactUsPageUpdateLocalizationsInput>;
};

export type GraphCms_ContactUsPageUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_ContactUsPageUpdateLocalizationInput = {
  data: GraphCms_ContactUsPageUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ContactUsPageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ContactUsPageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ContactUsPageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ContactUsPageUpdateManyInlineInput = {
  /** Create and connect multiple ContactUsPage documents */
  create?: Maybe<Array<GraphCms_ContactUsPageCreateInput>>;
  /** Connect multiple existing ContactUsPage documents */
  connect?: Maybe<Array<GraphCms_ContactUsPageConnectInput>>;
  /** Override currently-connected documents with multiple existing ContactUsPage documents */
  set?: Maybe<Array<GraphCms_ContactUsPageWhereUniqueInput>>;
  /** Update multiple ContactUsPage documents */
  update?: Maybe<Array<GraphCms_ContactUsPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactUsPage documents */
  upsert?: Maybe<Array<GraphCms_ContactUsPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ContactUsPage documents */
  disconnect?: Maybe<Array<GraphCms_ContactUsPageWhereUniqueInput>>;
  /** Delete multiple ContactUsPage documents */
  delete?: Maybe<Array<GraphCms_ContactUsPageWhereUniqueInput>>;
};

export type GraphCms_ContactUsPageUpdateManyInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_ContactUsPageUpdateManyLocalizationsInput>;
};

export type GraphCms_ContactUsPageUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_ContactUsPageUpdateManyLocalizationInput = {
  data: GraphCms_ContactUsPageUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ContactUsPageUpdateManyLocalizationInput>>;
};

export type GraphCms_ContactUsPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ContactUsPageWhereInput;
  /** Update many input */
  data: GraphCms_ContactUsPageUpdateManyInput;
};

export type GraphCms_ContactUsPageUpdateOneInlineInput = {
  /** Create and connect one ContactUsPage document */
  create?: Maybe<GraphCms_ContactUsPageCreateInput>;
  /** Update single ContactUsPage document */
  update?: Maybe<GraphCms_ContactUsPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactUsPage document */
  upsert?: Maybe<GraphCms_ContactUsPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ContactUsPage document */
  connect?: Maybe<GraphCms_ContactUsPageWhereUniqueInput>;
  /** Disconnect currently connected ContactUsPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ContactUsPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_ContactUsPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ContactUsPageWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ContactUsPageUpdateInput;
};

export type GraphCms_ContactUsPageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ContactUsPageCreateInput;
  /** Update document if it exists */
  update: GraphCms_ContactUsPageUpdateInput;
};

export type GraphCms_ContactUsPageUpsertLocalizationInput = {
  update: GraphCms_ContactUsPageUpdateLocalizationDataInput;
  create: GraphCms_ContactUsPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ContactUsPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ContactUsPageWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ContactUsPageUpsertInput;
};

/** Identifies documents */
export type GraphCms_ContactUsPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ContactUsPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ContactUsPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ContactUsPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  form?: Maybe<GraphCms_ContactUsFormWhereInput>;
};

/** References ContactUsPage record uniquely */
export type GraphCms_ContactUsPageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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

export type GraphCms_EmployerPage = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_EmployerPage>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_EmployerPage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_Asset>;
  actionSections: Array<GraphCms_ActionSection>;
  infoSections: Array<GraphCms_InfoSection>;
  jobSection?: Maybe<GraphCms_JobSection>;
  processSection?: Maybe<GraphCms_ProcessSection>;
  /** List of EmployerPage versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_EmployerPageLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_EmployerPageDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_EmployerPageCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_EmployerPageUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_EmployerPagePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_EmployerPageActionSectionsArgs = {
  where?: Maybe<GraphCms_ActionSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ActionSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_EmployerPageInfoSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_EmployerPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_EmployerPageConnectInput = {
  /** Document to connect */
  where: GraphCms_EmployerPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_EmployerPageConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_EmployerPageEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_EmployerPageCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateOneInlineInput>;
  actionSections?: Maybe<GraphCms_ActionSectionCreateManyInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  jobSection?: Maybe<GraphCms_JobSectionCreateOneInlineInput>;
  processSection?: Maybe<GraphCms_ProcessSectionCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_EmployerPageCreateLocalizationsInput>;
};

export type GraphCms_EmployerPageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_EmployerPageCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_EmployerPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployerPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_EmployerPageCreateLocalizationInput>>;
};

export type GraphCms_EmployerPageCreateManyInlineInput = {
  /** Create and connect multiple existing EmployerPage documents */
  create?: Maybe<Array<GraphCms_EmployerPageCreateInput>>;
  /** Connect multiple existing EmployerPage documents */
  connect?: Maybe<Array<GraphCms_EmployerPageWhereUniqueInput>>;
};

export type GraphCms_EmployerPageCreateOneInlineInput = {
  /** Create and connect one EmployerPage document */
  create?: Maybe<GraphCms_EmployerPageCreateInput>;
  /** Connect one existing EmployerPage document */
  connect?: Maybe<GraphCms_EmployerPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_EmployerPageEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_EmployerPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_EmployerPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EmployerPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EmployerPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EmployerPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  actionSections_every?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_some?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_none?: Maybe<GraphCms_ActionSectionWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  jobSection?: Maybe<GraphCms_JobSectionWhereInput>;
  processSection?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

export type GraphCms_EmployerPageOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'bannerTitle_ASC'
  | 'bannerTitle_DESC';

export type GraphCms_EmployerPageUpdateInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  actionSections?: Maybe<GraphCms_ActionSectionUpdateManyInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  jobSection?: Maybe<GraphCms_JobSectionUpdateOneInlineInput>;
  processSection?: Maybe<GraphCms_ProcessSectionUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_EmployerPageUpdateLocalizationsInput>;
};

export type GraphCms_EmployerPageUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_EmployerPageUpdateLocalizationInput = {
  data: GraphCms_EmployerPageUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployerPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_EmployerPageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_EmployerPageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_EmployerPageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_EmployerPageUpdateManyInlineInput = {
  /** Create and connect multiple EmployerPage documents */
  create?: Maybe<Array<GraphCms_EmployerPageCreateInput>>;
  /** Connect multiple existing EmployerPage documents */
  connect?: Maybe<Array<GraphCms_EmployerPageConnectInput>>;
  /** Override currently-connected documents with multiple existing EmployerPage documents */
  set?: Maybe<Array<GraphCms_EmployerPageWhereUniqueInput>>;
  /** Update multiple EmployerPage documents */
  update?: Maybe<Array<GraphCms_EmployerPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EmployerPage documents */
  upsert?: Maybe<Array<GraphCms_EmployerPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple EmployerPage documents */
  disconnect?: Maybe<Array<GraphCms_EmployerPageWhereUniqueInput>>;
  /** Delete multiple EmployerPage documents */
  delete?: Maybe<Array<GraphCms_EmployerPageWhereUniqueInput>>;
};

export type GraphCms_EmployerPageUpdateManyInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_EmployerPageUpdateManyLocalizationsInput>;
};

export type GraphCms_EmployerPageUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_EmployerPageUpdateManyLocalizationInput = {
  data: GraphCms_EmployerPageUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployerPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_EmployerPageUpdateManyLocalizationInput>>;
};

export type GraphCms_EmployerPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_EmployerPageWhereInput;
  /** Update many input */
  data: GraphCms_EmployerPageUpdateManyInput;
};

export type GraphCms_EmployerPageUpdateOneInlineInput = {
  /** Create and connect one EmployerPage document */
  create?: Maybe<GraphCms_EmployerPageCreateInput>;
  /** Update single EmployerPage document */
  update?: Maybe<GraphCms_EmployerPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EmployerPage document */
  upsert?: Maybe<GraphCms_EmployerPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing EmployerPage document */
  connect?: Maybe<GraphCms_EmployerPageWhereUniqueInput>;
  /** Disconnect currently connected EmployerPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected EmployerPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_EmployerPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_EmployerPageWhereUniqueInput;
  /** Document to update */
  data: GraphCms_EmployerPageUpdateInput;
};

export type GraphCms_EmployerPageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_EmployerPageCreateInput;
  /** Update document if it exists */
  update: GraphCms_EmployerPageUpdateInput;
};

export type GraphCms_EmployerPageUpsertLocalizationInput = {
  update: GraphCms_EmployerPageUpdateLocalizationDataInput;
  create: GraphCms_EmployerPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_EmployerPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_EmployerPageWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_EmployerPageUpsertInput;
};

/** Identifies documents */
export type GraphCms_EmployerPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EmployerPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EmployerPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EmployerPageWhereInput>>;
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
  bannerImage?: Maybe<GraphCms_AssetWhereInput>;
  actionSections_every?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_some?: Maybe<GraphCms_ActionSectionWhereInput>;
  actionSections_none?: Maybe<GraphCms_ActionSectionWhereInput>;
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  jobSection?: Maybe<GraphCms_JobSectionWhereInput>;
  processSection?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

/** References EmployerPage record uniquely */
export type GraphCms_EmployerPageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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

export type GraphCms_IndexPage = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_IndexPage>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_IndexPage>;
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
  infoSections: Array<GraphCms_InfoSection>;
  blogSection?: Maybe<GraphCms_BlogSection>;
  /** List of IndexPage versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_IndexPageLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_IndexPageDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_IndexPageCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_IndexPageUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_IndexPagePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_IndexPageBannerImageArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_IndexPageInfoSectionsArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_IndexPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_IndexPageConnectInput = {
  /** Document to connect */
  where: GraphCms_IndexPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_IndexPageConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_IndexPageEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_IndexPageCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** bannerSubTitle input for default locale (fr) */
  bannerSubTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetCreateManyInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  blogSection?: Maybe<GraphCms_BlogSectionCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_IndexPageCreateLocalizationsInput>;
};

export type GraphCms_IndexPageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_IndexPageCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_IndexPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_IndexPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_IndexPageCreateLocalizationInput>>;
};

export type GraphCms_IndexPageCreateManyInlineInput = {
  /** Create and connect multiple existing IndexPage documents */
  create?: Maybe<Array<GraphCms_IndexPageCreateInput>>;
  /** Connect multiple existing IndexPage documents */
  connect?: Maybe<Array<GraphCms_IndexPageWhereUniqueInput>>;
};

export type GraphCms_IndexPageCreateOneInlineInput = {
  /** Create and connect one IndexPage document */
  create?: Maybe<GraphCms_IndexPageCreateInput>;
  /** Connect one existing IndexPage document */
  connect?: Maybe<GraphCms_IndexPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_IndexPageEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_IndexPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_IndexPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_IndexPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_IndexPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_IndexPageWhereInput>>;
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
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  blogSection?: Maybe<GraphCms_BlogSectionWhereInput>;
};

export type GraphCms_IndexPageOrderByInput = 
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

export type GraphCms_IndexPageUpdateInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** bannerSubTitle input for default locale (fr) */
  bannerSubTitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<GraphCms_AssetUpdateManyInlineInput>;
  infoSections?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  blogSection?: Maybe<GraphCms_BlogSectionUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_IndexPageUpdateLocalizationsInput>;
};

export type GraphCms_IndexPageUpdateLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_IndexPageUpdateLocalizationInput = {
  data: GraphCms_IndexPageUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_IndexPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_IndexPageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_IndexPageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_IndexPageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_IndexPageUpdateManyInlineInput = {
  /** Create and connect multiple IndexPage documents */
  create?: Maybe<Array<GraphCms_IndexPageCreateInput>>;
  /** Connect multiple existing IndexPage documents */
  connect?: Maybe<Array<GraphCms_IndexPageConnectInput>>;
  /** Override currently-connected documents with multiple existing IndexPage documents */
  set?: Maybe<Array<GraphCms_IndexPageWhereUniqueInput>>;
  /** Update multiple IndexPage documents */
  update?: Maybe<Array<GraphCms_IndexPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple IndexPage documents */
  upsert?: Maybe<Array<GraphCms_IndexPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple IndexPage documents */
  disconnect?: Maybe<Array<GraphCms_IndexPageWhereUniqueInput>>;
  /** Delete multiple IndexPage documents */
  delete?: Maybe<Array<GraphCms_IndexPageWhereUniqueInput>>;
};

export type GraphCms_IndexPageUpdateManyInput = {
  /** bannerTitle input for default locale (fr) */
  bannerTitle?: Maybe<Scalars['String']>;
  /** bannerSubTitle input for default locale (fr) */
  bannerSubTitle?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_IndexPageUpdateManyLocalizationsInput>;
};

export type GraphCms_IndexPageUpdateManyLocalizationDataInput = {
  bannerTitle?: Maybe<Scalars['String']>;
  bannerSubTitle?: Maybe<Scalars['String']>;
};

export type GraphCms_IndexPageUpdateManyLocalizationInput = {
  data: GraphCms_IndexPageUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_IndexPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_IndexPageUpdateManyLocalizationInput>>;
};

export type GraphCms_IndexPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_IndexPageWhereInput;
  /** Update many input */
  data: GraphCms_IndexPageUpdateManyInput;
};

export type GraphCms_IndexPageUpdateOneInlineInput = {
  /** Create and connect one IndexPage document */
  create?: Maybe<GraphCms_IndexPageCreateInput>;
  /** Update single IndexPage document */
  update?: Maybe<GraphCms_IndexPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single IndexPage document */
  upsert?: Maybe<GraphCms_IndexPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing IndexPage document */
  connect?: Maybe<GraphCms_IndexPageWhereUniqueInput>;
  /** Disconnect currently connected IndexPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected IndexPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_IndexPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_IndexPageWhereUniqueInput;
  /** Document to update */
  data: GraphCms_IndexPageUpdateInput;
};

export type GraphCms_IndexPageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_IndexPageCreateInput;
  /** Update document if it exists */
  update: GraphCms_IndexPageUpdateInput;
};

export type GraphCms_IndexPageUpsertLocalizationInput = {
  update: GraphCms_IndexPageUpdateLocalizationDataInput;
  create: GraphCms_IndexPageCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_IndexPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_IndexPageWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_IndexPageUpsertInput;
};

/** Identifies documents */
export type GraphCms_IndexPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_IndexPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_IndexPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_IndexPageWhereInput>>;
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
  infoSections_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSections_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  blogSection?: Maybe<GraphCms_BlogSectionWhereInput>;
};

/** References IndexPage record uniquely */
export type GraphCms_IndexPageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_InfoCheck = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_InfoCheck>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_InfoCheck>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  text?: Maybe<Scalars['String']>;
  infoSection: Array<GraphCms_InfoSection>;
  /** List of InfoCheck versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_InfoCheckLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_InfoCheckDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_InfoCheckCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoCheckUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoCheckPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_InfoCheckInfoSectionArgs = {
  where?: Maybe<GraphCms_InfoSectionWhereInput>;
  orderBy?: Maybe<GraphCms_InfoSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoCheckHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_InfoCheckConnectInput = {
  /** Document to connect */
  where: GraphCms_InfoCheckWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_InfoCheckConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_InfoCheckEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_InfoCheckCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  infoSection?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_InfoCheckCreateLocalizationsInput>;
};

export type GraphCms_InfoCheckCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  text?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoCheckCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_InfoCheckCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoCheckCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_InfoCheckCreateLocalizationInput>>;
};

export type GraphCms_InfoCheckCreateManyInlineInput = {
  /** Create and connect multiple existing InfoCheck documents */
  create?: Maybe<Array<GraphCms_InfoCheckCreateInput>>;
  /** Connect multiple existing InfoCheck documents */
  connect?: Maybe<Array<GraphCms_InfoCheckWhereUniqueInput>>;
};

export type GraphCms_InfoCheckCreateOneInlineInput = {
  /** Create and connect one InfoCheck document */
  create?: Maybe<GraphCms_InfoCheckCreateInput>;
  /** Connect one existing InfoCheck document */
  connect?: Maybe<GraphCms_InfoCheckWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_InfoCheckEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_InfoCheck;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_InfoCheckManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InfoCheckWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InfoCheckWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InfoCheckWhereInput>>;
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
  infoSection_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_none?: Maybe<GraphCms_InfoSectionWhereInput>;
};

export type GraphCms_InfoCheckOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'text_ASC'
  | 'text_DESC';

export type GraphCms_InfoCheckUpdateInput = {
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  infoSection?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_InfoCheckUpdateLocalizationsInput>;
};

export type GraphCms_InfoCheckUpdateLocalizationDataInput = {
  text?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoCheckUpdateLocalizationInput = {
  data: GraphCms_InfoCheckUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoCheckUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_InfoCheckCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_InfoCheckUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_InfoCheckUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_InfoCheckUpdateManyInlineInput = {
  /** Create and connect multiple InfoCheck documents */
  create?: Maybe<Array<GraphCms_InfoCheckCreateInput>>;
  /** Connect multiple existing InfoCheck documents */
  connect?: Maybe<Array<GraphCms_InfoCheckConnectInput>>;
  /** Override currently-connected documents with multiple existing InfoCheck documents */
  set?: Maybe<Array<GraphCms_InfoCheckWhereUniqueInput>>;
  /** Update multiple InfoCheck documents */
  update?: Maybe<Array<GraphCms_InfoCheckUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple InfoCheck documents */
  upsert?: Maybe<Array<GraphCms_InfoCheckUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple InfoCheck documents */
  disconnect?: Maybe<Array<GraphCms_InfoCheckWhereUniqueInput>>;
  /** Delete multiple InfoCheck documents */
  delete?: Maybe<Array<GraphCms_InfoCheckWhereUniqueInput>>;
};

export type GraphCms_InfoCheckUpdateManyInput = {
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_InfoCheckUpdateManyLocalizationsInput>;
};

export type GraphCms_InfoCheckUpdateManyLocalizationDataInput = {
  text?: Maybe<Scalars['String']>;
};

export type GraphCms_InfoCheckUpdateManyLocalizationInput = {
  data: GraphCms_InfoCheckUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoCheckUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_InfoCheckUpdateManyLocalizationInput>>;
};

export type GraphCms_InfoCheckUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_InfoCheckWhereInput;
  /** Update many input */
  data: GraphCms_InfoCheckUpdateManyInput;
};

export type GraphCms_InfoCheckUpdateOneInlineInput = {
  /** Create and connect one InfoCheck document */
  create?: Maybe<GraphCms_InfoCheckCreateInput>;
  /** Update single InfoCheck document */
  update?: Maybe<GraphCms_InfoCheckUpdateWithNestedWhereUniqueInput>;
  /** Upsert single InfoCheck document */
  upsert?: Maybe<GraphCms_InfoCheckUpsertWithNestedWhereUniqueInput>;
  /** Connect existing InfoCheck document */
  connect?: Maybe<GraphCms_InfoCheckWhereUniqueInput>;
  /** Disconnect currently connected InfoCheck document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected InfoCheck document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_InfoCheckUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_InfoCheckWhereUniqueInput;
  /** Document to update */
  data: GraphCms_InfoCheckUpdateInput;
};

export type GraphCms_InfoCheckUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_InfoCheckCreateInput;
  /** Update document if it exists */
  update: GraphCms_InfoCheckUpdateInput;
};

export type GraphCms_InfoCheckUpsertLocalizationInput = {
  update: GraphCms_InfoCheckUpdateLocalizationDataInput;
  create: GraphCms_InfoCheckCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_InfoCheckUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_InfoCheckWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_InfoCheckUpsertInput;
};

/** Identifies documents */
export type GraphCms_InfoCheckWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InfoCheckWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InfoCheckWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InfoCheckWhereInput>>;
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

/** References InfoCheck record uniquely */
export type GraphCms_InfoCheckWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  images: Array<GraphCms_Asset>;
  imagePosition?: Maybe<GraphCms_InfoSectionImagePosition>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actionText?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_InfoSectionType>;
  infoChecks: Array<GraphCms_InfoCheck>;
  infoTiles: Array<GraphCms_InfoTile>;
  titleTab?: Maybe<Scalars['String']>;
  showTabs?: Maybe<Scalars['Boolean']>;
  childs: Array<GraphCms_InfoSection>;
  infoSection: Array<GraphCms_InfoSection>;
  pageIndex: Array<GraphCms_IndexPage>;
  pageEmployer: Array<GraphCms_EmployerPage>;
  contactUsPage: Array<GraphCms_ContactUsPage>;
  aboutPage: Array<GraphCms_AboutPage>;
  candidatePage: Array<GraphCms_CandidatePage>;
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


export type GraphCms_InfoSectionImagesArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionInfoChecksArgs = {
  where?: Maybe<GraphCms_InfoCheckWhereInput>;
  orderBy?: Maybe<GraphCms_InfoCheckOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  where?: Maybe<GraphCms_IndexPageWhereInput>;
  orderBy?: Maybe<GraphCms_IndexPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionPageEmployerArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionContactUsPageArgs = {
  where?: Maybe<GraphCms_ContactUsPageWhereInput>;
  orderBy?: Maybe<GraphCms_ContactUsPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionAboutPageArgs = {
  where?: Maybe<GraphCms_AboutPageWhereInput>;
  orderBy?: Maybe<GraphCms_AboutPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_InfoSectionCandidatePageArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
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
  images?: Maybe<GraphCms_AssetCreateManyInlineInput>;
  imagePosition?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  /** type input for default locale (fr) */
  type?: Maybe<GraphCms_InfoSectionType>;
  infoChecks?: Maybe<GraphCms_InfoCheckCreateManyInlineInput>;
  infoTiles?: Maybe<GraphCms_InfoTileCreateManyInlineInput>;
  /** titleTab input for default locale (fr) */
  titleTab?: Maybe<Scalars['String']>;
  showTabs?: Maybe<Scalars['Boolean']>;
  childs?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  infoSection?: Maybe<GraphCms_InfoSectionCreateManyInlineInput>;
  pageIndex?: Maybe<GraphCms_IndexPageCreateManyInlineInput>;
  pageEmployer?: Maybe<GraphCms_EmployerPageCreateManyInlineInput>;
  contactUsPage?: Maybe<GraphCms_ContactUsPageCreateManyInlineInput>;
  aboutPage?: Maybe<GraphCms_AboutPageCreateManyInlineInput>;
  candidatePage?: Maybe<GraphCms_CandidatePageCreateManyInlineInput>;
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

export type GraphCms_InfoSectionImagePosition = 
  | 'imageLeft'
  | 'imageRight';

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
  images_every?: Maybe<GraphCms_AssetWhereInput>;
  images_some?: Maybe<GraphCms_AssetWhereInput>;
  images_none?: Maybe<GraphCms_AssetWhereInput>;
  imagePosition?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** All values that are not equal to given value. */
  imagePosition_not?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** All values that are contained in given list. */
  imagePosition_in?: Maybe<Array<GraphCms_InfoSectionImagePosition>>;
  /** All values that are not contained in given list. */
  imagePosition_not_in?: Maybe<Array<GraphCms_InfoSectionImagePosition>>;
  infoChecks_every?: Maybe<GraphCms_InfoCheckWhereInput>;
  infoChecks_some?: Maybe<GraphCms_InfoCheckWhereInput>;
  infoChecks_none?: Maybe<GraphCms_InfoCheckWhereInput>;
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
  pageIndex_every?: Maybe<GraphCms_IndexPageWhereInput>;
  pageIndex_some?: Maybe<GraphCms_IndexPageWhereInput>;
  pageIndex_none?: Maybe<GraphCms_IndexPageWhereInput>;
  pageEmployer_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  pageEmployer_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  pageEmployer_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  contactUsPage_every?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPage_some?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPage_none?: Maybe<GraphCms_ContactUsPageWhereInput>;
  aboutPage_every?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_some?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_none?: Maybe<GraphCms_AboutPageWhereInput>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
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
  | 'imagePosition_ASC'
  | 'imagePosition_DESC'
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
  | 'titleTab_ASC'
  | 'titleTab_DESC'
  | 'showTabs_ASC'
  | 'showTabs_DESC';

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
  | 'type4'
  | 'type5'
  | 'type6'
  | 'type7';

export type GraphCms_InfoSectionUpdateInput = {
  image?: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  images?: Maybe<GraphCms_AssetUpdateManyInlineInput>;
  imagePosition?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  /** type input for default locale (fr) */
  type?: Maybe<GraphCms_InfoSectionType>;
  infoChecks?: Maybe<GraphCms_InfoCheckUpdateManyInlineInput>;
  infoTiles?: Maybe<GraphCms_InfoTileUpdateManyInlineInput>;
  /** titleTab input for default locale (fr) */
  titleTab?: Maybe<Scalars['String']>;
  showTabs?: Maybe<Scalars['Boolean']>;
  childs?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  infoSection?: Maybe<GraphCms_InfoSectionUpdateManyInlineInput>;
  pageIndex?: Maybe<GraphCms_IndexPageUpdateManyInlineInput>;
  pageEmployer?: Maybe<GraphCms_EmployerPageUpdateManyInlineInput>;
  contactUsPage?: Maybe<GraphCms_ContactUsPageUpdateManyInlineInput>;
  aboutPage?: Maybe<GraphCms_AboutPageUpdateManyInlineInput>;
  candidatePage?: Maybe<GraphCms_CandidatePageUpdateManyInlineInput>;
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
  imagePosition?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
  text?: Maybe<Scalars['String']>;
  /** actionText input for default locale (fr) */
  actionText?: Maybe<Scalars['String']>;
  /** type input for default locale (fr) */
  type?: Maybe<GraphCms_InfoSectionType>;
  /** titleTab input for default locale (fr) */
  titleTab?: Maybe<Scalars['String']>;
  showTabs?: Maybe<Scalars['Boolean']>;
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
  images_every?: Maybe<GraphCms_AssetWhereInput>;
  images_some?: Maybe<GraphCms_AssetWhereInput>;
  images_none?: Maybe<GraphCms_AssetWhereInput>;
  imagePosition?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** All values that are not equal to given value. */
  imagePosition_not?: Maybe<GraphCms_InfoSectionImagePosition>;
  /** All values that are contained in given list. */
  imagePosition_in?: Maybe<Array<GraphCms_InfoSectionImagePosition>>;
  /** All values that are not contained in given list. */
  imagePosition_not_in?: Maybe<Array<GraphCms_InfoSectionImagePosition>>;
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
  infoChecks_every?: Maybe<GraphCms_InfoCheckWhereInput>;
  infoChecks_some?: Maybe<GraphCms_InfoCheckWhereInput>;
  infoChecks_none?: Maybe<GraphCms_InfoCheckWhereInput>;
  infoTiles_every?: Maybe<GraphCms_InfoTileWhereInput>;
  infoTiles_some?: Maybe<GraphCms_InfoTileWhereInput>;
  infoTiles_none?: Maybe<GraphCms_InfoTileWhereInput>;
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
  showTabs?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showTabs_not?: Maybe<Scalars['Boolean']>;
  childs_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  childs_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  childs_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_every?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_some?: Maybe<GraphCms_InfoSectionWhereInput>;
  infoSection_none?: Maybe<GraphCms_InfoSectionWhereInput>;
  pageIndex_every?: Maybe<GraphCms_IndexPageWhereInput>;
  pageIndex_some?: Maybe<GraphCms_IndexPageWhereInput>;
  pageIndex_none?: Maybe<GraphCms_IndexPageWhereInput>;
  pageEmployer_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  pageEmployer_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  pageEmployer_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  contactUsPage_every?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPage_some?: Maybe<GraphCms_ContactUsPageWhereInput>;
  contactUsPage_none?: Maybe<GraphCms_ContactUsPageWhereInput>;
  aboutPage_every?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_some?: Maybe<GraphCms_AboutPageWhereInput>;
  aboutPage_none?: Maybe<GraphCms_AboutPageWhereInput>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
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
  illustration?: Maybe<Scalars['String']>;
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
  illustration?: Maybe<Scalars['String']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
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
  illustration?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  illustration_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  illustration_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  illustration_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  illustration_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  illustration_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  illustration_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  illustration_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  illustration_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  illustration_not_ends_with?: Maybe<Scalars['String']>;
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
  | 'illustration_ASC'
  | 'illustration_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'text_ASC'
  | 'text_DESC';

export type GraphCms_InfoTileUpdateInput = {
  illustration?: Maybe<Scalars['String']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
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
  illustration?: Maybe<Scalars['String']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** text input for default locale (fr) */
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
  illustration?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  illustration_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  illustration_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  illustration_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  illustration_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  illustration_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  illustration_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  illustration_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  illustration_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  illustration_not_ends_with?: Maybe<Scalars['String']>;
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

export type GraphCms_Job = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Job>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Job>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_JobType>;
  jobGroup: Array<GraphCms_JobGroup>;
  /** List of Job versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_JobLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_JobDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_JobCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobJobGroupArgs = {
  where?: Maybe<GraphCms_JobGroupWhereInput>;
  orderBy?: Maybe<GraphCms_JobGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_JobConnectInput = {
  /** Document to connect */
  where: GraphCms_JobWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_JobConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_JobEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_JobCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_JobTypeCreateOneInlineInput>;
  jobGroup?: Maybe<GraphCms_JobGroupCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_JobCreateLocalizationsInput>;
};

export type GraphCms_JobCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_JobCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_JobCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_JobCreateLocalizationInput>>;
};

export type GraphCms_JobCreateManyInlineInput = {
  /** Create and connect multiple existing Job documents */
  create?: Maybe<Array<GraphCms_JobCreateInput>>;
  /** Connect multiple existing Job documents */
  connect?: Maybe<Array<GraphCms_JobWhereUniqueInput>>;
};

export type GraphCms_JobCreateOneInlineInput = {
  /** Create and connect one Job document */
  create?: Maybe<GraphCms_JobCreateInput>;
  /** Connect one existing Job document */
  connect?: Maybe<GraphCms_JobWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_JobEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Job;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type GraphCms_JobGroup = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_JobGroup>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  typeName?: Maybe<GraphCms_JobType>;
  jobs: Array<GraphCms_Job>;
  jobSection: Array<GraphCms_JobSection>;
  /** List of JobGroup versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_JobGroupDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_JobGroupJobsArgs = {
  where?: Maybe<GraphCms_JobWhereInput>;
  orderBy?: Maybe<GraphCms_JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobGroupJobSectionArgs = {
  where?: Maybe<GraphCms_JobSectionWhereInput>;
  orderBy?: Maybe<GraphCms_JobSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobGroupHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_JobGroupConnectInput = {
  /** Document to connect */
  where: GraphCms_JobGroupWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_JobGroupConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_JobGroupEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_JobGroupCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  typeName?: Maybe<GraphCms_JobTypeCreateOneInlineInput>;
  jobs?: Maybe<GraphCms_JobCreateManyInlineInput>;
  jobSection?: Maybe<GraphCms_JobSectionCreateManyInlineInput>;
};

export type GraphCms_JobGroupCreateManyInlineInput = {
  /** Create and connect multiple existing JobGroup documents */
  create?: Maybe<Array<GraphCms_JobGroupCreateInput>>;
  /** Connect multiple existing JobGroup documents */
  connect?: Maybe<Array<GraphCms_JobGroupWhereUniqueInput>>;
};

export type GraphCms_JobGroupCreateOneInlineInput = {
  /** Create and connect one JobGroup document */
  create?: Maybe<GraphCms_JobGroupCreateInput>;
  /** Connect one existing JobGroup document */
  connect?: Maybe<GraphCms_JobGroupWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_JobGroupEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_JobGroup;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_JobGroupManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobGroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobGroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobGroupWhereInput>>;
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
  typeName?: Maybe<GraphCms_JobTypeWhereInput>;
  jobs_every?: Maybe<GraphCms_JobWhereInput>;
  jobs_some?: Maybe<GraphCms_JobWhereInput>;
  jobs_none?: Maybe<GraphCms_JobWhereInput>;
  jobSection_every?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_some?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_none?: Maybe<GraphCms_JobSectionWhereInput>;
};

export type GraphCms_JobGroupOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC';

export type GraphCms_JobGroupUpdateInput = {
  typeName?: Maybe<GraphCms_JobTypeUpdateOneInlineInput>;
  jobs?: Maybe<GraphCms_JobUpdateManyInlineInput>;
  jobSection?: Maybe<GraphCms_JobSectionUpdateManyInlineInput>;
};

export type GraphCms_JobGroupUpdateManyInlineInput = {
  /** Create and connect multiple JobGroup documents */
  create?: Maybe<Array<GraphCms_JobGroupCreateInput>>;
  /** Connect multiple existing JobGroup documents */
  connect?: Maybe<Array<GraphCms_JobGroupConnectInput>>;
  /** Override currently-connected documents with multiple existing JobGroup documents */
  set?: Maybe<Array<GraphCms_JobGroupWhereUniqueInput>>;
  /** Update multiple JobGroup documents */
  update?: Maybe<Array<GraphCms_JobGroupUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple JobGroup documents */
  upsert?: Maybe<Array<GraphCms_JobGroupUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple JobGroup documents */
  disconnect?: Maybe<Array<GraphCms_JobGroupWhereUniqueInput>>;
  /** Delete multiple JobGroup documents */
  delete?: Maybe<Array<GraphCms_JobGroupWhereUniqueInput>>;
};

export type GraphCms_JobGroupUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type GraphCms_JobGroupUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_JobGroupWhereInput;
  /** Update many input */
  data: GraphCms_JobGroupUpdateManyInput;
};

export type GraphCms_JobGroupUpdateOneInlineInput = {
  /** Create and connect one JobGroup document */
  create?: Maybe<GraphCms_JobGroupCreateInput>;
  /** Update single JobGroup document */
  update?: Maybe<GraphCms_JobGroupUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobGroup document */
  upsert?: Maybe<GraphCms_JobGroupUpsertWithNestedWhereUniqueInput>;
  /** Connect existing JobGroup document */
  connect?: Maybe<GraphCms_JobGroupWhereUniqueInput>;
  /** Disconnect currently connected JobGroup document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected JobGroup document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_JobGroupUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobGroupWhereUniqueInput;
  /** Document to update */
  data: GraphCms_JobGroupUpdateInput;
};

export type GraphCms_JobGroupUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_JobGroupCreateInput;
  /** Update document if it exists */
  update: GraphCms_JobGroupUpdateInput;
};

export type GraphCms_JobGroupUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobGroupWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_JobGroupUpsertInput;
};

/** Identifies documents */
export type GraphCms_JobGroupWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobGroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobGroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobGroupWhereInput>>;
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
  typeName?: Maybe<GraphCms_JobTypeWhereInput>;
  jobs_every?: Maybe<GraphCms_JobWhereInput>;
  jobs_some?: Maybe<GraphCms_JobWhereInput>;
  jobs_none?: Maybe<GraphCms_JobWhereInput>;
  jobSection_every?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_some?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_none?: Maybe<GraphCms_JobSectionWhereInput>;
};

/** References JobGroup record uniquely */
export type GraphCms_JobGroupWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Identifies documents */
export type GraphCms_JobManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobWhereInput>>;
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
  type?: Maybe<GraphCms_JobTypeWhereInput>;
  jobGroup_every?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_some?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_none?: Maybe<GraphCms_JobGroupWhereInput>;
};

export type GraphCms_JobOrderByInput = 
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
  | 'description_ASC'
  | 'description_DESC';

export type GraphCms_JobSection = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_JobSection>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_JobSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_JobSectionType>;
  groups: Array<GraphCms_JobGroup>;
  employerPage: Array<GraphCms_EmployerPage>;
  candidatePage: Array<GraphCms_CandidatePage>;
  /** List of JobSection versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_JobSectionLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_JobSectionDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_JobSectionCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobSectionUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobSectionPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobSectionGroupsArgs = {
  where?: Maybe<GraphCms_JobGroupWhereInput>;
  orderBy?: Maybe<GraphCms_JobGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobSectionEmployerPageArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobSectionCandidatePageArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_JobSectionConnectInput = {
  /** Document to connect */
  where: GraphCms_JobSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_JobSectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_JobSectionEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_JobSectionCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_JobSectionTypeCreateOneInlineInput>;
  groups?: Maybe<GraphCms_JobGroupCreateManyInlineInput>;
  employerPage?: Maybe<GraphCms_EmployerPageCreateManyInlineInput>;
  candidatePage?: Maybe<GraphCms_CandidatePageCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_JobSectionCreateLocalizationsInput>;
};

export type GraphCms_JobSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
};

export type GraphCms_JobSectionCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_JobSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_JobSectionCreateLocalizationInput>>;
};

export type GraphCms_JobSectionCreateManyInlineInput = {
  /** Create and connect multiple existing JobSection documents */
  create?: Maybe<Array<GraphCms_JobSectionCreateInput>>;
  /** Connect multiple existing JobSection documents */
  connect?: Maybe<Array<GraphCms_JobSectionWhereUniqueInput>>;
};

export type GraphCms_JobSectionCreateOneInlineInput = {
  /** Create and connect one JobSection document */
  create?: Maybe<GraphCms_JobSectionCreateInput>;
  /** Connect one existing JobSection document */
  connect?: Maybe<GraphCms_JobSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_JobSectionEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_JobSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_JobSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobSectionWhereInput>>;
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
  type?: Maybe<GraphCms_JobSectionTypeWhereInput>;
  groups_every?: Maybe<GraphCms_JobGroupWhereInput>;
  groups_some?: Maybe<GraphCms_JobGroupWhereInput>;
  groups_none?: Maybe<GraphCms_JobGroupWhereInput>;
  employerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
};

export type GraphCms_JobSectionOrderByInput = 
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
  | 'titleHighlight_DESC';

export type GraphCms_JobSectionType = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_JobSectionType>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_JobSectionType>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  jobSection: Array<GraphCms_JobSection>;
  /** List of JobSectionType versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_JobSectionTypeLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_JobSectionTypeDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_JobSectionTypeCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobSectionTypeUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobSectionTypePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobSectionTypeJobSectionArgs = {
  where?: Maybe<GraphCms_JobSectionWhereInput>;
  orderBy?: Maybe<GraphCms_JobSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobSectionTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_JobSectionTypeConnectInput = {
  /** Document to connect */
  where: GraphCms_JobSectionTypeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_JobSectionTypeConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_JobSectionTypeEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_JobSectionTypeCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  jobSection?: Maybe<GraphCms_JobSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_JobSectionTypeCreateLocalizationsInput>;
};

export type GraphCms_JobSectionTypeCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_JobSectionTypeCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_JobSectionTypeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionTypeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_JobSectionTypeCreateLocalizationInput>>;
};

export type GraphCms_JobSectionTypeCreateManyInlineInput = {
  /** Create and connect multiple existing JobSectionType documents */
  create?: Maybe<Array<GraphCms_JobSectionTypeCreateInput>>;
  /** Connect multiple existing JobSectionType documents */
  connect?: Maybe<Array<GraphCms_JobSectionTypeWhereUniqueInput>>;
};

export type GraphCms_JobSectionTypeCreateOneInlineInput = {
  /** Create and connect one JobSectionType document */
  create?: Maybe<GraphCms_JobSectionTypeCreateInput>;
  /** Connect one existing JobSectionType document */
  connect?: Maybe<GraphCms_JobSectionTypeWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_JobSectionTypeEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_JobSectionType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_JobSectionTypeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobSectionTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobSectionTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobSectionTypeWhereInput>>;
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
  jobSection_every?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_some?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_none?: Maybe<GraphCms_JobSectionWhereInput>;
};

export type GraphCms_JobSectionTypeOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type GraphCms_JobSectionTypeUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  jobSection?: Maybe<GraphCms_JobSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_JobSectionTypeUpdateLocalizationsInput>;
};

export type GraphCms_JobSectionTypeUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_JobSectionTypeUpdateLocalizationInput = {
  data: GraphCms_JobSectionTypeUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionTypeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_JobSectionTypeCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobSectionTypeUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_JobSectionTypeUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_JobSectionTypeUpdateManyInlineInput = {
  /** Create and connect multiple JobSectionType documents */
  create?: Maybe<Array<GraphCms_JobSectionTypeCreateInput>>;
  /** Connect multiple existing JobSectionType documents */
  connect?: Maybe<Array<GraphCms_JobSectionTypeConnectInput>>;
  /** Override currently-connected documents with multiple existing JobSectionType documents */
  set?: Maybe<Array<GraphCms_JobSectionTypeWhereUniqueInput>>;
  /** Update multiple JobSectionType documents */
  update?: Maybe<Array<GraphCms_JobSectionTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple JobSectionType documents */
  upsert?: Maybe<Array<GraphCms_JobSectionTypeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple JobSectionType documents */
  disconnect?: Maybe<Array<GraphCms_JobSectionTypeWhereUniqueInput>>;
  /** Delete multiple JobSectionType documents */
  delete?: Maybe<Array<GraphCms_JobSectionTypeWhereUniqueInput>>;
};

export type GraphCms_JobSectionTypeUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_JobSectionTypeUpdateManyLocalizationsInput>;
};

export type GraphCms_JobSectionTypeUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_JobSectionTypeUpdateManyLocalizationInput = {
  data: GraphCms_JobSectionTypeUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionTypeUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobSectionTypeUpdateManyLocalizationInput>>;
};

export type GraphCms_JobSectionTypeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_JobSectionTypeWhereInput;
  /** Update many input */
  data: GraphCms_JobSectionTypeUpdateManyInput;
};

export type GraphCms_JobSectionTypeUpdateOneInlineInput = {
  /** Create and connect one JobSectionType document */
  create?: Maybe<GraphCms_JobSectionTypeCreateInput>;
  /** Update single JobSectionType document */
  update?: Maybe<GraphCms_JobSectionTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobSectionType document */
  upsert?: Maybe<GraphCms_JobSectionTypeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing JobSectionType document */
  connect?: Maybe<GraphCms_JobSectionTypeWhereUniqueInput>;
  /** Disconnect currently connected JobSectionType document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected JobSectionType document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_JobSectionTypeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobSectionTypeWhereUniqueInput;
  /** Document to update */
  data: GraphCms_JobSectionTypeUpdateInput;
};

export type GraphCms_JobSectionTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_JobSectionTypeCreateInput;
  /** Update document if it exists */
  update: GraphCms_JobSectionTypeUpdateInput;
};

export type GraphCms_JobSectionTypeUpsertLocalizationInput = {
  update: GraphCms_JobSectionTypeUpdateLocalizationDataInput;
  create: GraphCms_JobSectionTypeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionTypeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobSectionTypeWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_JobSectionTypeUpsertInput;
};

/** Identifies documents */
export type GraphCms_JobSectionTypeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobSectionTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobSectionTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobSectionTypeWhereInput>>;
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
  jobSection_every?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_some?: Maybe<GraphCms_JobSectionWhereInput>;
  jobSection_none?: Maybe<GraphCms_JobSectionWhereInput>;
};

/** References JobSectionType record uniquely */
export type GraphCms_JobSectionTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_JobSectionUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_JobSectionTypeUpdateOneInlineInput>;
  groups?: Maybe<GraphCms_JobGroupUpdateManyInlineInput>;
  employerPage?: Maybe<GraphCms_EmployerPageUpdateManyInlineInput>;
  candidatePage?: Maybe<GraphCms_CandidatePageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_JobSectionUpdateLocalizationsInput>;
};

export type GraphCms_JobSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
};

export type GraphCms_JobSectionUpdateLocalizationInput = {
  data: GraphCms_JobSectionUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_JobSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_JobSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_JobSectionUpdateManyInlineInput = {
  /** Create and connect multiple JobSection documents */
  create?: Maybe<Array<GraphCms_JobSectionCreateInput>>;
  /** Connect multiple existing JobSection documents */
  connect?: Maybe<Array<GraphCms_JobSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing JobSection documents */
  set?: Maybe<Array<GraphCms_JobSectionWhereUniqueInput>>;
  /** Update multiple JobSection documents */
  update?: Maybe<Array<GraphCms_JobSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple JobSection documents */
  upsert?: Maybe<Array<GraphCms_JobSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple JobSection documents */
  disconnect?: Maybe<Array<GraphCms_JobSectionWhereUniqueInput>>;
  /** Delete multiple JobSection documents */
  delete?: Maybe<Array<GraphCms_JobSectionWhereUniqueInput>>;
};

export type GraphCms_JobSectionUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** titleHighlight input for default locale (fr) */
  titleHighlight?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_JobSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_JobSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  titleHighlight?: Maybe<Scalars['String']>;
};

export type GraphCms_JobSectionUpdateManyLocalizationInput = {
  data: GraphCms_JobSectionUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobSectionUpdateManyLocalizationInput>>;
};

export type GraphCms_JobSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_JobSectionWhereInput;
  /** Update many input */
  data: GraphCms_JobSectionUpdateManyInput;
};

export type GraphCms_JobSectionUpdateOneInlineInput = {
  /** Create and connect one JobSection document */
  create?: Maybe<GraphCms_JobSectionCreateInput>;
  /** Update single JobSection document */
  update?: Maybe<GraphCms_JobSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobSection document */
  upsert?: Maybe<GraphCms_JobSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing JobSection document */
  connect?: Maybe<GraphCms_JobSectionWhereUniqueInput>;
  /** Disconnect currently connected JobSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected JobSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_JobSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobSectionWhereUniqueInput;
  /** Document to update */
  data: GraphCms_JobSectionUpdateInput;
};

export type GraphCms_JobSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_JobSectionCreateInput;
  /** Update document if it exists */
  update: GraphCms_JobSectionUpdateInput;
};

export type GraphCms_JobSectionUpsertLocalizationInput = {
  update: GraphCms_JobSectionUpdateLocalizationDataInput;
  create: GraphCms_JobSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobSectionWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_JobSectionUpsertInput;
};

/** Identifies documents */
export type GraphCms_JobSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobSectionWhereInput>>;
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
  type?: Maybe<GraphCms_JobSectionTypeWhereInput>;
  groups_every?: Maybe<GraphCms_JobGroupWhereInput>;
  groups_some?: Maybe<GraphCms_JobGroupWhereInput>;
  groups_none?: Maybe<GraphCms_JobGroupWhereInput>;
  employerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
};

/** References JobSection record uniquely */
export type GraphCms_JobSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_JobType = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_JobType>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_JobType>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  job: Array<GraphCms_Job>;
  jobGroup: Array<GraphCms_JobGroup>;
  /** List of JobType versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_JobTypeLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_JobTypeDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_JobTypeCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobTypeUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobTypePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_JobTypeJobArgs = {
  where?: Maybe<GraphCms_JobWhereInput>;
  orderBy?: Maybe<GraphCms_JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobTypeJobGroupArgs = {
  where?: Maybe<GraphCms_JobGroupWhereInput>;
  orderBy?: Maybe<GraphCms_JobGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_JobTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_JobTypeConnectInput = {
  /** Document to connect */
  where: GraphCms_JobTypeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_JobTypeConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_JobTypeEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_JobTypeCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  job?: Maybe<GraphCms_JobCreateManyInlineInput>;
  jobGroup?: Maybe<GraphCms_JobGroupCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_JobTypeCreateLocalizationsInput>;
};

export type GraphCms_JobTypeCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_JobTypeCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_JobTypeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobTypeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_JobTypeCreateLocalizationInput>>;
};

export type GraphCms_JobTypeCreateManyInlineInput = {
  /** Create and connect multiple existing JobType documents */
  create?: Maybe<Array<GraphCms_JobTypeCreateInput>>;
  /** Connect multiple existing JobType documents */
  connect?: Maybe<Array<GraphCms_JobTypeWhereUniqueInput>>;
};

export type GraphCms_JobTypeCreateOneInlineInput = {
  /** Create and connect one JobType document */
  create?: Maybe<GraphCms_JobTypeCreateInput>;
  /** Connect one existing JobType document */
  connect?: Maybe<GraphCms_JobTypeWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_JobTypeEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_JobType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_JobTypeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobTypeWhereInput>>;
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
  job_every?: Maybe<GraphCms_JobWhereInput>;
  job_some?: Maybe<GraphCms_JobWhereInput>;
  job_none?: Maybe<GraphCms_JobWhereInput>;
  jobGroup_every?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_some?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_none?: Maybe<GraphCms_JobGroupWhereInput>;
};

export type GraphCms_JobTypeOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type GraphCms_JobTypeUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  job?: Maybe<GraphCms_JobUpdateManyInlineInput>;
  jobGroup?: Maybe<GraphCms_JobGroupUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_JobTypeUpdateLocalizationsInput>;
};

export type GraphCms_JobTypeUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_JobTypeUpdateLocalizationInput = {
  data: GraphCms_JobTypeUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobTypeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_JobTypeCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobTypeUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_JobTypeUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_JobTypeUpdateManyInlineInput = {
  /** Create and connect multiple JobType documents */
  create?: Maybe<Array<GraphCms_JobTypeCreateInput>>;
  /** Connect multiple existing JobType documents */
  connect?: Maybe<Array<GraphCms_JobTypeConnectInput>>;
  /** Override currently-connected documents with multiple existing JobType documents */
  set?: Maybe<Array<GraphCms_JobTypeWhereUniqueInput>>;
  /** Update multiple JobType documents */
  update?: Maybe<Array<GraphCms_JobTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple JobType documents */
  upsert?: Maybe<Array<GraphCms_JobTypeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple JobType documents */
  disconnect?: Maybe<Array<GraphCms_JobTypeWhereUniqueInput>>;
  /** Delete multiple JobType documents */
  delete?: Maybe<Array<GraphCms_JobTypeWhereUniqueInput>>;
};

export type GraphCms_JobTypeUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_JobTypeUpdateManyLocalizationsInput>;
};

export type GraphCms_JobTypeUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_JobTypeUpdateManyLocalizationInput = {
  data: GraphCms_JobTypeUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobTypeUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobTypeUpdateManyLocalizationInput>>;
};

export type GraphCms_JobTypeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_JobTypeWhereInput;
  /** Update many input */
  data: GraphCms_JobTypeUpdateManyInput;
};

export type GraphCms_JobTypeUpdateOneInlineInput = {
  /** Create and connect one JobType document */
  create?: Maybe<GraphCms_JobTypeCreateInput>;
  /** Update single JobType document */
  update?: Maybe<GraphCms_JobTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobType document */
  upsert?: Maybe<GraphCms_JobTypeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing JobType document */
  connect?: Maybe<GraphCms_JobTypeWhereUniqueInput>;
  /** Disconnect currently connected JobType document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected JobType document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_JobTypeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobTypeWhereUniqueInput;
  /** Document to update */
  data: GraphCms_JobTypeUpdateInput;
};

export type GraphCms_JobTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_JobTypeCreateInput;
  /** Update document if it exists */
  update: GraphCms_JobTypeUpdateInput;
};

export type GraphCms_JobTypeUpsertLocalizationInput = {
  update: GraphCms_JobTypeUpdateLocalizationDataInput;
  create: GraphCms_JobTypeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobTypeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobTypeWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_JobTypeUpsertInput;
};

/** Identifies documents */
export type GraphCms_JobTypeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobTypeWhereInput>>;
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
  job_every?: Maybe<GraphCms_JobWhereInput>;
  job_some?: Maybe<GraphCms_JobWhereInput>;
  job_none?: Maybe<GraphCms_JobWhereInput>;
  jobGroup_every?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_some?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_none?: Maybe<GraphCms_JobGroupWhereInput>;
};

/** References JobType record uniquely */
export type GraphCms_JobTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_JobUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_JobTypeUpdateOneInlineInput>;
  jobGroup?: Maybe<GraphCms_JobGroupUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_JobUpdateLocalizationsInput>;
};

export type GraphCms_JobUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_JobUpdateLocalizationInput = {
  data: GraphCms_JobUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_JobCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_JobUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_JobUpdateManyInlineInput = {
  /** Create and connect multiple Job documents */
  create?: Maybe<Array<GraphCms_JobCreateInput>>;
  /** Connect multiple existing Job documents */
  connect?: Maybe<Array<GraphCms_JobConnectInput>>;
  /** Override currently-connected documents with multiple existing Job documents */
  set?: Maybe<Array<GraphCms_JobWhereUniqueInput>>;
  /** Update multiple Job documents */
  update?: Maybe<Array<GraphCms_JobUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Job documents */
  upsert?: Maybe<Array<GraphCms_JobUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Job documents */
  disconnect?: Maybe<Array<GraphCms_JobWhereUniqueInput>>;
  /** Delete multiple Job documents */
  delete?: Maybe<Array<GraphCms_JobWhereUniqueInput>>;
};

export type GraphCms_JobUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_JobUpdateManyLocalizationsInput>;
};

export type GraphCms_JobUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_JobUpdateManyLocalizationInput = {
  data: GraphCms_JobUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_JobUpdateManyLocalizationInput>>;
};

export type GraphCms_JobUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_JobWhereInput;
  /** Update many input */
  data: GraphCms_JobUpdateManyInput;
};

export type GraphCms_JobUpdateOneInlineInput = {
  /** Create and connect one Job document */
  create?: Maybe<GraphCms_JobCreateInput>;
  /** Update single Job document */
  update?: Maybe<GraphCms_JobUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Job document */
  upsert?: Maybe<GraphCms_JobUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Job document */
  connect?: Maybe<GraphCms_JobWhereUniqueInput>;
  /** Disconnect currently connected Job document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Job document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_JobUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobWhereUniqueInput;
  /** Document to update */
  data: GraphCms_JobUpdateInput;
};

export type GraphCms_JobUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_JobCreateInput;
  /** Update document if it exists */
  update: GraphCms_JobUpdateInput;
};

export type GraphCms_JobUpsertLocalizationInput = {
  update: GraphCms_JobUpdateLocalizationDataInput;
  create: GraphCms_JobCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_JobUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_JobWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_JobUpsertInput;
};

/** Identifies documents */
export type GraphCms_JobWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_JobWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_JobWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_JobWhereInput>>;
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
  type?: Maybe<GraphCms_JobTypeWhereInput>;
  jobGroup_every?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_some?: Maybe<GraphCms_JobGroupWhereInput>;
  jobGroup_none?: Maybe<GraphCms_JobGroupWhereInput>;
};

/** References Job record uniquely */
export type GraphCms_JobWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


/** Locale system enumeration */
export type GraphCms_Locale = 
  /** System locale */
  | 'fr'
  | 'en';

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
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type GraphCms_ProcessSection = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_ProcessSection>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ProcessSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_ProcessSectionType>;
  steps: Array<GraphCms_ProcessStep>;
  employerPage: Array<GraphCms_EmployerPage>;
  candidatePage: Array<GraphCms_CandidatePage>;
  /** List of ProcessSection versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_ProcessSectionLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_ProcessSectionDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_ProcessSectionCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessSectionUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessSectionPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessSectionStepsArgs = {
  where?: Maybe<GraphCms_ProcessStepWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessStepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ProcessSectionEmployerPageArgs = {
  where?: Maybe<GraphCms_EmployerPageWhereInput>;
  orderBy?: Maybe<GraphCms_EmployerPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ProcessSectionCandidatePageArgs = {
  where?: Maybe<GraphCms_CandidatePageWhereInput>;
  orderBy?: Maybe<GraphCms_CandidatePageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ProcessSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_ProcessSectionConnectInput = {
  /** Document to connect */
  where: GraphCms_ProcessSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_ProcessSectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ProcessSectionEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ProcessSectionCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_ProcessSectionTypeCreateOneInlineInput>;
  steps?: Maybe<GraphCms_ProcessStepCreateManyInlineInput>;
  employerPage?: Maybe<GraphCms_EmployerPageCreateManyInlineInput>;
  candidatePage?: Maybe<GraphCms_CandidatePageCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ProcessSectionCreateLocalizationsInput>;
};

export type GraphCms_ProcessSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessSectionCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ProcessSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ProcessSectionCreateLocalizationInput>>;
};

export type GraphCms_ProcessSectionCreateManyInlineInput = {
  /** Create and connect multiple existing ProcessSection documents */
  create?: Maybe<Array<GraphCms_ProcessSectionCreateInput>>;
  /** Connect multiple existing ProcessSection documents */
  connect?: Maybe<Array<GraphCms_ProcessSectionWhereUniqueInput>>;
};

export type GraphCms_ProcessSectionCreateOneInlineInput = {
  /** Create and connect one ProcessSection document */
  create?: Maybe<GraphCms_ProcessSectionCreateInput>;
  /** Connect one existing ProcessSection document */
  connect?: Maybe<GraphCms_ProcessSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_ProcessSectionEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_ProcessSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ProcessSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ProcessSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ProcessSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ProcessSectionWhereInput>>;
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
  type?: Maybe<GraphCms_ProcessSectionTypeWhereInput>;
  steps_every?: Maybe<GraphCms_ProcessStepWhereInput>;
  steps_some?: Maybe<GraphCms_ProcessStepWhereInput>;
  steps_none?: Maybe<GraphCms_ProcessStepWhereInput>;
  employerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
};

export type GraphCms_ProcessSectionOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type GraphCms_ProcessSectionType = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_ProcessSectionType>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ProcessSectionType>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  processSection: Array<GraphCms_ProcessSection>;
  /** List of ProcessSectionType versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_ProcessSectionTypeLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_ProcessSectionTypeDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_ProcessSectionTypeCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessSectionTypeUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessSectionTypePublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessSectionTypeProcessSectionArgs = {
  where?: Maybe<GraphCms_ProcessSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ProcessSectionTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_ProcessSectionTypeConnectInput = {
  /** Document to connect */
  where: GraphCms_ProcessSectionTypeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_ProcessSectionTypeConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ProcessSectionTypeEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ProcessSectionTypeCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  processSection?: Maybe<GraphCms_ProcessSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ProcessSectionTypeCreateLocalizationsInput>;
};

export type GraphCms_ProcessSectionTypeCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessSectionTypeCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ProcessSectionTypeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionTypeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ProcessSectionTypeCreateLocalizationInput>>;
};

export type GraphCms_ProcessSectionTypeCreateManyInlineInput = {
  /** Create and connect multiple existing ProcessSectionType documents */
  create?: Maybe<Array<GraphCms_ProcessSectionTypeCreateInput>>;
  /** Connect multiple existing ProcessSectionType documents */
  connect?: Maybe<Array<GraphCms_ProcessSectionTypeWhereUniqueInput>>;
};

export type GraphCms_ProcessSectionTypeCreateOneInlineInput = {
  /** Create and connect one ProcessSectionType document */
  create?: Maybe<GraphCms_ProcessSectionTypeCreateInput>;
  /** Connect one existing ProcessSectionType document */
  connect?: Maybe<GraphCms_ProcessSectionTypeWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_ProcessSectionTypeEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_ProcessSectionType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ProcessSectionTypeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ProcessSectionTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ProcessSectionTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ProcessSectionTypeWhereInput>>;
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
  processSection_every?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_some?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_none?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

export type GraphCms_ProcessSectionTypeOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type GraphCms_ProcessSectionTypeUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  processSection?: Maybe<GraphCms_ProcessSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ProcessSectionTypeUpdateLocalizationsInput>;
};

export type GraphCms_ProcessSectionTypeUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessSectionTypeUpdateLocalizationInput = {
  data: GraphCms_ProcessSectionTypeUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionTypeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ProcessSectionTypeCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ProcessSectionTypeUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ProcessSectionTypeUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ProcessSectionTypeUpdateManyInlineInput = {
  /** Create and connect multiple ProcessSectionType documents */
  create?: Maybe<Array<GraphCms_ProcessSectionTypeCreateInput>>;
  /** Connect multiple existing ProcessSectionType documents */
  connect?: Maybe<Array<GraphCms_ProcessSectionTypeConnectInput>>;
  /** Override currently-connected documents with multiple existing ProcessSectionType documents */
  set?: Maybe<Array<GraphCms_ProcessSectionTypeWhereUniqueInput>>;
  /** Update multiple ProcessSectionType documents */
  update?: Maybe<Array<GraphCms_ProcessSectionTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProcessSectionType documents */
  upsert?: Maybe<Array<GraphCms_ProcessSectionTypeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProcessSectionType documents */
  disconnect?: Maybe<Array<GraphCms_ProcessSectionTypeWhereUniqueInput>>;
  /** Delete multiple ProcessSectionType documents */
  delete?: Maybe<Array<GraphCms_ProcessSectionTypeWhereUniqueInput>>;
};

export type GraphCms_ProcessSectionTypeUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_ProcessSectionTypeUpdateManyLocalizationsInput>;
};

export type GraphCms_ProcessSectionTypeUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessSectionTypeUpdateManyLocalizationInput = {
  data: GraphCms_ProcessSectionTypeUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionTypeUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ProcessSectionTypeUpdateManyLocalizationInput>>;
};

export type GraphCms_ProcessSectionTypeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ProcessSectionTypeWhereInput;
  /** Update many input */
  data: GraphCms_ProcessSectionTypeUpdateManyInput;
};

export type GraphCms_ProcessSectionTypeUpdateOneInlineInput = {
  /** Create and connect one ProcessSectionType document */
  create?: Maybe<GraphCms_ProcessSectionTypeCreateInput>;
  /** Update single ProcessSectionType document */
  update?: Maybe<GraphCms_ProcessSectionTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProcessSectionType document */
  upsert?: Maybe<GraphCms_ProcessSectionTypeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProcessSectionType document */
  connect?: Maybe<GraphCms_ProcessSectionTypeWhereUniqueInput>;
  /** Disconnect currently connected ProcessSectionType document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProcessSectionType document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_ProcessSectionTypeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ProcessSectionTypeWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ProcessSectionTypeUpdateInput;
};

export type GraphCms_ProcessSectionTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ProcessSectionTypeCreateInput;
  /** Update document if it exists */
  update: GraphCms_ProcessSectionTypeUpdateInput;
};

export type GraphCms_ProcessSectionTypeUpsertLocalizationInput = {
  update: GraphCms_ProcessSectionTypeUpdateLocalizationDataInput;
  create: GraphCms_ProcessSectionTypeCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionTypeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ProcessSectionTypeWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ProcessSectionTypeUpsertInput;
};

/** Identifies documents */
export type GraphCms_ProcessSectionTypeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ProcessSectionTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ProcessSectionTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ProcessSectionTypeWhereInput>>;
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
  processSection_every?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_some?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_none?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

/** References ProcessSectionType record uniquely */
export type GraphCms_ProcessSectionTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_ProcessSectionUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  type?: Maybe<GraphCms_ProcessSectionTypeUpdateOneInlineInput>;
  steps?: Maybe<GraphCms_ProcessStepUpdateManyInlineInput>;
  employerPage?: Maybe<GraphCms_EmployerPageUpdateManyInlineInput>;
  candidatePage?: Maybe<GraphCms_CandidatePageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ProcessSectionUpdateLocalizationsInput>;
};

export type GraphCms_ProcessSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessSectionUpdateLocalizationInput = {
  data: GraphCms_ProcessSectionUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ProcessSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ProcessSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ProcessSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ProcessSectionUpdateManyInlineInput = {
  /** Create and connect multiple ProcessSection documents */
  create?: Maybe<Array<GraphCms_ProcessSectionCreateInput>>;
  /** Connect multiple existing ProcessSection documents */
  connect?: Maybe<Array<GraphCms_ProcessSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing ProcessSection documents */
  set?: Maybe<Array<GraphCms_ProcessSectionWhereUniqueInput>>;
  /** Update multiple ProcessSection documents */
  update?: Maybe<Array<GraphCms_ProcessSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProcessSection documents */
  upsert?: Maybe<Array<GraphCms_ProcessSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProcessSection documents */
  disconnect?: Maybe<Array<GraphCms_ProcessSectionWhereUniqueInput>>;
  /** Delete multiple ProcessSection documents */
  delete?: Maybe<Array<GraphCms_ProcessSectionWhereUniqueInput>>;
};

export type GraphCms_ProcessSectionUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_ProcessSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_ProcessSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessSectionUpdateManyLocalizationInput = {
  data: GraphCms_ProcessSectionUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ProcessSectionUpdateManyLocalizationInput>>;
};

export type GraphCms_ProcessSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ProcessSectionWhereInput;
  /** Update many input */
  data: GraphCms_ProcessSectionUpdateManyInput;
};

export type GraphCms_ProcessSectionUpdateOneInlineInput = {
  /** Create and connect one ProcessSection document */
  create?: Maybe<GraphCms_ProcessSectionCreateInput>;
  /** Update single ProcessSection document */
  update?: Maybe<GraphCms_ProcessSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProcessSection document */
  upsert?: Maybe<GraphCms_ProcessSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProcessSection document */
  connect?: Maybe<GraphCms_ProcessSectionWhereUniqueInput>;
  /** Disconnect currently connected ProcessSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProcessSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_ProcessSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ProcessSectionWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ProcessSectionUpdateInput;
};

export type GraphCms_ProcessSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ProcessSectionCreateInput;
  /** Update document if it exists */
  update: GraphCms_ProcessSectionUpdateInput;
};

export type GraphCms_ProcessSectionUpsertLocalizationInput = {
  update: GraphCms_ProcessSectionUpdateLocalizationDataInput;
  create: GraphCms_ProcessSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ProcessSectionWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ProcessSectionUpsertInput;
};

/** Identifies documents */
export type GraphCms_ProcessSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ProcessSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ProcessSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ProcessSectionWhereInput>>;
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
  type?: Maybe<GraphCms_ProcessSectionTypeWhereInput>;
  steps_every?: Maybe<GraphCms_ProcessStepWhereInput>;
  steps_some?: Maybe<GraphCms_ProcessStepWhereInput>;
  steps_none?: Maybe<GraphCms_ProcessStepWhereInput>;
  employerPage_every?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_some?: Maybe<GraphCms_EmployerPageWhereInput>;
  employerPage_none?: Maybe<GraphCms_EmployerPageWhereInput>;
  candidatePage_every?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_some?: Maybe<GraphCms_CandidatePageWhereInput>;
  candidatePage_none?: Maybe<GraphCms_CandidatePageWhereInput>;
};

/** References ProcessSection record uniquely */
export type GraphCms_ProcessSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_ProcessStep = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_ProcessStep>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ProcessStep>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  processSection: Array<GraphCms_ProcessSection>;
  /** List of ProcessStep versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_ProcessStepLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_ProcessStepDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_ProcessStepCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessStepUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessStepPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_ProcessStepProcessSectionArgs = {
  where?: Maybe<GraphCms_ProcessSectionWhereInput>;
  orderBy?: Maybe<GraphCms_ProcessSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_ProcessStepHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_ProcessStepConnectInput = {
  /** Document to connect */
  where: GraphCms_ProcessStepWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_ProcessStepConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_ProcessStepEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_ProcessStepCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  processSection?: Maybe<GraphCms_ProcessSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_ProcessStepCreateLocalizationsInput>;
};

export type GraphCms_ProcessStepCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessStepCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_ProcessStepCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessStepCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_ProcessStepCreateLocalizationInput>>;
};

export type GraphCms_ProcessStepCreateManyInlineInput = {
  /** Create and connect multiple existing ProcessStep documents */
  create?: Maybe<Array<GraphCms_ProcessStepCreateInput>>;
  /** Connect multiple existing ProcessStep documents */
  connect?: Maybe<Array<GraphCms_ProcessStepWhereUniqueInput>>;
};

export type GraphCms_ProcessStepCreateOneInlineInput = {
  /** Create and connect one ProcessStep document */
  create?: Maybe<GraphCms_ProcessStepCreateInput>;
  /** Connect one existing ProcessStep document */
  connect?: Maybe<GraphCms_ProcessStepWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_ProcessStepEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_ProcessStep;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_ProcessStepManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ProcessStepWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ProcessStepWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ProcessStepWhereInput>>;
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
  processSection_every?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_some?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_none?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

export type GraphCms_ProcessStepOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type GraphCms_ProcessStepUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  processSection?: Maybe<GraphCms_ProcessSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_ProcessStepUpdateLocalizationsInput>;
};

export type GraphCms_ProcessStepUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessStepUpdateLocalizationInput = {
  data: GraphCms_ProcessStepUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessStepUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_ProcessStepCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ProcessStepUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_ProcessStepUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ProcessStepUpdateManyInlineInput = {
  /** Create and connect multiple ProcessStep documents */
  create?: Maybe<Array<GraphCms_ProcessStepCreateInput>>;
  /** Connect multiple existing ProcessStep documents */
  connect?: Maybe<Array<GraphCms_ProcessStepConnectInput>>;
  /** Override currently-connected documents with multiple existing ProcessStep documents */
  set?: Maybe<Array<GraphCms_ProcessStepWhereUniqueInput>>;
  /** Update multiple ProcessStep documents */
  update?: Maybe<Array<GraphCms_ProcessStepUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProcessStep documents */
  upsert?: Maybe<Array<GraphCms_ProcessStepUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ProcessStep documents */
  disconnect?: Maybe<Array<GraphCms_ProcessStepWhereUniqueInput>>;
  /** Delete multiple ProcessStep documents */
  delete?: Maybe<Array<GraphCms_ProcessStepWhereUniqueInput>>;
};

export type GraphCms_ProcessStepUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_ProcessStepUpdateManyLocalizationsInput>;
};

export type GraphCms_ProcessStepUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type GraphCms_ProcessStepUpdateManyLocalizationInput = {
  data: GraphCms_ProcessStepUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessStepUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_ProcessStepUpdateManyLocalizationInput>>;
};

export type GraphCms_ProcessStepUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_ProcessStepWhereInput;
  /** Update many input */
  data: GraphCms_ProcessStepUpdateManyInput;
};

export type GraphCms_ProcessStepUpdateOneInlineInput = {
  /** Create and connect one ProcessStep document */
  create?: Maybe<GraphCms_ProcessStepCreateInput>;
  /** Update single ProcessStep document */
  update?: Maybe<GraphCms_ProcessStepUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProcessStep document */
  upsert?: Maybe<GraphCms_ProcessStepUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ProcessStep document */
  connect?: Maybe<GraphCms_ProcessStepWhereUniqueInput>;
  /** Disconnect currently connected ProcessStep document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ProcessStep document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_ProcessStepUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ProcessStepWhereUniqueInput;
  /** Document to update */
  data: GraphCms_ProcessStepUpdateInput;
};

export type GraphCms_ProcessStepUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ProcessStepCreateInput;
  /** Update document if it exists */
  update: GraphCms_ProcessStepUpdateInput;
};

export type GraphCms_ProcessStepUpsertLocalizationInput = {
  update: GraphCms_ProcessStepUpdateLocalizationDataInput;
  create: GraphCms_ProcessStepCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_ProcessStepUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_ProcessStepWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_ProcessStepUpsertInput;
};

/** Identifies documents */
export type GraphCms_ProcessStepWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ProcessStepWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ProcessStepWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ProcessStepWhereInput>>;
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
  processSection_every?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_some?: Maybe<GraphCms_ProcessSectionWhereInput>;
  processSection_none?: Maybe<GraphCms_ProcessSectionWhereInput>;
};

/** References ProcessStep record uniquely */
export type GraphCms_ProcessStepWhereUniqueInput = {
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

export type GraphCms_Testimonial = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Testimonial>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Testimonial>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  authorName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  testimonialSection: Array<GraphCms_TestimonialSection>;
  /** List of Testimonial versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_TestimonialLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_TestimonialDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_TestimonialCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_TestimonialUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_TestimonialPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_TestimonialTestimonialSectionArgs = {
  where?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  orderBy?: Maybe<GraphCms_TestimonialSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_TestimonialHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_TestimonialConnectInput = {
  /** Document to connect */
  where: GraphCms_TestimonialWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_TestimonialConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_TestimonialEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_TestimonialCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** authorName input for default locale (fr) */
  authorName?: Maybe<Scalars['String']>;
  /** message input for default locale (fr) */
  message?: Maybe<Scalars['String']>;
  testimonialSection?: Maybe<GraphCms_TestimonialSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_TestimonialCreateLocalizationsInput>;
};

export type GraphCms_TestimonialCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  authorName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type GraphCms_TestimonialCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_TestimonialCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_TestimonialCreateLocalizationInput>>;
};

export type GraphCms_TestimonialCreateManyInlineInput = {
  /** Create and connect multiple existing Testimonial documents */
  create?: Maybe<Array<GraphCms_TestimonialCreateInput>>;
  /** Connect multiple existing Testimonial documents */
  connect?: Maybe<Array<GraphCms_TestimonialWhereUniqueInput>>;
};

export type GraphCms_TestimonialCreateOneInlineInput = {
  /** Create and connect one Testimonial document */
  create?: Maybe<GraphCms_TestimonialCreateInput>;
  /** Connect one existing Testimonial document */
  connect?: Maybe<GraphCms_TestimonialWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_TestimonialEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_Testimonial;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_TestimonialManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_TestimonialWhereInput>>;
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
  testimonialSection_every?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  testimonialSection_some?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  testimonialSection_none?: Maybe<GraphCms_TestimonialSectionWhereInput>;
};

export type GraphCms_TestimonialOrderByInput = 
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'authorName_ASC'
  | 'authorName_DESC'
  | 'message_ASC'
  | 'message_DESC';

export type GraphCms_TestimonialSection = GraphCms_Node & {
  /** System stage field */
  stage: GraphCms_Stage;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_TestimonialSection>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_TestimonialSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  testomonials: Array<GraphCms_Testimonial>;
  /** List of TestimonialSection versions */
  history: Array<GraphCms_Version>;
};


export type GraphCms_TestimonialSectionLocalizationsArgs = {
  locales?: Array<GraphCms_Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GraphCms_TestimonialSectionDocumentInStagesArgs = {
  stages?: Array<GraphCms_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GraphCms_TestimonialSectionCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_TestimonialSectionUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_TestimonialSectionPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


export type GraphCms_TestimonialSectionTestomonialsArgs = {
  where?: Maybe<GraphCms_TestimonialWhereInput>;
  orderBy?: Maybe<GraphCms_TestimonialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GraphCms_TestimonialSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<GraphCms_Stage>;
};

export type GraphCms_TestimonialSectionConnectInput = {
  /** Document to connect */
  where: GraphCms_TestimonialSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GraphCms_TestimonialSectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<GraphCms_TestimonialSectionEdge>;
  aggregate: GraphCms_Aggregate;
};

export type GraphCms_TestimonialSectionCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  testomonials?: Maybe<GraphCms_TestimonialCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_TestimonialSectionCreateLocalizationsInput>;
};

export type GraphCms_TestimonialSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_TestimonialSectionCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_TestimonialSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_TestimonialSectionCreateLocalizationInput>>;
};

export type GraphCms_TestimonialSectionCreateManyInlineInput = {
  /** Create and connect multiple existing TestimonialSection documents */
  create?: Maybe<Array<GraphCms_TestimonialSectionCreateInput>>;
  /** Connect multiple existing TestimonialSection documents */
  connect?: Maybe<Array<GraphCms_TestimonialSectionWhereUniqueInput>>;
};

export type GraphCms_TestimonialSectionCreateOneInlineInput = {
  /** Create and connect one TestimonialSection document */
  create?: Maybe<GraphCms_TestimonialSectionCreateInput>;
  /** Connect one existing TestimonialSection document */
  connect?: Maybe<GraphCms_TestimonialSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type GraphCms_TestimonialSectionEdge = {
  /** The item at the end of the edge. */
  node: GraphCms_TestimonialSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GraphCms_TestimonialSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_TestimonialSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_TestimonialSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_TestimonialSectionWhereInput>>;
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
  testomonials_every?: Maybe<GraphCms_TestimonialWhereInput>;
  testomonials_some?: Maybe<GraphCms_TestimonialWhereInput>;
  testomonials_none?: Maybe<GraphCms_TestimonialWhereInput>;
};

export type GraphCms_TestimonialSectionOrderByInput = 
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
  | 'description_ASC'
  | 'description_DESC';

export type GraphCms_TestimonialSectionUpdateInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  testomonials?: Maybe<GraphCms_TestimonialUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_TestimonialSectionUpdateLocalizationsInput>;
};

export type GraphCms_TestimonialSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_TestimonialSectionUpdateLocalizationInput = {
  data: GraphCms_TestimonialSectionUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_TestimonialSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_TestimonialSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_TestimonialSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_TestimonialSectionUpdateManyInlineInput = {
  /** Create and connect multiple TestimonialSection documents */
  create?: Maybe<Array<GraphCms_TestimonialSectionCreateInput>>;
  /** Connect multiple existing TestimonialSection documents */
  connect?: Maybe<Array<GraphCms_TestimonialSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing TestimonialSection documents */
  set?: Maybe<Array<GraphCms_TestimonialSectionWhereUniqueInput>>;
  /** Update multiple TestimonialSection documents */
  update?: Maybe<Array<GraphCms_TestimonialSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TestimonialSection documents */
  upsert?: Maybe<Array<GraphCms_TestimonialSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple TestimonialSection documents */
  disconnect?: Maybe<Array<GraphCms_TestimonialSectionWhereUniqueInput>>;
  /** Delete multiple TestimonialSection documents */
  delete?: Maybe<Array<GraphCms_TestimonialSectionWhereUniqueInput>>;
};

export type GraphCms_TestimonialSectionUpdateManyInput = {
  /** title input for default locale (fr) */
  title?: Maybe<Scalars['String']>;
  /** description input for default locale (fr) */
  description?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_TestimonialSectionUpdateManyLocalizationsInput>;
};

export type GraphCms_TestimonialSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphCms_TestimonialSectionUpdateManyLocalizationInput = {
  data: GraphCms_TestimonialSectionUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_TestimonialSectionUpdateManyLocalizationInput>>;
};

export type GraphCms_TestimonialSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_TestimonialSectionWhereInput;
  /** Update many input */
  data: GraphCms_TestimonialSectionUpdateManyInput;
};

export type GraphCms_TestimonialSectionUpdateOneInlineInput = {
  /** Create and connect one TestimonialSection document */
  create?: Maybe<GraphCms_TestimonialSectionCreateInput>;
  /** Update single TestimonialSection document */
  update?: Maybe<GraphCms_TestimonialSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TestimonialSection document */
  upsert?: Maybe<GraphCms_TestimonialSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing TestimonialSection document */
  connect?: Maybe<GraphCms_TestimonialSectionWhereUniqueInput>;
  /** Disconnect currently connected TestimonialSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected TestimonialSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_TestimonialSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_TestimonialSectionWhereUniqueInput;
  /** Document to update */
  data: GraphCms_TestimonialSectionUpdateInput;
};

export type GraphCms_TestimonialSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_TestimonialSectionCreateInput;
  /** Update document if it exists */
  update: GraphCms_TestimonialSectionUpdateInput;
};

export type GraphCms_TestimonialSectionUpsertLocalizationInput = {
  update: GraphCms_TestimonialSectionUpdateLocalizationDataInput;
  create: GraphCms_TestimonialSectionCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_TestimonialSectionWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_TestimonialSectionUpsertInput;
};

/** Identifies documents */
export type GraphCms_TestimonialSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_TestimonialSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_TestimonialSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_TestimonialSectionWhereInput>>;
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
  testomonials_every?: Maybe<GraphCms_TestimonialWhereInput>;
  testomonials_some?: Maybe<GraphCms_TestimonialWhereInput>;
  testomonials_none?: Maybe<GraphCms_TestimonialWhereInput>;
};

/** References TestimonialSection record uniquely */
export type GraphCms_TestimonialSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_TestimonialUpdateInput = {
  /** authorName input for default locale (fr) */
  authorName?: Maybe<Scalars['String']>;
  /** message input for default locale (fr) */
  message?: Maybe<Scalars['String']>;
  testimonialSection?: Maybe<GraphCms_TestimonialSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_TestimonialUpdateLocalizationsInput>;
};

export type GraphCms_TestimonialUpdateLocalizationDataInput = {
  authorName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type GraphCms_TestimonialUpdateLocalizationInput = {
  data: GraphCms_TestimonialUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_TestimonialCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_TestimonialUpdateLocalizationInput>>;
  upsert?: Maybe<Array<GraphCms_TestimonialUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_TestimonialUpdateManyInlineInput = {
  /** Create and connect multiple Testimonial documents */
  create?: Maybe<Array<GraphCms_TestimonialCreateInput>>;
  /** Connect multiple existing Testimonial documents */
  connect?: Maybe<Array<GraphCms_TestimonialConnectInput>>;
  /** Override currently-connected documents with multiple existing Testimonial documents */
  set?: Maybe<Array<GraphCms_TestimonialWhereUniqueInput>>;
  /** Update multiple Testimonial documents */
  update?: Maybe<Array<GraphCms_TestimonialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Testimonial documents */
  upsert?: Maybe<Array<GraphCms_TestimonialUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Testimonial documents */
  disconnect?: Maybe<Array<GraphCms_TestimonialWhereUniqueInput>>;
  /** Delete multiple Testimonial documents */
  delete?: Maybe<Array<GraphCms_TestimonialWhereUniqueInput>>;
};

export type GraphCms_TestimonialUpdateManyInput = {
  /** authorName input for default locale (fr) */
  authorName?: Maybe<Scalars['String']>;
  /** message input for default locale (fr) */
  message?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_TestimonialUpdateManyLocalizationsInput>;
};

export type GraphCms_TestimonialUpdateManyLocalizationDataInput = {
  authorName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type GraphCms_TestimonialUpdateManyLocalizationInput = {
  data: GraphCms_TestimonialUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_TestimonialUpdateManyLocalizationInput>>;
};

export type GraphCms_TestimonialUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GraphCms_TestimonialWhereInput;
  /** Update many input */
  data: GraphCms_TestimonialUpdateManyInput;
};

export type GraphCms_TestimonialUpdateOneInlineInput = {
  /** Create and connect one Testimonial document */
  create?: Maybe<GraphCms_TestimonialCreateInput>;
  /** Update single Testimonial document */
  update?: Maybe<GraphCms_TestimonialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Testimonial document */
  upsert?: Maybe<GraphCms_TestimonialUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Testimonial document */
  connect?: Maybe<GraphCms_TestimonialWhereUniqueInput>;
  /** Disconnect currently connected Testimonial document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Testimonial document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_TestimonialUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_TestimonialWhereUniqueInput;
  /** Document to update */
  data: GraphCms_TestimonialUpdateInput;
};

export type GraphCms_TestimonialUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_TestimonialCreateInput;
  /** Update document if it exists */
  update: GraphCms_TestimonialUpdateInput;
};

export type GraphCms_TestimonialUpsertLocalizationInput = {
  update: GraphCms_TestimonialUpdateLocalizationDataInput;
  create: GraphCms_TestimonialCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_TestimonialUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GraphCms_TestimonialWhereUniqueInput;
  /** Upsert data */
  data: GraphCms_TestimonialUpsertInput;
};

/** Identifies documents */
export type GraphCms_TestimonialWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_TestimonialWhereInput>>;
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
  authorName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  authorName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  authorName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  authorName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  authorName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  authorName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  authorName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  authorName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  authorName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  authorName_not_ends_with?: Maybe<Scalars['String']>;
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
  testimonialSection_every?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  testimonialSection_some?: Maybe<GraphCms_TestimonialSectionWhereInput>;
  testimonialSection_none?: Maybe<GraphCms_TestimonialSectionWhereInput>;
};

/** References Testimonial record uniquely */
export type GraphCms_TestimonialWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

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

export type Image = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  image?: Maybe<File>;
  url?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type ImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageEdge>;
  nodes: Array<Image>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageGroupConnection>;
};


export type ImageConnectionDistinctArgs = {
  field: ImageFieldsEnum;
};


export type ImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageFieldsEnum;
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

export type ImageEdge = {
  next?: Maybe<Image>;
  node: Image;
  previous?: Maybe<Image>;
};

export type ImageFieldsEnum = 
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
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___url'
  | 'image___publicURL'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___resolutions___base64'
  | 'image___childImageSharp___resolutions___tracedSVG'
  | 'image___childImageSharp___resolutions___aspectRatio'
  | 'image___childImageSharp___resolutions___width'
  | 'image___childImageSharp___resolutions___height'
  | 'image___childImageSharp___resolutions___src'
  | 'image___childImageSharp___resolutions___srcSet'
  | 'image___childImageSharp___resolutions___srcWebp'
  | 'image___childImageSharp___resolutions___srcSetWebp'
  | 'image___childImageSharp___resolutions___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___sizes___base64'
  | 'image___childImageSharp___sizes___tracedSVG'
  | 'image___childImageSharp___sizes___aspectRatio'
  | 'image___childImageSharp___sizes___src'
  | 'image___childImageSharp___sizes___srcSet'
  | 'image___childImageSharp___sizes___srcWebp'
  | 'image___childImageSharp___sizes___srcSetWebp'
  | 'image___childImageSharp___sizes___sizes'
  | 'image___childImageSharp___sizes___originalImg'
  | 'image___childImageSharp___sizes___originalName'
  | 'image___childImageSharp___sizes___presentationWidth'
  | 'image___childImageSharp___sizes___presentationHeight'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'url'
  | 'fileName'
  | 'content';

export type ImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<FileFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
};

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

export type ImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageEdge>;
  nodes: Array<Image>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type ImageSortInput = {
  fields?: Maybe<Array<Maybe<ImageFieldsEnum>>>;
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
  image?: Maybe<Image>;
  allImage: ImageConnection;
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


export type QueryImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<FileFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllImageArgs = {
  filter?: Maybe<ImageFilterInput>;
  sort?: Maybe<ImageSortInput>;
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
  | 'pluginCreator___pluginOptions___path'
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
  | 'pluginOptions___path'
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
  path?: Maybe<Scalars['String']>;
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
  path?: Maybe<StringQueryOperatorInput>;
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

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { gcms: { companyMedias: Array<{ logoFooter?: Maybe<Pick<GraphCms_Asset, 'url'>> }>, companyAddresses: Array<Pick<GraphCms_CompanyAddress, 'addressLine1' | 'addressLine2' | 'city' | 'provinceState' | 'postalCode' | 'country' | 'websiteUrl' | 'phone' | 'phoneNoFees' | 'email'>> } };

export type TopBarQueryVariables = Exact<{ [key: string]: never; }>;


export type TopBarQuery = { gcms: { companyMedias: Array<{ logo?: Maybe<Pick<GraphCms_Asset, 'url'>> }> } };

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { bannerImage?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, gcms: { aboutPages: Array<(
      Pick<GraphCms_AboutPage, 'bannerTitle'>
      & { actionSections: Array<Pick<GraphCms_ActionSection, 'title' | 'subtitle' | 'actionText'>>, infoSections: Array<(
        Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'>
        & { infoTiles: Array<Pick<GraphCms_InfoTile, 'illustration' | 'title' | 'text'>>, childs: Array<Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>>, image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
      )> }
    )> } };

export type BlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPageQuery = { bannerImage?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, gcms: { blogPages: Array<(
      Pick<GraphCms_BlogPage, 'bannerTitle'>
      & { blogSection?: Maybe<(
        Pick<GraphCms_BlogSection, 'id' | 'title' | 'titleHighlight' | 'text' | 'actionLabel'>
        & { posts: Array<(
          Pick<GraphCms_BlogPost, 'id' | 'createdAt' | 'title'>
          & { image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
        )> }
      )> }
    )> } };

export type CandidatePageQueryVariables = Exact<{ [key: string]: never; }>;


export type CandidatePageQuery = { bannerImage?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, gcms: { candidatePages: Array<(
      Pick<GraphCms_CandidatePage, 'bannerTitle'>
      & { actionSections: Array<Pick<GraphCms_ActionSection, 'title' | 'subtitle' | 'actionText'>>, jobSection?: Maybe<(
        Pick<GraphCms_JobSection, 'title' | 'titleHighlight'>
        & { type?: Maybe<(
          Pick<GraphCms_JobSectionType, 'title'>
          & { jobSection: Array<(
            Pick<GraphCms_JobSection, 'id' | 'title'>
            & { groups: Array<{ jobs: Array<Pick<GraphCms_Job, 'id' | 'title'>> }> }
          )> }
        )> }
      )>, infoSections: Array<(
        Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'>
        & { infoChecks: Array<Pick<GraphCms_InfoCheck, 'text'>>, infoTiles: Array<Pick<GraphCms_InfoTile, 'illustration' | 'title' | 'text'>>, childs: Array<Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>>, image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
      )> }
    )> } };

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { bannerImage?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, gcms: { contactUsPages: Array<(
      Pick<GraphCms_ContactUsPage, 'bannerTitle'>
      & { infoSections: Array<(
        Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'>
        & { infoTiles: Array<Pick<GraphCms_InfoTile, 'illustration' | 'title' | 'text'>>, childs: Array<Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>>, image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
      )> }
    )> } };

export type EmployerPageQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployerPageQuery = { bannerImage?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, gcms: { employerPages: Array<(
      Pick<GraphCms_EmployerPage, 'bannerTitle'>
      & { actionSections: Array<Pick<GraphCms_ActionSection, 'title' | 'subtitle' | 'actionText'>>, jobSection?: Maybe<(
        Pick<GraphCms_JobSection, 'title' | 'titleHighlight'>
        & { type?: Maybe<Pick<GraphCms_JobSectionType, 'title'>>, groups: Array<{ typeName?: Maybe<(
            Pick<GraphCms_JobType, 'id' | 'title'>
            & { jobGroup: Array<{ jobs: Array<Pick<GraphCms_Job, 'id' | 'title'>> }> }
          )> }> }
      )>, infoSections: Array<(
        Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'>
        & { infoTiles: Array<Pick<GraphCms_InfoTile, 'illustration' | 'title' | 'text'>>, childs: Array<Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>>, image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
      )> }
    )> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { bannerImageMobile?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, bannerImageDesktop?: Maybe<(
    Pick<File, 'id'>
    & { childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }
  )>, gcms: { indexPages: Array<(
      Pick<GraphCms_IndexPage, 'bannerTitle' | 'bannerSubTitle'>
      & { infoSections: Array<(
        Pick<GraphCms_InfoSection, 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText'>
        & { infoTiles: Array<Pick<GraphCms_InfoTile, 'illustration' | 'title' | 'text'>>, childs: Array<Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>>, image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
      )>, blogSection?: Maybe<(
        Pick<GraphCms_BlogSection, 'id' | 'title' | 'titleHighlight' | 'text' | 'actionLabel'>
        & { posts: Array<(
          Pick<GraphCms_BlogPost, 'id' | 'createdAt' | 'title'>
          & { image?: Maybe<Pick<GraphCms_Asset, 'url'>> }
        )> }
      )> }
    )> } };
