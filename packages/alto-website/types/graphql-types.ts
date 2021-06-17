export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
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
  | 'localFile___childrenImageSharp'
  | 'localFile___childrenImageSharp___fixed___base64'
  | 'localFile___childrenImageSharp___fixed___tracedSVG'
  | 'localFile___childrenImageSharp___fixed___aspectRatio'
  | 'localFile___childrenImageSharp___fixed___width'
  | 'localFile___childrenImageSharp___fixed___height'
  | 'localFile___childrenImageSharp___fixed___src'
  | 'localFile___childrenImageSharp___fixed___srcSet'
  | 'localFile___childrenImageSharp___fixed___srcWebp'
  | 'localFile___childrenImageSharp___fixed___srcSetWebp'
  | 'localFile___childrenImageSharp___fixed___originalName'
  | 'localFile___childrenImageSharp___resolutions___base64'
  | 'localFile___childrenImageSharp___resolutions___tracedSVG'
  | 'localFile___childrenImageSharp___resolutions___aspectRatio'
  | 'localFile___childrenImageSharp___resolutions___width'
  | 'localFile___childrenImageSharp___resolutions___height'
  | 'localFile___childrenImageSharp___resolutions___src'
  | 'localFile___childrenImageSharp___resolutions___srcSet'
  | 'localFile___childrenImageSharp___resolutions___srcWebp'
  | 'localFile___childrenImageSharp___resolutions___srcSetWebp'
  | 'localFile___childrenImageSharp___resolutions___originalName'
  | 'localFile___childrenImageSharp___fluid___base64'
  | 'localFile___childrenImageSharp___fluid___tracedSVG'
  | 'localFile___childrenImageSharp___fluid___aspectRatio'
  | 'localFile___childrenImageSharp___fluid___src'
  | 'localFile___childrenImageSharp___fluid___srcSet'
  | 'localFile___childrenImageSharp___fluid___srcWebp'
  | 'localFile___childrenImageSharp___fluid___srcSetWebp'
  | 'localFile___childrenImageSharp___fluid___sizes'
  | 'localFile___childrenImageSharp___fluid___originalImg'
  | 'localFile___childrenImageSharp___fluid___originalName'
  | 'localFile___childrenImageSharp___fluid___presentationWidth'
  | 'localFile___childrenImageSharp___fluid___presentationHeight'
  | 'localFile___childrenImageSharp___sizes___base64'
  | 'localFile___childrenImageSharp___sizes___tracedSVG'
  | 'localFile___childrenImageSharp___sizes___aspectRatio'
  | 'localFile___childrenImageSharp___sizes___src'
  | 'localFile___childrenImageSharp___sizes___srcSet'
  | 'localFile___childrenImageSharp___sizes___srcWebp'
  | 'localFile___childrenImageSharp___sizes___srcSetWebp'
  | 'localFile___childrenImageSharp___sizes___sizes'
  | 'localFile___childrenImageSharp___sizes___originalImg'
  | 'localFile___childrenImageSharp___sizes___originalName'
  | 'localFile___childrenImageSharp___sizes___presentationWidth'
  | 'localFile___childrenImageSharp___sizes___presentationHeight'
  | 'localFile___childrenImageSharp___gatsbyImageData'
  | 'localFile___childrenImageSharp___original___width'
  | 'localFile___childrenImageSharp___original___height'
  | 'localFile___childrenImageSharp___original___src'
  | 'localFile___childrenImageSharp___resize___src'
  | 'localFile___childrenImageSharp___resize___tracedSVG'
  | 'localFile___childrenImageSharp___resize___width'
  | 'localFile___childrenImageSharp___resize___height'
  | 'localFile___childrenImageSharp___resize___aspectRatio'
  | 'localFile___childrenImageSharp___resize___originalName'
  | 'localFile___childrenImageSharp___id'
  | 'localFile___childrenImageSharp___parent___id'
  | 'localFile___childrenImageSharp___parent___children'
  | 'localFile___childrenImageSharp___children'
  | 'localFile___childrenImageSharp___children___id'
  | 'localFile___childrenImageSharp___children___children'
  | 'localFile___childrenImageSharp___internal___content'
  | 'localFile___childrenImageSharp___internal___contentDigest'
  | 'localFile___childrenImageSharp___internal___description'
  | 'localFile___childrenImageSharp___internal___fieldOwners'
  | 'localFile___childrenImageSharp___internal___ignoreType'
  | 'localFile___childrenImageSharp___internal___mediaType'
  | 'localFile___childrenImageSharp___internal___owner'
  | 'localFile___childrenImageSharp___internal___type'
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
  | 'localFile___childImageSharp___gatsbyImageData'
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
  | 'localFile___childrenMdx'
  | 'localFile___childrenMdx___rawBody'
  | 'localFile___childrenMdx___fileAbsolutePath'
  | 'localFile___childrenMdx___frontmatter___title'
  | 'localFile___childrenMdx___frontmatter___name'
  | 'localFile___childrenMdx___frontmatter___description'
  | 'localFile___childrenMdx___frontmatter___tags'
  | 'localFile___childrenMdx___frontmatter___version'
  | 'localFile___childrenMdx___frontmatter___status'
  | 'localFile___childrenMdx___slug'
  | 'localFile___childrenMdx___body'
  | 'localFile___childrenMdx___excerpt'
  | 'localFile___childrenMdx___headings'
  | 'localFile___childrenMdx___headings___value'
  | 'localFile___childrenMdx___headings___depth'
  | 'localFile___childrenMdx___html'
  | 'localFile___childrenMdx___mdxAST'
  | 'localFile___childrenMdx___tableOfContents'
  | 'localFile___childrenMdx___timeToRead'
  | 'localFile___childrenMdx___wordCount___paragraphs'
  | 'localFile___childrenMdx___wordCount___sentences'
  | 'localFile___childrenMdx___wordCount___words'
  | 'localFile___childrenMdx___id'
  | 'localFile___childrenMdx___parent___id'
  | 'localFile___childrenMdx___parent___children'
  | 'localFile___childrenMdx___children'
  | 'localFile___childrenMdx___children___id'
  | 'localFile___childrenMdx___children___children'
  | 'localFile___childrenMdx___internal___content'
  | 'localFile___childrenMdx___internal___contentDigest'
  | 'localFile___childrenMdx___internal___description'
  | 'localFile___childrenMdx___internal___fieldOwners'
  | 'localFile___childrenMdx___internal___ignoreType'
  | 'localFile___childrenMdx___internal___mediaType'
  | 'localFile___childrenMdx___internal___owner'
  | 'localFile___childrenMdx___internal___type'
  | 'localFile___childMdx___rawBody'
  | 'localFile___childMdx___fileAbsolutePath'
  | 'localFile___childMdx___frontmatter___title'
  | 'localFile___childMdx___frontmatter___name'
  | 'localFile___childMdx___frontmatter___description'
  | 'localFile___childMdx___frontmatter___tags'
  | 'localFile___childMdx___frontmatter___version'
  | 'localFile___childMdx___frontmatter___status'
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
  type?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  text?: Maybe<ContentfulBlockTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockSys>;
  node_locale?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  link?: Maybe<ContentfulLink>;
  /** Returns all children nodes filtered by type contentfulBlockTextTextNode */
  childrenContentfulBlockTextTextNode?: Maybe<Array<Maybe<ContentfulBlockTextTextNode>>>;
  /**
   * Returns the first child node of type contentfulBlockTextTextNode or null if
   * there are no children of given type on this node
   */
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

export type ContentfulBlockContentfulBlockImageUnion = ContentfulBlock | ContentfulBlockImage;

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
  | 'type'
  | 'alignment'
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
  | 'section___page___description___id'
  | 'section___page___description___children'
  | 'section___page___description___description'
  | 'section___page___description___childrenMdx'
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
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___component'
  | 'section___page___link___type'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___link___navigation'
  | 'section___page___link___variant'
  | 'section___page___link___icon'
  | 'section___page___link___block'
  | 'section___page___childrenContentfulPageDescriptionTextNode'
  | 'section___page___childrenContentfulPageDescriptionTextNode___id'
  | 'section___page___childrenContentfulPageDescriptionTextNode___children'
  | 'section___page___childrenContentfulPageDescriptionTextNode___description'
  | 'section___page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
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
  | 'text___childrenMdx'
  | 'text___childrenMdx___rawBody'
  | 'text___childrenMdx___fileAbsolutePath'
  | 'text___childrenMdx___frontmatter___title'
  | 'text___childrenMdx___frontmatter___name'
  | 'text___childrenMdx___frontmatter___description'
  | 'text___childrenMdx___frontmatter___tags'
  | 'text___childrenMdx___frontmatter___version'
  | 'text___childrenMdx___frontmatter___status'
  | 'text___childrenMdx___slug'
  | 'text___childrenMdx___body'
  | 'text___childrenMdx___excerpt'
  | 'text___childrenMdx___headings'
  | 'text___childrenMdx___headings___value'
  | 'text___childrenMdx___headings___depth'
  | 'text___childrenMdx___html'
  | 'text___childrenMdx___mdxAST'
  | 'text___childrenMdx___tableOfContents'
  | 'text___childrenMdx___timeToRead'
  | 'text___childrenMdx___wordCount___paragraphs'
  | 'text___childrenMdx___wordCount___sentences'
  | 'text___childrenMdx___wordCount___words'
  | 'text___childrenMdx___id'
  | 'text___childrenMdx___parent___id'
  | 'text___childrenMdx___parent___children'
  | 'text___childrenMdx___children'
  | 'text___childrenMdx___children___id'
  | 'text___childrenMdx___children___children'
  | 'text___childrenMdx___internal___content'
  | 'text___childrenMdx___internal___contentDigest'
  | 'text___childrenMdx___internal___description'
  | 'text___childrenMdx___internal___fieldOwners'
  | 'text___childrenMdx___internal___ignoreType'
  | 'text___childrenMdx___internal___mediaType'
  | 'text___childrenMdx___internal___owner'
  | 'text___childrenMdx___internal___type'
  | 'text___childMdx___rawBody'
  | 'text___childMdx___fileAbsolutePath'
  | 'text___childMdx___frontmatter___title'
  | 'text___childMdx___frontmatter___name'
  | 'text___childMdx___frontmatter___description'
  | 'text___childMdx___frontmatter___tags'
  | 'text___childMdx___frontmatter___version'
  | 'text___childMdx___frontmatter___status'
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
  | 'link___name'
  | 'link___label'
  | 'link___component'
  | 'link___type'
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
  | 'link___page___description___id'
  | 'link___page___description___children'
  | 'link___page___description___description'
  | 'link___page___description___childrenMdx'
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
  | 'link___page___link___name'
  | 'link___page___link___label'
  | 'link___page___link___component'
  | 'link___page___link___type'
  | 'link___page___link___spaceId'
  | 'link___page___link___contentful_id'
  | 'link___page___link___createdAt'
  | 'link___page___link___updatedAt'
  | 'link___page___link___node_locale'
  | 'link___page___link___navigation'
  | 'link___page___link___variant'
  | 'link___page___link___icon'
  | 'link___page___link___block'
  | 'link___page___childrenContentfulPageDescriptionTextNode'
  | 'link___page___childrenContentfulPageDescriptionTextNode___id'
  | 'link___page___childrenContentfulPageDescriptionTextNode___children'
  | 'link___page___childrenContentfulPageDescriptionTextNode___description'
  | 'link___page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'link___page___childContentfulPageDescriptionTextNode___id'
  | 'link___page___childContentfulPageDescriptionTextNode___children'
  | 'link___page___childContentfulPageDescriptionTextNode___description'
  | 'link___page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'link___spaceId'
  | 'link___contentful_id'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___node_locale'
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
  | 'link___navigation___component'
  | 'link___navigation___links'
  | 'link___navigation___links___id'
  | 'link___navigation___links___children'
  | 'link___navigation___links___name'
  | 'link___navigation___links___label'
  | 'link___navigation___links___component'
  | 'link___navigation___links___type'
  | 'link___navigation___links___spaceId'
  | 'link___navigation___links___contentful_id'
  | 'link___navigation___links___createdAt'
  | 'link___navigation___links___updatedAt'
  | 'link___navigation___links___node_locale'
  | 'link___navigation___links___navigation'
  | 'link___navigation___links___variant'
  | 'link___navigation___links___icon'
  | 'link___navigation___links___block'
  | 'link___navigation___navigation'
  | 'link___navigation___navigation___id'
  | 'link___navigation___navigation___children'
  | 'link___navigation___navigation___name'
  | 'link___navigation___navigation___component'
  | 'link___navigation___navigation___links'
  | 'link___navigation___navigation___navigation'
  | 'link___navigation___navigation___spaceId'
  | 'link___navigation___navigation___contentful_id'
  | 'link___navigation___navigation___createdAt'
  | 'link___navigation___navigation___updatedAt'
  | 'link___navigation___navigation___node_locale'
  | 'link___navigation___navigation___subNavigation'
  | 'link___navigation___navigation___footer'
  | 'link___navigation___navigation___navbar'
  | 'link___navigation___spaceId'
  | 'link___navigation___contentful_id'
  | 'link___navigation___createdAt'
  | 'link___navigation___updatedAt'
  | 'link___navigation___sys___type'
  | 'link___navigation___sys___revision'
  | 'link___navigation___node_locale'
  | 'link___navigation___subNavigation'
  | 'link___navigation___subNavigation___id'
  | 'link___navigation___subNavigation___children'
  | 'link___navigation___subNavigation___name'
  | 'link___navigation___subNavigation___component'
  | 'link___navigation___subNavigation___links'
  | 'link___navigation___subNavigation___navigation'
  | 'link___navigation___subNavigation___spaceId'
  | 'link___navigation___subNavigation___contentful_id'
  | 'link___navigation___subNavigation___createdAt'
  | 'link___navigation___subNavigation___updatedAt'
  | 'link___navigation___subNavigation___node_locale'
  | 'link___navigation___subNavigation___subNavigation'
  | 'link___navigation___subNavigation___footer'
  | 'link___navigation___subNavigation___navbar'
  | 'link___navigation___footer'
  | 'link___navigation___footer___id'
  | 'link___navigation___footer___children'
  | 'link___navigation___footer___name'
  | 'link___navigation___footer___layout'
  | 'link___navigation___footer___spaceId'
  | 'link___navigation___footer___contentful_id'
  | 'link___navigation___footer___createdAt'
  | 'link___navigation___footer___updatedAt'
  | 'link___navigation___footer___node_locale'
  | 'link___navigation___navbar'
  | 'link___navigation___navbar___id'
  | 'link___navigation___navbar___children'
  | 'link___navigation___navbar___name'
  | 'link___navigation___navbar___layout'
  | 'link___navigation___navbar___spaceId'
  | 'link___navigation___navbar___contentful_id'
  | 'link___navigation___navbar___createdAt'
  | 'link___navigation___navbar___updatedAt'
  | 'link___navigation___navbar___node_locale'
  | 'link___variant'
  | 'link___icon'
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
  | 'link___block___type'
  | 'link___block___alignment'
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
  | 'link___block___text___id'
  | 'link___block___text___children'
  | 'link___block___text___text'
  | 'link___block___text___childrenMdx'
  | 'link___block___spaceId'
  | 'link___block___contentful_id'
  | 'link___block___createdAt'
  | 'link___block___updatedAt'
  | 'link___block___sys___type'
  | 'link___block___sys___revision'
  | 'link___block___node_locale'
  | 'link___block___variant'
  | 'link___block___link___id'
  | 'link___block___link___children'
  | 'link___block___link___name'
  | 'link___block___link___label'
  | 'link___block___link___component'
  | 'link___block___link___type'
  | 'link___block___link___spaceId'
  | 'link___block___link___contentful_id'
  | 'link___block___link___createdAt'
  | 'link___block___link___updatedAt'
  | 'link___block___link___node_locale'
  | 'link___block___link___navigation'
  | 'link___block___link___variant'
  | 'link___block___link___icon'
  | 'link___block___link___block'
  | 'link___block___childrenContentfulBlockTextTextNode'
  | 'link___block___childrenContentfulBlockTextTextNode___id'
  | 'link___block___childrenContentfulBlockTextTextNode___children'
  | 'link___block___childrenContentfulBlockTextTextNode___text'
  | 'link___block___childrenContentfulBlockTextTextNode___childrenMdx'
  | 'link___block___childContentfulBlockTextTextNode___id'
  | 'link___block___childContentfulBlockTextTextNode___children'
  | 'link___block___childContentfulBlockTextTextNode___text'
  | 'link___block___childContentfulBlockTextTextNode___childrenMdx'
  | 'childrenContentfulBlockTextTextNode'
  | 'childrenContentfulBlockTextTextNode___id'
  | 'childrenContentfulBlockTextTextNode___parent___id'
  | 'childrenContentfulBlockTextTextNode___parent___parent___id'
  | 'childrenContentfulBlockTextTextNode___parent___parent___children'
  | 'childrenContentfulBlockTextTextNode___parent___children'
  | 'childrenContentfulBlockTextTextNode___parent___children___id'
  | 'childrenContentfulBlockTextTextNode___parent___children___children'
  | 'childrenContentfulBlockTextTextNode___parent___internal___content'
  | 'childrenContentfulBlockTextTextNode___parent___internal___contentDigest'
  | 'childrenContentfulBlockTextTextNode___parent___internal___description'
  | 'childrenContentfulBlockTextTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulBlockTextTextNode___parent___internal___ignoreType'
  | 'childrenContentfulBlockTextTextNode___parent___internal___mediaType'
  | 'childrenContentfulBlockTextTextNode___parent___internal___owner'
  | 'childrenContentfulBlockTextTextNode___parent___internal___type'
  | 'childrenContentfulBlockTextTextNode___children'
  | 'childrenContentfulBlockTextTextNode___children___id'
  | 'childrenContentfulBlockTextTextNode___children___parent___id'
  | 'childrenContentfulBlockTextTextNode___children___parent___children'
  | 'childrenContentfulBlockTextTextNode___children___children'
  | 'childrenContentfulBlockTextTextNode___children___children___id'
  | 'childrenContentfulBlockTextTextNode___children___children___children'
  | 'childrenContentfulBlockTextTextNode___children___internal___content'
  | 'childrenContentfulBlockTextTextNode___children___internal___contentDigest'
  | 'childrenContentfulBlockTextTextNode___children___internal___description'
  | 'childrenContentfulBlockTextTextNode___children___internal___fieldOwners'
  | 'childrenContentfulBlockTextTextNode___children___internal___ignoreType'
  | 'childrenContentfulBlockTextTextNode___children___internal___mediaType'
  | 'childrenContentfulBlockTextTextNode___children___internal___owner'
  | 'childrenContentfulBlockTextTextNode___children___internal___type'
  | 'childrenContentfulBlockTextTextNode___internal___content'
  | 'childrenContentfulBlockTextTextNode___internal___contentDigest'
  | 'childrenContentfulBlockTextTextNode___internal___description'
  | 'childrenContentfulBlockTextTextNode___internal___fieldOwners'
  | 'childrenContentfulBlockTextTextNode___internal___ignoreType'
  | 'childrenContentfulBlockTextTextNode___internal___mediaType'
  | 'childrenContentfulBlockTextTextNode___internal___owner'
  | 'childrenContentfulBlockTextTextNode___internal___type'
  | 'childrenContentfulBlockTextTextNode___text'
  | 'childrenContentfulBlockTextTextNode___sys___type'
  | 'childrenContentfulBlockTextTextNode___childrenMdx'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___rawBody'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___fileAbsolutePath'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___frontmatter___title'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___frontmatter___name'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___frontmatter___description'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___frontmatter___tags'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___frontmatter___version'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___frontmatter___status'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___slug'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___body'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___excerpt'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___headings'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___headings___value'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___headings___depth'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___html'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___mdxAST'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___tableOfContents'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___timeToRead'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___wordCount___paragraphs'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___wordCount___sentences'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___wordCount___words'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___id'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___parent___id'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___parent___children'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___children'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___children___id'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___children___children'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___content'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___contentDigest'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___description'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___fieldOwners'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___ignoreType'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___mediaType'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___owner'
  | 'childrenContentfulBlockTextTextNode___childrenMdx___internal___type'
  | 'childrenContentfulBlockTextTextNode___childMdx___rawBody'
  | 'childrenContentfulBlockTextTextNode___childMdx___fileAbsolutePath'
  | 'childrenContentfulBlockTextTextNode___childMdx___frontmatter___title'
  | 'childrenContentfulBlockTextTextNode___childMdx___frontmatter___name'
  | 'childrenContentfulBlockTextTextNode___childMdx___frontmatter___description'
  | 'childrenContentfulBlockTextTextNode___childMdx___frontmatter___tags'
  | 'childrenContentfulBlockTextTextNode___childMdx___frontmatter___version'
  | 'childrenContentfulBlockTextTextNode___childMdx___frontmatter___status'
  | 'childrenContentfulBlockTextTextNode___childMdx___slug'
  | 'childrenContentfulBlockTextTextNode___childMdx___body'
  | 'childrenContentfulBlockTextTextNode___childMdx___excerpt'
  | 'childrenContentfulBlockTextTextNode___childMdx___headings'
  | 'childrenContentfulBlockTextTextNode___childMdx___headings___value'
  | 'childrenContentfulBlockTextTextNode___childMdx___headings___depth'
  | 'childrenContentfulBlockTextTextNode___childMdx___html'
  | 'childrenContentfulBlockTextTextNode___childMdx___mdxAST'
  | 'childrenContentfulBlockTextTextNode___childMdx___tableOfContents'
  | 'childrenContentfulBlockTextTextNode___childMdx___timeToRead'
  | 'childrenContentfulBlockTextTextNode___childMdx___wordCount___paragraphs'
  | 'childrenContentfulBlockTextTextNode___childMdx___wordCount___sentences'
  | 'childrenContentfulBlockTextTextNode___childMdx___wordCount___words'
  | 'childrenContentfulBlockTextTextNode___childMdx___id'
  | 'childrenContentfulBlockTextTextNode___childMdx___parent___id'
  | 'childrenContentfulBlockTextTextNode___childMdx___parent___children'
  | 'childrenContentfulBlockTextTextNode___childMdx___children'
  | 'childrenContentfulBlockTextTextNode___childMdx___children___id'
  | 'childrenContentfulBlockTextTextNode___childMdx___children___children'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___content'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___contentDigest'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___description'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___fieldOwners'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___ignoreType'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___mediaType'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___owner'
  | 'childrenContentfulBlockTextTextNode___childMdx___internal___type'
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
  | 'childContentfulBlockTextTextNode___childrenMdx'
  | 'childContentfulBlockTextTextNode___childrenMdx___rawBody'
  | 'childContentfulBlockTextTextNode___childrenMdx___fileAbsolutePath'
  | 'childContentfulBlockTextTextNode___childrenMdx___frontmatter___title'
  | 'childContentfulBlockTextTextNode___childrenMdx___frontmatter___name'
  | 'childContentfulBlockTextTextNode___childrenMdx___frontmatter___description'
  | 'childContentfulBlockTextTextNode___childrenMdx___frontmatter___tags'
  | 'childContentfulBlockTextTextNode___childrenMdx___frontmatter___version'
  | 'childContentfulBlockTextTextNode___childrenMdx___frontmatter___status'
  | 'childContentfulBlockTextTextNode___childrenMdx___slug'
  | 'childContentfulBlockTextTextNode___childrenMdx___body'
  | 'childContentfulBlockTextTextNode___childrenMdx___excerpt'
  | 'childContentfulBlockTextTextNode___childrenMdx___headings'
  | 'childContentfulBlockTextTextNode___childrenMdx___headings___value'
  | 'childContentfulBlockTextTextNode___childrenMdx___headings___depth'
  | 'childContentfulBlockTextTextNode___childrenMdx___html'
  | 'childContentfulBlockTextTextNode___childrenMdx___mdxAST'
  | 'childContentfulBlockTextTextNode___childrenMdx___tableOfContents'
  | 'childContentfulBlockTextTextNode___childrenMdx___timeToRead'
  | 'childContentfulBlockTextTextNode___childrenMdx___wordCount___paragraphs'
  | 'childContentfulBlockTextTextNode___childrenMdx___wordCount___sentences'
  | 'childContentfulBlockTextTextNode___childrenMdx___wordCount___words'
  | 'childContentfulBlockTextTextNode___childrenMdx___id'
  | 'childContentfulBlockTextTextNode___childrenMdx___parent___id'
  | 'childContentfulBlockTextTextNode___childrenMdx___parent___children'
  | 'childContentfulBlockTextTextNode___childrenMdx___children'
  | 'childContentfulBlockTextTextNode___childrenMdx___children___id'
  | 'childContentfulBlockTextTextNode___childrenMdx___children___children'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___content'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___contentDigest'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___description'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___fieldOwners'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___ignoreType'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___mediaType'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___owner'
  | 'childContentfulBlockTextTextNode___childrenMdx___internal___type'
  | 'childContentfulBlockTextTextNode___childMdx___rawBody'
  | 'childContentfulBlockTextTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___title'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___name'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___description'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___tags'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___version'
  | 'childContentfulBlockTextTextNode___childMdx___frontmatter___status'
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
  type?: Maybe<StringQueryOperatorInput>;
  alignment?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  text?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<ContentfulLinkFilterInput>;
  childrenContentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNodeFilterListInput>;
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

export type ContentfulBlockImage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  media?: Maybe<ContentfulMedia>;
  section?: Maybe<Array<Maybe<ContentfulSection>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockImageSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockImageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockImageEdge>;
  nodes: Array<ContentfulBlockImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockImageGroupConnection>;
};


export type ContentfulBlockImageConnectionDistinctArgs = {
  field: ContentfulBlockImageFieldsEnum;
};


export type ContentfulBlockImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockImageFieldsEnum;
};

export type ContentfulBlockImageEdge = {
  next?: Maybe<ContentfulBlockImage>;
  node: ContentfulBlockImage;
  previous?: Maybe<ContentfulBlockImage>;
};

