import { LABEL } from '@newrade/core-design-system-old';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useStyles } from 'react-treat';
import { Button } from '../ui/button';
import { Heading } from '../ui/heading';
import { Label } from '../ui/label';
import * as styleRefs from './blog-preview-tile.treat';

type OwnProps = {
  className?: string;
  subtitle?: string | null;
  title?: string | null;
  actionLabel?: string | null;
  link: string;
};

export const BlogPreviewTile: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <div className={`${styles.wrapper} ${props.className || ''}`}>
      <Label variant={LABEL.smallBoldUppercase}>{props.subtitle}</Label>
      <Heading variant="h4" className={styles.title}>
        {props.title}
      </Heading>

      <GatsbyLink to={props.link}>
        <Button variant={'text'} size={'small'} variantType={'tertiaryReversed'} className={styles.button}>
          {props.actionLabel}
        </Button>
      </GatsbyLink>
    </div>
  );
};
