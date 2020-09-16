import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { NotFoundPageFrQuery } from '../../types/graphql-types';
import LayoutEN from '../layouts/en';
import { NotFoundPageTemplate } from '../templates/not-found-page.template';

export const query = graphql`
  query NotFoundPageEN {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Not Found" }, locales: [en, fr]) {
        ...Page
      }
    }
  }
`;

interface PageProps {
  data: NotFoundPageFrQuery;
  location: Location;
}

const NotFoundPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN {...props}>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.pages[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.gcms.pages[0]?.route}`,
          description: `${props.data.gcms.pages[0]?.description}`,
          image: `${props.data.gcms.pages[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.gcms.companyInfos[0].metadataSiteName}`,
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.companyInfos[0].metadataTwitterCreator}`,
          site: `${props.data.gcms.companyInfos[0].metadataTwitter}`,
        })}
      </Helmet>
      <NotFoundPageTemplate {...props} />
    </LayoutEN>
  );
};

export default NotFoundPage;
