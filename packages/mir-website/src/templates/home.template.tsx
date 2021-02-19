import React from 'react';
import { useStyles } from 'react-treat';
import { BannerPrimary } from '../components/banners/banner-primary';
import { BannerSecondary } from '../components/banners/banner-secondary';
import { theme } from '../design-system/theme';
import { ProjectPageProps } from './contentful-page.template';
import * as stylesRef from './home.treat';
import { SectionTemplate } from './section.template';

export const HomeTemplate: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  const page = props.data.contentfulPage;

  const bannerImagesSource = [
    page?.bannerImages?.medias?.[0]?.mobileFluidImage,
    {
      ...page?.bannerImages?.medias?.[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];
  const bannerImagesAreValid = !!(bannerImagesSource?.length && bannerImagesSource[0] && bannerImagesSource[1]);

  return (
    <main className={`${styles.wrapper}`}>
      {bannerImagesAreValid ? (
        page?.bannerSubTitle?.length ? (
          <BannerPrimary
            imageData={bannerImagesSource}
            title={page.bannerTitle}
            subTitle={page.bannerSubTitle}
          ></BannerPrimary>
        ) : (
          <BannerSecondary imageData={bannerImagesSource} title={page?.bannerTitle}></BannerSecondary>
        )
      ) : null}

      <SectionTemplate {...props} />
    </main>
  );
};
