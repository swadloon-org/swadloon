import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IndexPageQuery } from '../../types/graphql-types';

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

const IndexPage = ({ data }: { data: IndexPageQuery }) => {
  return (
    <div style={{ background: 'black' }}>
      <img src={data.gcms.companyMedias[0].logo.url} />
    </div>
  );
};

export default IndexPage;
