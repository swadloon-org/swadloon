import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './blog-preview-tile.treat';

import { Heading } from '../heading';
import { Label } from '../label';
import { Button } from '../button';
import { LABEL } from 'core-design-system';

type OwnProps = {
  subtitle: string;
  title: string;
  actionLabel: string;
};

export const BlogPreviewTile: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <div className={styles.wrapper}>
      <Label variant={LABEL.smallBoldUppercase}>{props.subtitle}</Label>
      <Heading variant="h4" className={styles.title}>
        {props.title}
      </Heading>

      <Button size="small" type="tertiaryReversed" variant="text" className={styles.button}>
        {props.actionLabel}
      </Button>
    </div>
  );
};
