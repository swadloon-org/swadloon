import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './link.treat';

type OwnProps = {
  to: string;
};

export const Link: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <GatsbyLink to={props.to} className={`${styles.link}`} activeClassName={`${styles.active}`}>
      {props.children}
    </GatsbyLink>
  );
};
