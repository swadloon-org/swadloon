import { graphql } from 'gatsby';
import React from 'react';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { SectionModelQuery } from '../components/info-section/info-section';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';

import 'normalize.css';
import '../styles/fonts.scss';
import './index.global.scss';
import styles from './index.module.scss';
import { BlogPreviewTile } from '../components/blog-preview/blog-preview-tile';
import { BlogPreviewTileImage } from '../components/blog-preview/blog-preview-tile-image';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';

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

const IndexPage: React.FC<IndexPageProps> = ({ data, location }) => {
  return (
    <div className={styles.wrapper}>
      <NavBar></NavBar>

      <Banner></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        switch (section.type) {
          // case 'type1group': {
          //   return <InfoSectionType1Group />;
          // }
          case 'type2': {
            return <InfoSectionType2 {...section} />;
          }
          default: {
            return null;
          }
        }

        // return <InfoSection key={index} {...section} />;
      })}

      <div>
        <div style={{ backgroundColor: 'white', padding: '2em' }}>
          <BlogPreviewTile
            title="Conseils pour faire passer vos employés vers le travail à distance"
            subtitle="4 JUILLET 2020"
            actionLabel="Lire l’article"
          ></BlogPreviewTile>
        </div>
      </div>

      <BlogPreviewSection
        imageUrl={data.gcms.assets[0].url}
        paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator accumsan, metus ultrices eleifend gravi."
        headingContent="Les dernières nouvelles"
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
