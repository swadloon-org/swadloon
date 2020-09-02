import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-7.treat';

// import { SectionModelQuery } from './info-section';
import { InfoTile } from './info-tile';

type OwnProps = {};

export const InfoSectionType7: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <InfoTile variant="borderWhite" title="Salut" illustration="Factory" text="Lorem Ipsum ect blablba"></InfoTile>
      <InfoTile variant="borderWhite" title="Salut" illustration="Factory" text="Lorem Ipsum ect blablba"></InfoTile>
      <InfoTile variant="borderWhite" title="Salut" illustration="Factory" text="Lorem Ipsum ect blablba"></InfoTile>
      <InfoTile variant="borderWhite" title="Salut" illustration="Factory" text="Lorem Ipsum ect blablba"></InfoTile>
    </div>
  );
};
