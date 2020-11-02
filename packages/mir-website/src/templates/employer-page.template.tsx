import React from 'react';
import { useStyles } from 'react-treat';
import { ActionSection } from '../components/action-section/action-section';
import { BannerSecondary } from '../components/banner-secondary';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { JobSection } from '../components/job-section/job-section';
import { Process } from '../components/process-section/process-section';
import { theme } from '../design-system/index';
import * as stylesRef from '../templates/employer-page.treat';
import { ProjectPageProps } from './page.template';

export const EmployerPageTemplate: React.FC<ProjectPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);
  const actionSection1 = data.gcms.pages[0].actionSections[0];
  const section1 = data.gcms?.pages[0]?.infoSections[0];
  const section2 = data.gcms?.pages[0]?.infoSections[1];
  const section6 = data.gcms?.pages[0]?.infoSections[2];

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

      {section6 && section6.type === 'type6' ? <InfoSectionType6Group {...section6} /> : null}

      {section1 && section1.type === 'type2' ? <InfoSectionType2 align="AlignContentLeft" {...section1} /> : null}

      {jobSection ? <JobSection jobSection={jobSection} /> : null}

      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}

      {processSection ? <Process processSection={processSection} /> : null}

      {actionSection1 ? <ActionSection section={actionSection1} /> : null}
    </main>
  );
};
