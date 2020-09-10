import React from 'react';

import Layout from '../layouts';

export interface PageProps {
  location: Location;
}

const NotFoundPage: React.FC<PageProps> = (props) => {
  return (
    <Layout>
      <div>Not Found</div>
    </Layout>
  );
};

export default NotFoundPage;
