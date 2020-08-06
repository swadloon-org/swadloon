import React, { HTMLAttributes } from 'react';
import { BlogPreviewTile } from './blog-preview-tile';
import styles from './blog-preview-tile-image.module.scss';

type OwnProps = {
  imageUrl: string;
  subtitle: string;
  title: string;
  actionLabel: string;
};

export const BlogPreviewTileImage: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.imageUrl} className={styles.imgPreview} />

      <BlogPreviewTile {...props} className={styles.tilePreview} />
    </div>
  );
};
