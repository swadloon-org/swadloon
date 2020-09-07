import { graphql } from 'gatsby';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { CandidatePageQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';
import { light } from '../design-system/themes.treat';
import { InfoSectionType5 } from '../components/info-section/info-section-type-5';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { ActionSection } from '../components/action-section/action-section';
import { JobSection } from '../components/job-section/job-section';

export const query = graphql`
  query candidatePage {
    bannerImage: file(name: { eq: "ImageOffice02" }) {
      id
      childImageSharp {
        # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
        fluid(quality: 90, maxWidth: 1920) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    gcms {
      candidatePages(first: 1) {
        bannerTitle
        actionSections {
          title
          subtitle
          actionText
        }
        jobSection {
          title
          titleHighlight
          type {
            title
            jobSection {
              id
              title
              groups {
                jobs {
                  id
                  title
                }
              }
            }
          }
        }
        infoSections {
          title
          titleHighlight
          titleTab
          type
          text
          showTabs
          actionText
          infoChecks {
            text
          }
          infoTiles {
            illustration
            title
            text
          }
          childs {
            showTabs
            title
            titleHighlight
            titleTab
            type
            text
            actionText
          }
          image {
            url(transformation: { image: { resize: { width: 900, fit: max } } })
          }
        }
      }
    }
  }
`;

interface IndexPageProps {
  data: CandidatePageQuery;
  location: Location;
}

const CandidatePage: React.FC<IndexPageProps> = (props) => {
  return (
    <TreatProvider theme={light}>
      <Candidate {...props} />
    </TreatProvider>
  );
};

const Candidate: React.FC<IndexPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.candidatePages[0].actionSections[0];
  const actionSection2 = data.gcms.candidatePages[0].actionSections[1];
  const section1 = data.gcms?.candidatePages[0]?.infoSections[0];
  const section2 = data.gcms?.candidatePages[0]?.infoSections[1];
  const jobSection = data.gcms?.candidatePages[0]?.jobSection;
  console.log(data.gcms?.candidatePages[0]?.jobSection);
  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.candidatePages[0]?.bannerTitle}
      ></BannerSecondary>

      {actionSection1 ? <ActionSection variant={'Default'} /> : null}

      {section1 && section1.type === 'type5' ? <InfoSectionType5 align="AlignContentLeft" {...section1} /> : null}

      {/* {jobSection ? <JobSection jobSection={jobSection} variant={`${jobSection.type}`} /> : null} */}

      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}

      {actionSection2 ? <ActionSection variant={'reversed'} /> : null}

      <Footer></Footer>
    </div>
  );
};

export default CandidatePage;
