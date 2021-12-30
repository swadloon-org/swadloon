import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';

import {
  GatsbyMarkdownFilePageContext,
  MarkdownTemplateQuery,
} from '@newrade/core-gatsb-config/config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { MarkdownCSS } from '@newrade/core-react-ui/markdown';

import { DocsPageFooter } from '../layout/docs-footer';
import { Aside } from '../navigation/aside';

import * as styles from './docs.css';

export type MarkdownTemplateProps = PageProps<MarkdownTemplateQuery, GatsbyMarkdownFilePageContext>;

/**
 * Query to retrieve all markdown content for the markdown file
 */
export const markdownTemplateQuery = graphql`
  query MarkdownDocsTemplate($fileId: String!, $locale: String!, $jsdocImports: [String]!) {
    #
    # retrive the markdown file along with its metadata, frontmatter and mdx content
    #
    file(id: { eq: $fileId }) {
      changeTime(formatString: "ll", locale: $locale)
      childMdx {
        slug
        excerpt(pruneLength: 160)
        frontmatter {
          title
          subject
          tags
          description
          version
          published
          status
          slug
          layout
          template
          deprecated
          editPageUrl
          nextPageLabel
          nextPageUrl
          componentStatus
          componentVersion
          componentTests
        }
        timeToRead
        headings {
          value
          depth
        }
        tableOfContents(maxDepth: 2)
        body
      }
    }
    #
    # if provided, retrieve for extracted JSDoc nodes with passed names
    #
    jsdoc: allDocumentationJs(filter: { name: { in: $jsdocImports } }) {
      nodes {
        ...DocumentationJsFragment
        params {
          name
          type {
            name
          }
          description {
            ...DocumentationJSComponentDescriptionFragment
          }
        }
        properties {
          ...DocumentationJsFragment
        }
        examples {
          raw
        }
        deprecated {
          childMdx {
            rawBody
          }
        }
        members {
          static {
            ...DocumentationJsFragment
          }
          inner {
            ...DocumentationJsFragment
          }
          global {
            ...DocumentationJsFragment
          }
          events {
            ...DocumentationJsFragment
          }
        }
      }
    }
  }

  fragment DocumentationJsFragment on DocumentationJs {
    name
    level
    memberof
    description {
      ...DocumentationJSComponentDescriptionFragment
    }
    kind
    optional
    default
    type {
      ...DoctrineTypeFragment
    }
    type {
      ...DoctrineTypeFragment
    }
    description {
      ...DocumentationJSComponentDescriptionFragment
    }
  }

  fragment DoctrineTypeFragment on DoctrineType {
    name
    type
    result
    params
    fields
    expression
    elements
  }

  fragment DocumentationJSComponentDescriptionFragment on DocumentationJSComponentDescription {
    childMdx {
      body
    }
  }
`;

/**
 * Markdown template to render .mdx? files (e.g. documentation)
 */
const Template: React.FC<MarkdownTemplateProps> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Helmet>
        <html lang={props.pageContext.locale} />
        <link rel="icon" href="/images/logo-favicon.svg" sizes="any" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* TODO: Complete with all the tags and preview */}
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.ARTICLE,
          title: `${props.pageContext.siteMetadata?.title} - ${
            props.pageContext.displayName ||
            props.pageContext.name ||
            props.pageContext.siteMetadata?.title
          }`,
          // url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulBlogPost?.blogSlug}`,
          description: `${
            props.pageContext.frontmatter?.description ||
            props.data.file?.childMdx?.excerpt ||
            props.pageContext.siteMetadata?.description ||
            ''
          }`,
          // image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          // site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: props.pageContext.locale,
          locale: props.pageContext.locale,
          // localeAlternate: data?.contentfulBlogPost?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
        {/* {getMetadataTwitterTags({
          card: 'summary_large_image',
          image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          creator: `${data?.contentfulCompanyInfo?.metadataTwitterCreator}`,
          site: `${data?.contentfulCompanyInfo?.metadataTwitterSite}`,
        })} */}
      </Helmet>

      <Stack
        gap={[cssTheme.sizing.var.x4]}
        className={styles.content}
        style={{
          // @ts-ignore
          maxWidth: cssTheme.layout.var.contentWidth.desktopDocsMaxWidth,
        }}
      >
        <MarkdownCSS>
          <MDXRenderer {...{ ...props, theme, cssTheme }}>
            {props.data.file?.childMdx?.body as string}
          </MDXRenderer>
        </MarkdownCSS>

        <DocsPageFooter
          editPageUrl={props.data.file?.childMdx?.frontmatter?.editPageUrl}
          nextPageLabel={props.data.file?.childMdx?.frontmatter?.nextPageLabel}
          nextPageUrl={props.data.file?.childMdx?.frontmatter?.nextPageUrl}
        />
      </Stack>

      <Aside
        style={{ gridArea: 'main-docs-aside' }}
        items={props.data.file?.childMdx?.headings}
        location={props.location}
      />
    </>
  );
};

export default Template;
