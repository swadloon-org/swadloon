import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useStyles } from 'react-treat';
import { BlogPageFrQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Newsletter } from '../components/action-section/newsletter';
import { theme } from '../design-system';
import * as stylesRef from '../templates/blog-page.treat';
import { RenderTitleHighlight } from '../components/info-section/info-title-highligh';
import { Paragraph } from '../components/paragraph';
import { Heading } from '../components/heading';
import { BlogPreviewTile } from '../components/blog-preview/blog-preview-tile';
import Img from 'gatsby-image';

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

  const sourcesArticle = [
    data?.articleImageMobile?.childImageSharp?.fluid,
    {
      ...data?.articleImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.allGraphCmsPage[0]?.bannerTitle}></BannerSecondary>

      <div className={styles.container}>
        <div className={styles.content}>
          <RenderTitleHighlight
            title={'Les dernières nouvelles !'}
            titleHighlight={'nouvelles'}
            className={styles.title}
          />

          <Paragraph variant="medium" className={styles.paragraph}>
            Restez informez sur nos dernières actualités et découvrez de trucs et conseils pour mieux gérer vos RH.
          </Paragraph>

          <Heading variant="h3">En vedette</Heading>

          <div className={styles.previewArticle}>
            <Img fluid={sourcesArticle as any} className={styles.previewArticleImage}></Img>
            <GatsbyLink
              to={
                location?.pathname.includes('/en/')
                  ? '/en/news/individu-au-coeur-de-notre-travail'
                  : '/nouvelles/individu-au-coeur-de-notre-travail'
              }
            >
              <BlogPreviewTile
                actionLabel={location?.pathname.includes('/en/') ? 'Read now' : 'Lire'}
                title="Lancement du nouveau site web mirinc.ca"
                className={styles.previewTitle}
              ></BlogPreviewTile>
            </GatsbyLink>
          </div>
        </div>
      </div>
      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};
