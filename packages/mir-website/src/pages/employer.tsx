import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStyles } from 'react-treat';
import { Root } from '../components/root';
import { EmployerPageQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { ActionSection } from '../components/action-section/action-section';
import { JobSection } from '../components/job-section/job-section';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';

export const query = graphql`
  query employerPage {
    bannerImage: file(name: { eq: "ImageOffice04" }) {
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
      employerPages(first: 1) {
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
            type
          }
          groups {
            typeName {
              id
              title
              jobGroup {
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

interface OwnProps {
  data: EmployerPageQuery;
  location: Location;
}

const EmployerPage: React.FC<OwnProps> = (props) => {
  return (
    <Root>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MIR - Recrutement technique - Employeurs</title>
        <link rel="canonical" href="https://mir-website-master.netlify.com" />
      </Helmet>
      <Employer {...props} />
    </Root>
  );
};

const Employer: React.FC<OwnProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.gcms.employerPages[0].actionSections[0];
  const section1 = data.gcms?.employerPages[0]?.infoSections[0];
  const section2 = data.gcms?.employerPages[0]?.infoSections[1];
  const jobSection = data.gcms?.employerPages[0]?.jobSection;

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

      {actionSection1 ? <ActionSection variant={'reversed'} /> : null}

      <Footer></Footer>
    </div>
  );
};

export default EmployerPage;
