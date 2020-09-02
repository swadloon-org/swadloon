import { graphql } from 'gatsby';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';
import { light } from '../themes/mir-theme.treat';

export const query = graphql`
  query employerPage {
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

const EmployerPage: React.FC<IndexPageProps> = (props) => {
  return (
    <TreatProvider theme={light}>
      <Employer {...props} />
    </TreatProvider>
  );
};

const Employer: React.FC<IndexPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <Banner variant="secondary"></Banner>

      {/* {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        switch (section.type) {
          case 'type1group': {
            return <InfoSectionType1Group key={index} {...section} />;
          }
          default: {
            return null;
          }
        }
      })} */}

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default EmployerPage;
