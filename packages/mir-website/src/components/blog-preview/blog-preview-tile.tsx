import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './blog-preview-tile.treat';

import { Heading } from '../heading';
import { Label } from '../label';
// import styles from './blog-preview-tile.module.scss';
import { Button } from '../button';

type OwnProps = {
  subtitle: string;
  title: string;
  actionLabel: string;
};

export const BlogPreviewTile: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <div className={styles.wrapper}>
      <Label size="smallUppercase">{props.subtitle}</Label>
      <Heading variant="h4" className={styles.title}>
        {props.title}
      </Heading>

      <Button size="small" type="tertiaryReversed" variant="text" className={styles.button}>
        {props.actionLabel}
      </Button>
    </div>
  );
};
