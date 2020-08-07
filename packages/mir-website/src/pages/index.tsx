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
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';

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
