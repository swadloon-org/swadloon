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
import * as stylesRef from '../styles/blog.treat';

export const query = graphql`
  query BlogPage {
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

const BlogPage: React.FC<IndexPageProps> = (props) => {
  return (
    <TreatProvider theme={light}>
      <Blog {...props} />
    </TreatProvider>
  );
};

const Blog: React.FC<IndexPageProps> = ({ data, location }) => {
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

export default BlogPage;
