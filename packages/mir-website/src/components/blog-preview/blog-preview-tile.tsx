import { LABEL } from '@newrade/core-design-system-old';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useStyles } from 'react-treat';
import { Button } from '../button';
import { Heading } from '../heading';
import { Label } from '../label';
import * as styleRefs from './blog-preview-tile.treat';

type OwnProps = {
  className?: string;
  location: Location;
  subtitle?: string | null;
  title?: string | null;
  actionLabel?: string | null;
};

export const BlogPreviewTile: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <div className={`${styles.wrapper} ${props.className || ''}`}>
      <Label variant={LABEL.smallBoldUppercase}>{props.subtitle}</Label>
      <Heading variant="h4" className={styles.title}>
        {props.title}
      </Heading>

      <Button size="small" variantType="tertiaryReversed" variant="text" className={styles.button}>
        {props.actionLabel}
      </Button>
    </div>
  );
};
