import React from 'react';
import { useStyles } from 'react-treat';
import { Button } from '../button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { Paragraph } from '../paragraph';
import { BlogPreviewTileImage } from './/blog-preview-tile-image';
import * as styleRefs from './blog-preview-section.treat';
import { GraphCms_BlogPost, GraphCms_Asset } from '../../../types/graphql-types';

type OwnProps = {
  posts:
    | (Pick<GraphCms_BlogPost, 'id' | 'title' | 'createdAt'> & {
        image?: Pick<GraphCms_Asset, 'url'> | null | undefined;
      })[]
    | undefined;
  text?: string | null;
  title?: string | null;
};

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

        <Button variantType="primaryDefault" size="medium" variant="text">
          Toutes les nouvelles
        </Button>
      </div>
    </div>
  );
};
