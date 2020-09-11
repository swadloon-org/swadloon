// import { graphql } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { ActionSection } from '../components/action-section/action-section';
import { JobSection } from '../components/job-section/job-section';
import { Process } from '../components/process-section/process-section';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { theme } from '../design-system/index';
import * as stylesRef from '../templates/employer-page.treat';
import { EmployerProps } from '../pages/employer.en';

export const Employer: React.FC<EmployerProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.employerPages[0].actionSections[0];
  const section1 = data.gcms?.employerPages[0]?.infoSections[0];
  const section2 = data.gcms?.employerPages[0]?.infoSections[1];
  const jobSection = data.gcms?.employerPages[0]?.jobSection;
  const processSection = data.gcms?.employerPages[0]?.processSection;

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.employerPages[0]?.bannerTitle}
      ></BannerSecondary>

      <InfoSectionType6Group></InfoSectionType6Group>

      {section1 && section1.type === 'type2' ? <InfoSectionType2 align="AlignContentLeft" {...section1} /> : null}

      {jobSection ? <JobSection jobSection={jobSection} /> : null}

      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}

      {processSection ? <Process processSection={processSection} /> : null}

      {actionSection1 ? <ActionSection variant={'reversed'} /> : null}

      <Footer></Footer>
    </div>
  );
};
