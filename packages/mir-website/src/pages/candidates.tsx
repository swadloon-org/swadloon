import { graphql } from 'gatsby';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/candidate.treat';
import { light } from '../themes/mir-theme.treat';

export const query = graphql`
  query candidatePage {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
        logo {
          url
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

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default CandidatePage;
