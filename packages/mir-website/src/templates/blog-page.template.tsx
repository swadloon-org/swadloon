import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/blog-page.treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { BlogProps } from '../pages/blog.en';
import { SideBar } from '../components/side-bar';

export const Blog: React.FC<BlogProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const [sideMenuState, setSideMenuState] = useState<'openend' | 'closed'>('closed');

  function onOpenSideMenu() {
    setSideMenuState(sideMenuState === 'openend' ? 'closed' : 'openend');
  }

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar onOpenSideMenu={onOpenSideMenu}></NavBar>
      <SideBar state={sideMenuState} onOpenSideMenu={onOpenSideMenu}></SideBar>

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
