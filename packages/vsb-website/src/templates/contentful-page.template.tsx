import { GatsbyContentfulPageContext } from '@newrade/core-gatsby-config';
import { BlockVariant, SectionLayout, SectionRenderer } from '@newrade/core-gatsby-ui/src';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  keys,
  OPEN_GRAPH_TYPE,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { ContentfulBlock, PageQuery } from '../../types/graphql-types';
import { BlockCostItem } from '../components/block-cost-items';
import '../fonts';

const BlockGoogleMapVSB = React.lazy(() =>
  import('../components/block-google-map').then((comp) => ({ default: comp.BlockGoogleMapVSB }))
);
export type ProjectPageProps = PageProps<PageQuery, GatsbyContentfulPageContext>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }
    companyInfo: contentfulCompanyInfo {
      ...CompanyInfo
    }
    page: contentfulPage(id: { eq: $pageId }) {
      ...PageFragment
    }
  }
`;

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  const isSSR = useIsSSR();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { cssTheme, theme } = useTreatTheme();

  /**
   * Sections and blocks
   */
  const sectionLayouts = keys(SectionLayout);
  const blockVariants = keys(BlockVariant);

  /**
   * Custom sections and blocks
   */
  const customSectionLayouts = ['custom_steps', 'custom_formVasectomy'];
  const customBlockVariants = ['costItem'];

  return (
    <div>
      <Helmet>
        {/* FR only website */}
        <html lang={props.pageContext.locale} />
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${data.page?.title}`,
          url: `${data.site?.siteMetadata?.siteUrl}${data.page?.slug}`,
          description: `${data.page?.description?.description}`,
          // image: `${data.page?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          site_name: `${data.companyInfo?.metadataSiteName}`,
          lang: data.page?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: data.page?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          // image: `${data.contentfulPage?.bannerImages?.medias?.[0]?.socialMediaImage?.src}`,
          creator: `${data.companyInfo?.metadataTwitterCreator}`,
          site: `${data.companyInfo?.metadataTwitterSite}`,
        })}
      </Helmet>
      <>
        {data.page?.sections?.map((section, index) => {
          if (!section) {
            return null;
          }

          return (
            <SectionRenderer
              key={index}
              section={section as ContentfulBlock}
              sectionComponents={{
                custom_steps: () => null,
                custom_formVasectomy: () => null,
              }}
              blockComponents={{
                costItem: (blockProps: any) => <BlockCostItem />,
              }}
            />
          );
        })}
      </>
    </div>
  );
};

export default PageTemplate;
