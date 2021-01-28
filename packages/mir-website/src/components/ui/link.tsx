import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './link.treat';
import { LABEL } from '@newrade/core-design-system-old';
import { Label } from './label';

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

export const MarkdownLink: React.FC<HTMLAttributes<any> & { children: string; href: string }> = (props) => {
  const styles = useStyles(styleRefs);

  return props.href ? (
    <a href={props.href} className={`${styles.link} ${styles.linkUnderline}`}>
      {props.children}
    </a>
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