export type ContentfulBlockImageFieldsEnum =
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
  | 'media___id'
  | 'media___parent___id'
  | 'media___parent___parent___id'
  | 'media___parent___parent___children'
  | 'media___parent___children'
  | 'media___parent___children___id'
  | 'media___parent___children___children'
  | 'media___parent___internal___content'
  | 'media___parent___internal___contentDigest'
  | 'media___parent___internal___description'
  | 'media___parent___internal___fieldOwners'
  | 'media___parent___internal___ignoreType'
  | 'media___parent___internal___mediaType'
  | 'media___parent___internal___owner'
  | 'media___parent___internal___type'
  | 'media___children'
  | 'media___children___id'
  | 'media___children___parent___id'
  | 'media___children___parent___children'
  | 'media___children___children'
  | 'media___children___children___id'
  | 'media___children___children___children'
  | 'media___children___internal___content'
  | 'media___children___internal___contentDigest'
  | 'media___children___internal___description'
  | 'media___children___internal___fieldOwners'
  | 'media___children___internal___ignoreType'
  | 'media___children___internal___mediaType'
  | 'media___children___internal___owner'
  | 'media___children___internal___type'
  | 'media___internal___content'
  | 'media___internal___contentDigest'
  | 'media___internal___description'
  | 'media___internal___fieldOwners'
  | 'media___internal___ignoreType'
  | 'media___internal___mediaType'
  | 'media___internal___owner'
  | 'media___internal___type'
  | 'media___name'
  | 'media___backgroundPositionMobileY'
  | 'media___backgroundPositionY'
  | 'media___mediaMobile___id'
  | 'media___mediaMobile___parent___id'
  | 'media___mediaMobile___parent___children'
  | 'media___mediaMobile___children'
  | 'media___mediaMobile___children___id'
  | 'media___mediaMobile___children___children'
  | 'media___mediaMobile___internal___content'
  | 'media___mediaMobile___internal___contentDigest'
  | 'media___mediaMobile___internal___description'
  | 'media___mediaMobile___internal___fieldOwners'
  | 'media___mediaMobile___internal___ignoreType'
  | 'media___mediaMobile___internal___mediaType'
  | 'media___mediaMobile___internal___owner'
  | 'media___mediaMobile___internal___type'
  | 'media___mediaMobile___contentful_id'
  | 'media___mediaMobile___spaceId'
  | 'media___mediaMobile___createdAt'
  | 'media___mediaMobile___updatedAt'
  | 'media___mediaMobile___file___url'
  | 'media___mediaMobile___file___fileName'
  | 'media___mediaMobile___file___contentType'
  | 'media___mediaMobile___title'
  | 'media___mediaMobile___description'
  | 'media___mediaMobile___node_locale'
  | 'media___mediaMobile___sys___type'
  | 'media___mediaMobile___sys___revision'
  | 'media___mediaMobile___localFile___sourceInstanceName'
  | 'media___mediaMobile___localFile___absolutePath'
  | 'media___mediaMobile___localFile___relativePath'
  | 'media___mediaMobile___localFile___extension'
  | 'media___mediaMobile___localFile___size'
  | 'media___mediaMobile___localFile___prettySize'
  | 'media___mediaMobile___localFile___modifiedTime'
  | 'media___mediaMobile___localFile___accessTime'
  | 'media___mediaMobile___localFile___changeTime'
  | 'media___mediaMobile___localFile___birthTime'
  | 'media___mediaMobile___localFile___root'
  | 'media___mediaMobile___localFile___dir'
  | 'media___mediaMobile___localFile___base'
  | 'media___mediaMobile___localFile___ext'
  | 'media___mediaMobile___localFile___name'
  | 'media___mediaMobile___localFile___relativeDirectory'
  | 'media___mediaMobile___localFile___dev'
  | 'media___mediaMobile___localFile___mode'
  | 'media___mediaMobile___localFile___nlink'
  | 'media___mediaMobile___localFile___uid'
  | 'media___mediaMobile___localFile___gid'
  | 'media___mediaMobile___localFile___rdev'
  | 'media___mediaMobile___localFile___ino'
  | 'media___mediaMobile___localFile___atimeMs'
  | 'media___mediaMobile___localFile___mtimeMs'
  | 'media___mediaMobile___localFile___ctimeMs'
  | 'media___mediaMobile___localFile___atime'
  | 'media___mediaMobile___localFile___mtime'
  | 'media___mediaMobile___localFile___ctime'
  | 'media___mediaMobile___localFile___birthtime'
  | 'media___mediaMobile___localFile___birthtimeMs'
  | 'media___mediaMobile___localFile___blksize'
  | 'media___mediaMobile___localFile___blocks'
  | 'media___mediaMobile___localFile___url'
  | 'media___mediaMobile___localFile___publicURL'
  | 'media___mediaMobile___localFile___childrenImageSharp'
  | 'media___mediaMobile___localFile___childrenMdx'
  | 'media___mediaMobile___localFile___id'
  | 'media___mediaMobile___localFile___children'
  | 'media___mediaMobile___fixed___base64'
  | 'media___mediaMobile___fixed___tracedSVG'
  | 'media___mediaMobile___fixed___aspectRatio'
  | 'media___mediaMobile___fixed___width'
  | 'media___mediaMobile___fixed___height'
  | 'media___mediaMobile___fixed___src'
  | 'media___mediaMobile___fixed___srcSet'
  | 'media___mediaMobile___fixed___srcWebp'
  | 'media___mediaMobile___fixed___srcSetWebp'
  | 'media___mediaMobile___resolutions___base64'
  | 'media___mediaMobile___resolutions___tracedSVG'
  | 'media___mediaMobile___resolutions___aspectRatio'
  | 'media___mediaMobile___resolutions___width'
  | 'media___mediaMobile___resolutions___height'
  | 'media___mediaMobile___resolutions___src'
  | 'media___mediaMobile___resolutions___srcSet'
  | 'media___mediaMobile___resolutions___srcWebp'
  | 'media___mediaMobile___resolutions___srcSetWebp'
  | 'media___mediaMobile___fluid___base64'
  | 'media___mediaMobile___fluid___tracedSVG'
  | 'media___mediaMobile___fluid___aspectRatio'
  | 'media___mediaMobile___fluid___src'
  | 'media___mediaMobile___fluid___srcSet'
  | 'media___mediaMobile___fluid___srcWebp'
  | 'media___mediaMobile___fluid___srcSetWebp'
  | 'media___mediaMobile___fluid___sizes'
  | 'media___mediaMobile___sizes___base64'
  | 'media___mediaMobile___sizes___tracedSVG'
  | 'media___mediaMobile___sizes___aspectRatio'
  | 'media___mediaMobile___sizes___src'
  | 'media___mediaMobile___sizes___srcSet'
  | 'media___mediaMobile___sizes___srcWebp'
  | 'media___mediaMobile___sizes___srcSetWebp'
  | 'media___mediaMobile___sizes___sizes'
  | 'media___mediaMobile___resize___base64'
  | 'media___mediaMobile___resize___tracedSVG'
  | 'media___mediaMobile___resize___src'
  | 'media___mediaMobile___resize___width'
  | 'media___mediaMobile___resize___height'
  | 'media___mediaMobile___resize___aspectRatio'
  | 'media___media___id'
  | 'media___media___parent___id'
  | 'media___media___parent___children'
  | 'media___media___children'
  | 'media___media___children___id'
  | 'media___media___children___children'
  | 'media___media___internal___content'
  | 'media___media___internal___contentDigest'
  | 'media___media___internal___description'
  | 'media___media___internal___fieldOwners'
  | 'media___media___internal___ignoreType'
  | 'media___media___internal___mediaType'
  | 'media___media___internal___owner'
  | 'media___media___internal___type'
  | 'media___media___contentful_id'
  | 'media___media___spaceId'
  | 'media___media___createdAt'
  | 'media___media___updatedAt'
  | 'media___media___file___url'
  | 'media___media___file___fileName'
  | 'media___media___file___contentType'
  | 'media___media___title'
  | 'media___media___description'
  | 'media___media___node_locale'
  | 'media___media___sys___type'
  | 'media___media___sys___revision'
  | 'media___media___localFile___sourceInstanceName'
  | 'media___media___localFile___absolutePath'
  | 'media___media___localFile___relativePath'
  | 'media___media___localFile___extension'
  | 'media___media___localFile___size'
  | 'media___media___localFile___prettySize'
  | 'media___media___localFile___modifiedTime'
  | 'media___media___localFile___accessTime'
  | 'media___media___localFile___changeTime'
  | 'media___media___localFile___birthTime'
  | 'media___media___localFile___root'
  | 'media___media___localFile___dir'
  | 'media___media___localFile___base'
  | 'media___media___localFile___ext'
  | 'media___media___localFile___name'
  | 'media___media___localFile___relativeDirectory'
  | 'media___media___localFile___dev'
  | 'media___media___localFile___mode'
  | 'media___media___localFile___nlink'
  | 'media___media___localFile___uid'
  | 'media___media___localFile___gid'
  | 'media___media___localFile___rdev'
  | 'media___media___localFile___ino'
  | 'media___media___localFile___atimeMs'
  | 'media___media___localFile___mtimeMs'
  | 'media___media___localFile___ctimeMs'
  | 'media___media___localFile___atime'
  | 'media___media___localFile___mtime'
  | 'media___media___localFile___ctime'
  | 'media___media___localFile___birthtime'
  | 'media___media___localFile___birthtimeMs'
  | 'media___media___localFile___blksize'
  | 'media___media___localFile___blocks'
  | 'media___media___localFile___url'
  | 'media___media___localFile___publicURL'
  | 'media___media___localFile___childrenImageSharp'
  | 'media___media___localFile___childrenMdx'
  | 'media___media___localFile___id'
  | 'media___media___localFile___children'
  | 'media___media___fixed___base64'
  | 'media___media___fixed___tracedSVG'
  | 'media___media___fixed___aspectRatio'
  | 'media___media___fixed___width'
  | 'media___media___fixed___height'
  | 'media___media___fixed___src'
  | 'media___media___fixed___srcSet'
  | 'media___media___fixed___srcWebp'
  | 'media___media___fixed___srcSetWebp'
  | 'media___media___resolutions___base64'
  | 'media___media___resolutions___tracedSVG'
  | 'media___media___resolutions___aspectRatio'
  | 'media___media___resolutions___width'
  | 'media___media___resolutions___height'
  | 'media___media___resolutions___src'
  | 'media___media___resolutions___srcSet'
  | 'media___media___resolutions___srcWebp'
  | 'media___media___resolutions___srcSetWebp'
  | 'media___media___fluid___base64'
  | 'media___media___fluid___tracedSVG'
  | 'media___media___fluid___aspectRatio'
  | 'media___media___fluid___src'
  | 'media___media___fluid___srcSet'
  | 'media___media___fluid___srcWebp'
  | 'media___media___fluid___srcSetWebp'
  | 'media___media___fluid___sizes'
  | 'media___media___sizes___base64'
  | 'media___media___sizes___tracedSVG'
  | 'media___media___sizes___aspectRatio'
  | 'media___media___sizes___src'
  | 'media___media___sizes___srcSet'
  | 'media___media___sizes___srcWebp'
  | 'media___media___sizes___srcSetWebp'
  | 'media___media___sizes___sizes'
  | 'media___media___resize___base64'
  | 'media___media___resize___tracedSVG'
  | 'media___media___resize___src'
  | 'media___media___resize___width'
  | 'media___media___resize___height'
  | 'media___media___resize___aspectRatio'
  | 'media___mediacollection'
  | 'media___mediacollection___id'
  | 'media___mediacollection___parent___id'
  | 'media___mediacollection___parent___children'
  | 'media___mediacollection___children'
  | 'media___mediacollection___children___id'
  | 'media___mediacollection___children___children'
  | 'media___mediacollection___internal___content'
  | 'media___mediacollection___internal___contentDigest'
  | 'media___mediacollection___internal___description'
  | 'media___mediacollection___internal___fieldOwners'
  | 'media___mediacollection___internal___ignoreType'
  | 'media___mediacollection___internal___mediaType'
  | 'media___mediacollection___internal___owner'
  | 'media___mediacollection___internal___type'
  | 'media___mediacollection___name'
  | 'media___mediacollection___medias'
  | 'media___mediacollection___medias___id'
  | 'media___mediacollection___medias___children'
  | 'media___mediacollection___medias___name'
  | 'media___mediacollection___medias___backgroundPositionMobileY'
  | 'media___mediacollection___medias___backgroundPositionY'
  | 'media___mediacollection___medias___mediacollection'
  | 'media___mediacollection___medias___blockimage'
  | 'media___mediacollection___medias___spaceId'
  | 'media___mediacollection___medias___contentful_id'
  | 'media___mediacollection___medias___createdAt'
  | 'media___mediacollection___medias___updatedAt'
  | 'media___mediacollection___medias___node_locale'
  | 'media___mediacollection___spaceId'
  | 'media___mediacollection___contentful_id'
  | 'media___mediacollection___createdAt'
  | 'media___mediacollection___updatedAt'
  | 'media___mediacollection___sys___type'
  | 'media___mediacollection___sys___revision'
  | 'media___mediacollection___node_locale'
  | 'media___blockimage'
  | 'media___blockimage___id'
  | 'media___blockimage___parent___id'
  | 'media___blockimage___parent___children'
  | 'media___blockimage___children'
  | 'media___blockimage___children___id'
  | 'media___blockimage___children___children'
  | 'media___blockimage___internal___content'
  | 'media___blockimage___internal___contentDigest'
  | 'media___blockimage___internal___description'
  | 'media___blockimage___internal___fieldOwners'
  | 'media___blockimage___internal___ignoreType'
  | 'media___blockimage___internal___mediaType'
  | 'media___blockimage___internal___owner'
  | 'media___blockimage___internal___type'
  | 'media___blockimage___name'
  | 'media___blockimage___type'
  | 'media___blockimage___media___id'
  | 'media___blockimage___media___children'
  | 'media___blockimage___media___name'
  | 'media___blockimage___media___backgroundPositionMobileY'
  | 'media___blockimage___media___backgroundPositionY'
  | 'media___blockimage___media___mediacollection'
  | 'media___blockimage___media___blockimage'
  | 'media___blockimage___media___spaceId'
  | 'media___blockimage___media___contentful_id'
  | 'media___blockimage___media___createdAt'
  | 'media___blockimage___media___updatedAt'
  | 'media___blockimage___media___node_locale'
  | 'media___blockimage___section'
  | 'media___blockimage___section___id'
  | 'media___blockimage___section___children'
  | 'media___blockimage___section___name'
  | 'media___blockimage___section___layout'
  | 'media___blockimage___section___page'
  | 'media___blockimage___section___spaceId'
  | 'media___blockimage___section___contentful_id'
  | 'media___blockimage___section___createdAt'
  | 'media___blockimage___section___updatedAt'
  | 'media___blockimage___section___node_locale'
  | 'media___blockimage___section___variant'
  | 'media___blockimage___spaceId'
  | 'media___blockimage___contentful_id'
  | 'media___blockimage___createdAt'
  | 'media___blockimage___updatedAt'
  | 'media___blockimage___sys___type'
  | 'media___blockimage___sys___revision'
  | 'media___blockimage___node_locale'
  | 'media___spaceId'
  | 'media___contentful_id'
  | 'media___createdAt'
  | 'media___updatedAt'
  | 'media___sys___type'
  | 'media___sys___revision'
  | 'media___node_locale'
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
  | 'section___page___description___id'
  | 'section___page___description___children'
  | 'section___page___description___description'
  | 'section___page___description___childrenMdx'
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
  | 'section___page___link___name'
  | 'section___page___link___label'
  | 'section___page___link___component'
  | 'section___page___link___type'
  | 'section___page___link___spaceId'
  | 'section___page___link___contentful_id'
  | 'section___page___link___createdAt'
  | 'section___page___link___updatedAt'
  | 'section___page___link___node_locale'
  | 'section___page___link___navigation'
  | 'section___page___link___variant'
  | 'section___page___link___icon'
  | 'section___page___link___block'
  | 'section___page___childrenContentfulPageDescriptionTextNode'
  | 'section___page___childrenContentfulPageDescriptionTextNode___id'
  | 'section___page___childrenContentfulPageDescriptionTextNode___children'
  | 'section___page___childrenContentfulPageDescriptionTextNode___description'
  | 'section___page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'section___page___childContentfulPageDescriptionTextNode___id'
  | 'section___page___childContentfulPageDescriptionTextNode___children'
  | 'section___page___childContentfulPageDescriptionTextNode___description'
  | 'section___page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___variant'
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

export type ContentfulBlockImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  media?: Maybe<ContentfulMediaFilterInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockImageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockImageFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockImageFilterInput>;
};

export type ContentfulBlockImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockImageEdge>;
  nodes: Array<ContentfulBlockImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockImageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockImageSysContentType>;
};

export type ContentfulBlockImageSysContentType = {
  sys?: Maybe<ContentfulBlockImageSysContentTypeSys>;
};

export type ContentfulBlockImageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockImageSysContentTypeSysFilterInput>;
};

export type ContentfulBlockImageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockImageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockImageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockImageSysContentTypeFilterInput>;
};

