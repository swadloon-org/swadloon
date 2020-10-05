import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import { useStyles } from 'react-treat';
import { BlogPageFrQuery } from '../../types/graphql-types';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Newsletter } from '../components/action-section/newsletter';
import { theme } from '../design-system';
import * as stylesRef from './blog-article.treat';
import Layout from '../layouts';
import { PageProps } from 'gatsby';
import { Heading } from '../components/heading';
import { Paragraph } from '../components/paragraph';
import { Label } from '../components/label';
import { LABEL } from 'core-design-system-old';
import { Button } from '../components/button';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
  getMetadataTwitterTags,
} from 'core-react-ui-old';

type Props = {
  data: BlogPageFrQuery;
  location: Location;
} & PageProps<any, { data: BlogPageFrQuery; lang: 'en' | 'fr' }>;

export const BlogPostLayout: React.FC<Props> = (props) => {
  const data = props.pageContext.data;

  console.log((data as any)?.linkedInBanner?.childImageSharp?.fixed);

  return (
    <Layout
      location={props.location}
      logoURL={data.gcms.companyInfos[0]?.logo?.url}
      linkedinPageURL={data.gcms.companyInfos[0]?.linkedinPageUrl}
      facebookPageURL={data.gcms.companyInfos[0]?.facebookPageUrl}
      instagramPageURL={data.gcms.companyInfos[0]?.instagramPageUrl}
      twitterPageURL={data.gcms.companyInfos[0]?.twitterPageUrl}
      pages={data.gcms.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.ARTICLE,
          title: `Lancement du nouveau site web de MIR !`,
          url: `${data.site?.siteMetadata?.siteUrl}${
            props.location?.pathname.includes('/en/')
              ? '/en/nouvelles/individu-au-coeur-de-notre-travail'
              : '/nouvelles/individu-au-coeur-de-notre-travail'
          }`,
          description: `Lancement du nouveau site web de MIR !`,
          site_name: `${data.gcms.companyInfos[0].metadataSiteName}`,
          image: `${data.site?.siteMetadata?.siteUrl}${(data as any)?.linkedInBanner?.childImageSharp?.fixed.src}`,
          lang: props.pageContext.lang,
          locale: props.pageContext.lang,
          localeAlternate: props.pageContext.lang === 'en' ? 'fr' : 'en',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${data.gcms.companyInfos[0].metadataTwitterCreator}`,
          site: `${data.gcms.companyInfos[0].metadataTwitter}`,
        })}
      </Helmet>
      <BlogPostTemplate {...props} />
    </Layout>
  );
};

export const BlogPostTemplate: React.FC<Props> = ({ location, pageContext }) => {
  const styles = useStyles(stylesRef);
  const data: any = pageContext.data;

  const actionSection1 = data.gcms.pages[0].actionSections[0];

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      {/* <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code> */}
      <div className={styles.containerBreadcrumb}>
        <div className={styles.breadcrumb}>
          <GatsbyLink to={location?.pathname.includes('/en/') ? '/en/' : '/'}>
            <Button variant="text" variantType="tertiaryDefault" size="medium" className={styles.link1}>
              {location?.pathname.includes('/en/') ? 'Home' : 'Accueil'}
            </Button>
          </GatsbyLink>
          <Button variant="text" variantType="tertiaryDefault" size="medium" className={styles.separator}>
            /
          </Button>
          <GatsbyLink to={location?.pathname.includes('/en/') ? '/en/news/' : '/nouvelles/'}>
            <Button variant="text" variantType="tertiaryDefault" size="medium" className={styles.link2}>
              {location?.pathname.includes('/en/') ? 'News' : 'Nouvelles'}
            </Button>
          </GatsbyLink>
        </div>
      </div>

      {sources ? (
        <Img fluid={sources as any} className={`${styles.bannerContainer}`}>
          <div className={styles.banner}></div>
        </Img>
      ) : null}

      <div className={styles.articleWrapper}>
        <Label variant={LABEL.smallBoldUppercase} className={styles.label}>
          COMMUNIQUÉ
        </Label>

        <Heading variant="h1" className={styles.title}>
          Lancement du nouveau site web mirinc.ca
        </Heading>

        <Paragraph variant="medium">
          MONTRÉAL, 22 septembre 2020 – MIR, une entreprise québécoise récemment acquis par Groupe Mequaltech, est fière
          de dévoiler, aujourd’hui, sa nouvelle image de marque ainsi que son nouveau site en ligne. Ce projet a été
          rendu possible grâce à la collaboration de Groupe Lakhos, une firme numérique spécialisée dans le domaine
          industriel.
        </Paragraph>

        <Paragraph variant="medium">
          MIR est une firme de recrutement technique qui se positionne comme chef de file dans le recrutement de postes
          spécialisés dans le domaine industriel. L’approche très humaine de MIR peut vous aider à combler les postes
          vacants au sein de votre entreprise et ce, tant pour des emplois issus industriel qu’administratif.
        </Paragraph>

        <Paragraph variant="medium">
          L’objectif derrière la nouvelle image de marque de MIR et de sa vitrine web, est d’offrir aux employeurs ainsi
          qu’aux futurs candidats, une plateforme numérique répondant à leurs besoins, à atteindre leurs attentes et à
          faire rayonner le positionnement de MIR. Pour ce faire, la navigation du site en ligne a été optimisée
          permettant une meilleure expérience utilisateur, et ce, grâce au positionnement adéquat de l’information, mais
          aussi à la performance de l’infrastructure web.
        </Paragraph>

        <Paragraph variant="medium">
          Firme de recrutement spécialisée - L’individu au cœur de notre travail « L’individu au cœur de notre
          travail », n’est pas une simple phrase pour bien paraître, mais bien l’essence même de la firme.
          Inévitablement, cela devait se faire ressentir sur le nouveau site en ligne de MIR. Le succès des entreprises
          est étroitement lié au bon accompagnement des candidats et la clé réside dans une structure d'entreprise
          solide, humaine, efficace et à l'écoute des besoins des candidats.
        </Paragraph>

        <Heading variant="h4">Image de marque adaptée</Heading>

        <Paragraph variant="medium">
          La refonte complète du site web et un rajeunissement de la charte graphique offriront aux utilisateurs une
          expérience numérique unique.
        </Paragraph>

        <Heading variant="h4">Navigation facile</Heading>

        <Paragraph variant="medium">
          En considérant que les candidats font davantage de recherches via le web, ce nouveau site en ligne offre aux
          utilisateurs une interface adaptative qui possède la même efficacité sur un ordinateur, que sur une tablette
          ou encore que sur un appareil mobile.
        </Paragraph>

        <Heading variant="h4">Dépôt de CV facilité</Heading>

        <Paragraph variant="medium">
          Grâce à l’onglet Déposez votre CV, les candidats sont à un clic d’appliquer pour un emploi qui répondra à
          leurs besoins.
        </Paragraph>
      </div>
      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};

export default BlogPostLayout;
