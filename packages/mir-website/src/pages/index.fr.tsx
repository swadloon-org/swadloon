import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { TreatProvider, useStyles } from 'react-treat';
import { IndexPageQuery } from '../../types/graphql-types';
import { BannerPrimary } from '../components/banner-primary';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Footer } from '../components/footer';
import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType3 } from '../components/info-section/info-section-type-3';
import { InfoSectionType4 } from '../components/info-section/info-section-type-4';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { ViewportProvider } from '../context/viewport.context';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';
import * as stylesRef from '../styles/page.treat';
import { light, theme } from '../design-system/themes.treat';

export const query = graphql`
  query indexPage {
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      id
      childImageSharp {
        # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
        fluid(quality: 90, maxWidth: 800) {
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
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
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
      indexPages(first: 1) {
        bannerTitle
        bannerSubTitle
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
        blogSection {
          id
          title
          titleHighlight
          text
          actionLabel
          posts {
            id
            createdAt
            title
            image {
              url(transformation: { image: { resize: { width: 300, fit: max } } })
            }
          }
        }
      }
    }
  }
`;

export interface PageProps {
  data: IndexPageQuery;
  location: Location;
}

export const Root: React.FC<{}> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>{props.children}</TreatProvider>
    </ViewportProvider>
  );
};

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <Root>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="fr" />
        <meta name="description" content="Helmet application" />
        <title>MIR - Recrutement technique - Accueil</title>
        <link rel="canonical" href="https://mir-website-master.netlify.com" />
      </Helmet>
      <Index {...props} />
    </Root>
  );
};

const Index: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerPrimary
        imageData={sources}
        title={data?.gcms?.indexPages[0]?.bannerTitle}
        subTitle={data?.gcms?.indexPages[0]?.bannerSubTitle}
      ></BannerPrimary>

      {data?.gcms?.indexPages[0]?.infoSections.map((section, index) => {
        switch (section.type) {
          case 'type1group': {
            return <InfoSectionType1Group key={index} {...section} />;
          }
          case 'type2': {
            return <InfoSectionType2 key={index} align="AlignContentLeft" {...section} />;
          }
          case 'type3': {
            return <InfoSectionType3 key={index} align="AlignContentRight" {...section} />;
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
        posts={data?.gcms?.indexPages[0]?.blogSection?.posts}
        text={data?.gcms?.indexPages[0]?.blogSection?.text}
        title={data?.gcms?.indexPages[0]?.blogSection?.title}
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
