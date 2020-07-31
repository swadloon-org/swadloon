import React from 'react';
import { graphql } from 'gatsby';
import { IndexPageQuery } from '../../types/graphql-types';
import { TopBar } from '../components/top-bar';

import styles from './index.module.scss';
import { Paragraph } from '../components/paragraph';

export const query = graphql`
  query indexPage {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
        logo {
          url
        }
      }
    }
  }
`;

interface IndexPageProps {
  data: IndexPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data, location }) => {
  return (
    <div className={styles.wrapper}>
      <TopBar>
        <img src={data.gcms.companyMedias[0].logo.url} />
      </TopBar>{' '}
      <Paragraph variant="small">
        MIR a pour objectif de répondre rapidement et efficacement aux besoins des employeurs dans leur recherche de
        travailleurs qualifiés.
      </Paragraph>
      <Paragraph variant="medium">
        MIR a pour objectif de répondre rapidement et efficacement aux besoins des employeurs dans leur recherche de
        travailleurs qualifiés.
      </Paragraph>
      <Paragraph variant="large">
        MIR a pour objectif de répondre rapidement et efficacement aux besoins des employeurs dans leur recherche de
        travailleurs qualifiés.
      </Paragraph>
    </div>
  );
};

export default IndexPage;
