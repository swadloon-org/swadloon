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

import { mirTheme } from '../themes/mir-theme.treat';
import * as stylesRef from './index.treat';

import '../styles/font-faces.styles.css';

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

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <TreatProvider theme={mirTheme}>
      <App {...props} />
    </TreatProvider>
  );
};

const App: React.FC<IndexPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <Banner></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        switch (section.type) {
          case 'type1group': {
            return <InfoSectionType1Group key={index} {...section} />;
          }
          case 'type2': {
            return <InfoSectionType2 key={index} {...section} />;
          }
          case 'type3': {
            return <InfoSectionType3 key={index} {...section} />;
          }
          case 'type4': {
            return <InfoSectionType4 key={index} {...section} />;
          }
          default: {
            return null;
          }
        }
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
