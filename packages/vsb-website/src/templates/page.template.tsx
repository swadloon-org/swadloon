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
          pageType {
            type
          }
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
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <Helmet>
          {getMetaBasicTags()}
          {getMetadataOpenGraphWebsiteTags({
            type: OPEN_GRAPH_TYPE.WEBSITE,
            title: `${data?.contentfulPage?.title}`,
            url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulPage?.route}`,
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
        <Layout
          currentPageName={data?.contentfulPage?.name as string | PROJECT_PAGE_TYPE}
          location={location}
          logoURL={data?.contentfulCompanyInfo?.logo?.file?.url as string | null}
          linkedinPageURL={data?.contentfulCompanyInfo?.linkedinPageURL as string | null}
          facebookPageURL={data?.contentfulCompanyInfo?.facebookPageURL as string | null}
          instagramPageURL={data?.contentfulCompanyInfo?.instagramPageURL as string | null}
          twitterPageURL={data?.contentfulCompanyInfo?.twitterPageURL as string | null}
          pages={data?.allContentfulPage?.edges?.map((edge) => ({
            ...edge?.node,
            locale: edge?.node?.node_locale,
          }))}
        >
          {getPageTemplateComponent({
            pageType: data?.contentfulPage?.pageType?.type as any,
            props: { data, location, ...props },
          })}
        </Layout>
      </ViewportProvider>
    </TreatProvider>
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
