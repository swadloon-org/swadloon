import { MDXProvider } from '@mdx-js/react';
import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsby-config';
import { Aside } from '@newrade/core-gatsby-ui/src';
import { MarkdownTemplateQuery } from '@newrade/core-gatsby-ui/types/site-graphql-types';
import {
  Center,
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  MarkdownCSS,
  OPEN_GRAPH_TYPE,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';
import { useStyles } from 'react-treat';
import { DesignSystemFooter } from '../layout/design-system-footer';
import { designSystemMdxComponents } from '../mdx/design-system-mdx-components';
import * as styleRefs from './design-system-page.treat';

export type MarkdownTemplateProps = PageProps<MarkdownTemplateQuery, GatsbyMarkdownFilePageContext>;

/**
 * Query to retrieve all markdown content for the markdown file
 */
export const markdownTemplateQuery = graphql`
  query DesignSystemPageTemplate($fileId: String!) {
    file(id: { eq: $fileId }) {
      childMdx {
        slug
        excerpt(pruneLength: 160)
        frontmatter {
          title
          name
          tags
        }
        timeToRead
        headings {
          value
          depth
        }
        tableOfContents(maxDepth: 3)
        body
      }
    }
  }
`;

/**
 * Markdown template to render .mdx? files (e.g. documentation)
 */
const Template: React.FC<MarkdownTemplateProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  const htmlStyleAttribute = [``].join('');
  const bodyStyleAttribute = [`background-color: ${cssTheme.colors.colorIntents.background0}`].join('');

  return (
    <>
      <Helmet>
        {/* @ts-ignore  */}
        <html lang={props.pageContext.locale} style={htmlStyleAttribute} /> {/* deepscan-disable-line */}
        {/* @ts-ignore  */}
        <body style={bodyStyleAttribute} /> {/* deepscan-disable-line */}
        <link rel="icon" href="/images/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* TODO: Complete with all the tags and preview */}
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.ARTICLE,
          title: `${props.pageContext.displayName || props.pageContext.name || props.pageContext.siteMetadata.title}`,
          // url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulBlogPost?.blogSlug}`,
          description: `${props.data.file?.childMdx?.excerpt || 'No description provided'}`,
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
      <MDXProvider components={designSystemMdxComponents}>
        <Center maxWidth={cssTheme.layout.var.contentWidth.desktopDocsMaxWidth} style={{ paddingBottom: `60vh` }}>
          <MarkdownCSS>
            <MDXRenderer {...{ ...props, theme, cssTheme }}>{props.data.file?.childMdx?.body as string}</MDXRenderer>
          </MarkdownCSS>

          <DesignSystemFooter />
        </Center>
      </MDXProvider>

      <Aside items={props.data.file?.childMdx?.headings} location={props.location} />
    </>
  );
};

export default Template;
