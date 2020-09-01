import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-6-group.treat';

import { SectionModelQuery } from './info-section';
import { InfoSectionType6 } from './info-section-type-6';

type OwnProps = {};

export const InfoSectionType6Group: React.FC<OwnProps> = (props) => {
  //   const hasChilds = !!props?.childs.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {/* {hasChilds
        ? props.childs.map((section, index) => {
            return <InfoSectionType1 key={index} {...section} />;
          })
        : null} */}

      <InfoSectionType6
        type="type6Primary"
        icon="Factory"
        title="Placement permanent"
        text="Cette solution s’adresse aux entreprises qui recherchent des employés de talents sur une base permanente qui assureront la croissance de leur organisation."
      ></InfoSectionType6>
      <InfoSectionType6
        type="type6Secondary"
        icon="Factory"
        title="Placement permanent"
        text="Cette solution s’adresse aux entreprises qui recherchent des employés de talents sur une base permanente qui assureront la croissance de leur organisation."
      ></InfoSectionType6>
      <InfoSectionType6
        type="type6Tertiary"
        icon="Factory"
        title="Placement permanent"
        text="Cette solution s’adresse aux entreprises qui recherchent des employés de talents sur une base permanente qui assureront la croissance de leur organisation."
      ></InfoSectionType6>
    </div>
  );
};
