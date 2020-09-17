import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/blog-page.treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { BlogPageFrQuery } from '../../types/graphql-types';
import { Newsletter } from '../components/newsletter/newsletter';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { theme } from '../design-system';

interface PageProps {
  data: BlogPageFrQuery;
  location: Location;
}

export const Blog: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];
  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.gcms?.pages[0]?.bannerTitle}></BannerSecondary>

      <BlogPreviewSection
        posts={data?.gcms?.pages[0]?.blogSections[0]?.posts}
        text={data?.gcms?.pages[0]?.blogSections[0]?.text}
        title={data?.gcms?.pages[0]?.blogSections[0]?.title}
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>
    </main>
  );
};
