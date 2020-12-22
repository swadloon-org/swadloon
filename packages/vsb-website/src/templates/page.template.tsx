import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { TreatProvider } from 'react-treat';
import { GatsbyNodeSiteMetadataFragment, PageQuery } from '../../types/graphql-types';
import { HomeTemplate } from './home.template';
import { PROJECT_PAGE_TYPE } from '../../types/page-type';
import { Providers } from '../layouts/providers';

export type ProjectPageProps = PageProps<PageQuery, GatsbyPageContext<GatsbyNodeSiteMetadataFragment>>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }

    contentfulCompanyInfo {
      ...CompanyInfo
    }
    allContentfulPage {
      edges {
        node {
          id
          name
          node_locale
          title
          description {
            description
          }
          type {
            type
          }
          slug
        }
      }
    }
    contentfulPage(id: { eq: $pageId }) {
      ...PageFragment
    }
  }
`;

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <Providers>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${data?.contentfulPage?.title}`,
          url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulPage?.slug}`,
          description: `${data?.contentfulPage?.description?.description}`,
          image: `${data?.contentfulPage?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: data?.contentfulPage?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: data?.contentfulPage?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
          localeAlternate: data?.contentfulPage?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          image: `${data?.contentfulPage?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          creator: `${data?.contentfulCompanyInfo?.metadataTwitterCreator}`,
          site: `${data?.contentfulCompanyInfo?.metadataTwitterSite}`,
        })}
      </Helmet>

      {getPageTemplateComponent({
        pageType: data?.contentfulPage?.type?.type as any,
        props: { data, location, ...props },
      })}
    </Providers>
  );
};

function getPageTemplateComponent({ pageType, props }: { pageType: PROJECT_PAGE_TYPE; props: ProjectPageProps }) {
  switch (pageType) {
    case PROJECT_PAGE_TYPE.HOME: {
      return <HomeTemplate {...props} />;
    }
    default: {
      return <HomeTemplate {...props} />;
    }
  }
}

export default PageTemplate;
