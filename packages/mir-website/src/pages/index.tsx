import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IndexPageQuery } from '../../types/graphql-types';
import { Header } from '../components/header/header';

export const query = graphql`
  query indexPage {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
        logo {
          url
        }
      }
    }
  }
`;

interface IndexPageProps {
  data: IndexPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data, location }) => {
  return (
    <Header>
      <div style={{ background: 'black' }}>
        <img src={data.gcms.companyMedias[0].logo.url} />
      </div>
    </Header>
  );
};

export default IndexPage;
