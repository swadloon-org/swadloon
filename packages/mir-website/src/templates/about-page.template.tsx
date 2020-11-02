import React, { useEffect } from 'react';
import { useStyles } from 'react-treat';
import { AboutPageFrQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType7 } from '../components/info-section/info-section-type-7';
import { InfoSectionVideo } from '../components/info-section/info-section-video';
import { Newsletter } from '../components/action-section/newsletter';
import { Testimonial } from '../components/testimonial-section/testimonial-section';
import { theme } from '../design-system';
import * as stylesRef from './about-page.treat';
import { motion, useAnimation } from 'framer-motion';
import { FadeIn } from '../components/animation/fade-in';

interface PageProps {
  data: AboutPageFrQuery;
  location: Location;
}

export const About: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.pages[0].actionSections[0];
  const section1 = data.gcms?.pages[0]?.infoSections[0];
  const section2 = data.gcms?.pages[0]?.infoSections[1];
  const section3 = data.gcms?.pages[0]?.infoSections[2];
  const section4 = data.gcms?.pages[0]?.infoSections[3];
  const testimonials = data.gcms?.pages[0]?.testimonialSections[0];

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  const sourcesVideo = [
    data?.bannerImageAboutMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageAboutDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.gcms?.pages[0]?.bannerTitle}></BannerSecondary>
      {section1 && section1.type === 'type2' ? (
        <FadeIn time={0.4}>
          <InfoSectionType2 align="AlignContentLeft" {...section1} />{' '}
        </FadeIn>
      ) : null}
      {section2 && section2.type === 'type7' ? (
        <FadeIn time={0.4}>
          <InfoSectionType7 {...section2} />{' '}
        </FadeIn>
      ) : null}
      {section3 && section3.type === 'type2' ? (
        <FadeIn time={0.4}>
          <InfoSectionType2 align="AlignContentRight" {...section3} />{' '}
        </FadeIn>
      ) : null}
      {section4 && section4.type === 'typeVideo' ? (
        <FadeIn time={0.4}>
          <InfoSectionVideo
            imageData={sourcesVideo}
            heading={section4.title}
            paragraph={section4.text}
          ></InfoSectionVideo>{' '}
        </FadeIn>
      ) : null}
      {/* <InfoSectionVideo imageData={sourcesVideo}></InfoSectionVideo> */}
      {testimonials ? <Testimonial testimonialSections={testimonials} /> : null}

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};
