import React from 'react';
import { useStyles } from 'react-treat';
import { theme } from '../design-system/index';
import * as stylesRef from './home.treat';
import { ProjectPageProps } from './page.template';
import { SectionTemplate } from './section.template';
import { BannerPrimary } from '../components/banners/banner-primary';
import { BannerSecondary } from '../components/banners/banner-secondary';

export const HomeTemplate: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  const page = props.data.contentfulPage;

  const bannerImagesSource = [
    page.bannerImages?.medias[0]?.mobileFluidImage,
    {
      ...page.bannerImages?.medias[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];
  const bannerImagesAreValid = !!(bannerImagesSource?.length && bannerImagesSource[0] && bannerImagesSource[1]);

  return (
    <main className={`${styles.wrapper}`}>
      {bannerImagesAreValid ? (
        page.bannerSubTitle?.length ? (
          <BannerPrimary
            imageData={bannerImagesSource}
            title={page.bannerTitle}
            subTitle={page.bannerSubTitle}
          ></BannerPrimary>
        ) : (
          <BannerSecondary imageData={bannerImagesSource} title={page.bannerTitle}></BannerSecondary>
        )
      ) : null}

      <SectionTemplate {...props} />
    </main>
  );
};
