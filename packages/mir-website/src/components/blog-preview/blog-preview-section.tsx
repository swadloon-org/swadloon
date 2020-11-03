import React from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import { Button } from '../ui/button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Paragraph } from '../ui/paragraph';
import { BlogPreviewTileImage } from './/blog-preview-tile-image';
import * as styleRefs from './blog-preview-section.treat';
import { SECTION_TYPE } from '../../templates/section.template';
import { SectionFragment, FeaturedPostsQuery } from '../../../types/graphql-types';

type OwnProps = SectionFragment & {
  variant: 'preview' | 'full';
};

export const featuredPostsQuery = graphql`
  query FeaturedPosts {
    featuredPosts: allContentfulBlogPost(filter: { featured: { eq: true } }, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
    recentPosts: allContentfulBlogPost(filter: { featured: { ne: true } }, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`;

export const BlogPreviewSection: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const postsQuery = useStaticQuery<FeaturedPostsQuery>(featuredPostsQuery);

  if (props.variant === 'full') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <RenderTitleHighlight title={props.title} titleHighlight={'nouvelles'} className={styles.title} />

          <Paragraph variant="medium" className={styles.paragraph}>
            {props.text?.text}
          </Paragraph>

          <div className={`${styles.fullPreview}`}>
            <div className={`${styles.contentFeaturedPost}`}>
              {postsQuery.featuredPosts.edges
                .filter((edge) => edge.node.node_locale === props.node_locale)
                .map((post) => {
                  return (
                    <BlogPreviewTileImage
                      key={post.node.id}
                      imageUrl={post.node.blogMainImage.file.url}
                      title={post.node.title}
                      actionLabel="Lire l’article"
                    ></BlogPreviewTileImage>
                  );
                })}
            </div>

            <div className={`${styles.contentRecentPost}`}>
              {postsQuery.recentPosts.edges
                .filter((edge) => edge.node.node_locale === props.node_locale)
                .map((post) => {
                  return (
                    <BlogPreviewTileImage
                      key={post.node.id}
                      imageUrl={post.node.blogMainImage.file.url}
                      title={post.node.title}
                      actionLabel="Lire l’article"
                    ></BlogPreviewTileImage>
                  );
                })}
            </div>
          </div>

          {props.link?.page?.route ? (
            <GatsbyLink to={props.link.page?.route}>
              <Button variantType="primaryDefault" size="medium" variant="text">
                {props.link.label}
              </Button>
            </GatsbyLink>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <RenderTitleHighlight title={props.title} titleHighlight={'nouvelles'} className={styles.title} />

        <Paragraph variant="medium" className={styles.paragraph}>
          {props.text?.text}
        </Paragraph>

        <div className={`${styles.recentPreview}`}>
          <div className={`${styles.contentRecentPost}`}>
            {postsQuery.recentPosts.edges
              .filter((edge) => edge.node.node_locale === props.node_locale)
              .map((post) => {
                return (
                  <BlogPreviewTileImage
                    key={post.node.id}
                    imageUrl={post.node.blogMainImage.file.url}
                    title={post.node.title}
                    actionLabel="Lire l’article"
                  ></BlogPreviewTileImage>
                );
              })}
          </div>
        </div>

        {props.link?.page?.route ? (
          <GatsbyLink to={props.link.page?.route}>
            <Button variantType="primaryDefault" size="medium" variant="text">
              {props.link.label}
            </Button>
          </GatsbyLink>
        ) : null}
      </div>
    </div>
  );
};
