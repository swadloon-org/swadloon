import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '@newrade/core-react-ui';
import { ContentfulSection } from '../../types/graphql-types';
import { TileLink } from './tile-link';
import * as styleRefs from './section-tile-links.treat';

type OwnProps = CommonComponentProps & {
  section: ContentfulSection;
};

export const SectionTileLinks: React.FC<OwnProps> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.gridSwitch}`}>
        {section.subSections?.map((item, index: number) => {
          if (!item) {
            return null;
          }

          return (
            <TileLink key={index} section={item} contentClassName={index % 2 === 0 ? styles.evenTile : ''}></TileLink>
          );
        })}
      </div>
    </div>
  );
};
