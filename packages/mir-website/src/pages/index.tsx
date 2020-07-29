import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const pageQuery = graphql`
  {
    gcms {
      assets {
        id
        size
        fileName
        url
      }
    }
  }
`;

const IndexPage = () => {
  const {
    gcms: { assets },
  } = useStaticQuery(pageQuery);

  console.log(pageQuery);
  console.log(assets);
  console.log(assets[0].fileName);

  return <img src={assets[0].url} />;
};

export default IndexPage;
