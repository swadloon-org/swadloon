import React from 'react';
import { useStyles } from 'react-treat';
import { Heading } from '../src/components/heading';
import { Paragraph } from '../src/components/paragraph';
import * as stylesRef from './not-found-page.treat';

interface PageProps {
  data: any;
  location: Location;
}

export const NotFoundPageTemplate: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <Heading variant={'h3'} className={`${styles.text}`}>
        Not Found
      </Heading>
      <Paragraph variant="medium" className={`${styles.text}`}>
        This page does not exist.
      </Paragraph>
    </div>
  );
};
