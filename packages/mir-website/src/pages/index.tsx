import React from 'react';
import { graphql } from 'gatsby';
import { IndexPageQuery } from '../../types/graphql-types';
import { TopBar } from '../components/top-bar';

import '../styles/fonts.scss';
import 'normalize.css';
import styles from './index.module.scss';
import { Paragraph } from '../components/paragraph';
import { Heading } from '../components/heading';
import { Label } from '../components/label';

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
      <div style={{ display: 'grid', gridGap: '1em' }}>
        <Heading variant="h1">Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 4</Heading>
        <Paragraph variant="large">
          MIR a pour objectif de répondre rapidement et efficacement aux besoins des employeurs dans leur recherche de
          travailleurs qualifiés.
        </Paragraph>
        <Paragraph variant="medium">
          MIR a pour objectif de répondre rapidement et efficacement aux besoins des employeurs dans leur recherche de
          travailleurs qualifiés.
        </Paragraph>
        <Paragraph variant="small">
          MIR a pour objectif de répondre rapidement et efficacement aux besoins des employeurs dans leur recherche de
          travailleurs qualifiés.
        </Paragraph>
        <Label size="medium" variant="uppercase">
          Label medium uppercase
        </Label>
        <Label size="medium" variant="bold">
          Label medium bold
        </Label>
        <Label size="medium" variant="regular">
          Label medium regular
        </Label>
        <Label size="small" variant="uppercase">
          Label small Uppercase
        </Label>
        <Label size="small" variant="bold">
          Label small bold
        </Label>
        <Label size="small" variant="regular">
          Label small regular
        </Label>
      </div>
    </div>
  );
};

export default IndexPage;
