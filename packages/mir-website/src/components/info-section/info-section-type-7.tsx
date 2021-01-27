import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-7.treat';
import { InfoTile } from './info-tile';
import { SectionFragment } from '../../../types/graphql-types';
import { SECTION_TYPE } from '../../templates/section.template';

type OwnProps = SectionFragment & SectionProps & {};

export const InfoSectionType7: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        {props?.infoTiles?.map((infoTile, index) => {
          return (
            <InfoTile
              key={index}
              variants={SECTION_TYPE.ACTION_PRIMARY}
              title={infoTile?.title}
              illustration={infoTile?.illustration}
              text={infoTile?.text}
            ></InfoTile>
          );
        })}
      </div>
    </div>
  );
};
