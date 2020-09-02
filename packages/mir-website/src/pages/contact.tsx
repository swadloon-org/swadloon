import { graphql } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Root } from '.';
import { ContactPageQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';

export const query = graphql`
  query contactPage {
    bannerImage: file(name: { eq: "ImageOffice03" }) {
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
      contactUsPages(first: 1) {
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
  data: ContactPageQuery;
  location: Location;
}

const ContactPage: React.FC<OwnProps> = (props) => {
  return (
    <Root>
      <ContactPage {...props} />
    </Root>
  );
};

const Contact: React.FC<OwnProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.contactUsPages[0]?.bannerTitle}
      ></BannerSecondary>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
