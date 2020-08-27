import { graphql } from 'gatsby';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Footer } from '../components/footer';
import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType3 } from '../components/info-section/info-section-type-3';
import { InfoSectionType4 } from '../components/info-section/info-section-type-4';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';

import { light } from '../themes/mir-theme.treat';
import * as stylesRef from '../styles/candidate.treat';

import '../styles/font-faces.styles.css';

export const query = graphql`
  query candidatePage {
    gcms {
      pageIndices(first: 1) {
        id
        employeeEmployerSections {
          title
          titleHighlight
          titleTab
          type
          text
          showTabs
          actionText
          infoTiles {
            icon
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
            url
          }
        }
      }
    }
  }
`;

interface IndexPageProps {
  data: IndexPageQuery;
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

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <Banner variant="secondary"></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        switch (section.type) {
          default: {
            return null;
          }
        }
      })}

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default CandidatePage;
