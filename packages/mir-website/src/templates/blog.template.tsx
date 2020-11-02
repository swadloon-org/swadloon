import React from 'react';
import { useStyles } from 'react-treat';
import { BannerSecondary } from '../components/banner-secondary';
import { theme } from '../design-system';
import * as stylesRef from './blog.treat';
import { ProjectPageProps } from './page.template';

export const BlogTemplate: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  const page = props.data.contentfulPage;

  const bannerImagesSource = [
    page.bannerImages?.medias[0]?.mobileFluidImage,
    {
      ...page.bannerImages?.medias[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={bannerImagesSource} title={props.data?.contentfulPage?.bannerTitle}></BannerSecondary>

      {/* <BlogPreviewSection
        location={location}
        showButton={false}
        {...data?.gcms?.pages[0]?.blogSections[0]}
      ></BlogPreviewSection> */}

      {/* <Newsletter id="newsletter" section={actionSection1}></Newsletter> */}
    </main>
  );
};
