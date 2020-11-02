import React from 'react';
import { useStyles } from 'react-treat';
import { Newsletter } from '../components/action-section/newsletter';
import { BannerPrimary } from '../components/banner-primary';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType3 } from '../components/info-section/info-section-type-3';
import { InfoSectionType4 } from '../components/info-section/info-section-type-4';
import { theme } from '../design-system/index';
import { ProjectPageProps } from './page.template';
import * as stylesRef from './home.treat';
import { SectionTemplate } from './section.template';

export const HomeTemplate: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  // const actionSection1 = data.gcms.pages[0].actionSections[0];
  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerPrimary
        imageData={sources}
        title={data?.gcms?.pages[0]?.bannerTitle}
        subTitle={data?.gcms?.pages[0]?.bannerSubTitle}
      ></BannerPrimary>

      <SectionTemplate {...props} />

      <BlogPreviewSection
        location={location}
        showButton={true}
        {...data?.gcms?.pages[0]?.blogSections[0]}
      ></BlogPreviewSection>

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};
