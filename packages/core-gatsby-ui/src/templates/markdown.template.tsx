import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsby-config';
import { getMetaBasicTags, GlobalMarkdownCSS, Center } from '@newrade/core-react-ui';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';
import { useStyles } from 'react-treat';
import * as styleRefs from './markdown.treat';
import { Aside } from '../components/navigation/aside';
import { I18nProvider } from 'react-aria';

export type MarkdownTemplateProps = PageProps<any, GatsbyMarkdownFilePageContext>;

/**
 * Query to retrieve all markdown content for the markdown file
 */
export const markdownTemplateQuery = graphql`
  query MarkdownTemplate($fileId: String!) {
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

  return (
    <>
      <Helmet>
        <html lang={props.pageContext.locale} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {getMetaBasicTags()}
        {/* {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.ARTICLE,
          title: `${data?.contentfulBlogPost?.title}`,
          url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulBlogPost?.blogSlug}`,
          description: `${data?.contentfulBlogPost?.blogExcerpt?.blogExcerpt}`,
          image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: data?.contentfulBlogPost?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: data?.contentfulBlogPost?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
          localeAlternate: data?.contentfulBlogPost?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          creator: `${data?.contentfulCompanyInfo?.metadataTwitterCreator}`,
          site: `${data?.contentfulCompanyInfo?.metadataTwitterSite}`,
        })} */}
      </Helmet>
      <I18nProvider locale={props.pageContext.locale}>
        <Center maxWidth={'800px'}>
          <GlobalMarkdownCSS>
            <MDXRenderer {...props}>{props.data.file?.childMdx?.body as string}</MDXRenderer>
          </GlobalMarkdownCSS>
        </Center>

        <Aside items={props.data.file?.childMdx?.headings} location={props.location} />
      </I18nProvider>
    </>
  );
};

export default Template;
