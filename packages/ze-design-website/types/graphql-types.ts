/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteFlags = {
  readonly FAST_DEV: Maybe<Scalars['Boolean']>;
  readonly DEV_SSR: Maybe<Scalars['Boolean']>;
  readonly PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<Scalars['Boolean']>;
  readonly PARALLEL_SOURCING: Maybe<Scalars['Boolean']>;
  readonly PARALLEL_QUERY_RUNNING: Maybe<Scalars['Boolean']>;
  readonly LMDB_STORE: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly siteEnv: Maybe<Scalars['String']>;
  readonly siteVersion: Maybe<Scalars['String']>;
  readonly languages: Maybe<SiteSiteMetadataLanguages>;
};

type SiteSiteMetadataLanguages = {
  readonly langs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly defaultLangKey: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePluginPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly decoding: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly ignore: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly host: Maybe<Scalars['String']>;
  readonly sitemap: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
  readonly env: Maybe<SitePluginPluginOptionsEnv>;
  readonly source: Maybe<Scalars['String']>;
  readonly destination: Maybe<Scalars['String']>;
  readonly purge: Maybe<Scalars['Boolean']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly packageName: Maybe<Scalars['String']>;
  readonly pluginName: Maybe<Scalars['String']>;
  readonly renderPages: Maybe<Scalars['Boolean']>;
  readonly pagesPath: Maybe<Scalars['String']>;
  readonly pagesPathPrefix: Maybe<Scalars['String']>;
  readonly renderMarkdownPages: Maybe<Scalars['Boolean']>;
  readonly markdownPagesPath: Maybe<Scalars['String']>;
  readonly markdownPagesPathPrefix: Maybe<Scalars['String']>;
  readonly renderDocsPages: Maybe<Scalars['Boolean']>;
  readonly docsPagesPath: Maybe<Scalars['String']>;
  readonly docsPagesPathPrefix: Maybe<Scalars['String']>;
  readonly renderDesignSystemPages: Maybe<Scalars['Boolean']>;
  readonly designSystemPagesPath: Maybe<Scalars['String']>;
  readonly designSystemPagesPathPrefix: Maybe<Scalars['String']>;
  readonly renderCoreDocsPages: Maybe<Scalars['Boolean']>;
  readonly coreDocsPagesPath: Maybe<Scalars['String']>;
  readonly coreDocsPagesPathPrefix: Maybe<Scalars['String']>;
  readonly renderUnpublishedPages: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly gatsbyRemarkPlugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  readonly remarkPlugins: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsRemarkPlugins>>>>>;
  readonly rehypePlugins: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsRehypePlugins>>>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptions>;
  readonly postCssPlugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPostCssPlugins>>>;
  readonly inlineSvgOptions: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsInlineSvgOptions>>>;
  readonly urlSvgOptions: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsUrlSvgOptions>>>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEnv = {
  readonly local: Maybe<SitePluginPluginOptionsEnvLocal>;
  readonly dev: Maybe<SitePluginPluginOptionsEnvDev>;
  readonly staging: Maybe<SitePluginPluginOptionsEnvStaging>;
  readonly production: Maybe<SitePluginPluginOptionsEnvProduction>;
};

type SitePluginPluginOptionsEnvLocal = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvLocalPolicy>>>;
};

type SitePluginPluginOptionsEnvLocalPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly disallow: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsEnvDev = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvDevPolicy>>>;
};

type SitePluginPluginOptionsEnvDevPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly disallow: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsEnvStaging = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvStagingPolicy>>>;
};

type SitePluginPluginOptionsEnvStagingPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly disallow: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsEnvProduction = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>;
};

type SitePluginPluginOptionsEnvProductionPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly allow: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly destinationDir: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsRemarkPlugins = {
  readonly aliasDivider: Maybe<Scalars['String']>;
  readonly target: Maybe<Scalars['String']>;
  readonly rel: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsRehypePlugins = {
  readonly properties: Maybe<SitePluginPluginOptionsRehypePluginsProperties>;
  readonly content: Maybe<SitePluginPluginOptionsRehypePluginsContent>;
  readonly behavior: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsRehypePluginsProperties = {
  readonly className: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsRehypePluginsContent = {
  readonly type: Maybe<Scalars['String']>;
  readonly tagName: Maybe<Scalars['String']>;
  readonly properties: Maybe<SitePluginPluginOptionsRehypePluginsContentProperties>;
  readonly children: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsRehypePluginsContentChildren>>>;
};

type SitePluginPluginOptionsRehypePluginsContentProperties = {
  readonly className: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsRehypePluginsContentChildren = {
  readonly type: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsCssLoaderOptions = {
  readonly module: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsPostCssPlugins = {
  readonly postcssPlugin: Maybe<Scalars['String']>;
  readonly options: Maybe<SitePluginPluginOptionsPostCssPluginsOptions>;
};

type SitePluginPluginOptionsPostCssPluginsOptions = {
  readonly grid: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsInlineSvgOptions = {
  readonly native: Maybe<Scalars['Boolean']>;
  readonly ref: Maybe<Scalars['Boolean']>;
  readonly svgoConfig: Maybe<SitePluginPluginOptionsInlineSvgOptionsSvgoConfig>;
};

type SitePluginPluginOptionsInlineSvgOptionsSvgoConfig = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsInlineSvgOptionsSvgoConfigPlugins>>>;
};

type SitePluginPluginOptionsInlineSvgOptionsSvgoConfigPlugins = {
  readonly removeStyleElement: Maybe<Scalars['Boolean']>;
  readonly minifyStyles: Maybe<Scalars['Boolean']>;
  readonly inlineStyles: Maybe<Scalars['Boolean']>;
  readonly mergeStyles: Maybe<Scalars['Boolean']>;
  readonly convertPathData: Maybe<Scalars['Boolean']>;
  readonly convertShapeToPath: Maybe<Scalars['Boolean']>;
  readonly mergePaths: Maybe<Scalars['Boolean']>;
  readonly removeViewBox: Maybe<Scalars['Boolean']>;
  readonly cleanupIDs: Maybe<Scalars['Boolean']>;
  readonly prefixIds: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsUrlSvgOptions = {
  readonly native: Maybe<Scalars['Boolean']>;
  readonly ref: Maybe<Scalars['Boolean']>;
  readonly svgoConfig: Maybe<SitePluginPluginOptionsUrlSvgOptionsSvgoConfig>;
  readonly urlLoaderOptions: Maybe<SitePluginPluginOptionsUrlSvgOptionsUrlLoaderOptions>;
};

type SitePluginPluginOptionsUrlSvgOptionsSvgoConfig = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsUrlSvgOptionsSvgoConfigPlugins>>>;
};

type SitePluginPluginOptionsUrlSvgOptionsSvgoConfigPlugins = {
  readonly removeStyleElement: Maybe<Scalars['Boolean']>;
  readonly minifyStyles: Maybe<Scalars['Boolean']>;
  readonly inlineStyles: Maybe<Scalars['Boolean']>;
  readonly mergeStyles: Maybe<Scalars['Boolean']>;
  readonly convertPathData: Maybe<Scalars['Boolean']>;
  readonly convertShapeToPath: Maybe<Scalars['Boolean']>;
  readonly mergePaths: Maybe<Scalars['Boolean']>;
  readonly removeViewBox: Maybe<Scalars['Boolean']>;
  readonly cleanupIDs: Maybe<Scalars['Boolean']>;
  readonly prefixIds: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsUrlSvgOptionsUrlLoaderOptions = {
  readonly limit: Maybe<Scalars['Int']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePageContext = Node & {
  readonly id: Scalars['ID'];
  readonly siteMetadata: Maybe<SitePageMetadata>;
  readonly name: Maybe<Scalars['String']>;
  readonly fileId: Maybe<Scalars['String']>;
  readonly sourceInstance: Maybe<Scalars['String']>;
  readonly displayName: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly absolutePath: Maybe<Scalars['String']>;
  readonly alternateLocales: Maybe<ReadonlyArray<Maybe<SitePageAlternateLocale>>>;
  readonly relativePath: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePageAlternateLocale = {
  readonly locale: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
};

type SitePageMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteEnv: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly siteRepositoryUrl: Maybe<Scalars['String']>;
  readonly siteVersion: Maybe<Scalars['String']>;
  readonly siteCopyright: Maybe<Scalars['String']>;
  readonly languages: Maybe<SiteLanguages>;
};

type SiteLanguages = {
  readonly defaultLangKey: Maybe<Scalars['String']>;
  readonly langs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
  readonly subject: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly published: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly deprecated: Maybe<Scalars['String']>;
  readonly editPageUrl: Maybe<Scalars['String']>;
  readonly nextPageLabel: Maybe<Scalars['String']>;
  readonly nextPageUrl: Maybe<Scalars['String']>;
  readonly componentStatus: Maybe<Scalars['String']>;
  readonly componentVersion: Maybe<Scalars['String']>;
  readonly componentTests: Maybe<Scalars['String']>;
};

type Mdx = Node & {
  readonly id: Scalars['ID'];
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly exports: Maybe<MdxExports>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};


type MdxExports = {
  readonly youtubeDocLink: Maybe<Scalars['String']>;
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePageContext: Maybe<SitePageContext>;
  readonly allSitePageContext: SitePageContextConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageContextArgs = {
  id: Maybe<StringQueryOperatorInput>;
  siteMetadata: Maybe<SitePageMetadataFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  fileId: Maybe<StringQueryOperatorInput>;
  sourceInstance: Maybe<StringQueryOperatorInput>;
  displayName: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  layout: Maybe<StringQueryOperatorInput>;
  template: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  alternateLocales: Maybe<SitePageAlternateLocaleFilterListInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageContextArgs = {
  filter: Maybe<SitePageContextFilterInput>;
  sort: Maybe<SitePageContextSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  id: Maybe<StringQueryOperatorInput>;
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  exports: Maybe<MdxExportsFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly exports: Maybe<MdxExportsFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subject: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly published: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly deprecated: Maybe<StringQueryOperatorInput>;
  readonly editPageUrl: Maybe<StringQueryOperatorInput>;
  readonly nextPageLabel: Maybe<StringQueryOperatorInput>;
  readonly nextPageUrl: Maybe<StringQueryOperatorInput>;
  readonly componentStatus: Maybe<StringQueryOperatorInput>;
  readonly componentVersion: Maybe<StringQueryOperatorInput>;
  readonly componentTests: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxExportsFilterInput = {
  readonly youtubeDocLink: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
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
  | 'childrenMdx'
  | 'childrenMdx.id'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.subject'
  | 'childrenMdx.frontmatter.tags'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.version'
  | 'childrenMdx.frontmatter.published'
  | 'childrenMdx.frontmatter.status'
  | 'childrenMdx.frontmatter.slug'
  | 'childrenMdx.frontmatter.layout'
  | 'childrenMdx.frontmatter.template'
  | 'childrenMdx.frontmatter.locale'
  | 'childrenMdx.frontmatter.deprecated'
  | 'childrenMdx.frontmatter.editPageUrl'
  | 'childrenMdx.frontmatter.nextPageLabel'
  | 'childrenMdx.frontmatter.nextPageUrl'
  | 'childrenMdx.frontmatter.componentStatus'
  | 'childrenMdx.frontmatter.componentVersion'
  | 'childrenMdx.frontmatter.componentTests'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.exports.youtubeDocLink'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.id'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.subject'
  | 'childMdx.frontmatter.tags'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.version'
  | 'childMdx.frontmatter.published'
  | 'childMdx.frontmatter.status'
  | 'childMdx.frontmatter.slug'
  | 'childMdx.frontmatter.layout'
  | 'childMdx.frontmatter.template'
  | 'childMdx.frontmatter.locale'
  | 'childMdx.frontmatter.deprecated'
  | 'childMdx.frontmatter.editPageUrl'
  | 'childMdx.frontmatter.nextPageLabel'
  | 'childMdx.frontmatter.nextPageUrl'
  | 'childMdx.frontmatter.componentStatus'
  | 'childMdx.frontmatter.componentVersion'
  | 'childMdx.frontmatter.componentTests'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.exports.youtubeDocLink'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
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
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly siteEnv: Maybe<StringQueryOperatorInput>;
  readonly siteVersion: Maybe<StringQueryOperatorInput>;
  readonly languages: Maybe<SiteSiteMetadataLanguagesFilterInput>;
};

type SiteSiteMetadataLanguagesFilterInput = {
  readonly langs: Maybe<StringQueryOperatorInput>;
  readonly defaultLangKey: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
  readonly DEV_SSR: Maybe<BooleanQueryOperatorInput>;
  readonly PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_SOURCING: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_QUERY_RUNNING: Maybe<BooleanQueryOperatorInput>;
  readonly LMDB_STORE: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.siteEnv'
  | 'siteMetadata.siteVersion'
  | 'siteMetadata.languages.langs'
  | 'siteMetadata.languages.defaultLangKey'
  | 'port'
  | 'host'
  | 'flags.FAST_DEV'
  | 'flags.DEV_SSR'
  | 'flags.PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'flags.PARALLEL_SOURCING'
  | 'flags.PARALLEL_QUERY_RUNNING'
  | 'flags.LMDB_STORE'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly siteMetadata: Maybe<SitePageMetadataFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly fileId: Maybe<StringQueryOperatorInput>;
  readonly sourceInstance: Maybe<StringQueryOperatorInput>;
  readonly displayName: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly alternateLocales: Maybe<SitePageAlternateLocaleFilterListInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteEnv: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly siteRepositoryUrl: Maybe<StringQueryOperatorInput>;
  readonly siteVersion: Maybe<StringQueryOperatorInput>;
  readonly siteCopyright: Maybe<StringQueryOperatorInput>;
  readonly languages: Maybe<SiteLanguagesFilterInput>;
};

type SiteLanguagesFilterInput = {
  readonly defaultLangKey: Maybe<StringQueryOperatorInput>;
  readonly langs: Maybe<StringQueryOperatorInput>;
};

type SitePageAlternateLocaleFilterListInput = {
  readonly elemMatch: Maybe<SitePageAlternateLocaleFilterInput>;
};

type SitePageAlternateLocaleFilterInput = {
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly decoding: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly ignore: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly sitemap: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly env: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  readonly source: Maybe<StringQueryOperatorInput>;
  readonly destination: Maybe<StringQueryOperatorInput>;
  readonly purge: Maybe<BooleanQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly packageName: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly renderPages: Maybe<BooleanQueryOperatorInput>;
  readonly pagesPath: Maybe<StringQueryOperatorInput>;
  readonly pagesPathPrefix: Maybe<StringQueryOperatorInput>;
  readonly renderMarkdownPages: Maybe<BooleanQueryOperatorInput>;
  readonly markdownPagesPath: Maybe<StringQueryOperatorInput>;
  readonly markdownPagesPathPrefix: Maybe<StringQueryOperatorInput>;
  readonly renderDocsPages: Maybe<BooleanQueryOperatorInput>;
  readonly docsPagesPath: Maybe<StringQueryOperatorInput>;
  readonly docsPagesPathPrefix: Maybe<StringQueryOperatorInput>;
  readonly renderDesignSystemPages: Maybe<BooleanQueryOperatorInput>;
  readonly designSystemPagesPath: Maybe<StringQueryOperatorInput>;
  readonly designSystemPagesPathPrefix: Maybe<StringQueryOperatorInput>;
  readonly renderCoreDocsPages: Maybe<BooleanQueryOperatorInput>;
  readonly coreDocsPagesPath: Maybe<StringQueryOperatorInput>;
  readonly coreDocsPagesPathPrefix: Maybe<StringQueryOperatorInput>;
  readonly renderUnpublishedPages: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly gatsbyRemarkPlugins: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  readonly remarkPlugins: Maybe<SitePluginPluginOptionsRemarkPluginsFilterListInput>;
  readonly rehypePlugins: Maybe<SitePluginPluginOptionsRehypePluginsFilterListInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly cssLoaderOptions: Maybe<SitePluginPluginOptionsCssLoaderOptionsFilterInput>;
  readonly postCssPlugins: Maybe<SitePluginPluginOptionsPostCssPluginsFilterListInput>;
  readonly inlineSvgOptions: Maybe<SitePluginPluginOptionsInlineSvgOptionsFilterListInput>;
  readonly urlSvgOptions: Maybe<SitePluginPluginOptionsUrlSvgOptionsFilterListInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvFilterInput = {
  readonly local: Maybe<SitePluginPluginOptionsEnvLocalFilterInput>;
  readonly dev: Maybe<SitePluginPluginOptionsEnvDevFilterInput>;
  readonly staging: Maybe<SitePluginPluginOptionsEnvStagingFilterInput>;
  readonly production: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>;
};

type SitePluginPluginOptionsEnvLocalFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvLocalPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvLocalPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvLocalPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvLocalPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly disallow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvDevFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvDevPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvDevPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvDevPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvDevPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly disallow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvStagingFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvStagingPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvStagingPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvStagingPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvStagingPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly disallow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvProductionFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly allow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly destinationDir: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsRemarkPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsRemarkPluginsFilterInput>;
};

type SitePluginPluginOptionsRemarkPluginsFilterInput = {
  readonly aliasDivider: Maybe<StringQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly rel: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsRehypePluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsRehypePluginsFilterInput>;
};

type SitePluginPluginOptionsRehypePluginsFilterInput = {
  readonly properties: Maybe<SitePluginPluginOptionsRehypePluginsPropertiesFilterInput>;
  readonly content: Maybe<SitePluginPluginOptionsRehypePluginsContentFilterInput>;
  readonly behavior: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsRehypePluginsPropertiesFilterInput = {
  readonly className: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsRehypePluginsContentFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly tagName: Maybe<StringQueryOperatorInput>;
  readonly properties: Maybe<SitePluginPluginOptionsRehypePluginsContentPropertiesFilterInput>;
  readonly children: Maybe<SitePluginPluginOptionsRehypePluginsContentChildrenFilterListInput>;
};

type SitePluginPluginOptionsRehypePluginsContentPropertiesFilterInput = {
  readonly className: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsRehypePluginsContentChildrenFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsRehypePluginsContentChildrenFilterInput>;
};

type SitePluginPluginOptionsRehypePluginsContentChildrenFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsCssLoaderOptionsFilterInput = {
  readonly module: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsPostCssPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPostCssPluginsFilterInput>;
};

type SitePluginPluginOptionsPostCssPluginsFilterInput = {
  readonly postcssPlugin: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsPostCssPluginsOptionsFilterInput>;
};

type SitePluginPluginOptionsPostCssPluginsOptionsFilterInput = {
  readonly grid: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsInlineSvgOptionsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsInlineSvgOptionsFilterInput>;
};

type SitePluginPluginOptionsInlineSvgOptionsFilterInput = {
  readonly native: Maybe<BooleanQueryOperatorInput>;
  readonly ref: Maybe<BooleanQueryOperatorInput>;
  readonly svgoConfig: Maybe<SitePluginPluginOptionsInlineSvgOptionsSvgoConfigFilterInput>;
};

type SitePluginPluginOptionsInlineSvgOptionsSvgoConfigFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsInlineSvgOptionsSvgoConfigPluginsFilterListInput>;
};

type SitePluginPluginOptionsInlineSvgOptionsSvgoConfigPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsInlineSvgOptionsSvgoConfigPluginsFilterInput>;
};

type SitePluginPluginOptionsInlineSvgOptionsSvgoConfigPluginsFilterInput = {
  readonly removeStyleElement: Maybe<BooleanQueryOperatorInput>;
  readonly minifyStyles: Maybe<BooleanQueryOperatorInput>;
  readonly inlineStyles: Maybe<BooleanQueryOperatorInput>;
  readonly mergeStyles: Maybe<BooleanQueryOperatorInput>;
  readonly convertPathData: Maybe<BooleanQueryOperatorInput>;
  readonly convertShapeToPath: Maybe<BooleanQueryOperatorInput>;
  readonly mergePaths: Maybe<BooleanQueryOperatorInput>;
  readonly removeViewBox: Maybe<BooleanQueryOperatorInput>;
  readonly cleanupIDs: Maybe<BooleanQueryOperatorInput>;
  readonly prefixIds: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsUrlSvgOptionsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsUrlSvgOptionsFilterInput>;
};

type SitePluginPluginOptionsUrlSvgOptionsFilterInput = {
  readonly native: Maybe<BooleanQueryOperatorInput>;
  readonly ref: Maybe<BooleanQueryOperatorInput>;
  readonly svgoConfig: Maybe<SitePluginPluginOptionsUrlSvgOptionsSvgoConfigFilterInput>;
  readonly urlLoaderOptions: Maybe<SitePluginPluginOptionsUrlSvgOptionsUrlLoaderOptionsFilterInput>;
};

type SitePluginPluginOptionsUrlSvgOptionsSvgoConfigFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsUrlSvgOptionsSvgoConfigPluginsFilterListInput>;
};

type SitePluginPluginOptionsUrlSvgOptionsSvgoConfigPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsUrlSvgOptionsSvgoConfigPluginsFilterInput>;
};

type SitePluginPluginOptionsUrlSvgOptionsSvgoConfigPluginsFilterInput = {
  readonly removeStyleElement: Maybe<BooleanQueryOperatorInput>;
  readonly minifyStyles: Maybe<BooleanQueryOperatorInput>;
  readonly inlineStyles: Maybe<BooleanQueryOperatorInput>;
  readonly mergeStyles: Maybe<BooleanQueryOperatorInput>;
  readonly convertPathData: Maybe<BooleanQueryOperatorInput>;
  readonly convertShapeToPath: Maybe<BooleanQueryOperatorInput>;
  readonly mergePaths: Maybe<BooleanQueryOperatorInput>;
  readonly removeViewBox: Maybe<BooleanQueryOperatorInput>;
  readonly cleanupIDs: Maybe<BooleanQueryOperatorInput>;
  readonly prefixIds: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsUrlSvgOptionsUrlLoaderOptionsFilterInput = {
  readonly limit: Maybe<IntQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.siteMetadata.title'
  | 'context.siteMetadata.description'
  | 'context.siteMetadata.siteEnv'
  | 'context.siteMetadata.siteUrl'
  | 'context.siteMetadata.siteRepositoryUrl'
  | 'context.siteMetadata.siteVersion'
  | 'context.siteMetadata.siteCopyright'
  | 'context.siteMetadata.languages.defaultLangKey'
  | 'context.siteMetadata.languages.langs'
  | 'context.name'
  | 'context.fileId'
  | 'context.sourceInstance'
  | 'context.displayName'
  | 'context.locale'
  | 'context.layout'
  | 'context.template'
  | 'context.frontmatter.title'
  | 'context.frontmatter.subject'
  | 'context.frontmatter.tags'
  | 'context.frontmatter.description'
  | 'context.frontmatter.version'
  | 'context.frontmatter.published'
  | 'context.frontmatter.status'
  | 'context.frontmatter.slug'
  | 'context.frontmatter.layout'
  | 'context.frontmatter.template'
  | 'context.frontmatter.locale'
  | 'context.frontmatter.deprecated'
  | 'context.frontmatter.editPageUrl'
  | 'context.frontmatter.nextPageLabel'
  | 'context.frontmatter.nextPageUrl'
  | 'context.frontmatter.componentStatus'
  | 'context.frontmatter.componentVersion'
  | 'context.frontmatter.componentTests'
  | 'context.absolutePath'
  | 'context.alternateLocales'
  | 'context.alternateLocales.locale'
  | 'context.alternateLocales.path'
  | 'context.relativePath'
  | 'context.parent.id'
  | 'context.parent.parent.id'
  | 'context.parent.parent.children'
  | 'context.parent.children'
  | 'context.parent.children.id'
  | 'context.parent.children.children'
  | 'context.parent.internal.content'
  | 'context.parent.internal.contentDigest'
  | 'context.parent.internal.description'
  | 'context.parent.internal.fieldOwners'
  | 'context.parent.internal.ignoreType'
  | 'context.parent.internal.mediaType'
  | 'context.parent.internal.owner'
  | 'context.parent.internal.type'
  | 'context.children'
  | 'context.children.id'
  | 'context.children.parent.id'
  | 'context.children.parent.children'
  | 'context.children.children'
  | 'context.children.children.id'
  | 'context.children.children.children'
  | 'context.children.internal.content'
  | 'context.children.internal.contentDigest'
  | 'context.children.internal.description'
  | 'context.children.internal.fieldOwners'
  | 'context.children.internal.ignoreType'
  | 'context.children.internal.mediaType'
  | 'context.children.internal.owner'
  | 'context.children.internal.type'
  | 'context.internal.content'
  | 'context.internal.contentDigest'
  | 'context.internal.description'
  | 'context.internal.fieldOwners'
  | 'context.internal.ignoreType'
  | 'context.internal.mediaType'
  | 'context.internal.owner'
  | 'context.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions.maxWidth'
  | 'pluginCreator.pluginOptions.linkImagesToOriginal'
  | 'pluginCreator.pluginOptions.showCaptions'
  | 'pluginCreator.pluginOptions.markdownCaptions'
  | 'pluginCreator.pluginOptions.sizeByPixelDensity'
  | 'pluginCreator.pluginOptions.backgroundColor'
  | 'pluginCreator.pluginOptions.quality'
  | 'pluginCreator.pluginOptions.withWebp'
  | 'pluginCreator.pluginOptions.tracedSVG'
  | 'pluginCreator.pluginOptions.loading'
  | 'pluginCreator.pluginOptions.decoding'
  | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
  | 'pluginCreator.pluginOptions.disableBgImage'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.ignore'
  | 'pluginCreator.pluginOptions.host'
  | 'pluginCreator.pluginOptions.sitemap'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.source'
  | 'pluginCreator.pluginOptions.destination'
  | 'pluginCreator.pluginOptions.purge'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.packageName'
  | 'pluginCreator.pluginOptions.pluginName'
  | 'pluginCreator.pluginOptions.renderPages'
  | 'pluginCreator.pluginOptions.pagesPath'
  | 'pluginCreator.pluginOptions.pagesPathPrefix'
  | 'pluginCreator.pluginOptions.renderMarkdownPages'
  | 'pluginCreator.pluginOptions.markdownPagesPath'
  | 'pluginCreator.pluginOptions.markdownPagesPathPrefix'
  | 'pluginCreator.pluginOptions.renderDocsPages'
  | 'pluginCreator.pluginOptions.docsPagesPath'
  | 'pluginCreator.pluginOptions.docsPagesPathPrefix'
  | 'pluginCreator.pluginOptions.renderDesignSystemPages'
  | 'pluginCreator.pluginOptions.designSystemPagesPath'
  | 'pluginCreator.pluginOptions.designSystemPagesPathPrefix'
  | 'pluginCreator.pluginOptions.renderCoreDocsPages'
  | 'pluginCreator.pluginOptions.coreDocsPagesPath'
  | 'pluginCreator.pluginOptions.coreDocsPagesPathPrefix'
  | 'pluginCreator.pluginOptions.renderUnpublishedPages'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.extensions'
  | 'pluginCreator.pluginOptions.gatsbyRemarkPlugins'
  | 'pluginCreator.pluginOptions.gatsbyRemarkPlugins.resolve'
  | 'pluginCreator.pluginOptions.remarkPlugins'
  | 'pluginCreator.pluginOptions.remarkPlugins.aliasDivider'
  | 'pluginCreator.pluginOptions.remarkPlugins.target'
  | 'pluginCreator.pluginOptions.remarkPlugins.rel'
  | 'pluginCreator.pluginOptions.rehypePlugins'
  | 'pluginCreator.pluginOptions.rehypePlugins.behavior'
  | 'pluginCreator.pluginOptions.lessBabel'
  | 'pluginCreator.pluginOptions.mediaTypes'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.cssLoaderOptions.module'
  | 'pluginCreator.pluginOptions.postCssPlugins'
  | 'pluginCreator.pluginOptions.postCssPlugins.postcssPlugin'
  | 'pluginCreator.pluginOptions.inlineSvgOptions'
  | 'pluginCreator.pluginOptions.inlineSvgOptions.native'
  | 'pluginCreator.pluginOptions.inlineSvgOptions.ref'
  | 'pluginCreator.pluginOptions.urlSvgOptions'
  | 'pluginCreator.pluginOptions.urlSvgOptions.native'
  | 'pluginCreator.pluginOptions.urlSvgOptions.ref'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions.maxWidth'
  | 'pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.showCaptions'
  | 'pluginOptions.markdownCaptions'
  | 'pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.backgroundColor'
  | 'pluginOptions.quality'
  | 'pluginOptions.withWebp'
  | 'pluginOptions.tracedSVG'
  | 'pluginOptions.loading'
  | 'pluginOptions.decoding'
  | 'pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.disableBgImage'
  | 'pluginOptions.path'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.name'
  | 'pluginOptions.ignore'
  | 'pluginOptions.host'
  | 'pluginOptions.sitemap'
  | 'pluginOptions.output'
  | 'pluginOptions.env.local.policy'
  | 'pluginOptions.env.dev.policy'
  | 'pluginOptions.env.staging.policy'
  | 'pluginOptions.env.production.policy'
  | 'pluginOptions.source'
  | 'pluginOptions.destination'
  | 'pluginOptions.purge'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.packageName'
  | 'pluginOptions.pluginName'
  | 'pluginOptions.renderPages'
  | 'pluginOptions.pagesPath'
  | 'pluginOptions.pagesPathPrefix'
  | 'pluginOptions.renderMarkdownPages'
  | 'pluginOptions.markdownPagesPath'
  | 'pluginOptions.markdownPagesPathPrefix'
  | 'pluginOptions.renderDocsPages'
  | 'pluginOptions.docsPagesPath'
  | 'pluginOptions.docsPagesPathPrefix'
  | 'pluginOptions.renderDesignSystemPages'
  | 'pluginOptions.designSystemPagesPath'
  | 'pluginOptions.designSystemPagesPathPrefix'
  | 'pluginOptions.renderCoreDocsPages'
  | 'pluginOptions.coreDocsPagesPath'
  | 'pluginOptions.coreDocsPagesPathPrefix'
  | 'pluginOptions.renderUnpublishedPages'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.extensions'
  | 'pluginOptions.gatsbyRemarkPlugins'
  | 'pluginOptions.gatsbyRemarkPlugins.resolve'
  | 'pluginOptions.gatsbyRemarkPlugins.options.maxWidth'
  | 'pluginOptions.gatsbyRemarkPlugins.options.linkImagesToOriginal'
  | 'pluginOptions.gatsbyRemarkPlugins.options.wrapperStyle'
  | 'pluginOptions.gatsbyRemarkPlugins.options.destinationDir'
  | 'pluginOptions.remarkPlugins'
  | 'pluginOptions.remarkPlugins.aliasDivider'
  | 'pluginOptions.remarkPlugins.target'
  | 'pluginOptions.remarkPlugins.rel'
  | 'pluginOptions.rehypePlugins'
  | 'pluginOptions.rehypePlugins.properties.className'
  | 'pluginOptions.rehypePlugins.content.type'
  | 'pluginOptions.rehypePlugins.content.tagName'
  | 'pluginOptions.rehypePlugins.content.children'
  | 'pluginOptions.rehypePlugins.behavior'
  | 'pluginOptions.lessBabel'
  | 'pluginOptions.mediaTypes'
  | 'pluginOptions.root'
  | 'pluginOptions.cssLoaderOptions.module'
  | 'pluginOptions.postCssPlugins'
  | 'pluginOptions.postCssPlugins.postcssPlugin'
  | 'pluginOptions.postCssPlugins.options.grid'
  | 'pluginOptions.inlineSvgOptions'
  | 'pluginOptions.inlineSvgOptions.native'
  | 'pluginOptions.inlineSvgOptions.ref'
  | 'pluginOptions.inlineSvgOptions.svgoConfig.plugins'
  | 'pluginOptions.urlSvgOptions'
  | 'pluginOptions.urlSvgOptions.native'
  | 'pluginOptions.urlSvgOptions.ref'
  | 'pluginOptions.urlSvgOptions.svgoConfig.plugins'
  | 'pluginOptions.urlSvgOptions.urlLoaderOptions.limit'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.keywords'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageContextEdge>;
  readonly nodes: ReadonlyArray<SitePageContext>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageContextGroupConnection>;
};


type SitePageContextConnection_distinctArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextConnection_maxArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextConnection_minArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextConnection_sumArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageContextFieldsEnum;
};

type SitePageContextEdge = {
  readonly next: Maybe<SitePageContext>;
  readonly node: SitePageContext;
  readonly previous: Maybe<SitePageContext>;
};

type SitePageContextFieldsEnum =
  | 'id'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteEnv'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.siteRepositoryUrl'
  | 'siteMetadata.siteVersion'
  | 'siteMetadata.siteCopyright'
  | 'siteMetadata.languages.defaultLangKey'
  | 'siteMetadata.languages.langs'
  | 'name'
  | 'fileId'
  | 'sourceInstance'
  | 'displayName'
  | 'locale'
  | 'layout'
  | 'template'
  | 'frontmatter.title'
  | 'frontmatter.subject'
  | 'frontmatter.tags'
  | 'frontmatter.description'
  | 'frontmatter.version'
  | 'frontmatter.published'
  | 'frontmatter.status'
  | 'frontmatter.slug'
  | 'frontmatter.layout'
  | 'frontmatter.template'
  | 'frontmatter.locale'
  | 'frontmatter.deprecated'
  | 'frontmatter.editPageUrl'
  | 'frontmatter.nextPageLabel'
  | 'frontmatter.nextPageUrl'
  | 'frontmatter.componentStatus'
  | 'frontmatter.componentVersion'
  | 'frontmatter.componentTests'
  | 'absolutePath'
  | 'alternateLocales'
  | 'alternateLocales.locale'
  | 'alternateLocales.path'
  | 'relativePath'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageContextGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageContextEdge>;
  readonly nodes: ReadonlyArray<SitePageContext>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageContextGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageContextGroupConnection_distinctArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextGroupConnection_maxArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextGroupConnection_minArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextGroupConnection_sumArgs = {
  field: SitePageContextFieldsEnum;
};


type SitePageContextGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageContextFieldsEnum;
};

type SitePageContextSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageContextFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'id'
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'frontmatter.subject'
  | 'frontmatter.tags'
  | 'frontmatter.description'
  | 'frontmatter.version'
  | 'frontmatter.published'
  | 'frontmatter.status'
  | 'frontmatter.slug'
  | 'frontmatter.layout'
  | 'frontmatter.template'
  | 'frontmatter.locale'
  | 'frontmatter.deprecated'
  | 'frontmatter.editPageUrl'
  | 'frontmatter.nextPageLabel'
  | 'frontmatter.nextPageUrl'
  | 'frontmatter.componentStatus'
  | 'frontmatter.componentVersion'
  | 'frontmatter.componentTests'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'exports.youtubeDocLink'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownDocsTemplateQueryVariables = Exact<{
  fileId: Scalars['String'];
  locale: Scalars['String'];
}>;


type MarkdownDocsTemplateQuery = { readonly file: Maybe<(
    Pick<File, 'changeTime'>
    & { readonly childMdx: Maybe<(
      Pick<Mdx, 'slug' | 'excerpt' | 'timeToRead' | 'tableOfContents' | 'body'>
      & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'subject' | 'tags' | 'description' | 'version' | 'published' | 'status' | 'slug' | 'layout' | 'template' | 'deprecated' | 'editPageUrl' | 'nextPageLabel' | 'nextPageUrl' | 'componentStatus' | 'componentVersion' | 'componentTests'>>, readonly headings: Maybe<ReadonlyArray<Maybe<Pick<MdxHeadingMdx, 'value' | 'depth'>>>> }
    )> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type DesignSystemLayoutPageQueryVariables = Exact<{ [key: string]: never; }>;


type DesignSystemLayoutPageQuery = { readonly pages: (
    Pick<SitePageConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<(
      Pick<SitePage, 'id' | 'path'>
      & { readonly context: Maybe<(
        Pick<SitePageContext, 'id' | 'name' | 'locale' | 'layout' | 'template'>
        & { readonly siteMetadata: Maybe<(
          Pick<SitePageMetadata, 'description' | 'siteEnv' | 'siteUrl' | 'title'>
          & { readonly languages: Maybe<Pick<SiteLanguages, 'defaultLangKey' | 'langs'>> }
        )>, readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'subject' | 'tags' | 'description' | 'version' | 'published' | 'status' | 'deprecated' | 'editPageUrl' | 'nextPageLabel' | 'nextPageUrl' | 'componentStatus' | 'componentVersion' | 'componentTests'>> }
      )> }
    )> }
  ) };

type SiteMetadataFragment = { readonly siteMetadata: Maybe<(
    Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl' | 'siteEnv'>
    & { readonly languages: Maybe<Pick<SiteSiteMetadataLanguages, 'defaultLangKey' | 'langs'>> }
  )> };

type MarkdownPageTemplateQueryVariables = Exact<{
  fileId: Scalars['String'];
}>;


type MarkdownPageTemplateQuery = { readonly file: Maybe<{ readonly childMdx: Maybe<(
      Pick<Mdx, 'slug' | 'excerpt' | 'timeToRead' | 'tableOfContents' | 'body'>
      & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'tags'>>, readonly headings: Maybe<ReadonlyArray<Maybe<Pick<MdxHeadingMdx, 'value' | 'depth'>>>> }
    )> }> };

type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


type NavigationQuery = { readonly pages: (
    Pick<SitePageConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<(
      Pick<SitePage, 'id' | 'path'>
      & { readonly context: Maybe<(
        Pick<SitePageContext, 'id' | 'name' | 'locale' | 'layout' | 'template'>
        & { readonly siteMetadata: Maybe<(
          Pick<SitePageMetadata, 'description' | 'siteEnv' | 'siteUrl' | 'title'>
          & { readonly languages: Maybe<Pick<SiteLanguages, 'defaultLangKey' | 'langs'>> }
        )>, readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'subject' | 'tags' | 'description' | 'version' | 'published' | 'status' | 'deprecated' | 'editPageUrl' | 'nextPageLabel' | 'nextPageUrl' | 'componentStatus' | 'componentVersion' | 'componentTests'>> }
      )> }
    )> }
  ) };

type DocsPagesQueryVariables = Exact<{ [key: string]: never; }>;


type DocsPagesQuery = { readonly pages: (
    Pick<SitePageConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<(
      Pick<SitePage, 'id' | 'path'>
      & { readonly context: Maybe<(
        Pick<SitePageContext, 'id' | 'name' | 'locale' | 'layout' | 'template'>
        & { readonly siteMetadata: Maybe<(
          Pick<SitePageMetadata, 'description' | 'siteEnv' | 'siteUrl' | 'title'>
          & { readonly languages: Maybe<Pick<SiteLanguages, 'defaultLangKey' | 'langs'>> }
        )>, readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'subject' | 'tags' | 'description' | 'version' | 'published' | 'status' | 'deprecated' | 'editPageUrl' | 'nextPageLabel' | 'nextPageUrl' | 'componentStatus' | 'componentVersion' | 'componentTests'>> }
      )> }
    )> }
  ), readonly coreDocsPages: (
    Pick<SitePageConnection, 'totalCount'>
    & { readonly nodes: ReadonlyArray<(
      Pick<SitePage, 'id' | 'path'>
      & { readonly context: Maybe<(
        Pick<SitePageContext, 'id' | 'name' | 'locale' | 'layout' | 'template'>
        & { readonly siteMetadata: Maybe<(
          Pick<SitePageMetadata, 'description' | 'siteEnv' | 'siteUrl' | 'title'>
          & { readonly languages: Maybe<Pick<SiteLanguages, 'defaultLangKey' | 'langs'>> }
        )>, readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'subject' | 'tags' | 'description' | 'version' | 'published' | 'status' | 'deprecated' | 'editPageUrl' | 'nextPageLabel' | 'nextPageUrl' | 'componentStatus' | 'componentVersion' | 'componentTests'>> }
      )> }
    )> }
  ) };

}