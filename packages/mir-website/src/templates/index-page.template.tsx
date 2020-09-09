import React from 'react';
import { useStyles } from 'react-treat';
import { BannerPrimary } from '../components/banner-primary';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Footer } from '../components/footer';
import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType3 } from '../components/info-section/info-section-type-3';
import { InfoSectionType4 } from '../components/info-section/info-section-type-4';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { theme } from '../design-system/themes.treat';
import * as stylesRef from '../styles/page.treat';
import { PageProps } from '../pages/index.en';

export const Index: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerPrimary
        imageData={sources}
        title={data?.gcms?.indexPages[0]?.bannerTitle}
        subTitle={data?.gcms?.indexPages[0]?.bannerSubTitle}
      ></BannerPrimary>

      {data?.gcms?.indexPages[0]?.infoSections.map((section, index) => {
        switch (section.type) {
          case 'type1group': {
            return <InfoSectionType1Group key={index} {...section} />;
          }
          case 'type2': {
            return <InfoSectionType2 key={index} align="AlignContentLeft" {...section} />;
          }
          case 'type3': {
            return <InfoSectionType3 key={index} align="AlignContentRight" {...section} />;
          }
          case 'type4': {
            return <InfoSectionType4 key={index} {...section} />;
          }
          default: {
            return null;
          }
        }
      })}

      <BlogPreviewSection
        posts={data?.gcms?.indexPages[0]?.blogSection?.posts}
        text={data?.gcms?.indexPages[0]?.blogSection?.text}
        title={data?.gcms?.indexPages[0]?.blogSection?.title}
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};
