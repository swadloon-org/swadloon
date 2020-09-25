import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BlogPageEnQuery } from '../../types/graphql-types';
import { Layout } from '../layouts';
import { Blog } from '../templates/blog-page.template';

export const BlogPageENQuery = graphql`
  query BlogPageEN {
    site {
      ...SiteMetadata
    }
    graphCmsCompanyInfo {
      ...CompanyInfo
    }
    graphCmsPage(name: { eq: "Blog" }, locale: { in: [en, fr] }) {
      ...Page
    }
    routes: graphCmsPage(name: { ne: "Not Found" }, locale: { in: [en, fr] }) {
      name
      title
      route
    }
    bannerImageMobile: file(name: { eq: "ImageOffice03" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice03" }) {
      ...DesktopFluidImage
    }
    articleImageMobile: file(name: { eq: "Banner-NewWebsite" }) {
      ...MobileFluidImage
    }
    articleImageDesktop: file(name: { eq: "Banner-NewWebsite" }) {
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
    <Layout
      location={props.location}
      logoURL={props.data.graphCmsCompanyInfo[0].logo?.url}
      linkedinPageURL={props.data.graphCmsCompanyInfo[0].linkedinPageUrl}
      facebookPageURL={props.data.graphCmsCompanyInfo[0].facebookPageUrl}
      instagramPageURL={props.data.graphCmsCompanyInfo[0].instagramPageUrl}
      twitterPageURL={props.data.graphCmsCompanyInfo[0].twitterPageUrl}
      pages={props.data.gcms.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.pages[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.gcms.pages[0]?.route}`,
          description: `${props.data.gcms.pages[0]?.description}`,
          image: `${props.data.gcms.pages[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.graphCmsCompanyInfo[0].metadataSiteName}`,
          lang: 'en',
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.graphCmsCompanyInfo[0].metadataTwitterCreator}`,
          site: `${props.data.graphCmsCompanyInfo[0].metadataTwitter}`,
        })}
      </Helmet>
      <Blog {...props} />
    </Layout>
  );
};

export default BlogPage;
