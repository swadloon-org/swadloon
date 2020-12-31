import { GatsbyContentfulPageContext } from '@newrade/core-gatsby-config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Organization } from 'schema-dts';
import { PageQuery } from '../../types/graphql-types';
import '../fonts';
import { BlogTemplate } from './blog.template';
import { ContactTemplate } from './contact.template';
import { HomeTemplate } from './home.template';
import { NotFoundTemplate } from './not-found.template';

export type ProjectPageProps = PageProps<PageQuery, GatsbyContentfulPageContext>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }
    contentfulCompanyInfo {
      ...CompanyInfo
    }
    allContentfulPage {
      edges {
        node {
          id
          name
          type {
            type
          }
          node_locale
          title
          description {
            description
          }
          slug
        }
      }
    }
    contentfulPage(id: { eq: $pageId }) {
      ...PageFragment
    }
  }
`;

export enum PAGE_NAME {
  ACCUEIL = 'Accueil',
  CANDIDATS = 'Candidats',
  EMPLOYEURS = 'Employeurs',
  BLOGUE = 'Blogue',
  A_PROPOS = 'À propos',
  CONTACT = 'Contact',
  NON_TROUVE = 'Non trouvée',
}

export enum PAGE_TYPE {
  ACCUEIL = 'ACCUEIL',
  CANDIDATS = 'CANDIDATS',
  EMPLOYEURS = 'EMPLOYEURS',
  BLOGUE = 'BLOGUE',
  A_PROPOS = 'A_PROPOS',
  CONTACT = 'CONTACT',
  NON_TROUVE = 'NON_TROUVE',
}

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<Organization>({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: `${data?.contentfulCompanyInfo?.companyName}`,
            url: `${data?.site?.siteMetadata?.siteUrl}`,
            logo: {
              '@type': 'ImageObject',
              url: `${data?.contentfulCompanyInfo?.logo?.file?.url}`,
            },
          }),
        ]}
      >
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${data?.contentfulPage?.title}`,
          url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulPage?.slug}`,
          description: `${data?.contentfulPage?.description?.description}`,
          image: `${data?.contentfulPage?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: data?.contentfulPage?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: data?.contentfulPage?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
          localeAlternate: data?.contentfulPage?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          image: `${data?.contentfulPage?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          creator: `${data?.contentfulCompanyInfo?.metadataTwitterCreator}`,
          site: `${data?.contentfulCompanyInfo?.metadataTwitterSite}`,
        })}
      </Helmet>
      {getPageTemplateComponent({
        pageType: data?.contentfulPage?.type?.type as any,
        props: { data, location, ...props },
      })}
    </>
  );
};

function getPageTemplateComponent({ pageType, props }: { pageType: string; props: ProjectPageProps }) {
  switch (pageType) {
    case PAGE_TYPE.ACCUEIL: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_TYPE.CANDIDATS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_TYPE.EMPLOYEURS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_TYPE.BLOGUE: {
      return <BlogTemplate {...props} />;
    }
    case PAGE_TYPE.A_PROPOS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_TYPE.CONTACT: {
      return <ContactTemplate {...props} />;
    }
    case PAGE_TYPE.NON_TROUVE: {
      return <NotFoundTemplate {...props} />;
    }
    default: {
      return <HomeTemplate {...props} />;
    }
  }
}

export default PageTemplate;
