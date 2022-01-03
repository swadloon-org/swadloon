import { graphql, PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

import { GatsbySrcPageContext } from '@newrade/core-gatsb-config/config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui';

export type SrcPageTemplateProps = PageProps<{}, GatsbySrcPageContext>;

export type Props = Omit<SrcPageTemplateProps, 'children'> & { children: ReactNode };

/**
 * Query to retrieve all markdown content for the markdown file
 */
export const markdownTemplateQuery = graphql`
  query JSDoc {
    jsdoc: allDocumentationJs(filter: { name: { in: ["ThemeWrapper", "ThemeWrapperProps"] } }) {
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

export const SrcPageTemplate: React.FC<Props & { children: ReactNode }> = (props) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/logo-favicon.svg" sizes="any" type="image/svg+xml" />
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${
            props.pageContext.displayName ||
            props.pageContext.name ||
            props.pageContext.siteMetadata?.title
          }`,
          // url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulBlogPost?.blogSlug}`,
          description: `${props.pageContext.siteMetadata?.description || ''}`,
          // image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          // site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: props.pageContext.locale,
          locale: props.pageContext.locale,
          // localeAlternate: data?.contentfulBlogPost?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
      </Helmet>
      {props.children}
    </>
  );
};
