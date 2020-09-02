import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
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
import { useViewportBreakpoint, useViewportValues, viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';
import * as stylesRef from '../styles/page.treat';
import { light } from '../themes/mir-theme.treat';

export const query = graphql`
  query indexPage {
    bannerImage: file(name: { eq: "ImageOffice05" }) {
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
      <Index {...props} />
    </Root>
  );
};

const Index: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerPrimary
        imageData={data.bannerImage?.childImageSharp?.fluid}
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
            // return <InfoSectionType5 key={index} align="AlignContentLeft" {...section} />;
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
        imageUrl={data.bannerImage?.childImageSharp?.fluid?.src}
        paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator accumsan, metus ultrices eleifend gravi."
        headingContent="Les dernières nouvelles"
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
