import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/candidates-page.treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { InfoSectionType5 } from '../components/info-section/info-section-type-5';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { ActionSection } from '../components/action-section/action-section';
import { JobSection } from '../components/job-section/job-section';
import { CandidatesPageProps } from '../pages/candidates.en';

export const Candidate: React.FC<CandidatesPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.candidatePages[0].actionSections[0];
  const actionSection2 = data.gcms.candidatePages[0].actionSections[1];
  const section1 = data.gcms?.candidatePages[0]?.infoSections[0];
  const section2 = data.gcms?.candidatePages[0]?.infoSections[1];
  const jobSection = data.gcms?.candidatePages[0]?.jobSection;

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>
      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.candidatePages[0]?.bannerTitle}
      ></BannerSecondary>
      {actionSection1 ? <ActionSection variant={'Default'} /> : null}
      {section1 && section1.type === 'type5' ? <InfoSectionType5 align="AlignContentLeft" {...section1} /> : null}
      {jobSection ? <JobSection jobSection={jobSection} /> : null}
      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}
      {actionSection2 ? <ActionSection variant={'reversed'} /> : null}
      <Footer></Footer>
    </div>
  );
};
