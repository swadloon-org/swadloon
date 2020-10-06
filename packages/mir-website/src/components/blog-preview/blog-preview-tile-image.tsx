import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './blog-preview-tile-image.treat';
import { BlogPreviewTile } from './blog-preview-tile';
import LazyLoad from 'react-lazyload';

type OwnProps = {
  location: Location;
  imageUrl?: string | null;
  subtitle?: string | null;
  title?: string | null;
  actionLabel?: string | null;
};

export const BlogPreviewTileImage: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {props.imageUrl ? (
        <LazyLoad>
          <img src={props.imageUrl} className={styles.imgPreview} />
        </LazyLoad>
      ) : (
        <div className={styles.imgPreview}></div>
      )}

      <BlogPreviewTile {...props} className={styles.tilePreview} />
    </div>
  );
};
