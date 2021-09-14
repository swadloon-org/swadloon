import { GatsbySrcPageContext } from '@newrade/core-gatsb-config/config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

export type SrcPageTemplateProps = PageProps<{}, GatsbySrcPageContext>;

export type Props = Omit<SrcPageTemplateProps, 'children'> & { children: ReactNode };

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
          description: `No description provided`,
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
