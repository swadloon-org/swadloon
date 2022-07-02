import { Node } from 'gatsby';

import {
  DoctrineTypeFragmentFragment,
  DocumentationJs,
  DocumentationJSComponentDescriptionFragmentFragment,
  DocumentationJsExample,
  DocumentationJsFragmentFragment,
} from './site-documentationjs.js';
import { MdxFrontmatter } from './site-mdx-frontmatter.js';
import { GatsbySiteMetadata } from './site-metadata.js';

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

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
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
};

export type GatsbyNodeAllSiteQuery = { site?: { siteMetadata?: GatsbyNodeSiteMetadataFragment } };

export type File = {
  id: string;
  name: string;
  base: string;
  ext: string;
  dir: string;
  absolutePath: string;
  relativePath: string;
  publicURL: string;
  size: string;
  sourceInstanceName: string;
  extension: Scalars['String'];

  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type GatsbyNodeSiteMetadataFragment = GatsbySiteMetadata;

export type GatsbyNodeSrcPagesFilesQuery = {
  allFile: { nodes: Array<{ id: string; absolutePath: string }> };
};

export type GatsbyNodeSrcPageFilesQuery = {
  mdxSrcPages: {
    nodes: Array<File>;
  };
  docs: {
    nodes: Array<File>;
  };
};

export type MarkdownChildMdx = Pick<
  Mdx,
  'slug' | 'excerpt' | 'timeToRead' | 'tableOfContents' | 'body'
>;

export type GatsbyNodeMarkdownFilesQuery = {
  allFile: {
    nodes: Array<
      Pick<
        File,
        | 'id'
        | 'name'
        | 'base'
        | 'ext'
        | 'dir'
        | 'absolutePath'
        | 'relativePath'
        | 'publicURL'
        | 'size'
        | 'sourceInstanceName'
        | 'changeTime'
      > & {
        childMdx: MarkdownChildMdx & {
          frontmatter: Maybe<
            Pick<
              MdxFrontmatter,
              | 'title'
              | 'subject'
              | 'tags'
              | 'description'
              | 'version'
              | 'published'
              | 'status'
              | 'slug'
              | 'layout'
              | 'template'
              | 'deprecated'
              | 'editPageUrl'
              | 'nextPageLabel'
              | 'nextPageUrl'
              | 'componentStatus'
              | 'componentVersion'
              | 'componentTests'
              | 'jsdocImports'
            >
          >;
          headings: Maybe<ReadonlyArray<Maybe<Pick<MdxHeadingMdx, 'value' | 'depth'>>>>;
        };
      }
    >;
  };
};

export type MarkdownTemplateQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type MarkdownTemplateQuery = {
  file: Maybe<
    Pick<File, 'changeTime'> & {
      childMdx: Maybe<
        Pick<Mdx, 'slug' | 'excerpt' | 'timeToRead' | 'tableOfContents' | 'body'> & {
          frontmatter: Maybe<
            Pick<
              MdxFrontmatter,
              | 'title'
              | 'subject'
              | 'tags'
              | 'description'
              | 'version'
              | 'published'
              | 'status'
              | 'deprecated'
              | 'editPageUrl'
              | 'nextPageLabel'
              | 'nextPageUrl'
              | 'componentStatus'
              | 'componentVersion'
              | 'componentTests'
            >
          >;
          headings: Maybe<Array<Maybe<Pick<MdxHeadingMdx, 'value' | 'depth'>>>>;
        }
      >;
    }
  >;
  jsdoc: {
    nodes: Array<
      Maybe<
        {
          readonly params: Maybe<
            ReadonlyArray<
              Maybe<
                Pick<DocumentationJs, 'name'> & {
                  readonly type: Maybe<DoctrineTypeFragmentFragment>;
                  readonly description: Maybe<DocumentationJSComponentDescriptionFragmentFragment>;
                }
              >
            >
          >;
          readonly properties: Maybe<ReadonlyArray<Maybe<DocumentationJsFragmentFragment>>>;
          readonly examples: Maybe<ReadonlyArray<Maybe<Pick<DocumentationJsExample, 'raw'>>>>;
          readonly deprecated: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'rawBody'>> }>;
          readonly members: Maybe<{
            readonly static: Maybe<ReadonlyArray<Maybe<DocumentationJsFragmentFragment>>>;
            readonly inner: Maybe<ReadonlyArray<Maybe<DocumentationJsFragmentFragment>>>;
            readonly global: Maybe<ReadonlyArray<Maybe<DocumentationJsFragmentFragment>>>;
            readonly events: Maybe<ReadonlyArray<Maybe<DocumentationJsFragmentFragment>>>;
          }>;
        } & DocumentationJsFragmentFragment
      >
    >;
  };
};
