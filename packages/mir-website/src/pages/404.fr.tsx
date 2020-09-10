import React from 'react';
import { Helmet } from 'react-helmet-async';

import Layout from '../layouts';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
  getMetadataTwitterTags,
} from 'core-react-ui';

export interface PageProps {
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
