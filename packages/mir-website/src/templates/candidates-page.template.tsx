import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/candidates-page.treat';
import { BannerSecondary } from '../components/banner-secondary';

import { InfoSectionType5 } from '../components/info-section/info-section-type-5';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { ActionSection } from '../components/action-section/action-section';
import { JobSection } from '../components/job-section/job-section';
import { Process } from '../components/process-section/process-section';
import { CandidatePageFrQuery } from '../../types/graphql-types';
import { theme } from '../design-system';

interface PageProps {
  data: CandidatePageFrQuery;
  location: Location;
}

export const Candidate: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.pages[0].actionSections[0];
  const actionSection2 = data.gcms.pages[0].actionSections[1];
  const section1 = data.gcms?.pages[0]?.infoSections[0];
  const section2 = data.gcms?.pages[0]?.infoSections[1];
  const jobSection = data.gcms?.pages[0]?.jobSections[0];
  const processSection = data.gcms?.pages[0]?.processSections[0];

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.gcms?.pages[0]?.bannerTitle}></BannerSecondary>
      {actionSection1 ? <ActionSection ActionSection={actionSection1} /> : null}
      {section1 && section1.type === 'type5' ? <InfoSectionType5 align="AlignContentLeft" {...section1} /> : null}
      {jobSection ? <JobSection jobSection={jobSection} /> : null}
      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}
      {processSection ? <Process processSection={processSection} /> : null}
      {actionSection2 ? <ActionSection ActionSection={actionSection2} /> : null}
    </main>
  );
};
