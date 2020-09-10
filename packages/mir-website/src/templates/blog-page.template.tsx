import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/blog-page.treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { BlogProps } from '../pages/blog.en';

export const Blog: React.FC<BlogProps> = ({ data, location }) => {
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
