import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './top-bar.module.scss';
import { TopBarQuery } from '../../types/graphql-types';
import Icon from '../illustrations/Icon/Bars.svg';
import { Label } from './label';

type OwnProps = {};

export const query = graphql`
  query topBar {
    gcms {
      companyMedias {
        logo {
          url
        }
      }
    }
  }
`;

export const TopBar: React.FC<OwnProps> = () => {
  const data = useStaticQuery<TopBarQuery>(query);

  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} />
      <img className={styles.logo} src={data.gcms.companyMedias[0].logo.url} />

      <Label size="small" variant="uppercase" className={styles.language}>
        EN
      </Label>
    </div>
  );
};
