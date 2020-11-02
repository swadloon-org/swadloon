import React from 'react';
import { useStyles } from 'react-treat';

import * as stylesRef from './not-found.treat';
import { ProjectPageProps } from './page.template';
import { Heading } from '../components/ui/heading';
import { Paragraph } from '../components/ui/paragraph';

export const NotFoundTemplate: React.FC<ProjectPageProps> = ({ data, location }) => {
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
