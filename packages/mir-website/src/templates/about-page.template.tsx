import React from 'react';
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

interface PageProps {
  data: AboutPageFrQuery;
  location: Location;
}

export const About: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.allGraphCmsPage[0].actionSections[0];
  const section1 = data.allGraphCmsPage[0]?.infoSections[0];
  const section2 = data.allGraphCmsPage[0]?.infoSections[1];
  const section3 = data.allGraphCmsPage[0]?.infoSections[2];
  const testimonials = data.allGraphCmsPage[0]?.testimonialSections[0];

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.allGraphCmsPage[0]?.bannerTitle}></BannerSecondary>

      {section1 && section1.type === 'type2' ? <InfoSectionType2 align="AlignContentLeft" {...section1} /> : null}
      {section2 && section2.type === 'type7' ? <InfoSectionType7 {...section2} /> : null}
      {section3 && section3.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section3} /> : null}

      <InfoSectionVideo></InfoSectionVideo>

      {testimonials ? <Testimonial testimonialSections={testimonials} /> : null}

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};
