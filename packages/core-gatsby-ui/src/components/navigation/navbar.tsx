import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import * as styleRefs from './navbar.treat';
import { useStyles } from 'react-treat';
import { Box, Cluster, Grid, Center } from '@newrade/core-react-ui';
import { IoMenu } from 'react-icons/io5';

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
    <header className={styles.wrapper}>
      <Center>
        <Cluster
          justifyContent={['space-between', 'space-between', 'space-between']}
          minWidth={'100%'}
          className={styles.container}
        >
          <Box>
            {/* LOGO */}
            {props.children}
          </Box>
          <Cluster gap={'20px'} className={styles.menuWrapper}>
            {/* ITEMS */}
            {props.items?.map((item, index) => {
              if (item.label != null) {
                return (
                  <Box key={index}>
                    <GatsbyLink className={styles.link} key={item.id} to={item.to}>
                      {item.label}
                    </GatsbyLink>
                  </Box>
                );
              }
            })}
            {/* LANG SWITCH */}
            EN
          </Cluster>
        </Cluster>
      </Center>
    </header>
  );
};
