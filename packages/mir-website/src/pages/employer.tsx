import { graphql } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Root } from '.';
import { EmployerPageQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';

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
      candidatePages(first: 1) {
        bannerTitle
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
      <Employer {...props} />
    </Root>
  );
};

const Employer: React.FC<OwnProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.candidatePages[0]?.bannerTitle}
      ></BannerSecondary>

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
