import { graphql } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Root } from './index.fr';
import { BlogPageQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import * as stylesRef from '../styles/page.treat';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';

export const query = graphql`
  query blogPage {
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
      blogPages(first: 1) {
        bannerTitle
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

interface OwnProps {
  data: BlogPageQuery;
  location: Location;
}

const BlogPage: React.FC<OwnProps> = (props) => {
  return (
    <Root>
      <Blog {...props} />
    </Root>
  );
};

const Blog: React.FC<OwnProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.blogPages[0]?.bannerTitle}
      ></BannerSecondary>

      <BlogPreviewSection
        posts={data?.gcms?.blogPages[0]?.blogSection?.posts}
        text={data?.gcms?.blogPages[0]?.blogSection?.text}
        title={data?.gcms?.blogPages[0]?.blogSection?.title}
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
