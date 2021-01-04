import React from 'react';
import { useStyles } from 'react-treat';
import { theme } from '../design-system/theme';
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
      ...page?.bannerImages?.medias?.[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  const blogSection: SectionFragment[] = props?.data?.contentfulPage?.sections?.filter(
    (section) => section?.type?.name === SECTION_TYPE.BLOG_PREVIEW
  ) as SectionFragment[];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={bannerImagesSource} title={props.data?.contentfulPage?.bannerTitle}></BannerSecondary>

      {props?.data?.contentfulPage?.slug && blogSection ? (
        <BlogPreviewSection
          pageRoute={props?.data?.contentfulPage?.slug}
          variant="full"
          {...blogSection[0]}
        ></BlogPreviewSection>
      ) : null}

      {/* <Newsletter id="newsletter" section={actionSection1}></Newsletter> */}
    </main>
  );
};
