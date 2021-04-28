import GatsbyBackgroundImage from 'gatsby-background-image';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlogPreviewTile } from './blog-preview-tile';
import * as styleRefs from './blog-preview-tile-image.treat';

type OwnProps = {
  fluid?: FluidObject | null;
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
        <GatsbyBackgroundImage fluid={props.fluid} className={styles.imgPreview} />
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
    <div className={styles.wrapperBig}>
      {props.fluid ? (
        <GatsbyBackgroundImage fluid={props.fluid} className={styles.imgPreviewBig} />
      ) : (
        <div className={styles.imgPreviewBig}></div>
      )}
      <BlogPreviewTile {...props} className={styles.tilePreview} />
    </div>
  );
};
