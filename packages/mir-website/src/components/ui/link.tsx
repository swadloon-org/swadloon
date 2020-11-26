import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './link.treat';
import { LABEL } from '@newrade/core-design-system-old';
import { Label } from './label';
import { Paragraph } from './paragraph';

type OwnProps = {
  to: string | null;
};

export const Link: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return props.to ? (
    <GatsbyLink to={props.to} className={`${styles.link}`} activeClassName={`${styles.linkActive}`}>
      <Label className={`${styles.label}`} variant={LABEL.smallBold}>
        {props.children}
      </Label>
      <div className={`${styles.active}`}></div>
    </GatsbyLink>
  ) : null;
};

export const MarkdownLink: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return props.to ? (
    <GatsbyLink to={props.to} className={`${styles.link}`} activeClassName={`${styles.linkActive}`}>
      <Paragraph>{props.children}</Paragraph>
      <div className={`${styles.active}`}></div>
    </GatsbyLink>
  ) : null;
};

export const ButtonLink: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return props.to ? (
    <GatsbyLink to={props.to} className={`${styles.link}`} activeClassName={`${styles.linkActive}`}>
      <Label className={`${styles.label}`} variant={LABEL.smallBold}>
        {props.children}
      </Label>
      <div className={`${styles.active}`}></div>
    </GatsbyLink>
  ) : null;
};
