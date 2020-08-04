import { graphql } from 'gatsby';
import 'normalize.css';
import React from 'react';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { InfoSection } from '../components/info-section';
import { TopBar } from '../components/top-bar';
import { Newsletter } from '../components/newsletter';

import '../styles/fonts.scss';
import styles from './index.module.scss';
import './index.global.scss';

export const query = graphql`
  query indexPage {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
        logo {
          url
        }
      }
      assets(where: { fileName: "Office1.jpg" }) {
        url
      }
      pageIndices(first: 1) {
        id
        employeeEmployerSections {
          image {
            url
          }
          title
          infoTabs {
            titleTab
            title
            titleHighlight
            text
            actionText
            style
          }
          titleHighlight
          text
          actionText
          style
          infoTiles {
            icon
            title
            text
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

const IndexPage: React.FC<IndexPageProps> = ({ data, location }) => {
  return (
    <div className={styles.wrapper}>
      <TopBar></TopBar>

      <Banner></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        return <InfoSection key={index} {...section} />;
      })}

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
