import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { FeaturedPostsQuery, SectionFragment } from '../../../types/graphql-types';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Button } from '../ui/button';
import { Paragraph } from '../ui/paragraph';
import { BlogPreviewTileImage, BlogPreviewTileImageFeatured } from './/blog-preview-tile-image';
import * as styleRefs from './blog-preview-section.treat';
import { FluidObject } from 'gatsby-image';

type OwnProps = SectionFragment & {
  variant: 'preview' | 'full';
  pageRoute: string;
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
    recentPostsNoFeatured: allContentfulBlogPost(
      filter: { featured: { ne: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
    recentPosts: allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
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

  if (props?.variant === 'full') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <RenderTitleHighlight title={props?.title} titleHighlight={'nouvelles'} className={styles.title} />

          <Paragraph variant="medium" className={styles.paragraph}>
            {props?.text?.text}
          </Paragraph>

          <div className={`${styles.fullPreview}`}>
            {postsQuery?.featuredPosts?.edges
              .filter((edge) => edge.node.node_locale === props?.node_locale)
              .map((post) => {
                const postURL = `${props?.pageRoute}${post?.node.blogSlug}`;

                return (
                  <BlogPreviewTileImageFeatured
                    key={post?.node?.id}
                    fluid={post?.node?.blogMainImage?.fluid as FluidObject}
                    title={post?.node?.title}
                    actionLabel="Lire l’article"
                    link={postURL}
                  ></BlogPreviewTileImageFeatured>
                );
              })}

            <div className={`${styles.contentRecentPost}`}>
              {postsQuery?.recentPostsNoFeatured?.edges
                .filter((edge) => edge.node.node_locale === props?.node_locale)
                .map((post, index) => {
                  if (index < 3) {
                    const postURL = `${props?.pageRoute}${post?.node.blogSlug}`;
                    return (
                      <BlogPreviewTileImage
                        key={post?.node?.id}
                        fluid={post?.node?.blogMainImage?.fluid as FluidObject}
                        title={post?.node?.title}
                        actionLabel="Lire l’article"
                        link={postURL}
                      ></BlogPreviewTileImage>
                    );
                  }
                })}
            </div>
          </div>

          {props?.link?.page?.slug ? (
            <GatsbyLink to={props?.link?.page?.slug}>
              <Button variantType="primaryDefault" size="medium" variant="text">
                {props?.link?.label}
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
        <RenderTitleHighlight title={props?.title} titleHighlight={'nouvelles'} className={styles.title} />

        <Paragraph variant="medium" className={styles.paragraph}>
          {props?.text?.text}
        </Paragraph>

        <div className={`${styles.recentPreview}`}>
          <div className={`${styles.contentRecentPost}`}>
            {postsQuery?.recentPosts?.edges
              .filter((edge) => edge?.node?.node_locale === props?.node_locale)
              .map((post, index) => {
                if (index < 3) {
                  const postURL =
                    props?.node_locale === 'fr-CA'
                      ? `nouvelles/${post?.node?.blogSlug}`
                      : `/en/news/${post?.node?.blogSlug}`;
                  return (
                    <BlogPreviewTileImage
                      key={post?.node?.id}
                      fluid={post?.node?.blogMainImage?.fluid as FluidObject}
                      title={post?.node?.title}
                      link={postURL}
                      actionLabel="Lire l’article"
                    ></BlogPreviewTileImage>
                  );
                }
              })}
          </div>
        </div>

        {props?.link?.page?.slug ? (
          <GatsbyLink to={props?.link.page?.slug} style={{ margin: 'auto' }}>
            <Button variantType="primaryDefault" size="medium" variant="text">
              {props?.link.label}
            </Button>
          </GatsbyLink>
        ) : null}
      </div>
    </div>
  );
};
