import { GatsbyPageContext } from '@newrade/core-gatsby-config';
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
import { TreatProvider } from 'react-treat';
import { Organization } from 'schema-dts';
import { GatsbyNodeSiteMetadataFragment, PageQuery } from '../../types/graphql-types';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import { Layout } from '../layouts/page.layout';
import '../styles/font-faces.styles.css';
import { BlogTemplate } from './blog.template';
import { ContactTemplate } from './contact.template';
import { HomeTemplate } from './home.template';
import { NotFoundTemplate } from './not-found.template';

export type ProjectPageProps = PageProps<PageQuery, GatsbyPageContext<GatsbyNodeSiteMetadataFragment>>;

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

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
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
        <Layout
          currentPageName={data?.contentfulPage?.name as string | PAGE_NAME}
          location={location}
          logoURL={data?.contentfulCompanyInfo?.logo?.file?.url as string | null}
          linkedinPageURL={data?.contentfulCompanyInfo?.linkedinPageURL as string | null}
          facebookPageURL={data?.contentfulCompanyInfo?.facebookPageURL as string | null}
          instagramPageURL={data?.contentfulCompanyInfo?.instagramPageURL as string | null}
          twitterPageURL={data?.contentfulCompanyInfo?.twitterPageURL as string | null}
          pages={data?.allContentfulPage?.edges?.map((edge) => ({
            ...edge?.node,
            locale: edge?.node?.node_locale,
          }))}
        >
          {getPageTemplateComponent({
            pageName: data?.contentfulPage?.name as any,
            props: { data, location, ...props },
          })}
        </Layout>
      </ViewportProvider>
    </TreatProvider>
  );
};

function getPageTemplateComponent({ pageName, props }: { pageName: string; props: ProjectPageProps }) {
  switch (pageName) {
    case PAGE_NAME.ACCUEIL: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.CANDIDATS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.EMPLOYEURS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.BLOGUE: {
      return <BlogTemplate {...props} />;
    }
    case PAGE_NAME.A_PROPOS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.CONTACT: {
      return <ContactTemplate {...props} />;
    }
    case PAGE_NAME.NON_TROUVE: {
      return <NotFoundTemplate {...props} />;
    }
    default: {
      return <HomeTemplate {...props} />;
    }
  }
}

export default PageTemplate;
