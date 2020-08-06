import { graphql } from 'gatsby';
import React from 'react';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { InfoSection } from '../components/info-section/info-section';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';

import 'normalize.css';
import '../styles/fonts.scss';
import './index.global.scss';
import styles from './index.module.scss';
import { BlogPreviewTile } from '../components/blog-preview/blog-preview-tile';
import { BlogPreviewTileImage } from '../components/blog-preview/blog-preview-tile-image';

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
      <NavBar></NavBar>

      <Banner></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        return <InfoSection key={index} {...section} />;
      })}

      <div style={{ backgroundColor: 'white', padding: '2em' }}>
        <BlogPreviewTile
          title="Conseils pour faire passer vos employés vers le travail à distance"
          subtitle="4 JUILLET 2020"
          actionLabel="Lire l’article"
        ></BlogPreviewTile>
      </div>

      <div style={{ backgroundColor: 'white', padding: '2em' }}>
        <BlogPreviewTileImage
          imageUrl={data.gcms.assets[0].url}
          title="Conseils pour faire passer vos employés vers le travail à distance"
          subtitle="4 JUILLET 2020"
          actionLabel="Lire l’article"
        ></BlogPreviewTileImage>
      </div>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
