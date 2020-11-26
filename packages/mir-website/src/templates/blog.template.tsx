import React from 'react';
import { useStyles } from 'react-treat';
import { theme } from '../design-system';
import * as stylesRef from './blog.treat';
import { ProjectPageProps } from './page.template';
import { BannerSecondary } from '../components/banners/banner-secondary';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { SECTION_TYPE } from './section.template';
import { SectionFragment } from '../../types/graphql-types';

export const BlogTemplate: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  const page = props?.data?.contentfulPage;

  const bannerImagesSource = [
    page?.bannerImages?.medias?.[0]?.mobileFluidImage,
    {
      ...page.bannerImages?.medias?.[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  const blogSection: SectionFragment[] = props?.data?.contentfulPage?.sections?.filter(
    (section) => section?.type?.name === SECTION_TYPE.BLOG_PREVIEW
  );

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={bannerImagesSource} title={props.data?.contentfulPage?.bannerTitle}></BannerSecondary>

      <BlogPreviewSection
        pageRoute={props?.data?.contentfulPage?.route}
        variant="full"
        {...blogSection[0]}
      ></BlogPreviewSection>

      {/* <Newsletter id="newsletter" section={actionSection1}></Newsletter> */}
    </main>
  );
};
