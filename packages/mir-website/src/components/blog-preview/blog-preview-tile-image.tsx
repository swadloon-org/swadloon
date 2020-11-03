import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './blog-preview-tile-image.treat';
import { BlogPreviewTile } from './blog-preview-tile';
import LazyLoad from 'react-lazyload';
import GatsbyImage, { FluidObject } from 'gatsby-image';

type OwnProps = {
  fluid?: FluidObject;
  subtitle?: string | null;
  title?: string | null;
  actionLabel?: string | null;
  link: string;
};

export const BlogPreviewTileImage: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {props.fluid ? (
        <GatsbyImage fluid={props.fluid} className={styles.imgPreview} />
      ) : (
        <div className={styles.imgPreview}></div>
      )}

      <BlogPreviewTile {...props} className={styles.tilePreview} />
    </div>
  );
};

export const BlogPreviewTileImageFeatured: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {props.fluid ? (
        <GatsbyImage fluid={props.fluid} className={styles.imgPreview} />
      ) : (
        // <img src={props.imageUrl} className={styles.imgPreview} />
        <div className={styles.imgPreview}></div>
      )}

      <BlogPreviewTile {...props} className={styles.tilePreview} />
    </div>
  );
};
