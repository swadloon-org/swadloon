import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import * as styleRefs from './navbar.treat';
import { useStyles } from 'react-treat';

type NavItem<TState = any> = {
  id?: string | null;
  label?: string | null;
} & GatsbyLinkProps<TState>;

type Props = {
  items?: NavItem[];
};

export const NavBar: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {/* LOGO */}
      {props.children}
      {/* ITEMS */}
      {props.items?.map((item) => {
        return (
          <GatsbyLink key={item.id} to={item.to}>
            {item.label}
          </GatsbyLink>
        );
      })}
      {/* LANG SWITCH */}
      EN
    </div>
  );
};
