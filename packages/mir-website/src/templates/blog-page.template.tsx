import React from 'react';
import { useStyles } from 'react-treat';
import { BlogPageFrQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Newsletter } from '../components/action-section/newsletter';
import { theme } from '../design-system';
import * as stylesRef from '../templates/blog-page.treat';

interface PageProps {
  data: BlogPageFrQuery;
  location: Location;
}

export const Blog: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const actionSection1 = data.allGraphCmsPage[0].actionSections[0];

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];
  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.allGraphCmsPage[0]?.bannerTitle}></BannerSecondary>

      <BlogPreviewSection showButton={false} {...data?.allGraphCmsPage[0]?.blogSections[0]}></BlogPreviewSection>

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};
