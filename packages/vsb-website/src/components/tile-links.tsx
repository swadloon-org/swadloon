import React from 'react';
import { useStyles } from 'react-treat';
import { ContentfulSection, SectionFragment, ContentfulPage } from '../../types/graphql-types';
import { TileLink } from './tile-link';
import * as styleRefs from './tile-links.treat';

type OwnProps = ContentfulSection;

export const TileLinks: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.gridSwitch}`}>
        {props?.subSections?.map((item: any, index: number) => {
          return <TileLink key={index} {...item}></TileLink>;
        })}
      </div>
    </div>
  );
};
