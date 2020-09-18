import React from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';
import { BlogSectionsFragment } from '../../../types/graphql-types';
import { Button } from '../button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Paragraph } from '../paragraph';
import { BlogPreviewTileImage } from './/blog-preview-tile-image';
import * as styleRefs from './blog-preview-section.treat';

type OwnProps = BlogSectionsFragment & { showButton: boolean };

export const BlogPreviewSection: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <RenderTitleHighlight title={props.title} titleHighlight={'nouvelles'} className={styles.title} />

        <Paragraph variant="medium" className={styles.paragraph}>
          {props.text}
        </Paragraph>

        <div className={styles.content}>
          {props.posts
            ? props.posts.map((post) => {
                return (
                  <BlogPreviewTileImage
                    key={post.id}
                    imageUrl={post.image?.url}
                    title={post.title}
                    actionLabel="Lire l’article"
                  ></BlogPreviewTileImage>
                );
              })
            : null}
        </div>

        {props.showButton && props.link?.page?.route ? (
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
