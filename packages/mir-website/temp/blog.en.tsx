import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BlogPageEnQuery } from '../../types/graphql-types';
import { LayoutEN } from '../layouts/en';
import { Blog } from '../templates/blog-page.template';

export const query = graphql`
  query BlogPageEN {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Blog" }, locales: en) {
        ...Page
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice03" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice03" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: BlogPageEnQuery;
  location: Location;
}

const BlogPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.blogPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.blogPages[0].metadata?.route}`,
          description: `${props.data.gcms.blogPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.metadataTwitters[0].creator}`,
          site: `${props.data.gcms.metadataTwitters[0].site}`,
        })}
      </Helmet>
      <Blog {...props} />
    </LayoutEN>
  );
};

export default BlogPage;
