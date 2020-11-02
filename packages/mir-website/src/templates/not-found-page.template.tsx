import React from 'react';
import { useStyles } from 'react-treat';
import { Heading } from '../components/heading';
import { Paragraph } from '../components/paragraph';
import * as stylesRef from './not-found-page.treat';
import { ProjectPageProps } from './page.template';

export const NotFoundPageTemplate: React.FC<ProjectPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <main className={`${styles.wrapper}`}>
      <Heading variant={'h3'} className={`${styles.text}`}>
        Page non trouvée
      </Heading>
      <Paragraph variant="medium" className={`${styles.text}`}>
        Cette page n'existe plus!
      </Paragraph>
    </main>
  );
};
