import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-6-group.treat';

import { InfoSectionModelQuery } from './info-section';
import { InfoSectionType6 } from './info-section-type-6';

type OwnProps = InfoSectionModelQuery;

export const InfoSectionType6Group: React.FC<OwnProps> = (props) => {
  const hasChilds = !!props?.childs.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {hasChilds
        ? props.childs.map((section, index) => {
            return <InfoSectionType6 key={index} {...section} />;
          })
        : null}
    </div>
  );
};