export type ContentfulBlockSolution = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  text?: Maybe<ContentfulBlockSolutionTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockSolutionSys>;
  node_locale?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulBlockSolutionTextTextNode */
  childrenContentfulBlockSolutionTextTextNode?: Maybe<Array<Maybe<ContentfulBlockSolutionTextTextNode>>>;
  /**
   * Returns the first child node of type contentfulBlockSolutionTextTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulBlockSolutionTextTextNode?: Maybe<ContentfulBlockSolutionTextTextNode>;
};


export type ContentfulBlockSolutionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockSolutionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSolutionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockSolutionEdge>;
  nodes: Array<ContentfulBlockSolution>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockSolutionGroupConnection>;
};


export type ContentfulBlockSolutionConnectionDistinctArgs = {
  field: ContentfulBlockSolutionFieldsEnum;
};


export type ContentfulBlockSolutionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockSolutionFieldsEnum;
};

export type ContentfulBlockSolutionEdge = {
  next?: Maybe<ContentfulBlockSolution>;
  node: ContentfulBlockSolution;
  previous?: Maybe<ContentfulBlockSolution>;
};

export type ContentfulBlockSolutionFieldsEnum =
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
  | 'type'
  | 'alignment'
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
  | 'text___childrenMdx'
  | 'text___childrenMdx___rawBody'
  | 'text___childrenMdx___fileAbsolutePath'
  | 'text___childrenMdx___frontmatter___title'
  | 'text___childrenMdx___frontmatter___name'
  | 'text___childrenMdx___frontmatter___description'
  | 'text___childrenMdx___frontmatter___tags'
  | 'text___childrenMdx___frontmatter___version'
  | 'text___childrenMdx___frontmatter___status'
  | 'text___childrenMdx___slug'
  | 'text___childrenMdx___body'
  | 'text___childrenMdx___excerpt'
  | 'text___childrenMdx___headings'
  | 'text___childrenMdx___headings___value'
  | 'text___childrenMdx___headings___depth'
  | 'text___childrenMdx___html'
  | 'text___childrenMdx___mdxAST'
  | 'text___childrenMdx___tableOfContents'
  | 'text___childrenMdx___timeToRead'
  | 'text___childrenMdx___wordCount___paragraphs'
  | 'text___childrenMdx___wordCount___sentences'
  | 'text___childrenMdx___wordCount___words'
  | 'text___childrenMdx___id'
  | 'text___childrenMdx___parent___id'
  | 'text___childrenMdx___parent___children'
  | 'text___childrenMdx___children'
  | 'text___childrenMdx___children___id'
  | 'text___childrenMdx___children___children'
  | 'text___childrenMdx___internal___content'
  | 'text___childrenMdx___internal___contentDigest'
  | 'text___childrenMdx___internal___description'
  | 'text___childrenMdx___internal___fieldOwners'
  | 'text___childrenMdx___internal___ignoreType'
  | 'text___childrenMdx___internal___mediaType'
  | 'text___childrenMdx___internal___owner'
  | 'text___childrenMdx___internal___type'
  | 'text___childMdx___rawBody'
  | 'text___childMdx___fileAbsolutePath'
  | 'text___childMdx___frontmatter___title'
  | 'text___childMdx___frontmatter___name'
  | 'text___childMdx___frontmatter___description'
  | 'text___childMdx___frontmatter___tags'
  | 'text___childMdx___frontmatter___version'
  | 'text___childMdx___frontmatter___status'
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
  | 'childrenContentfulBlockSolutionTextTextNode'
  | 'childrenContentfulBlockSolutionTextTextNode___id'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___id'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___parent___id'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___parent___children'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___children'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___children___id'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___children___children'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___content'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___contentDigest'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___description'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___ignoreType'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___mediaType'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___owner'
  | 'childrenContentfulBlockSolutionTextTextNode___parent___internal___type'
  | 'childrenContentfulBlockSolutionTextTextNode___children'
  | 'childrenContentfulBlockSolutionTextTextNode___children___id'
  | 'childrenContentfulBlockSolutionTextTextNode___children___parent___id'
  | 'childrenContentfulBlockSolutionTextTextNode___children___parent___children'
  | 'childrenContentfulBlockSolutionTextTextNode___children___children'
  | 'childrenContentfulBlockSolutionTextTextNode___children___children___id'
  | 'childrenContentfulBlockSolutionTextTextNode___children___children___children'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___content'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___contentDigest'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___description'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___fieldOwners'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___ignoreType'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___mediaType'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___owner'
  | 'childrenContentfulBlockSolutionTextTextNode___children___internal___type'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___content'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___contentDigest'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___description'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___fieldOwners'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___ignoreType'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___mediaType'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___owner'
  | 'childrenContentfulBlockSolutionTextTextNode___internal___type'
  | 'childrenContentfulBlockSolutionTextTextNode___text'
  | 'childrenContentfulBlockSolutionTextTextNode___sys___type'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___rawBody'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___fileAbsolutePath'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___title'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___name'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___description'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___tags'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___version'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___status'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___slug'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___body'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___excerpt'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___headings'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___headings___value'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___headings___depth'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___html'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___mdxAST'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___tableOfContents'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___timeToRead'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___wordCount___paragraphs'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___wordCount___sentences'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___wordCount___words'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___id'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___parent___id'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___parent___children'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___children'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___children___id'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___children___children'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___content'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___contentDigest'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___description'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___fieldOwners'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___ignoreType'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___mediaType'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___owner'
  | 'childrenContentfulBlockSolutionTextTextNode___childrenMdx___internal___type'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___rawBody'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___fileAbsolutePath'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___frontmatter___title'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___frontmatter___name'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___frontmatter___description'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___frontmatter___tags'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___frontmatter___version'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___frontmatter___status'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___slug'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___body'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___excerpt'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___headings'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___headings___value'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___headings___depth'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___html'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___mdxAST'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___tableOfContents'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___timeToRead'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___wordCount___paragraphs'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___wordCount___sentences'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___wordCount___words'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___id'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___parent___id'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___parent___children'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___children'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___children___id'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___children___children'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___content'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___contentDigest'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___description'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___fieldOwners'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___ignoreType'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___mediaType'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___owner'
  | 'childrenContentfulBlockSolutionTextTextNode___childMdx___internal___type'
  | 'childContentfulBlockSolutionTextTextNode___id'
  | 'childContentfulBlockSolutionTextTextNode___parent___id'
  | 'childContentfulBlockSolutionTextTextNode___parent___parent___id'
  | 'childContentfulBlockSolutionTextTextNode___parent___parent___children'
  | 'childContentfulBlockSolutionTextTextNode___parent___children'
  | 'childContentfulBlockSolutionTextTextNode___parent___children___id'
  | 'childContentfulBlockSolutionTextTextNode___parent___children___children'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___content'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___contentDigest'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___description'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___ignoreType'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___mediaType'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___owner'
  | 'childContentfulBlockSolutionTextTextNode___parent___internal___type'
  | 'childContentfulBlockSolutionTextTextNode___children'
  | 'childContentfulBlockSolutionTextTextNode___children___id'
  | 'childContentfulBlockSolutionTextTextNode___children___parent___id'
  | 'childContentfulBlockSolutionTextTextNode___children___parent___children'
  | 'childContentfulBlockSolutionTextTextNode___children___children'
  | 'childContentfulBlockSolutionTextTextNode___children___children___id'
  | 'childContentfulBlockSolutionTextTextNode___children___children___children'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___content'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___contentDigest'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___description'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___fieldOwners'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___ignoreType'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___mediaType'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___owner'
  | 'childContentfulBlockSolutionTextTextNode___children___internal___type'
  | 'childContentfulBlockSolutionTextTextNode___internal___content'
  | 'childContentfulBlockSolutionTextTextNode___internal___contentDigest'
  | 'childContentfulBlockSolutionTextTextNode___internal___description'
  | 'childContentfulBlockSolutionTextTextNode___internal___fieldOwners'
  | 'childContentfulBlockSolutionTextTextNode___internal___ignoreType'
  | 'childContentfulBlockSolutionTextTextNode___internal___mediaType'
  | 'childContentfulBlockSolutionTextTextNode___internal___owner'
  | 'childContentfulBlockSolutionTextTextNode___internal___type'
  | 'childContentfulBlockSolutionTextTextNode___text'
  | 'childContentfulBlockSolutionTextTextNode___sys___type'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___rawBody'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___fileAbsolutePath'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___title'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___name'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___description'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___tags'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___version'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___frontmatter___status'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___slug'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___body'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___excerpt'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___headings'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___headings___value'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___headings___depth'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___html'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___mdxAST'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___tableOfContents'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___timeToRead'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___wordCount___paragraphs'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___wordCount___sentences'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___wordCount___words'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___id'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___parent___id'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___parent___children'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___children'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___children___id'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___children___children'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___content'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___contentDigest'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___description'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___fieldOwners'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___ignoreType'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___mediaType'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___owner'
  | 'childContentfulBlockSolutionTextTextNode___childrenMdx___internal___type'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___rawBody'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___frontmatter___title'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___frontmatter___name'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___frontmatter___description'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___frontmatter___tags'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___frontmatter___version'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___frontmatter___status'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___slug'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___body'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___excerpt'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___headings'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___headings___value'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___headings___depth'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___html'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___mdxAST'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___tableOfContents'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___timeToRead'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___wordCount___paragraphs'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___wordCount___sentences'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___wordCount___words'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___id'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___parent___id'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___parent___children'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___children'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___children___id'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___children___children'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___content'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___contentDigest'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___description'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___fieldOwners'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___ignoreType'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___mediaType'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___owner'
  | 'childContentfulBlockSolutionTextTextNode___childMdx___internal___type';

export type ContentfulBlockSolutionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  alignment?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulBlockSolutionTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSolutionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childrenContentfulBlockSolutionTextTextNode?: Maybe<ContentfulBlockSolutionTextTextNodeFilterListInput>;
  childContentfulBlockSolutionTextTextNode?: Maybe<ContentfulBlockSolutionTextTextNodeFilterInput>;
};

export type ContentfulBlockSolutionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockSolutionEdge>;
  nodes: Array<ContentfulBlockSolution>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSolutionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockSolutionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockSolutionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockSolutionSysContentType>;
};

export type ContentfulBlockSolutionSysContentType = {
  sys?: Maybe<ContentfulBlockSolutionSysContentTypeSys>;
};

export type ContentfulBlockSolutionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockSolutionSysContentTypeSysFilterInput>;
};

export type ContentfulBlockSolutionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSolutionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockSolutionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockSolutionSysContentTypeFilterInput>;
};

export type ContentfulBlockSolutionTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlockSolutionTextTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulBlockSolutionTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockSolutionTextTextNodeEdge>;
  nodes: Array<ContentfulBlockSolutionTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockSolutionTextTextNodeGroupConnection>;
};


export type ContentfulBlockSolutionTextTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockSolutionTextTextNodeFieldsEnum;
};


export type ContentfulBlockSolutionTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockSolutionTextTextNodeFieldsEnum;
};

export type ContentfulBlockSolutionTextTextNodeEdge = {
  next?: Maybe<ContentfulBlockSolutionTextTextNode>;
  node: ContentfulBlockSolutionTextTextNode;
  previous?: Maybe<ContentfulBlockSolutionTextTextNode>;
};

export type ContentfulBlockSolutionTextTextNodeFieldsEnum =
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
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___name'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___version'
  | 'childrenMdx___frontmatter___status'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___version'
  | 'childMdx___frontmatter___status'
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

export type ContentfulBlockSolutionTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSolutionTextTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulBlockSolutionTextTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockSolutionTextTextNodeFilterInput>;
};

export type ContentfulBlockSolutionTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockSolutionTextTextNodeEdge>;
  nodes: Array<ContentfulBlockSolutionTextTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSolutionTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockSolutionTextTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockSolutionTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockSolutionTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
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
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___name'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___version'
  | 'childrenMdx___frontmatter___status'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___version'
  | 'childMdx___frontmatter___status'
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
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulBlockTextTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
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
  phoneNoFees?: Maybe<Scalars['String']>;
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
  | 'phoneNoFees'
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
  phoneNoFees?: Maybe<StringQueryOperatorInput>;
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
  copyright?: Maybe<Scalars['String']>;
  linkedinPageURL?: Maybe<Scalars['String']>;
  facebookPageURL?: Maybe<Scalars['String']>;
  instagramPageURL?: Maybe<Scalars['String']>;
  twitterPageURL?: Maybe<Scalars['String']>;
  metadataTwitterSite?: Maybe<Scalars['String']>;
  metadataTwitterCreator?: Maybe<Scalars['String']>;
  metadataSiteName?: Maybe<Scalars['String']>;
  footer?: Maybe<Array<Maybe<ContentfulFooter>>>;
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
  | 'copyright'
  | 'linkedinPageURL'
  | 'facebookPageURL'
  | 'instagramPageURL'
  | 'twitterPageURL'
  | 'metadataTwitterSite'
  | 'metadataTwitterCreator'
  | 'metadataSiteName'
  | 'footer'
  | 'footer___id'
  | 'footer___parent___id'
  | 'footer___parent___parent___id'
  | 'footer___parent___parent___children'
  | 'footer___parent___children'
  | 'footer___parent___children___id'
  | 'footer___parent___children___children'
  | 'footer___parent___internal___content'
  | 'footer___parent___internal___contentDigest'
  | 'footer___parent___internal___description'
  | 'footer___parent___internal___fieldOwners'
  | 'footer___parent___internal___ignoreType'
  | 'footer___parent___internal___mediaType'
  | 'footer___parent___internal___owner'
  | 'footer___parent___internal___type'
  | 'footer___children'
  | 'footer___children___id'
  | 'footer___children___parent___id'
  | 'footer___children___parent___children'
  | 'footer___children___children'
  | 'footer___children___children___id'
  | 'footer___children___children___children'
  | 'footer___children___internal___content'
  | 'footer___children___internal___contentDigest'
  | 'footer___children___internal___description'
  | 'footer___children___internal___fieldOwners'
  | 'footer___children___internal___ignoreType'
  | 'footer___children___internal___mediaType'
  | 'footer___children___internal___owner'
  | 'footer___children___internal___type'
  | 'footer___internal___content'
  | 'footer___internal___contentDigest'
  | 'footer___internal___description'
  | 'footer___internal___fieldOwners'
  | 'footer___internal___ignoreType'
  | 'footer___internal___mediaType'
  | 'footer___internal___owner'
  | 'footer___internal___type'
  | 'footer___name'
  | 'footer___layout'
  | 'footer___navigation___id'
  | 'footer___navigation___parent___id'
  | 'footer___navigation___parent___children'
  | 'footer___navigation___children'
  | 'footer___navigation___children___id'
  | 'footer___navigation___children___children'
  | 'footer___navigation___internal___content'
  | 'footer___navigation___internal___contentDigest'
  | 'footer___navigation___internal___description'
  | 'footer___navigation___internal___fieldOwners'
  | 'footer___navigation___internal___ignoreType'
  | 'footer___navigation___internal___mediaType'
  | 'footer___navigation___internal___owner'
  | 'footer___navigation___internal___type'
  | 'footer___navigation___name'
  | 'footer___navigation___component'
  | 'footer___navigation___links'
  | 'footer___navigation___links___id'
  | 'footer___navigation___links___children'
  | 'footer___navigation___links___name'
  | 'footer___navigation___links___label'
  | 'footer___navigation___links___component'
  | 'footer___navigation___links___type'
  | 'footer___navigation___links___spaceId'
  | 'footer___navigation___links___contentful_id'
  | 'footer___navigation___links___createdAt'
  | 'footer___navigation___links___updatedAt'
  | 'footer___navigation___links___node_locale'
  | 'footer___navigation___links___navigation'
  | 'footer___navigation___links___variant'
  | 'footer___navigation___links___icon'
  | 'footer___navigation___links___block'
  | 'footer___navigation___navigation'
  | 'footer___navigation___navigation___id'
  | 'footer___navigation___navigation___children'
  | 'footer___navigation___navigation___name'
  | 'footer___navigation___navigation___component'
  | 'footer___navigation___navigation___links'
  | 'footer___navigation___navigation___navigation'
  | 'footer___navigation___navigation___spaceId'
  | 'footer___navigation___navigation___contentful_id'
  | 'footer___navigation___navigation___createdAt'
  | 'footer___navigation___navigation___updatedAt'
  | 'footer___navigation___navigation___node_locale'
  | 'footer___navigation___navigation___subNavigation'
  | 'footer___navigation___navigation___footer'
  | 'footer___navigation___navigation___navbar'
  | 'footer___navigation___spaceId'
  | 'footer___navigation___contentful_id'
  | 'footer___navigation___createdAt'
  | 'footer___navigation___updatedAt'
  | 'footer___navigation___sys___type'
  | 'footer___navigation___sys___revision'
  | 'footer___navigation___node_locale'
  | 'footer___navigation___subNavigation'
  | 'footer___navigation___subNavigation___id'
  | 'footer___navigation___subNavigation___children'
  | 'footer___navigation___subNavigation___name'
  | 'footer___navigation___subNavigation___component'
  | 'footer___navigation___subNavigation___links'
  | 'footer___navigation___subNavigation___navigation'
  | 'footer___navigation___subNavigation___spaceId'
  | 'footer___navigation___subNavigation___contentful_id'
  | 'footer___navigation___subNavigation___createdAt'
  | 'footer___navigation___subNavigation___updatedAt'
  | 'footer___navigation___subNavigation___node_locale'
  | 'footer___navigation___subNavigation___subNavigation'
  | 'footer___navigation___subNavigation___footer'
  | 'footer___navigation___subNavigation___navbar'
  | 'footer___navigation___footer'
  | 'footer___navigation___footer___id'
  | 'footer___navigation___footer___children'
  | 'footer___navigation___footer___name'
  | 'footer___navigation___footer___layout'
  | 'footer___navigation___footer___spaceId'
  | 'footer___navigation___footer___contentful_id'
  | 'footer___navigation___footer___createdAt'
  | 'footer___navigation___footer___updatedAt'
  | 'footer___navigation___footer___node_locale'
  | 'footer___navigation___navbar'
  | 'footer___navigation___navbar___id'
  | 'footer___navigation___navbar___children'
  | 'footer___navigation___navbar___name'
  | 'footer___navigation___navbar___layout'
  | 'footer___navigation___navbar___spaceId'
  | 'footer___navigation___navbar___contentful_id'
  | 'footer___navigation___navbar___createdAt'
  | 'footer___navigation___navbar___updatedAt'
  | 'footer___navigation___navbar___node_locale'
  | 'footer___companyInfo___id'
  | 'footer___companyInfo___parent___id'
  | 'footer___companyInfo___parent___children'
  | 'footer___companyInfo___children'
  | 'footer___companyInfo___children___id'
  | 'footer___companyInfo___children___children'
  | 'footer___companyInfo___internal___content'
  | 'footer___companyInfo___internal___contentDigest'
  | 'footer___companyInfo___internal___description'
  | 'footer___companyInfo___internal___fieldOwners'
  | 'footer___companyInfo___internal___ignoreType'
  | 'footer___companyInfo___internal___mediaType'
  | 'footer___companyInfo___internal___owner'
  | 'footer___companyInfo___internal___type'
  | 'footer___companyInfo___companyName'
  | 'footer___companyInfo___description'
  | 'footer___companyInfo___copyright'
  | 'footer___companyInfo___linkedinPageURL'
  | 'footer___companyInfo___facebookPageURL'
  | 'footer___companyInfo___instagramPageURL'
  | 'footer___companyInfo___twitterPageURL'
  | 'footer___companyInfo___metadataTwitterSite'
  | 'footer___companyInfo___metadataTwitterCreator'
  | 'footer___companyInfo___metadataSiteName'
  | 'footer___companyInfo___footer'
  | 'footer___companyInfo___footer___id'
  | 'footer___companyInfo___footer___children'
  | 'footer___companyInfo___footer___name'
  | 'footer___companyInfo___footer___layout'
  | 'footer___companyInfo___footer___spaceId'
  | 'footer___companyInfo___footer___contentful_id'
  | 'footer___companyInfo___footer___createdAt'
  | 'footer___companyInfo___footer___updatedAt'
  | 'footer___companyInfo___footer___node_locale'
  | 'footer___companyInfo___spaceId'
  | 'footer___companyInfo___contentful_id'
  | 'footer___companyInfo___createdAt'
  | 'footer___companyInfo___updatedAt'
  | 'footer___companyInfo___sys___type'
  | 'footer___companyInfo___sys___revision'
  | 'footer___companyInfo___node_locale'
  | 'footer___spaceId'
  | 'footer___contentful_id'
  | 'footer___createdAt'
  | 'footer___updatedAt'
  | 'footer___sys___type'
  | 'footer___sys___revision'
  | 'footer___node_locale'
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
  copyright?: Maybe<StringQueryOperatorInput>;
  linkedinPageURL?: Maybe<StringQueryOperatorInput>;
  facebookPageURL?: Maybe<StringQueryOperatorInput>;
  instagramPageURL?: Maybe<StringQueryOperatorInput>;
  twitterPageURL?: Maybe<StringQueryOperatorInput>;
  metadataTwitterSite?: Maybe<StringQueryOperatorInput>;
  metadataTwitterCreator?: Maybe<StringQueryOperatorInput>;
  metadataSiteName?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<ContentfulFooterFilterListInput>;
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

export type ContentfulFooter = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  navigation?: Maybe<ContentfulNavigation>;
  companyInfo?: Maybe<ContentfulCompanyInfo>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFooterSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulFooterCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulFooterUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulFooterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFooterEdge>;
  nodes: Array<ContentfulFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulFooterGroupConnection>;
};


export type ContentfulFooterConnectionDistinctArgs = {
  field: ContentfulFooterFieldsEnum;
};


export type ContentfulFooterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulFooterFieldsEnum;
};

export type ContentfulFooterEdge = {
  next?: Maybe<ContentfulFooter>;
  node: ContentfulFooter;
  previous?: Maybe<ContentfulFooter>;
};

export type ContentfulFooterFieldsEnum =
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
  | 'navigation___component'
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
  | 'navigation___links___name'
  | 'navigation___links___label'
  | 'navigation___links___component'
  | 'navigation___links___type'
  | 'navigation___links___page___id'
  | 'navigation___links___page___children'
  | 'navigation___links___page___name'
  | 'navigation___links___page___title'
  | 'navigation___links___page___slug'
  | 'navigation___links___page___sections'
  | 'navigation___links___page___spaceId'
  | 'navigation___links___page___contentful_id'
  | 'navigation___links___page___createdAt'
  | 'navigation___links___page___updatedAt'
  | 'navigation___links___page___node_locale'
  | 'navigation___links___page___link'
  | 'navigation___links___page___childrenContentfulPageDescriptionTextNode'
  | 'navigation___links___spaceId'
  | 'navigation___links___contentful_id'
  | 'navigation___links___createdAt'
  | 'navigation___links___updatedAt'
  | 'navigation___links___sys___type'
  | 'navigation___links___sys___revision'
  | 'navigation___links___node_locale'
  | 'navigation___links___navigation'
  | 'navigation___links___navigation___id'
  | 'navigation___links___navigation___children'
  | 'navigation___links___navigation___name'
  | 'navigation___links___navigation___component'
  | 'navigation___links___navigation___links'
  | 'navigation___links___navigation___navigation'
  | 'navigation___links___navigation___spaceId'
  | 'navigation___links___navigation___contentful_id'
  | 'navigation___links___navigation___createdAt'
  | 'navigation___links___navigation___updatedAt'
  | 'navigation___links___navigation___node_locale'
  | 'navigation___links___navigation___subNavigation'
  | 'navigation___links___navigation___footer'
  | 'navigation___links___navigation___navbar'
  | 'navigation___links___variant'
  | 'navigation___links___icon'
  | 'navigation___links___block'
  | 'navigation___links___block___id'
  | 'navigation___links___block___children'
  | 'navigation___links___block___name'
  | 'navigation___links___block___type'
  | 'navigation___links___block___alignment'
  | 'navigation___links___block___section'
  | 'navigation___links___block___spaceId'
  | 'navigation___links___block___contentful_id'
  | 'navigation___links___block___createdAt'
  | 'navigation___links___block___updatedAt'
  | 'navigation___links___block___node_locale'
  | 'navigation___links___block___variant'
  | 'navigation___links___block___childrenContentfulBlockTextTextNode'
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
  | 'navigation___navigation___component'
  | 'navigation___navigation___links'
  | 'navigation___navigation___links___id'
  | 'navigation___navigation___links___children'
  | 'navigation___navigation___links___name'
  | 'navigation___navigation___links___label'
  | 'navigation___navigation___links___component'
  | 'navigation___navigation___links___type'
  | 'navigation___navigation___links___spaceId'
  | 'navigation___navigation___links___contentful_id'
  | 'navigation___navigation___links___createdAt'
  | 'navigation___navigation___links___updatedAt'
  | 'navigation___navigation___links___node_locale'
  | 'navigation___navigation___links___navigation'
  | 'navigation___navigation___links___variant'
  | 'navigation___navigation___links___icon'
  | 'navigation___navigation___links___block'
  | 'navigation___navigation___navigation'
  | 'navigation___navigation___navigation___id'
  | 'navigation___navigation___navigation___children'
  | 'navigation___navigation___navigation___name'
  | 'navigation___navigation___navigation___component'
  | 'navigation___navigation___navigation___links'
  | 'navigation___navigation___navigation___navigation'
  | 'navigation___navigation___navigation___spaceId'
  | 'navigation___navigation___navigation___contentful_id'
  | 'navigation___navigation___navigation___createdAt'
  | 'navigation___navigation___navigation___updatedAt'
  | 'navigation___navigation___navigation___node_locale'
  | 'navigation___navigation___navigation___subNavigation'
  | 'navigation___navigation___navigation___footer'
  | 'navigation___navigation___navigation___navbar'
  | 'navigation___navigation___spaceId'
  | 'navigation___navigation___contentful_id'
  | 'navigation___navigation___createdAt'
  | 'navigation___navigation___updatedAt'
  | 'navigation___navigation___sys___type'
  | 'navigation___navigation___sys___revision'
  | 'navigation___navigation___node_locale'
  | 'navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation___id'
  | 'navigation___navigation___subNavigation___children'
  | 'navigation___navigation___subNavigation___name'
  | 'navigation___navigation___subNavigation___component'
  | 'navigation___navigation___subNavigation___links'
  | 'navigation___navigation___subNavigation___navigation'
  | 'navigation___navigation___subNavigation___spaceId'
  | 'navigation___navigation___subNavigation___contentful_id'
  | 'navigation___navigation___subNavigation___createdAt'
  | 'navigation___navigation___subNavigation___updatedAt'
  | 'navigation___navigation___subNavigation___node_locale'
  | 'navigation___navigation___subNavigation___subNavigation'
  | 'navigation___navigation___subNavigation___footer'
  | 'navigation___navigation___subNavigation___navbar'
  | 'navigation___navigation___footer'
  | 'navigation___navigation___footer___id'
  | 'navigation___navigation___footer___children'
  | 'navigation___navigation___footer___name'
  | 'navigation___navigation___footer___layout'
  | 'navigation___navigation___footer___spaceId'
  | 'navigation___navigation___footer___contentful_id'
  | 'navigation___navigation___footer___createdAt'
  | 'navigation___navigation___footer___updatedAt'
  | 'navigation___navigation___footer___node_locale'
  | 'navigation___navigation___navbar'
  | 'navigation___navigation___navbar___id'
  | 'navigation___navigation___navbar___children'
  | 'navigation___navigation___navbar___name'
  | 'navigation___navigation___navbar___layout'
  | 'navigation___navigation___navbar___spaceId'
  | 'navigation___navigation___navbar___contentful_id'
  | 'navigation___navigation___navbar___createdAt'
  | 'navigation___navigation___navbar___updatedAt'
  | 'navigation___navigation___navbar___node_locale'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___type'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
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
  | 'navigation___subNavigation___component'
  | 'navigation___subNavigation___links'
  | 'navigation___subNavigation___links___id'
  | 'navigation___subNavigation___links___children'
  | 'navigation___subNavigation___links___name'
  | 'navigation___subNavigation___links___label'
  | 'navigation___subNavigation___links___component'
  | 'navigation___subNavigation___links___type'
  | 'navigation___subNavigation___links___spaceId'
  | 'navigation___subNavigation___links___contentful_id'
  | 'navigation___subNavigation___links___createdAt'
  | 'navigation___subNavigation___links___updatedAt'
  | 'navigation___subNavigation___links___node_locale'
  | 'navigation___subNavigation___links___navigation'
  | 'navigation___subNavigation___links___variant'
  | 'navigation___subNavigation___links___icon'
  | 'navigation___subNavigation___links___block'
  | 'navigation___subNavigation___navigation'
  | 'navigation___subNavigation___navigation___id'
  | 'navigation___subNavigation___navigation___children'
  | 'navigation___subNavigation___navigation___name'
  | 'navigation___subNavigation___navigation___component'
  | 'navigation___subNavigation___navigation___links'
  | 'navigation___subNavigation___navigation___navigation'
  | 'navigation___subNavigation___navigation___spaceId'
  | 'navigation___subNavigation___navigation___contentful_id'
  | 'navigation___subNavigation___navigation___createdAt'
  | 'navigation___subNavigation___navigation___updatedAt'
  | 'navigation___subNavigation___navigation___node_locale'
  | 'navigation___subNavigation___navigation___subNavigation'
  | 'navigation___subNavigation___navigation___footer'
  | 'navigation___subNavigation___navigation___navbar'
  | 'navigation___subNavigation___spaceId'
  | 'navigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___createdAt'
  | 'navigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___sys___type'
  | 'navigation___subNavigation___sys___revision'
  | 'navigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___id'
  | 'navigation___subNavigation___subNavigation___children'
  | 'navigation___subNavigation___subNavigation___name'
  | 'navigation___subNavigation___subNavigation___component'
  | 'navigation___subNavigation___subNavigation___links'
  | 'navigation___subNavigation___subNavigation___navigation'
  | 'navigation___subNavigation___subNavigation___spaceId'
  | 'navigation___subNavigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___subNavigation___createdAt'
  | 'navigation___subNavigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___footer'
  | 'navigation___subNavigation___subNavigation___navbar'
  | 'navigation___subNavigation___footer'
  | 'navigation___subNavigation___footer___id'
  | 'navigation___subNavigation___footer___children'
  | 'navigation___subNavigation___footer___name'
  | 'navigation___subNavigation___footer___layout'
  | 'navigation___subNavigation___footer___spaceId'
  | 'navigation___subNavigation___footer___contentful_id'
  | 'navigation___subNavigation___footer___createdAt'
  | 'navigation___subNavigation___footer___updatedAt'
  | 'navigation___subNavigation___footer___node_locale'
  | 'navigation___subNavigation___navbar'
  | 'navigation___subNavigation___navbar___id'
  | 'navigation___subNavigation___navbar___children'
  | 'navigation___subNavigation___navbar___name'
  | 'navigation___subNavigation___navbar___layout'
  | 'navigation___subNavigation___navbar___spaceId'
  | 'navigation___subNavigation___navbar___contentful_id'
  | 'navigation___subNavigation___navbar___createdAt'
  | 'navigation___subNavigation___navbar___updatedAt'
  | 'navigation___subNavigation___navbar___node_locale'
  | 'navigation___footer'
  | 'navigation___footer___id'
  | 'navigation___footer___parent___id'
  | 'navigation___footer___parent___children'
  | 'navigation___footer___children'
  | 'navigation___footer___children___id'
  | 'navigation___footer___children___children'
  | 'navigation___footer___internal___content'
  | 'navigation___footer___internal___contentDigest'
  | 'navigation___footer___internal___description'
  | 'navigation___footer___internal___fieldOwners'
  | 'navigation___footer___internal___ignoreType'
  | 'navigation___footer___internal___mediaType'
  | 'navigation___footer___internal___owner'
  | 'navigation___footer___internal___type'
  | 'navigation___footer___name'
  | 'navigation___footer___layout'
  | 'navigation___footer___navigation___id'
  | 'navigation___footer___navigation___children'
  | 'navigation___footer___navigation___name'
  | 'navigation___footer___navigation___component'
  | 'navigation___footer___navigation___links'
  | 'navigation___footer___navigation___navigation'
  | 'navigation___footer___navigation___spaceId'
  | 'navigation___footer___navigation___contentful_id'
  | 'navigation___footer___navigation___createdAt'
  | 'navigation___footer___navigation___updatedAt'
  | 'navigation___footer___navigation___node_locale'
  | 'navigation___footer___navigation___subNavigation'
  | 'navigation___footer___navigation___footer'
  | 'navigation___footer___navigation___navbar'
  | 'navigation___footer___companyInfo___id'
  | 'navigation___footer___companyInfo___children'
  | 'navigation___footer___companyInfo___companyName'
  | 'navigation___footer___companyInfo___description'
  | 'navigation___footer___companyInfo___copyright'
  | 'navigation___footer___companyInfo___linkedinPageURL'
  | 'navigation___footer___companyInfo___facebookPageURL'
  | 'navigation___footer___companyInfo___instagramPageURL'
  | 'navigation___footer___companyInfo___twitterPageURL'
  | 'navigation___footer___companyInfo___metadataTwitterSite'
  | 'navigation___footer___companyInfo___metadataTwitterCreator'
  | 'navigation___footer___companyInfo___metadataSiteName'
  | 'navigation___footer___companyInfo___footer'
  | 'navigation___footer___companyInfo___spaceId'
  | 'navigation___footer___companyInfo___contentful_id'
  | 'navigation___footer___companyInfo___createdAt'
  | 'navigation___footer___companyInfo___updatedAt'
  | 'navigation___footer___companyInfo___node_locale'
  | 'navigation___footer___spaceId'
  | 'navigation___footer___contentful_id'
  | 'navigation___footer___createdAt'
  | 'navigation___footer___updatedAt'
  | 'navigation___footer___sys___type'
  | 'navigation___footer___sys___revision'
  | 'navigation___footer___node_locale'
  | 'navigation___navbar'
  | 'navigation___navbar___id'
  | 'navigation___navbar___parent___id'
  | 'navigation___navbar___parent___children'
  | 'navigation___navbar___children'
  | 'navigation___navbar___children___id'
  | 'navigation___navbar___children___children'
  | 'navigation___navbar___internal___content'
  | 'navigation___navbar___internal___contentDigest'
  | 'navigation___navbar___internal___description'
  | 'navigation___navbar___internal___fieldOwners'
  | 'navigation___navbar___internal___ignoreType'
  | 'navigation___navbar___internal___mediaType'
  | 'navigation___navbar___internal___owner'
  | 'navigation___navbar___internal___type'
  | 'navigation___navbar___name'
  | 'navigation___navbar___layout'
  | 'navigation___navbar___navigation___id'
  | 'navigation___navbar___navigation___children'
  | 'navigation___navbar___navigation___name'
  | 'navigation___navbar___navigation___component'
  | 'navigation___navbar___navigation___links'
  | 'navigation___navbar___navigation___navigation'
  | 'navigation___navbar___navigation___spaceId'
  | 'navigation___navbar___navigation___contentful_id'
  | 'navigation___navbar___navigation___createdAt'
  | 'navigation___navbar___navigation___updatedAt'
  | 'navigation___navbar___navigation___node_locale'
  | 'navigation___navbar___navigation___subNavigation'
  | 'navigation___navbar___navigation___footer'
  | 'navigation___navbar___navigation___navbar'
  | 'navigation___navbar___spaceId'
  | 'navigation___navbar___contentful_id'
  | 'navigation___navbar___createdAt'
  | 'navigation___navbar___updatedAt'
  | 'navigation___navbar___sys___type'
  | 'navigation___navbar___sys___revision'
  | 'navigation___navbar___node_locale'
  | 'companyInfo___id'
  | 'companyInfo___parent___id'
  | 'companyInfo___parent___parent___id'
  | 'companyInfo___parent___parent___children'
  | 'companyInfo___parent___children'
  | 'companyInfo___parent___children___id'
  | 'companyInfo___parent___children___children'
  | 'companyInfo___parent___internal___content'
  | 'companyInfo___parent___internal___contentDigest'
  | 'companyInfo___parent___internal___description'
  | 'companyInfo___parent___internal___fieldOwners'
  | 'companyInfo___parent___internal___ignoreType'
  | 'companyInfo___parent___internal___mediaType'
  | 'companyInfo___parent___internal___owner'
  | 'companyInfo___parent___internal___type'
  | 'companyInfo___children'
  | 'companyInfo___children___id'
  | 'companyInfo___children___parent___id'
  | 'companyInfo___children___parent___children'
  | 'companyInfo___children___children'
  | 'companyInfo___children___children___id'
  | 'companyInfo___children___children___children'
  | 'companyInfo___children___internal___content'
  | 'companyInfo___children___internal___contentDigest'
  | 'companyInfo___children___internal___description'
  | 'companyInfo___children___internal___fieldOwners'
  | 'companyInfo___children___internal___ignoreType'
  | 'companyInfo___children___internal___mediaType'
  | 'companyInfo___children___internal___owner'
  | 'companyInfo___children___internal___type'
  | 'companyInfo___internal___content'
  | 'companyInfo___internal___contentDigest'
  | 'companyInfo___internal___description'
  | 'companyInfo___internal___fieldOwners'
  | 'companyInfo___internal___ignoreType'
  | 'companyInfo___internal___mediaType'
  | 'companyInfo___internal___owner'
  | 'companyInfo___internal___type'
  | 'companyInfo___companyName'
  | 'companyInfo___description'
  | 'companyInfo___copyright'
  | 'companyInfo___linkedinPageURL'
  | 'companyInfo___facebookPageURL'
  | 'companyInfo___instagramPageURL'
  | 'companyInfo___twitterPageURL'
  | 'companyInfo___metadataTwitterSite'
  | 'companyInfo___metadataTwitterCreator'
  | 'companyInfo___metadataSiteName'
  | 'companyInfo___footer'
  | 'companyInfo___footer___id'
  | 'companyInfo___footer___parent___id'
  | 'companyInfo___footer___parent___children'
  | 'companyInfo___footer___children'
  | 'companyInfo___footer___children___id'
  | 'companyInfo___footer___children___children'
  | 'companyInfo___footer___internal___content'
  | 'companyInfo___footer___internal___contentDigest'
  | 'companyInfo___footer___internal___description'
  | 'companyInfo___footer___internal___fieldOwners'
  | 'companyInfo___footer___internal___ignoreType'
  | 'companyInfo___footer___internal___mediaType'
  | 'companyInfo___footer___internal___owner'
  | 'companyInfo___footer___internal___type'
  | 'companyInfo___footer___name'
  | 'companyInfo___footer___layout'
  | 'companyInfo___footer___navigation___id'
  | 'companyInfo___footer___navigation___children'
  | 'companyInfo___footer___navigation___name'
  | 'companyInfo___footer___navigation___component'
  | 'companyInfo___footer___navigation___links'
  | 'companyInfo___footer___navigation___navigation'
  | 'companyInfo___footer___navigation___spaceId'
  | 'companyInfo___footer___navigation___contentful_id'
  | 'companyInfo___footer___navigation___createdAt'
  | 'companyInfo___footer___navigation___updatedAt'
  | 'companyInfo___footer___navigation___node_locale'
  | 'companyInfo___footer___navigation___subNavigation'
  | 'companyInfo___footer___navigation___footer'
  | 'companyInfo___footer___navigation___navbar'
  | 'companyInfo___footer___companyInfo___id'
  | 'companyInfo___footer___companyInfo___children'
  | 'companyInfo___footer___companyInfo___companyName'
  | 'companyInfo___footer___companyInfo___description'
  | 'companyInfo___footer___companyInfo___copyright'
  | 'companyInfo___footer___companyInfo___linkedinPageURL'
  | 'companyInfo___footer___companyInfo___facebookPageURL'
  | 'companyInfo___footer___companyInfo___instagramPageURL'
  | 'companyInfo___footer___companyInfo___twitterPageURL'
  | 'companyInfo___footer___companyInfo___metadataTwitterSite'
  | 'companyInfo___footer___companyInfo___metadataTwitterCreator'
  | 'companyInfo___footer___companyInfo___metadataSiteName'
  | 'companyInfo___footer___companyInfo___footer'
  | 'companyInfo___footer___companyInfo___spaceId'
  | 'companyInfo___footer___companyInfo___contentful_id'
  | 'companyInfo___footer___companyInfo___createdAt'
  | 'companyInfo___footer___companyInfo___updatedAt'
  | 'companyInfo___footer___companyInfo___node_locale'
  | 'companyInfo___footer___spaceId'
  | 'companyInfo___footer___contentful_id'
  | 'companyInfo___footer___createdAt'
  | 'companyInfo___footer___updatedAt'
  | 'companyInfo___footer___sys___type'
  | 'companyInfo___footer___sys___revision'
  | 'companyInfo___footer___node_locale'
  | 'companyInfo___spaceId'
  | 'companyInfo___contentful_id'
  | 'companyInfo___createdAt'
  | 'companyInfo___updatedAt'
  | 'companyInfo___sys___type'
  | 'companyInfo___sys___revision'
  | 'companyInfo___node_locale'
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

export type ContentfulFooterFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterInput>;
  companyInfo?: Maybe<ContentfulCompanyInfoFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFooterSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFooterFilterListInput = {
  elemMatch?: Maybe<ContentfulFooterFilterInput>;
};

export type ContentfulFooterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFooterEdge>;
  nodes: Array<ContentfulFooter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulFooterSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulFooterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFooterSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFooterSysContentType>;
};

export type ContentfulFooterSysContentType = {
  sys?: Maybe<ContentfulFooterSysContentTypeSys>;
};

export type ContentfulFooterSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulFooterSysContentTypeSysFilterInput>;
};

export type ContentfulFooterSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulFooterSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFooterSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulFooterSysContentTypeFilterInput>;
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
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  page?: Maybe<ContentfulPage>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLinkSys>;
  node_locale?: Maybe<Scalars['String']>;
  navigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  variant?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  block?: Maybe<Array<Maybe<ContentfulBlock>>>;
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
  | 'name'
  | 'label'
  | 'component'
  | 'type'
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
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___page___link'
  | 'page___sections___page___childrenContentfulPageDescriptionTextNode'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
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
  | 'page___description___childrenMdx'
  | 'page___description___childrenMdx___rawBody'
  | 'page___description___childrenMdx___fileAbsolutePath'
  | 'page___description___childrenMdx___slug'
  | 'page___description___childrenMdx___body'
  | 'page___description___childrenMdx___excerpt'
  | 'page___description___childrenMdx___headings'
  | 'page___description___childrenMdx___html'
  | 'page___description___childrenMdx___mdxAST'
  | 'page___description___childrenMdx___tableOfContents'
  | 'page___description___childrenMdx___timeToRead'
  | 'page___description___childrenMdx___id'
  | 'page___description___childrenMdx___children'
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
  | 'page___link___name'
  | 'page___link___label'
  | 'page___link___component'
  | 'page___link___type'
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
  | 'page___link___page___childrenContentfulPageDescriptionTextNode'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___link___navigation'
  | 'page___link___navigation___id'
  | 'page___link___navigation___children'
  | 'page___link___navigation___name'
  | 'page___link___navigation___component'
  | 'page___link___navigation___links'
  | 'page___link___navigation___navigation'
  | 'page___link___navigation___spaceId'
  | 'page___link___navigation___contentful_id'
  | 'page___link___navigation___createdAt'
  | 'page___link___navigation___updatedAt'
  | 'page___link___navigation___node_locale'
  | 'page___link___navigation___subNavigation'
  | 'page___link___navigation___footer'
  | 'page___link___navigation___navbar'
  | 'page___link___variant'
  | 'page___link___icon'
  | 'page___link___block'
  | 'page___link___block___id'
  | 'page___link___block___children'
  | 'page___link___block___name'
  | 'page___link___block___type'
  | 'page___link___block___alignment'
  | 'page___link___block___section'
  | 'page___link___block___spaceId'
  | 'page___link___block___contentful_id'
  | 'page___link___block___createdAt'
  | 'page___link___block___updatedAt'
  | 'page___link___block___node_locale'
  | 'page___link___block___variant'
  | 'page___link___block___childrenContentfulBlockTextTextNode'
  | 'page___childrenContentfulPageDescriptionTextNode'
  | 'page___childrenContentfulPageDescriptionTextNode___id'
  | 'page___childrenContentfulPageDescriptionTextNode___parent___id'
  | 'page___childrenContentfulPageDescriptionTextNode___parent___children'
  | 'page___childrenContentfulPageDescriptionTextNode___children'
  | 'page___childrenContentfulPageDescriptionTextNode___children___id'
  | 'page___childrenContentfulPageDescriptionTextNode___children___children'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___content'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___description'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___mediaType'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___owner'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___type'
  | 'page___childrenContentfulPageDescriptionTextNode___description'
  | 'page___childrenContentfulPageDescriptionTextNode___sys___type'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___rawBody'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___slug'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___body'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___excerpt'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___headings'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___html'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___mdxAST'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___tableOfContents'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___timeToRead'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___id'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___children'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___slug'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___body'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___headings'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___html'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___id'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___children'
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
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___rawBody'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___slug'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___body'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___excerpt'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___headings'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___html'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___mdxAST'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___tableOfContents'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___timeToRead'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___id'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___children'
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
  | 'navigation___component'
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
  | 'navigation___links___name'
  | 'navigation___links___label'
  | 'navigation___links___component'
  | 'navigation___links___type'
  | 'navigation___links___page___id'
  | 'navigation___links___page___children'
  | 'navigation___links___page___name'
  | 'navigation___links___page___title'
  | 'navigation___links___page___slug'
  | 'navigation___links___page___sections'
  | 'navigation___links___page___spaceId'
  | 'navigation___links___page___contentful_id'
  | 'navigation___links___page___createdAt'
  | 'navigation___links___page___updatedAt'
  | 'navigation___links___page___node_locale'
  | 'navigation___links___page___link'
  | 'navigation___links___page___childrenContentfulPageDescriptionTextNode'
  | 'navigation___links___spaceId'
  | 'navigation___links___contentful_id'
  | 'navigation___links___createdAt'
  | 'navigation___links___updatedAt'
  | 'navigation___links___sys___type'
  | 'navigation___links___sys___revision'
  | 'navigation___links___node_locale'
  | 'navigation___links___navigation'
  | 'navigation___links___navigation___id'
  | 'navigation___links___navigation___children'
  | 'navigation___links___navigation___name'
  | 'navigation___links___navigation___component'
  | 'navigation___links___navigation___links'
  | 'navigation___links___navigation___navigation'
  | 'navigation___links___navigation___spaceId'
  | 'navigation___links___navigation___contentful_id'
  | 'navigation___links___navigation___createdAt'
  | 'navigation___links___navigation___updatedAt'
  | 'navigation___links___navigation___node_locale'
  | 'navigation___links___navigation___subNavigation'
  | 'navigation___links___navigation___footer'
  | 'navigation___links___navigation___navbar'
  | 'navigation___links___variant'
  | 'navigation___links___icon'
  | 'navigation___links___block'
  | 'navigation___links___block___id'
  | 'navigation___links___block___children'
  | 'navigation___links___block___name'
  | 'navigation___links___block___type'
  | 'navigation___links___block___alignment'
  | 'navigation___links___block___section'
  | 'navigation___links___block___spaceId'
  | 'navigation___links___block___contentful_id'
  | 'navigation___links___block___createdAt'
  | 'navigation___links___block___updatedAt'
  | 'navigation___links___block___node_locale'
  | 'navigation___links___block___variant'
  | 'navigation___links___block___childrenContentfulBlockTextTextNode'
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
  | 'navigation___navigation___component'
  | 'navigation___navigation___links'
  | 'navigation___navigation___links___id'
  | 'navigation___navigation___links___children'
  | 'navigation___navigation___links___name'
  | 'navigation___navigation___links___label'
  | 'navigation___navigation___links___component'
  | 'navigation___navigation___links___type'
  | 'navigation___navigation___links___spaceId'
  | 'navigation___navigation___links___contentful_id'
  | 'navigation___navigation___links___createdAt'
  | 'navigation___navigation___links___updatedAt'
  | 'navigation___navigation___links___node_locale'
  | 'navigation___navigation___links___navigation'
  | 'navigation___navigation___links___variant'
  | 'navigation___navigation___links___icon'
  | 'navigation___navigation___links___block'
  | 'navigation___navigation___navigation'
  | 'navigation___navigation___navigation___id'
  | 'navigation___navigation___navigation___children'
  | 'navigation___navigation___navigation___name'
  | 'navigation___navigation___navigation___component'
  | 'navigation___navigation___navigation___links'
  | 'navigation___navigation___navigation___navigation'
  | 'navigation___navigation___navigation___spaceId'
  | 'navigation___navigation___navigation___contentful_id'
  | 'navigation___navigation___navigation___createdAt'
  | 'navigation___navigation___navigation___updatedAt'
  | 'navigation___navigation___navigation___node_locale'
  | 'navigation___navigation___navigation___subNavigation'
  | 'navigation___navigation___navigation___footer'
  | 'navigation___navigation___navigation___navbar'
  | 'navigation___navigation___spaceId'
  | 'navigation___navigation___contentful_id'
  | 'navigation___navigation___createdAt'
  | 'navigation___navigation___updatedAt'
  | 'navigation___navigation___sys___type'
  | 'navigation___navigation___sys___revision'
  | 'navigation___navigation___node_locale'
  | 'navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation___id'
  | 'navigation___navigation___subNavigation___children'
  | 'navigation___navigation___subNavigation___name'
  | 'navigation___navigation___subNavigation___component'
  | 'navigation___navigation___subNavigation___links'
  | 'navigation___navigation___subNavigation___navigation'
  | 'navigation___navigation___subNavigation___spaceId'
  | 'navigation___navigation___subNavigation___contentful_id'
  | 'navigation___navigation___subNavigation___createdAt'
  | 'navigation___navigation___subNavigation___updatedAt'
  | 'navigation___navigation___subNavigation___node_locale'
  | 'navigation___navigation___subNavigation___subNavigation'
  | 'navigation___navigation___subNavigation___footer'
  | 'navigation___navigation___subNavigation___navbar'
  | 'navigation___navigation___footer'
  | 'navigation___navigation___footer___id'
  | 'navigation___navigation___footer___children'
  | 'navigation___navigation___footer___name'
  | 'navigation___navigation___footer___layout'
  | 'navigation___navigation___footer___spaceId'
  | 'navigation___navigation___footer___contentful_id'
  | 'navigation___navigation___footer___createdAt'
  | 'navigation___navigation___footer___updatedAt'
  | 'navigation___navigation___footer___node_locale'
  | 'navigation___navigation___navbar'
  | 'navigation___navigation___navbar___id'
  | 'navigation___navigation___navbar___children'
  | 'navigation___navigation___navbar___name'
  | 'navigation___navigation___navbar___layout'
  | 'navigation___navigation___navbar___spaceId'
  | 'navigation___navigation___navbar___contentful_id'
  | 'navigation___navigation___navbar___createdAt'
  | 'navigation___navigation___navbar___updatedAt'
  | 'navigation___navigation___navbar___node_locale'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___type'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
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
  | 'navigation___subNavigation___component'
  | 'navigation___subNavigation___links'
  | 'navigation___subNavigation___links___id'
  | 'navigation___subNavigation___links___children'
  | 'navigation___subNavigation___links___name'
  | 'navigation___subNavigation___links___label'
  | 'navigation___subNavigation___links___component'
  | 'navigation___subNavigation___links___type'
  | 'navigation___subNavigation___links___spaceId'
  | 'navigation___subNavigation___links___contentful_id'
  | 'navigation___subNavigation___links___createdAt'
  | 'navigation___subNavigation___links___updatedAt'
  | 'navigation___subNavigation___links___node_locale'
  | 'navigation___subNavigation___links___navigation'
  | 'navigation___subNavigation___links___variant'
  | 'navigation___subNavigation___links___icon'
  | 'navigation___subNavigation___links___block'
  | 'navigation___subNavigation___navigation'
  | 'navigation___subNavigation___navigation___id'
  | 'navigation___subNavigation___navigation___children'
  | 'navigation___subNavigation___navigation___name'
  | 'navigation___subNavigation___navigation___component'
  | 'navigation___subNavigation___navigation___links'
  | 'navigation___subNavigation___navigation___navigation'
  | 'navigation___subNavigation___navigation___spaceId'
  | 'navigation___subNavigation___navigation___contentful_id'
  | 'navigation___subNavigation___navigation___createdAt'
  | 'navigation___subNavigation___navigation___updatedAt'
  | 'navigation___subNavigation___navigation___node_locale'
  | 'navigation___subNavigation___navigation___subNavigation'
  | 'navigation___subNavigation___navigation___footer'
  | 'navigation___subNavigation___navigation___navbar'
  | 'navigation___subNavigation___spaceId'
  | 'navigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___createdAt'
  | 'navigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___sys___type'
  | 'navigation___subNavigation___sys___revision'
  | 'navigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___id'
  | 'navigation___subNavigation___subNavigation___children'
  | 'navigation___subNavigation___subNavigation___name'
  | 'navigation___subNavigation___subNavigation___component'
  | 'navigation___subNavigation___subNavigation___links'
  | 'navigation___subNavigation___subNavigation___navigation'
  | 'navigation___subNavigation___subNavigation___spaceId'
  | 'navigation___subNavigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___subNavigation___createdAt'
  | 'navigation___subNavigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___footer'
  | 'navigation___subNavigation___subNavigation___navbar'
  | 'navigation___subNavigation___footer'
  | 'navigation___subNavigation___footer___id'
  | 'navigation___subNavigation___footer___children'
  | 'navigation___subNavigation___footer___name'
  | 'navigation___subNavigation___footer___layout'
  | 'navigation___subNavigation___footer___spaceId'
  | 'navigation___subNavigation___footer___contentful_id'
  | 'navigation___subNavigation___footer___createdAt'
  | 'navigation___subNavigation___footer___updatedAt'
  | 'navigation___subNavigation___footer___node_locale'
  | 'navigation___subNavigation___navbar'
  | 'navigation___subNavigation___navbar___id'
  | 'navigation___subNavigation___navbar___children'
  | 'navigation___subNavigation___navbar___name'
  | 'navigation___subNavigation___navbar___layout'
  | 'navigation___subNavigation___navbar___spaceId'
  | 'navigation___subNavigation___navbar___contentful_id'
  | 'navigation___subNavigation___navbar___createdAt'
  | 'navigation___subNavigation___navbar___updatedAt'
  | 'navigation___subNavigation___navbar___node_locale'
  | 'navigation___footer'
  | 'navigation___footer___id'
  | 'navigation___footer___parent___id'
  | 'navigation___footer___parent___children'
  | 'navigation___footer___children'
  | 'navigation___footer___children___id'
  | 'navigation___footer___children___children'
  | 'navigation___footer___internal___content'
  | 'navigation___footer___internal___contentDigest'
  | 'navigation___footer___internal___description'
  | 'navigation___footer___internal___fieldOwners'
  | 'navigation___footer___internal___ignoreType'
  | 'navigation___footer___internal___mediaType'
  | 'navigation___footer___internal___owner'
  | 'navigation___footer___internal___type'
  | 'navigation___footer___name'
  | 'navigation___footer___layout'
  | 'navigation___footer___navigation___id'
  | 'navigation___footer___navigation___children'
  | 'navigation___footer___navigation___name'
  | 'navigation___footer___navigation___component'
  | 'navigation___footer___navigation___links'
  | 'navigation___footer___navigation___navigation'
  | 'navigation___footer___navigation___spaceId'
  | 'navigation___footer___navigation___contentful_id'
  | 'navigation___footer___navigation___createdAt'
  | 'navigation___footer___navigation___updatedAt'
  | 'navigation___footer___navigation___node_locale'
  | 'navigation___footer___navigation___subNavigation'
  | 'navigation___footer___navigation___footer'
  | 'navigation___footer___navigation___navbar'
  | 'navigation___footer___companyInfo___id'
  | 'navigation___footer___companyInfo___children'
  | 'navigation___footer___companyInfo___companyName'
  | 'navigation___footer___companyInfo___description'
  | 'navigation___footer___companyInfo___copyright'
  | 'navigation___footer___companyInfo___linkedinPageURL'
  | 'navigation___footer___companyInfo___facebookPageURL'
  | 'navigation___footer___companyInfo___instagramPageURL'
  | 'navigation___footer___companyInfo___twitterPageURL'
  | 'navigation___footer___companyInfo___metadataTwitterSite'
  | 'navigation___footer___companyInfo___metadataTwitterCreator'
  | 'navigation___footer___companyInfo___metadataSiteName'
  | 'navigation___footer___companyInfo___footer'
  | 'navigation___footer___companyInfo___spaceId'
  | 'navigation___footer___companyInfo___contentful_id'
  | 'navigation___footer___companyInfo___createdAt'
  | 'navigation___footer___companyInfo___updatedAt'
  | 'navigation___footer___companyInfo___node_locale'
  | 'navigation___footer___spaceId'
  | 'navigation___footer___contentful_id'
  | 'navigation___footer___createdAt'
  | 'navigation___footer___updatedAt'
  | 'navigation___footer___sys___type'
  | 'navigation___footer___sys___revision'
  | 'navigation___footer___node_locale'
  | 'navigation___navbar'
  | 'navigation___navbar___id'
  | 'navigation___navbar___parent___id'
  | 'navigation___navbar___parent___children'
  | 'navigation___navbar___children'
  | 'navigation___navbar___children___id'
  | 'navigation___navbar___children___children'
  | 'navigation___navbar___internal___content'
  | 'navigation___navbar___internal___contentDigest'
  | 'navigation___navbar___internal___description'
  | 'navigation___navbar___internal___fieldOwners'
  | 'navigation___navbar___internal___ignoreType'
  | 'navigation___navbar___internal___mediaType'
  | 'navigation___navbar___internal___owner'
  | 'navigation___navbar___internal___type'
  | 'navigation___navbar___name'
  | 'navigation___navbar___layout'
  | 'navigation___navbar___navigation___id'
  | 'navigation___navbar___navigation___children'
  | 'navigation___navbar___navigation___name'
  | 'navigation___navbar___navigation___component'
  | 'navigation___navbar___navigation___links'
  | 'navigation___navbar___navigation___navigation'
  | 'navigation___navbar___navigation___spaceId'
  | 'navigation___navbar___navigation___contentful_id'
  | 'navigation___navbar___navigation___createdAt'
  | 'navigation___navbar___navigation___updatedAt'
  | 'navigation___navbar___navigation___node_locale'
  | 'navigation___navbar___navigation___subNavigation'
  | 'navigation___navbar___navigation___footer'
  | 'navigation___navbar___navigation___navbar'
  | 'navigation___navbar___spaceId'
  | 'navigation___navbar___contentful_id'
  | 'navigation___navbar___createdAt'
  | 'navigation___navbar___updatedAt'
  | 'navigation___navbar___sys___type'
  | 'navigation___navbar___sys___revision'
  | 'navigation___navbar___node_locale'
  | 'variant'
  | 'icon'
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
  | 'block___type'
  | 'block___alignment'
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
  | 'block___section___page___spaceId'
  | 'block___section___page___contentful_id'
  | 'block___section___page___createdAt'
  | 'block___section___page___updatedAt'
  | 'block___section___page___node_locale'
  | 'block___section___page___link'
  | 'block___section___page___childrenContentfulPageDescriptionTextNode'
  | 'block___section___spaceId'
  | 'block___section___contentful_id'
  | 'block___section___createdAt'
  | 'block___section___updatedAt'
  | 'block___section___sys___type'
  | 'block___section___sys___revision'
  | 'block___section___node_locale'
  | 'block___section___variant'
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
  | 'block___text___childrenMdx'
  | 'block___text___childrenMdx___rawBody'
  | 'block___text___childrenMdx___fileAbsolutePath'
  | 'block___text___childrenMdx___slug'
  | 'block___text___childrenMdx___body'
  | 'block___text___childrenMdx___excerpt'
  | 'block___text___childrenMdx___headings'
  | 'block___text___childrenMdx___html'
  | 'block___text___childrenMdx___mdxAST'
  | 'block___text___childrenMdx___tableOfContents'
  | 'block___text___childrenMdx___timeToRead'
  | 'block___text___childrenMdx___id'
  | 'block___text___childrenMdx___children'
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
  | 'block___variant'
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
  | 'block___link___name'
  | 'block___link___label'
  | 'block___link___component'
  | 'block___link___type'
  | 'block___link___page___id'
  | 'block___link___page___children'
  | 'block___link___page___name'
  | 'block___link___page___title'
  | 'block___link___page___slug'
  | 'block___link___page___sections'
  | 'block___link___page___spaceId'
  | 'block___link___page___contentful_id'
  | 'block___link___page___createdAt'
  | 'block___link___page___updatedAt'
  | 'block___link___page___node_locale'
  | 'block___link___page___link'
  | 'block___link___page___childrenContentfulPageDescriptionTextNode'
  | 'block___link___spaceId'
  | 'block___link___contentful_id'
  | 'block___link___createdAt'
  | 'block___link___updatedAt'
  | 'block___link___sys___type'
  | 'block___link___sys___revision'
  | 'block___link___node_locale'
  | 'block___link___navigation'
  | 'block___link___navigation___id'
  | 'block___link___navigation___children'
  | 'block___link___navigation___name'
  | 'block___link___navigation___component'
  | 'block___link___navigation___links'
  | 'block___link___navigation___navigation'
  | 'block___link___navigation___spaceId'
  | 'block___link___navigation___contentful_id'
  | 'block___link___navigation___createdAt'
  | 'block___link___navigation___updatedAt'
  | 'block___link___navigation___node_locale'
  | 'block___link___navigation___subNavigation'
  | 'block___link___navigation___footer'
  | 'block___link___navigation___navbar'
  | 'block___link___variant'
  | 'block___link___icon'
  | 'block___link___block'
  | 'block___link___block___id'
  | 'block___link___block___children'
  | 'block___link___block___name'
  | 'block___link___block___type'
  | 'block___link___block___alignment'
  | 'block___link___block___section'
  | 'block___link___block___spaceId'
  | 'block___link___block___contentful_id'
  | 'block___link___block___createdAt'
  | 'block___link___block___updatedAt'
  | 'block___link___block___node_locale'
  | 'block___link___block___variant'
  | 'block___link___block___childrenContentfulBlockTextTextNode'
  | 'block___childrenContentfulBlockTextTextNode'
  | 'block___childrenContentfulBlockTextTextNode___id'
  | 'block___childrenContentfulBlockTextTextNode___parent___id'
  | 'block___childrenContentfulBlockTextTextNode___parent___children'
  | 'block___childrenContentfulBlockTextTextNode___children'
  | 'block___childrenContentfulBlockTextTextNode___children___id'
  | 'block___childrenContentfulBlockTextTextNode___children___children'
  | 'block___childrenContentfulBlockTextTextNode___internal___content'
  | 'block___childrenContentfulBlockTextTextNode___internal___contentDigest'
  | 'block___childrenContentfulBlockTextTextNode___internal___description'
  | 'block___childrenContentfulBlockTextTextNode___internal___fieldOwners'
  | 'block___childrenContentfulBlockTextTextNode___internal___ignoreType'
  | 'block___childrenContentfulBlockTextTextNode___internal___mediaType'
  | 'block___childrenContentfulBlockTextTextNode___internal___owner'
  | 'block___childrenContentfulBlockTextTextNode___internal___type'
  | 'block___childrenContentfulBlockTextTextNode___text'
  | 'block___childrenContentfulBlockTextTextNode___sys___type'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___rawBody'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___fileAbsolutePath'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___slug'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___body'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___excerpt'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___headings'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___html'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___mdxAST'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___tableOfContents'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___timeToRead'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___id'
  | 'block___childrenContentfulBlockTextTextNode___childrenMdx___children'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___rawBody'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___fileAbsolutePath'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___slug'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___body'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___excerpt'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___headings'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___html'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___mdxAST'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___tableOfContents'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___timeToRead'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___id'
  | 'block___childrenContentfulBlockTextTextNode___childMdx___children'
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
  | 'block___childContentfulBlockTextTextNode___childrenMdx'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___rawBody'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___fileAbsolutePath'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___slug'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___body'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___excerpt'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___headings'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___html'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___mdxAST'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___tableOfContents'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___timeToRead'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___id'
  | 'block___childContentfulBlockTextTextNode___childrenMdx___children'
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
  | 'block___childContentfulBlockTextTextNode___childMdx___children';

export type ContentfulLinkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
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

export type ContentfulMedia = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  backgroundPositionMobileY?: Maybe<Scalars['String']>;
  backgroundPositionY?: Maybe<Scalars['String']>;
  mediaMobile?: Maybe<ContentfulAsset>;
  media?: Maybe<ContentfulAsset>;
  mediacollection?: Maybe<Array<Maybe<ContentfulMediaCollection>>>;
  blockimage?: Maybe<Array<Maybe<ContentfulBlockImage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMediaSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulMediaCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMediaUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMediaCollection = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  medias?: Maybe<Array<Maybe<ContentfulMedia>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMediaCollectionSys>;
  node_locale?: Maybe<Scalars['String']>;
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
  | 'medias___name'
  | 'medias___backgroundPositionMobileY'
  | 'medias___backgroundPositionY'
  | 'medias___mediaMobile___id'
  | 'medias___mediaMobile___parent___id'
  | 'medias___mediaMobile___parent___children'
  | 'medias___mediaMobile___children'
  | 'medias___mediaMobile___children___id'
  | 'medias___mediaMobile___children___children'
  | 'medias___mediaMobile___internal___content'
  | 'medias___mediaMobile___internal___contentDigest'
  | 'medias___mediaMobile___internal___description'
  | 'medias___mediaMobile___internal___fieldOwners'
  | 'medias___mediaMobile___internal___ignoreType'
  | 'medias___mediaMobile___internal___mediaType'
  | 'medias___mediaMobile___internal___owner'
  | 'medias___mediaMobile___internal___type'
  | 'medias___mediaMobile___contentful_id'
  | 'medias___mediaMobile___spaceId'
  | 'medias___mediaMobile___createdAt'
  | 'medias___mediaMobile___updatedAt'
  | 'medias___mediaMobile___file___url'
  | 'medias___mediaMobile___file___fileName'
  | 'medias___mediaMobile___file___contentType'
  | 'medias___mediaMobile___title'
  | 'medias___mediaMobile___description'
  | 'medias___mediaMobile___node_locale'
  | 'medias___mediaMobile___sys___type'
  | 'medias___mediaMobile___sys___revision'
  | 'medias___mediaMobile___localFile___sourceInstanceName'
  | 'medias___mediaMobile___localFile___absolutePath'
  | 'medias___mediaMobile___localFile___relativePath'
  | 'medias___mediaMobile___localFile___extension'
  | 'medias___mediaMobile___localFile___size'
  | 'medias___mediaMobile___localFile___prettySize'
  | 'medias___mediaMobile___localFile___modifiedTime'
  | 'medias___mediaMobile___localFile___accessTime'
  | 'medias___mediaMobile___localFile___changeTime'
  | 'medias___mediaMobile___localFile___birthTime'
  | 'medias___mediaMobile___localFile___root'
  | 'medias___mediaMobile___localFile___dir'
  | 'medias___mediaMobile___localFile___base'
  | 'medias___mediaMobile___localFile___ext'
  | 'medias___mediaMobile___localFile___name'
  | 'medias___mediaMobile___localFile___relativeDirectory'
  | 'medias___mediaMobile___localFile___dev'
  | 'medias___mediaMobile___localFile___mode'
  | 'medias___mediaMobile___localFile___nlink'
  | 'medias___mediaMobile___localFile___uid'
  | 'medias___mediaMobile___localFile___gid'
  | 'medias___mediaMobile___localFile___rdev'
  | 'medias___mediaMobile___localFile___ino'
  | 'medias___mediaMobile___localFile___atimeMs'
  | 'medias___mediaMobile___localFile___mtimeMs'
  | 'medias___mediaMobile___localFile___ctimeMs'
  | 'medias___mediaMobile___localFile___atime'
  | 'medias___mediaMobile___localFile___mtime'
  | 'medias___mediaMobile___localFile___ctime'
  | 'medias___mediaMobile___localFile___birthtime'
  | 'medias___mediaMobile___localFile___birthtimeMs'
  | 'medias___mediaMobile___localFile___blksize'
  | 'medias___mediaMobile___localFile___blocks'
  | 'medias___mediaMobile___localFile___url'
  | 'medias___mediaMobile___localFile___publicURL'
  | 'medias___mediaMobile___localFile___childrenImageSharp'
  | 'medias___mediaMobile___localFile___childrenMdx'
  | 'medias___mediaMobile___localFile___id'
  | 'medias___mediaMobile___localFile___children'
  | 'medias___mediaMobile___fixed___base64'
  | 'medias___mediaMobile___fixed___tracedSVG'
  | 'medias___mediaMobile___fixed___aspectRatio'
  | 'medias___mediaMobile___fixed___width'
  | 'medias___mediaMobile___fixed___height'
  | 'medias___mediaMobile___fixed___src'
  | 'medias___mediaMobile___fixed___srcSet'
  | 'medias___mediaMobile___fixed___srcWebp'
  | 'medias___mediaMobile___fixed___srcSetWebp'
  | 'medias___mediaMobile___resolutions___base64'
  | 'medias___mediaMobile___resolutions___tracedSVG'
  | 'medias___mediaMobile___resolutions___aspectRatio'
  | 'medias___mediaMobile___resolutions___width'
  | 'medias___mediaMobile___resolutions___height'
  | 'medias___mediaMobile___resolutions___src'
  | 'medias___mediaMobile___resolutions___srcSet'
  | 'medias___mediaMobile___resolutions___srcWebp'
  | 'medias___mediaMobile___resolutions___srcSetWebp'
  | 'medias___mediaMobile___fluid___base64'
  | 'medias___mediaMobile___fluid___tracedSVG'
  | 'medias___mediaMobile___fluid___aspectRatio'
  | 'medias___mediaMobile___fluid___src'
  | 'medias___mediaMobile___fluid___srcSet'
  | 'medias___mediaMobile___fluid___srcWebp'
  | 'medias___mediaMobile___fluid___srcSetWebp'
  | 'medias___mediaMobile___fluid___sizes'
  | 'medias___mediaMobile___sizes___base64'
  | 'medias___mediaMobile___sizes___tracedSVG'
  | 'medias___mediaMobile___sizes___aspectRatio'
  | 'medias___mediaMobile___sizes___src'
  | 'medias___mediaMobile___sizes___srcSet'
  | 'medias___mediaMobile___sizes___srcWebp'
  | 'medias___mediaMobile___sizes___srcSetWebp'
  | 'medias___mediaMobile___sizes___sizes'
  | 'medias___mediaMobile___resize___base64'
  | 'medias___mediaMobile___resize___tracedSVG'
  | 'medias___mediaMobile___resize___src'
  | 'medias___mediaMobile___resize___width'
  | 'medias___mediaMobile___resize___height'
  | 'medias___mediaMobile___resize___aspectRatio'
  | 'medias___media___id'
  | 'medias___media___parent___id'
  | 'medias___media___parent___children'
  | 'medias___media___children'
  | 'medias___media___children___id'
  | 'medias___media___children___children'
  | 'medias___media___internal___content'
  | 'medias___media___internal___contentDigest'
  | 'medias___media___internal___description'
  | 'medias___media___internal___fieldOwners'
  | 'medias___media___internal___ignoreType'
  | 'medias___media___internal___mediaType'
  | 'medias___media___internal___owner'
  | 'medias___media___internal___type'
  | 'medias___media___contentful_id'
  | 'medias___media___spaceId'
  | 'medias___media___createdAt'
  | 'medias___media___updatedAt'
  | 'medias___media___file___url'
  | 'medias___media___file___fileName'
  | 'medias___media___file___contentType'
  | 'medias___media___title'
  | 'medias___media___description'
  | 'medias___media___node_locale'
  | 'medias___media___sys___type'
  | 'medias___media___sys___revision'
  | 'medias___media___localFile___sourceInstanceName'
  | 'medias___media___localFile___absolutePath'
  | 'medias___media___localFile___relativePath'
  | 'medias___media___localFile___extension'
  | 'medias___media___localFile___size'
  | 'medias___media___localFile___prettySize'
  | 'medias___media___localFile___modifiedTime'
  | 'medias___media___localFile___accessTime'
  | 'medias___media___localFile___changeTime'
  | 'medias___media___localFile___birthTime'
  | 'medias___media___localFile___root'
  | 'medias___media___localFile___dir'
  | 'medias___media___localFile___base'
  | 'medias___media___localFile___ext'
  | 'medias___media___localFile___name'
  | 'medias___media___localFile___relativeDirectory'
  | 'medias___media___localFile___dev'
  | 'medias___media___localFile___mode'
  | 'medias___media___localFile___nlink'
  | 'medias___media___localFile___uid'
  | 'medias___media___localFile___gid'
  | 'medias___media___localFile___rdev'
  | 'medias___media___localFile___ino'
  | 'medias___media___localFile___atimeMs'
  | 'medias___media___localFile___mtimeMs'
  | 'medias___media___localFile___ctimeMs'
  | 'medias___media___localFile___atime'
  | 'medias___media___localFile___mtime'
  | 'medias___media___localFile___ctime'
  | 'medias___media___localFile___birthtime'
  | 'medias___media___localFile___birthtimeMs'
  | 'medias___media___localFile___blksize'
  | 'medias___media___localFile___blocks'
  | 'medias___media___localFile___url'
  | 'medias___media___localFile___publicURL'
  | 'medias___media___localFile___childrenImageSharp'
  | 'medias___media___localFile___childrenMdx'
  | 'medias___media___localFile___id'
  | 'medias___media___localFile___children'
  | 'medias___media___fixed___base64'
  | 'medias___media___fixed___tracedSVG'
  | 'medias___media___fixed___aspectRatio'
  | 'medias___media___fixed___width'
  | 'medias___media___fixed___height'
  | 'medias___media___fixed___src'
  | 'medias___media___fixed___srcSet'
  | 'medias___media___fixed___srcWebp'
  | 'medias___media___fixed___srcSetWebp'
  | 'medias___media___resolutions___base64'
  | 'medias___media___resolutions___tracedSVG'
  | 'medias___media___resolutions___aspectRatio'
  | 'medias___media___resolutions___width'
  | 'medias___media___resolutions___height'
  | 'medias___media___resolutions___src'
  | 'medias___media___resolutions___srcSet'
  | 'medias___media___resolutions___srcWebp'
  | 'medias___media___resolutions___srcSetWebp'
  | 'medias___media___fluid___base64'
  | 'medias___media___fluid___tracedSVG'
  | 'medias___media___fluid___aspectRatio'
  | 'medias___media___fluid___src'
  | 'medias___media___fluid___srcSet'
  | 'medias___media___fluid___srcWebp'
  | 'medias___media___fluid___srcSetWebp'
  | 'medias___media___fluid___sizes'
  | 'medias___media___sizes___base64'
  | 'medias___media___sizes___tracedSVG'
  | 'medias___media___sizes___aspectRatio'
  | 'medias___media___sizes___src'
  | 'medias___media___sizes___srcSet'
  | 'medias___media___sizes___srcWebp'
  | 'medias___media___sizes___srcSetWebp'
  | 'medias___media___sizes___sizes'
  | 'medias___media___resize___base64'
  | 'medias___media___resize___tracedSVG'
  | 'medias___media___resize___src'
  | 'medias___media___resize___width'
  | 'medias___media___resize___height'
  | 'medias___media___resize___aspectRatio'
  | 'medias___mediacollection'
  | 'medias___mediacollection___id'
  | 'medias___mediacollection___parent___id'
  | 'medias___mediacollection___parent___children'
  | 'medias___mediacollection___children'
  | 'medias___mediacollection___children___id'
  | 'medias___mediacollection___children___children'
  | 'medias___mediacollection___internal___content'
  | 'medias___mediacollection___internal___contentDigest'
  | 'medias___mediacollection___internal___description'
  | 'medias___mediacollection___internal___fieldOwners'
  | 'medias___mediacollection___internal___ignoreType'
  | 'medias___mediacollection___internal___mediaType'
  | 'medias___mediacollection___internal___owner'
  | 'medias___mediacollection___internal___type'
  | 'medias___mediacollection___name'
  | 'medias___mediacollection___medias'
  | 'medias___mediacollection___medias___id'
  | 'medias___mediacollection___medias___children'
  | 'medias___mediacollection___medias___name'
  | 'medias___mediacollection___medias___backgroundPositionMobileY'
  | 'medias___mediacollection___medias___backgroundPositionY'
  | 'medias___mediacollection___medias___mediacollection'
  | 'medias___mediacollection___medias___blockimage'
  | 'medias___mediacollection___medias___spaceId'
  | 'medias___mediacollection___medias___contentful_id'
  | 'medias___mediacollection___medias___createdAt'
  | 'medias___mediacollection___medias___updatedAt'
  | 'medias___mediacollection___medias___node_locale'
  | 'medias___mediacollection___spaceId'
  | 'medias___mediacollection___contentful_id'
  | 'medias___mediacollection___createdAt'
  | 'medias___mediacollection___updatedAt'
  | 'medias___mediacollection___sys___type'
  | 'medias___mediacollection___sys___revision'
  | 'medias___mediacollection___node_locale'
  | 'medias___blockimage'
  | 'medias___blockimage___id'
  | 'medias___blockimage___parent___id'
  | 'medias___blockimage___parent___children'
  | 'medias___blockimage___children'
  | 'medias___blockimage___children___id'
  | 'medias___blockimage___children___children'
  | 'medias___blockimage___internal___content'
  | 'medias___blockimage___internal___contentDigest'
  | 'medias___blockimage___internal___description'
  | 'medias___blockimage___internal___fieldOwners'
  | 'medias___blockimage___internal___ignoreType'
  | 'medias___blockimage___internal___mediaType'
  | 'medias___blockimage___internal___owner'
  | 'medias___blockimage___internal___type'
  | 'medias___blockimage___name'
  | 'medias___blockimage___type'
  | 'medias___blockimage___media___id'
  | 'medias___blockimage___media___children'
  | 'medias___blockimage___media___name'
  | 'medias___blockimage___media___backgroundPositionMobileY'
  | 'medias___blockimage___media___backgroundPositionY'
  | 'medias___blockimage___media___mediacollection'
  | 'medias___blockimage___media___blockimage'
  | 'medias___blockimage___media___spaceId'
  | 'medias___blockimage___media___contentful_id'
  | 'medias___blockimage___media___createdAt'
  | 'medias___blockimage___media___updatedAt'
  | 'medias___blockimage___media___node_locale'
  | 'medias___blockimage___section'
  | 'medias___blockimage___section___id'
  | 'medias___blockimage___section___children'
  | 'medias___blockimage___section___name'
  | 'medias___blockimage___section___layout'
  | 'medias___blockimage___section___page'
  | 'medias___blockimage___section___spaceId'
  | 'medias___blockimage___section___contentful_id'
  | 'medias___blockimage___section___createdAt'
  | 'medias___blockimage___section___updatedAt'
  | 'medias___blockimage___section___node_locale'
  | 'medias___blockimage___section___variant'
  | 'medias___blockimage___spaceId'
  | 'medias___blockimage___contentful_id'
  | 'medias___blockimage___createdAt'
  | 'medias___blockimage___updatedAt'
  | 'medias___blockimage___sys___type'
  | 'medias___blockimage___sys___revision'
  | 'medias___blockimage___node_locale'
  | 'medias___spaceId'
  | 'medias___contentful_id'
  | 'medias___createdAt'
  | 'medias___updatedAt'
  | 'medias___sys___type'
  | 'medias___sys___revision'
  | 'medias___node_locale'
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

export type ContentfulMediaCollectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  medias?: Maybe<ContentfulMediaFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaCollectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
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

export type ContentfulMediaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMediaEdge>;
  nodes: Array<ContentfulMedia>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMediaGroupConnection>;
};


export type ContentfulMediaConnectionDistinctArgs = {
  field: ContentfulMediaFieldsEnum;
};


export type ContentfulMediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMediaFieldsEnum;
};

export type ContentfulMediaEdge = {
  next?: Maybe<ContentfulMedia>;
  node: ContentfulMedia;
  previous?: Maybe<ContentfulMedia>;
};

export type ContentfulMediaFieldsEnum =
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
  | 'backgroundPositionMobileY'
  | 'backgroundPositionY'
  | 'mediaMobile___id'
  | 'mediaMobile___parent___id'
  | 'mediaMobile___parent___parent___id'
  | 'mediaMobile___parent___parent___children'
  | 'mediaMobile___parent___children'
  | 'mediaMobile___parent___children___id'
  | 'mediaMobile___parent___children___children'
  | 'mediaMobile___parent___internal___content'
  | 'mediaMobile___parent___internal___contentDigest'
  | 'mediaMobile___parent___internal___description'
  | 'mediaMobile___parent___internal___fieldOwners'
  | 'mediaMobile___parent___internal___ignoreType'
  | 'mediaMobile___parent___internal___mediaType'
  | 'mediaMobile___parent___internal___owner'
  | 'mediaMobile___parent___internal___type'
  | 'mediaMobile___children'
  | 'mediaMobile___children___id'
  | 'mediaMobile___children___parent___id'
  | 'mediaMobile___children___parent___children'
  | 'mediaMobile___children___children'
  | 'mediaMobile___children___children___id'
  | 'mediaMobile___children___children___children'
  | 'mediaMobile___children___internal___content'
  | 'mediaMobile___children___internal___contentDigest'
  | 'mediaMobile___children___internal___description'
  | 'mediaMobile___children___internal___fieldOwners'
  | 'mediaMobile___children___internal___ignoreType'
  | 'mediaMobile___children___internal___mediaType'
  | 'mediaMobile___children___internal___owner'
  | 'mediaMobile___children___internal___type'
  | 'mediaMobile___internal___content'
  | 'mediaMobile___internal___contentDigest'
  | 'mediaMobile___internal___description'
  | 'mediaMobile___internal___fieldOwners'
  | 'mediaMobile___internal___ignoreType'
  | 'mediaMobile___internal___mediaType'
  | 'mediaMobile___internal___owner'
  | 'mediaMobile___internal___type'
  | 'mediaMobile___contentful_id'
  | 'mediaMobile___spaceId'
  | 'mediaMobile___createdAt'
  | 'mediaMobile___updatedAt'
  | 'mediaMobile___file___url'
  | 'mediaMobile___file___details___size'
  | 'mediaMobile___file___fileName'
  | 'mediaMobile___file___contentType'
  | 'mediaMobile___title'
  | 'mediaMobile___description'
  | 'mediaMobile___node_locale'
  | 'mediaMobile___sys___type'
  | 'mediaMobile___sys___revision'
  | 'mediaMobile___localFile___sourceInstanceName'
  | 'mediaMobile___localFile___absolutePath'
  | 'mediaMobile___localFile___relativePath'
  | 'mediaMobile___localFile___extension'
  | 'mediaMobile___localFile___size'
  | 'mediaMobile___localFile___prettySize'
  | 'mediaMobile___localFile___modifiedTime'
  | 'mediaMobile___localFile___accessTime'
  | 'mediaMobile___localFile___changeTime'
  | 'mediaMobile___localFile___birthTime'
  | 'mediaMobile___localFile___root'
  | 'mediaMobile___localFile___dir'
  | 'mediaMobile___localFile___base'
  | 'mediaMobile___localFile___ext'
  | 'mediaMobile___localFile___name'
  | 'mediaMobile___localFile___relativeDirectory'
  | 'mediaMobile___localFile___dev'
  | 'mediaMobile___localFile___mode'
  | 'mediaMobile___localFile___nlink'
  | 'mediaMobile___localFile___uid'
  | 'mediaMobile___localFile___gid'
  | 'mediaMobile___localFile___rdev'
  | 'mediaMobile___localFile___ino'
  | 'mediaMobile___localFile___atimeMs'
  | 'mediaMobile___localFile___mtimeMs'
  | 'mediaMobile___localFile___ctimeMs'
  | 'mediaMobile___localFile___atime'
  | 'mediaMobile___localFile___mtime'
  | 'mediaMobile___localFile___ctime'
  | 'mediaMobile___localFile___birthtime'
  | 'mediaMobile___localFile___birthtimeMs'
  | 'mediaMobile___localFile___blksize'
  | 'mediaMobile___localFile___blocks'
  | 'mediaMobile___localFile___url'
  | 'mediaMobile___localFile___publicURL'
  | 'mediaMobile___localFile___childrenImageSharp'
  | 'mediaMobile___localFile___childrenImageSharp___gatsbyImageData'
  | 'mediaMobile___localFile___childrenImageSharp___id'
  | 'mediaMobile___localFile___childrenImageSharp___children'
  | 'mediaMobile___localFile___childImageSharp___gatsbyImageData'
  | 'mediaMobile___localFile___childImageSharp___id'
  | 'mediaMobile___localFile___childImageSharp___children'
  | 'mediaMobile___localFile___childrenMdx'
  | 'mediaMobile___localFile___childrenMdx___rawBody'
  | 'mediaMobile___localFile___childrenMdx___fileAbsolutePath'
  | 'mediaMobile___localFile___childrenMdx___slug'
  | 'mediaMobile___localFile___childrenMdx___body'
  | 'mediaMobile___localFile___childrenMdx___excerpt'
  | 'mediaMobile___localFile___childrenMdx___headings'
  | 'mediaMobile___localFile___childrenMdx___html'
  | 'mediaMobile___localFile___childrenMdx___mdxAST'
  | 'mediaMobile___localFile___childrenMdx___tableOfContents'
  | 'mediaMobile___localFile___childrenMdx___timeToRead'
  | 'mediaMobile___localFile___childrenMdx___id'
  | 'mediaMobile___localFile___childrenMdx___children'
  | 'mediaMobile___localFile___childMdx___rawBody'
  | 'mediaMobile___localFile___childMdx___fileAbsolutePath'
  | 'mediaMobile___localFile___childMdx___slug'
  | 'mediaMobile___localFile___childMdx___body'
  | 'mediaMobile___localFile___childMdx___excerpt'
  | 'mediaMobile___localFile___childMdx___headings'
  | 'mediaMobile___localFile___childMdx___html'
  | 'mediaMobile___localFile___childMdx___mdxAST'
  | 'mediaMobile___localFile___childMdx___tableOfContents'
  | 'mediaMobile___localFile___childMdx___timeToRead'
  | 'mediaMobile___localFile___childMdx___id'
  | 'mediaMobile___localFile___childMdx___children'
  | 'mediaMobile___localFile___id'
  | 'mediaMobile___localFile___parent___id'
  | 'mediaMobile___localFile___parent___children'
  | 'mediaMobile___localFile___children'
  | 'mediaMobile___localFile___children___id'
  | 'mediaMobile___localFile___children___children'
  | 'mediaMobile___localFile___internal___content'
  | 'mediaMobile___localFile___internal___contentDigest'
  | 'mediaMobile___localFile___internal___description'
  | 'mediaMobile___localFile___internal___fieldOwners'
  | 'mediaMobile___localFile___internal___ignoreType'
  | 'mediaMobile___localFile___internal___mediaType'
  | 'mediaMobile___localFile___internal___owner'
  | 'mediaMobile___localFile___internal___type'
  | 'mediaMobile___fixed___base64'
  | 'mediaMobile___fixed___tracedSVG'
  | 'mediaMobile___fixed___aspectRatio'
  | 'mediaMobile___fixed___width'
  | 'mediaMobile___fixed___height'
  | 'mediaMobile___fixed___src'
  | 'mediaMobile___fixed___srcSet'
  | 'mediaMobile___fixed___srcWebp'
  | 'mediaMobile___fixed___srcSetWebp'
  | 'mediaMobile___resolutions___base64'
  | 'mediaMobile___resolutions___tracedSVG'
  | 'mediaMobile___resolutions___aspectRatio'
  | 'mediaMobile___resolutions___width'
  | 'mediaMobile___resolutions___height'
  | 'mediaMobile___resolutions___src'
  | 'mediaMobile___resolutions___srcSet'
  | 'mediaMobile___resolutions___srcWebp'
  | 'mediaMobile___resolutions___srcSetWebp'
  | 'mediaMobile___fluid___base64'
  | 'mediaMobile___fluid___tracedSVG'
  | 'mediaMobile___fluid___aspectRatio'
  | 'mediaMobile___fluid___src'
  | 'mediaMobile___fluid___srcSet'
  | 'mediaMobile___fluid___srcWebp'
  | 'mediaMobile___fluid___srcSetWebp'
  | 'mediaMobile___fluid___sizes'
  | 'mediaMobile___sizes___base64'
  | 'mediaMobile___sizes___tracedSVG'
  | 'mediaMobile___sizes___aspectRatio'
  | 'mediaMobile___sizes___src'
  | 'mediaMobile___sizes___srcSet'
  | 'mediaMobile___sizes___srcWebp'
  | 'mediaMobile___sizes___srcSetWebp'
  | 'mediaMobile___sizes___sizes'
  | 'mediaMobile___resize___base64'
  | 'mediaMobile___resize___tracedSVG'
  | 'mediaMobile___resize___src'
  | 'mediaMobile___resize___width'
  | 'mediaMobile___resize___height'
  | 'mediaMobile___resize___aspectRatio'
  | 'media___id'
  | 'media___parent___id'
  | 'media___parent___parent___id'
  | 'media___parent___parent___children'
  | 'media___parent___children'
  | 'media___parent___children___id'
  | 'media___parent___children___children'
  | 'media___parent___internal___content'
  | 'media___parent___internal___contentDigest'
  | 'media___parent___internal___description'
  | 'media___parent___internal___fieldOwners'
  | 'media___parent___internal___ignoreType'
  | 'media___parent___internal___mediaType'
  | 'media___parent___internal___owner'
  | 'media___parent___internal___type'
  | 'media___children'
  | 'media___children___id'
  | 'media___children___parent___id'
  | 'media___children___parent___children'
  | 'media___children___children'
  | 'media___children___children___id'
  | 'media___children___children___children'
  | 'media___children___internal___content'
  | 'media___children___internal___contentDigest'
  | 'media___children___internal___description'
  | 'media___children___internal___fieldOwners'
  | 'media___children___internal___ignoreType'
  | 'media___children___internal___mediaType'
  | 'media___children___internal___owner'
  | 'media___children___internal___type'
  | 'media___internal___content'
  | 'media___internal___contentDigest'
  | 'media___internal___description'
  | 'media___internal___fieldOwners'
  | 'media___internal___ignoreType'
  | 'media___internal___mediaType'
  | 'media___internal___owner'
  | 'media___internal___type'
  | 'media___contentful_id'
  | 'media___spaceId'
  | 'media___createdAt'
  | 'media___updatedAt'
  | 'media___file___url'
  | 'media___file___details___size'
  | 'media___file___fileName'
  | 'media___file___contentType'
  | 'media___title'
  | 'media___description'
  | 'media___node_locale'
  | 'media___sys___type'
  | 'media___sys___revision'
  | 'media___localFile___sourceInstanceName'
  | 'media___localFile___absolutePath'
  | 'media___localFile___relativePath'
  | 'media___localFile___extension'
  | 'media___localFile___size'
  | 'media___localFile___prettySize'
  | 'media___localFile___modifiedTime'
  | 'media___localFile___accessTime'
  | 'media___localFile___changeTime'
  | 'media___localFile___birthTime'
  | 'media___localFile___root'
  | 'media___localFile___dir'
  | 'media___localFile___base'
  | 'media___localFile___ext'
  | 'media___localFile___name'
  | 'media___localFile___relativeDirectory'
  | 'media___localFile___dev'
  | 'media___localFile___mode'
  | 'media___localFile___nlink'
  | 'media___localFile___uid'
  | 'media___localFile___gid'
  | 'media___localFile___rdev'
  | 'media___localFile___ino'
  | 'media___localFile___atimeMs'
  | 'media___localFile___mtimeMs'
  | 'media___localFile___ctimeMs'
  | 'media___localFile___atime'
  | 'media___localFile___mtime'
  | 'media___localFile___ctime'
  | 'media___localFile___birthtime'
  | 'media___localFile___birthtimeMs'
  | 'media___localFile___blksize'
  | 'media___localFile___blocks'
  | 'media___localFile___url'
  | 'media___localFile___publicURL'
  | 'media___localFile___childrenImageSharp'
  | 'media___localFile___childrenImageSharp___gatsbyImageData'
  | 'media___localFile___childrenImageSharp___id'
  | 'media___localFile___childrenImageSharp___children'
  | 'media___localFile___childImageSharp___gatsbyImageData'
  | 'media___localFile___childImageSharp___id'
  | 'media___localFile___childImageSharp___children'
  | 'media___localFile___childrenMdx'
  | 'media___localFile___childrenMdx___rawBody'
  | 'media___localFile___childrenMdx___fileAbsolutePath'
  | 'media___localFile___childrenMdx___slug'
  | 'media___localFile___childrenMdx___body'
  | 'media___localFile___childrenMdx___excerpt'
  | 'media___localFile___childrenMdx___headings'
  | 'media___localFile___childrenMdx___html'
  | 'media___localFile___childrenMdx___mdxAST'
  | 'media___localFile___childrenMdx___tableOfContents'
  | 'media___localFile___childrenMdx___timeToRead'
  | 'media___localFile___childrenMdx___id'
  | 'media___localFile___childrenMdx___children'
  | 'media___localFile___childMdx___rawBody'
  | 'media___localFile___childMdx___fileAbsolutePath'
  | 'media___localFile___childMdx___slug'
  | 'media___localFile___childMdx___body'
  | 'media___localFile___childMdx___excerpt'
  | 'media___localFile___childMdx___headings'
  | 'media___localFile___childMdx___html'
  | 'media___localFile___childMdx___mdxAST'
  | 'media___localFile___childMdx___tableOfContents'
  | 'media___localFile___childMdx___timeToRead'
  | 'media___localFile___childMdx___id'
  | 'media___localFile___childMdx___children'
  | 'media___localFile___id'
  | 'media___localFile___parent___id'
  | 'media___localFile___parent___children'
  | 'media___localFile___children'
  | 'media___localFile___children___id'
  | 'media___localFile___children___children'
  | 'media___localFile___internal___content'
  | 'media___localFile___internal___contentDigest'
  | 'media___localFile___internal___description'
  | 'media___localFile___internal___fieldOwners'
  | 'media___localFile___internal___ignoreType'
  | 'media___localFile___internal___mediaType'
  | 'media___localFile___internal___owner'
  | 'media___localFile___internal___type'
  | 'media___fixed___base64'
  | 'media___fixed___tracedSVG'
  | 'media___fixed___aspectRatio'
  | 'media___fixed___width'
  | 'media___fixed___height'
  | 'media___fixed___src'
  | 'media___fixed___srcSet'
  | 'media___fixed___srcWebp'
  | 'media___fixed___srcSetWebp'
  | 'media___resolutions___base64'
  | 'media___resolutions___tracedSVG'
  | 'media___resolutions___aspectRatio'
  | 'media___resolutions___width'
  | 'media___resolutions___height'
  | 'media___resolutions___src'
  | 'media___resolutions___srcSet'
  | 'media___resolutions___srcWebp'
  | 'media___resolutions___srcSetWebp'
  | 'media___fluid___base64'
  | 'media___fluid___tracedSVG'
  | 'media___fluid___aspectRatio'
  | 'media___fluid___src'
  | 'media___fluid___srcSet'
  | 'media___fluid___srcWebp'
  | 'media___fluid___srcSetWebp'
  | 'media___fluid___sizes'
  | 'media___sizes___base64'
  | 'media___sizes___tracedSVG'
  | 'media___sizes___aspectRatio'
  | 'media___sizes___src'
  | 'media___sizes___srcSet'
  | 'media___sizes___srcWebp'
  | 'media___sizes___srcSetWebp'
  | 'media___sizes___sizes'
  | 'media___resize___base64'
  | 'media___resize___tracedSVG'
  | 'media___resize___src'
  | 'media___resize___width'
  | 'media___resize___height'
  | 'media___resize___aspectRatio'
  | 'mediacollection'
  | 'mediacollection___id'
  | 'mediacollection___parent___id'
  | 'mediacollection___parent___parent___id'
  | 'mediacollection___parent___parent___children'
  | 'mediacollection___parent___children'
  | 'mediacollection___parent___children___id'
  | 'mediacollection___parent___children___children'
  | 'mediacollection___parent___internal___content'
  | 'mediacollection___parent___internal___contentDigest'
  | 'mediacollection___parent___internal___description'
  | 'mediacollection___parent___internal___fieldOwners'
  | 'mediacollection___parent___internal___ignoreType'
  | 'mediacollection___parent___internal___mediaType'
  | 'mediacollection___parent___internal___owner'
  | 'mediacollection___parent___internal___type'
  | 'mediacollection___children'
  | 'mediacollection___children___id'
  | 'mediacollection___children___parent___id'
  | 'mediacollection___children___parent___children'
  | 'mediacollection___children___children'
  | 'mediacollection___children___children___id'
  | 'mediacollection___children___children___children'
  | 'mediacollection___children___internal___content'
  | 'mediacollection___children___internal___contentDigest'
  | 'mediacollection___children___internal___description'
  | 'mediacollection___children___internal___fieldOwners'
  | 'mediacollection___children___internal___ignoreType'
  | 'mediacollection___children___internal___mediaType'
  | 'mediacollection___children___internal___owner'
  | 'mediacollection___children___internal___type'
  | 'mediacollection___internal___content'
  | 'mediacollection___internal___contentDigest'
  | 'mediacollection___internal___description'
  | 'mediacollection___internal___fieldOwners'
  | 'mediacollection___internal___ignoreType'
  | 'mediacollection___internal___mediaType'
  | 'mediacollection___internal___owner'
  | 'mediacollection___internal___type'
  | 'mediacollection___name'
  | 'mediacollection___medias'
  | 'mediacollection___medias___id'
  | 'mediacollection___medias___parent___id'
  | 'mediacollection___medias___parent___children'
  | 'mediacollection___medias___children'
  | 'mediacollection___medias___children___id'
  | 'mediacollection___medias___children___children'
  | 'mediacollection___medias___internal___content'
  | 'mediacollection___medias___internal___contentDigest'
  | 'mediacollection___medias___internal___description'
  | 'mediacollection___medias___internal___fieldOwners'
  | 'mediacollection___medias___internal___ignoreType'
  | 'mediacollection___medias___internal___mediaType'
  | 'mediacollection___medias___internal___owner'
  | 'mediacollection___medias___internal___type'
  | 'mediacollection___medias___name'
  | 'mediacollection___medias___backgroundPositionMobileY'
  | 'mediacollection___medias___backgroundPositionY'
  | 'mediacollection___medias___mediaMobile___id'
  | 'mediacollection___medias___mediaMobile___children'
  | 'mediacollection___medias___mediaMobile___contentful_id'
  | 'mediacollection___medias___mediaMobile___spaceId'
  | 'mediacollection___medias___mediaMobile___createdAt'
  | 'mediacollection___medias___mediaMobile___updatedAt'
  | 'mediacollection___medias___mediaMobile___title'
  | 'mediacollection___medias___mediaMobile___description'
  | 'mediacollection___medias___mediaMobile___node_locale'
  | 'mediacollection___medias___media___id'
  | 'mediacollection___medias___media___children'
  | 'mediacollection___medias___media___contentful_id'
  | 'mediacollection___medias___media___spaceId'
  | 'mediacollection___medias___media___createdAt'
  | 'mediacollection___medias___media___updatedAt'
  | 'mediacollection___medias___media___title'
  | 'mediacollection___medias___media___description'
  | 'mediacollection___medias___media___node_locale'
  | 'mediacollection___medias___mediacollection'
  | 'mediacollection___medias___mediacollection___id'
  | 'mediacollection___medias___mediacollection___children'
  | 'mediacollection___medias___mediacollection___name'
  | 'mediacollection___medias___mediacollection___medias'
  | 'mediacollection___medias___mediacollection___spaceId'
  | 'mediacollection___medias___mediacollection___contentful_id'
  | 'mediacollection___medias___mediacollection___createdAt'
  | 'mediacollection___medias___mediacollection___updatedAt'
  | 'mediacollection___medias___mediacollection___node_locale'
  | 'mediacollection___medias___blockimage'
  | 'mediacollection___medias___blockimage___id'
  | 'mediacollection___medias___blockimage___children'
  | 'mediacollection___medias___blockimage___name'
  | 'mediacollection___medias___blockimage___type'
  | 'mediacollection___medias___blockimage___section'
  | 'mediacollection___medias___blockimage___spaceId'
  | 'mediacollection___medias___blockimage___contentful_id'
  | 'mediacollection___medias___blockimage___createdAt'
  | 'mediacollection___medias___blockimage___updatedAt'
  | 'mediacollection___medias___blockimage___node_locale'
  | 'mediacollection___medias___spaceId'
  | 'mediacollection___medias___contentful_id'
  | 'mediacollection___medias___createdAt'
  | 'mediacollection___medias___updatedAt'
  | 'mediacollection___medias___sys___type'
  | 'mediacollection___medias___sys___revision'
  | 'mediacollection___medias___node_locale'
  | 'mediacollection___spaceId'
  | 'mediacollection___contentful_id'
  | 'mediacollection___createdAt'
  | 'mediacollection___updatedAt'
  | 'mediacollection___sys___type'
  | 'mediacollection___sys___revision'
  | 'mediacollection___node_locale'
  | 'blockimage'
  | 'blockimage___id'
  | 'blockimage___parent___id'
  | 'blockimage___parent___parent___id'
  | 'blockimage___parent___parent___children'
  | 'blockimage___parent___children'
  | 'blockimage___parent___children___id'
  | 'blockimage___parent___children___children'
  | 'blockimage___parent___internal___content'
  | 'blockimage___parent___internal___contentDigest'
  | 'blockimage___parent___internal___description'
  | 'blockimage___parent___internal___fieldOwners'
  | 'blockimage___parent___internal___ignoreType'
  | 'blockimage___parent___internal___mediaType'
  | 'blockimage___parent___internal___owner'
  | 'blockimage___parent___internal___type'
  | 'blockimage___children'
  | 'blockimage___children___id'
  | 'blockimage___children___parent___id'
  | 'blockimage___children___parent___children'
  | 'blockimage___children___children'
  | 'blockimage___children___children___id'
  | 'blockimage___children___children___children'
  | 'blockimage___children___internal___content'
  | 'blockimage___children___internal___contentDigest'
  | 'blockimage___children___internal___description'
  | 'blockimage___children___internal___fieldOwners'
  | 'blockimage___children___internal___ignoreType'
  | 'blockimage___children___internal___mediaType'
  | 'blockimage___children___internal___owner'
  | 'blockimage___children___internal___type'
  | 'blockimage___internal___content'
  | 'blockimage___internal___contentDigest'
  | 'blockimage___internal___description'
  | 'blockimage___internal___fieldOwners'
  | 'blockimage___internal___ignoreType'
  | 'blockimage___internal___mediaType'
  | 'blockimage___internal___owner'
  | 'blockimage___internal___type'
  | 'blockimage___name'
  | 'blockimage___type'
  | 'blockimage___media___id'
  | 'blockimage___media___parent___id'
  | 'blockimage___media___parent___children'
  | 'blockimage___media___children'
  | 'blockimage___media___children___id'
  | 'blockimage___media___children___children'
  | 'blockimage___media___internal___content'
  | 'blockimage___media___internal___contentDigest'
  | 'blockimage___media___internal___description'
  | 'blockimage___media___internal___fieldOwners'
  | 'blockimage___media___internal___ignoreType'
  | 'blockimage___media___internal___mediaType'
  | 'blockimage___media___internal___owner'
  | 'blockimage___media___internal___type'
  | 'blockimage___media___name'
  | 'blockimage___media___backgroundPositionMobileY'
  | 'blockimage___media___backgroundPositionY'
  | 'blockimage___media___mediaMobile___id'
  | 'blockimage___media___mediaMobile___children'
  | 'blockimage___media___mediaMobile___contentful_id'
  | 'blockimage___media___mediaMobile___spaceId'
  | 'blockimage___media___mediaMobile___createdAt'
  | 'blockimage___media___mediaMobile___updatedAt'
  | 'blockimage___media___mediaMobile___title'
  | 'blockimage___media___mediaMobile___description'
  | 'blockimage___media___mediaMobile___node_locale'
  | 'blockimage___media___media___id'
  | 'blockimage___media___media___children'
  | 'blockimage___media___media___contentful_id'
  | 'blockimage___media___media___spaceId'
  | 'blockimage___media___media___createdAt'
  | 'blockimage___media___media___updatedAt'
  | 'blockimage___media___media___title'
  | 'blockimage___media___media___description'
  | 'blockimage___media___media___node_locale'
  | 'blockimage___media___mediacollection'
  | 'blockimage___media___mediacollection___id'
  | 'blockimage___media___mediacollection___children'
  | 'blockimage___media___mediacollection___name'
  | 'blockimage___media___mediacollection___medias'
  | 'blockimage___media___mediacollection___spaceId'
  | 'blockimage___media___mediacollection___contentful_id'
  | 'blockimage___media___mediacollection___createdAt'
  | 'blockimage___media___mediacollection___updatedAt'
  | 'blockimage___media___mediacollection___node_locale'
  | 'blockimage___media___blockimage'
  | 'blockimage___media___blockimage___id'
  | 'blockimage___media___blockimage___children'
  | 'blockimage___media___blockimage___name'
  | 'blockimage___media___blockimage___type'
  | 'blockimage___media___blockimage___section'
  | 'blockimage___media___blockimage___spaceId'
  | 'blockimage___media___blockimage___contentful_id'
  | 'blockimage___media___blockimage___createdAt'
  | 'blockimage___media___blockimage___updatedAt'
  | 'blockimage___media___blockimage___node_locale'
  | 'blockimage___media___spaceId'
  | 'blockimage___media___contentful_id'
  | 'blockimage___media___createdAt'
  | 'blockimage___media___updatedAt'
  | 'blockimage___media___sys___type'
  | 'blockimage___media___sys___revision'
  | 'blockimage___media___node_locale'
  | 'blockimage___section'
  | 'blockimage___section___id'
  | 'blockimage___section___parent___id'
  | 'blockimage___section___parent___children'
  | 'blockimage___section___children'
  | 'blockimage___section___children___id'
  | 'blockimage___section___children___children'
  | 'blockimage___section___internal___content'
  | 'blockimage___section___internal___contentDigest'
  | 'blockimage___section___internal___description'
  | 'blockimage___section___internal___fieldOwners'
  | 'blockimage___section___internal___ignoreType'
  | 'blockimage___section___internal___mediaType'
  | 'blockimage___section___internal___owner'
  | 'blockimage___section___internal___type'
  | 'blockimage___section___name'
  | 'blockimage___section___layout'
  | 'blockimage___section___page'
  | 'blockimage___section___page___id'
  | 'blockimage___section___page___children'
  | 'blockimage___section___page___name'
  | 'blockimage___section___page___title'
  | 'blockimage___section___page___slug'
  | 'blockimage___section___page___sections'
  | 'blockimage___section___page___spaceId'
  | 'blockimage___section___page___contentful_id'
  | 'blockimage___section___page___createdAt'
  | 'blockimage___section___page___updatedAt'
  | 'blockimage___section___page___node_locale'
  | 'blockimage___section___page___link'
  | 'blockimage___section___page___childrenContentfulPageDescriptionTextNode'
  | 'blockimage___section___spaceId'
  | 'blockimage___section___contentful_id'
  | 'blockimage___section___createdAt'
  | 'blockimage___section___updatedAt'
  | 'blockimage___section___sys___type'
  | 'blockimage___section___sys___revision'
  | 'blockimage___section___node_locale'
  | 'blockimage___section___variant'
  | 'blockimage___spaceId'
  | 'blockimage___contentful_id'
  | 'blockimage___createdAt'
  | 'blockimage___updatedAt'
  | 'blockimage___sys___type'
  | 'blockimage___sys___revision'
  | 'blockimage___node_locale'
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

export type ContentfulMediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  backgroundPositionMobileY?: Maybe<StringQueryOperatorInput>;
  backgroundPositionY?: Maybe<StringQueryOperatorInput>;
  mediaMobile?: Maybe<ContentfulAssetFilterInput>;
  media?: Maybe<ContentfulAssetFilterInput>;
  mediacollection?: Maybe<ContentfulMediaCollectionFilterListInput>;
  blockimage?: Maybe<ContentfulBlockImageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMediaFilterListInput = {
  elemMatch?: Maybe<ContentfulMediaFilterInput>;
};

export type ContentfulMediaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMediaEdge>;
  nodes: Array<ContentfulMedia>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMediaSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMediaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMediaSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMediaSysContentType>;
};

export type ContentfulMediaSysContentType = {
  sys?: Maybe<ContentfulMediaSysContentTypeSys>;
};

export type ContentfulMediaSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMediaSysContentTypeSysFilterInput>;
};

export type ContentfulMediaSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMediaSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMediaSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMediaSysContentTypeFilterInput>;
};

export type ContentfulNavbar = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  navigation?: Maybe<ContentfulNavigation>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNavbarSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavbarCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavbarUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNavbarConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavbarEdge>;
  nodes: Array<ContentfulNavbar>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNavbarGroupConnection>;
};


export type ContentfulNavbarConnectionDistinctArgs = {
  field: ContentfulNavbarFieldsEnum;
};


export type ContentfulNavbarConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNavbarFieldsEnum;
};

export type ContentfulNavbarEdge = {
  next?: Maybe<ContentfulNavbar>;
  node: ContentfulNavbar;
  previous?: Maybe<ContentfulNavbar>;
};

export type ContentfulNavbarFieldsEnum =
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
  | 'navigation___component'
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
  | 'navigation___links___name'
  | 'navigation___links___label'
  | 'navigation___links___component'
  | 'navigation___links___type'
  | 'navigation___links___page___id'
  | 'navigation___links___page___children'
  | 'navigation___links___page___name'
  | 'navigation___links___page___title'
  | 'navigation___links___page___slug'
  | 'navigation___links___page___sections'
  | 'navigation___links___page___spaceId'
  | 'navigation___links___page___contentful_id'
  | 'navigation___links___page___createdAt'
  | 'navigation___links___page___updatedAt'
  | 'navigation___links___page___node_locale'
  | 'navigation___links___page___link'
  | 'navigation___links___page___childrenContentfulPageDescriptionTextNode'
  | 'navigation___links___spaceId'
  | 'navigation___links___contentful_id'
  | 'navigation___links___createdAt'
  | 'navigation___links___updatedAt'
  | 'navigation___links___sys___type'
  | 'navigation___links___sys___revision'
  | 'navigation___links___node_locale'
  | 'navigation___links___navigation'
  | 'navigation___links___navigation___id'
  | 'navigation___links___navigation___children'
  | 'navigation___links___navigation___name'
  | 'navigation___links___navigation___component'
  | 'navigation___links___navigation___links'
  | 'navigation___links___navigation___navigation'
  | 'navigation___links___navigation___spaceId'
  | 'navigation___links___navigation___contentful_id'
  | 'navigation___links___navigation___createdAt'
  | 'navigation___links___navigation___updatedAt'
  | 'navigation___links___navigation___node_locale'
  | 'navigation___links___navigation___subNavigation'
  | 'navigation___links___navigation___footer'
  | 'navigation___links___navigation___navbar'
  | 'navigation___links___variant'
  | 'navigation___links___icon'
  | 'navigation___links___block'
  | 'navigation___links___block___id'
  | 'navigation___links___block___children'
  | 'navigation___links___block___name'
  | 'navigation___links___block___type'
  | 'navigation___links___block___alignment'
  | 'navigation___links___block___section'
  | 'navigation___links___block___spaceId'
  | 'navigation___links___block___contentful_id'
  | 'navigation___links___block___createdAt'
  | 'navigation___links___block___updatedAt'
  | 'navigation___links___block___node_locale'
  | 'navigation___links___block___variant'
  | 'navigation___links___block___childrenContentfulBlockTextTextNode'
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
  | 'navigation___navigation___component'
  | 'navigation___navigation___links'
  | 'navigation___navigation___links___id'
  | 'navigation___navigation___links___children'
  | 'navigation___navigation___links___name'
  | 'navigation___navigation___links___label'
  | 'navigation___navigation___links___component'
  | 'navigation___navigation___links___type'
  | 'navigation___navigation___links___spaceId'
  | 'navigation___navigation___links___contentful_id'
  | 'navigation___navigation___links___createdAt'
  | 'navigation___navigation___links___updatedAt'
  | 'navigation___navigation___links___node_locale'
  | 'navigation___navigation___links___navigation'
  | 'navigation___navigation___links___variant'
  | 'navigation___navigation___links___icon'
  | 'navigation___navigation___links___block'
  | 'navigation___navigation___navigation'
  | 'navigation___navigation___navigation___id'
  | 'navigation___navigation___navigation___children'
  | 'navigation___navigation___navigation___name'
  | 'navigation___navigation___navigation___component'
  | 'navigation___navigation___navigation___links'
  | 'navigation___navigation___navigation___navigation'
  | 'navigation___navigation___navigation___spaceId'
  | 'navigation___navigation___navigation___contentful_id'
  | 'navigation___navigation___navigation___createdAt'
  | 'navigation___navigation___navigation___updatedAt'
  | 'navigation___navigation___navigation___node_locale'
  | 'navigation___navigation___navigation___subNavigation'
  | 'navigation___navigation___navigation___footer'
  | 'navigation___navigation___navigation___navbar'
  | 'navigation___navigation___spaceId'
  | 'navigation___navigation___contentful_id'
  | 'navigation___navigation___createdAt'
  | 'navigation___navigation___updatedAt'
  | 'navigation___navigation___sys___type'
  | 'navigation___navigation___sys___revision'
  | 'navigation___navigation___node_locale'
  | 'navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation___id'
  | 'navigation___navigation___subNavigation___children'
  | 'navigation___navigation___subNavigation___name'
  | 'navigation___navigation___subNavigation___component'
  | 'navigation___navigation___subNavigation___links'
  | 'navigation___navigation___subNavigation___navigation'
  | 'navigation___navigation___subNavigation___spaceId'
  | 'navigation___navigation___subNavigation___contentful_id'
  | 'navigation___navigation___subNavigation___createdAt'
  | 'navigation___navigation___subNavigation___updatedAt'
  | 'navigation___navigation___subNavigation___node_locale'
  | 'navigation___navigation___subNavigation___subNavigation'
  | 'navigation___navigation___subNavigation___footer'
  | 'navigation___navigation___subNavigation___navbar'
  | 'navigation___navigation___footer'
  | 'navigation___navigation___footer___id'
  | 'navigation___navigation___footer___children'
  | 'navigation___navigation___footer___name'
  | 'navigation___navigation___footer___layout'
  | 'navigation___navigation___footer___spaceId'
  | 'navigation___navigation___footer___contentful_id'
  | 'navigation___navigation___footer___createdAt'
  | 'navigation___navigation___footer___updatedAt'
  | 'navigation___navigation___footer___node_locale'
  | 'navigation___navigation___navbar'
  | 'navigation___navigation___navbar___id'
  | 'navigation___navigation___navbar___children'
  | 'navigation___navigation___navbar___name'
  | 'navigation___navigation___navbar___layout'
  | 'navigation___navigation___navbar___spaceId'
  | 'navigation___navigation___navbar___contentful_id'
  | 'navigation___navigation___navbar___createdAt'
  | 'navigation___navigation___navbar___updatedAt'
  | 'navigation___navigation___navbar___node_locale'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___type'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
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
  | 'navigation___subNavigation___component'
  | 'navigation___subNavigation___links'
  | 'navigation___subNavigation___links___id'
  | 'navigation___subNavigation___links___children'
  | 'navigation___subNavigation___links___name'
  | 'navigation___subNavigation___links___label'
  | 'navigation___subNavigation___links___component'
  | 'navigation___subNavigation___links___type'
  | 'navigation___subNavigation___links___spaceId'
  | 'navigation___subNavigation___links___contentful_id'
  | 'navigation___subNavigation___links___createdAt'
  | 'navigation___subNavigation___links___updatedAt'
  | 'navigation___subNavigation___links___node_locale'
  | 'navigation___subNavigation___links___navigation'
  | 'navigation___subNavigation___links___variant'
  | 'navigation___subNavigation___links___icon'
  | 'navigation___subNavigation___links___block'
  | 'navigation___subNavigation___navigation'
  | 'navigation___subNavigation___navigation___id'
  | 'navigation___subNavigation___navigation___children'
  | 'navigation___subNavigation___navigation___name'
  | 'navigation___subNavigation___navigation___component'
  | 'navigation___subNavigation___navigation___links'
  | 'navigation___subNavigation___navigation___navigation'
  | 'navigation___subNavigation___navigation___spaceId'
  | 'navigation___subNavigation___navigation___contentful_id'
  | 'navigation___subNavigation___navigation___createdAt'
  | 'navigation___subNavigation___navigation___updatedAt'
  | 'navigation___subNavigation___navigation___node_locale'
  | 'navigation___subNavigation___navigation___subNavigation'
  | 'navigation___subNavigation___navigation___footer'
  | 'navigation___subNavigation___navigation___navbar'
  | 'navigation___subNavigation___spaceId'
  | 'navigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___createdAt'
  | 'navigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___sys___type'
  | 'navigation___subNavigation___sys___revision'
  | 'navigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___id'
  | 'navigation___subNavigation___subNavigation___children'
  | 'navigation___subNavigation___subNavigation___name'
  | 'navigation___subNavigation___subNavigation___component'
  | 'navigation___subNavigation___subNavigation___links'
  | 'navigation___subNavigation___subNavigation___navigation'
  | 'navigation___subNavigation___subNavigation___spaceId'
  | 'navigation___subNavigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___subNavigation___createdAt'
  | 'navigation___subNavigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___footer'
  | 'navigation___subNavigation___subNavigation___navbar'
  | 'navigation___subNavigation___footer'
  | 'navigation___subNavigation___footer___id'
  | 'navigation___subNavigation___footer___children'
  | 'navigation___subNavigation___footer___name'
  | 'navigation___subNavigation___footer___layout'
  | 'navigation___subNavigation___footer___spaceId'
  | 'navigation___subNavigation___footer___contentful_id'
  | 'navigation___subNavigation___footer___createdAt'
  | 'navigation___subNavigation___footer___updatedAt'
  | 'navigation___subNavigation___footer___node_locale'
  | 'navigation___subNavigation___navbar'
  | 'navigation___subNavigation___navbar___id'
  | 'navigation___subNavigation___navbar___children'
  | 'navigation___subNavigation___navbar___name'
  | 'navigation___subNavigation___navbar___layout'
  | 'navigation___subNavigation___navbar___spaceId'
  | 'navigation___subNavigation___navbar___contentful_id'
  | 'navigation___subNavigation___navbar___createdAt'
  | 'navigation___subNavigation___navbar___updatedAt'
  | 'navigation___subNavigation___navbar___node_locale'
  | 'navigation___footer'
  | 'navigation___footer___id'
  | 'navigation___footer___parent___id'
  | 'navigation___footer___parent___children'
  | 'navigation___footer___children'
  | 'navigation___footer___children___id'
  | 'navigation___footer___children___children'
  | 'navigation___footer___internal___content'
  | 'navigation___footer___internal___contentDigest'
  | 'navigation___footer___internal___description'
  | 'navigation___footer___internal___fieldOwners'
  | 'navigation___footer___internal___ignoreType'
  | 'navigation___footer___internal___mediaType'
  | 'navigation___footer___internal___owner'
  | 'navigation___footer___internal___type'
  | 'navigation___footer___name'
  | 'navigation___footer___layout'
  | 'navigation___footer___navigation___id'
  | 'navigation___footer___navigation___children'
  | 'navigation___footer___navigation___name'
  | 'navigation___footer___navigation___component'
  | 'navigation___footer___navigation___links'
  | 'navigation___footer___navigation___navigation'
  | 'navigation___footer___navigation___spaceId'
  | 'navigation___footer___navigation___contentful_id'
  | 'navigation___footer___navigation___createdAt'
  | 'navigation___footer___navigation___updatedAt'
  | 'navigation___footer___navigation___node_locale'
  | 'navigation___footer___navigation___subNavigation'
  | 'navigation___footer___navigation___footer'
  | 'navigation___footer___navigation___navbar'
  | 'navigation___footer___companyInfo___id'
  | 'navigation___footer___companyInfo___children'
  | 'navigation___footer___companyInfo___companyName'
  | 'navigation___footer___companyInfo___description'
  | 'navigation___footer___companyInfo___copyright'
  | 'navigation___footer___companyInfo___linkedinPageURL'
  | 'navigation___footer___companyInfo___facebookPageURL'
  | 'navigation___footer___companyInfo___instagramPageURL'
  | 'navigation___footer___companyInfo___twitterPageURL'
  | 'navigation___footer___companyInfo___metadataTwitterSite'
  | 'navigation___footer___companyInfo___metadataTwitterCreator'
  | 'navigation___footer___companyInfo___metadataSiteName'
  | 'navigation___footer___companyInfo___footer'
  | 'navigation___footer___companyInfo___spaceId'
  | 'navigation___footer___companyInfo___contentful_id'
  | 'navigation___footer___companyInfo___createdAt'
  | 'navigation___footer___companyInfo___updatedAt'
  | 'navigation___footer___companyInfo___node_locale'
  | 'navigation___footer___spaceId'
  | 'navigation___footer___contentful_id'
  | 'navigation___footer___createdAt'
  | 'navigation___footer___updatedAt'
  | 'navigation___footer___sys___type'
  | 'navigation___footer___sys___revision'
  | 'navigation___footer___node_locale'
  | 'navigation___navbar'
  | 'navigation___navbar___id'
  | 'navigation___navbar___parent___id'
  | 'navigation___navbar___parent___children'
  | 'navigation___navbar___children'
  | 'navigation___navbar___children___id'
  | 'navigation___navbar___children___children'
  | 'navigation___navbar___internal___content'
  | 'navigation___navbar___internal___contentDigest'
  | 'navigation___navbar___internal___description'
  | 'navigation___navbar___internal___fieldOwners'
  | 'navigation___navbar___internal___ignoreType'
  | 'navigation___navbar___internal___mediaType'
  | 'navigation___navbar___internal___owner'
  | 'navigation___navbar___internal___type'
  | 'navigation___navbar___name'
  | 'navigation___navbar___layout'
  | 'navigation___navbar___navigation___id'
  | 'navigation___navbar___navigation___children'
  | 'navigation___navbar___navigation___name'
  | 'navigation___navbar___navigation___component'
  | 'navigation___navbar___navigation___links'
  | 'navigation___navbar___navigation___navigation'
  | 'navigation___navbar___navigation___spaceId'
  | 'navigation___navbar___navigation___contentful_id'
  | 'navigation___navbar___navigation___createdAt'
  | 'navigation___navbar___navigation___updatedAt'
  | 'navigation___navbar___navigation___node_locale'
  | 'navigation___navbar___navigation___subNavigation'
  | 'navigation___navbar___navigation___footer'
  | 'navigation___navbar___navigation___navbar'
  | 'navigation___navbar___spaceId'
  | 'navigation___navbar___contentful_id'
  | 'navigation___navbar___createdAt'
  | 'navigation___navbar___updatedAt'
  | 'navigation___navbar___sys___type'
  | 'navigation___navbar___sys___revision'
  | 'navigation___navbar___node_locale'
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

export type ContentfulNavbarFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavbarSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavbarFilterListInput = {
  elemMatch?: Maybe<ContentfulNavbarFilterInput>;
};

export type ContentfulNavbarGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavbarEdge>;
  nodes: Array<ContentfulNavbar>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNavbarSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNavbarFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNavbarSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNavbarSysContentType>;
};

export type ContentfulNavbarSysContentType = {
  sys?: Maybe<ContentfulNavbarSysContentTypeSys>;
};

export type ContentfulNavbarSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNavbarSysContentTypeSysFilterInput>;
};

export type ContentfulNavbarSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulNavbarSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavbarSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNavbarSysContentTypeFilterInput>;
};

export type ContentfulNavigation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ContentfulLink>>>;
  navigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNavigationSys>;
  node_locale?: Maybe<Scalars['String']>;
  subNavigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  footer?: Maybe<Array<Maybe<ContentfulFooter>>>;
  navbar?: Maybe<Array<Maybe<ContentfulNavbar>>>;
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
  | 'component'
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
  | 'links___name'
  | 'links___label'
  | 'links___component'
  | 'links___type'
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
  | 'links___page___description___id'
  | 'links___page___description___children'
  | 'links___page___description___description'
  | 'links___page___description___childrenMdx'
  | 'links___page___spaceId'
  | 'links___page___contentful_id'
  | 'links___page___createdAt'
  | 'links___page___updatedAt'
  | 'links___page___sys___type'
  | 'links___page___sys___revision'
  | 'links___page___node_locale'
  | 'links___page___link'
  | 'links___page___link___id'
  | 'links___page___link___children'
  | 'links___page___link___name'
  | 'links___page___link___label'
  | 'links___page___link___component'
  | 'links___page___link___type'
  | 'links___page___link___spaceId'
  | 'links___page___link___contentful_id'
  | 'links___page___link___createdAt'
  | 'links___page___link___updatedAt'
  | 'links___page___link___node_locale'
  | 'links___page___link___navigation'
  | 'links___page___link___variant'
  | 'links___page___link___icon'
  | 'links___page___link___block'
  | 'links___page___childrenContentfulPageDescriptionTextNode'
  | 'links___page___childrenContentfulPageDescriptionTextNode___id'
  | 'links___page___childrenContentfulPageDescriptionTextNode___children'
  | 'links___page___childrenContentfulPageDescriptionTextNode___description'
  | 'links___page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'links___page___childContentfulPageDescriptionTextNode___id'
  | 'links___page___childContentfulPageDescriptionTextNode___children'
  | 'links___page___childContentfulPageDescriptionTextNode___description'
  | 'links___page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'links___spaceId'
  | 'links___contentful_id'
  | 'links___createdAt'
  | 'links___updatedAt'
  | 'links___sys___type'
  | 'links___sys___revision'
  | 'links___node_locale'
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
  | 'links___navigation___component'
  | 'links___navigation___links'
  | 'links___navigation___links___id'
  | 'links___navigation___links___children'
  | 'links___navigation___links___name'
  | 'links___navigation___links___label'
  | 'links___navigation___links___component'
  | 'links___navigation___links___type'
  | 'links___navigation___links___spaceId'
  | 'links___navigation___links___contentful_id'
  | 'links___navigation___links___createdAt'
  | 'links___navigation___links___updatedAt'
  | 'links___navigation___links___node_locale'
  | 'links___navigation___links___navigation'
  | 'links___navigation___links___variant'
  | 'links___navigation___links___icon'
  | 'links___navigation___links___block'
  | 'links___navigation___navigation'
  | 'links___navigation___navigation___id'
  | 'links___navigation___navigation___children'
  | 'links___navigation___navigation___name'
  | 'links___navigation___navigation___component'
  | 'links___navigation___navigation___links'
  | 'links___navigation___navigation___navigation'
  | 'links___navigation___navigation___spaceId'
  | 'links___navigation___navigation___contentful_id'
  | 'links___navigation___navigation___createdAt'
  | 'links___navigation___navigation___updatedAt'
  | 'links___navigation___navigation___node_locale'
  | 'links___navigation___navigation___subNavigation'
  | 'links___navigation___navigation___footer'
  | 'links___navigation___navigation___navbar'
  | 'links___navigation___spaceId'
  | 'links___navigation___contentful_id'
  | 'links___navigation___createdAt'
  | 'links___navigation___updatedAt'
  | 'links___navigation___sys___type'
  | 'links___navigation___sys___revision'
  | 'links___navigation___node_locale'
  | 'links___navigation___subNavigation'
  | 'links___navigation___subNavigation___id'
  | 'links___navigation___subNavigation___children'
  | 'links___navigation___subNavigation___name'
  | 'links___navigation___subNavigation___component'
  | 'links___navigation___subNavigation___links'
  | 'links___navigation___subNavigation___navigation'
  | 'links___navigation___subNavigation___spaceId'
  | 'links___navigation___subNavigation___contentful_id'
  | 'links___navigation___subNavigation___createdAt'
  | 'links___navigation___subNavigation___updatedAt'
  | 'links___navigation___subNavigation___node_locale'
  | 'links___navigation___subNavigation___subNavigation'
  | 'links___navigation___subNavigation___footer'
  | 'links___navigation___subNavigation___navbar'
  | 'links___navigation___footer'
  | 'links___navigation___footer___id'
  | 'links___navigation___footer___children'
  | 'links___navigation___footer___name'
  | 'links___navigation___footer___layout'
  | 'links___navigation___footer___spaceId'
  | 'links___navigation___footer___contentful_id'
  | 'links___navigation___footer___createdAt'
  | 'links___navigation___footer___updatedAt'
  | 'links___navigation___footer___node_locale'
  | 'links___navigation___navbar'
  | 'links___navigation___navbar___id'
  | 'links___navigation___navbar___children'
  | 'links___navigation___navbar___name'
  | 'links___navigation___navbar___layout'
  | 'links___navigation___navbar___spaceId'
  | 'links___navigation___navbar___contentful_id'
  | 'links___navigation___navbar___createdAt'
  | 'links___navigation___navbar___updatedAt'
  | 'links___navigation___navbar___node_locale'
  | 'links___variant'
  | 'links___icon'
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
  | 'links___block___type'
  | 'links___block___alignment'
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
  | 'links___block___text___id'
  | 'links___block___text___children'
  | 'links___block___text___text'
  | 'links___block___text___childrenMdx'
  | 'links___block___spaceId'
  | 'links___block___contentful_id'
  | 'links___block___createdAt'
  | 'links___block___updatedAt'
  | 'links___block___sys___type'
  | 'links___block___sys___revision'
  | 'links___block___node_locale'
  | 'links___block___variant'
  | 'links___block___link___id'
  | 'links___block___link___children'
  | 'links___block___link___name'
  | 'links___block___link___label'
  | 'links___block___link___component'
  | 'links___block___link___type'
  | 'links___block___link___spaceId'
  | 'links___block___link___contentful_id'
  | 'links___block___link___createdAt'
  | 'links___block___link___updatedAt'
  | 'links___block___link___node_locale'
  | 'links___block___link___navigation'
  | 'links___block___link___variant'
  | 'links___block___link___icon'
  | 'links___block___link___block'
  | 'links___block___childrenContentfulBlockTextTextNode'
  | 'links___block___childrenContentfulBlockTextTextNode___id'
  | 'links___block___childrenContentfulBlockTextTextNode___children'
  | 'links___block___childrenContentfulBlockTextTextNode___text'
  | 'links___block___childrenContentfulBlockTextTextNode___childrenMdx'
  | 'links___block___childContentfulBlockTextTextNode___id'
  | 'links___block___childContentfulBlockTextTextNode___children'
  | 'links___block___childContentfulBlockTextTextNode___text'
  | 'links___block___childContentfulBlockTextTextNode___childrenMdx'
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
  | 'navigation___component'
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
  | 'navigation___links___name'
  | 'navigation___links___label'
  | 'navigation___links___component'
  | 'navigation___links___type'
  | 'navigation___links___page___id'
  | 'navigation___links___page___children'
  | 'navigation___links___page___name'
  | 'navigation___links___page___title'
  | 'navigation___links___page___slug'
  | 'navigation___links___page___sections'
  | 'navigation___links___page___spaceId'
  | 'navigation___links___page___contentful_id'
  | 'navigation___links___page___createdAt'
  | 'navigation___links___page___updatedAt'
  | 'navigation___links___page___node_locale'
  | 'navigation___links___page___link'
  | 'navigation___links___page___childrenContentfulPageDescriptionTextNode'
  | 'navigation___links___spaceId'
  | 'navigation___links___contentful_id'
  | 'navigation___links___createdAt'
  | 'navigation___links___updatedAt'
  | 'navigation___links___sys___type'
  | 'navigation___links___sys___revision'
  | 'navigation___links___node_locale'
  | 'navigation___links___navigation'
  | 'navigation___links___navigation___id'
  | 'navigation___links___navigation___children'
  | 'navigation___links___navigation___name'
  | 'navigation___links___navigation___component'
  | 'navigation___links___navigation___links'
  | 'navigation___links___navigation___navigation'
  | 'navigation___links___navigation___spaceId'
  | 'navigation___links___navigation___contentful_id'
  | 'navigation___links___navigation___createdAt'
  | 'navigation___links___navigation___updatedAt'
  | 'navigation___links___navigation___node_locale'
  | 'navigation___links___navigation___subNavigation'
  | 'navigation___links___navigation___footer'
  | 'navigation___links___navigation___navbar'
  | 'navigation___links___variant'
  | 'navigation___links___icon'
  | 'navigation___links___block'
  | 'navigation___links___block___id'
  | 'navigation___links___block___children'
  | 'navigation___links___block___name'
  | 'navigation___links___block___type'
  | 'navigation___links___block___alignment'
  | 'navigation___links___block___section'
  | 'navigation___links___block___spaceId'
  | 'navigation___links___block___contentful_id'
  | 'navigation___links___block___createdAt'
  | 'navigation___links___block___updatedAt'
  | 'navigation___links___block___node_locale'
  | 'navigation___links___block___variant'
  | 'navigation___links___block___childrenContentfulBlockTextTextNode'
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
  | 'navigation___navigation___component'
  | 'navigation___navigation___links'
  | 'navigation___navigation___links___id'
  | 'navigation___navigation___links___children'
  | 'navigation___navigation___links___name'
  | 'navigation___navigation___links___label'
  | 'navigation___navigation___links___component'
  | 'navigation___navigation___links___type'
  | 'navigation___navigation___links___spaceId'
  | 'navigation___navigation___links___contentful_id'
  | 'navigation___navigation___links___createdAt'
  | 'navigation___navigation___links___updatedAt'
  | 'navigation___navigation___links___node_locale'
  | 'navigation___navigation___links___navigation'
  | 'navigation___navigation___links___variant'
  | 'navigation___navigation___links___icon'
  | 'navigation___navigation___links___block'
  | 'navigation___navigation___navigation'
  | 'navigation___navigation___navigation___id'
  | 'navigation___navigation___navigation___children'
  | 'navigation___navigation___navigation___name'
  | 'navigation___navigation___navigation___component'
  | 'navigation___navigation___navigation___links'
  | 'navigation___navigation___navigation___navigation'
  | 'navigation___navigation___navigation___spaceId'
  | 'navigation___navigation___navigation___contentful_id'
  | 'navigation___navigation___navigation___createdAt'
  | 'navigation___navigation___navigation___updatedAt'
  | 'navigation___navigation___navigation___node_locale'
  | 'navigation___navigation___navigation___subNavigation'
  | 'navigation___navigation___navigation___footer'
  | 'navigation___navigation___navigation___navbar'
  | 'navigation___navigation___spaceId'
  | 'navigation___navigation___contentful_id'
  | 'navigation___navigation___createdAt'
  | 'navigation___navigation___updatedAt'
  | 'navigation___navigation___sys___type'
  | 'navigation___navigation___sys___revision'
  | 'navigation___navigation___node_locale'
  | 'navigation___navigation___subNavigation'
  | 'navigation___navigation___subNavigation___id'
  | 'navigation___navigation___subNavigation___children'
  | 'navigation___navigation___subNavigation___name'
  | 'navigation___navigation___subNavigation___component'
  | 'navigation___navigation___subNavigation___links'
  | 'navigation___navigation___subNavigation___navigation'
  | 'navigation___navigation___subNavigation___spaceId'
  | 'navigation___navigation___subNavigation___contentful_id'
  | 'navigation___navigation___subNavigation___createdAt'
  | 'navigation___navigation___subNavigation___updatedAt'
  | 'navigation___navigation___subNavigation___node_locale'
  | 'navigation___navigation___subNavigation___subNavigation'
  | 'navigation___navigation___subNavigation___footer'
  | 'navigation___navigation___subNavigation___navbar'
  | 'navigation___navigation___footer'
  | 'navigation___navigation___footer___id'
  | 'navigation___navigation___footer___children'
  | 'navigation___navigation___footer___name'
  | 'navigation___navigation___footer___layout'
  | 'navigation___navigation___footer___spaceId'
  | 'navigation___navigation___footer___contentful_id'
  | 'navigation___navigation___footer___createdAt'
  | 'navigation___navigation___footer___updatedAt'
  | 'navigation___navigation___footer___node_locale'
  | 'navigation___navigation___navbar'
  | 'navigation___navigation___navbar___id'
  | 'navigation___navigation___navbar___children'
  | 'navigation___navigation___navbar___name'
  | 'navigation___navigation___navbar___layout'
  | 'navigation___navigation___navbar___spaceId'
  | 'navigation___navigation___navbar___contentful_id'
  | 'navigation___navigation___navbar___createdAt'
  | 'navigation___navigation___navbar___updatedAt'
  | 'navigation___navigation___navbar___node_locale'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___type'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
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
  | 'navigation___subNavigation___component'
  | 'navigation___subNavigation___links'
  | 'navigation___subNavigation___links___id'
  | 'navigation___subNavigation___links___children'
  | 'navigation___subNavigation___links___name'
  | 'navigation___subNavigation___links___label'
  | 'navigation___subNavigation___links___component'
  | 'navigation___subNavigation___links___type'
  | 'navigation___subNavigation___links___spaceId'
  | 'navigation___subNavigation___links___contentful_id'
  | 'navigation___subNavigation___links___createdAt'
  | 'navigation___subNavigation___links___updatedAt'
  | 'navigation___subNavigation___links___node_locale'
  | 'navigation___subNavigation___links___navigation'
  | 'navigation___subNavigation___links___variant'
  | 'navigation___subNavigation___links___icon'
  | 'navigation___subNavigation___links___block'
  | 'navigation___subNavigation___navigation'
  | 'navigation___subNavigation___navigation___id'
  | 'navigation___subNavigation___navigation___children'
  | 'navigation___subNavigation___navigation___name'
  | 'navigation___subNavigation___navigation___component'
  | 'navigation___subNavigation___navigation___links'
  | 'navigation___subNavigation___navigation___navigation'
  | 'navigation___subNavigation___navigation___spaceId'
  | 'navigation___subNavigation___navigation___contentful_id'
  | 'navigation___subNavigation___navigation___createdAt'
  | 'navigation___subNavigation___navigation___updatedAt'
  | 'navigation___subNavigation___navigation___node_locale'
  | 'navigation___subNavigation___navigation___subNavigation'
  | 'navigation___subNavigation___navigation___footer'
  | 'navigation___subNavigation___navigation___navbar'
  | 'navigation___subNavigation___spaceId'
  | 'navigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___createdAt'
  | 'navigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___sys___type'
  | 'navigation___subNavigation___sys___revision'
  | 'navigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___id'
  | 'navigation___subNavigation___subNavigation___children'
  | 'navigation___subNavigation___subNavigation___name'
  | 'navigation___subNavigation___subNavigation___component'
  | 'navigation___subNavigation___subNavigation___links'
  | 'navigation___subNavigation___subNavigation___navigation'
  | 'navigation___subNavigation___subNavigation___spaceId'
  | 'navigation___subNavigation___subNavigation___contentful_id'
  | 'navigation___subNavigation___subNavigation___createdAt'
  | 'navigation___subNavigation___subNavigation___updatedAt'
  | 'navigation___subNavigation___subNavigation___node_locale'
  | 'navigation___subNavigation___subNavigation___subNavigation'
  | 'navigation___subNavigation___subNavigation___footer'
  | 'navigation___subNavigation___subNavigation___navbar'
  | 'navigation___subNavigation___footer'
  | 'navigation___subNavigation___footer___id'
  | 'navigation___subNavigation___footer___children'
  | 'navigation___subNavigation___footer___name'
  | 'navigation___subNavigation___footer___layout'
  | 'navigation___subNavigation___footer___spaceId'
  | 'navigation___subNavigation___footer___contentful_id'
  | 'navigation___subNavigation___footer___createdAt'
  | 'navigation___subNavigation___footer___updatedAt'
  | 'navigation___subNavigation___footer___node_locale'
  | 'navigation___subNavigation___navbar'
  | 'navigation___subNavigation___navbar___id'
  | 'navigation___subNavigation___navbar___children'
  | 'navigation___subNavigation___navbar___name'
  | 'navigation___subNavigation___navbar___layout'
  | 'navigation___subNavigation___navbar___spaceId'
  | 'navigation___subNavigation___navbar___contentful_id'
  | 'navigation___subNavigation___navbar___createdAt'
  | 'navigation___subNavigation___navbar___updatedAt'
  | 'navigation___subNavigation___navbar___node_locale'
  | 'navigation___footer'
  | 'navigation___footer___id'
  | 'navigation___footer___parent___id'
  | 'navigation___footer___parent___children'
  | 'navigation___footer___children'
  | 'navigation___footer___children___id'
  | 'navigation___footer___children___children'
  | 'navigation___footer___internal___content'
  | 'navigation___footer___internal___contentDigest'
  | 'navigation___footer___internal___description'
  | 'navigation___footer___internal___fieldOwners'
  | 'navigation___footer___internal___ignoreType'
  | 'navigation___footer___internal___mediaType'
  | 'navigation___footer___internal___owner'
  | 'navigation___footer___internal___type'
  | 'navigation___footer___name'
  | 'navigation___footer___layout'
  | 'navigation___footer___navigation___id'
  | 'navigation___footer___navigation___children'
  | 'navigation___footer___navigation___name'
  | 'navigation___footer___navigation___component'
  | 'navigation___footer___navigation___links'
  | 'navigation___footer___navigation___navigation'
  | 'navigation___footer___navigation___spaceId'
  | 'navigation___footer___navigation___contentful_id'
  | 'navigation___footer___navigation___createdAt'
  | 'navigation___footer___navigation___updatedAt'
  | 'navigation___footer___navigation___node_locale'
  | 'navigation___footer___navigation___subNavigation'
  | 'navigation___footer___navigation___footer'
  | 'navigation___footer___navigation___navbar'
  | 'navigation___footer___companyInfo___id'
  | 'navigation___footer___companyInfo___children'
  | 'navigation___footer___companyInfo___companyName'
  | 'navigation___footer___companyInfo___description'
  | 'navigation___footer___companyInfo___copyright'
  | 'navigation___footer___companyInfo___linkedinPageURL'
  | 'navigation___footer___companyInfo___facebookPageURL'
  | 'navigation___footer___companyInfo___instagramPageURL'
  | 'navigation___footer___companyInfo___twitterPageURL'
  | 'navigation___footer___companyInfo___metadataTwitterSite'
  | 'navigation___footer___companyInfo___metadataTwitterCreator'
  | 'navigation___footer___companyInfo___metadataSiteName'
  | 'navigation___footer___companyInfo___footer'
  | 'navigation___footer___companyInfo___spaceId'
  | 'navigation___footer___companyInfo___contentful_id'
  | 'navigation___footer___companyInfo___createdAt'
  | 'navigation___footer___companyInfo___updatedAt'
  | 'navigation___footer___companyInfo___node_locale'
  | 'navigation___footer___spaceId'
  | 'navigation___footer___contentful_id'
  | 'navigation___footer___createdAt'
  | 'navigation___footer___updatedAt'
  | 'navigation___footer___sys___type'
  | 'navigation___footer___sys___revision'
  | 'navigation___footer___node_locale'
  | 'navigation___navbar'
  | 'navigation___navbar___id'
  | 'navigation___navbar___parent___id'
  | 'navigation___navbar___parent___children'
  | 'navigation___navbar___children'
  | 'navigation___navbar___children___id'
  | 'navigation___navbar___children___children'
  | 'navigation___navbar___internal___content'
  | 'navigation___navbar___internal___contentDigest'
  | 'navigation___navbar___internal___description'
  | 'navigation___navbar___internal___fieldOwners'
  | 'navigation___navbar___internal___ignoreType'
  | 'navigation___navbar___internal___mediaType'
  | 'navigation___navbar___internal___owner'
  | 'navigation___navbar___internal___type'
  | 'navigation___navbar___name'
  | 'navigation___navbar___layout'
  | 'navigation___navbar___navigation___id'
  | 'navigation___navbar___navigation___children'
  | 'navigation___navbar___navigation___name'
  | 'navigation___navbar___navigation___component'
  | 'navigation___navbar___navigation___links'
  | 'navigation___navbar___navigation___navigation'
  | 'navigation___navbar___navigation___spaceId'
  | 'navigation___navbar___navigation___contentful_id'
  | 'navigation___navbar___navigation___createdAt'
  | 'navigation___navbar___navigation___updatedAt'
  | 'navigation___navbar___navigation___node_locale'
  | 'navigation___navbar___navigation___subNavigation'
  | 'navigation___navbar___navigation___footer'
  | 'navigation___navbar___navigation___navbar'
  | 'navigation___navbar___spaceId'
  | 'navigation___navbar___contentful_id'
  | 'navigation___navbar___createdAt'
  | 'navigation___navbar___updatedAt'
  | 'navigation___navbar___sys___type'
  | 'navigation___navbar___sys___revision'
  | 'navigation___navbar___node_locale'
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
  | 'subNavigation___component'
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
  | 'subNavigation___links___name'
  | 'subNavigation___links___label'
  | 'subNavigation___links___component'
  | 'subNavigation___links___type'
  | 'subNavigation___links___page___id'
  | 'subNavigation___links___page___children'
  | 'subNavigation___links___page___name'
  | 'subNavigation___links___page___title'
  | 'subNavigation___links___page___slug'
  | 'subNavigation___links___page___sections'
  | 'subNavigation___links___page___spaceId'
  | 'subNavigation___links___page___contentful_id'
  | 'subNavigation___links___page___createdAt'
  | 'subNavigation___links___page___updatedAt'
  | 'subNavigation___links___page___node_locale'
  | 'subNavigation___links___page___link'
  | 'subNavigation___links___page___childrenContentfulPageDescriptionTextNode'
  | 'subNavigation___links___spaceId'
  | 'subNavigation___links___contentful_id'
  | 'subNavigation___links___createdAt'
  | 'subNavigation___links___updatedAt'
  | 'subNavigation___links___sys___type'
  | 'subNavigation___links___sys___revision'
  | 'subNavigation___links___node_locale'
  | 'subNavigation___links___navigation'
  | 'subNavigation___links___navigation___id'
  | 'subNavigation___links___navigation___children'
  | 'subNavigation___links___navigation___name'
  | 'subNavigation___links___navigation___component'
  | 'subNavigation___links___navigation___links'
  | 'subNavigation___links___navigation___navigation'
  | 'subNavigation___links___navigation___spaceId'
  | 'subNavigation___links___navigation___contentful_id'
  | 'subNavigation___links___navigation___createdAt'
  | 'subNavigation___links___navigation___updatedAt'
  | 'subNavigation___links___navigation___node_locale'
  | 'subNavigation___links___navigation___subNavigation'
  | 'subNavigation___links___navigation___footer'
  | 'subNavigation___links___navigation___navbar'
  | 'subNavigation___links___variant'
  | 'subNavigation___links___icon'
  | 'subNavigation___links___block'
  | 'subNavigation___links___block___id'
  | 'subNavigation___links___block___children'
  | 'subNavigation___links___block___name'
  | 'subNavigation___links___block___type'
  | 'subNavigation___links___block___alignment'
  | 'subNavigation___links___block___section'
  | 'subNavigation___links___block___spaceId'
  | 'subNavigation___links___block___contentful_id'
  | 'subNavigation___links___block___createdAt'
  | 'subNavigation___links___block___updatedAt'
  | 'subNavigation___links___block___node_locale'
  | 'subNavigation___links___block___variant'
  | 'subNavigation___links___block___childrenContentfulBlockTextTextNode'
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
  | 'subNavigation___navigation___component'
  | 'subNavigation___navigation___links'
  | 'subNavigation___navigation___links___id'
  | 'subNavigation___navigation___links___children'
  | 'subNavigation___navigation___links___name'
  | 'subNavigation___navigation___links___label'
  | 'subNavigation___navigation___links___component'
  | 'subNavigation___navigation___links___type'
  | 'subNavigation___navigation___links___spaceId'
  | 'subNavigation___navigation___links___contentful_id'
  | 'subNavigation___navigation___links___createdAt'
  | 'subNavigation___navigation___links___updatedAt'
  | 'subNavigation___navigation___links___node_locale'
  | 'subNavigation___navigation___links___navigation'
  | 'subNavigation___navigation___links___variant'
  | 'subNavigation___navigation___links___icon'
  | 'subNavigation___navigation___links___block'
  | 'subNavigation___navigation___navigation'
  | 'subNavigation___navigation___navigation___id'
  | 'subNavigation___navigation___navigation___children'
  | 'subNavigation___navigation___navigation___name'
  | 'subNavigation___navigation___navigation___component'
  | 'subNavigation___navigation___navigation___links'
  | 'subNavigation___navigation___navigation___navigation'
  | 'subNavigation___navigation___navigation___spaceId'
  | 'subNavigation___navigation___navigation___contentful_id'
  | 'subNavigation___navigation___navigation___createdAt'
  | 'subNavigation___navigation___navigation___updatedAt'
  | 'subNavigation___navigation___navigation___node_locale'
  | 'subNavigation___navigation___navigation___subNavigation'
  | 'subNavigation___navigation___navigation___footer'
  | 'subNavigation___navigation___navigation___navbar'
  | 'subNavigation___navigation___spaceId'
  | 'subNavigation___navigation___contentful_id'
  | 'subNavigation___navigation___createdAt'
  | 'subNavigation___navigation___updatedAt'
  | 'subNavigation___navigation___sys___type'
  | 'subNavigation___navigation___sys___revision'
  | 'subNavigation___navigation___node_locale'
  | 'subNavigation___navigation___subNavigation'
  | 'subNavigation___navigation___subNavigation___id'
  | 'subNavigation___navigation___subNavigation___children'
  | 'subNavigation___navigation___subNavigation___name'
  | 'subNavigation___navigation___subNavigation___component'
  | 'subNavigation___navigation___subNavigation___links'
  | 'subNavigation___navigation___subNavigation___navigation'
  | 'subNavigation___navigation___subNavigation___spaceId'
  | 'subNavigation___navigation___subNavigation___contentful_id'
  | 'subNavigation___navigation___subNavigation___createdAt'
  | 'subNavigation___navigation___subNavigation___updatedAt'
  | 'subNavigation___navigation___subNavigation___node_locale'
  | 'subNavigation___navigation___subNavigation___subNavigation'
  | 'subNavigation___navigation___subNavigation___footer'
  | 'subNavigation___navigation___subNavigation___navbar'
  | 'subNavigation___navigation___footer'
  | 'subNavigation___navigation___footer___id'
  | 'subNavigation___navigation___footer___children'
  | 'subNavigation___navigation___footer___name'
  | 'subNavigation___navigation___footer___layout'
  | 'subNavigation___navigation___footer___spaceId'
  | 'subNavigation___navigation___footer___contentful_id'
  | 'subNavigation___navigation___footer___createdAt'
  | 'subNavigation___navigation___footer___updatedAt'
  | 'subNavigation___navigation___footer___node_locale'
  | 'subNavigation___navigation___navbar'
  | 'subNavigation___navigation___navbar___id'
  | 'subNavigation___navigation___navbar___children'
  | 'subNavigation___navigation___navbar___name'
  | 'subNavigation___navigation___navbar___layout'
  | 'subNavigation___navigation___navbar___spaceId'
  | 'subNavigation___navigation___navbar___contentful_id'
  | 'subNavigation___navigation___navbar___createdAt'
  | 'subNavigation___navigation___navbar___updatedAt'
  | 'subNavigation___navigation___navbar___node_locale'
  | 'subNavigation___spaceId'
  | 'subNavigation___contentful_id'
  | 'subNavigation___createdAt'
  | 'subNavigation___updatedAt'
  | 'subNavigation___sys___type'
  | 'subNavigation___sys___revision'
  | 'subNavigation___node_locale'
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
  | 'subNavigation___subNavigation___component'
  | 'subNavigation___subNavigation___links'
  | 'subNavigation___subNavigation___links___id'
  | 'subNavigation___subNavigation___links___children'
  | 'subNavigation___subNavigation___links___name'
  | 'subNavigation___subNavigation___links___label'
  | 'subNavigation___subNavigation___links___component'
  | 'subNavigation___subNavigation___links___type'
  | 'subNavigation___subNavigation___links___spaceId'
  | 'subNavigation___subNavigation___links___contentful_id'
  | 'subNavigation___subNavigation___links___createdAt'
  | 'subNavigation___subNavigation___links___updatedAt'
  | 'subNavigation___subNavigation___links___node_locale'
  | 'subNavigation___subNavigation___links___navigation'
  | 'subNavigation___subNavigation___links___variant'
  | 'subNavigation___subNavigation___links___icon'
  | 'subNavigation___subNavigation___links___block'
  | 'subNavigation___subNavigation___navigation'
  | 'subNavigation___subNavigation___navigation___id'
  | 'subNavigation___subNavigation___navigation___children'
  | 'subNavigation___subNavigation___navigation___name'
  | 'subNavigation___subNavigation___navigation___component'
  | 'subNavigation___subNavigation___navigation___links'
  | 'subNavigation___subNavigation___navigation___navigation'
  | 'subNavigation___subNavigation___navigation___spaceId'
  | 'subNavigation___subNavigation___navigation___contentful_id'
  | 'subNavigation___subNavigation___navigation___createdAt'
  | 'subNavigation___subNavigation___navigation___updatedAt'
  | 'subNavigation___subNavigation___navigation___node_locale'
  | 'subNavigation___subNavigation___navigation___subNavigation'
  | 'subNavigation___subNavigation___navigation___footer'
  | 'subNavigation___subNavigation___navigation___navbar'
  | 'subNavigation___subNavigation___spaceId'
  | 'subNavigation___subNavigation___contentful_id'
  | 'subNavigation___subNavigation___createdAt'
  | 'subNavigation___subNavigation___updatedAt'
  | 'subNavigation___subNavigation___sys___type'
  | 'subNavigation___subNavigation___sys___revision'
  | 'subNavigation___subNavigation___node_locale'
  | 'subNavigation___subNavigation___subNavigation'
  | 'subNavigation___subNavigation___subNavigation___id'
  | 'subNavigation___subNavigation___subNavigation___children'
  | 'subNavigation___subNavigation___subNavigation___name'
  | 'subNavigation___subNavigation___subNavigation___component'
  | 'subNavigation___subNavigation___subNavigation___links'
  | 'subNavigation___subNavigation___subNavigation___navigation'
  | 'subNavigation___subNavigation___subNavigation___spaceId'
  | 'subNavigation___subNavigation___subNavigation___contentful_id'
  | 'subNavigation___subNavigation___subNavigation___createdAt'
  | 'subNavigation___subNavigation___subNavigation___updatedAt'
  | 'subNavigation___subNavigation___subNavigation___node_locale'
  | 'subNavigation___subNavigation___subNavigation___subNavigation'
  | 'subNavigation___subNavigation___subNavigation___footer'
  | 'subNavigation___subNavigation___subNavigation___navbar'
  | 'subNavigation___subNavigation___footer'
  | 'subNavigation___subNavigation___footer___id'
  | 'subNavigation___subNavigation___footer___children'
  | 'subNavigation___subNavigation___footer___name'
  | 'subNavigation___subNavigation___footer___layout'
  | 'subNavigation___subNavigation___footer___spaceId'
  | 'subNavigation___subNavigation___footer___contentful_id'
  | 'subNavigation___subNavigation___footer___createdAt'
  | 'subNavigation___subNavigation___footer___updatedAt'
  | 'subNavigation___subNavigation___footer___node_locale'
  | 'subNavigation___subNavigation___navbar'
  | 'subNavigation___subNavigation___navbar___id'
  | 'subNavigation___subNavigation___navbar___children'
  | 'subNavigation___subNavigation___navbar___name'
  | 'subNavigation___subNavigation___navbar___layout'
  | 'subNavigation___subNavigation___navbar___spaceId'
  | 'subNavigation___subNavigation___navbar___contentful_id'
  | 'subNavigation___subNavigation___navbar___createdAt'
  | 'subNavigation___subNavigation___navbar___updatedAt'
  | 'subNavigation___subNavigation___navbar___node_locale'
  | 'subNavigation___footer'
  | 'subNavigation___footer___id'
  | 'subNavigation___footer___parent___id'
  | 'subNavigation___footer___parent___children'
  | 'subNavigation___footer___children'
  | 'subNavigation___footer___children___id'
  | 'subNavigation___footer___children___children'
  | 'subNavigation___footer___internal___content'
  | 'subNavigation___footer___internal___contentDigest'
  | 'subNavigation___footer___internal___description'
  | 'subNavigation___footer___internal___fieldOwners'
  | 'subNavigation___footer___internal___ignoreType'
  | 'subNavigation___footer___internal___mediaType'
  | 'subNavigation___footer___internal___owner'
  | 'subNavigation___footer___internal___type'
  | 'subNavigation___footer___name'
  | 'subNavigation___footer___layout'
  | 'subNavigation___footer___navigation___id'
  | 'subNavigation___footer___navigation___children'
  | 'subNavigation___footer___navigation___name'
  | 'subNavigation___footer___navigation___component'
  | 'subNavigation___footer___navigation___links'
  | 'subNavigation___footer___navigation___navigation'
  | 'subNavigation___footer___navigation___spaceId'
  | 'subNavigation___footer___navigation___contentful_id'
  | 'subNavigation___footer___navigation___createdAt'
  | 'subNavigation___footer___navigation___updatedAt'
  | 'subNavigation___footer___navigation___node_locale'
  | 'subNavigation___footer___navigation___subNavigation'
  | 'subNavigation___footer___navigation___footer'
  | 'subNavigation___footer___navigation___navbar'
  | 'subNavigation___footer___companyInfo___id'
  | 'subNavigation___footer___companyInfo___children'
  | 'subNavigation___footer___companyInfo___companyName'
  | 'subNavigation___footer___companyInfo___description'
  | 'subNavigation___footer___companyInfo___copyright'
  | 'subNavigation___footer___companyInfo___linkedinPageURL'
  | 'subNavigation___footer___companyInfo___facebookPageURL'
  | 'subNavigation___footer___companyInfo___instagramPageURL'
  | 'subNavigation___footer___companyInfo___twitterPageURL'
  | 'subNavigation___footer___companyInfo___metadataTwitterSite'
  | 'subNavigation___footer___companyInfo___metadataTwitterCreator'
  | 'subNavigation___footer___companyInfo___metadataSiteName'
  | 'subNavigation___footer___companyInfo___footer'
  | 'subNavigation___footer___companyInfo___spaceId'
  | 'subNavigation___footer___companyInfo___contentful_id'
  | 'subNavigation___footer___companyInfo___createdAt'
  | 'subNavigation___footer___companyInfo___updatedAt'
  | 'subNavigation___footer___companyInfo___node_locale'
  | 'subNavigation___footer___spaceId'
  | 'subNavigation___footer___contentful_id'
  | 'subNavigation___footer___createdAt'
  | 'subNavigation___footer___updatedAt'
  | 'subNavigation___footer___sys___type'
  | 'subNavigation___footer___sys___revision'
  | 'subNavigation___footer___node_locale'
  | 'subNavigation___navbar'
  | 'subNavigation___navbar___id'
  | 'subNavigation___navbar___parent___id'
  | 'subNavigation___navbar___parent___children'
  | 'subNavigation___navbar___children'
  | 'subNavigation___navbar___children___id'
  | 'subNavigation___navbar___children___children'
  | 'subNavigation___navbar___internal___content'
  | 'subNavigation___navbar___internal___contentDigest'
  | 'subNavigation___navbar___internal___description'
  | 'subNavigation___navbar___internal___fieldOwners'
  | 'subNavigation___navbar___internal___ignoreType'
  | 'subNavigation___navbar___internal___mediaType'
  | 'subNavigation___navbar___internal___owner'
  | 'subNavigation___navbar___internal___type'
  | 'subNavigation___navbar___name'
  | 'subNavigation___navbar___layout'
  | 'subNavigation___navbar___navigation___id'
  | 'subNavigation___navbar___navigation___children'
  | 'subNavigation___navbar___navigation___name'
  | 'subNavigation___navbar___navigation___component'
  | 'subNavigation___navbar___navigation___links'
  | 'subNavigation___navbar___navigation___navigation'
  | 'subNavigation___navbar___navigation___spaceId'
  | 'subNavigation___navbar___navigation___contentful_id'
  | 'subNavigation___navbar___navigation___createdAt'
  | 'subNavigation___navbar___navigation___updatedAt'
  | 'subNavigation___navbar___navigation___node_locale'
  | 'subNavigation___navbar___navigation___subNavigation'
  | 'subNavigation___navbar___navigation___footer'
  | 'subNavigation___navbar___navigation___navbar'
  | 'subNavigation___navbar___spaceId'
  | 'subNavigation___navbar___contentful_id'
  | 'subNavigation___navbar___createdAt'
  | 'subNavigation___navbar___updatedAt'
  | 'subNavigation___navbar___sys___type'
  | 'subNavigation___navbar___sys___revision'
  | 'subNavigation___navbar___node_locale'
  | 'footer'
  | 'footer___id'
  | 'footer___parent___id'
  | 'footer___parent___parent___id'
  | 'footer___parent___parent___children'
  | 'footer___parent___children'
  | 'footer___parent___children___id'
  | 'footer___parent___children___children'
  | 'footer___parent___internal___content'
  | 'footer___parent___internal___contentDigest'
  | 'footer___parent___internal___description'
  | 'footer___parent___internal___fieldOwners'
  | 'footer___parent___internal___ignoreType'
  | 'footer___parent___internal___mediaType'
  | 'footer___parent___internal___owner'
  | 'footer___parent___internal___type'
  | 'footer___children'
  | 'footer___children___id'
  | 'footer___children___parent___id'
  | 'footer___children___parent___children'
  | 'footer___children___children'
  | 'footer___children___children___id'
  | 'footer___children___children___children'
  | 'footer___children___internal___content'
  | 'footer___children___internal___contentDigest'
  | 'footer___children___internal___description'
  | 'footer___children___internal___fieldOwners'
  | 'footer___children___internal___ignoreType'
  | 'footer___children___internal___mediaType'
  | 'footer___children___internal___owner'
  | 'footer___children___internal___type'
  | 'footer___internal___content'
  | 'footer___internal___contentDigest'
  | 'footer___internal___description'
  | 'footer___internal___fieldOwners'
  | 'footer___internal___ignoreType'
  | 'footer___internal___mediaType'
  | 'footer___internal___owner'
  | 'footer___internal___type'
  | 'footer___name'
  | 'footer___layout'
  | 'footer___navigation___id'
  | 'footer___navigation___parent___id'
  | 'footer___navigation___parent___children'
  | 'footer___navigation___children'
  | 'footer___navigation___children___id'
  | 'footer___navigation___children___children'
  | 'footer___navigation___internal___content'
  | 'footer___navigation___internal___contentDigest'
  | 'footer___navigation___internal___description'
  | 'footer___navigation___internal___fieldOwners'
  | 'footer___navigation___internal___ignoreType'
  | 'footer___navigation___internal___mediaType'
  | 'footer___navigation___internal___owner'
  | 'footer___navigation___internal___type'
  | 'footer___navigation___name'
  | 'footer___navigation___component'
  | 'footer___navigation___links'
  | 'footer___navigation___links___id'
  | 'footer___navigation___links___children'
  | 'footer___navigation___links___name'
  | 'footer___navigation___links___label'
  | 'footer___navigation___links___component'
  | 'footer___navigation___links___type'
  | 'footer___navigation___links___spaceId'
  | 'footer___navigation___links___contentful_id'
  | 'footer___navigation___links___createdAt'
  | 'footer___navigation___links___updatedAt'
  | 'footer___navigation___links___node_locale'
  | 'footer___navigation___links___navigation'
  | 'footer___navigation___links___variant'
  | 'footer___navigation___links___icon'
  | 'footer___navigation___links___block'
  | 'footer___navigation___navigation'
  | 'footer___navigation___navigation___id'
  | 'footer___navigation___navigation___children'
  | 'footer___navigation___navigation___name'
  | 'footer___navigation___navigation___component'
  | 'footer___navigation___navigation___links'
  | 'footer___navigation___navigation___navigation'
  | 'footer___navigation___navigation___spaceId'
  | 'footer___navigation___navigation___contentful_id'
  | 'footer___navigation___navigation___createdAt'
  | 'footer___navigation___navigation___updatedAt'
  | 'footer___navigation___navigation___node_locale'
  | 'footer___navigation___navigation___subNavigation'
  | 'footer___navigation___navigation___footer'
  | 'footer___navigation___navigation___navbar'
  | 'footer___navigation___spaceId'
  | 'footer___navigation___contentful_id'
  | 'footer___navigation___createdAt'
  | 'footer___navigation___updatedAt'
  | 'footer___navigation___sys___type'
  | 'footer___navigation___sys___revision'
  | 'footer___navigation___node_locale'
  | 'footer___navigation___subNavigation'
  | 'footer___navigation___subNavigation___id'
  | 'footer___navigation___subNavigation___children'
  | 'footer___navigation___subNavigation___name'
  | 'footer___navigation___subNavigation___component'
  | 'footer___navigation___subNavigation___links'
  | 'footer___navigation___subNavigation___navigation'
  | 'footer___navigation___subNavigation___spaceId'
  | 'footer___navigation___subNavigation___contentful_id'
  | 'footer___navigation___subNavigation___createdAt'
  | 'footer___navigation___subNavigation___updatedAt'
  | 'footer___navigation___subNavigation___node_locale'
  | 'footer___navigation___subNavigation___subNavigation'
  | 'footer___navigation___subNavigation___footer'
  | 'footer___navigation___subNavigation___navbar'
  | 'footer___navigation___footer'
  | 'footer___navigation___footer___id'
  | 'footer___navigation___footer___children'
  | 'footer___navigation___footer___name'
  | 'footer___navigation___footer___layout'
  | 'footer___navigation___footer___spaceId'
  | 'footer___navigation___footer___contentful_id'
  | 'footer___navigation___footer___createdAt'
  | 'footer___navigation___footer___updatedAt'
  | 'footer___navigation___footer___node_locale'
  | 'footer___navigation___navbar'
  | 'footer___navigation___navbar___id'
  | 'footer___navigation___navbar___children'
  | 'footer___navigation___navbar___name'
  | 'footer___navigation___navbar___layout'
  | 'footer___navigation___navbar___spaceId'
  | 'footer___navigation___navbar___contentful_id'
  | 'footer___navigation___navbar___createdAt'
  | 'footer___navigation___navbar___updatedAt'
  | 'footer___navigation___navbar___node_locale'
  | 'footer___companyInfo___id'
  | 'footer___companyInfo___parent___id'
  | 'footer___companyInfo___parent___children'
  | 'footer___companyInfo___children'
  | 'footer___companyInfo___children___id'
  | 'footer___companyInfo___children___children'
  | 'footer___companyInfo___internal___content'
  | 'footer___companyInfo___internal___contentDigest'
  | 'footer___companyInfo___internal___description'
  | 'footer___companyInfo___internal___fieldOwners'
  | 'footer___companyInfo___internal___ignoreType'
  | 'footer___companyInfo___internal___mediaType'
  | 'footer___companyInfo___internal___owner'
  | 'footer___companyInfo___internal___type'
  | 'footer___companyInfo___companyName'
  | 'footer___companyInfo___description'
  | 'footer___companyInfo___copyright'
  | 'footer___companyInfo___linkedinPageURL'
  | 'footer___companyInfo___facebookPageURL'
  | 'footer___companyInfo___instagramPageURL'
  | 'footer___companyInfo___twitterPageURL'
  | 'footer___companyInfo___metadataTwitterSite'
  | 'footer___companyInfo___metadataTwitterCreator'
  | 'footer___companyInfo___metadataSiteName'
  | 'footer___companyInfo___footer'
  | 'footer___companyInfo___footer___id'
  | 'footer___companyInfo___footer___children'
  | 'footer___companyInfo___footer___name'
  | 'footer___companyInfo___footer___layout'
  | 'footer___companyInfo___footer___spaceId'
  | 'footer___companyInfo___footer___contentful_id'
  | 'footer___companyInfo___footer___createdAt'
  | 'footer___companyInfo___footer___updatedAt'
  | 'footer___companyInfo___footer___node_locale'
  | 'footer___companyInfo___spaceId'
  | 'footer___companyInfo___contentful_id'
  | 'footer___companyInfo___createdAt'
  | 'footer___companyInfo___updatedAt'
  | 'footer___companyInfo___sys___type'
  | 'footer___companyInfo___sys___revision'
  | 'footer___companyInfo___node_locale'
  | 'footer___spaceId'
  | 'footer___contentful_id'
  | 'footer___createdAt'
  | 'footer___updatedAt'
  | 'footer___sys___type'
  | 'footer___sys___revision'
  | 'footer___node_locale'
  | 'navbar'
  | 'navbar___id'
  | 'navbar___parent___id'
  | 'navbar___parent___parent___id'
  | 'navbar___parent___parent___children'
  | 'navbar___parent___children'
  | 'navbar___parent___children___id'
  | 'navbar___parent___children___children'
  | 'navbar___parent___internal___content'
  | 'navbar___parent___internal___contentDigest'
  | 'navbar___parent___internal___description'
  | 'navbar___parent___internal___fieldOwners'
  | 'navbar___parent___internal___ignoreType'
  | 'navbar___parent___internal___mediaType'
  | 'navbar___parent___internal___owner'
  | 'navbar___parent___internal___type'
  | 'navbar___children'
  | 'navbar___children___id'
  | 'navbar___children___parent___id'
  | 'navbar___children___parent___children'
  | 'navbar___children___children'
  | 'navbar___children___children___id'
  | 'navbar___children___children___children'
  | 'navbar___children___internal___content'
  | 'navbar___children___internal___contentDigest'
  | 'navbar___children___internal___description'
  | 'navbar___children___internal___fieldOwners'
  | 'navbar___children___internal___ignoreType'
  | 'navbar___children___internal___mediaType'
  | 'navbar___children___internal___owner'
  | 'navbar___children___internal___type'
  | 'navbar___internal___content'
  | 'navbar___internal___contentDigest'
  | 'navbar___internal___description'
  | 'navbar___internal___fieldOwners'
  | 'navbar___internal___ignoreType'
  | 'navbar___internal___mediaType'
  | 'navbar___internal___owner'
  | 'navbar___internal___type'
  | 'navbar___name'
  | 'navbar___layout'
  | 'navbar___navigation___id'
  | 'navbar___navigation___parent___id'
  | 'navbar___navigation___parent___children'
  | 'navbar___navigation___children'
  | 'navbar___navigation___children___id'
  | 'navbar___navigation___children___children'
  | 'navbar___navigation___internal___content'
  | 'navbar___navigation___internal___contentDigest'
  | 'navbar___navigation___internal___description'
  | 'navbar___navigation___internal___fieldOwners'
  | 'navbar___navigation___internal___ignoreType'
  | 'navbar___navigation___internal___mediaType'
  | 'navbar___navigation___internal___owner'
  | 'navbar___navigation___internal___type'
  | 'navbar___navigation___name'
  | 'navbar___navigation___component'
  | 'navbar___navigation___links'
  | 'navbar___navigation___links___id'
  | 'navbar___navigation___links___children'
  | 'navbar___navigation___links___name'
  | 'navbar___navigation___links___label'
  | 'navbar___navigation___links___component'
  | 'navbar___navigation___links___type'
  | 'navbar___navigation___links___spaceId'
  | 'navbar___navigation___links___contentful_id'
  | 'navbar___navigation___links___createdAt'
  | 'navbar___navigation___links___updatedAt'
  | 'navbar___navigation___links___node_locale'
  | 'navbar___navigation___links___navigation'
  | 'navbar___navigation___links___variant'
  | 'navbar___navigation___links___icon'
  | 'navbar___navigation___links___block'
  | 'navbar___navigation___navigation'
  | 'navbar___navigation___navigation___id'
  | 'navbar___navigation___navigation___children'
  | 'navbar___navigation___navigation___name'
  | 'navbar___navigation___navigation___component'
  | 'navbar___navigation___navigation___links'
  | 'navbar___navigation___navigation___navigation'
  | 'navbar___navigation___navigation___spaceId'
  | 'navbar___navigation___navigation___contentful_id'
  | 'navbar___navigation___navigation___createdAt'
  | 'navbar___navigation___navigation___updatedAt'
  | 'navbar___navigation___navigation___node_locale'
  | 'navbar___navigation___navigation___subNavigation'
  | 'navbar___navigation___navigation___footer'
  | 'navbar___navigation___navigation___navbar'
  | 'navbar___navigation___spaceId'
  | 'navbar___navigation___contentful_id'
  | 'navbar___navigation___createdAt'
  | 'navbar___navigation___updatedAt'
  | 'navbar___navigation___sys___type'
  | 'navbar___navigation___sys___revision'
  | 'navbar___navigation___node_locale'
  | 'navbar___navigation___subNavigation'
  | 'navbar___navigation___subNavigation___id'
  | 'navbar___navigation___subNavigation___children'
  | 'navbar___navigation___subNavigation___name'
  | 'navbar___navigation___subNavigation___component'
  | 'navbar___navigation___subNavigation___links'
  | 'navbar___navigation___subNavigation___navigation'
  | 'navbar___navigation___subNavigation___spaceId'
  | 'navbar___navigation___subNavigation___contentful_id'
  | 'navbar___navigation___subNavigation___createdAt'
  | 'navbar___navigation___subNavigation___updatedAt'
  | 'navbar___navigation___subNavigation___node_locale'
  | 'navbar___navigation___subNavigation___subNavigation'
  | 'navbar___navigation___subNavigation___footer'
  | 'navbar___navigation___subNavigation___navbar'
  | 'navbar___navigation___footer'
  | 'navbar___navigation___footer___id'
  | 'navbar___navigation___footer___children'
  | 'navbar___navigation___footer___name'
  | 'navbar___navigation___footer___layout'
  | 'navbar___navigation___footer___spaceId'
  | 'navbar___navigation___footer___contentful_id'
  | 'navbar___navigation___footer___createdAt'
  | 'navbar___navigation___footer___updatedAt'
  | 'navbar___navigation___footer___node_locale'
  | 'navbar___navigation___navbar'
  | 'navbar___navigation___navbar___id'
  | 'navbar___navigation___navbar___children'
  | 'navbar___navigation___navbar___name'
  | 'navbar___navigation___navbar___layout'
  | 'navbar___navigation___navbar___spaceId'
  | 'navbar___navigation___navbar___contentful_id'
  | 'navbar___navigation___navbar___createdAt'
  | 'navbar___navigation___navbar___updatedAt'
  | 'navbar___navigation___navbar___node_locale'
  | 'navbar___spaceId'
  | 'navbar___contentful_id'
  | 'navbar___createdAt'
  | 'navbar___updatedAt'
  | 'navbar___sys___type'
  | 'navbar___sys___revision'
  | 'navbar___node_locale';

export type ContentfulNavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<ContentfulLinkFilterListInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  subNavigation?: Maybe<ContentfulNavigationFilterListInput>;
  footer?: Maybe<ContentfulFooterFilterListInput>;
  navbar?: Maybe<ContentfulNavbarFilterListInput>;
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
  description?: Maybe<ContentfulPageDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<ContentfulLink>>>;
  /** Returns all children nodes filtered by type contentfulPageDescriptionTextNode */
  childrenContentfulPageDescriptionTextNode?: Maybe<Array<Maybe<ContentfulPageDescriptionTextNode>>>;
  /**
   * Returns the first child node of type contentfulPageDescriptionTextNode or null
   * if there are no children of given type on this node
   */
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
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
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
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___name'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___version'
  | 'childrenMdx___frontmatter___status'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___version'
  | 'childMdx___frontmatter___status'
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
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulPageDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
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
  | 'sections___page___description___id'
  | 'sections___page___description___children'
  | 'sections___page___description___description'
  | 'sections___page___description___childrenMdx'
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
  | 'sections___page___link___name'
  | 'sections___page___link___label'
  | 'sections___page___link___component'
  | 'sections___page___link___type'
  | 'sections___page___link___spaceId'
  | 'sections___page___link___contentful_id'
  | 'sections___page___link___createdAt'
  | 'sections___page___link___updatedAt'
  | 'sections___page___link___node_locale'
  | 'sections___page___link___navigation'
  | 'sections___page___link___variant'
  | 'sections___page___link___icon'
  | 'sections___page___link___block'
  | 'sections___page___childrenContentfulPageDescriptionTextNode'
  | 'sections___page___childrenContentfulPageDescriptionTextNode___id'
  | 'sections___page___childrenContentfulPageDescriptionTextNode___children'
  | 'sections___page___childrenContentfulPageDescriptionTextNode___description'
  | 'sections___page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'sections___page___childContentfulPageDescriptionTextNode___id'
  | 'sections___page___childContentfulPageDescriptionTextNode___children'
  | 'sections___page___childContentfulPageDescriptionTextNode___description'
  | 'sections___page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'sections___spaceId'
  | 'sections___contentful_id'
  | 'sections___createdAt'
  | 'sections___updatedAt'
  | 'sections___sys___type'
  | 'sections___sys___revision'
  | 'sections___node_locale'
  | 'sections___variant'
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
  | 'description___childrenMdx'
  | 'description___childrenMdx___rawBody'
  | 'description___childrenMdx___fileAbsolutePath'
  | 'description___childrenMdx___frontmatter___title'
  | 'description___childrenMdx___frontmatter___name'
  | 'description___childrenMdx___frontmatter___description'
  | 'description___childrenMdx___frontmatter___tags'
  | 'description___childrenMdx___frontmatter___version'
  | 'description___childrenMdx___frontmatter___status'
  | 'description___childrenMdx___slug'
  | 'description___childrenMdx___body'
  | 'description___childrenMdx___excerpt'
  | 'description___childrenMdx___headings'
  | 'description___childrenMdx___headings___value'
  | 'description___childrenMdx___headings___depth'
  | 'description___childrenMdx___html'
  | 'description___childrenMdx___mdxAST'
  | 'description___childrenMdx___tableOfContents'
  | 'description___childrenMdx___timeToRead'
  | 'description___childrenMdx___wordCount___paragraphs'
  | 'description___childrenMdx___wordCount___sentences'
  | 'description___childrenMdx___wordCount___words'
  | 'description___childrenMdx___id'
  | 'description___childrenMdx___parent___id'
  | 'description___childrenMdx___parent___children'
  | 'description___childrenMdx___children'
  | 'description___childrenMdx___children___id'
  | 'description___childrenMdx___children___children'
  | 'description___childrenMdx___internal___content'
  | 'description___childrenMdx___internal___contentDigest'
  | 'description___childrenMdx___internal___description'
  | 'description___childrenMdx___internal___fieldOwners'
  | 'description___childrenMdx___internal___ignoreType'
  | 'description___childrenMdx___internal___mediaType'
  | 'description___childrenMdx___internal___owner'
  | 'description___childrenMdx___internal___type'
  | 'description___childMdx___rawBody'
  | 'description___childMdx___fileAbsolutePath'
  | 'description___childMdx___frontmatter___title'
  | 'description___childMdx___frontmatter___name'
  | 'description___childMdx___frontmatter___description'
  | 'description___childMdx___frontmatter___tags'
  | 'description___childMdx___frontmatter___version'
  | 'description___childMdx___frontmatter___status'
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
  | 'link___name'
  | 'link___label'
  | 'link___component'
  | 'link___type'
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
  | 'link___page___description___id'
  | 'link___page___description___children'
  | 'link___page___description___description'
  | 'link___page___description___childrenMdx'
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
  | 'link___page___link___name'
  | 'link___page___link___label'
  | 'link___page___link___component'
  | 'link___page___link___type'
  | 'link___page___link___spaceId'
  | 'link___page___link___contentful_id'
  | 'link___page___link___createdAt'
  | 'link___page___link___updatedAt'
  | 'link___page___link___node_locale'
  | 'link___page___link___navigation'
  | 'link___page___link___variant'
  | 'link___page___link___icon'
  | 'link___page___link___block'
  | 'link___page___childrenContentfulPageDescriptionTextNode'
  | 'link___page___childrenContentfulPageDescriptionTextNode___id'
  | 'link___page___childrenContentfulPageDescriptionTextNode___children'
  | 'link___page___childrenContentfulPageDescriptionTextNode___description'
  | 'link___page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'link___page___childContentfulPageDescriptionTextNode___id'
  | 'link___page___childContentfulPageDescriptionTextNode___children'
  | 'link___page___childContentfulPageDescriptionTextNode___description'
  | 'link___page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'link___spaceId'
  | 'link___contentful_id'
  | 'link___createdAt'
  | 'link___updatedAt'
  | 'link___sys___type'
  | 'link___sys___revision'
  | 'link___node_locale'
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
  | 'link___navigation___component'
  | 'link___navigation___links'
  | 'link___navigation___links___id'
  | 'link___navigation___links___children'
  | 'link___navigation___links___name'
  | 'link___navigation___links___label'
  | 'link___navigation___links___component'
  | 'link___navigation___links___type'
  | 'link___navigation___links___spaceId'
  | 'link___navigation___links___contentful_id'
  | 'link___navigation___links___createdAt'
  | 'link___navigation___links___updatedAt'
  | 'link___navigation___links___node_locale'
  | 'link___navigation___links___navigation'
  | 'link___navigation___links___variant'
  | 'link___navigation___links___icon'
  | 'link___navigation___links___block'
  | 'link___navigation___navigation'
  | 'link___navigation___navigation___id'
  | 'link___navigation___navigation___children'
  | 'link___navigation___navigation___name'
  | 'link___navigation___navigation___component'
  | 'link___navigation___navigation___links'
  | 'link___navigation___navigation___navigation'
  | 'link___navigation___navigation___spaceId'
  | 'link___navigation___navigation___contentful_id'
  | 'link___navigation___navigation___createdAt'
  | 'link___navigation___navigation___updatedAt'
  | 'link___navigation___navigation___node_locale'
  | 'link___navigation___navigation___subNavigation'
  | 'link___navigation___navigation___footer'
  | 'link___navigation___navigation___navbar'
  | 'link___navigation___spaceId'
  | 'link___navigation___contentful_id'
  | 'link___navigation___createdAt'
  | 'link___navigation___updatedAt'
  | 'link___navigation___sys___type'
  | 'link___navigation___sys___revision'
  | 'link___navigation___node_locale'
  | 'link___navigation___subNavigation'
  | 'link___navigation___subNavigation___id'
  | 'link___navigation___subNavigation___children'
  | 'link___navigation___subNavigation___name'
  | 'link___navigation___subNavigation___component'
  | 'link___navigation___subNavigation___links'
  | 'link___navigation___subNavigation___navigation'
  | 'link___navigation___subNavigation___spaceId'
  | 'link___navigation___subNavigation___contentful_id'
  | 'link___navigation___subNavigation___createdAt'
  | 'link___navigation___subNavigation___updatedAt'
  | 'link___navigation___subNavigation___node_locale'
  | 'link___navigation___subNavigation___subNavigation'
  | 'link___navigation___subNavigation___footer'
  | 'link___navigation___subNavigation___navbar'
  | 'link___navigation___footer'
  | 'link___navigation___footer___id'
  | 'link___navigation___footer___children'
  | 'link___navigation___footer___name'
  | 'link___navigation___footer___layout'
  | 'link___navigation___footer___spaceId'
  | 'link___navigation___footer___contentful_id'
  | 'link___navigation___footer___createdAt'
  | 'link___navigation___footer___updatedAt'
  | 'link___navigation___footer___node_locale'
  | 'link___navigation___navbar'
  | 'link___navigation___navbar___id'
  | 'link___navigation___navbar___children'
  | 'link___navigation___navbar___name'
  | 'link___navigation___navbar___layout'
  | 'link___navigation___navbar___spaceId'
  | 'link___navigation___navbar___contentful_id'
  | 'link___navigation___navbar___createdAt'
  | 'link___navigation___navbar___updatedAt'
  | 'link___navigation___navbar___node_locale'
  | 'link___variant'
  | 'link___icon'
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
  | 'link___block___type'
  | 'link___block___alignment'
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
  | 'link___block___text___id'
  | 'link___block___text___children'
  | 'link___block___text___text'
  | 'link___block___text___childrenMdx'
  | 'link___block___spaceId'
  | 'link___block___contentful_id'
  | 'link___block___createdAt'
  | 'link___block___updatedAt'
  | 'link___block___sys___type'
  | 'link___block___sys___revision'
  | 'link___block___node_locale'
  | 'link___block___variant'
  | 'link___block___link___id'
  | 'link___block___link___children'
  | 'link___block___link___name'
  | 'link___block___link___label'
  | 'link___block___link___component'
  | 'link___block___link___type'
  | 'link___block___link___spaceId'
  | 'link___block___link___contentful_id'
  | 'link___block___link___createdAt'
  | 'link___block___link___updatedAt'
  | 'link___block___link___node_locale'
  | 'link___block___link___navigation'
  | 'link___block___link___variant'
  | 'link___block___link___icon'
  | 'link___block___link___block'
  | 'link___block___childrenContentfulBlockTextTextNode'
  | 'link___block___childrenContentfulBlockTextTextNode___id'
  | 'link___block___childrenContentfulBlockTextTextNode___children'
  | 'link___block___childrenContentfulBlockTextTextNode___text'
  | 'link___block___childrenContentfulBlockTextTextNode___childrenMdx'
  | 'link___block___childContentfulBlockTextTextNode___id'
  | 'link___block___childContentfulBlockTextTextNode___children'
  | 'link___block___childContentfulBlockTextTextNode___text'
  | 'link___block___childContentfulBlockTextTextNode___childrenMdx'
  | 'childrenContentfulPageDescriptionTextNode'
  | 'childrenContentfulPageDescriptionTextNode___id'
  | 'childrenContentfulPageDescriptionTextNode___parent___id'
  | 'childrenContentfulPageDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulPageDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulPageDescriptionTextNode___parent___children'
  | 'childrenContentfulPageDescriptionTextNode___parent___children___id'
  | 'childrenContentfulPageDescriptionTextNode___parent___children___children'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulPageDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulPageDescriptionTextNode___children'
  | 'childrenContentfulPageDescriptionTextNode___children___id'
  | 'childrenContentfulPageDescriptionTextNode___children___parent___id'
  | 'childrenContentfulPageDescriptionTextNode___children___parent___children'
  | 'childrenContentfulPageDescriptionTextNode___children___children'
  | 'childrenContentfulPageDescriptionTextNode___children___children___id'
  | 'childrenContentfulPageDescriptionTextNode___children___children___children'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___content'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___description'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulPageDescriptionTextNode___children___internal___type'
  | 'childrenContentfulPageDescriptionTextNode___internal___content'
  | 'childrenContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulPageDescriptionTextNode___internal___description'
  | 'childrenContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulPageDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulPageDescriptionTextNode___internal___owner'
  | 'childrenContentfulPageDescriptionTextNode___internal___type'
  | 'childrenContentfulPageDescriptionTextNode___description'
  | 'childrenContentfulPageDescriptionTextNode___sys___type'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___rawBody'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___title'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___name'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___description'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___tags'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___version'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___frontmatter___status'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___slug'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___body'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___excerpt'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___headings'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___headings___value'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___headings___depth'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___html'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___mdxAST'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___tableOfContents'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___timeToRead'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___wordCount___paragraphs'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___wordCount___sentences'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___wordCount___words'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___id'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___parent___id'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___parent___children'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___children'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___children___id'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___children___children'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___content'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___contentDigest'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___description'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___fieldOwners'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___ignoreType'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___mediaType'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___owner'
  | 'childrenContentfulPageDescriptionTextNode___childrenMdx___internal___type'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___title'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___name'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___description'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___tags'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___version'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___frontmatter___status'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___slug'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___body'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___headings'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___headings___value'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___headings___depth'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___html'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___wordCount___paragraphs'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___wordCount___sentences'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___wordCount___words'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___id'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___parent___id'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___parent___children'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___children'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___children___id'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___children___children'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___content'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___contentDigest'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___description'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___fieldOwners'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___ignoreType'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___mediaType'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___owner'
  | 'childrenContentfulPageDescriptionTextNode___childMdx___internal___type'
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
  | 'childContentfulPageDescriptionTextNode___childrenMdx'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___rawBody'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___title'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___name'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___description'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___tags'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___version'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___frontmatter___status'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___slug'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___body'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___excerpt'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___headings'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___headings___value'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___headings___depth'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___html'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___mdxAST'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___tableOfContents'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___timeToRead'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___wordCount___paragraphs'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___wordCount___sentences'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___wordCount___words'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___id'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___parent___id'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___parent___children'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___children'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___children___id'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___children___children'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___content'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___contentDigest'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___description'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___fieldOwners'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___ignoreType'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___mediaType'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___owner'
  | 'childContentfulPageDescriptionTextNode___childrenMdx___internal___type'
  | 'childContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'childContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___title'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___name'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___description'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___tags'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___version'
  | 'childContentfulPageDescriptionTextNode___childMdx___frontmatter___status'
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
  description?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<ContentfulLinkFilterListInput>;
  childrenContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNodeFilterListInput>;
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
  blocks?: Maybe<Array<Maybe<ContentfulBlockContentfulBlockImageUnion>>>;
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
  | 'page___sections___page___spaceId'
  | 'page___sections___page___contentful_id'
  | 'page___sections___page___createdAt'
  | 'page___sections___page___updatedAt'
  | 'page___sections___page___node_locale'
  | 'page___sections___page___link'
  | 'page___sections___page___childrenContentfulPageDescriptionTextNode'
  | 'page___sections___spaceId'
  | 'page___sections___contentful_id'
  | 'page___sections___createdAt'
  | 'page___sections___updatedAt'
  | 'page___sections___sys___type'
  | 'page___sections___sys___revision'
  | 'page___sections___node_locale'
  | 'page___sections___variant'
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
  | 'page___description___childrenMdx'
  | 'page___description___childrenMdx___rawBody'
  | 'page___description___childrenMdx___fileAbsolutePath'
  | 'page___description___childrenMdx___slug'
  | 'page___description___childrenMdx___body'
  | 'page___description___childrenMdx___excerpt'
  | 'page___description___childrenMdx___headings'
  | 'page___description___childrenMdx___html'
  | 'page___description___childrenMdx___mdxAST'
  | 'page___description___childrenMdx___tableOfContents'
  | 'page___description___childrenMdx___timeToRead'
  | 'page___description___childrenMdx___id'
  | 'page___description___childrenMdx___children'
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
  | 'page___link___name'
  | 'page___link___label'
  | 'page___link___component'
  | 'page___link___type'
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
  | 'page___link___page___childrenContentfulPageDescriptionTextNode'
  | 'page___link___spaceId'
  | 'page___link___contentful_id'
  | 'page___link___createdAt'
  | 'page___link___updatedAt'
  | 'page___link___sys___type'
  | 'page___link___sys___revision'
  | 'page___link___node_locale'
  | 'page___link___navigation'
  | 'page___link___navigation___id'
  | 'page___link___navigation___children'
  | 'page___link___navigation___name'
  | 'page___link___navigation___component'
  | 'page___link___navigation___links'
  | 'page___link___navigation___navigation'
  | 'page___link___navigation___spaceId'
  | 'page___link___navigation___contentful_id'
  | 'page___link___navigation___createdAt'
  | 'page___link___navigation___updatedAt'
  | 'page___link___navigation___node_locale'
  | 'page___link___navigation___subNavigation'
  | 'page___link___navigation___footer'
  | 'page___link___navigation___navbar'
  | 'page___link___variant'
  | 'page___link___icon'
  | 'page___link___block'
  | 'page___link___block___id'
  | 'page___link___block___children'
  | 'page___link___block___name'
  | 'page___link___block___type'
  | 'page___link___block___alignment'
  | 'page___link___block___section'
  | 'page___link___block___spaceId'
  | 'page___link___block___contentful_id'
  | 'page___link___block___createdAt'
  | 'page___link___block___updatedAt'
  | 'page___link___block___node_locale'
  | 'page___link___block___variant'
  | 'page___link___block___childrenContentfulBlockTextTextNode'
  | 'page___childrenContentfulPageDescriptionTextNode'
  | 'page___childrenContentfulPageDescriptionTextNode___id'
  | 'page___childrenContentfulPageDescriptionTextNode___parent___id'
  | 'page___childrenContentfulPageDescriptionTextNode___parent___children'
  | 'page___childrenContentfulPageDescriptionTextNode___children'
  | 'page___childrenContentfulPageDescriptionTextNode___children___id'
  | 'page___childrenContentfulPageDescriptionTextNode___children___children'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___content'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___contentDigest'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___description'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___fieldOwners'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___ignoreType'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___mediaType'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___owner'
  | 'page___childrenContentfulPageDescriptionTextNode___internal___type'
  | 'page___childrenContentfulPageDescriptionTextNode___description'
  | 'page___childrenContentfulPageDescriptionTextNode___sys___type'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___rawBody'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___slug'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___body'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___excerpt'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___headings'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___html'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___mdxAST'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___tableOfContents'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___timeToRead'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___id'
  | 'page___childrenContentfulPageDescriptionTextNode___childrenMdx___children'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___rawBody'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___fileAbsolutePath'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___slug'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___body'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___excerpt'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___headings'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___html'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___mdxAST'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___tableOfContents'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___timeToRead'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___id'
  | 'page___childrenContentfulPageDescriptionTextNode___childMdx___children'
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
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___rawBody'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___fileAbsolutePath'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___slug'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___body'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___excerpt'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___headings'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___html'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___mdxAST'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___tableOfContents'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___timeToRead'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___id'
  | 'page___childContentfulPageDescriptionTextNode___childrenMdx___children'
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
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
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
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
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
  | 'childImageSharp___gatsbyImageData'
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
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___name'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___version'
  | 'childrenMdx___frontmatter___status'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___version'
  | 'childMdx___frontmatter___status'
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
  | 'childMdx___internal___type'
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
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
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
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
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
  gatsbyImageData: Scalars['JSON'];
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


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
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
  | 'gatsbyImageData'
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
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
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

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
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
  | 'frontmatter___description'
  | 'frontmatter___tags'
  | 'frontmatter___version'
  | 'frontmatter___status'
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

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
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

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
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
  contentfulBlockSolutionTextTextNode?: Maybe<ContentfulBlockSolutionTextTextNode>;
  allContentfulBlockSolutionTextTextNode: ContentfulBlockSolutionTextTextNodeConnection;
  contentfulBlockSolution?: Maybe<ContentfulBlockSolution>;
  allContentfulBlockSolution: ContentfulBlockSolutionConnection;
  contentfulNavbar?: Maybe<ContentfulNavbar>;
  allContentfulNavbar: ContentfulNavbarConnection;
  contentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNode>;
  allContentfulBlockTextTextNode: ContentfulBlockTextTextNodeConnection;
  contentfulBlock?: Maybe<ContentfulBlock>;
  allContentfulBlock: ContentfulBlockConnection;
  contentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNode>;
  allContentfulPageDescriptionTextNode: ContentfulPageDescriptionTextNodeConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulSection?: Maybe<ContentfulSection>;
  allContentfulSection: ContentfulSectionConnection;
  contentfulBlockImage?: Maybe<ContentfulBlockImage>;
  allContentfulBlockImage: ContentfulBlockImageConnection;
  contentfulFooter?: Maybe<ContentfulFooter>;
  allContentfulFooter: ContentfulFooterConnection;
  contentfulNavigation?: Maybe<ContentfulNavigation>;
  allContentfulNavigation: ContentfulNavigationConnection;
  contentfulCompanyInfo?: Maybe<ContentfulCompanyInfo>;
  allContentfulCompanyInfo: ContentfulCompanyInfoConnection;
  contentfulCompanyAddress?: Maybe<ContentfulCompanyAddress>;
  allContentfulCompanyAddress: ContentfulCompanyAddressConnection;
  contentfulMediaCollection?: Maybe<ContentfulMediaCollection>;
  allContentfulMediaCollection: ContentfulMediaCollectionConnection;
  contentfulMedia?: Maybe<ContentfulMedia>;
  allContentfulMedia: ContentfulMediaConnection;
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
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
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


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
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


export type QueryContentfulBlockSolutionTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  text?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSolutionTextTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulBlockSolutionTextTextNodeArgs = {
  filter?: Maybe<ContentfulBlockSolutionTextTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockSolutionTextTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockSolutionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  alignment?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<ContentfulBlockSolutionTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSolutionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childrenContentfulBlockSolutionTextTextNode?: Maybe<ContentfulBlockSolutionTextTextNodeFilterListInput>;
  childContentfulBlockSolutionTextTextNode?: Maybe<ContentfulBlockSolutionTextTextNodeFilterInput>;
};


export type QueryAllContentfulBlockSolutionArgs = {
  filter?: Maybe<ContentfulBlockSolutionFilterInput>;
  sort?: Maybe<ContentfulBlockSolutionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNavbarArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavbarSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulNavbarArgs = {
  filter?: Maybe<ContentfulNavbarFilterInput>;
  sort?: Maybe<ContentfulNavbarSortInput>;
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
  childrenMdx?: Maybe<MdxFilterListInput>;
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
  type?: Maybe<StringQueryOperatorInput>;
  alignment?: Maybe<StringQueryOperatorInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  text?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<ContentfulLinkFilterInput>;
  childrenContentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNodeFilterListInput>;
  childContentfulBlockTextTextNode?: Maybe<ContentfulBlockTextTextNodeFilterInput>;
};


export type QueryAllContentfulBlockArgs = {
  filter?: Maybe<ContentfulBlockFilterInput>;
  sort?: Maybe<ContentfulBlockSortInput>;
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
  childrenMdx?: Maybe<MdxFilterListInput>;
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
  description?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<ContentfulLinkFilterListInput>;
  childrenContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNodeFilterListInput>;
  childContentfulPageDescriptionTextNode?: Maybe<ContentfulPageDescriptionTextNodeFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
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


export type QueryContentfulBlockImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  media?: Maybe<ContentfulMediaFilterInput>;
  section?: Maybe<ContentfulSectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockImageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockImageArgs = {
  filter?: Maybe<ContentfulBlockImageFilterInput>;
  sort?: Maybe<ContentfulBlockImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulFooterArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterInput>;
  companyInfo?: Maybe<ContentfulCompanyInfoFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFooterSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulFooterArgs = {
  filter?: Maybe<ContentfulFooterFilterInput>;
  sort?: Maybe<ContentfulFooterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNavigationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<ContentfulLinkFilterListInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  subNavigation?: Maybe<ContentfulNavigationFilterListInput>;
  footer?: Maybe<ContentfulFooterFilterListInput>;
  navbar?: Maybe<ContentfulNavbarFilterListInput>;
};


export type QueryAllContentfulNavigationArgs = {
  filter?: Maybe<ContentfulNavigationFilterInput>;
  sort?: Maybe<ContentfulNavigationSortInput>;
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
  copyright?: Maybe<StringQueryOperatorInput>;
  linkedinPageURL?: Maybe<StringQueryOperatorInput>;
  facebookPageURL?: Maybe<StringQueryOperatorInput>;
  instagramPageURL?: Maybe<StringQueryOperatorInput>;
  twitterPageURL?: Maybe<StringQueryOperatorInput>;
  metadataTwitterSite?: Maybe<StringQueryOperatorInput>;
  metadataTwitterCreator?: Maybe<StringQueryOperatorInput>;
  metadataSiteName?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<ContentfulFooterFilterListInput>;
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
  phoneNoFees?: Maybe<StringQueryOperatorInput>;
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
  medias?: Maybe<ContentfulMediaFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaCollectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulMediaCollectionArgs = {
  filter?: Maybe<ContentfulMediaCollectionFilterInput>;
  sort?: Maybe<ContentfulMediaCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  backgroundPositionMobileY?: Maybe<StringQueryOperatorInput>;
  backgroundPositionY?: Maybe<StringQueryOperatorInput>;
  mediaMobile?: Maybe<ContentfulAssetFilterInput>;
  media?: Maybe<ContentfulAssetFilterInput>;
  mediacollection?: Maybe<ContentfulMediaCollectionFilterListInput>;
  blockimage?: Maybe<ContentfulBlockImageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMediaSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulMediaArgs = {
  filter?: Maybe<ContentfulMediaFilterInput>;
  sort?: Maybe<ContentfulMediaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLinkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLinkSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  variant?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  block?: Maybe<ContentfulBlockFilterListInput>;
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
  | 'flags___ENABLE_GATSBY_REFRESH_ENDPOINT'
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
  ENABLE_GATSBY_REFRESH_ENDPOINT?: Maybe<Scalars['Boolean']>;
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
  ENABLE_GATSBY_REFRESH_ENDPOINT?: Maybe<BooleanQueryOperatorInput>;
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
  | 'pluginCreator___pluginOptions___remarkPlugins___aliasDivider'
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
  | 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth'
  | 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal'
  | 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle'
  | 'pluginOptions___gatsbyRemarkPlugins___options___destinationDir'
  | 'pluginOptions___remarkPlugins'
  | 'pluginOptions___remarkPlugins___aliasDivider'
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
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  destinationDir?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  destinationDir?: Maybe<StringQueryOperatorInput>;
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
  aliasDivider?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  rel?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsRemarkPluginsFilterInput = {
  aliasDivider?: Maybe<StringQueryOperatorInput>;
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

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type SiteMetadataFragment = { siteMetadata?: Maybe<(
    Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl' | 'siteEnv'>
    & { languages?: Maybe<Pick<SiteSiteMetadataLanguages, 'defaultLangKey' | 'langs'>> }
  )> };

export type CompanyInfoFragment = Pick<ContentfulCompanyInfo, 'companyName' | 'linkedinPageURL' | 'facebookPageURL' | 'instagramPageURL' | 'twitterPageURL' | 'metadataTwitterSite' | 'metadataTwitterCreator' | 'metadataSiteName' | 'copyright'>;

export type MobileFluidImageFragment = { fluid?: Maybe<Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> };

export type DesktopFluidImageFragment = { fluid?: Maybe<Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> };

export type MediaCollectionFragment = (
  Pick<ContentfulMediaCollection, 'name'>
  & { medias?: Maybe<Array<Maybe<{ media?: Maybe<(
      { file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }
      & MobileFluidImageFragment
    )> }>>> }
);

export type PageFragmentFragment = (
  Pick<ContentfulPage, 'id' | 'name' | 'node_locale' | 'title' | 'slug'>
  & { description?: Maybe<(
    Pick<ContentfulPageDescriptionTextNode, 'description'>
    & { childMdx?: Maybe<Pick<Mdx, 'body'>> }
  )>, sections?: Maybe<Array<Maybe<SectionFragment>>> }
);

export type BlockSolutionFragment = (
  Pick<ContentfulBlockSolution, 'id' | 'variant' | 'type' | 'alignment'>
  & { text?: Maybe<(
    Pick<ContentfulBlockSolutionTextTextNode, 'text'>
    & { childMdx?: Maybe<Pick<Mdx, 'body'>> }
  )> }
);

export type BlockFragment = (
  Pick<ContentfulBlock, 'id' | 'name' | 'variant' | 'type'>
  & { text?: Maybe<(
    Pick<ContentfulBlockTextTextNode, 'text'>
    & { childMdx?: Maybe<Pick<Mdx, 'body'>> }
  )>, link?: Maybe<(
    Pick<ContentfulLink, 'type' | 'label'>
    & { page?: Maybe<Pick<ContentfulPage, 'slug'>> }
  )> }
);

export type CompanyAddressFragment = Pick<ContentfulCompanyAddress, 'name' | 'phone' | 'email' | 'city' | 'postalCode' | 'provinceState' | 'websiteURL' | 'addressLine1'>;

export type LinkFragment = (
  Pick<ContentfulLink, 'name' | 'type' | 'label'>
  & { page?: Maybe<Pick<ContentfulPage, 'id' | 'name' | 'slug'>> }
);

export type SectionFragment = (
  Pick<ContentfulSection, 'id' | 'node_locale' | 'name' | 'variant' | 'layout'>
  & { blocks?: Maybe<Array<Maybe<BlockFragment>>> }
);

export type PageQueryVariables = Exact<{
  pageId?: Maybe<Scalars['String']>;
}>;


export type PageQuery = { site?: Maybe<SiteMetadataFragment>, companyInfo?: Maybe<CompanyInfoFragment>, page?: Maybe<PageFragmentFragment> };
