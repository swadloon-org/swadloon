import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './about-page.treat';

import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { Testimonial } from '../components/testimonial-section/testimonial-section';
import { AboutProps } from '../pages/about.en';
import { SideBar } from '../components/side-bar';

export const About: React.FC<AboutProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.aboutPages[0].actionSections[0];
  const section1 = data.gcms?.aboutPages[0]?.infoSections[0];
  const section2 = data.gcms?.aboutPages[0]?.infoSections[1];
  const testimonialSections = data.gcms?.aboutPages[0]?.testimonialSections;

  const [sideMenuState, setSideMenuState] = useState<'openend' | 'closed'>('closed');

  function onOpenSideMenu() {
    setSideMenuState(sideMenuState === 'openend' ? 'closed' : 'openend');
  }

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar onOpenSideMenu={onOpenSideMenu}></NavBar>
      <SideBar state={sideMenuState} onOpenSideMenu={onOpenSideMenu}></SideBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.aboutPages[0]?.bannerTitle}
      ></BannerSecondary>

      {section1 && section1.type === 'type2' ? <InfoSectionType2 align="AlignContentLeft" {...section1} /> : null}

      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}
      {testimonialSections ? <Testimonial testimonialSections={testimonialSections} /> : null}

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};
