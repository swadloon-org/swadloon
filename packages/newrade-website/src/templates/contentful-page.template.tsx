import { GatsbyContentfulPageContext } from '@newrade/core-gatsby-config';
import { SectionAPI, SectionRenderer } from '@newrade/core-gatsby-ui/src';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { PageQuery } from '../../types/graphql-types';

export type ProjectPageProps = PageProps<PageQuery, GatsbyContentfulPageContext>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }
    companyInfo: contentfulCompanyInfo {
      ...CompanyInfo
    }
    page: contentfulPage(id: { eq: $pageId }) {
      ...PageFragment
    }
  }
`;

export const blockComponents = {};

export const sectionComponents = {};

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <>
      <Helmet>
        {/* FR only website */}
        <html lang={props.pageContext.locale} />
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${data.page?.title}`,
          url: `${data.site?.siteMetadata?.siteUrl}${data.page?.slug}`,
          description: `${data.page?.description?.description}`,
          // image: `${data.page?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          site_name: `${data.companyInfo?.metadataSiteName}`,
          lang: data.page?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: data.page?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          // image: `${data.contentfulPage?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          creator: `${data.companyInfo?.metadataTwitterCreator}`,
          site: `${data.companyInfo?.metadataTwitterSite}`,
        })}
      </Helmet>
      <>
        {data.page?.sections?.map((section, index) => {
          if (!section) {
            return null;
          }

          return (
            <SectionRenderer
              key={index}
              id={`section-${index}`}
              section={section as SectionAPI}
              blockComponents={blockComponents}
              sectionComponents={sectionComponents}
            />
          );
        })}
      </>
    </>
  );
};

export default PageTemplate;
