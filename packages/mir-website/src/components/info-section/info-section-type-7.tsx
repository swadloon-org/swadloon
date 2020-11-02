import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-7.treat';

import { InfoTile } from './info-tile';

type OwnProps = SectionFragment;

export const InfoSectionType7: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        {props.infoTiles.map((infoTile, index) => {
          return (
            <InfoTile
              key={index}
              variant="borderWhite"
              title={infoTile.title}
              illustration={infoTile.illustration}
              text={infoTile.text}
            ></InfoTile>
          );
        })}
      </div>
    </div>
  );
};
