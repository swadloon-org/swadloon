import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-1-group.treat';

import { SectionModelQuery } from './info-section';
import { InfoSectionType1 } from './info-section-type-1';

type OwnProps = SectionModelQuery;

export const InfoSectionType1Group: React.FC<OwnProps> = (props) => {
  const hasChilds = !!props?.childs.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {hasChilds
        ? props.childs.map((section, index) => {
            return <InfoSectionType1 key={index} {...section} />;
          })
        : null}
    </div>
  );
};
