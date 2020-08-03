import { graphql } from 'gatsby';
import 'normalize.css';
import React from 'react';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { InfoSection } from '../components/info-section';
import { TopBar } from '../components/top-bar';
import '../styles/fonts.scss';
import styles from './index.module.scss';

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
      assets(where: { fileName: "Office1.jpg" }) {
        url
      }
      pageIndices(first: 1) {
        id
        employeeEmployerSections {
          title
          text
          actionText
          style
          infoTiles {
            icon
            title
            text
          }
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
      <TopBar></TopBar>

      <Banner></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        return (
          <InfoSection
            key={index}
            title={section.title}
            text={section.text}
            actionText={section.actionText}
            variant={section.style.toLowerCase() as any}
            infoTiles={section?.infoTiles as any}
          />
        );
      })}

      {/* <div className={styles.content}>
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
        <InfoTile state="default"></InfoTile>
        <Button size="large" type="secondary" variant="default">
          bonj
        </Button>
        <Label size="small" variant="regular">
          Label small regular
        </Label>
      </div> */}

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
