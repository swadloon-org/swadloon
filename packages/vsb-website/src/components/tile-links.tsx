import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './tile-links.treat';
import { Box, Center, Stack, Cluster } from '@newrade/core-react-ui';
import { TileLink } from './tile-link';

type OwnProps = SectionFragment;

export const TileLinks: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.gridSwitch}`}>
        {/* ITEMS */}
        {props?.subSections?.map((item: any, index: number) => {
          return <TileLink key={index} {...item}></TileLink>;
        })}
      </div>
    </div>
  );
};
