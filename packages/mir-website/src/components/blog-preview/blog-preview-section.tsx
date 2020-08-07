import React, { HTMLAttributes } from 'react';

import styles from './blog-preview-section.module.scss';
import { BlogPreviewTile } from './blog-preview-tile';
import { BlogPreviewTileImage } from './/blog-preview-tile-image';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Button } from '../button';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';

type OwnProps = {
  imageUrl: string;
  paragraphContent: string;
  headingContent: string;
};

export const BlogPreviewSection: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <RenderTitleHighlight title={props.headingContent} titleHighlight={'nouvelles'} className={styles.title} />

        {/* <Heading variant="h3" className={styles.title}>
          {props.headingContent}
        </RenderTitleHighlight> */}

        <Paragraph variant="medium" className={styles.paragraph}>
          {props.paragraphContent}
        </Paragraph>

        <div className={styles.content}>
          <BlogPreviewTileImage
            imageUrl={props.imageUrl}
            title="Conseils pour faire passer vos employés vers le travail à distance"
            subtitle="4 JUILLET 2020"
            actionLabel="Lire l’article"
            className={styles.item}
          ></BlogPreviewTileImage>

          <BlogPreviewTileImage
            imageUrl={props.imageUrl}
            title="Conseils pour faire passer vos employés vers le travail à distance"
            subtitle="4 JUILLET 2020"
            actionLabel="Lire l’article"
            className={styles.item}
          ></BlogPreviewTileImage>

          <BlogPreviewTileImage
            imageUrl={props.imageUrl}
            title="Conseils pour faire passer vos employés vers le travail à distance"
            subtitle="4 JUILLET 2020"
            actionLabel="Lire l’article"
          ></BlogPreviewTileImage>
        </div>

        <Button type="primary" size="medium" variant="text" variantStyle="default" className={styles.button}>
          Toutes les nouvelles
        </Button>
      </div>
    </div>
  );
};
