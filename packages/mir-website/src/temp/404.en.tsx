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
import Layout from '../layouts';

export const query = graphql`
  query NotFoundPageEN {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Not Found" }, locales: en) {
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
    <Layout>
      <Helmet>
        <title>test</title>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: 'test',
          url: 'test',
          description: 'test',
          site_name: 'test',
          locale: 'test',
          localeAlternate: 'test',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
        })}
      </Helmet>
      <div>Not Found</div>
    </Layout>
  );
};

export default NotFoundPage;
