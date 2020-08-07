import React from 'react';
import { SectionModelQuery } from './info-section';
import { InfoSectionType1 } from './info-section-type-1';
import styles from './info-section-type-1-group.module.scss';

type OwnProps = SectionModelQuery;

export const InfoSectionType1Group: React.FC<OwnProps> = (props) => {
  const hasChilds = !!props?.childs.length;

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
