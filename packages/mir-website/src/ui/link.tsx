import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './link.treat';
import { Label } from '../components/label';
import { LABEL } from 'core-design-system-old';

type OwnProps = {
  to: string;
};

export const Link: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <GatsbyLink
      to={props.to}
      className={`${styles.link}`}
      activeClassName={`${styles.linkActive}`}
      partiallyActive={props.children === 'Nouvelles' ? true : props.children === 'News' ? true : false}
    >
      <Label className={`${styles.label}`} variant={LABEL.smallBold}>
        {props.children}
      </Label>
      <div className={`${styles.active}`}></div>
    </GatsbyLink>
  );
};

export const ButtonLink: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <GatsbyLink to={props.to} className={`${styles.link}`} activeClassName={`${styles.linkActive}`}>
      <Label className={`${styles.label}`} variant={LABEL.smallBold}>
        {props.children}
      </Label>
      <div className={`${styles.active}`}></div>
    </GatsbyLink>
  );
};
