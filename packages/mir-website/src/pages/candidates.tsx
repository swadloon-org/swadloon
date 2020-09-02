import { graphql } from 'gatsby';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { CandidatePageQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';
import { light } from '../themes/mir-theme.treat';
import { InfoSectionType5 } from '../components/info-section/info-section-type-5';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { ActionSection } from '../components/info-section/action-section';

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
        actionSection {
          title
          subtitle
          actionText
        }
        jobSection {
          type {
            id
            title
          }
          title
          jobs {
            id
            type {
              id
            }
            title
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

  const actionSection = data.gcms.candidatePages[0].actionSection;
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

      {actionSection ? <ActionSection variant={'Default'} /> : null}

      {section1 && section1.type === 'type5' ? <InfoSectionType5 align="AlignContentLeft" {...section1} /> : null}

      {section2 && section2.type === 'type2' ? <InfoSectionType2 align="AlignContentRight" {...section2} /> : null}

      {JSON.stringify(jobSection, null, 2)}

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default CandidatePage;
